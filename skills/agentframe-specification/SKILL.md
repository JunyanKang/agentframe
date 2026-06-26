---
name: agentframe-specification
description: "Use before coding non-trivial software changes to write precise implementation specifications covering purpose, background, requirements, non-requirements, inputs, outputs, public API impact, data model impact, configuration impact, compatibility impact, error handling, edge cases, performance, security, observability, acceptance criteria, tests, documentation, and rollback."
---

# AgentFrame Specification

## Mission
Write the implementation contract before coding begins.

## When To Use This Skill
- A task changes behavior, APIs, configuration, data model, dependencies, compatibility, release process, or user workflow.
- A bug fix needs root-cause constraints and edge-case definition.
- Implementation would otherwise rely on hidden assumptions.

## When Not To Use This Skill
- Do not use for pure typo fixes or trivial documentation edits.
- Do not write implementation code.
- Do not expand scope while specifying.

## Responsibilities
- Define purpose, background, requirements, non-requirements, inputs, outputs, public API impact, data model impact, configuration impact, compatibility impact, error handling, edge cases, performance, security, observability, acceptance criteria, tests, documentation, and rollback.
- Block ambiguous behavior and hidden assumptions.

## Explicit Non-Responsibilities
This skill must not:
- write implementation code.
- leave inputs, outputs, or error handling unspecified.
- approve hidden assumptions.
- expand scope during implementation.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Implementation specification.
- Acceptance criteria.
- API, data, configuration, compatibility, security, performance, and observability impact notes.
- Test and documentation requirements.
- Rollback plan and open questions.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Read the task, architecture notes, affected code, tests, and docs.
2. Define requirements and explicit non-requirements.
3. Specify inputs, outputs, state changes, errors, edge cases, performance, security, and observability.
4. Record API, data model, configuration, compatibility, and migration impact.
5. Define test requirements, documentation requirements, acceptance criteria, and rollback.
6. Stop if required behavior cannot be specified safely.

## Functional Playbook
Write implementation requirements as a contract between design, code, tests, and review.
- Pre-flight: inspect current behavior, related tests, docs, commands, schemas, and user-facing language.
- Define in-scope and out-of-scope behavior before describing changes.
- Convert ambiguous requests into observable acceptance criteria and negative cases.
- Enumerate states: empty, loading, success, error, retry, permission denied, partial data, and migration/legacy data when relevant.
- Tie every requirement to a validation method: automated test, static check, fixture, manual check, or documented limitation.

## Artifact Schema
Use this specification artifact when the change needs requirements:
- `Problem`: current behavior and desired user/developer outcome.
- `Scope`: included surfaces, excluded surfaces, and non-goals.
- `Behavior`: happy path, alternate paths, error paths, state transitions, concurrency or retry rules.
- `Contracts`: APIs, config, data schemas, CLI flags, files, events, or plugin hooks.
- `Acceptance Criteria`: numbered, testable statements with evidence required.
- `Migration/Rollback`: compatibility obligations and recovery path.
- `Open Questions`: only questions that block safe implementation.

## Quality Gates
- Each acceptance criterion must be falsifiable.
- Each new or changed contract must name its owner and consumer.
- Error handling must preserve user data or explain why preservation is impossible.
- Legacy, empty, and malformed inputs must be covered when persistence or parsing changes.
- Stop if the spec would force implementation before core behavior is agreed.

## Anti-Patterns
- Do not write prose that cannot be tested.
- Do not omit non-goals; unclear exclusions become scope creep.
- Do not bury breaking changes in acceptance criteria without migration notes.
- Do not use UI, API, or data terminology inconsistently across the same spec.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not leave behavior ambiguous.
- Do not omit error behavior.
- Do not treat assumptions as requirements.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to agentframe-implementer when the specification is complete and accepted.
- Handoff to agentframe-tester when validation requirements need tests or commands.
- Handoff to agentframe-api-guardian, agentframe-configuration-manager, agentframe-compatibility-manager, agentframe-data-model-guardian, or agentframe-reproducibility-guardian when those surfaces are affected.
- Handoff to architect when the specification reveals unresolved design choices.
- Handoff to agentframe-project-memory when decisions, risks, or open questions must be recorded.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with guardian skills for affected API, config, data, compatibility, plugin, or reproducibility surfaces.
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
