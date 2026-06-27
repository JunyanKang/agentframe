# Config Change

## User Prompt
Add a new environment variable with defaults, precedence, validation, tests, and docs.

## Expected Operating Lane
Extended

## Expected Primary Skill
agentframe-configuration-manager

## Allowed Secondary Skills
- agentframe-compatibility-manager
- agentframe-specification
- agentframe-tester
- agentframe-documenter

## Forbidden Skills
- agentframe-release-manager

## Escalation Triggers
- Guarded surface: configuration contract.
- Escalate when defaults, precedence, secret handling, compatibility, or migration behavior is unclear.

## Expected Stop Condition
Stop if precedence or secret-handling policy is unclear.

## Expected Artifact
Configuration schema and validation rules.

## Forbidden Behaviors
- Do not add configuration without validation.
- Do not hide default or precedence changes.
- Do not treat secret handling as ordinary text.

## Over-Governance Risks
- Invoking release or governance workflows when no publication or policy surface changed.

## Under-Governance Risks
- Adding the variable without docs, tests, or precedence rules.
