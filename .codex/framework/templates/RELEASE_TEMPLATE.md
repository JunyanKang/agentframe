# Release Template

## Purpose
Prepare a release with version, compatibility, validation, artifacts, and rollback notes.

## Metadata
- Title:
- Owner: Unknown - requires human input
- Status: Draft | Proposed | Approved | Superseded
- Created: YYYY-MM-DD
- Last updated: YYYY-MM-DD
- Related files:
- Related decisions:

## Required Sections

### Release Identity
- Version:
- Release date: YYYY-MM-DD
- Release owner:
- Release type: Major | Minor | Patch | Prerelease

### Summary
- Why this release exists:
- User-visible changes:
- Maintainer-visible changes:
- Out of scope:

### Compatibility
- Breaking changes:
- Deprecations:
- Migration required: Yes | No
- Supported runtimes or platforms:
- Dependency changes:

### Validation
- Validation command:
- Result:
- CI run:
- Manual checks:
- Known gaps:

### Artifacts
- Source tag:
- Package or binary artifact:
- Documentation artifact:
- Checksum or provenance if applicable:

### Rollback
- Rollback trigger:
- Rollback command or process:
- Data or config rollback:
- Communication required:

## Optional Sections
- Alternatives considered:
- Open questions:
- Related risks:
- Follow-up tasks:

## Review Checklist
- Required fields are filled or marked `Unknown - requires human input`.
- Claims are traceable to repository files, commands, decisions, or user input.
- No domain-specific example is included unless it already exists in the target repository.
- Compatibility, migration, testing, and documentation impact are stated when relevant.
- Human-review items are clearly marked.

## Completion Criteria
- The document is actionable without basic process clarification.
- Conflicts are explicitly marked as `Potential Conflict Requiring Human Review`.
- Acceptance checks or review gates are concrete.
- Follow-up work has an owner, priority, dependency, and acceptance criteria when known.
