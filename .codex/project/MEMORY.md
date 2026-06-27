# Memory

## Current State
AgentFrame provides installable Codex software engineering skills under `skills/` and optional repository governance under `.codex/`. The repository keeps AgentFrame's own project state in `.codex/project/` and provides neutral adopter templates in `.codex/framework/project-template/`.

## Recent Changes
- Released installable AgentFrame skills, synchronized framework-local copies, validator coverage, golden scenarios, Chinese README and prompt templates, dynamic latest-release update flow, and uninstall support.
- Added `.codex/project/README.md` to warn that AgentFrame's own project facts must not be copied into adopter repositories.
- Added `.codex/framework/project-template/` as the neutral project-state starting point for adopters.

## Active Tasks
- Publish version 0.6.5 with adoption-safe project-state guidance.

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
- Tag and publish `v0.6.5`.
