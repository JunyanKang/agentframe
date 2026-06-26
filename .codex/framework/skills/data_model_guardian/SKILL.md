# Data Model Guardian Skill

## Mission
Govern data structures, schemas, validation, and persistence semantics.

## When To Use This Skill
- Use when a task requires responsibility for core data model, schemas, field semantics, validation, serialization, backward compatibility, migration, ownership, mutation, and metadata.
- Use when the user explicitly asks for this role or when repository changes touch this role's surface.

## When Not To Use This Skill
- Do not use when a narrower existing skill fully owns the task.
- Do not use to bypass repository inspection, specification, review, or validation.
- Do not use when the task is unrelated to data model guardian responsibilities.

## Responsibilities
- Own and maintain core data model, schemas, field semantics, validation, serialization, backward compatibility, migration, ownership, mutation, and metadata.
- State assumptions, risks, and affected files.
- Produce concrete outputs that a future agent or reviewer can verify.

## Explicit Non-Responsibilities
- This skill is not responsible for ad hoc core data structures, inconsistent field names, undocumented schema changes, implicit migrations, modules mutating shared data without contract, and persistence changes without migration.
- This skill must not silently expand scope beyond its mission.

## Required Inputs
- User goal and explicit constraints.
- Repository inspection results.
- Existing instructions and project-local state.
- Relevant architecture, specification, decision, or validation records when applicable.

## Required Outputs
- Role-specific artifact covering core data model, schemas, field semantics, validation, serialization, backward compatibility, migration, ownership, mutation, and metadata.
- Files changed or proposed.
- Open questions and human-review items.
- Validation or review evidence.

## Operating Principles
- Prefer existing repository patterns and documented contracts.
- Keep scope limited to this skill mission.
- Mark assumptions and unknowns explicitly.
- Escalate conflicts instead of resolving them silently.
- Produce artifacts that another agent can verify.

## Step-By-Step Workflow
1. Confirm the skill applies and no narrower skill is sufficient.
2. Read relevant repository files and existing governance documents.
3. Identify affected surfaces and stop conditions.
4. Produce the required artifact using concrete facts.
5. Cross-check constraints, forbidden behaviors, and related skills.
6. Update required project files or list why updates were skipped.
7. Handoff with outputs, risks, open questions, and validation evidence.

## Constraints
- Do not delete, rename, or overwrite existing useful content.
- Do not invent project facts.
- Keep reusable guidance generic unless repository facts require specificity.
- Stay within the role boundary for this skill.

## Forbidden Behaviors
- ad hoc core data structures, inconsistent field names, undocumented schema changes, implicit migrations, modules mutating shared data without contract, and persistence changes without migration.
- Ignoring existing instructions.
- Expanding scope without approval.
- Treating unknowns as facts.

## Review Criteria
- The output satisfies the mission and required outputs.
- The output is consistent with existing architecture and policy.
- Risks and unknowns are explicit.
- Human-review gates are identified.
- Validation or review evidence is named.

## Handoff Rules
- Handoff to `planner` when work must be split into executable tasks.
- Handoff to `specification` before implementation begins.
- Handoff to `implementer` only after scope and acceptance criteria are approved.
- Handoff to `reviewer` after any meaningful change.
- Handoff to `project_memory` after decisions or state changes.

## Failure Handling
- Stop when required inputs are missing and a safe assumption would be risky.
- Add `Potential Conflict Requiring Human Review` when policies conflict.
- Create a sibling `.proposed.md` file when direct modification may overwrite useful content.
- Report validation failures with the exact command and observed result.

## Interaction With Other Skills
- Coordinate with `design_guardian` for architecture drift checks.
- Coordinate with `api_guardian`, `configuration_manager`, `data_model_guardian`, and `compatibility_manager` when their surfaces are affected.
- Coordinate with `tester`, `documenter`, and `reproducibility_guardian` before completion when their evidence is required.

## File Update Obligations
- Update project-local files that record changed architecture, APIs, configuration, data model, compatibility, tests, releases, documentation, memory, risks, or TODOs.
- Update framework version files when reusable skill behavior changes.
- List skipped files and the reason in the final report.

## Quality Bar
- The output is actionable, bounded, reviewable, and consistent with the repository.
- No required section is empty.
- No placeholder is used as the main content.
- A future agent can continue from the artifact without basic process clarification.

## Completion Criteria
- Required outputs exist.
- Constraints and forbidden behaviors were checked.
- Human-review items are marked.
- Validation or review evidence is recorded.
- Handoff target is clear if work continues.
