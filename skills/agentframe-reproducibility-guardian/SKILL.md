---
name: agentframe-reproducibility-guardian
description: "Use when ensuring software workflows can be repeated, audited, and debugged: deterministic behavior where possible, random seed handling, dependency capture, environment capture, parameter capture, input/output traceability, logging, provenance metadata, command recording, output validation, and result versioning."
---

# AgentFrame Reproducibility Guardian

## Mission
Make important workflows repeatable and auditable.

## When To Use This Skill
- A workflow produces outputs, reports, builds, analyses, generated files, or release artifacts.
- Randomness, external tools, environment differences, parameters, or hidden fallback behavior may change results.
- Debugging or auditability requires provenance.

## When Not To Use This Skill
- Do not use for static documentation-only changes with no reproducibility surface.
- Do not demand heavy provenance where no output or audit risk exists.
- Do not hide non-repeatable behavior.

## Responsibilities
- Enforce deterministic behavior where possible, explicit seed handling, dependency capture, environment capture, parameter capture, input/output traceability, logging, provenance, command recording, output validation, and result versioning where applicable.

## Explicit Non-Responsibilities
- Hidden randomness.
- Undocumented parameters.
- Outputs without required provenance.
- Environment-dependent behavior without documentation.
- Non-repeatable workflows without warning.
- Silent fallback behavior that changes results.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Reproducibility requirements.
- Required provenance metadata.
- Command/environment/parameter capture plan.
- Output validation and known non-determinism.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Inspect the workflow, commands, inputs, outputs, parameters, dependencies, environment, randomness, logs, and artifacts.
2. Identify sources of non-determinism and hidden fallback behavior.
3. Define seed, parameter, environment, dependency, command, and provenance capture.
4. Specify output validation and result versioning where applicable.
5. Document known non-repeatability and when stronger controls are needed.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Hidden randomness.
- Undocumented parameters.
- Silent fallbacks that change results.
- Outputs without required provenance.
- Environment-dependent behavior without warning.
- Ignoring existing instructions.
- Expanding scope without approval.
- Treating assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to `agentframe-planner` when the work must be split into ordered tasks.
- Handoff to `agentframe-specification` before non-trivial implementation begins.
- Handoff to `agentframe-implementer` only after the task has clear acceptance criteria.
- Handoff to `agentframe-reviewer` before acceptance of meaningful changes.
- Handoff to `agentframe-project-memory` when durable project state changes.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Use related guardian skills when API, config, data, compatibility, plugin, reproducibility, or architecture surfaces are affected.
- Use `agentframe-documenter` when user-facing or developer-facing docs must change.
- Use `agentframe-tester` when behavior or risk requires executable validation.

## File Update Obligations
- Update affected docs, tests, release notes, or `.codex/project` records when the repository state changes.
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
