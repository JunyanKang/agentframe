# Memory Policy

## Purpose
Define what must be remembered, where memory is stored, when memory is updated, how conflicts are handled, how stale memory is marked, and how unresolved questions are tracked.

## Scope
This document applies to AgentFrame governance assets and to repositories that adopt them. It does not define product features or domain-specific behavior.

## Rules
- Inspect the repository before editing.
- Preserve existing instructions and useful content.
- Work one task at a time with a clear acceptance check.
- Separate reusable framework guidance from project-local facts.
- Record conflicts instead of resolving them silently.
- Memory records confirmed facts, active decisions, open questions, risks, technical debt, recent changes, and next actions.
- Do not delete historical decisions; mark them superseded with a reference.
- Separate confirmed facts from assumptions.

## Required Workflow
1. Read applicable instructions, current project state, and target files.
2. Classify the work as framework-level, project-local, or mixed.
3. Define required outputs, review gates, and stop conditions.
4. Make the smallest durable change that satisfies the requirement.
5. Run validation and report created, modified, skipped, and review-required files.

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
