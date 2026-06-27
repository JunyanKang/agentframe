# AgentFrame

[English](README.md)

AgentFrame 是一个面向 Codex 的软件工程框架。它把可安装的 Codex skills 和可选的仓库治理层结合起来，让 Codex 在软件项目里更像一个有工程纪律的协作者，而不是一次性的代码生成器。

当你希望 Codex 遵守架构边界、source-of-truth、验证要求、兼容性、发布流程和长期项目记忆时，可以使用 AgentFrame。

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

常规使用时，先安装 skills。只有项目需要长期治理、团队协作规则、架构决策、发布策略或项目记忆时，才考虑复制 `.codex/`。

更多采用细节见 [docs/ADOPTION.md](docs/ADOPTION.md)。  
可直接复制的英文和中文提示词见 [docs/USAGE_PATTERNS.md](docs/USAGE_PATTERNS.md)。

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

选择采用档位：

- **Core**：实现、测试、审查和项目记忆，适合小项目和日常窄范围任务。
- **Standard**：Core 加架构、计划、规格和文档，适合常规产品开发。
- **Full**：完整治理套件，适合有 API、配置、数据、CI、发布、安全、依赖、迁移、可观测性、前端体验或 source-of-truth 要求的长期项目。

完整安装或更新：

```sh
curl -fsSL https://raw.githubusercontent.com/JunyanKang/agentframe/v0.6.0/scripts/update-agentframe-skills.py \
  -o /tmp/update-agentframe-skills.py
python3 /tmp/update-agentframe-skills.py --ref v0.6.0
```

安装或更新后重启 Codex。

常用选项：

- `--dry-run`：预览安装、更新或删除计划。
- `--dest <path>`：指定非默认 skills 目录。
- `--keep-backups`：成功后保留备份。
- `--ref <tag-or-branch>`：从指定 tag 或分支安装。
- `--uninstall`：从所选 skills 目录删除本地 `agentframe-*` skills。

卸载 AgentFrame skills：

```sh
python3 /tmp/update-agentframe-skills.py --uninstall
```

卸载命令只删除本地 `agentframe-*` skill 目录，不会删除项目里的 `.codex/` 治理文件。

## 什么时候复制 `.codex/`

不要为了使用 skills 就复制 `.codex/`。先安装 skills。

当项目需要这些长期治理资产时，再复制 `.codex/`：

- 架构决策和 ADR
- source-of-truth policy
- 未来 Codex session 的路由规则
- 可复用模板
- 项目 memory、风险、发布记录和测试策略

复制后，应把 `.codex/project/` 里的未知项替换为目标仓库的真实信息。

## FAQ

### 为什么不用普通 AGENTS.md 就够了？

`AGENTS.md` 提供静态仓库指令。AgentFrame 额外提供可安装的角色化 skills、路由规则、validators、golden scenarios、source-of-truth 同步、更新工具和可选项目记忆。

## 验证

修改 skills、模板、框架文件、更新工具或路由后，运行：

```sh
npm run validate
```

也可以对已安装 skill 运行 Codex skill validator：

```sh
python3 ~/.codex/skills/.system/skill-creator/scripts/quick_validate.py ~/.codex/skills/<skill-name>
```

## 版本

当前 release：0.6.0。

## License

MIT.
