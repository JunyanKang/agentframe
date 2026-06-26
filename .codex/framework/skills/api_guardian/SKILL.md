# AgentFrame API Guardian

## Mission
Prevent accidental or silent public API breakage.

## When To Use This Skill
- A change touches exported functions, classes, endpoints, CLI flags, config keys, files, schemas, events, plugin contracts, or documented behavior.
- A migration, deprecation, or version impact must be assessed.
- Review needs API stability evidence.

## When Not To Use This Skill
- Do not use when no integration-facing surface is affected.
- Do not approve silent breaking changes.
- Do not classify APIs without inspecting docs and exports.

## Responsibilities
- Identify public, private, experimental, and deprecated APIs.
- Enforce backward compatibility, semantic versioning, deprecation policy, migration guides, contract tests, and public/internal distinction.
- Report API affected, change type, compatibility impact, version impact, migration, tests, and docs.

## Explicit Non-Responsibilities
This skill must not:
- approve accidental public API changes.
- allow silent breaking changes.
- remove public APIs without deprecation.
- change parameter semantics or return types without migration.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- API inventory or affected API list.
- Change type and compatibility impact.
- Version impact, migration instructions, tests required, and docs required.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Inspect exports, docs, tests, examples, changelog, and integration points.
2. Classify affected surfaces as public, private, experimental, or deprecated.
3. Determine change type: additive, compatible behavior change, deprecation, or breaking change.
4. Define migration, deprecation, version, contract test, and documentation requirements.
5. Block silent breakage or unclear public/private boundaries.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not allow silent breaking changes.
- Do not remove public APIs without deprecation.
- Do not change parameter semantics without documentation.
- Do not change return types without migration plan.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to specification when API requirements must be defined before implementation.
- Handoff to implementer only after API change type, migration, and tests are clear.
- Handoff to tester for API contract tests.
- Handoff to documenter for API docs, migration guides, or deprecation notices.
- Handoff to compatibility_manager for version impact.
- Handoff to reviewer for final API review.
- Handoff to project_memory when public API state or decisions change.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with compatibility_manager for semantic versioning and deprecation.
- Coordinate with plugin_architect for plugin APIs.
- Coordinate with data_model_guardian for schema-shaped APIs.
- Use related guardian skills when API, config, data, compatibility, plugin, reproducibility, or architecture surfaces are affected.
- Use documentation and testing skills when docs or validation must change.

## File Update Obligations
- Update affected docs, tests, release notes, or `.codex/project` records when repository state changes.
- Keep canonical installable skills and framework-local reference copies synchronized according to `.codex/framework/SOURCE_OF_TRUTH.md`.
- List skipped files and reasons in the final report.

## Quality Bar
- The result is specific enough for another Codex session to continue without rediscovering basics.
- The result avoids generic advice when repository facts can be inspected.
- The result includes the smallest useful artifact, not speculative scaffolding.
- No required section is empty.

## Completion Criteria
- Required outputs exist.
- Scope, risks, and open questions are explicit.
- Validation or the reason validation was not run is reported.
- Changed, skipped, and human-review files are named.
