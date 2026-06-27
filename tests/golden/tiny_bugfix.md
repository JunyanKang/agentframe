# Tiny Bugfix

## User Prompt
Fix a small null-check bug in one helper and add the narrowest regression test.

## Expected Operating Lane
Lite

## Expected Primary Skill
agentframe-implementer

## Allowed Secondary Skills
- agentframe-tester
- agentframe-reviewer

## Forbidden Skills
- agentframe-architect
- agentframe-planner
- agentframe-release-manager
- agentframe-governance-guardian

## Escalation Triggers
- Escalate if the bug requires a public contract, architecture, config, data, migration, release, security, dependency, CI, governance, compatibility, plugin, frontend, or observability surface change.

## Expected Stop Condition
Stop if the bug requires a public contract or architecture change.

## Expected Artifact
Focused validated diff and regression evidence.

## Forbidden Behaviors
- Do not refactor unrelated helpers.
- Do not change public APIs.
- Do not edit unrelated files.

## Over-Governance Risks
- Pulling in architect, planner, specification, release, or guardian skills for a narrow local fix.

## Under-Governance Risks
- Skipping the regression test or missing an affected caller.
