---
name: agentframe-project-memory
description: "Use when maintaining durable project state after meaningful changes. Tracks current architecture, modules, public APIs, configuration model, data model, dependencies, active decisions, open questions, known risks, technical debt, bugs, roadmap, recent changes, and next actions. Keeps memory concise but complete without deleting history."
---

# AgentFrame Project Memory

## Mission
Keep project memory accurate enough for future Codex sessions to resume work safely.

## When To Use This Skill
- A meaningful change affects architecture, modules, APIs, configuration, data model, dependencies, decisions, risks, roadmap, bugs, or next actions.
- Project memory is stale, missing, vague, or conflicting.
- A repository adopts AgentFrame governance.

## When Not To Use This Skill
- Do not update memory for trivial edits with no durable state change.
- Do not replace detailed project state with vague summaries.
- Do not delete historical decisions.

## Responsibilities
- Track current architecture, modules, APIs, configuration, data model, dependencies, decisions, questions, risks, debt, bugs, roadmap, recent changes, and next actions.
- Keep memory concise but complete.
- Separate confirmed facts from assumptions.

## Explicit Non-Responsibilities
- Deleting historical decisions.
- Losing unresolved questions.
- Mixing speculation with approved decisions.
- Replacing project state with vague summaries.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Updated memory.
- Open questions.
- Known risks and technical debt.
- Next actions and stale entries marked.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Read existing memory and current project files.
2. Identify confirmed facts, assumptions, changes, unresolved questions, risks, and next actions.
3. Append or update concise entries without deleting history.
4. Mark stale facts with date and reason.
5. Link state to relevant files or decisions when useful.
6. Report memory changes and human-review items.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Deleting historical decisions.
- Treating speculation as approved state.
- Dropping unresolved questions.
- Overwriting manually maintained memory without review.
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
