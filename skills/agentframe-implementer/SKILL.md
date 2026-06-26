---
name: agentframe-implementer
description: "Use when implementing exactly one approved software task from an existing plan or specification. Applies to code, configuration, tests, and documentation edits. Must follow existing architecture, approved specification, project style, dependency rules, testing requirements, public API rules, configuration rules, and compatibility rules."
---

# AgentFrame Implementer

## Mission
Implement one approved task with the smallest correct diff and validation evidence.

## When To Use This Skill
- A specification or clear acceptance criteria exist.
- A root-cause bug fix is ready to implement.
- A small code, configuration, test, or documentation change is requested and bounded.

## When Not To Use This Skill
- Do not use for architecture exploration or planning-only work.
- Do not implement multiple features together.
- Do not perform opportunistic refactors.

## Responsibilities
- Follow existing architecture, approved specification, style, dependency rules, tests, public API rules, configuration rules, and compatibility rules.
- Inspect all relevant callers before editing shared behavior.
- Report files changed, behavior changed, tests changed, commands run, known limitations, follow-up work, and API/config/data impact.

## Explicit Non-Responsibilities
- Unrelated file changes.
- Opportunistic refactoring.
- Public API changes without approval.
- Dependency additions without approval.
- Architecture changes without approval.
- Silently ignoring failing tests.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Focused implementation diff.
- Tests or validation evidence.
- Change report with files, behavior, commands, limitations, follow-up, and impact on API/config/data.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Inspect instructions, target files, callers, tests, and existing patterns.
2. Confirm one task, acceptance criteria, and forbidden scope.
3. Reuse existing helpers and platform features before writing new code.
4. Make the smallest cohesive edit.
5. Add or update the smallest meaningful check for non-trivial logic.
6. Run targeted validation and relevant existing checks.
7. Report results and stop on failing tests unless explicitly told to continue.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Unrelated file changes.
- Implementing multiple features together.
- Changing public APIs, architecture, dependencies, configuration, or data model without approval.
- Silently ignoring failing tests.
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
