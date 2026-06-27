# AgentFrame

[中文说明](README.zh-CN.md)

![validate](https://github.com/JunyanKang/agentframe/actions/workflows/validate.yml/badge.svg)
![license](https://img.shields.io/badge/license-MIT-blue.svg)
![release](https://img.shields.io/github/v/release/JunyanKang/agentframe?label=release)

Engineering guardrails for Codex-driven software development.

AgentFrame is a Codex-native toolkit of installable software-engineering skills plus an optional repository governance starter kit. It helps Codex inspect first, choose the right role, keep changes narrow, validate work, and stop or hand off when architecture, API, security, release, migration, or other guarded surfaces appear.

Use the skills in any repository. Add the optional framework and starter kit only when a long-lived project needs durable rules, decisions, risk tracking, release notes, and project memory.

## Before / After

| Without AgentFrame | With AgentFrame |
| --- | --- |
| Vague requests can expand into unrelated edits. | Skills enforce inspect-first, smallest-diff behavior. |
| Reviews, tests, docs, and stop conditions are easy to skip. | Prompts, golden scenarios, and validators make expected behavior explicit. |
| All guidance must live in static `AGENTS.md` text. | Role-specific skills, routing, update tooling, and optional project memory reinforce the workflow. |

## Why AgentFrame

- **Installable skills first**: use AgentFrame from Codex without copying a framework into every project.
- **Clear engineering roles**: implementation, testing, review, planning, documentation, API, config, CI, release, security, dependency, migration, observability, frontend experience, and project memory each have a defined owner.
- **Lightweight by default**: small tasks can stay in the Lite lane; heavier governance is reserved for guarded surfaces.
- **Maintained like a product**: validation, golden scenarios, update/uninstall tooling, changelog discipline, and GitHub Actions are part of the repo.
- **Optional project memory**: long-lived repositories can initialize neutral project-state files from `starter-kit/.codex/project/`.

## What It Provides

```text
skills/agentframe-*          Installable Codex skills
.codex/framework/            Optional reusable governance, routing, templates, checklists
starter-kit/.codex/project/  Neutral project-state starter files for adopter repositories
scripts/                     Validation and skill lifecycle tooling
```

The skills cover the normal software lifecycle:

- **Delivery flow**: architecture, planning, specification, implementation, review, testing, refactoring, documentation, and project memory.
- **Guarded surfaces**: API, configuration, data model, compatibility, reproducibility, governance, CI, release, security, dependencies, observability, migration, plugin architecture, and frontend experience.
- **Operational safety**: each skill defines when to use it, when to skip it, required outputs, handoff rules, failure handling, quality gates, and completion criteria.

## 60-Second Start

Install the Core profile:

```sh
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo JunyanKang/agentframe \
  --path skills/agentframe-implementer skills/agentframe-tester skills/agentframe-reviewer skills/agentframe-project-memory
```

Restart Codex, then ask:

```text
$agentframe-implementer
Fix one small issue only. Inspect instructions, affected callers, and tests first. Change the smallest set of files. Add the narrowest meaningful test. Stop if the fix requires API, architecture, dependency, config, data-model, migration, release, security, or unrelated-file changes.
```

## Install, Update, Or Uninstall

Choose the smallest profile that matches the repository:

| Profile | Best For | Includes |
| --- | --- | --- |
| Core | Small projects and narrow daily work | implementation, testing, review, project memory |
| Standard | Normal product development | Core plus architecture, planning, specification, documentation |
| Full | Long-lived repositories with guarded surfaces | Standard plus CI, release, security, dependency, migration, observability, frontend experience, source-of-truth guardians |

For a full install or safe update:

```sh
curl -fsSL https://raw.githubusercontent.com/JunyanKang/agentframe/main/scripts/update-agentframe-skills.py \
  -o /tmp/update-agentframe-skills.py
python3 /tmp/update-agentframe-skills.py --ref latest
```

Useful options:

- `--dry-run`: preview install, update, or uninstall changes.
- `--dest <path>`: use a non-default skills directory.
- `--keep-backups`: keep generated backups after success.
- `--ref <latest|tag-or-branch>`: install the latest release, a fixed tag, or a branch.
- `--uninstall`: remove installed local `agentframe-*` skills.

Uninstall:

```sh
python3 /tmp/update-agentframe-skills.py --uninstall
```

Restart Codex after installing, updating, or uninstalling skills.

## See It In Action

| Need | Start Here |
| --- | --- |
| Understand the behavior change | [docs/DEMO.md](docs/DEMO.md) |
| Copy ready-to-use prompts | [docs/USAGE_PATTERNS.md](docs/USAGE_PATTERNS.md) |
| Pick individual skill paths or adoption profile | [docs/ADOPTION.md](docs/ADOPTION.md) |
| Improve AgentFrame after a real failure | [docs/FEEDBACK_LOOP.md](docs/FEEDBACK_LOOP.md) |

## Triggering Policy

Core delivery skills can be invoked implicitly by normal Codex requests, but explicit `$agentframe-*` prompts are the most predictable. Narrow guardian skills are best invoked explicitly or by routed handoff when a guarded surface appears.

## Adopt The Optional Framework

Do not copy `.codex/` just to use AgentFrame skills. Install the skills first.

For a long-lived project that needs durable governance:

1. Copy reusable framework assets from `.codex/framework/`.
2. Initialize project state from `starter-kit/.codex/project/`.
3. Replace every `Unknown - requires human input` entry with confirmed target-repository facts.
4. Do not copy AgentFrame's own `.codex/project/` files as facts for another repository.

## FAQ

### Why not just use AGENTS.md?

`AGENTS.md` provides static repository instructions. AgentFrame adds installable role-specific skills, routing rules, validators, golden scenarios, source-of-truth synchronization, update tooling, and optional project memory.

### Do I need the optional framework?

Usually no. Start with installed skills. Add `.codex/framework/` and `starter-kit/.codex/project/` only when the repository needs persistent project memory, release policy, risk tracking, architecture decisions, or team workflow rules.

## Maintainers

- Canonical installable skills live under `skills/agentframe-*`.
- Framework-local reference copies live under `.codex/framework/skills/*`.
- Substantive skill edits must update both sides unless intentional drift is documented in `.codex/framework/SOURCE_OF_TRUTH.md`.
- Run validation before publishing:

```sh
npm run validate
```

Current release: see [GitHub Releases](https://github.com/JunyanKang/agentframe/releases). The install/update command resolves it with `--ref latest`.

## License

MIT.
