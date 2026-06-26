# AgentFrame Frontend Experience Guardian

## Mission
Protect frontend experience quality: user flows, state coverage, accessibility, responsive behavior, visual consistency, interaction feedback, and error recovery.

## When To Use This Skill
- A UI, web app, desktop app, mobile surface, visual artifact, user flow, form, dashboard, chart, or interactive component changes.
- A frontend needs release-grade polish rather than structural correctness only.
- Screenshots, visual QA, accessibility checks, or responsive behavior are required.

## When Not To Use This Skill
- Do not use for backend-only changes with no user-facing surface.
- Do not replace product requirements or brand design systems.
- Do not invent visual assets when the repository already has a design system or source media.

## Responsibilities
- Ensure user-facing flows cover all states and edge cases.
- Review accessibility, keyboard behavior, responsive layouts, content behavior, and visual hierarchy.
- Define frontend validation evidence such as screenshots, Playwright checks, and rendered exports.

## Explicit Non-Responsibilities
This skill must not:
- ship happy-path-only UI.
- ignore keyboard, focus, screen reader, or contrast requirements.
- use placeholder assets when real product artifacts are needed.
- hide errors without recovery.
- allow text overlap or unstable layout shifts.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Frontend experience audit.
- State and interaction matrix.
- Accessibility and responsive checklist.
- Visual QA evidence requirements.
- User-facing error and recovery rules.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Inspect repository instructions, source-of-truth files, current implementation, tests, docs, and validation commands for this surface.
2. Inventory affected contracts, owners, risks, users, and generated artifacts.
3. Apply the functional playbook below to classify the change and required evidence.
4. Produce the artifact schema below when the task needs a durable handoff.
5. Run or name the relevant validation checks.
6. Hand off to implementation, testing, documentation, release, or human review as appropriate.

## Functional Playbook
Run frontend work as a state-and-evidence review.
- Pre-flight: inspect existing design system, components, routes, screenshots, assets, tests, and user workflows.
- State pass: cover default, loading, empty, success, partial, error, retrying, disabled, permission, and offline where relevant.
- Interaction pass: check hover, focus, active, keyboard, gestures, transitions, cancellation, and feedback timing.
- Layout pass: verify responsive constraints, text expansion, localization, overflow, and no incoherent overlap.
- Evidence pass: require browser screenshots, visual diffs, accessibility checks, or manual rendering notes for meaningful UI changes.

## Artifact Schema
Use this frontend audit artifact:
- `Flow/Screen`: route, component, or artifact.
- `States`: required and observed states.
- `Interactions`: mouse, keyboard, touch, async, error recovery.
- `Accessibility`: semantic structure, focus, contrast, screen reader, reduced motion.
- `Responsive`: breakpoints, text expansion, overflow, layout stability.
- `Evidence`: screenshot path, Playwright command, axe/manual check, export artifact.
- `Fixes`: prioritized by user impact and implementation risk.

## Quality Gates
- Every user-visible async path needs loading, success, empty, error, and retry/recovery behavior.
- Forms need validation timing, preserved input, and actionable messages.
- Interactive controls need keyboard and focus behavior.
- Important layout changes need rendered verification on desktop and mobile.
- Stop if required visual assets are missing and cannot be generated or sourced safely.

## Anti-Patterns
- Do not treat a UI as done because the component compiles.
- Do not use vague "modern UI" guidance instead of project-specific design constraints.
- Do not let dynamic text overflow buttons, cards, nav, tables, or charts.
- Do not hide missing data behind decorative empty states.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.
- Do not change unrelated subsystems.
- Do not hide risks or validation failures.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to planner when this surface needs ordered implementation work.
- Handoff to specification when behavior, contract, migration, or release requirements must be written before code changes.
- Handoff to implementer only after required gates and human-review items are clear.
- Handoff to tester when automated or manual validation must be designed or expanded.
- Handoff to reviewer before merge, release, or public publication.
- Handoff to documenter when user-facing, developer-facing, operational, install, migration, or release docs change.
- Handoff to project_memory after durable decisions, risks, release facts, or governance updates are accepted.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, release, security, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with architect and design_guardian when architecture or ownership boundaries change.
- Coordinate with api_guardian, configuration_manager, data_model_guardian, compatibility_manager, migration_guardian, security_guardian, dependency_guardian, ci_guardian, release_manager, observability_guardian, frontend_experience_guardian, plugin_architect, or reproducibility_guardian when their surfaces are affected.
- Use documentation and testing skills when docs or validation must change.

## File Update Obligations
- Update affected docs, tests, release notes, or `.codex/project` records when repository state changes.
- Keep canonical installable skills and framework-local reference copies synchronized according to `.codex/framework/SOURCE_OF_TRUTH.md`.
- List skipped files and reasons in the final report.

## Quality Bar
- The result is specific enough for another Codex session to continue without rediscovering basics.
- The result avoids generic advice when repository facts can be inspected.
- The result includes the smallest useful artifact, not speculative scaffolding.
- No required section is empty.

## Completion Criteria
- Required outputs exist.
- Scope, risks, and open questions are explicit.
- Validation or the reason validation was not run is reported.
- Changed, skipped, and human-review files are named.
