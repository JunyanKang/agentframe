# Migration Task

## User Prompt
Plan a migration from an existing state to a new state with validation and rollback before implementation.

## Expected Operating Lane
Extended

## Expected Primary Skill
agentframe-migration-guardian

## Allowed Secondary Skills
- agentframe-compatibility-manager
- agentframe-data-model-guardian
- agentframe-configuration-manager
- agentframe-specification
- agentframe-tester
- agentframe-documenter

## Forbidden Skills
- agentframe-release-manager

## Escalation Triggers
- Guarded surface: migration path, rollback, compatibility window, source state, and target state.
- Escalate when old-state detection, rollback, data integrity, config conversion, or compatibility window is unclear.

## Expected Stop Condition
Stop before implementation if source state, target state, rollback, or validation is missing.

## Expected Artifact
Migration plan with source state, target state, steps, rollback, compatibility, and validation.

## Forbidden Behaviors
- Do not implement migration before planning rollback.
- Do not assume clean-install-only behavior.
- Do not ignore old-state compatibility.

## Over-Governance Risks
- Adding release management before a publication decision exists.

## Under-Governance Risks
- Treating migration as a normal feature without rollback or validation.
