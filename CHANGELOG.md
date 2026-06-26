# Changelog

## 0.3.0 - 2026-06-26
### Added
- Complete installable Codex skill set matching the original AgentFrame specification:
  - `agentframe-architect`
  - `agentframe-planner`
  - `agentframe-specification`
  - `agentframe-implementer`
  - `agentframe-reviewer`
  - `agentframe-tester`
  - `agentframe-refactor`
  - `agentframe-documenter`
  - `agentframe-project-memory`
  - `agentframe-design-guardian`
  - `agentframe-plugin-architect`
  - `agentframe-api-guardian`
  - `agentframe-configuration-manager`
  - `agentframe-compatibility-manager`
  - `agentframe-data-model-guardian`
  - `agentframe-reproducibility-guardian`
- Full required skill sections in each installable `SKILL.md`.
- Correct all-skill install command using one `--path` argument followed by all skill paths.

### Changed
- Renamed installable skill surfaces to match the original specification:
  - `agentframe-spec-writer` -> `agentframe-specification`
  - `agentframe-project-steward` -> `agentframe-project-memory`
- Validation now checks installable skills for the same required section set as framework skills.

### Fixed
- Replaced the partial 8-skill installable layer with the complete 16-skill software development suite.
- Fixed README install command shape for Codex's GitHub skill installer.

### Migration
- Prefer `v0.3.0` or `main` for installation.
- If `agentframe-spec-writer` or `agentframe-project-steward` were installed from `v0.2.0`, remove those local skill folders and install `agentframe-specification` and `agentframe-project-memory`.

## 0.2.0 - 2026-06-26
### Added
- Installable Codex skills under `skills/`:
  - `agentframe-architect`
  - `agentframe-planner`
  - `agentframe-spec-writer`
  - `agentframe-implementer`
  - `agentframe-reviewer`
  - `agentframe-tester`
  - `agentframe-documenter`
  - `agentframe-project-steward`
- Skill UI metadata under each skill's `agents/openai.yaml`.
- README installation commands and direct GitHub skill links.
- Validation for installable skill frontmatter, trigger descriptions, required headings, UI metadata, and placeholder text.

### Changed
- Repositioned AgentFrame as installable Codex skills first, optional `.codex/` project governance second.

### Fixed
- The public repository now satisfies the Codex skill-installer layout instead of only providing framework documents.

### Migration
- Users who only need Codex capabilities should install from `skills/<skill-name>`.
- Users maintaining long-lived repositories can still copy `.codex/` after installing the skills.

## 0.1.0 - 2026-06-26
### Added
- Initial AgentFrame framework policies.
- Project-local governance documents.
- Role-based agent skills and checklists.
- Reusable engineering templates.
- Structural validation script.
- Public repository documentation and GitHub workflow.

### Changed
- None.

### Fixed
- None.

### Migration
- First release; no migration required.
