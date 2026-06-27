# AgentFrame

[中文说明](README.zh-CN.md)

AgentFrame is a Codex-native software engineering framework for turning an AI coding assistant into a disciplined project collaborator. It packages installable Codex skills plus an optional repository governance layer so Codex can plan, implement, review, test, document, and release software with consistent engineering gates.

Use AgentFrame when you want Codex to behave less like a one-off code generator and more like a software team member that respects architecture, source-of-truth policy, validation, compatibility, release process, and long-lived project memory.

## Why AgentFrame

- **Codex-installable skills first**: use AgentFrame in any project without copying a framework into the repository.
- **Optional project governance**: add `.codex/` only for long-lived repositories that need durable local rules, decisions, templates, and memory.
- **Explicit engineering ownership**: architecture, implementation, review, testing, API, config, data, compatibility, CI, release, security, dependencies, migration, observability, and frontend experience each have clear boundaries.
- **Source-of-truth enforcement**: installable skills and framework-local reference copies are synchronized by validation.
- **Release-grade maintenance**: the repository includes validators, GitHub Actions, changelog discipline, update tooling, and version coherence checks.
- **Safe skill updates**: installed `agentframe-*` skills can be backed up, replaced, validated, and rolled back with one script.

## What It Provides

AgentFrame has two layers:

```text
skills/agentframe-*          Installable Codex skills
.codex/framework/            Reusable governance, routing, templates, checklists
.codex/project/              Project-local state for repositories that adopt the framework
scripts/                     Validation and skill update tooling
```

The installable skills cover the full software development lifecycle:

- **Delivery flow**: architecture, planning, specification, implementation, review, testing, refactoring, documentation, and project memory.
- **Engineering guardians**: API, configuration, data model, compatibility, reproducibility, source-of-truth governance, CI, release, security, dependencies, observability, migration, plugin architecture, and frontend experience.
- **Operational safety**: every skill defines when to use it, when not to use it, required outputs, handoff rules, failure handling, quality gates, and completion criteria.

See [docs/ADOPTION.md](docs/ADOPTION.md) for individual skill paths and adoption details.

Use [docs/USAGE_PATTERNS.md](docs/USAGE_PATTERNS.md) when you want concrete prompts for feature work, bug fixes, reviews, release checks, and project memory updates.

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

## See It In Action

- Use [docs/DEMO.md](docs/DEMO.md) to understand the intended before/after behavior.
- Use [docs/USAGE_PATTERNS.md](docs/USAGE_PATTERNS.md) to copy ready-to-use prompts.
- Use [docs/FEEDBACK_LOOP.md](docs/FEEDBACK_LOOP.md) to improve AgentFrame after real failures.

## Install, Update, Or Uninstall

Choose an adoption profile:

- **Core**: focused implementation, testing, review, and project memory for small projects.
- **Standard**: Core plus architecture, planning, specification, and documentation for normal product development.
- **Full**: the complete governance suite, including CI, release, security, dependency, migration, observability, frontend experience, and source-of-truth guardians.

For Full installation or update, run the update script. It installs AgentFrame if no local AgentFrame skills exist, and updates them safely if they already do.

```sh
curl -fsSL https://raw.githubusercontent.com/JunyanKang/agentframe/v0.6.1/scripts/update-agentframe-skills.py \
  -o /tmp/update-agentframe-skills.py
python3 /tmp/update-agentframe-skills.py --ref v0.6.1
```

Restart Codex after installing or updating skills.

Useful options:

- `--dry-run`: preview the install/update/remove plan.
- `--dest <path>`: update a non-default skills directory.
- `--keep-backups`: keep the backup after a successful update.
- `--ref <tag-or-branch>`: install from a release tag or from `main`.
- `--uninstall`: remove installed `agentframe-*` skills from the selected skills directory.

For selective installs, use Codex's skill installer with the paths documented in [docs/ADOPTION.md](docs/ADOPTION.md).

To uninstall AgentFrame skills:

```sh
python3 /tmp/update-agentframe-skills.py --uninstall
```

The uninstall command removes only local `agentframe-*` skill directories. It does not delete project-local `.codex/` governance files.

## FAQ

### Why not just use AGENTS.md?

`AGENTS.md` provides static repository instructions. AgentFrame provides installable role-specific skills, routing, validators, golden scenarios, source-of-truth synchronization, update tooling, and optional project memory.

## Triggering Policy

Core delivery skills are available for implicit invocation because users naturally ask for implementation, review, testing, specification, and documentation work in plain language. Narrow guardian skills are intended primarily for explicit `$agentframe-*` prompts or routed handoffs when a guarded surface is affected.

## Adopt The Optional Framework

Do not copy `.codex/` just to use AgentFrame skills. Install the skills first.

Copy `.codex/` into a repository only when the project needs durable governance:

- architecture decisions and ADRs
- source-of-truth policy
- routing rules for future Codex sessions
- reusable templates
- project memory, risks, release notes, and testing policy

After copying `.codex/`, replace project-local unknowns in `.codex/project/` with confirmed facts from the target repository.

## Canonical Skill Source

`skills/agentframe-*` are the canonical installable skill definitions. `.codex/framework/skills/*` are framework-local reference copies for repositories that adopt the optional governance framework.

Substantive skill edits must update both sides unless intentional drift is documented in `.codex/framework/SOURCE_OF_TRUTH.md` or the final maintenance report.

## Validation

Run the repository validation command before publishing or after changing skills, templates, framework files, update tooling, or routing:

```sh
npm run validate
```

The validator checks:

- required framework and skill sections
- installable skill frontmatter
- `agents/openai.yaml` prompt quality
- installable/framework-local skill synchronization
- valid inter-skill references
- version coherence across release files
- template and checklist structure
- update-script documentation

Codex skill validation can also be run for installed skill folders:

```sh
python3 ~/.codex/skills/.system/skill-creator/scripts/quick_validate.py ~/.codex/skills/<skill-name>
```

## Maintenance Workflow

For AgentFrame itself:

1. Update the canonical installable skill under `skills/agentframe-*`.
2. Update the matching framework-local copy under `.codex/framework/skills/*`.
3. Update routing, adoption docs, changelog, and version metadata when the public surface changes.
4. Run `npm run validate`.
5. Commit, tag, and publish a release when the change affects public install/update behavior.

## Version

Current release: 0.6.1.

## License

MIT.
