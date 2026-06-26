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
This skill must not:
- delete historical decisions.
- replace project state with vague summaries.
- lose unresolved questions.
- mix speculation with approved decisions.

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
6. Stop after recording state unless a new explicit task exists.

## Functional Playbook
Maintain project memory as a decision ledger and context index, not a diary.
- Pre-flight: identify accepted decisions, durable commands, source-of-truth files, validation evidence, and unresolved questions.
- Store only information that helps a future agent avoid rediscovery or avoid repeating a mistake.
- Separate facts, decisions, assumptions, and stale risks.
- Link memory entries to exact files, commands, commits, release tags, or issue references when available.
- Prune or supersede obsolete notes rather than layering contradictory guidance.

## Artifact Schema
Use this memory entry shape:
- `Topic`: stable name and repository path.
- `Decision`: accepted rule or outcome.
- `Evidence`: file path, command, commit, test, release, or user instruction.
- `How To Reuse`: when a future agent should consult it.
- `Staleness Risk`: low, medium, high, with refresh trigger.
- `Supersedes`: older note or conflicting guidance if applicable.

## Quality Gates
- Memory must not replace source-of-truth docs for active project rules.
- Do not store secrets, private tokens, or volatile local absolute paths unless the path itself is the durable context.
- Every memory update should name why the information will matter later.
- Conflicting memories require reconciliation or an explicit latest-authoritative marker.
- Stop if the user did not authorize memory edits and repository docs are the right place instead.

## Anti-Patterns
- Do not summarize every action taken in a session.
- Do not record unverified guesses as facts.
- Do not keep stale command output without date or commit context.
- Do not use memory to hide missing documentation.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not delete historical decisions.
- Do not treat speculation as approved state.
- Do not drop unresolved questions.
- Do not overwrite manually maintained memory without review.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Stop after recording memory when no explicit next task exists.
- Handoff to agentframe-reviewer only if memory conflicts need review.
- Handoff to agentframe-planner only if recorded next actions must become executable tasks and the user asked to continue.
- Handoff to agentframe-documenter only if memory reveals stale or missing documentation and the user asked to continue.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Receive state updates from all skills after meaningful changes.
- Coordinate with agentframe-documenter when durable state and documentation must stay aligned.
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
