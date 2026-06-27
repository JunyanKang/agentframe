# Api

## Public API Inventory If Detectable
- File layout under `.codex/`.
- Required skill and checklist section names.
- Installable skill layout under `skills/<skill-name>/SKILL.md`.
- Skill metadata files under `skills/<skill-name>/agents/openai.yaml`.
- `npm run validate` command.

## Private/Internal API Notes
- Implementation details inside `scripts/validate-framework.js` are internal.

## API Stability Status
Initial experimental API until version 1.0.0. Complete installable skill names are public from version 0.3.0. Source-of-truth synchronization policy and validator behavior are public from version 0.4.0. `--ref latest` update behavior is public from version 0.6.4. Adoption-safe project templates are public from version 0.6.5.

## Compatibility Rules
Breaking file layout or required section changes require major version after 1.0.0 and migration notes before 1.0.0.

## Unknowns Requiring Human Review
- External package API, if any: Unknown - requires human input.
