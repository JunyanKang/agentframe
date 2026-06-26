# AgentFrame

AgentFrame is a reusable AI-assisted software engineering framework for repositories that use coding agents. It provides durable instructions, workflow documents, role-based skills, templates, and project-local governance files.

AgentFrame is documentation-first. It does not implement product features and does not assume a programming language, domain, framework, package manager, or application type.

## What It Provides
- Reusable framework policy under `.codex/framework/`.
- Project-local governance records under `.codex/project/`.
- Role-based agent skills with checklists.
- Templates for specifications, design, review, testing, release, migration, deprecation, configuration, API contracts, and decisions.
- A structural validator that checks required files and headings.

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
scripts/
  validate-framework.js
```

## Quick Start
```sh
npm run validate
```

To adopt AgentFrame in another repository, copy `.codex/` into that repository, then edit `.codex/project/*` so unknown project facts are replaced with confirmed local facts.

## Operating Rules
- Inspect the repository before editing.
- Preserve existing instructions and useful content.
- Work one task at a time.
- Keep reusable framework files generic.
- Put project-specific facts only in `.codex/project/`.
- Mark unknowns as `Unknown - requires human input`.

## Validation
The validator checks for empty files, placeholder-only files, required framework headings, required skill sections, required checklist categories, and required template sections.

```sh
npm run validate
```

## Version
Initial release: 0.1.0.

## License
MIT.
