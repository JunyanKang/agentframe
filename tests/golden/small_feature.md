# Small Feature

## User Prompt
Add a small feature inside existing architecture with no public API or data migration.

## Expected Operating Lane
Standard

## Expected Primary Skill
agentframe-specification

## Allowed Secondary Skills
- agentframe-implementer
- agentframe-tester
- agentframe-reviewer
- agentframe-documenter

## Forbidden Skills
- agentframe-release-manager
- agentframe-migration-guardian

## Escalation Triggers
- Escalate if the feature changes a public contract, dependency direction, data model, migration surface, security boundary, or release process.

## Expected Stop Condition
Stop if the feature changes a public contract, dependency direction, or migration surface.

## Expected Artifact
Implementation specification and validation plan.

## Forbidden Behaviors
- Do not start implementation before requirements are clear.
- Do not invoke every guardian by default.
- Do not broaden the feature beyond the approved scope.

## Over-Governance Risks
- Treating a contained feature as an architecture or governance task without an affected surface.

## Under-Governance Risks
- Skipping specification for behavior that affects users or tests.
