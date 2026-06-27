# Doc Only

## User Prompt
Update documentation for existing shipped behavior without changing code.

## Expected Operating Lane
Lite

## Expected Primary Skill
agentframe-documenter

## Allowed Secondary Skills
- agentframe-reviewer

## Forbidden Skills
- agentframe-architect
- agentframe-planner
- agentframe-implementer
- agentframe-governance-guardian

## Escalation Triggers
- Escalate if the documentation would define new behavior, public contracts, governance policy, release process, migration steps, or unimplemented features.

## Expected Stop Condition
Stop if docs would describe unimplemented behavior.

## Expected Artifact
Updated documentation and validation note.

## Forbidden Behaviors
- Do not change code.
- Do not document behavior that does not exist.
- Do not introduce new policy silently.

## Over-Governance Risks
- Creating specs, ADRs, or guardian reviews for a narrow documentation correction.

## Under-Governance Risks
- Failing to verify that the described behavior is already implemented.
