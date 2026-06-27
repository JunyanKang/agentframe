# AgentFrame

[English](README.md)

![validate](https://github.com/JunyanKang/agentframe/actions/workflows/validate.yml/badge.svg)
![license](https://img.shields.io/badge/license-MIT-blue.svg)
![release](https://img.shields.io/github/v/release/JunyanKang/agentframe?label=release)

给 Codex 软件开发加上工程护栏。

AgentFrame 是一个面向 Codex 的软件工程框架。它把可安装的 Codex skills 和可选的仓库治理层结合起来，让 Codex 在软件项目里更像一个有工程纪律的协作者，而不是一次性的代码生成器。

当你希望 Codex 遵守架构边界、source-of-truth、验证要求、兼容性、发布流程和长期项目记忆时，可以使用 AgentFrame。

## 使用前 / 使用后

| 不使用 AgentFrame | 使用 AgentFrame |
| --- | --- |
| 模糊请求容易扩大成无关改动。 | Skills 要求 Codex 先检查，再保持最小范围。 |
| 测试、文档和停止条件容易遗漏。 | Golden scenarios 和提示词把验证与停止行为显式化。 |
| 项目规则主要依赖静态指令。 | 角色化 skills、路由、validators 和可选 memory 共同约束工作流。 |

## 为什么用 AgentFrame

- **优先作为可安装 skills 使用**：不需要把框架复制进每个项目，也可以直接使用。
- **可选项目治理层**：只有长期项目需要本地规则、决策、模板和 memory 时，才复制 `.codex/`。
- **明确的工程职责边界**：架构、计划、规格、实现、审查、测试、文档、API、配置、数据、兼容性、CI、发布、安全、依赖、迁移、可观测性和前端体验都有对应职责。
- **source-of-truth 校验**：可安装 skills 和框架内参考副本由验证脚本保持同步。
- **发布级维护流程**：仓库包含 validator、GitHub Actions、changelog、更新脚本和版本一致性检查。
- **安全更新与卸载**：本地 `agentframe-*` skills 可以通过脚本备份、替换、验证、回滚或卸载。

## 它提供什么

AgentFrame 有两层：

```text
skills/agentframe-*          可安装的 Codex skills
.codex/framework/            可复用的治理规则、路由、模板、检查清单
.codex/project/              采用框架后用于记录项目本地状态
scripts/                     验证和 skills 更新工具
```

可安装 skills 覆盖完整软件开发生命周期：

- **交付流程**：架构、计划、规格、实现、审查、测试、重构、文档和项目记忆。
- **工程 guardians**：API、配置、数据模型、兼容性、可复现性、source-of-truth 治理、CI、发布、安全、依赖、可观测性、迁移、插件架构和前端体验。
- **运行安全**：每个 skill 都定义适用场景、不适用场景、必需输出、交接规则、失败处理、质量门槛和完成标准。

更多 skill 路径和采用细节见 [docs/ADOPTION.md](docs/ADOPTION.md)。

需要功能开发、bug 修复、审查、发布检查和项目记忆更新的可直接复制提示词时，见 [docs/USAGE_PATTERNS.md](docs/USAGE_PATTERNS.md)。

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

## 看它如何工作

- 用 [docs/DEMO.md](docs/DEMO.md) 理解使用前后的行为差异。
- 用 [docs/USAGE_PATTERNS.md](docs/USAGE_PATTERNS.md) 复制可直接使用的提示词。
- 用 [docs/FEEDBACK_LOOP.md](docs/FEEDBACK_LOOP.md) 在真实失败后改进 AgentFrame。

## 安装、更新或卸载

选择采用档位：

| 档位 | 适用场景 | 包含内容 |
| --- | --- | --- |
| Core | 小项目和日常窄范围任务 | 实现、测试、审查、项目记忆 |
| Standard | 常规产品开发 | Core 加架构、计划、规格、文档 |
| Full | 有受保护工程表面的长期仓库 | Standard 加 CI、发布、安全、依赖、迁移、可观测性、前端体验、source-of-truth guardians |

完整安装或更新：

```sh
curl -fsSL https://raw.githubusercontent.com/JunyanKang/agentframe/main/scripts/update-agentframe-skills.py \
  -o /tmp/update-agentframe-skills.py
python3 /tmp/update-agentframe-skills.py --ref latest
```

安装或更新后重启 Codex。

常用选项：

- `--dry-run`：预览安装、更新或删除计划。
- `--dest <path>`：指定非默认 skills 目录。
- `--keep-backups`：成功后保留备份。
- `--ref <latest|tag-or-branch>`：安装最新 release、固定 release tag，或 `main` 等分支。
- `--uninstall`：从所选 skills 目录删除本地 `agentframe-*` skills。

卸载 AgentFrame skills：

```sh
python3 /tmp/update-agentframe-skills.py --uninstall
```

卸载命令只删除本地 `agentframe-*` skill 目录，不会删除项目里的 `.codex/` 治理文件。

## FAQ

### 为什么不用普通 AGENTS.md 就够了？

`AGENTS.md` 提供静态仓库指令。AgentFrame 额外提供可安装的角色化 skills、路由规则、validators、golden scenarios、source-of-truth 同步、更新工具和可选项目记忆。

## 触发策略

核心交付 skills 支持隐式触发，因为用户通常会用自然语言提出实现、审查、测试、规格和文档任务。窄范围 guardian skills 更适合通过显式 `$agentframe-*` 提示词触发，或由其他 AgentFrame skill 在受保护表面出现时交接。

## 采用可选框架

不要为了使用 AgentFrame skills 就复制 `.codex/`。先安装 skills。

只有当项目需要持久治理时，才把 `.codex/` 复制进仓库：

- 架构决策和 ADR
- source-of-truth policy
- 未来 Codex session 的路由规则
- 可复用模板
- 项目 memory、风险、发布记录和测试策略

复制后，应把 `.codex/project/` 里的未知项替换为目标仓库的真实信息。

## Canonical Skill Source

`skills/agentframe-*` 是规范的可安装 skill 定义。`.codex/framework/skills/*` 是采用可选治理框架时使用的框架内参考副本。

除非在 `.codex/framework/SOURCE_OF_TRUTH.md` 或最终维护报告中明确记录有意漂移，否则实质性 skill 修改必须同步更新两边。

## 验证

修改 skills、模板、框架文件、更新工具或路由后，运行：

```sh
npm run validate
```

也可以对已安装 skill 运行 Codex skill validator：

```sh
python3 ~/.codex/skills/.system/skill-creator/scripts/quick_validate.py ~/.codex/skills/<skill-name>
```

## 维护工作流

维护 AgentFrame 本身时：

1. 更新 `skills/agentframe-*` 下的规范可安装 skill。
2. 更新 `.codex/framework/skills/*` 下对应的框架内参考副本。
3. 当公开表面变化时，同步更新路由、采用文档、changelog 和版本元数据。
4. 运行 `npm run validate`。
5. 当改动影响公开安装、更新或使用行为时，提交、打 tag 并发布 release。

## 版本

最新 release：见 [GitHub Releases](https://github.com/JunyanKang/agentframe/releases)。上面的安装/更新命令会通过 `--ref latest` 自动解析。

## License

MIT.
