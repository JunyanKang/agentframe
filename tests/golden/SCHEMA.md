# Golden Scenario Schema

## Purpose
Define the required schema for every golden scenario file under `tests/golden/`.

## User Prompt
- Purpose: capture the generic user request pattern.
- Required content: one concise software-engineering request.
- Allowed values: any generic prompt text.
- Common mistakes: using private repository details, domain-specific examples, or multiple unrelated tasks.
- Validator expectations: the field must exist and have a non-empty body.

## Expected Operating Lane
- Purpose: define the expected workflow weight.
- Required content: one lane name.
- Allowed values: `Lite`, `Standard`, `Extended`, `Governance`.
- Common mistakes: inventing a new lane or using a profile name like Core or Full.
- Validator expectations: the value must be one of the allowed lane names.

## Expected Primary Skill
- Purpose: name the skill that owns the first decision or artifact.
- Required content: one valid `agentframe-*` skill name.
- Allowed values: an existing installable AgentFrame skill.
- Common mistakes: using a framework-local name, plugin-style prefix, or non-existent skill.
- Validator expectations: the skill must exist in the installable skill map.

## Allowed Secondary Skills
- Purpose: list skills that may participate when the scenario needs them.
- Required content: zero or more valid `agentframe-*` skill names as bullets.
- Allowed values: existing installable AgentFrame skills.
- Common mistakes: allowing every guardian by default or allowing a skill that conflicts with the lane.
- Validator expectations: every listed skill must exist and must not also be forbidden.

## Forbidden Skills
- Purpose: list skills that should not be invoked for the scenario by default.
- Required content: zero or more valid `agentframe-*` skill names as bullets.
- Allowed values: existing installable AgentFrame skills.
- Common mistakes: forbidding the primary skill or omitting heavy skills from Lite scenarios.
- Validator expectations: every listed skill must exist and must not include the primary skill.

## Escalation Triggers
- Purpose: define when the scenario should stop, hand off, or move to a heavier lane.
- Required content: one or more bullets naming concrete risk surfaces.
- Allowed values: generic software-engineering surfaces such as API, config, data, dependency, security, migration, release, CI, governance, frontend, observability, compatibility, or architecture.
- Common mistakes: vague triggers such as "if needed" or "when complex".
- Validator expectations: the field must exist and have content; Extended scenarios must include `Guarded surface:`.

## Expected Stop Condition
- Purpose: define when Codex should stop instead of continuing.
- Required content: one concise stop rule.
- Allowed values: any generic stop condition.
- Common mistakes: omitting stop behavior or allowing silent escalation.
- Validator expectations: the field must exist and have a non-empty body.

## Expected Artifact
- Purpose: define the output the primary skill should produce.
- Required content: one concise artifact description.
- Allowed values: assessment, plan, focused diff, validation evidence, review findings, memory update, or another role-specific artifact.
- Common mistakes: generic "do the task" wording.
- Validator expectations: the field must exist and have a non-empty body.

## Forbidden Behaviors
- Purpose: describe actions Codex must avoid.
- Required content: one or more bullets.
- Allowed values: generic behavior prohibitions.
- Common mistakes: describing desired behavior instead of prohibited behavior.
- Validator expectations: the field must exist and have content.

## Over-Governance Risks
- Purpose: describe how the framework could become too heavy for the scenario.
- Required content: one or more bullets.
- Allowed values: unnecessary skills, unnecessary documents, or avoidable process.
- Common mistakes: leaving this blank for Lite scenarios.
- Validator expectations: the field must exist and have content.

## Under-Governance Risks
- Purpose: describe how the framework could be too light for the scenario.
- Required content: one or more bullets.
- Allowed values: missing tests, missing stop behavior, missing guarded-surface review, missing docs, or missing memory updates.
- Common mistakes: duplicating over-governance risks.
- Validator expectations: the field must exist and have content.
