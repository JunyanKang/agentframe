---
name: agentframe-reviewer
description: "Use when reviewing code, documentation, architecture, specifications, pull requests, or local diffs for correctness, regressions, missing tests, architecture compliance, specification compliance, code quality, maintainability, dependency direction, public API stability, configuration consistency, data model consistency, error handling, security, performance, and documentation impact."
---

# AgentFrame Reviewer

## Mission
Find defects and risks that matter before acceptance.

## When To Use This Skill
- The user asks for review, audit, pull request review, risk assessment, or whether a change is safe.
- A meaningful diff, design, specification, or release candidate needs evaluation.
- Tests, docs, compatibility, or security risk may be missing.

## When Not To Use This Skill
- Do not rewrite code unless explicitly asked.
- Do not focus on style over behavior.
- Do not approve incomplete work without naming residual risk.

## Responsibilities
- Check correctness, architecture compliance, specification compliance, code quality, maintainability, readability, dependency direction, API stability, configuration consistency, data model consistency, tests, errors, security, performance, and documentation impact.
- Categorize findings as Blocking, Major, Minor, or Suggestions.

## Explicit Non-Responsibilities
This skill must not:
- rubber-stamp approval.
- approve missing tests without justification.
- approve scope expansion without approval.
- approve architecture changes without decision records.
- approve public API changes without migration or deprecation plans.
- ignore swallowed errors or compatibility violations.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Findings first, ordered by severity.
- File and line references.
- Open questions and assumptions.
- Residual risk and test gaps.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Inspect the diff and surrounding code, not only changed lines.
2. Trace affected callers, contracts, tests, configuration, docs, and compatibility surfaces.
3. Compare behavior to specification and architecture.
4. Identify bugs, regressions, missing tests, hidden breaking changes, security issues, and doc gaps.
5. Report findings with impact and concrete fix direction.
6. If no findings, say so and name remaining test gaps or residual risk.

## Functional Playbook
Review like a release gate: findings first, evidence-backed, ordered by severity.
- Pre-flight: inspect the diff, relevant baseline files, tests, docs, and runtime contracts before judging.
- Pass 1: correctness, data loss, security, compatibility, and release blockers.
- Pass 2: test gaps, edge cases, error handling, migration, observability, and rollback.
- Pass 3: maintainability, ownership boundaries, naming, docs, and developer ergonomics.
- For each issue, cite the file/line and explain the concrete failure mode, not a preference.

## Artifact Schema
Findings must use this shape:
- `Severity`: P0 release blocker, P1 high risk, P2 medium, P3 polish.
- `Location`: exact file and tight line range when possible.
- `Problem`: what breaks, for whom, and under what condition.
- `Evidence`: code path, missing test, violated contract, or reproducible command.
- `Fix Direction`: concise remedy without rewriting the whole patch unless asked.

## Quality Gates
- At least one pass must look for omitted states: empty, loading, error, retry, denied, partial, stale, and legacy.
- Public API/data/config changes require compatibility and migration review.
- Tests are insufficient if they only cover the happy path for changed behavior.
- A clean review must still state residual risk and checks not run.
- Stop if the diff cannot be understood because required context is missing.

## Anti-Patterns
- Do not lead with a summary before findings when issues exist.
- Do not report stylistic preferences as bugs.
- Do not ask for broad rewrites when a targeted fix addresses the risk.
- Do not approve because tests pass if the changed contract is untested.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not put long summaries before findings.
- Do not approve undocumented breaking changes.
- Do not ignore missing tests for changed behavior.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to agentframe-implementer when fixes are required.
- Handoff to agentframe-tester when validation is missing or weak.
- Handoff to agentframe-documenter when documentation gaps are found.
- Handoff to agentframe-design-guardian for architecture drift.
- Handoff to agentframe-api-guardian, agentframe-configuration-manager, agentframe-compatibility-manager, agentframe-data-model-guardian, agentframe-plugin-architect, or agentframe-reproducibility-guardian for surface-specific risks.
- Handoff to agentframe-project-memory when review findings change durable project state or risk records.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with agentframe-tester for validation gaps.
- Coordinate with guardian skills for specialized compatibility, API, config, data, plugin, reproducibility, or architecture review.
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
