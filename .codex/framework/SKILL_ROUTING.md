# Skill Routing

## Purpose
Define how future agents select AgentFrame skills, when skills should be combined, and when work must stop for human review.

## Scope
Applies to installable skills under `skills/agentframe-*` and framework-local reference skills under `.codex/framework/skills/*`.

## Rules
- Select the narrowest skill that owns the next decision or artifact.
- Invoke multiple skills only when their surfaces are genuinely affected.
- Do not use implementation skills to bypass architecture, planning, specification, review, or guardian gates.
- Stop when required inputs are missing and guessing would create risk.

## Required Workflow
1. Inspect the user request, repository instructions, and affected files.
2. Identify the primary work type using the matrix below.
3. Add guardian skills only for affected API, configuration, data, compatibility, plugin, design, or reproducibility surfaces.
4. Follow the common workflow order for multi-step work.
5. Report invoked skills, skipped skills, stop conditions, and human-review items.

## Inputs
- User request.
- Repository inspection results.
- Existing architecture, tests, docs, and project governance files.
- Validation output when available.

## Outputs
- Skill selection decision.
- Ordered workflow or stop condition.
- Human-review gates and handoff target.

## Decision Criteria
- Select the skill that owns the next artifact or decision.
- Prefer one primary skill plus only the guardian skills for affected surfaces.
- Use workflow order when a task requires multiple phases.
- Stop instead of routing when human review is required.

## Human Review Requirements
- Required for architecture exceptions, public API breaks, compatibility drops, data or configuration migrations, plugin contract changes, and intentional source-of-truth drift.
- Required when existing repository instructions conflict with AgentFrame routing.
- Required when a task would delete, rename, or overwrite useful content.

## Skill Selection Matrix
| Skill | Invoke when | Do not invoke when | Main output |
| --- | --- | --- | --- |
| architect | System design, module boundaries, dependencies, interfaces, data/control flow, extension points, tradeoffs | Implementation is already specified and has no design impact | Architecture artifacts and required ADRs |
| planner | Broad goal needs ordered tasks, dependencies, acceptance criteria, or review gates | One trivial task is already clear | Task breakdown |
| specification | Non-trivial behavior, API, config, data, compatibility, release, or workflow change needs a contract | Typo or trivial documentation-only edit | Implementation specification |
| implementer | One approved task is ready for code/config/test/doc edits | Design, planning, or spec is missing | Focused validated diff |
| reviewer | Diff, design, spec, or release candidate needs risk review | User asked only for first-draft creation | Severity-ordered findings |
| tester | Logic, branch, parser, API, persistence, config, compatibility, concurrency, performance, or regression risk needs validation | Static docs only | Test plan, tests, or validation commands |
| refactor | Internal structure improves while behavior must not change | Feature or behavior change is requested | Behavior-preserving cleanup |
| documenter | Behavior, API, config, data, workflow, installation, compatibility, release, or examples changed | Docs would describe unimplemented behavior | Updated docs and gaps |
| project_memory | Durable project state changed or is stale | No meaningful state changed | Updated memory and next actions |
| design_guardian | Dependency direction, module boundaries, interfaces, data flow, persistence, config, or coupling may drift | No design surface changed | Architecture drift report |
| plugin_architect | Extension mechanisms, plugin contracts, discovery, lifecycle, config, isolation, or compatibility changed | Plugins are speculative | Plugin boundary and contract rules |
| api_guardian | Public/private/experimental/deprecated APIs, CLI, file, service, schema, or integration contracts changed | No integration-facing surface changed | API impact and migration requirements |
| configuration_manager | Config sources, defaults, validation, environment variables, CLI flags, files, precedence, or migration changed | Value never changes and does not need config | Config schema and rules |
| compatibility_manager | Runtime, OS, dependency, file format, serialization, API, config, plugin, or migration compatibility changed | No compatibility surface changed | Compatibility and migration assessment |
| data_model_guardian | Data structures, schemas, validation, serialization, persistence, ownership, mutation, metadata, or migrations changed | No data representation changed | Data model impact and migration plan |
| reproducibility_guardian | Workflow outputs need repeatability, provenance, seed, env, parameter, command, or validation capture | No output or audit risk exists | Reproducibility requirements |

## Common Workflow Orders
- New feature or behavior change: architect when design is affected -> planner -> specification -> relevant guardian skills -> implementer -> tester -> reviewer -> documenter -> project_memory.
- Bug fix: reviewer or implementer for root cause -> specification when behavior is ambiguous -> implementer -> tester -> reviewer -> documenter or project_memory if state changes.
- Refactor: refactor -> tester -> reviewer -> design_guardian if boundaries or dependencies changed -> project_memory if technical debt state changed.
- API change: api_guardian -> compatibility_manager when version impact exists -> specification -> implementer -> tester -> documenter -> reviewer -> project_memory.
- Configuration change: configuration_manager -> compatibility_manager if config format or defaults change -> specification -> implementer -> tester -> documenter -> reviewer.
- Data model change: data_model_guardian -> compatibility_manager if persisted data changes -> specification -> implementer -> tester -> documenter -> reviewer.
- Plugin change: plugin_architect -> api_guardian for public plugin contracts -> compatibility_manager -> specification -> implementer -> tester -> reviewer -> documenter.
- Reproducible workflow change: reproducibility_guardian -> configuration_manager when parameters change -> specification -> implementer -> tester -> documenter -> reviewer.

## Co-Invocation Rules
- Use guardian skills only for affected surfaces; do not invoke every guardian by default.
- Use tester with implementer for any non-trivial logic, parser, branch, compatibility, or migration change.
- Use documenter when user-facing behavior, developer workflow, config, API, migration, release, or validation commands changed.
- Use project_memory after decisions, risks, roadmap, architecture, public API, compatibility, or next actions changed.

## Stop Conditions
- Required files or instructions cannot be read.
- Existing content would need deletion, rename, or overwrite without approval.
- A public API, compatibility, data, or config change lacks migration policy.
- Architecture drift is found without an approved decision record.
- Tests fail and the user did not ask to continue past failure.

## Human Review Gates
- Architecture decisions and exceptions.
- Public API breaking changes.
- Compatibility drops or dependency support changes.
- Data or configuration migrations.
- Plugin contract changes.
- Intentional drift between installable and framework-local skill copies.

## Generic Examples
- A new command-line option changes runtime behavior: use configuration_manager, specification, implementer, tester, documenter, reviewer.
- A public function return shape changes: use api_guardian, compatibility_manager, specification, tester, documenter, reviewer.
- A module split changes dependency direction: use architect, design_guardian, planner, specification, reviewer.
- A generated output must be reproducible: use reproducibility_guardian, tester, documenter, reviewer.

## Failure Modes
- Skill chosen because it is familiar rather than because it owns the surface.
- Guardian skills skipped when a public contract changes.
- Implementation starts before specification for non-trivial work.
- Project memory is not updated after durable decisions.

## Maintenance Instructions
- Update this guide whenever skills are added, removed, renamed, or their responsibilities change.
- Keep examples generic and software-engineering focused.
- Keep routing aligned with `SOURCE_OF_TRUTH.md` and validator checks.
