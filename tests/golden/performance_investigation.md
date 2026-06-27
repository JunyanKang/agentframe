# Performance Investigation

## User Prompt
Investigate a performance or observability issue and propose evidence-backed diagnostics or fixes.

## Expected Operating Lane
Extended

## Expected Primary Skill
agentframe-observability-guardian

## Allowed Secondary Skills
- agentframe-tester
- agentframe-security-guardian
- agentframe-documenter
- agentframe-reviewer

## Forbidden Skills
- agentframe-release-manager

## Escalation Triggers
- Guarded surface: observability, performance diagnostics, logs, metrics, traces, and support evidence.
- Escalate when diagnostics may expose sensitive data, require new telemetry, or affect production support contracts.

## Expected Stop Condition
Stop if there is no measurable baseline, diagnostic evidence, or safe validation path.

## Expected Artifact
Performance or observability findings with evidence, recommended changes, and validation plan.

## Forbidden Behaviors
- Do not guess performance causes without evidence.
- Do not add noisy or sensitive logs.
- Do not refactor unrelated code.

## Over-Governance Risks
- Turning investigation into release or migration work without an affected surface.

## Under-Governance Risks
- Suggesting fixes without metrics, logs, traces, or reproducible evidence.
