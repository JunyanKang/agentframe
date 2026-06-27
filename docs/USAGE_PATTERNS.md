# AgentFrame Usage Patterns

## Purpose
Show first-time users what to type when they want predictable AgentFrame behavior.

Explicit `$agentframe-*` invocation is the most reliable path when routing certainty matters, especially because AgentFrame exposes multiple adjacent software engineering skills. Use these patterns as starting prompts and replace the task-specific details with the real repository context.

## Feature And Architecture

```text
$agentframe-architect
Inspect the repository and propose the smallest architecture change for one new capability. Produce boundaries, dependency direction, interfaces, risks, and required decision records. Do not write code. Stop after the architecture output.
```

```text
$agentframe-specification
Inspect the approved task and affected files. Write an implementation specification with requirements, non-requirements, inputs, outputs, edge cases, tests, docs, compatibility impact, and rollback. Do not edit code. Stop after the spec.
```

```text
$agentframe-implementer
Implement one approved task only. Inspect instructions, affected callers, and tests first. Produce the smallest validated diff. Do not edit unrelated files, change public APIs, add dependencies, or refactor unless explicitly approved. Stop if wider changes are required.
```

## Review And Bugfix

```text
$agentframe-reviewer
Review the current diff against the relevant base. Report Blocking, Major, Minor, and Suggestions with file references and rationale. Do not rewrite code unless asked.
```

```text
$agentframe-reviewer
Inspect the failing behavior and likely affected files. Produce root-cause hypotheses, evidence, and the smallest safe fix direction. Do not edit code yet.
```

```text
$agentframe-implementer
Implement the smallest safe fix for the approved bug. Change only the files needed for the fix and the smallest meaningful tests. Do not widen scope. Stop and report if unrelated issues are discovered.
```

## Contract And Release Surfaces

```text
$agentframe-configuration-manager
Inspect the current configuration surface and propose the smallest safe configuration change. Include schema, defaults, validation, precedence, migration, tests, and docs. Do not edit code yet.
```

```text
$agentframe-api-guardian
Assess the requested API change. Classify compatibility impact, deprecation needs, migration steps, tests, and documentation. Do not implement the change yet.
```

```text
$agentframe-release-manager
Inspect version, changelog, packaging, and release workflow surfaces. Produce a release-readiness checklist and required follow-up changes. Do not publish anything.
```

## Project Memory

```text
$agentframe-project-memory
Update durable project state from the currently approved changes. Record current modules, APIs, risks, technical debt, open questions, and next actions. Do not edit unrelated files.
```

## Native Codex Fast Paths

Use Codex-native fast paths when you want a quick product-native workflow instead of the AgentFrame governance layer:

- Use `/review` for a quick local diff review when AgentFrame severity categories, handoff rules, or framework memory are not needed.
- Use `/plan` for quick brainstorming or task decomposition before deciding whether a governed AgentFrame workflow is necessary.
- Use explicit `$agentframe-*` prompts when you want AgentFrame's source-of-truth, validation, handoff, and project-memory rules to apply.
