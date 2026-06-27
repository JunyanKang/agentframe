---
name: agentframe-api-guardian
description: "Use when identifying, changing, reviewing, or protecting public APIs, private APIs, experimental APIs, deprecated APIs, exported interfaces, CLI contracts, service contracts, file contracts, or integration-facing behavior. Enforces backward compatibility, semantic versioning, deprecation policy, migration guides, API contract tests, and public/internal boundaries."
---

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

## Functional Playbook
Protect public and internal API contracts as versioned surfaces.
- Pre-flight: inventory routes, CLI commands, exported functions, events, DTOs, schemas, status codes, error envelopes, and consumers.
- Classify each change: additive, compatible behavior change, breaking change, deprecation, or removal.
- Check request validation, response shape, error semantics, auth/permission behavior, pagination, idempotency, and retry behavior.
- Require contract tests or consumer tests for changed surfaces.
- Pair breaking changes with migration notes, compatibility shims, or explicit release approval.

## Artifact Schema
Use this API review artifact:
- `Surface`: route, command, event, export, file format, or protocol.
- `Consumers`: internal modules, external users, plugins, docs, tests.
- `Change Type`: additive, compatible, breaking, deprecated, removed.
- `Contract`: input, output, errors, auth, side effects, idempotency.
- `Compatibility Plan`: version, deprecation timeline, shim, migration.
- `Validation`: contract tests, generated types, examples, docs.

## Quality Gates
- Error shape changes are API changes.
- Default value changes are API changes when users can observe them.
- New optional fields must not make old clients fail.
- Removed or renamed fields require migration guidance and tests.
- Stop if no owner can confirm external compatibility impact.

## Anti-Patterns
- Do not restate response types by hand when shared contracts exist.
- Do not invent a new error envelope beside an existing one.
- Do not document API behavior that tests do not cover.
- Do not treat internal routes as safe to break if plugins or UI consume them.

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
- Handoff to agentframe-specification when API requirements must be defined before implementation.
- Handoff to agentframe-implementer only after API change type, migration, and tests are clear.
- Handoff to agentframe-tester for API contract tests.
- Handoff to agentframe-documenter for API docs, migration guides, or deprecation notices.
- Handoff to agentframe-compatibility-manager for version impact.
- Handoff to agentframe-reviewer for final API review.
- Handoff to agentframe-project-memory when public API state or decisions change.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with agentframe-compatibility-manager for semantic versioning and deprecation.
- Coordinate with agentframe-plugin-architect for plugin APIs.
- Coordinate with agentframe-data-model-guardian for schema-shaped APIs.
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
