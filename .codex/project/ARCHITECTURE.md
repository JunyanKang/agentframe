# Architecture

## Current Architecture
AgentFrame is a documentation-first governance framework with two layers: reusable framework assets and project-local facts.

## Known Modules
- Framework policies.
- Templates.
- Skills and checklists.
- Project-local state documents.
- Validation script.

## Dependency Rules
- Framework documents must not depend on project-specific facts.
- Project-local documents may reference framework policy.
- Skills may coordinate through handoff rules but must keep role boundaries clear.

## Public Interfaces
- Markdown file structure under `.codex/`.
- Required section names in skills and checklists.
- `npm run validate` command.

## Data Flow
User request -> repository inspection -> policy and skill selection -> artifact update -> validation -> final report.

## Configuration Flow
No runtime configuration is currently required.

## Extension Points
- Add new skills under `.codex/framework/skills/<name>/`.
- Add templates under `.codex/framework/templates/`.
- Add project-local facts under `.codex/project/`.

## Risks
- Documentation may drift without validation.
- Project-local unknowns may remain unresolved.

## Unknowns
- External consumers and integration format: Unknown - requires human input.
