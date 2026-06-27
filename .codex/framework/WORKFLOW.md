# Workflow

## Purpose
Define the required end-to-end workflow from user requirement to final report, with entry criteria, exit criteria, required outputs, and stop conditions for each stage.

## Scope
This document applies to AgentFrame governance assets and to repositories that adopt them. It does not define product features or domain-specific behavior.

## Rules
- Inspect the repository before editing.
- Preserve existing instructions and useful content.
- Work one task at a time with a clear acceptance check.
- Separate reusable framework guidance from project-local facts.
- Record conflicts instead of resolving them silently.
- No implementation starts before repository inspection and instruction review.
- Specification is required for non-trivial behavior, contract, data, configuration, compatibility, release, migration, or architecture changes.
- Tiny, low-risk work may use the Lite lane when no escalation trigger is present.
- Refactoring requires explicit approval unless it is the smallest safe fix for the current task.

## Required Workflow
1. Read applicable instructions, current project state, and target files.
2. Classify the work as framework-level, project-local, or mixed.
3. Select an operating lane: Lite, Standard, or Extended.
4. Define required outputs, review gates, and stop conditions for that lane.
5. Make the smallest durable change that satisfies the requirement.
6. Run validation and report created, modified, skipped, and review-required files.
7. User Requirement: capture request, constraints, and done condition; stop if safety rules conflict.
8. Repository Inspection: list relevant files, tools, tests, docs, and instructions; exit with an inventory.
9. Existing Instruction Review: read applicable instructions; stop on unresolved conflict.
10. Clarifying Questions if Needed: ask only when safe assumptions would create material risk.
11. Architecture Review when the lane or escalation triggers require it.
12. Planning when the work spans multiple independently reviewable tasks.
13. Specification when the work is non-trivial or changes a public, persistent, compatibility, release, or security surface.
14. Implementation: change one approved task using existing patterns first.
15. Review: check correctness, scope, architecture, compatibility, tests, security, and docs.
16. Testing: run the smallest meaningful checks.
17. Refactor only if approved: preserve behavior and prove preservation.
18. Documentation: update affected docs.
19. Memory Update when durable project state, decisions, risks, or next actions changed.
20. Final Report: list created, modified, skipped, review-required files, conflicts, and validation.

## Operating Lanes
- Lite: tiny bug fixes, narrow code edits, one focused test, documentation-only updates, and quick reviews. Use repository inspection, instruction review, implementer or reviewer, tester when behavior changes, and final reporting. Escalate if any public contract, architecture, migration, release, security, dependency, or governance surface appears.
- Standard: normal feature work inside existing architecture. Use specification, implementer, tester, reviewer, and documenter or project_memory when outputs or durable state change.
- Extended: architecture changes, public API or config changes, data model changes, migrations, releases, CI/security/dependency/governance work, or cross-package ownership changes. Use the relevant guardian skills before implementation and require explicit validation evidence.

## Escalation Triggers
- Public API, CLI, file format, plugin contract, or integration-facing behavior changes.
- Configuration sources, defaults, validation, precedence, or secret handling changes.
- Data model, persistence, serialization, migration, or compatibility changes.
- Runtime, dependency, package manager, CI, release, security, observability, or governance surfaces change.
- The task requires deleting, renaming, overwriting, or replacing maintained content.
- The requested outcome cannot be validated with the current repository tools.

## Inputs
- User request and explicit constraints.
- Existing repository files and instruction hierarchy.
- Current architecture, configuration, tests, release records, and documentation when detectable.

## Outputs
- Updated governance artifact or validation evidence.
- Explicit unknowns and conflicts requiring human review.
- Final report that names changed files and checks run.

## Decision Criteria
- The guidance is generic enough to reuse across software domains.
- The change preserves existing useful content.
- The output is concrete enough for a future agent to execute.
- Compatibility, review, and maintenance impact are documented.

## Failure Modes
- Required files cannot be read.
- Existing instructions conflict with the requested change.
- The change would overwrite useful maintained content.
- Validation cannot be run or produces incomplete evidence.

## Human Review Requirements
- Required for architecture, public API, compatibility, release, dependency, and governance changes.
- Required when project facts are unknown and guessing would create risk.
- Required whenever a `Potential Conflict Requiring Human Review` section is added.

## Maintenance Instructions
- Update this document when the governed workflow changes.
- Keep examples neutral and avoid domain-specific assumptions.
- Remove or weaken guidance only through explicit human-approved change control.
