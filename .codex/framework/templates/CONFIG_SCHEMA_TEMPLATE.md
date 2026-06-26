# Config Schema Template

## Purpose
Define configuration sources, schema, defaults, validation, precedence, and migration rules.

## Metadata
- Title:
- Owner: Unknown - requires human input
- Status: Draft | Proposed | Approved | Superseded
- Created: YYYY-MM-DD
- Last updated: YYYY-MM-DD
- Related files:
- Related decisions:

## Required Sections

### Configuration Source
- Source type: File | Environment | CLI | Runtime
- Name:
- Owner:
- Load location:
- Allowed environments:

### Schema Entry
- Key:
- Type:
- Default:
- Required: Yes | No
- Allowed values:
- Validation rule:
- Invalid value behavior:
- Secret: Yes | No

### Precedence
- Lowest precedence source:
- Override order:
- Highest precedence source:
- Conflict behavior:

### Migration
- Old key or source:
- New key or source:
- Compatibility behavior:
- Migration step:
- Deprecation timeline:

### Documentation And Tests
- Docs to update:
- Validation test:
- Compatibility test:
- Example config required: Yes | No

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
