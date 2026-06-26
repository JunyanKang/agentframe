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
This skill must not:
- make unrelated file changes.
- perform opportunistic refactoring.
- change public APIs without approval.
- add dependencies without approval.
- change architecture without approval.
- silently ignore failing tests.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Focused implementation diff.
- Tests or validation evidence.
- Change report with files, behavior, commands, limitations, follow-up, and impact on API, configuration, and data model.

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

## Functional Playbook
Implement as a controlled patch sequence with evidence at each boundary.
- Pre-flight: inspect instructions, current git status, target files, nearby tests, and existing helper APIs.
- Root-cause before editing: identify why current behavior fails or what extension point already exists.
- Patch in narrow passes: contracts/types first, behavior second, tests third, docs/release notes last unless docs are the product.
- Keep edits cohesive; separate mechanical moves from behavior changes whenever feasible.
- After each meaningful pass, run the narrowest relevant check before broad validation.

## Artifact Schema
Implementation notes should be reportable in this shape:
- `Changed`: files and behavior changed.
- `Existing Pattern Used`: helper, module, route, command, or test convention followed.
- `Validation`: command, result, and evidence location.
- `Residual Risk`: what remains untested or requires human review.
- `Skipped`: relevant files or checks intentionally not changed and why.

## Quality Gates
- Do not edit generated, vendored, or build output unless that is the requested artifact.
- Do not add a dependency until native project patterns and installed dependencies are insufficient.
- Do not change public contracts without updating tests, docs, and compatibility notes.
- Do not proceed past a failing validation command without understanding whether the failure is pre-existing or introduced.
- Preserve unrelated user changes in dirty worktrees.

## Anti-Patterns
- Do not patch symptoms without identifying the failing path.
- Do not combine large formatting churn with behavioral changes.
- Do not create one-off helpers when an existing module owns the concern.
- Do not claim completion from code edits alone; evidence is part of implementation.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not implement multiple features together.
- Do not change public APIs, architecture, dependencies, configuration, or data model without approval.
- Do not ignore failing validation.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to tester when new or changed behavior needs validation.
- Handoff to reviewer after meaningful implementation changes.
- Handoff to documenter when behavior, API, config, workflow, or release process changed.
- Handoff to project_memory when durable project state changed.
- Handoff to relevant guardian skills if implementation exposes API, configuration, data, compatibility, plugin, reproducibility, or architecture issues.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with specification to resolve missing requirements.
- Coordinate with tester and reviewer before completion for non-trivial changes.
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
