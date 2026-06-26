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
- No implementation starts before repository inspection, instruction review, and specification exist.
- Refactoring requires explicit approval unless it is the smallest safe fix for the current task.

## Required Workflow
1. Read applicable instructions, current project state, and target files.
2. Classify the work as framework-level, project-local, or mixed.
3. Define required outputs, review gates, and stop conditions.
4. Make the smallest durable change that satisfies the requirement.
5. Run validation and report created, modified, skipped, and review-required files.
6. User Requirement: capture request, constraints, and done condition; stop if safety rules conflict.
7. Repository Inspection: list relevant files, tools, tests, docs, and instructions; exit with an inventory.
8. Existing Instruction Review: read applicable instructions; stop on unresolved conflict.
9. Clarifying Questions if Needed: ask only when safe assumptions would create material risk.
10. Architecture Review: identify boundaries, dependencies, interfaces, and risks.
11. Planning: split work into independently reviewable tasks.
12. Specification: define requirements, non-requirements, impacts, tests, docs, and rollback.
13. Implementation: change one approved task using existing patterns first.
14. Review: check correctness, scope, architecture, compatibility, tests, security, and docs.
15. Testing: run the smallest meaningful checks.
16. Refactor only if approved: preserve behavior and prove preservation.
17. Documentation: update affected docs.
18. Memory Update: record current state, decisions, risks, and next actions.
19. Final Report: list created, modified, skipped, review-required files, conflicts, and validation.

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
