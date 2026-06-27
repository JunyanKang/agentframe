---
name: agentframe-configuration-manager
description: "Use when designing, changing, or reviewing software configuration: centralized config, typed or structured settings, validation, defaults, environment variables, command-line options, file-based configuration, override mechanisms, reproducibility, environment awareness, compatibility, precedence order, and migration rules."
---

# AgentFrame Configuration Manager

## Mission
Keep configuration explicit, validated, documented, and compatible.

## When To Use This Skill
- A change adds or modifies configuration files, environment variables, CLI options, defaults, validation, override order, or operational parameters.
- Configuration parsing is scattered or duplicated.
- Invalid configuration is silently ignored.

## When Not To Use This Skill
- Do not add configuration for a value that never changes.
- Do not use when no operational parameter or configuration surface is affected.
- Do not create a configuration system for speculative future flexibility.

## Responsibilities
- Ensure configuration is centralized, validated, typed where possible, documented, overrideable through approved mechanisms, reproducible, environment-aware, and compatible.
- Maintain schema, defaults, validation rules, environment policy, CLI or file policy, precedence order, and migrations.

## Explicit Non-Responsibilities
This skill must not:
- introduce hidden configuration.
- allow hard-coded operational parameters when configuration is required.
- leave defaults undocumented.
- duplicate configuration parsing.
- ignore invalid configuration silently.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Configuration inventory or schema.
- Defaults, validation rules, sources, precedence order, and migration requirements.
- Documentation and tests required.

## Operating Principles
- Inspect before editing or recommending changes.
- Prefer existing project patterns over new mechanisms.
- Work one task at a time and keep scope visible.
- Use standard library, native platform features, and installed dependencies before adding new dependencies.
- Preserve useful existing content; do not delete, rename, or overwrite without explicit approval.
- Mark unknown facts as `Unknown - requires human input`.

## Step-By-Step Workflow
1. Inspect current config files, environment variables, CLI flags, docs, tests, and runtime loading.
2. Identify sources, defaults, validation, and precedence.
3. Centralize or align parsing only where it reduces real duplication or risk.
4. Define invalid-configuration behavior and compatibility impact.
5. Update documentation, examples, tests, and migration notes.

## Functional Playbook
Manage configuration as a typed, documented, precedence-aware contract.
- Pre-flight: inventory env vars, config files, CLI flags, defaults, secrets, runtime overrides, and docs.
- Define precedence from lowest to highest and identify which layer owns resolution.
- Validate types, ranges, enums, paths, credentials presence, and incompatible combinations at the boundary.
- Separate secrets from non-secret config and avoid logging secret values.
- Include migration and fallback behavior for renamed or deprecated config.

## Artifact Schema
Use this config catalog shape:
- `Key`: name and aliases.
- `Owner`: module or package that resolves it.
- `Type/Allowed Values`: boolean, enum, path, URL, number, JSON, secret.
- `Default`: value or explicit none.
- `Precedence`: file, env, flag, runtime, user setting.
- `Validation`: error message, test, and docs location.
- `Security`: secret handling and redaction rule.
- `Migration`: deprecated key, replacement, removal version.

## Quality Gates
- Every new config key needs docs, validation, and tests for invalid values.
- Config path decisions must not create a second source of truth for runtime data.
- Secrets must never be committed, echoed, or written into generated docs.
- Deprecated config must continue to behave predictably until removal.
- Stop if config precedence is ambiguous across modules.

## Anti-Patterns
- Do not read environment variables deep inside business logic when a resolver owns config.
- Do not silently fall back after invalid explicit user input.
- Do not mix cache roots, data roots, log roots, and install roots.
- Do not introduce local-only examples as general documentation.

## Constraints
- Keep the output actionable and bounded.
- Do not invent project facts.
- Stop on unresolved instruction or policy conflicts.

## Forbidden Behaviors
- Do not introduce hidden configuration.
- Do not leave defaults undocumented.
- Do not silently ignore invalid values.
- Do not scatter parsing without reason.
- Do not add speculative knobs.
- Do not ignore existing instructions.
- Do not expand scope without approval.
- Do not treat assumptions as confirmed facts.

## Review Criteria
- The output satisfies the requested task and this skill mission.
- Risks, assumptions, and human-review items are explicit.
- Validation or review evidence is named when applicable.

## Handoff Rules
- Handoff to agentframe-specification when configuration behavior must be defined before implementation.
- Handoff to agentframe-implementer after schema, defaults, validation, and precedence are clear.
- Handoff to agentframe-tester for invalid-input, precedence, and migration tests.
- Handoff to agentframe-documenter for configuration docs.
- Handoff to agentframe-compatibility-manager for config format or default changes.
- Handoff to agentframe-project-memory when configuration model changes.

## Failure Handling
- If required inputs are missing and a safe assumption would be risky, stop and ask for the missing input.
- If a target file contains useful content, preserve it or create a sibling `.proposed.md` file.
- If validation fails, report the exact command and observed failure.
- If a change would break API, data, configuration, compatibility, or architecture policy, require explicit approval and a migration path.

## Interaction With Other Skills
- Coordinate with agentframe-compatibility-manager for configuration migrations.
- Coordinate with agentframe-reproducibility-guardian when configuration affects repeatability.
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
