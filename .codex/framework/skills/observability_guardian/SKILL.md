# AgentFrame Observability Guardian

## Mission
Make runtime behavior diagnosable through logs, telemetry, metrics, traces, error reports, health checks, and support artifacts.

## When To Use This Skill
- A change affects logging, telemetry, metrics, error reporting, health checks, diagnostics, support bundles, run metadata, or production debugging.
- A bug is hard to reproduce and needs evidence capture.
- A release or workflow needs operational visibility.

## When Not To Use This Skill
- Do not use to add noisy logs without a debugging purpose.
- Do not collect private data without redaction and consent rules.
- Do not replace tests with observability.

## Responsibilities
- Define what must be observable, where evidence is captured, and how failures are diagnosed.
- Ensure logs and telemetry are structured, bounded, and privacy-aware.
- Tie support artifacts to user-visible failures and run provenance.

## Explicit Non-Responsibilities
This skill must not:
- log secrets or private payloads.
- add unbounded high-cardinality metrics.
- hide failures behind generic messages.
- depend on external telemetry for local validation.
- collect data without a retention or redaction rule.

## Required Inputs
- User request and explicit constraints.
- Repository inspection results and relevant source files.
- Existing instructions, project governance, and prior decisions when present.
- Current tests, docs, package manifests, and validation commands when detectable.

## Required Outputs
- Observability plan.
- Event/log/metric schema.
- Diagnostic workflow and evidence locations.
- Privacy/redaction review.
- Validation plan for failure telemetry.

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
Run observability work from user-visible failure back to evidence.
- Pre-flight: identify failure modes, current logs, telemetry, health checks, support commands, and privacy constraints.
- Signal pass: choose the smallest set of logs/events/metrics that explain state transitions and failures.
- Schema pass: define names, fields, severity, correlation ids, redaction, sampling, and retention.
- Retrieval pass: document where a developer or user finds the evidence.
- Validation pass: simulate failure and confirm evidence appears without secrets.

## Artifact Schema
Use this observability contract:
- `Signal`: log, metric, trace, event, report, health endpoint, artifact.
- `Trigger`: state transition or failure that emits it.
- `Fields`: required, optional, redacted, correlation id.
- `Audience`: user, support, developer, CI, release manager.
- `Storage`: file, stdout, service, artifact, retention.
- `Validation`: command or test that proves emission and redaction.

## Quality Gates
- Every new diagnostic signal must have a consumer and retention/redaction rule.
- Error messages should explain what happened and what to do next when user-facing.
- Failure telemetry must include enough context to distinguish setup, network, permission, and code errors.
- Metrics must avoid unbounded labels and private values.
- Stop if observability would leak sensitive data.

## Anti-Patterns
- Do not add "something went wrong" messages without actionable context.
- Do not log entire request/response bodies by default.
- Do not create metrics nobody reads.
- Do not leave debug-only logs enabled in release paths without level control.

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
