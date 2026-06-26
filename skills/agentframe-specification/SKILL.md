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
- Define purpose, background, requirements, non-requirements, inputs, outputs, public API impact, data model impact, configuration impact, compatibility impact, error handling, edge cases, performance, security, observability, acceptance criteria, tests, docs, and rollback.
- Block ambiguous behavior and hidden assumptions.

## Explicit Non-Responsibilities
- Writing implementation code.
- Choosing architecture without architect review when architecture is affected.
- Approving unspecified error handling or inputs.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Implementation specification.
- Acceptance criteria.
- API/data/config/compatibility impact notes.
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
6. Stop if a required behavior cannot be specified safely.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Ambiguous behavior.
- Unspecified inputs.
- Unspecified error handling.
- Hidden assumptions.
- Scope expansion during implementation.
- Ignoring existing instructions.
- Expanding scope without approval.
- Treating assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to `agentframe-planner` when the work must be split into ordered tasks.
- Handoff to `agentframe-specification` before non-trivial implementation begins.
- Handoff to `agentframe-implementer` only after the task has clear acceptance criteria.
- Handoff to `agentframe-reviewer` before acceptance of meaningful changes.
- Handoff to `agentframe-project-memory` when durable project state changes.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Use `agentframe-api-guardian`, `agentframe-data-model-guardian`, `agentframe-configuration-manager`, and `agentframe-compatibility-manager` when those surfaces are touched.
- Use related guardian skills when API, config, data, compatibility, plugin, reproducibility, or architecture surfaces are affected.
- Use `agentframe-documenter` when user-facing or developer-facing docs must change.
- Use `agentframe-tester` when behavior or risk requires executable validation.

## File Update Obligations
- Update affected docs, tests, release notes, or `.codex/project` records when the repository state changes.
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
