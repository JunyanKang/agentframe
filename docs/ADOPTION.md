# AgentFrame Adoption Guide

## Purpose
Explain how to adopt AgentFrame skills and optional project governance in a generic software repository.

## Install Individual Skills
Install only the skills the repository needs. Example:

```sh
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo JunyanKang/agentframe \
  --path skills/agentframe-architect skills/agentframe-reviewer
```

Restart Codex after installing skills.

## Update Existing AgentFrame Skills
Codex's stock skill installer aborts when a destination skill directory already exists. Use AgentFrame's update script when replacing an older local AgentFrame installation:

```sh
python3 scripts/update-agentframe-skills.py --ref v0.5.3
```

The script:

- discovers every `skills/agentframe-*` skill in the selected GitHub ref.
- stages and validates the downloaded skills before replacing anything.
- backs up existing local `agentframe-*` skills.
- replaces the complete local AgentFrame skill suite.
- validates the installed result and restores the backup if validation fails.

Use `--dry-run` to preview changes without modifying local skills:

```sh
python3 scripts/update-agentframe-skills.py --ref v0.5.3 --dry-run
```

Restart Codex after updating skills.

## Canonical Skill Source
`skills/agentframe-*` are the canonical installable skill definitions. `.codex/framework/skills/*` are framework-local reference copies for repositories that adopt the optional governance framework. Substantive skill edits must update both sides unless intentional drift is documented in `.codex/framework/SOURCE_OF_TRUTH.md` or the final maintenance report.

## Install All Skills
Use one `--path` argument followed by all selected paths:

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

## When To Copy `.codex/`
Copy `.codex/` into a repository when the project needs durable local governance: architecture notes, decisions, roadmap, memory, risk tracking, testing policy, release policy, or compatibility policy.

## When Not To Copy `.codex/`
Do not copy `.codex/` just to use the skills. Small or short-lived repositories can install only the needed skills and keep local governance minimal.

## Preserve Existing Project Instructions
Before copying or editing `.codex/`, inspect existing `AGENTS.md`, `.codex/`, `.agents/`, `.github/`, `README.md`, contribution docs, and project policy files. Preserve useful content. If new AgentFrame guidance conflicts with existing project guidance, add a `Potential Conflict Requiring Human Review` section instead of resolving silently.

## Handle Conflicts
- Keep higher-priority project instructions active until a human decides otherwise.
- Do not delete or overwrite manually maintained files.
- Use `.proposed.md` files when direct edits would be risky.
- Record unresolved conflicts in the final report.

## Validate Installation
Run the repository's validation command after adoption. For AgentFrame itself, run:

```sh
npm run validate
```

For installed skills, validate each skill folder with Codex's skill validator when available:

```sh
python3 ~/.codex/skills/.system/skill-creator/scripts/quick_validate.py ~/.codex/skills/<skill-name>
```

## Update From A Newer AgentFrame Version
1. Read the newer `CHANGELOG.md` and migration notes.
2. Inspect local customizations before replacing files.
3. Update installable skills with `scripts/update-agentframe-skills.py` when skill content changed.
4. Update `.codex/` files only after preserving local project state.
5. Run validation.
6. Record changed files, skipped files, conflicts, and human-review items.
