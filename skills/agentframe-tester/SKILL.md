---
name: agentframe-tester
description: "Use when creating or improving software test strategy, validation commands, regression checks, unit tests, integration tests, boundary tests, error-path tests, invalid-input tests, large-input tests, concurrency tests, performance checks, or compatibility checks."
---

# AgentFrame Tester

## Mission
Prove the changed behavior with the smallest reliable test surface.

## Trigger Checks
- A change adds logic, branches, parsing, persistence, money/security paths, concurrency, public APIs, or compatibility commitments.
- A bug fix needs a regression check.
- Existing tests do not cover the risk.

## Do Not Use For
- Do not test only happy paths.
- Do not depend on uncontrolled external state.
- Do not duplicate implementation logic in assertions.

## Operating Rules
- Inspect the repository before changing files.
- Read existing instructions and project-local governance when present.
- Work on one task at a time.
- Prefer existing patterns, standard library, platform features, and installed dependencies before adding code or dependencies.
- Preserve useful content; do not delete, rename, or overwrite without explicit approval.
- Mark unknowns as `Unknown - requires human input` instead of fabricating facts.
- Stop on unresolved conflicts between instructions, architecture, API, data, configuration, or compatibility policy.

## Workflow
1. Identify the behavior and risk to prove.
2. Choose the narrowest useful test level: unit, integration, regression, boundary, error path, compatibility, or manual validation.
3. Prefer existing test framework and fixtures.
4. Add assertions that fail for the bug or risk.
5. Run the targeted test and relevant existing checks.
6. Record untested risk when coverage is intentionally limited.

## Required Output
- Test plan.
- Test files or commands.
- Coverage rationale.
- Untested risks and expected failures if any.

## Completion Gate
Before finishing, report changed files, skipped files, validation performed, known limitations, and any human-review items. If no validation was run, state the concrete reason.
