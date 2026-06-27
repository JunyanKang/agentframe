---
name: agentframe-compatibility-manager
description: "Use when governing compatibility across software versions, runtime versions, operating systems, platforms, dependencies, file formats, serialization, plugins, APIs, configuration, data migrations, deprecation timelines, and release support policy. Blocks unbounded upgrades and undocumented compatibility drops."
---

# AgentFrame Compatibility Manager

## Mission
Make compatibility impact explicit before users or integrations break.

## When To Use This Skill
- A change affects runtime support, operating system or platform support, dependencies, file formats, serialization, plugins, APIs, configuration, migrations, or deprecations.
- A release needs compatibility notes.
- Dependency ranges or support policy are unclear.

## When Not To Use This Skill
- Do not use for changes with no compatibility surface.
- Do not approve unsupported runtime assumptions.
- Do not create compatibility promises not backed by tests or policy.

## Responsibilities
- Maintain supported runtime versions, operating systems, dependency ranges, file format compatibility, serialization compatibility, plugin compatibility, API compatibility, configuration compatibility, migration rules, and deprecation timeline.

## Explicit Non-Responsibilities
This skill must not:
- allow unbounded dependency upgrades.
- approve unsupported runtime assumptions.
- allow undocumented compatibility drops.
- allow stored data format changes without migration.
- allow plugin compatibility breaks without version policy.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Compatibility assessment.
- Affected versions, platforms, dependencies, formats, and interfaces.
- Migration and deprecation plan.
- Tests and release notes required.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Inspect manifests, lockfiles, CI, docs, release notes, APIs, data/config formats, and plugin contracts.
2. Identify compatibility surfaces touched by the change.
3. Classify impact as compatible, deprecated, migration-required, or breaking.
4. Define tests, migration steps, deprecation timeline, and release notes.
5. Block unbounded upgrades or undocumented support drops.

## Functional Playbook
Manage compatibility as a support matrix plus migration path.
- Pre-flight: inventory supported runtimes, OSes, package versions, schemas, APIs, file formats, plugins, and release channels.
- Classify compatibility risk: runtime, dependency, platform, data, API, config, plugin, install/upgrade, or documentation.
- Decide whether the change is backwards compatible, requires a shim, requires migration, or needs a major/versioned release.
- Test clean install, upgrade from previous release, downgrade/rollback when relevant, and unsupported environment messaging.
- Record deprecation timelines with removal conditions.

## Artifact Schema
Use this compatibility matrix:
- `Surface`: runtime, OS, dependency, API, data, config, plugin, installer.
- `Current Support`: versions and platforms.
- `Change`: what support is added, changed, deprecated, or removed.
- `Impact`: users/projects affected and detection method.
- `Migration`: steps, shim, codemod, data migration, or manual action.
- `Validation`: environments, commands, fixtures, and expected result.
- `Release Note`: required wording for breaking or deprecating changes.

## Quality Gates
- Version bumps must match the actual compatibility impact.
- Runtime or package floor changes require install docs and CI/validation updates.
- Data/schema changes require migration and rollback consideration.
- Deprecated behavior must remain discoverable until removal.
- Stop if compatibility cannot be tested or clearly bounded.

## Anti-Patterns
- Do not call a breaking change "cleanup".
- Do not remove legacy parsing without fixture evidence.
- Do not rely on current developer machine state as compatibility proof.
- Do not let release channels share confusing identity or install paths.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not allow unbounded dependency upgrades.
- Do not change stored formats without migration.
- Do not drop support without documentation.
- Do not break plugin, API, or configuration compatibility without policy.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to agentframe-specification when compatibility requirements must constrain implementation.
- Handoff to agentframe-implementer after migration and support policy are clear.
- Handoff to agentframe-tester for compatibility and migration tests.
- Handoff to agentframe-documenter for release notes, migration guides, and deprecation notices.
- Handoff to agentframe-reviewer for release or compatibility review.
- Handoff to agentframe-project-memory when support policy or compatibility risks change.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with agentframe-api-guardian, agentframe-configuration-manager, agentframe-data-model-guardian, and agentframe-plugin-architect for surface-specific compatibility.
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
