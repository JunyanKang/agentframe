# Framework Version

## Purpose
Track AgentFrame version 0.5.0, semantic versioning policy, compatibility expectations, upgrade procedure, migration note requirements, and breaking change policy.

## Scope
This document applies to AgentFrame governance assets and to repositories that adopt them. It does not define product features or domain-specific behavior.

## Rules
- Inspect the repository before editing.
- Preserve existing instructions and useful content.
- Work one task at a time with a clear acceptance check.
- Separate reusable framework guidance from project-local facts.
- Record conflicts instead of resolving them silently.
- Use semantic versioning.
- Treat required skill section changes as compatibility-relevant.
- Current version: `0.5.0`.
- Record unreleased framework-hardening work in root `CHANGELOG.md`.
- Do not claim a release has happened unless version files, changelog, tag, and release notes are explicitly updated.
- Changelog entries must include migration notes for compatibility-relevant changes.

## Required Workflow
1. Read applicable instructions, current project state, and target files.
2. Classify the work as framework-level, project-local, or mixed.
3. Define required outputs, review gates, and stop conditions.
4. Make the smallest durable change that satisfies the requirement.
5. Run validation and report created, modified, skipped, and review-required files.
6. Update `CHANGELOG.md` for every framework, skill, template, or validator change.
7. Record migration notes before changing public skill names, required sections, install paths, or compatibility guarantees.

## Inputs
- User request and explicit constraints.
- Existing repository files and instruction hierarchy.
- Current architecture, configuration, tests, release records, and documentation when detectable.

## Outputs
- Updated governance artifact or validation evidence.
- Explicit unknowns and conflicts requiring human review.
- Changelog entry for unreleased work or released version changes.
- Migration note for compatibility-relevant changes.
- Final report that names changed files and checks run.

## Decision Criteria
- The guidance is generic enough to reuse across software domains.
- The change preserves existing useful content.
- The output is concrete enough for a future agent to execute.
- Compatibility, review, and maintenance impact are documented.
- Major version changes are required for breaking public skill names, install paths, required section contracts, or validator expectations that adopters cannot satisfy without migration.
- Minor version changes add compatible skills, templates, policies, or validator checks.
- Patch version changes clarify or fix existing behavior without changing adopter obligations.

## Failure Modes
- Required files cannot be read.
- Existing instructions conflict with the requested change.
- The change would overwrite useful maintained content.
- Validation cannot be run or produces incomplete evidence.
- A release is implied without updating version metadata and changelog.
- A breaking change lacks migration notes.

## Human Review Requirements
- Required for architecture, public API, compatibility, release, dependency, and governance changes.
- Required when project facts are unknown and guessing would create risk.
- Required whenever a `Potential Conflict Requiring Human Review` section is added.
- Required before breaking installable skill names, required headings, framework layout, or validator contracts.

## Maintenance Instructions
- Update this document when the governed workflow changes.
- Keep current version aligned with `package.json`, `CHANGELOG.md`, tags, and release notes when a release is made.
- Keep unreleased hardening work in `CHANGELOG.md` until a version bump is explicitly requested.
- Keep examples neutral and avoid domain-specific assumptions.
- Remove or weaken guidance only through explicit human-approved change control.
