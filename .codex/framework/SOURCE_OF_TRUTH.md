# Source Of Truth Policy

## Purpose
Define which AgentFrame files are canonical, how framework-local skill references relate to installable skills, and how drift is handled.

## Scope
This policy applies to `skills/agentframe-*`, `.codex/framework/skills/*`, validation tooling, release notes, and final reports for framework maintenance.

## Rules
- `skills/agentframe-*` are the canonical installable Codex skill definitions.
- `.codex/framework/skills/*` are framework-local reference copies for repositories that adopt the `.codex/` governance layer.
- Any substantive change to an installable skill must update the corresponding framework-local skill copy, or record an intentional difference in this file or the final report.
- Any substantive change to a framework-local skill copy must update the corresponding installable skill, or record why the copy intentionally differs.
- Skill directory names must not be deleted or renamed without explicit human approval.
- Drift must be treated as a validation issue unless it is explicitly documented as intentional.

## Required Workflow
1. Identify the skill pair before editing.
2. Read both the installable skill and framework-local skill copy.
3. Decide whether the change is substantive or only packaging-specific.
4. Apply substantive edits to both sides.
5. Keep installable-only metadata in `skills/agentframe-*/SKILL.md` frontmatter and `agents/openai.yaml`.
6. Run `npm run validate`.
7. Report any intentional drift in the final response.

## Inputs
- Installable skill under `skills/agentframe-*`.
- Framework-local copy under `.codex/framework/skills/*`.
- Current validator output.
- User request and compatibility constraints.

## Outputs
- Synchronized skill content or documented intentional drift.
- Validation evidence.
- Final report naming drift, skipped files, and human-review items.

## Decision Criteria
- A wording, workflow, responsibility, handoff, prohibition, output, or quality-bar change is substantive.
- YAML frontmatter and `agents/openai.yaml` are installable-only packaging metadata.
- Framework-local copies may omit installable YAML frontmatter.
- Framework-local copies may use local skill identifiers while installable skills use `agentframe-*` names.

## Failure Modes
- An installable skill changes without updating its framework-local copy.
- Framework-local skill text drifts silently from the canonical installable skill.
- A skill is renamed or removed without approval.
- Validator does not identify the file pair that drifted.

## Human Review Requirements
- Required for intentional drift.
- Required for skill deletion, rename, or public skill-name changes.
- Required when compatibility, migration, or release behavior changes.

## Maintenance Instructions
- Update this policy when the canonical skill layout changes.
- Keep the skill mapping in `scripts/validate-framework.js` aligned with this policy.
- Mention unresolved drift in final reports until it is fixed or approved.
