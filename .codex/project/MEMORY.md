# Memory

## Current State
AgentFrame provides installable Codex software engineering skills under `skills/` and optional repository governance under `.codex/`. The repository keeps AgentFrame's own project state in `.codex/project/` and provides neutral adopter templates in `starter-kit/.codex/project/`.

## Recent Changes
- Released installable AgentFrame skills, synchronized framework-local copies, validator coverage, golden scenarios, Chinese README and prompt templates, dynamic latest-release update flow, and uninstall support.
- Added `.codex/project/README.md` to warn that AgentFrame's own project facts must not be copied into adopter repositories.
- Moved neutral adopter project-state templates to top-level `starter-kit/.codex/project/` so adopters have a direct starter-kit entrypoint.

## Active Tasks
- Publish version 0.6.6 with the standalone starter-kit entrypoint.

## Open Questions
- Whether to add real adopter examples later.

## Known Risks
- Large number of Markdown artifacts can drift if validation is not run.
- Skill trigger descriptions can become noisy if too many narrow skills are added before real usage.
- Adopters can be misled if they copy AgentFrame's own `.codex/project/` files instead of using project templates.

## Technical Debt
- No real adopter examples yet; intentionally deferred until evidence exists.

## Next Actions
- Run validation.
- Tag and publish `v0.6.6`.
