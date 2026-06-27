# AgentFrame

AgentFrame is a reusable software engineering skill set for Codex. It gives Codex installable skills for architecture, planning, specification, implementation, review, testing, refactoring, documentation, project memory, design governance, plugin architecture, API governance, configuration, compatibility, data model governance, reproducibility, source-of-truth governance, CI automation, release management, security, dependencies, observability, migrations, and frontend experience quality.

It also includes an optional `.codex/` project governance framework for long-lived repositories. Use the skills first; deploy the framework only when a project needs durable local rules and project memory.

## Installable Codex Skills
Install one or more skills from these GitHub paths:

```sh
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo JunyanKang/agentframe \
  --path \
  skills/agentframe-architect \
  skills/agentframe-planner \
  skills/agentframe-specification \
  skills/agentframe-implementer \
  skills/agentframe-reviewer \
  skills/agentframe-tester \
  skills/agentframe-refactor \
  skills/agentframe-documenter \
  skills/agentframe-project-memory \
  skills/agentframe-design-guardian \
  skills/agentframe-plugin-architect \
  skills/agentframe-api-guardian \
  skills/agentframe-configuration-manager \
  skills/agentframe-compatibility-manager \
  skills/agentframe-data-model-guardian \
  skills/agentframe-reproducibility-guardian \
  skills/agentframe-governance-guardian \
  skills/agentframe-ci-guardian \
  skills/agentframe-release-manager \
  skills/agentframe-security-guardian \
  skills/agentframe-dependency-guardian \
  skills/agentframe-observability-guardian \
  skills/agentframe-migration-guardian \
  skills/agentframe-frontend-experience-guardian
```

Restart Codex after installing.

## Update Installed Skills
Use the update script when AgentFrame skills are already installed locally. It backs up existing `agentframe-*` skills, replaces the full suite from GitHub, validates the result, and rolls back on failure.

```sh
python3 scripts/update-agentframe-skills.py --ref v0.5.1
```

To update directly from the latest `main`:

```sh
python3 scripts/update-agentframe-skills.py
```

Useful options:

- `--dry-run`: show the install/update/remove plan without changing local skills.
- `--dest <path>`: update a non-default skills directory.
- `--keep-backups`: keep the backup directory after a successful update.

Restart Codex after updating.

Direct GitHub skill links:

- [`agentframe-architect`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-architect): architecture, module boundaries, interfaces, and tradeoffs before coding.
- [`agentframe-planner`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-planner): split goals into reviewable tasks with dependencies and acceptance criteria.
- [`agentframe-specification`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-specification): write implementation specs before non-trivial code changes.
- [`agentframe-implementer`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-implementer): implement one scoped task with the smallest safe diff.
- [`agentframe-reviewer`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-reviewer): review diffs for bugs, regressions, missing tests, and compatibility risks.
- [`agentframe-tester`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-tester): design focused tests and validation plans.
- [`agentframe-refactor`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-refactor): improve internal structure without behavior change.
- [`agentframe-documenter`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-documenter): keep docs aligned with real behavior.
- [`agentframe-project-memory`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-project-memory): maintain durable project state.
- [`agentframe-design-guardian`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-design-guardian): prevent architecture drift.
- [`agentframe-plugin-architect`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-plugin-architect): govern plugin and extension mechanisms.
- [`agentframe-api-guardian`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-api-guardian): protect public API stability.
- [`agentframe-configuration-manager`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-configuration-manager): govern configuration design.
- [`agentframe-compatibility-manager`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-compatibility-manager): govern compatibility across versions and environments.
- [`agentframe-data-model-guardian`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-data-model-guardian): govern data structures, schemas, validation, and persistence semantics.
- [`agentframe-reproducibility-guardian`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-reproducibility-guardian): make workflows repeatable, auditable, and debuggable.
- [`agentframe-governance-guardian`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-governance-guardian): protect source-of-truth policy, AGENTS layers, routing, validators, and framework consistency.
- [`agentframe-ci-guardian`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-ci-guardian): design and review CI, workflow automation, trusted handoffs, and validation gates.
- [`agentframe-release-manager`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-release-manager): plan, validate, publish, and document releases with artifacts and rollback paths.
- [`agentframe-security-guardian`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-security-guardian): review auth, secrets, permissions, sandboxing, input validation, and trust boundaries.
- [`agentframe-dependency-guardian`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-dependency-guardian): govern dependencies, package managers, lockfiles, upgrades, licenses, and supply-chain risk.
- [`agentframe-observability-guardian`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-observability-guardian): design logs, telemetry, diagnostics, error reporting, and supportability evidence.
- [`agentframe-migration-guardian`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-migration-guardian): plan and verify migrations, backfills, upgrades, downgrade behavior, and rollback paths.
- [`agentframe-frontend-experience-guardian`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-frontend-experience-guardian): review frontend UX states, accessibility, responsive behavior, visual QA, and error recovery.

## Optional Project Framework
Copy `.codex/` into a repository when the project needs durable local governance:

- `.codex/framework/`: reusable policies, templates, and role checklists.
- `.codex/project/`: project-local architecture, decisions, memory, risks, testing, releases, API/config/data/compatibility notes.

Do not deploy the framework just to use the skills. The framework is for long-running repositories where future Codex sessions need local project state.

## Repository Layout
```text
.codex/
  AGENTS.md
  README.md
  framework/
    *.md
    templates/*.md
    skills/*/{SKILL.md,CHECKLIST.md}
  project/*.md
skills/
  agentframe-*/SKILL.md
scripts/
  validate-framework.js
```

## Quick Start
```sh
npm run validate
```

To adopt the governance framework in another repository, copy `.codex/` into that repository, then edit `.codex/project/*` so unknown project facts are replaced with confirmed local facts.

## Operating Rules
- Inspect the repository before editing.
- Preserve existing instructions and useful content.
- Work one task at a time.
- Keep reusable framework files generic.
- Put project-specific facts only in `.codex/project/`.
- Mark unknowns as `Unknown - requires human input`.

## Validation
The validator checks for empty files, placeholder-only files, installable skill frontmatter, skill UI metadata, required framework headings, required checklist categories, and required template sections.

```sh
npm run validate
```

## Version
Current release: 0.5.1.

## License
MIT.
