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
This skill must not:
- allow hidden randomness.
- allow undocumented parameters.
- allow required outputs without provenance.
- allow undocumented environment-dependent behavior.
- allow non-repeatable workflows without warning.
- allow silent fallback behavior that changes results.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Reproducibility requirements.
- Required provenance metadata.
- Command, environment, and parameter capture plan.
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
- Do not allow hidden randomness.
- Do not leave parameters undocumented.
- Do not allow silent fallbacks that change results.
- Do not allow required outputs without provenance.
- Do not hide environment-dependent behavior.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to agentframe-specification when reproducibility requirements must constrain implementation.
- Handoff to agentframe-implementer after provenance, parameters, and validation behavior are clear.
- Handoff to agentframe-tester for repeatability and output validation checks.
- Handoff to agentframe-documenter for reproducibility instructions and provenance docs.
- Handoff to agentframe-reviewer for final reproducibility risk review.
- Handoff to agentframe-project-memory when reproducibility assumptions or known limits change.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with agentframe-configuration-manager when parameters or environment settings affect repeatability.
- Coordinate with agentframe-compatibility-manager when dependency or runtime changes affect reproducibility.
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
