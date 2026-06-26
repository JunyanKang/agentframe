# API Contract Template

## Purpose
Define a public or integration-facing API contract and its compatibility requirements.

## Metadata
- Title:
- Owner: Unknown - requires human input
- Status: Draft | Proposed | Approved | Superseded
- Created: YYYY-MM-DD
- Last updated: YYYY-MM-DD
- Related files:
- Related decisions:

## Required Sections

### API Identity
- Name:
- Type: Function | Class | CLI | Service | File | Event | Plugin contract
- Stability: Public | Experimental | Deprecated | Internal
- Owner:

### Contract
- Inputs:
- Outputs:
- Error behavior:
- Side effects:
- Idempotency:
- Ordering or timing guarantees:

### Compatibility
- Backward compatibility promise:
- Breaking change definition:
- Deprecation policy:
- Migration guide required: Yes | No

### Validation
- Contract test:
- Invalid-input test:
- Compatibility test:
- Documentation check:

### Change Control
- Allowed compatible changes:
- Changes requiring review:
- Changes requiring version bump:
- Rollback step:

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
