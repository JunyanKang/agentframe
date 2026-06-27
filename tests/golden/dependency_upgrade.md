# Dependency Upgrade

## User Prompt
Evaluate and apply a package upgrade that may affect runtime support and lockfiles.

## Expected Operating Lane
Extended

## Expected Primary Skill
agentframe-dependency-guardian

## Allowed Secondary Skills
- agentframe-compatibility-manager
- agentframe-tester
- agentframe-documenter

## Forbidden Skills
- agentframe-frontend-experience-guardian

## Escalation Triggers
- Guarded surface: dependency, lockfile, runtime, license, and compatibility impact.
- Escalate when license, vulnerability, runtime floor, transitive dependency, or rollback impact is unclear.

## Expected Stop Condition
Stop if license, runtime floor, or rollback impact is unclear.

## Expected Artifact
Dependency decision, changed manifests, and validation evidence.

## Forbidden Behaviors
- Do not update lockfiles blindly.
- Do not ignore license or runtime changes.
- Do not bundle unrelated upgrades.

## Over-Governance Risks
- Treating every dependency update as a release task before publication impact is known.

## Under-Governance Risks
- Skipping compatibility, vulnerability, or lockfile validation.
