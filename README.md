# AgentFrame

AgentFrame is a reusable software engineering skill set for Codex. It gives Codex installable skills for architecture, planning, specification, implementation, review, testing, documentation, and project stewardship.

It also includes an optional `.codex/` project governance framework for long-lived repositories. Use the skills first; deploy the framework only when a project needs durable local rules and project memory.

## Installable Codex Skills
Install one or more skills from these GitHub paths:

```sh
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo JunyanKang/agentframe \
  --path skills/agentframe-architect \
  --path skills/agentframe-planner \
  --path skills/agentframe-spec-writer \
  --path skills/agentframe-implementer \
  --path skills/agentframe-reviewer \
  --path skills/agentframe-tester \
  --path skills/agentframe-documenter \
  --path skills/agentframe-project-steward
```

Restart Codex after installing.

Direct GitHub skill links:

- [`agentframe-architect`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-architect): architecture, module boundaries, interfaces, and tradeoffs before coding.
- [`agentframe-planner`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-planner): split goals into reviewable tasks with dependencies and acceptance criteria.
- [`agentframe-spec-writer`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-spec-writer): write implementation specs before non-trivial code changes.
- [`agentframe-implementer`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-implementer): implement one scoped task with the smallest safe diff.
- [`agentframe-reviewer`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-reviewer): review diffs for bugs, regressions, missing tests, and compatibility risks.
- [`agentframe-tester`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-tester): design focused tests and validation plans.
- [`agentframe-documenter`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-documenter): keep docs aligned with real behavior.
- [`agentframe-project-steward`](https://github.com/JunyanKang/agentframe/tree/main/skills/agentframe-project-steward): maintain `.codex` project governance state.

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
Current release: 0.2.0.

## License
MIT.
