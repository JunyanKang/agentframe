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

```text
$agentframe-dependency-guardian
Assess a dependency update before implementation. Inspect the package manager, manifest, lockfile, version range, license, vulnerability context, runtime floor, compatibility impact, rollback path, and required validation. Do not change files until the dependency decision is clear.
```

```text
$agentframe-migration-guardian
Plan a migration before implementation. Identify the source state, target state, migration path, rollback path, compatibility window, validation commands, affected docs, and stop conditions. Do not edit code or data yet.
```

```text
$agentframe-security-guardian
Review the requested change for security risk. Inspect trust boundaries, permissions, secrets, sensitive data, input validation, shell or network execution, mitigations, and tests. Do not implement code unless explicitly asked after the review.
```

```text
$agentframe-observability-guardian
Investigate a performance or observability concern. Inspect logs, metrics, traces, diagnostics, error reporting, sensitive data exposure risk, and support evidence. Produce findings, recommended instrumentation or fixes, and validation steps. Do not widen scope into unrelated refactors.
```

## Lightweight Implementation

```text
$agentframe-implementer
Implement the approved change with strict no-unrelated-files discipline. Inspect affected callers and tests first. Modify only files required for this task and the smallest meaningful tests or docs. Stop if the change requires architecture, API, dependency, config, migration, data-model, release, or security work.
```

```text
$agentframe-planner
Create a quick plan only. Inspect the request and likely affected files, then produce the smallest ordered task list, validation commands, risks, and stop conditions. Do not edit code, docs, config, tests, or project memory.
```

## Adoption Assessment

```text
$agentframe-governance-guardian
Assess whether this repository should copy AgentFrame's optional .codex/ framework. Inspect existing instructions, governance files, release process, validation needs, project longevity, and team workflow. Recommend skills-only, partial framework adoption, or full framework adoption. Do not copy files.
```

## Project Memory

```text
$agentframe-project-memory
Update durable project state from the currently approved changes. Record current modules, APIs, risks, technical debt, open questions, and next actions. Do not edit unrelated files.
```

```text
$agentframe-project-memory
Refresh project memory after a completed change. Inspect the final diff, validation results, decisions, risks, changed public surfaces, and next actions. Update only durable project state and stop if the change has not actually completed.
```

## 中文提示词模板

```text
$agentframe-architect
检查仓库，并为一个新能力提出最小架构变更。输出边界、依赖方向、接口、风险和需要记录的决策。不要写代码。完成架构输出后停止。
```

```text
$agentframe-specification
检查已批准的任务和受影响文件。编写实现规格，包含需求、非需求、输入、输出、边界情况、测试、文档、兼容性影响和回滚。不要编辑代码。完成规格后停止。
```

```text
$agentframe-implementer
只实现一个已经批准的任务。先检查项目指令、受影响调用方和测试。产出最小且已验证的 diff。不要修改无关文件，不要改公共 API，不要新增依赖，不要重构，除非已经明确批准。若需要扩大范围，停止并说明。
```

```text
$agentframe-reviewer
审查当前 diff 或指定变更。按照 Blocking、Major、Minor、Suggestions 分类报告问题，给出文件位置、原因和风险。除非我明确要求，不要直接改代码。
```

```text
$agentframe-reviewer
检查失败行为和可能受影响的文件。输出根因假设、证据和最小安全修复方向。暂时不要编辑代码。
```

```text
$agentframe-implementer
为已批准的 bug 实现最小安全修复。只修改修复所需文件和最小有意义的测试。不要扩大范围。若发现无关问题，停止并报告。
```

```text
$agentframe-configuration-manager
检查当前配置表面，并提出最小安全配置变更。包含 schema、默认值、校验、优先级、迁移、测试和文档。暂时不要编辑代码。
```

```text
$agentframe-api-guardian
评估请求的 API 变更。分类兼容性影响、弃用需求、迁移步骤、测试和文档。暂时不要实现变更。
```

```text
$agentframe-release-manager
检查版本、changelog、打包和发布工作流表面。输出发布就绪检查清单和必须跟进的变更。不要发布任何内容。
```

```text
$agentframe-dependency-guardian
在实现前评估依赖更新。检查包管理器、manifest、lockfile、版本范围、许可证、漏洞背景、运行时要求、兼容性影响、回滚路径和必要验证。依赖决策不清楚前不要修改文件。
```

```text
$agentframe-migration-guardian
在实现前制定迁移计划。识别源状态、目标状态、迁移路径、回滚路径、兼容窗口、验证命令、受影响文档和停止条件。暂时不要改代码或数据。
```

```text
$agentframe-security-guardian
对请求的变更做安全审查。检查信任边界、权限、密钥、敏感数据、输入校验、shell 或网络执行、缓解措施和测试。审查完成前不要实现代码，除非我明确要求继续。
```

```text
$agentframe-observability-guardian
调查性能或可观测性问题。检查日志、指标、追踪、诊断、错误报告、敏感数据泄露风险和支持证据。输出发现、建议的埋点或修复方向，以及验证步骤。不要扩大范围到无关重构。
```

```text
$agentframe-implementer
以严格禁止无关文件的方式实现已批准变更。先检查受影响调用方和测试。只修改当前任务必需的文件，以及最小有意义的测试或文档。若变更需要架构、API、依赖、配置、迁移、数据模型、发布或安全工作，停止并说明。
```

```text
$agentframe-planner
只做快速计划，不写代码。先检查请求和可能受影响的文件，然后输出最小有序任务清单、验证命令、风险和停止条件。不要修改代码、文档、配置、测试或项目记忆。
```

```text
$agentframe-governance-guardian
评估这个仓库是否应该复制 AgentFrame 的可选 .codex/ 框架。检查现有指令、治理文件、发布流程、验证需求、项目生命周期和团队工作流。建议只安装 skills、部分采用框架或完整采用框架。不要复制文件。
```

```text
$agentframe-project-memory
根据当前已经批准的变更更新持久项目状态。记录当前模块、API、风险、技术债、开放问题和下一步行动。不要编辑无关文件。
```

```text
$agentframe-project-memory
在一个变更完成后刷新项目记忆。检查最终 diff、验证结果、决策、风险、变化的公共表面和下一步行动。只更新持久项目状态；如果变更尚未完成，停止并说明。
```

## Native Codex Fast Paths

Use Codex-native fast paths when you want a quick product-native workflow instead of the AgentFrame governance layer:

- Use `/review` for a quick local diff review when AgentFrame severity categories, handoff rules, or framework memory are not needed.
- Use `/plan` for quick brainstorming or task decomposition before deciding whether a governed AgentFrame workflow is necessary.
- Use explicit `$agentframe-*` prompts when you want AgentFrame's source-of-truth, validation, handoff, and project-memory rules to apply.
