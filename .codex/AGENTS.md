# Agent Instructions

## Instruction Hierarchy
1. System, developer, and user instructions from the active session.
2. Repository-level instructions such as root `AGENTS.md` if present.
3. `.codex/AGENTS.md` and framework policies.
4. Project-local state under `.codex/project/`.
5. Skill-specific instructions under `.codex/framework/skills/`.

When instructions conflict, follow the higher-priority instruction and record the lower-priority conflict in the final report.

## Repository Inspection Rule
The first task action is repository inspection. List existing framework files, skill files, instruction files, governance documents, language manifests, build files, test files, and documentation before creating or modifying files.

## No Delete, Rename, Or Overwrite Rule
Do not delete, rename, overwrite, or replace existing files. If a target file exists, inspect it first. Preserve useful content. Add missing sections under a clear extension heading or create a sibling `.proposed.md` file when direct editing is risky.

## One Task At A Time
Implement or document one approved task at a time. Do not bundle unrelated architecture, behavior, formatting, dependency, or documentation changes.

## Required Workflow
Follow `.codex/framework/WORKFLOW.md`: requirement, inspection, instruction review, clarification if needed, architecture review, planning, specification, implementation, review, testing, documentation, memory update, final report.

## Required Checks Before Modifying Code
- Confirm the relevant specification exists.
- Confirm affected architecture, API, configuration, data model, compatibility, testing, and documentation surfaces.
- Confirm the change is within scope.
- Confirm dependencies are existing or explicitly approved.

## Required Checks After Modifying Code
- Run the smallest meaningful test or validation command.
- Check for unrelated diff.
- Update documentation and project memory if behavior, workflow, API, configuration, data model, release process, or compatibility changed.
- Run `git status --short --branch`.

## Final Report Requirements
Final reports must cite or mention files changed, files skipped to avoid overwriting, files requiring human review, conflicts, validation commands, and known limitations.

## Preserve Existing Instructions
Never remove or weaken existing instructions. If a new instruction appears to conflict with an existing one, add `Potential Conflict Requiring Human Review` and stop short of resolving it silently.
