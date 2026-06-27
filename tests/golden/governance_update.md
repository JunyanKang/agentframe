# Governance Update

## User Prompt
Update AgentFrame routing, validators, or source-of-truth policy without renaming skills or deleting existing content.

## Expected Operating Lane
Governance

## Expected Primary Skill
agentframe-governance-guardian

## Allowed Secondary Skills
- agentframe-specification
- agentframe-tester
- agentframe-documenter
- agentframe-project-memory

## Forbidden Skills
- agentframe-release-manager

## Escalation Triggers
- Guarded surface: governance policy, routing, validators, source-of-truth, skill synchronization, and framework metadata.
- Escalate when public skill names, deletion, rename, release policy, or source-of-truth drift is proposed.

## Expected Stop Condition
Stop if the change would rename skills, delete skills, or alter public skill names without explicit approval.

## Expected Artifact
Governance consistency report, focused diff, and validation evidence.

## Forbidden Behaviors
- Do not rename public skills.
- Do not delete existing skills.
- Do not weaken source-of-truth validation.

## Over-Governance Risks
- Bundling unrelated product, naming, or release changes into a governance hardening task.

## Under-Governance Risks
- Changing validators without updating golden scenarios or routing policy.
