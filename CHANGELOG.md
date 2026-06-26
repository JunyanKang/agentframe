# Changelog

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
