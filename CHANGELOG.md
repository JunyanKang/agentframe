# Changelog

## Unreleased
### Added
- None.

### Changed
- None.

### Fixed
- None.

### Validation
- None.

### Migration Notes
- None.

## 0.5.0 - 2026-06-27
### Added
- Full reference audit documentation in `docs/REFERENCE_SKILL_AUDIT.md`, covering 598 reference `SKILL.md` files, 30 command workflows, 17 `AGENTS.md` files, and 246 validation-related files from the compared repositories.
- New first-class installable and framework-local AgentFrame skills:
  - `agentframe-governance-guardian`
  - `agentframe-ci-guardian`
  - `agentframe-release-manager`
  - `agentframe-security-guardian`
  - `agentframe-dependency-guardian`
  - `agentframe-observability-guardian`
  - `agentframe-migration-guardian`
  - `agentframe-frontend-experience-guardian`

### Changed
- Existing AgentFrame skills now include role-specific functional playbooks, artifact schemas, quality gates, and anti-pattern sections.
- Skill routing now treats governance, CI, release, security, dependency, observability, migration, and frontend experience as independent engineering surfaces.
- README and adoption docs now list all 24 installable skills.
- Validation now checks 24 synchronized installable/framework-local skill pairs.

### Fixed
- AgentFrame is no longer implicitly constrained to the original 16 skills when the engineering surface requires additional independent ownership.

### Validation
- Run `npm run validate` after pulling this release.
- Run Codex skill validation for installed skill folders when updating a local Codex skills installation.

### Migration Notes
- Existing adopters can keep using the original 16 skills; the 8 new skills are additive.
- Reinstall or update skills from GitHub to receive the expanded 24-skill suite.
- Projects with customized `.codex/framework/SKILL_ROUTING.md` should merge the new routing rows and workflow orders manually.

## 0.4.0 - 2026-06-26
### Added
- Root `AGENTS.md` routing file for future agents.
- `.codex/framework/SOURCE_OF_TRUTH.md` defining canonical installable skills and framework-local reference copies.
- `.codex/framework/SKILL_ROUTING.md` with skill selection matrix, workflow order, co-invocation rules, stop conditions, and review gates.
- `docs/ADOPTION.md` for installing skills and adopting the optional `.codex/` framework.
- Validator checks for source-of-truth drift, skill handoff quality, non-responsibility wording, template placeholder text, and role-specific default prompts.

### Changed
- Installable skills and framework-local skill copies now use synchronized substantive content.
- Handoff rules are role-specific instead of a shared generic block.
- Explicit non-responsibilities now use clear prohibitive language.
- Template files now use actionable fill-in structures and generic date placeholders.
- `agents/openai.yaml` default prompts are role-specific and operational.

### Fixed
- Validator now detects low-quality placeholder text and unintentional drift between canonical installable skills and framework-local reference copies.

### Validation
- Run `npm run validate` after framework, skill, template, or routing changes.
- Run Codex skill validation for installable skills when skill frontmatter or metadata changes.

### Migration Notes
- Existing adopters should treat `skills/agentframe-*` as canonical and synchronize local `.codex/framework/skills/*` copies if they customize skill content.
- Existing adopters should run `npm run validate` after pulling this release because the validator now detects source-of-truth drift.

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
