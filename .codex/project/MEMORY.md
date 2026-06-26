# Memory

## Current State
AgentFrame provides installable Codex software engineering skills under `skills/` and optional repository governance under `.codex/`.

## Recent Changes
- Created framework policies, templates, skills, project-local documents, public docs, validation script, GitHub templates, and CI workflow.
- Added version 0.2.0 installable Codex skills with standard `SKILL.md` frontmatter and `agents/openai.yaml` metadata.

## Active Tasks
- Publish version 0.2.0 with installable skills to GitHub.

## Open Questions
- Whether to add real adopter examples later.

## Known Risks
- Large number of Markdown artifacts can drift if validation is not run.
- Skill trigger descriptions can become noisy if too many narrow skills are added before real usage.

## Technical Debt
- No real adopter examples yet; intentionally deferred until evidence exists.

## Next Actions
- Run validation.
- Tag and publish `v0.2.0`.
