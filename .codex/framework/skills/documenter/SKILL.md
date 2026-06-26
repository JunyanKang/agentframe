# AgentFrame Documenter

## Mission
Keep documentation aligned with actual repository behavior and workflow.

## When To Use This Skill
- Behavior, APIs, configuration, data model, workflows, installation, compatibility, or release process changed.
- README, user guide, developer guide, API docs, configuration guide, architecture docs, migration guide, changelog, examples, or troubleshooting need updates.
- Docs conflict with code or current project state.

## When Not To Use This Skill
- Do not document nonexistent features.
- Do not invent project facts.
- Do not add examples that cannot run.

## Responsibilities
- Maintain user-facing and developer-facing docs.
- Update docs when behavior, APIs, config, data model, workflows, installation, compatibility, or release process changes.
- Name documentation gaps and validation status.

## Explicit Non-Responsibilities
This skill must not:
- write documentation that contradicts code.
- leave breaking changes undocumented.
- document configuration options that do not exist.
- document public APIs that are not actually public.
- add examples that cannot run.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Updated documentation.
- Documentation gaps.
- Validation status for commands or examples.
- Human-review items for unknown facts.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Inspect current code, config, tests, docs, and user-visible behavior.
2. Identify affected documentation surfaces.
3. Update only the sections needed for current behavior.
4. Use concrete commands, paths, inputs, outputs, constraints, and limitations.
5. Validate examples when practical.
6. Mark unknowns explicitly and report gaps.

## Functional Playbook
Document the operational truth, not a marketing description.
- Pre-flight: read the implemented behavior, commands, config, examples, and tests before writing docs.
- Identify audience: installer, maintainer, contributor, API consumer, operator, or end user.
- Update the nearest authoritative doc first; cross-link instead of restating volatile rules in multiple places.
- Include runnable examples only when they match current commands and file paths.
- Treat release notes, migration notes, and troubleshooting as first-class docs when behavior changes.

## Artifact Schema
Use this documentation output shape:
- `Audience`: who can act on the doc.
- `Prerequisites`: tools, versions, credentials, repo state.
- `Procedure`: exact commands or UI steps.
- `Expected Result`: files, output, status, or visible state.
- `Troubleshooting`: known failures and recovery.
- `Maintenance Note`: source of truth and when to update this doc.

## Quality Gates
- Do not duplicate a rule that already has an authoritative source; link to it.
- Every command should be current, scoped, and validated or marked unverified.
- Every public behavior change should update README, adoption docs, changelog, or API docs as appropriate.
- New docs must avoid placeholders and invented examples when repository examples exist.
- If docs mention version, install, release, or external service state, verify it or mark date/context.

## Anti-Patterns
- Do not document aspirational behavior as shipped behavior.
- Do not scatter the same install command across multiple docs without source-of-truth guidance.
- Do not use generic prose where a command, path, or artifact would be clearer.
- Do not bury breaking changes outside migration notes.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not invent features, commands, or examples.
- Do not leave changed configuration or public APIs undocumented.
- Do not contradict current code or validation behavior.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to reviewer when documentation changes need acceptance review.
- Handoff to project_memory when documentation updates alter durable project state, risks, or next actions.
- Handoff to implementer only when documentation inspection reveals code/docs mismatch that requires code changes.
- Handoff to tester when documented commands or examples need validation.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with api_guardian, configuration_manager, compatibility_manager, or data_model_guardian when those docs changed.
- Use related guardian skills when API, config, data, compatibility, plugin, reproducibility, or architecture surfaces are affected.
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
