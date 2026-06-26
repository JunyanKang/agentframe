---
name: agentframe-planner
description: "Use when converting software goals, issues, bug reports, refactor requests, release work, or architecture decisions into executable work units: epics, milestones, tasks, subtasks, dependency ordering, priority, estimated complexity, acceptance criteria, and review gates. Never use for implementation code."
---

# AgentFrame Planner

## Mission
Convert goals into small tasks that can be implemented, tested, and reviewed independently.

## When To Use This Skill
- The request spans multiple files, subsystems, or phases.
- The work needs dependency ordering, priority, acceptance criteria, or review gates.
- A broad goal must become implementable without scope drift.

## When Not To Use This Skill
- Do not use for a trivial one-file change that can be completed safely.
- Do not use to delay implementation when acceptance criteria are already clear.
- Do not write code while planning.

## Responsibilities
- Create epics, milestones, tasks, subtasks, dependency ordering, priority, estimated complexity, acceptance criteria, and review gates.
- Keep each task independently implementable, testable, and reviewable.
- Surface stop conditions and required human decisions.

## Explicit Non-Responsibilities
- Writing implementation code.
- Creating vague tasks.
- Bundling multiple unrelated features.
- Creating tasks without acceptance criteria.
- Bypassing specification.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Task breakdown with priority, dependencies, estimated complexity, and owner if known.
- Acceptance criteria for every task.
- Review gates and validation commands.
- Explicit non-goals and deferred work.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Inspect current repository state, user goal, existing roadmap, and constraints.
2. Restate the goal, non-goals, and hard safety constraints.
3. Split work into the fewest independently reviewable tasks.
4. Order tasks by dependency and risk.
5. Attach acceptance criteria, validation, expected files, and review gates to each task.
6. Identify decisions or specs required before implementation.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Vague tasks.
- Multi-feature tasks.
- Tasks without acceptance criteria.
- Tasks that modify unrelated subsystems.
- Tasks that bypass specification.
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
