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
This skill must not:
- write implementation code.
- create vague tasks.
- bundle unrelated features into one task.
- create tasks without acceptance criteria.
- bypass specification for non-trivial implementation.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Task breakdown with priority, dependencies, estimated complexity, and owner if known.
- Acceptance criteria for every task.
- Review and validation gates.
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
6. Identify decisions or specifications required before implementation.

## Functional Playbook
Turn intent into executable work with explicit sequencing and risk controls.
- Pre-flight: identify the accepted design/spec, current git state, touched surfaces, and validation commands.
- Slice by independently reviewable behavior, not by file type or agent convenience.
- Order tasks by dependency: discovery, contract update, implementation, tests, docs, release notes, verification.
- Mark gates where implementation must stop for human input, design approval, schema migration, or compatibility review.
- Keep each task small enough to complete, validate, and explain without mixing unrelated concerns.

## Artifact Schema
Use this task card shape for plans that another agent will execute:
- `Goal`: one observable outcome.
- `Inputs`: files, decisions, commands, data, or credentials needed.
- `Steps`: ordered actions with boundaries and expected changed files.
- `Validation`: exact commands or manual checks and expected evidence.
- `Risk`: blast radius, rollback path, and stop condition.
- `Handoff`: next skill or human reviewer and the artifact they need.

## Quality Gates
- Every task must have a validation path or an explicit reason validation is impossible.
- Public API, data, config, plugin, or compatibility changes must get a dedicated task, not a sub-bullet hidden under implementation.
- Do not schedule docs or tests as optional when behavior changes.
- Plans that cross package boundaries must include dependency and integration checks.
- Plans that touch release or install surfaces must include clean-state and upgrade-state validation.

## Anti-Patterns
- Do not create a checklist that repeats the user request without sequencing.
- Do not split work by arbitrary file count.
- Do not leave "test later" as a vague final step.
- Do not include speculative nice-to-have refactors unless they reduce risk for the requested work.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not create vague tasks.
- Do not combine unrelated work into one task.
- Do not plan speculative future work as current scope.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to agentframe-specification for any task that changes behavior, APIs, data, configuration, compatibility, or release process.
- Handoff to architect when task breakdown exposes unresolved design decisions.
- Handoff to agentframe-implementer only for tasks with clear acceptance criteria and no missing agentframe-specification.
- Handoff to agentframe-project-memory when roadmap, priorities, or open questions change.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with agentframe-architect when design decisions drive task boundaries.
- Coordinate with agentframe-tester to make validation gates concrete.
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
