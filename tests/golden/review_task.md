# Review Task

## User Prompt
Review the current diff for correctness, scope, tests, and documentation without changing files.

## Expected Operating Lane
Lite

## Expected Primary Skill
agentframe-reviewer

## Allowed Secondary Skills
- agentframe-tester

## Forbidden Skills
- agentframe-architect
- agentframe-planner
- agentframe-release-manager
- agentframe-governance-guardian

## Escalation Triggers
- Escalate if the diff changes architecture, public API, config, data, migration, release, security, dependency, CI, governance, compatibility, plugin, frontend, or observability surfaces.

## Expected Stop Condition
Stop after findings; do not rewrite code unless explicitly asked.

## Expected Artifact
Severity-ordered review findings with file references.

## Forbidden Behaviors
- Do not modify files during review.
- Do not invent requirements not supported by the diff.
- Do not skip test-gap reporting.

## Over-Governance Risks
- Turning a focused review into a full planning or architecture exercise without evidence.

## Under-Governance Risks
- Only summarizing the diff without identifying risks or missing tests.
