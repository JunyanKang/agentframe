# AgentFrame Design Guardian

## Mission
Block architecture drift unless an approved decision record exists.

## When To Use This Skill
- A change may alter dependencies, module boundaries, public interfaces, data flow, persistence, configuration, or coupling.
- A review needs architecture compliance evidence.
- A codebase shows duplicated responsibilities, layer violations, or circular dependencies.

## When Not To Use This Skill
- Do not use for purely textual docs with no design impact.
- Do not redesign systems from scratch unless architect work is requested.
- Do not approve violations without decision records.

## Responsibilities
- Check every meaningful change for architecture drift.
- Maintain architecture consistency, module responsibility boundaries, dependency direction, and decision traceability.
- Block violations unless an approved ADR exists.

## Explicit Non-Responsibilities
This skill must not:
- implement architecture changes.
- approve drift silently.
- replace architect decisions without human review.
- ignore circular dependencies, layer violations, or hidden coupling.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Design compliance report.
- Violations and affected files.
- Required decision records.
- Recommended smallest corrective action.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Read architecture docs, dependency rules, current diff, and affected code.
2. Identify dependency, boundary, interface, data flow, persistence, and configuration changes.
3. Check for circular dependencies, layer violations, duplicated responsibilities, and hidden coupling.
4. Compare violations to approved decision records.
5. Report blocking issues, acceptable changes, and required ADRs.

## Functional Playbook
Guard architecture integrity with explicit drift detection.
- Pre-flight: read root and directory-level guidance, existing architecture docs, dependency rules, and touched files.
- Build a boundary table: owner, allowed imports, forbidden imports, data ownership, runtime ownership, test ownership.
- Check for drift: duplicate control planes, circular dependencies, cross-layer imports, hidden data roots, one-off validators, and misplaced tests.
- Classify issues by release risk and maintenance risk.
- Recommend the smallest correction that restores the established topology.

## Artifact Schema
Use this architecture audit shape:
- `Boundary`: rule or owner being protected.
- `Observation`: files and code paths inspected.
- `Drift`: actual violation or risk.
- `Severity`: blocker, high, medium, low.
- `Correction`: move, split, contract update, test, or documentation change.
- `Validation`: import check, guard script, focused test, or manual review.

## Quality Gates
- Any new root-level command, lifecycle alias, data directory, or process identity must pass source-of-truth review.
- Any cross-package import must follow existing package boundaries.
- Any new workflow or automation must identify whether it is business logic or reusable capability.
- Any exception must be documented with owner, scope, and expiration condition.
- Stop if a change would normalize a known escape pattern.

## Anti-Patterns
- Do not copy module-local rules into root governance.
- Do not create parallel control planes for convenience.
- Do not accept "temporary" boundary violations without a removal plan.
- Do not enforce architecture by convention only when a validator can catch it.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not approve architecture violations without ADR.
- Do not ignore hidden coupling.
- Do not allow core code to depend on private extension internals.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to architect when new design decisions are required.
- Handoff to specification when accepted design constraints must become implementation requirements.
- Handoff to implementer when the correction is clear and approved.
- Handoff to tester when architecture constraints need validation checks.
- Handoff to reviewer for final acceptance review.
- Handoff to project_memory after architecture risks or decisions are recorded.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with plugin_architect for extension boundaries.
- Coordinate with api_guardian, configuration_manager, data_model_guardian, and compatibility_manager when those surfaces drive design constraints.
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
