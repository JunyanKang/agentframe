# Golden Scenario Contracts

## Purpose
Explain the static contracts under `tests/golden/`.

Golden scenarios describe expected AgentFrame routing, operating lane selection, stop behavior, and governance boundaries for common software-engineering requests.

## What Golden Scenarios Validate
- The expected operating lane for a generic task pattern.
- The expected primary skill.
- Allowed secondary skills.
- Skills that should be skipped by default.
- Escalation triggers and stop conditions.
- Expected artifacts.
- Forbidden behaviors.
- Over-governance and under-governance risks.

## What Golden Scenarios Do Not Validate
Golden scenarios are not live Codex execution tests.

They do not prove that Codex will always choose the right skill, edit the right files, or produce the right final answer. They are static routing and behavior contracts used by the validator and maintainers.

## Scenario Fields
Each scenario must follow the schema in [SCHEMA.md](SCHEMA.md).

Required fields:

- User Prompt
- Expected Operating Lane
- Expected Primary Skill
- Allowed Secondary Skills
- Forbidden Skills
- Escalation Triggers
- Expected Stop Condition
- Expected Artifact
- Forbidden Behaviors
- Over-Governance Risks
- Under-Governance Risks

## Operating Lane Expectations
- Lite stays lightweight and avoids architect, planner, specification, release, governance, and broad guardian skills by default.
- Standard supports normal feature work inside existing architecture.
- Extended names the specific guarded surface.
- Governance includes `agentframe-governance-guardian`.

## Over-Governance And Under-Governance
Over-governance means AgentFrame adds unnecessary process to a task, especially a Lite task.

Under-governance means AgentFrame fails to use enough structure for a task that affects behavior, compatibility, public contracts, guarded surfaces, or long-lived project state.

Every scenario should name both risks so maintainers can tune routing in both directions.

## Adding A New Scenario
Add a scenario when a real or expected task pattern needs a durable contract.

Use generic software-engineering language. Do not include private project names, domain-specific examples, or repository-specific file paths.

## Updating A Scenario
Update a scenario when routing, lane definitions, stop behavior, or skill responsibilities change.

When updating, preserve the field structure and adjust validator expectations if the schema changes.

## Validator Expectations
The validator checks that required scenario files exist, required headings are present, skill references are valid, lane values are valid, Extended scenarios name a guarded surface, Governance scenarios include `agentframe-governance-guardian`, and Lite scenarios do not require heavy skills by default.
