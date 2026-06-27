# Architecture Change

## User Prompt
Split a subsystem into a new package and define dependency direction before coding.

## Expected Operating Lane
Extended

## Expected Primary Skill
agentframe-architect

## Allowed Secondary Skills
- agentframe-design-guardian
- agentframe-planner
- agentframe-specification

## Forbidden Skills
- agentframe-implementer

## Escalation Triggers
- Guarded surface: architecture and dependency direction.
- Escalate when module ownership, interfaces, persistence, runtime packaging, or ADR requirements are unresolved.

## Expected Stop Condition
Stop after architecture output; do not implement code.

## Expected Artifact
Architecture artifact, boundaries, risks, and ADR requirements.

## Forbidden Behaviors
- Do not move code before boundaries are approved.
- Do not collapse design review into implementation.
- Do not omit dependency direction.

## Over-Governance Risks
- Adding release, security, or migration guardians before those surfaces are identified.

## Under-Governance Risks
- Implementing package boundaries without architectural approval.
