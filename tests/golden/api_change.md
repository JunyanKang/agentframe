# Api Change

## User Prompt
Assess a requested public API response-shape change before implementation.

## Expected Operating Lane
Extended

## Expected Primary Skill
agentframe-api-guardian

## Allowed Secondary Skills
- agentframe-compatibility-manager
- agentframe-specification
- agentframe-tester
- agentframe-documenter

## Forbidden Skills
- agentframe-frontend-experience-guardian

## Escalation Triggers
- Guarded surface: public API contract.
- Escalate to compatibility review when consumers, versions, schemas, or deprecation policy are affected.

## Expected Stop Condition
Stop if compatibility or deprecation policy is missing.

## Expected Artifact
API impact assessment and migration requirements.

## Forbidden Behaviors
- Do not implement the response change before compatibility impact is classified.
- Do not silently break consumers.
- Do not omit documentation requirements.

## Over-Governance Risks
- Adding unrelated frontend, CI, or release guardians before API impact is known.

## Under-Governance Risks
- Treating a public contract change as a simple implementation task.
