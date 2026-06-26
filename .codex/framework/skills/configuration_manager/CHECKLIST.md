# Configuration Manager Checklist

## Pre-Flight Checklist
- Confirm this skill is the right role for the task.
- Read applicable instructions and project-local state.
- Identify target files and existing content.
- Identify affected architecture, API, configuration, data, compatibility, testing, documentation, and memory surfaces.
- Stop if required inputs are missing and cannot be safely inferred.

## Execution Checklist
- Work on one task or artifact at a time.
- Preserve useful existing content.
- Keep assumptions and unknowns explicit.
- Use existing repository patterns before introducing new ones.
- Record conflicts under `Potential Conflict Requiring Human Review`.

## Output Checklist
- Required outputs for the skill are present.
- Outputs include concrete decisions, criteria, risks, and next actions.
- Files changed are named.
- Skipped files and reasons are named.
- Validation evidence is included or a concrete reason is given.

## Safety Checklist
- No existing file was deleted, renamed, or overwritten without approval.
- No unrelated subsystem was changed.
- No public API, configuration, data model, compatibility, or release policy changed silently.
- No dependency was added without approval.
- No unknown project fact was fabricated.

## Review Checklist
- The output matches the user request.
- The output follows the skill boundaries.
- Risks, failure modes, and human-review gates are visible.
- Required documentation and memory updates are complete.
- Validation checks are appropriate for the change.

## Handoff Checklist
- Next skill or human owner is named when work remains.
- Acceptance criteria are clear.
- Open questions are listed.
- Required decisions are linked or described.
- Follow-up tasks have priority and dependency when known.

## Stop Conditions
- A higher-priority instruction conflicts with this skill.
- Existing useful content would need replacement without approval.
- Required human input is needed to avoid fabrication.
- Validation shows the artifact is structurally incomplete.
- The task would expand beyond the approved scope.
