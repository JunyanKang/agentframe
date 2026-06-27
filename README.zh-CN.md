# AgentFrame

[English](README.md)

![validate](https://github.com/JunyanKang/agentframe/actions/workflows/validate.yml/badge.svg)
![license](https://img.shields.io/badge/license-MIT-blue.svg)
![release](https://img.shields.io/github/v/release/JunyanKang/agentframe?label=release)

给 Codex 软件开发加上工程护栏。

AgentFrame 是一套面向 Codex 的可安装软件工程 skills，并提供可选的仓库治理 starter kit。它让 Codex 先检查、再选角色、保持小范围改动、完成验证，并在触及架构、API、安全、发布、迁移等受保护表面时停止或交接。

普通项目直接安装 skills 即可。只有长期项目需要持久规则、决策、风险、发布记录和项目记忆时，才采用可选框架和 starter kit。

## 使用前 / 使用后

| 不使用 AgentFrame | 使用 AgentFrame |
| --- | --- |
| 模糊请求容易扩大成无关改动。 | Skills 要求先检查，再产出最小 diff。 |
| 审查、测试、文档和停止条件容易遗漏。 | 提示词、golden scenarios 和 validators 把预期行为显式化。 |
| 规则主要依赖静态 `AGENTS.md`。 | 角色化 skills、路由、更新工具和可选项目记忆共同约束工作流。 |

## 为什么用 AgentFrame

- **优先使用可安装 skills**：不需要把框架复制进每个项目。
- **工程角色清晰**：实现、测试、审查、计划、文档、API、配置、CI、发布、安全、依赖、迁移、可观测性、前端体验和项目记忆都有明确职责。
- **默认轻量**：小任务走 Lite lane；只有出现受保护表面时才升级治理。
- **按产品维护**：仓库包含 validator、golden scenarios、更新/卸载工具、changelog 和 GitHub Actions。
- **可选项目记忆**：长期仓库可从 `starter-kit/.codex/project/` 初始化中性的项目状态文件。

## 它提供什么

```text
skills/agentframe-*          可安装的 Codex skills
.codex/framework/            可选的治理规则、路由、模板、检查清单
starter-kit/.codex/project/  给采用者使用的中性项目状态 starter files
scripts/                     验证和 skill 生命周期工具
```

Skills 覆盖常见软件开发生命周期：

- **交付流程**：架构、计划、规格、实现、审查、测试、重构、文档和项目记忆。
- **受保护表面**：API、配置、数据模型、兼容性、可复现性、治理、CI、发布、安全、依赖、可观测性、迁移、插件架构和前端体验。
- **运行安全**：每个 skill 都定义适用场景、不适用场景、必需输出、交接规则、失败处理、质量门槛和完成标准。

## 60 秒开始

安装 Core profile：

```sh
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo JunyanKang/agentframe \
  --path skills/agentframe-implementer skills/agentframe-tester skills/agentframe-reviewer skills/agentframe-project-memory
```

重启 Codex，然后这样提问：

```text
$agentframe-implementer
只修一个小问题。先检查项目指令、受影响调用方和测试。只修改最小必要文件。添加最小有意义的测试。若修复需要 API、架构、依赖、配置、数据模型、迁移、发布、安全或无关文件变更，立即停止并说明。
```

## 安装、更新或卸载

选择最小够用的档位：

| 档位 | 适用场景 | 包含内容 |
| --- | --- | --- |
| Core | 小项目和日常窄范围任务 | 实现、测试、审查、项目记忆 |
| Standard | 常规产品开发 | Core 加架构、计划、规格、文档 |
| Full | 有受保护工程表面的长期仓库 | Standard 加 CI、发布、安全、依赖、迁移、可观测性、前端体验、source-of-truth guardians |

完整安装或安全更新：

```sh
curl -fsSL https://raw.githubusercontent.com/JunyanKang/agentframe/main/scripts/update-agentframe-skills.py \
  -o /tmp/update-agentframe-skills.py
python3 /tmp/update-agentframe-skills.py --ref latest
```

常用选项：

- `--dry-run`：预览安装、更新或卸载计划。
- `--dest <path>`：指定非默认 skills 目录。
- `--keep-backups`：成功后保留备份。
- `--ref <latest|tag-or-branch>`：安装最新 release、固定 tag 或分支。
- `--uninstall`：删除本地已安装的 `agentframe-*` skills。

卸载：

```sh
python3 /tmp/update-agentframe-skills.py --uninstall
```

安装、更新或卸载后重启 Codex。

## 看它如何工作

| 需求 | 入口 |
| --- | --- |
| 理解使用前后的行为差异 | [docs/DEMO.md](docs/DEMO.md) |
| 复制可直接使用的提示词 | [docs/USAGE_PATTERNS.md](docs/USAGE_PATTERNS.md) |
| 选择具体 skill 路径或采用档位 | [docs/ADOPTION.md](docs/ADOPTION.md) |
| 真实失败后改进 AgentFrame | [docs/FEEDBACK_LOOP.md](docs/FEEDBACK_LOOP.md) |

## 触发策略

核心交付 skills 可以被普通 Codex 请求隐式触发，但显式写 `$agentframe-*` 最可控。窄范围 guardian skills 更适合显式调用，或在出现受保护表面时由其他 AgentFrame skill 交接。

## 采用可选框架

不要为了使用 AgentFrame skills 就复制 `.codex/`。先安装 skills。

长期项目需要持久治理时：

1. 复制可复用的 `.codex/framework/` 资产。
2. 用 `starter-kit/.codex/project/` 初始化项目状态。
3. 把每个 `Unknown - requires human input` 替换成目标仓库的真实信息。
4. 不要把 AgentFrame 自己的 `.codex/project/` 文件当成另一个仓库的项目事实复制过去。

## FAQ

### 为什么不用普通 AGENTS.md 就够了？

`AGENTS.md` 提供静态仓库指令。AgentFrame 额外提供可安装的角色化 skills、路由规则、validators、golden scenarios、source-of-truth 同步、更新工具和可选项目记忆。

### 我需要采用可选框架吗？

通常不需要。先安装 skills。只有仓库需要长期项目记忆、发布策略、风险记录、架构决策或团队工作流规则时，再加入 `.codex/framework/` 和 `starter-kit/.codex/project/`。

## 维护者

- 规范可安装 skills 位于 `skills/agentframe-*`。
- 框架内参考副本位于 `.codex/framework/skills/*`。
- 实质性 skill 修改必须同步两边，除非在 `.codex/framework/SOURCE_OF_TRUTH.md` 记录有意漂移。
- 发布前运行验证：

```sh
npm run validate
```

最新 release：见 [GitHub Releases](https://github.com/JunyanKang/agentframe/releases)。安装/更新命令会通过 `--ref latest` 自动解析。

## License

MIT.
