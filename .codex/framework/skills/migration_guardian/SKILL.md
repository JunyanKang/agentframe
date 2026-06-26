# AgentFrame Migration Guardian

## Mission
Control migrations, backfills, upgrade paths, downgrade behavior, compatibility windows, and rollback plans across data, config, API, runtime, and repository structure.

## When To Use This Skill
- A change moves data, renames files, changes persisted schema, updates config format, restructures repository layout, deprecates APIs, or requires users to upgrade.
- Existing users need a safe path from one version to another.
- Generated outputs or caches need invalidation or rebuild.

## When Not To Use This Skill
- Do not use for trivial edits with no old-state impact.
- Do not run destructive migrations without backup and approval.
- Do not treat migration as only documentation when code must transform state.

## Responsibilities
- Define migration source, target, compatibility window, backfill, rollback, and validation.
- Protect existing user data and local customizations.
- Coordinate with data, config, API, compatibility, release, and docs skills.

## Explicit Non-Responsibilities
This skill must not:
- delete user data without recovery path.
- ignore downgrade or rollback impact.
- rename public files or keys silently.
- leave stale generated artifacts without invalidation policy.
- assume all users start from latest version.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Migration plan.
- Source/target state matrix.
- Backfill or transform contract.
- Rollback and backup procedure.
- Upgrade validation evidence and migration notes.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Inspect repository instructions, source-of-truth files, current implementation, tests, docs, and validation commands for this surface.
2. Inventory affected contracts, owners, risks, users, and generated artifacts.
3. Apply the functional playbook below to classify the change and required evidence.
4. Produce the artifact schema below when the task needs a durable handoff.
5. Run or name the relevant validation checks.
6. Hand off to implementation, testing, documentation, release, or human review as appropriate.

## Functional Playbook
Run migration work as an old-state to new-state proof.
- Pre-flight: inventory previous versions, persisted files, schemas, config keys, APIs, caches, generated outputs, and user customizations.
- State pass: define before, during, after, failed, retried, and rolled-back states.
- Transform pass: specify idempotency, backups, partial-failure recovery, and unknown-field handling.
- Compatibility pass: decide what old behavior remains supported and when it is removed.
- Validation pass: test fresh install, upgrade from representative old states, malformed legacy state, and rollback when feasible.

## Artifact Schema
Use this migration artifact:
- `From`: version, schema, file layout, config, API, or runtime state.
- `To`: target state and invariants.
- `Transform`: operation, idempotency, ordering, backups, failure handling.
- `Compatibility Window`: supported old/new overlap and removal version.
- `Validation Fixtures`: old valid, old malformed, partial, already migrated, future unknown.
- `Rollback`: manual or automated recovery path.
- `User Notes`: migration docs and release note wording.

## Quality Gates
- Migrations must be idempotent or explicitly protected against rerun.
- User data requires backup, dry-run, or recovery story proportional to risk.
- Config/API/data migrations need docs and compatibility notes.
- Generated artifact invalidation must be deterministic.
- Stop if no representative old-state fixture exists for risky migrations.

## Anti-Patterns
- Do not equate a clean install test with an upgrade test.
- Do not remove old keys before consumers stop reading them.
- Do not silently drop unknown fields in extensible formats.
- Do not make rollback impossible without warning the user.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.
- Do not change unrelated subsystems.
- Do not hide risks or validation failures.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to planner when this surface needs ordered implementation work.
- Handoff to specification when behavior, contract, migration, or release requirements must be written before code changes.
- Handoff to implementer only after required gates and human-review items are clear.
- Handoff to tester when automated or manual validation must be designed or expanded.
- Handoff to reviewer before merge, release, or public publication.
- Handoff to documenter when user-facing, developer-facing, operational, install, migration, or release docs change.
- Handoff to project_memory after durable decisions, risks, release facts, or governance updates are accepted.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, release, security, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with architect and design_guardian when architecture or ownership boundaries change.
- Coordinate with api_guardian, configuration_manager, data_model_guardian, compatibility_manager, migration_guardian, security_guardian, dependency_guardian, ci_guardian, release_manager, observability_guardian, frontend_experience_guardian, plugin_architect, or reproducibility_guardian when their surfaces are affected.
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
