#!/usr/bin/env python3
"""Install, update, or uninstall AgentFrame Codex skills.

The stock Codex skill installer aborts when a destination directory already
exists. This script provides the lifecycle surface AgentFrame needs:

1. Fetch AgentFrame from GitHub.
2. Discover every skills/agentframe-* folder with a SKILL.md.
3. Stage and validate the downloaded skills.
4. Back up existing local agentframe-* skills.
5. Replace the full local AgentFrame skill set.
6. Validate the installed result and roll back on failure.

For uninstall, the script backs up and removes only local agentframe-* skills
from the selected destination. It does not delete project-local .codex files.
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
import zipfile


DEFAULT_REPO = "JunyanKang/agentframe"
DEFAULT_REF = "main"
SKILL_PREFIX = "agentframe-"


class UpdateError(Exception):
    pass


@dataclass
class Args:
    repo: str
    ref: str
    dest: Path
    method: str
    dry_run: bool
    keep_backups: bool
    no_validate: bool
    uninstall: bool


def codex_home() -> Path:
    return Path(os.environ.get("CODEX_HOME", Path.home() / ".codex"))


def default_dest() -> Path:
    return codex_home() / "skills"


def parse_args(argv: list[str]) -> Args:
    parser = argparse.ArgumentParser(
        description="Install, update, or uninstall local AgentFrame Codex skills."
    )
    parser.add_argument("--repo", default=DEFAULT_REPO, help="GitHub owner/repo")
    parser.add_argument("--ref", default=DEFAULT_REF, help="Git ref, tag, or branch")
    parser.add_argument(
        "--dest",
        type=Path,
        default=default_dest(),
        help="Destination skills directory; default: $CODEX_HOME/skills",
    )
    parser.add_argument(
        "--method",
        choices=["auto", "download", "git"],
        default="auto",
        help="Fetch method; default: auto",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would change without modifying installed skills.",
    )
    parser.add_argument(
        "--keep-backups",
        action="store_true",
        help="Keep the backup directory after a successful update.",
    )
    parser.add_argument(
        "--no-validate",
        action="store_true",
        help="Skip quick_validate.py; basic SKILL.md checks still run.",
    )
    parser.add_argument(
        "--uninstall",
        action="store_true",
        help="Remove installed agentframe-* skills from --dest; does not remove project .codex files.",
    )
    ns = parser.parse_args(argv)
    return Args(
        repo=ns.repo,
        ref=ns.ref,
        dest=ns.dest.expanduser(),
        method=ns.method,
        dry_run=ns.dry_run,
        keep_backups=ns.keep_backups,
        no_validate=ns.no_validate,
        uninstall=ns.uninstall,
    )


def run(cmd: list[str], cwd: Path | None = None) -> str:
    result = subprocess.run(
        cmd,
        cwd=str(cwd) if cwd else None,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    if result.returncode != 0:
        detail = result.stderr.strip() or result.stdout.strip() or "command failed"
        raise UpdateError(f"{' '.join(cmd)} failed: {detail}")
    return result.stdout


def safe_extract(zip_file: zipfile.ZipFile, dest: Path) -> None:
    dest_root = dest.resolve()
    for info in zip_file.infolist():
        extracted = (dest / info.filename).resolve()
        if extracted == dest_root or dest_root in extracted.parents:
            continue
        raise UpdateError("Downloaded archive contains files outside destination")
    zip_file.extractall(dest)


def request_bytes(url: str) -> bytes:
    headers = {"User-Agent": "agentframe-skill-update"}
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=60) as response:
            return response.read()
    except urllib.error.HTTPError as exc:
        raise UpdateError(f"download failed: HTTP {exc.code}") from exc
    except urllib.error.URLError as exc:
        raise UpdateError(f"download failed: {exc.reason}") from exc


def parse_repo(repo: str) -> tuple[str, str]:
    if "://" in repo:
        parsed = urllib.parse.urlparse(repo)
        parts = [p for p in parsed.path.split("/") if p]
        if parsed.netloc != "github.com" or len(parts) < 2:
            raise UpdateError("--repo URL must point at github.com/<owner>/<repo>")
        return parts[0], parts[1].removesuffix(".git")
    parts = [p for p in repo.split("/") if p]
    if len(parts) != 2:
        raise UpdateError("--repo must be in owner/repo format")
    return parts[0], parts[1].removesuffix(".git")


def fetch_by_download(owner: str, repo: str, ref: str, tmp: Path) -> Path:
    url = f"https://codeload.github.com/{owner}/{repo}/zip/{ref}"
    archive = tmp / "repo.zip"
    archive.write_bytes(request_bytes(url))
    with zipfile.ZipFile(archive) as zip_file:
        safe_extract(zip_file, tmp)
        top_levels = {name.split("/")[0] for name in zip_file.namelist() if name}
    if len(top_levels) != 1:
        raise UpdateError("Unexpected GitHub archive layout")
    return tmp / next(iter(top_levels))


def fetch_by_git(owner: str, repo: str, ref: str, tmp: Path) -> Path:
    repo_dir = tmp / "repo"
    https_url = f"https://github.com/{owner}/{repo}.git"
    try:
        run(
            [
                "git",
                "clone",
                "--filter=blob:none",
                "--depth",
                "1",
                "--sparse",
                "--single-branch",
                "--branch",
                ref,
                https_url,
                str(repo_dir),
            ]
        )
    except UpdateError:
        run(
            [
                "git",
                "clone",
                "--filter=blob:none",
                "--depth",
                "1",
                "--sparse",
                "--single-branch",
                https_url,
                str(repo_dir),
            ]
        )
        run(["git", "-C", str(repo_dir), "checkout", ref])
    run(["git", "-C", str(repo_dir), "sparse-checkout", "set", "skills"])
    return repo_dir


def fetch_repo(args: Args, tmp: Path) -> Path:
    owner, repo = parse_repo(args.repo)
    if args.method in ("auto", "download"):
        try:
            return fetch_by_download(owner, repo, args.ref, tmp)
        except UpdateError:
            if args.method == "download":
                raise
    return fetch_by_git(owner, repo, args.ref, tmp)


def discover_agentframe_skills(repo_root: Path) -> list[Path]:
    skills_root = repo_root / "skills"
    if not skills_root.is_dir():
        raise UpdateError("Repository does not contain a skills/ directory")
    skills = sorted(
        path
        for path in skills_root.iterdir()
        if path.is_dir()
        and path.name.startswith(SKILL_PREFIX)
        and (path / "SKILL.md").is_file()
    )
    if not skills:
        raise UpdateError("No agentframe-* skills found in repository")
    return skills


def quick_validator() -> Path | None:
    candidate = codex_home() / "skills/.system/skill-creator/scripts/quick_validate.py"
    return candidate if candidate.is_file() else None


def basic_validate_skill(skill_dir: Path) -> None:
    skill_md = skill_dir / "SKILL.md"
    if not skill_md.is_file():
        raise UpdateError(f"{skill_dir.name}: missing SKILL.md")
    text = skill_md.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        raise UpdateError(f"{skill_dir.name}: SKILL.md must start with frontmatter")
    frontmatter_end = text.find("\n---", 4)
    if frontmatter_end == -1:
        raise UpdateError(f"{skill_dir.name}: SKILL.md frontmatter is not closed")
    frontmatter = text[4:frontmatter_end]
    if f"name: {skill_dir.name}" not in frontmatter:
        raise UpdateError(f"{skill_dir.name}: frontmatter name does not match folder")
    if "description:" not in frontmatter:
        raise UpdateError(f"{skill_dir.name}: frontmatter description missing")


def validate_skill(skill_dir: Path, no_validate: bool) -> None:
    basic_validate_skill(skill_dir)
    validator = quick_validator()
    if no_validate or validator is None:
        return
    run([sys.executable, str(validator), str(skill_dir)])


def stage_skills(skill_sources: list[Path], stage_root: Path, no_validate: bool) -> list[Path]:
    staged = []
    for src in skill_sources:
        dest = stage_root / src.name
        shutil.copytree(src, dest)
        validate_skill(dest, no_validate)
        staged.append(dest)
    return staged


def installed_agentframe_skills(dest: Path) -> list[Path]:
    if not dest.exists():
        return []
    return sorted(
        path
        for path in dest.iterdir()
        if path.is_dir() and path.name.startswith(SKILL_PREFIX)
    )


def copy_existing_to_backup(existing: list[Path], backup_root: Path) -> None:
    backup_root.mkdir(parents=True, exist_ok=True)
    for src in existing:
        shutil.copytree(src, backup_root / src.name)


def restore_backup(dest: Path, backup_root: Path, new_names: list[str]) -> None:
    for name in new_names:
        target = dest / name
        if target.exists():
            shutil.rmtree(target)
    if backup_root.exists():
        for backup in backup_root.iterdir():
            target = dest / backup.name
            if target.exists():
                shutil.rmtree(target)
            shutil.copytree(backup, target)


def install_staged(dest: Path, staged: list[Path], backup_root: Path, dry_run: bool) -> None:
    existing = installed_agentframe_skills(dest)
    new_names = [skill.name for skill in staged]
    stale = [path.name for path in existing if path.name not in new_names]
    print(f"Destination: {dest}")
    print(f"New AgentFrame skills: {len(staged)}")
    print(f"Existing AgentFrame skills: {len(existing)}")
    if stale:
        print(f"Stale local AgentFrame skills to remove: {', '.join(stale)}")
    if dry_run:
        for skill in staged:
            status = "update" if (dest / skill.name).exists() else "install"
            print(f"DRY-RUN {status}: {skill.name}")
        return

    dest.mkdir(parents=True, exist_ok=True)
    copy_existing_to_backup(existing, backup_root)
    try:
        for old in existing:
            shutil.rmtree(old)
        for skill in staged:
            shutil.copytree(skill, dest / skill.name)
    except Exception as exc:
        restore_backup(dest, backup_root, new_names)
        raise UpdateError(f"install failed and backup was restored: {exc}") from exc


def uninstall_agentframe_skills(dest: Path, backup_root: Path, dry_run: bool) -> int:
    existing = installed_agentframe_skills(dest)
    print(f"Destination: {dest}")
    print(f"Installed AgentFrame skills: {len(existing)}")
    if not existing:
        print("No installed AgentFrame skills found.")
        return 0

    if dry_run:
        for skill in existing:
            print(f"DRY-RUN uninstall: {skill.name}")
        return len(existing)

    copy_existing_to_backup(existing, backup_root)
    try:
        for skill in existing:
            shutil.rmtree(skill)
    except Exception as exc:
        restore_backup(dest, backup_root, [])
        raise UpdateError(f"uninstall failed and backup was restored: {exc}") from exc
    return len(existing)


def validate_installed(dest: Path, names: list[str], no_validate: bool, backup_root: Path) -> None:
    try:
        for name in names:
            validate_skill(dest / name, no_validate)
    except Exception as exc:
        restore_backup(dest, backup_root, names)
        raise UpdateError(f"installed validation failed and backup was restored: {exc}") from exc


def main(argv: list[str]) -> int:
    args = parse_args(argv)
    tmp = Path(tempfile.mkdtemp(prefix="agentframe-update-"))
    backup_root = args.dest / ".agentframe-backups" / time.strftime("%Y%m%d-%H%M%S")
    try:
        if args.uninstall:
            removed = uninstall_agentframe_skills(args.dest, backup_root, args.dry_run)
            if not args.dry_run and not args.keep_backups and backup_root.exists():
                shutil.rmtree(backup_root)
            if not args.dry_run:
                print(f"Uninstalled {removed} AgentFrame skills.")
                if removed:
                    print("Restart Codex to remove AgentFrame skills from the active session.")
            return 0

        repo_root = fetch_repo(args, tmp)
        skill_sources = discover_agentframe_skills(repo_root)
        stage_root = tmp / "staged"
        stage_root.mkdir()
        staged = stage_skills(skill_sources, stage_root, args.no_validate)
        install_staged(args.dest, staged, backup_root, args.dry_run)
        if not args.dry_run:
            validate_installed(args.dest, [skill.name for skill in staged], args.no_validate, backup_root)
            if not args.keep_backups and backup_root.exists():
                shutil.rmtree(backup_root)
            print(f"Updated {len(staged)} AgentFrame skills from {args.repo}@{args.ref}")
            print("Restart Codex to pick up updated skills.")
        return 0
    except UpdateError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 1
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
