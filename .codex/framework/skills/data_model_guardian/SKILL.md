# AgentFrame Data Model Guardian

## Mission
Protect data model consistency and persistence semantics.

## When To Use This Skill
- A change touches core data structures, schema fields, validation, serialization, persistence, ownership, mutation, metadata, or migrations.
- Field names or semantics are inconsistent.
- Persistence or serialized data may need backward compatibility.

## When Not To Use This Skill
- Do not use when no data structure or persisted representation changes.
- Do not invent schemas without inspecting existing data and code.
- Do not approve implicit migrations.

## Responsibilities
- Maintain core data model, schemas, field semantics, validation, serialization, backward compatibility, migrations, ownership, mutation, and metadata.
- For every data model change, report schema, compatibility, validation, migration, tests, and docs impact.

## Explicit Non-Responsibilities
This skill must not:
- allow ad hoc data structures for core concepts.
- allow inconsistent field names.
- allow undocumented schema changes.
- allow implicit schema migration.
- allow shared data mutation without contract.
- allow persistence format changes without migration plan.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Data model or schema impact.
- Validation and serialization rules.
- Compatibility and migration plan.
- Tests and documentation required.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Inspect model definitions, schemas, migrations, serializers, validators, fixtures, tests, and docs.
2. Identify ownership, mutation rules, field semantics, and persisted representations.
3. Classify schema impact and compatibility risk.
4. Define validation, migration, test, and documentation requirements.
5. Block implicit migrations or inconsistent field semantics.

## Functional Playbook
Protect data models from ambiguous ownership, invalid states, and unsafe migration.
- Pre-flight: inventory schemas, DB tables, JSON files, DTOs, generated types, validators, fixtures, and serialization boundaries.
- Identify owner for creation, mutation, validation, persistence, and deletion.
- Model allowed states and impossible states explicitly.
- Check migration path for existing data, unknown fields, missing fields, nulls, and malformed records.
- Require tests for serialization, validation, migration, and consumer compatibility.

## Artifact Schema
Use this data contract artifact:
- `Entity`: name, purpose, owner.
- `Fields`: type, required/optional, default, constraints, semantic meaning.
- `Lifecycle`: create, read, update, delete, archive, migrate.
- `Invariants`: constraints that must always hold.
- `Serialization`: storage format, wire format, versioning, unknown-field handling.
- `Migration`: from version, to version, data transformation, rollback.
- `Fixtures`: valid, boundary, malformed, legacy, future-version.

## Quality Gates
- Every persisted shape change must include migration or explicit no-migration reasoning.
- Every parser must handle malformed and older data deliberately.
- Every new field must define default, nullability, and ownership.
- Derived data must name its source and recomputation rule.
- Stop if two modules can mutate the same invariant without coordination.

## Anti-Patterns
- Do not treat TypeScript types as runtime validation.
- Do not let UI convenience fields become canonical storage fields by accident.
- Do not overwrite unknown future fields unless the format contract permits it.
- Do not delete data on failed migration without a recovery path.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not allow ad hoc core data structures.
- Do not allow undocumented schema changes.
- Do not allow implicit migrations.
- Do not allow shared data mutation without contract.
- Do not change persistence formats without migration.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to specification when schema or persistence behavior must be defined before implementation.
- Handoff to implementer after schema, validation, serialization, and migration rules are clear.
- Handoff to tester for validation, serialization, migration, and backward-compatibility tests.
- Handoff to documenter for schema or data model docs.
- Handoff to compatibility_manager for persisted format or migration impact.
- Handoff to project_memory when data model state changes.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with api_guardian for schema-shaped public APIs.
- Coordinate with compatibility_manager for persistence compatibility.
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
