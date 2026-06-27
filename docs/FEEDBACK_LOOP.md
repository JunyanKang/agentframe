# AgentFrame Feedback Loop

## Purpose
Explain how AgentFrame maintainers convert real usage failures into better golden scenarios, routing, prompts, documentation, or validator checks.

The feedback loop should keep AgentFrame practical. Not every imperfect Codex response means the framework needs more process. Improve the framework when the failure is repeatable, general, and tied to routing, skill behavior, validation, or documentation.

## What Counts As A Framework Failure
A framework failure is a mismatch between the intended AgentFrame guardrails and what happened during real use.

It can be a routing failure, lane-selection failure, prompt weakness, validator gap, documentation gap, or excessive process burden. It is not automatically a framework failure when a task was ambiguous, the repository lacked tests, or a user requested broad work.

## Failure Categories
- wrong skill selected
- too many skills selected
- too few skills selected
- Lite lane over-governed
- Standard lane under-specified
- Extended lane missing guarded-surface assessment
- Codex changed unrelated files
- Codex failed to stop on public API/config/data/dependency/security/migration/release risk
- Codex skipped tests
- Codex skipped documentation
- Codex failed to update project memory
- default_prompt too weak
- validator failed to catch a regression
- documentation too heavy or unclear

## Triage Workflow
1. Capture the field note before changing the framework.
2. Identify the expected operating lane and primary skill.
3. Decide whether the failure is routing, prompt, validator, documentation, or user-request ambiguity.
4. Prefer the smallest durable improvement.
5. Add or update a golden scenario when the failure represents a reusable contract.
6. Add a validator check only when the rule can be deterministic and not overly brittle.
7. Run validation and record what changed.

## Convert A Failure Into A Golden Scenario
Create or update a scenario when the failure is about expected routing, lane selection, stop behavior, over-governance, or under-governance.

The scenario should include:

- the generic user prompt pattern.
- expected operating lane.
- primary and allowed secondary skills.
- forbidden skills.
- escalation triggers.
- stop condition and expected artifact.
- forbidden behaviors.
- over-governance and under-governance risks.

Keep the scenario generic. Do not encode one repository's private naming, domain, or file layout.

## Convert A Failure Into A Skill Prompt Change
Change a skill or `agents/openai.yaml` default prompt when Codex selected the right skill but the instruction was too weak.

Good prompt changes:

- name the role-specific artifact.
- name the surfaces to inspect.
- state what must not be changed.
- define when to stop or hand off.

Avoid broad prompt changes that make every task heavier.

## Convert A Failure Into A Routing Change
Change routing when the wrong skill, too many skills, or too few skills were selected for a general task pattern.

Routing changes should clarify:

- which lane owns the task.
- which skill is primary.
- which skills are allowed only after escalation.
- which skills must be skipped by default.
- what final report evidence is required.

## Convert A Failure Into A Validator Check
Add validator coverage when the failure can be checked deterministically.

Good validator checks include:

- required documentation links.
- required golden scenario fields.
- invalid skill references.
- missing operating lanes.
- vague default prompt phrases.
- version coherence.

Avoid validator checks that depend on subjective writing quality or one exact paragraph.

## When Not To Change The Framework
Do not change AgentFrame when:

- the user prompt was too ambiguous to route safely.
- the repository lacks tests or docs and the framework already reported that gap.
- the task is domain-specific and does not generalize.
- the fix would make Lite tasks heavy by default.
- a one-off Codex mistake is not repeatable.
- existing docs already describe the expected behavior clearly.

## Field Note Template
```text
Date:
Repository context:
User prompt:
Expected lane:
Actual behavior:
Failure category:
Files affected:
What should have happened:
Proposed golden scenario change:
Proposed skill/default_prompt change:
Proposed routing change:
Proposed validator change:
Human review needed:
```

## Maintenance Checklist
- Preserve public skill names and existing skill directories.
- Keep examples generic and software-engineering focused.
- Update golden scenarios before adding brittle validator logic.
- Update README, adoption docs, or usage patterns when user-facing guidance changes.
- Run `npm run validate`.
- Run Codex `quick_validate.py` for installable skills when skill metadata changed.
- Record validation and migration notes in `CHANGELOG.md` when preparing a release.
