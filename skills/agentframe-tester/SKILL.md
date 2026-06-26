---
name: agentframe-tester
description: "Use when creating or maintaining software test strategy: unit tests, integration tests, regression tests, boundary tests, error-path tests, invalid-input tests, large-input tests, concurrency tests where relevant, performance tests where relevant, compatibility tests where relevant, fixtures, test commands, coverage rationale, and untested risks."
---

# AgentFrame Tester

## Mission
Prove changed behavior with the smallest reliable validation surface.

## When To Use This Skill
- Logic, branches, parsers, APIs, persistence, configuration, compatibility, concurrency, performance, security-sensitive paths, or release behavior changed.
- A bug fix needs a regression check.
- Existing tests do not cover the risk.

## When Not To Use This Skill
- Do not add test scaffolding for trivial documentation-only changes.
- Do not create fragile timing tests without justification.
- Do not introduce a new test framework when the existing one suffices.

## Responsibilities
- Cover unit, integration, regression, boundary, error-path, invalid-input, large-input, concurrency, performance, and compatibility tests where relevant.
- Produce test plan, test files, test commands, coverage rationale, untested risks, fixtures, and expected failures.

## Explicit Non-Responsibilities
This skill must not:
- test only happy paths for non-trivial logic.
- rely on uncontrolled external state.
- create tests without assertions.
- duplicate implementation logic in assertions.
- add fragile timing-based tests without justification.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Test plan.
- Test files or commands.
- Coverage rationale.
- Untested risks, fixtures required, and expected failures if any.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Identify changed behavior and failure modes.
2. Choose the narrowest useful test level.
3. Use existing framework, fixtures, and naming patterns.
4. Add assertions that fail for the risk being covered.
5. Include edge, invalid-input, and error-path cases when applicable.
6. Run targeted tests and relevant existing checks.
7. Record untested risks explicitly.

## Functional Playbook
Design tests from risk, contracts, and user-observable behavior.
- Pre-flight: inspect changed code, existing test style, fixtures, commands, and CI lanes.
- Build a test matrix by surface: unit, integration, contract, CLI/API, migration, accessibility/UI, performance, and reproducibility when applicable.
- For each behavior, test happy path, boundary values, malformed input, permission/auth, transient failure, and retry/rollback where relevant.
- Prefer deterministic fixtures and local fakes over network or timing-dependent tests.
- Keep test names and assertions tied to the contract, not implementation trivia.

## Artifact Schema
Use this test plan shape:
- `Behavior Under Test`: observable contract.
- `Risk Covered`: correctness, data loss, security, compatibility, regression, or performance.
- `Setup`: fixtures, mocks, environment variables, data files, or services.
- `Cases`: happy, boundary, negative, error recovery, legacy/migration.
- `Command`: exact validation command.
- `Expected Evidence`: pass output, snapshot, artifact, report, or measured threshold.

## Quality Gates
- Every changed public contract needs at least one regression test or an explicit limitation.
- Every parser/schema/config change needs malformed input coverage.
- Every stateful workflow needs failure and recovery coverage.
- UI or visual output changes need a rendered/manual verification path when automation is unavailable.
- Do not accept flaky timing sleeps when deterministic synchronization is available.

## Anti-Patterns
- Do not add tests that only assert implementation details unrelated to behavior.
- Do not remove or weaken tests to make a patch pass.
- Do not rely on production services for routine validation.
- Do not leave snapshots unexplained when they encode important behavior.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not use happy-path-only coverage for non-trivial logic.
- Do not depend on uncontrolled external services or timing.
- Do not create assertion-free tests.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to agentframe-implementer when tests expose defects or missing behavior.
- Handoff to agentframe-reviewer when validation evidence is ready for acceptance review.
- Handoff to agentframe-documenter when test commands or validation expectations must be documented.
- Handoff to agentframe-project-memory when testing policy, risk, or known gaps change.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with agentframe-implementer on failing tests.
- Coordinate with agentframe-compatibility-manager or agentframe-reproducibility-guardian for compatibility or repeatability checks.
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
