# Memory

## Current State
AgentFrame provides installable Codex software engineering skills under `skills/` and optional repository governance under `.codex/`.

## Recent Changes
- Created framework policies, templates, skills, project-local documents, public docs, validation script, GitHub templates, and CI workflow.
- Added version 0.3.0 complete installable Codex skill set with all 16 original AgentFrame skills, standard `SKILL.md` frontmatter, full required sections, and `agents/openai.yaml` metadata.
- Prepared version 0.4.0 framework hardening: root routing instructions, source-of-truth policy, skill routing guide, adoption guide, stronger validator, synchronized skill copies, stronger handoff rules, and actionable templates.

## Active Tasks
- Publish version 0.4.0 with framework-hardening changes to GitHub.

## Open Questions
- Whether to add real adopter examples later.

## Known Risks
- Large number of Markdown artifacts can drift if validation is not run.
- Skill trigger descriptions can become noisy if too many narrow skills are added before real usage.

## Technical Debt
- No real adopter examples yet; intentionally deferred until evidence exists.

## Next Actions
- Run validation.
- Tag and publish `v0.4.0`.
