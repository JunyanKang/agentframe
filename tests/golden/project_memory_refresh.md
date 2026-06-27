# Project Memory Refresh

## User Prompt
Refresh durable project memory after a completed change using the final diff and validation results.

## Expected Operating Lane
Lite

## Expected Primary Skill
agentframe-project-memory

## Allowed Secondary Skills
- agentframe-reviewer

## Forbidden Skills
- agentframe-architect
- agentframe-planner
- agentframe-release-manager
- agentframe-governance-guardian

## Escalation Triggers
- Escalate if the memory update reveals unresolved architecture, public API, config, data, migration, release, security, dependency, CI, governance, compatibility, plugin, frontend, or observability decisions.

## Expected Stop Condition
Stop if the change is not complete or validation evidence is unavailable.

## Expected Artifact
Updated durable project state, risks, decisions, and next actions.

## Forbidden Behaviors
- Do not invent project state.
- Do not modify code.
- Do not record temporary implementation details as durable facts.

## Over-Governance Risks
- Opening a planning or governance workflow when only completed-state memory needs updating.

## Under-Governance Risks
- Skipping changed public surfaces, risks, or next actions.
