# AgentFrame Demo

## Purpose
Show the intended behavior change AgentFrame adds to a generic Codex software-development task.

This demo is not a promise that Codex will always behave perfectly. It describes the guardrails AgentFrame asks Codex to follow: inspect first, choose the lightest suitable operating lane, avoid unrelated files, validate narrowly, and stop or hand off when guarded surfaces appear.

## What This Demo Shows
- How a vague coding request can invite hidden scope expansion.
- How the Lite lane keeps small work lightweight.
- How AgentFrame should stop when a small task reveals a guarded surface.
- How Standard and Extended lanes differ from Lite work.
- What a useful final report should contain.

## Before AgentFrame
A generic request might look like this:

```text
Fix this bug and clean up anything you see.
```

Without explicit guardrails, this request risks:

- editing files unrelated to the actual bug.
- refactoring while fixing behavior.
- changing a public API or config default without calling it out.
- skipping the narrow regression test.
- producing a broad summary instead of naming changed files, validation, and remaining risk.

## After AgentFrame: Lite Lane
Use a Lite prompt when the task is narrow, local, and has no known public contract impact:

```text
$agentframe-implementer
Fix one small issue only. Inspect instructions, affected callers, and tests first. Change the smallest set of files. Add the narrowest meaningful test. Stop if the fix requires API, architecture, dependency, config, data-model, migration, release, security, or unrelated-file changes.
```

Expected AgentFrame behavior:

- Inspect repository instructions and the likely affected files before editing.
- Modify the smallest required file set.
- Add or run the smallest meaningful validation.
- Avoid opportunistic cleanup, broad refactors, or unrelated documentation churn.
- Report if no test was available or if validation could not be run.

## Escalation Example
A Lite task should stop or hand off when it discovers a guarded surface.

Example escalation trigger:

```text
The one-line bug fix requires changing a public response shape and updating compatibility expectations.
```

Expected behavior:

- Stop before making the public contract change.
- Name the guarded surface: public API and compatibility.
- Recommend the owning route, such as `$agentframe-api-guardian` with `$agentframe-compatibility-manager`.
- Report the files inspected and why the task is no longer Lite.

## Standard Lane Example
Use Standard when the work is a normal feature inside existing architecture:

```text
$agentframe-specification
Inspect the approved feature and affected files. Write a concise implementation specification with requirements, non-requirements, edge cases, tests, docs, and rollback. Do not edit code. Stop after the spec.
```

Expected behavior:

- Define requirements before implementation.
- Keep the feature inside existing architecture.
- Add implementer, tester, reviewer, and documenter only as needed.
- Avoid invoking every guardian when no guarded surface is affected.

## Extended Lane Example
Use Extended when a guarded surface is part of the request:

```text
$agentframe-configuration-manager
Assess the requested configuration change. Identify defaults, precedence, validation, compatibility, migration, tests, docs, and rollback. Do not implement until the configuration contract is clear.
```

Expected behavior:

- Name the guarded surface explicitly.
- Produce the owned artifact before implementation.
- Include validation and rollback expectations.
- Stop when compatibility, migration, security, or human approval is unresolved.

## Final Report Shape
A useful final report should be short and specific:

```text
Changed files:
- path/to/file.ext: narrow behavior fix
- path/to/test.ext: regression coverage

Validation:
- command that passed
- command not run: reason

Skipped surfaces:
- no public API change
- no config/data/dependency/security/migration/release impact found

Stop conditions:
- none, or the exact blocked condition

Remaining risks:
- any unverified behavior, missing fixture, or human-review item
```

## What To Try Next
- Use [USAGE_PATTERNS.md](USAGE_PATTERNS.md) to copy prompts for implementation, review, migration, security, release, and memory refresh.
- Use [ADOPTION.md](ADOPTION.md) to decide whether to install Core, Standard, or Full.
- Use [FEEDBACK_LOOP.md](FEEDBACK_LOOP.md) when real usage shows the routing, prompts, docs, or validators need improvement.
