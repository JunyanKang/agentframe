---
name: agentframe-refactor
description: "Use when improving internal software structure without changing external behavior. Preserve public APIs, outputs, side effects, error semantics, configuration semantics, data model semantics, and compatibility guarantees. Forbid adding features, changing behavior, changing public APIs, changing persistence format, modifying unrelated modules, or hiding behavior changes as cleanup."
---

# AgentFrame Refactor

## Mission
Reduce internal complexity while preserving observable behavior.

## When To Use This Skill
- Duplication, tangled structure, naming, module organization, or internal flow needs cleanup.
- The user explicitly asks to refactor.
- A small structural change is required to make the current task safe.

## When Not To Use This Skill
- Do not use to add features.
- Do not use to change behavior or public APIs.
- Do not refactor unrelated modules opportunistically.

## Responsibilities
- Preserve public APIs, outputs, side effects, error semantics, configuration semantics, data model semantics, and compatibility guarantees.
- Report reason, files changed, behavior preservation, tests run, complexity reduction, duplication removed, risk assessment, and rollback plan.

## Explicit Non-Responsibilities
This skill must not:
- add features.
- change external behavior.
- change public APIs.
- change persistence format.
- modify unrelated modules.
- hide behavior changes as cleanup.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Refactor rationale.
- Changed files.
- Behavior preservation statement.
- Tests run.
- Complexity or duplication reduction.
- Risk assessment and rollback plan.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Inspect existing behavior, tests, callers, and public contracts.
2. Define behavior that must not change.
3. Choose the smallest structural improvement.
4. Make focused internal changes only.
5. Run tests that prove behavior preservation.
6. Document risk, rollback, and any untested preservation claim.

## Functional Playbook
Refactor under a behavior-preservation contract.
- Pre-flight: identify current behavior, tests, public contracts, generated files, and user-visible outputs before moving code.
- Establish characterization tests or baseline commands before changing structure when behavior is not already covered.
- Separate mechanical movement from semantic change; if they must mix, document why.
- Move ownership toward existing domain boundaries and remove compatibility shims in the same change when the diff stays small.
- Validate import graph, public exports, and runtime entrypoints after structural changes.

## Artifact Schema
Use this refactor plan shape:
- `Invariant`: behavior, API, data format, output, or performance that must not change.
- `Move Map`: from, to, reason, caller impact.
- `Compatibility Shim`: added/kept/removed and removal condition.
- `Validation`: before command, after command, diff or snapshot evidence.
- `Fallback`: rollback path if behavior diverges.

## Quality Gates
- No refactor is complete without proving behavior stayed stable or naming the intentional behavior change.
- Public imports/exports must be checked for downstream consumers.
- Mechanical renames must not alter semantics, defaults, or error text accidentally.
- Dead code removal must be backed by search evidence and tests.
- Stop if the refactor requires design decisions outside the approved scope.

## Anti-Patterns
- Do not hide feature work inside a refactor.
- Do not create temporary duplicate ownership without an exit plan.
- Do not move files just to make the tree look symmetrical.
- Do not break git history unnecessarily with unrelated formatting churn.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not add features.
- Do not change public APIs, persistence, config semantics, or data model semantics.
- Do not perform unrelated cleanup.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to agentframe-tester to prove behavior preservation.
- Handoff to agentframe-reviewer after the refactor diff is ready.
- Handoff to agentframe-design-guardian when the refactor changes module boundaries or dependency direction.
- Handoff to agentframe-project-memory when technical debt, architecture notes, or risks changed.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with agentframe-implementer only if a separate approved implementation task follows.
- Coordinate with agentframe-compatibility-manager when preserved behavior includes compatibility guarantees.
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
