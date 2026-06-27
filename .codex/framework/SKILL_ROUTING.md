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
3. Add guardian skills only for affected API, configuration, data, compatibility, plugin, design, reproducibility, governance, CI, release, security, dependency, observability, migration, or frontend experience surfaces.
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

## Operating Lanes
| Lane | Must use | May use | Must skip by default | Escalation triggers | Required final report | Maximum documentation burden |
| --- | --- | --- | --- | --- | --- | --- |
| Lite | One primary delivery skill: implementer, reviewer, tester, documenter, or project_memory | tester for behavior change; reviewer for risk check; documenter or project_memory only when durable state changed | architect, planner, specification unless behavior is ambiguous or non-trivial; release_manager; governance_guardian; broad guardian skills unless a guarded surface appears | Public contract, architecture, config, data, migration, release, security, dependency, CI, governance, compatibility, plugin, frontend, or observability surface appears | Files changed, validation run or skipped reason, skipped escalation surfaces, stop condition if any | One concise paragraph or short bullets; no standalone spec or ADR |
| Standard | specification for non-trivial behavior plus implementer, tester, reviewer | documenter, project_memory, one specific guardian if a surface appears | invoking every guardian, release_manager unless release surface exists, governance_guardian unless framework/source-of-truth changes | Cross-module ownership, public API, config, data model, migration, dependency/runtime support, security, CI, release, governance, or unvalidated behavior risk | Requirements satisfied, files changed, validation evidence, docs/memory updates, remaining risks | A short implementation spec or checklist; no ADR unless architecture changes |
| Extended | Specific owning guardian for each affected guarded surface; specification or planner when sequencing is needed; tester and reviewer | architect, compatibility_manager, documenter, project_memory, release_manager when publication is affected | unrelated guardians, broad rewrites, implementation before guarded-surface assessment | Architecture, API, config, data, migration, release, CI, security, dependency, observability, plugin, frontend, compatibility, reproducibility, or human-approval surface changes | Guarded surface named, owner skill used, artifact produced, validation evidence, rollback or stop condition, human-review items | Focused assessment plus implementation spec; ADR/migration/release notes only for the affected surface |
| Governance | governance_guardian | architect, planner, specification, reviewer, tester, documenter, project_memory, ci_guardian or release_manager when their source-of-truth changes | ordinary implementation without governance review, renaming skills, deleting skills, changing public skill names without explicit approval | `AGENTS.md`, `.codex/`, routing, validators, source-of-truth, skill synchronization, public lifecycle tooling, version metadata, or release policy changes | Governance files changed, source-of-truth consistency, skill name/delete/rename status, validation evidence, human-review items | Governance note or changelog entry plus exact validation list; no broad product rewrite unless requested |

Lite remains explicitly lightweight: do not invoke architect, planner, specification, or guardian skills by default. Escalate only when the request becomes ambiguous, non-trivial, or touches a guarded surface.

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
| governance_guardian | `AGENTS.md`, `.codex/`, routing, source-of-truth policy, validators, or framework consistency changes | Ordinary feature work with no governance surface | Governance source-of-truth and drift report |
| ci_guardian | CI workflows, GitHub Actions, guard scripts, bot comments, trusted/untrusted automation, required checks, or workflow artifacts change | Local-only tests with no CI topology impact | CI topology and trust-boundary contract |
| release_manager | Versions, changelog, tags, release notes, packages, installers, artifacts, GitHub releases, or update channels change | Implementation has no publication or release impact | Release readiness and publication plan |
| security_guardian | Auth, secrets, permissions, sandboxing, shell execution, webhooks, sensitive data, or trust boundaries change | No security-sensitive surface changed | Security risk and control assessment |
| dependency_guardian | Dependencies, package managers, lockfiles, runtime floors, vendored code, licenses, or vulnerability fixes change | Existing dependencies are only used, not changed | Dependency decision and validation plan |
| observability_guardian | Logs, telemetry, metrics, traces, diagnostics, error reporting, health checks, support bundles, or run metadata change | No operational diagnostic surface changed | Observability contract and diagnostic plan |
| migration_guardian | Data/config/API/repository/runtime migrations, backfills, cache invalidation, deprecations, upgrade, downgrade, or rollback paths change | Clean-install-only behavior with no old-state impact | Migration and rollback plan |
| frontend_experience_guardian | UI screens, frontend flows, forms, dashboards, charts, visual artifacts, accessibility, responsive behavior, or user-facing error recovery change | Backend-only changes with no user-facing surface | Frontend state, accessibility, and visual QA plan |

## Common Workflow Orders
- Lite bug fix: implementer -> tester when behavior changed -> reviewer -> documenter or project_memory only if durable state changed.
- New feature or behavior change: specification -> implementer -> tester -> reviewer -> documenter -> project_memory when durable state changed; add architect or guardians only when escalation triggers apply.
- Bug fix: reviewer or implementer for root cause -> specification when behavior is ambiguous or non-trivial -> implementer -> tester -> reviewer -> documenter or project_memory if state changes.
- Architecture-affecting feature: architect -> planner when task splitting is needed -> specification -> relevant guardian skills -> implementer -> tester -> reviewer -> documenter -> project_memory.
- Refactor: refactor -> tester -> reviewer -> design_guardian if boundaries or dependencies changed -> project_memory if technical debt state changed.
- API change: api_guardian -> compatibility_manager when version impact exists -> specification -> implementer -> tester -> documenter -> reviewer -> project_memory.
- Configuration change: configuration_manager -> compatibility_manager if config format or defaults change -> specification -> implementer -> tester -> documenter -> reviewer.
- Data model change: data_model_guardian -> compatibility_manager if persisted data changes -> specification -> implementer -> tester -> documenter -> reviewer.
- Plugin change: plugin_architect -> api_guardian for public plugin contracts -> compatibility_manager -> specification -> implementer -> tester -> reviewer -> documenter.
- Reproducible workflow change: reproducibility_guardian -> configuration_manager when parameters change -> specification -> implementer -> tester -> documenter -> reviewer.
- Governance/framework change: governance_guardian -> specification when policy behavior changes -> implementer -> tester -> reviewer -> documenter -> project_memory.
- CI or automation change: ci_guardian -> security_guardian when secrets or trusted contexts are involved -> tester -> reviewer -> documenter.
- Release or packaging change: release_manager -> compatibility_manager and migration_guardian when upgrade behavior changes -> tester -> reviewer -> documenter -> project_memory.
- Security-sensitive change: security_guardian -> specification -> implementer -> tester -> reviewer -> documenter.
- Dependency change: dependency_guardian -> compatibility_manager when runtime or platform support changes -> implementer -> tester -> reviewer -> documenter.
- Frontend/user-facing change: frontend_experience_guardian -> specification when behavior is non-trivial -> implementer -> tester -> reviewer -> documenter.
- Migration change: migration_guardian -> data_model_guardian, configuration_manager, api_guardian, or compatibility_manager for affected surfaces -> specification -> implementer -> tester -> reviewer -> documenter.
- Observability change: observability_guardian -> security_guardian when logs or telemetry may expose sensitive data -> implementer -> tester -> reviewer -> documenter.

## Co-Invocation Rules
- Use guardian skills only for affected surfaces; do not invoke every guardian by default.
- Use tester with implementer for any non-trivial logic, parser, branch, compatibility, or migration change.
- Use documenter when user-facing behavior, developer workflow, config, API, migration, release, or validation commands changed.
- Use project_memory after decisions, risks, roadmap, architecture, public API, compatibility, or next actions changed.
- Use governance_guardian whenever skills, framework-local copies, routing, validators, or source-of-truth files change.
- Use ci_guardian before modifying trusted workflow permissions, PR automation, or required status checks.
- Use release_manager before publishing tags, releases, installers, packages, or public artifacts.
- Use security_guardian whenever secrets, sandboxing, permissions, auth, or trusted/untrusted execution boundaries change.
- Use dependency_guardian before adding, upgrading, removing, or vendoring dependencies.
- Use frontend_experience_guardian for UI work that needs state coverage, accessibility, responsive, or visual QA evidence.

## Stop Conditions
- Required files or instructions cannot be read.
- Existing content would need deletion, rename, or overwrite without approval.
- A public API, compatibility, data, or config change lacks migration policy.
- Architecture drift is found without an approved decision record.
- A governance, CI, release, security, dependency, observability, migration, or frontend-quality gate is required but has no owner.
- Tests fail and the user did not ask to continue past failure.

## Human Review Gates
- Architecture decisions and exceptions.
- Public API breaking changes.
- Compatibility drops or dependency support changes.
- Data or configuration migrations.
- Plugin contract changes.
- Governance source-of-truth conflicts.
- CI trusted workflow or secret-use changes.
- Security-sensitive permission broadening.
- Dependency/runtime support changes.
- Release publication and artifact overwrite decisions.
- Frontend changes that cannot be visually or accessibly validated.
- Intentional drift between installable and framework-local skill copies.

## Generic Examples
- A new command-line option changes runtime behavior: use configuration_manager, specification, implementer, tester, documenter, reviewer.
- A public function return shape changes: use api_guardian, compatibility_manager, specification, tester, documenter, reviewer.
- A module split changes dependency direction: use architect, design_guardian, planner, specification, reviewer.
- A generated output must be reproducible: use reproducibility_guardian, tester, documenter, reviewer.
- A GitHub Actions workflow writes PR comments from artifacts: use ci_guardian, security_guardian, tester, reviewer, documenter.
- A release tag and GitHub Release need publication: use release_manager, compatibility_manager, tester, documenter, reviewer.
- A new frontend form is added: use frontend_experience_guardian, specification, implementer, tester, reviewer, documenter.
- A dependency upgrade raises the Node floor: use dependency_guardian, compatibility_manager, tester, documenter, release_manager when published.

## Failure Modes
- Skill chosen because it is familiar rather than because it owns the surface.
- Guardian skills skipped when a public contract changes.
- Implementation starts before specification for non-trivial work.
- Project memory is not updated after durable decisions.

## Maintenance Instructions
- Update this guide whenever skills are added, removed, renamed, or their responsibilities change.
- Keep examples generic and software-engineering focused.
- Keep routing aligned with `SOURCE_OF_TRUTH.md` and validator checks.
