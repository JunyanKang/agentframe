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

## 0.6.6 - 2026-06-27
### Added
- Top-level `starter-kit/README.md` as the direct adopter entrypoint for optional project-state initialization.

### Changed
- Moved neutral adopter project-state templates from `.codex/framework/project-template/` to `starter-kit/.codex/project/`.
- README, Chinese README, adoption guide, `.codex/README.md`, and validator checks now point adopters to the standalone starter kit instead of an internal framework subdirectory.

### Fixed
- Improved adopter usability by separating reusable starter content from AgentFrame's internal `.codex/framework/` implementation details.

### Validation
- `npm run validate`
- `python3 -m py_compile scripts/update-agentframe-skills.py`
- `git diff --check`

### Migration Notes
- Users following v0.6.5 docs should use `starter-kit/.codex/project/` instead of `.codex/framework/project-template/`.
- No public skill names changed.

## 0.6.5 - 2026-06-27
### Added
- Neutral `.codex/framework/project-template/` files for initializing adopter project state without AgentFrame-specific facts.
- `.codex/project/README.md` warning that AgentFrame's own project state must not be copied as facts for another repository.
- Validator checks for adoption-safe project-state guidance and neutral project templates.

### Changed
- README, Chinese README, adoption guide, and `.codex/README.md` now direct adopters to copy reusable framework assets and initialize `.codex/project/` from the template directory.

### Fixed
- Reduced the risk that adopter repositories copy AgentFrame's own `.codex/project/` facts and mislead future Codex sessions.

### Validation
- `npm run validate`
- `python3 -m py_compile scripts/update-agentframe-skills.py`
- `git diff --check`

### Migration Notes
- Existing AgentFrame adopters should review whether their `.codex/project/` files contain AgentFrame repository facts; if so, replace them with confirmed target-project facts or reinitialize from `.codex/framework/project-template/`.
- No public skill names changed.

## 0.6.4 - 2026-06-27
### Added
- `scripts/update-agentframe-skills.py --ref latest` support for resolving the latest GitHub release tag before installing skills.
- Validator checks that user-facing install/update docs do not hardcode release tags in script URLs, release badges, or `--ref` examples.

### Changed
- README, Chinese README, and adoption docs now use the dynamic GitHub release badge, `main` for fetching the updater script, and `--ref latest` for stable installs.
- README version coherence validation now treats `package.json`, `.codex/framework/FRAMEWORK_VERSION.md`, and `CHANGELOG.md` as release metadata while keeping README version references dynamic.

### Fixed
- Removed stale hardcoded update examples from adoption docs.

### Validation
- `npm run validate`
- `python3 -m py_compile scripts/update-agentframe-skills.py`
- `python3 scripts/update-agentframe-skills.py --ref latest --dry-run --no-validate --dest /tmp/agentframe-latest-smoke-skills`
- `git diff --check`

### Migration Notes
- Existing users can continue using fixed tags such as `--ref v0.6.3`; new docs recommend `--ref latest` to avoid stale release instructions.
- No public skill names changed.

## 0.6.3 - 2026-06-27
### Added
- Chinese usage-pattern prompts now cover the same core skill surfaces as the English prompt templates.

### Changed
- Chinese README structure now mirrors the English README landing-page structure.

### Fixed
- Validator now checks Chinese README section coverage and Chinese prompt-template skill coverage.

### Validation
- `npm run validate`
- `python3 -m py_compile scripts/update-agentframe-skills.py`
- `git diff --check`

### Migration Notes
- None.

## 0.6.2 - 2026-06-27
### Added
- README badges, one-sentence tagline, and Before/After summary table.
- README adoption profile comparison table.

### Changed
- Adoption guide now uses link text that matches its local document context.
- Validator now accepts local `docs/ADOPTION.md` links while preserving README checks for public doc links.

### Fixed
- None.

### Validation
- `npm run validate`
- `python3 -m py_compile scripts/update-agentframe-skills.py`
- `git diff --check`
- Codex `quick_validate.py` for all 24 installable skills

### Migration Notes
- No migration required.
- No public skill names changed.

## 0.6.1 - 2026-06-27
### Added
- `docs/DEMO.md` before/after behavior demo.
- `docs/FEEDBACK_LOOP.md` field-feedback process.
- `tests/golden/README.md` and `tests/golden/SCHEMA.md`.

### Changed
- README, Chinese README, and adoption docs now link demo, usage patterns, and feedback loop.
- Validator now checks demo, feedback-loop, and golden scenario documentation coverage.

### Fixed
- None.

### Validation
- `npm run validate`
- `python3 -m py_compile scripts/update-agentframe-skills.py`
- `git diff --check`
- Codex `quick_validate.py` for all 24 installable skills

### Migration Notes
- No migration required.
- No public skill names changed.

## 0.6.0 - 2026-06-27
### Added
- Expanded `docs/USAGE_PATTERNS.md` with dependency, migration, security, performance/observability, strict no-unrelated-files, adoption assessment, quick plan-only, project memory refresh, and Chinese prompt templates.
- Added `README.zh-CN.md` for Chinese users.
- Added 7 golden scenarios for review, migration, security, performance investigation, governance update, no-unrelated-files implementation, and project memory refresh.

### Changed
- Strengthened `.codex/framework/SKILL_ROUTING.md` operating lanes with must-use, may-use, default-skip, escalation, final-report, and documentation-burden rules.
- Expanded existing golden scenarios with operating lane, escalation, forbidden behavior, over-governance, and under-governance expectations.
- Improved narrow guardian default prompts with role-specific artifacts and review surfaces.
- README now includes a 60-second start and FAQ explaining why AgentFrame is more than static `AGENTS.md` instructions.

### Fixed
- Validator now rejects missing golden operating lanes, missing behavioral-risk sections, vague guardian default prompts, and missing usage-pattern coverage.

### Validation
- `npm run validate`
- `python3 -m py_compile scripts/update-agentframe-skills.py`
- `git diff --check`
- Codex `quick_validate.py` for all 24 installable skills

### Migration Notes
- No migration required. No public skill names changed.

## 0.5.5 - 2026-06-27
### Added
- `scripts/update-agentframe-skills.py --uninstall` for safe removal of installed local AgentFrame skills.
- Public uninstall instructions in README and the adoption guide.
- Validator coverage requiring uninstall documentation in public docs.

### Changed
- AgentFrame lifecycle documentation now covers install, update, and uninstall paths.

### Fixed
- Users no longer need to rely on manual `rm -rf ~/.codex/skills/agentframe-*` cleanup guidance.

### Validation
- `npm run validate`
- `python3 -m py_compile scripts/update-agentframe-skills.py`
- Temporary-destination uninstall dry-run and uninstall smoke tests
- `git diff --check`

### Migration Notes
- Existing users can update local AgentFrame skills with `python3 scripts/update-agentframe-skills.py --ref v0.5.5`.
- To uninstall local AgentFrame skills, run `python3 scripts/update-agentframe-skills.py --uninstall`.

## 0.5.4 - 2026-06-27
### Added
- `docs/USAGE_PATTERNS.md` with explicit `$agentframe-*` prompt templates and native Codex fast-path guidance.
- Golden task scenario contracts under `tests/golden/` for routing and stop-condition expectations.
- Validator coverage for golden scenarios, implicit invocation policy, description uniqueness, and description disambiguation.

### Changed
- Framework workflow now defines Lite, Standard, and Extended operating lanes with explicit escalation triggers.
- Skill routing now maps each operating lane to concrete skill routes.
- README and adoption docs now present Core, Standard, and Full adoption profiles.
- Narrow guardian skills now disable implicit invocation where explicit prompting or routed handoff is safer.

### Fixed
- Specification skill frontmatter now follows the same `Use when` trigger pattern as the rest of the installable skill suite.

### Validation
- `npm run validate`
- Codex `quick_validate.py` for all 24 installable skills
- `python3 -m py_compile scripts/update-agentframe-skills.py`
- `git diff --check`

### Migration Notes
- Existing users can update local AgentFrame skills with `python3 scripts/update-agentframe-skills.py --ref v0.5.4`.

## 0.5.3 - 2026-06-27
### Added
- Product-oriented README structure covering value proposition, capabilities, install/update flow, optional framework adoption, validation, and maintenance workflow.

### Changed
- README no longer lists every AgentFrame skill inline; detailed skill paths remain in `docs/ADOPTION.md`.
- README now promotes the safe install/update script as the primary path for full-suite installation and updates.

### Fixed
- Public README now reads as a product entry point instead of an internal skill index.

### Validation
- `npm run validate`

### Migration Notes
- No migration required. Existing users can update local AgentFrame skills with `python3 scripts/update-agentframe-skills.py --ref v0.5.3`.

## 0.5.2 - 2026-06-27
### Added
- Validator checks for valid `agentframe-*` skill references in `Handoff Rules` and `Interaction With Other Skills`.
- Validator checks for version coherence across `package.json`, `README.md`, `.codex/framework/FRAMEWORK_VERSION.md`, and `CHANGELOG.md`.
- Section-level drift diagnostics for installable/framework-local skill pairs.
- Section body quality checks for skills, checklists, templates, handoff rules, and non-responsibility action wording.
- Prompt target validation for `agents/openai.yaml`.

### Changed
- Implementer handoff rules now name each guardian skill explicitly instead of using catch-all wording.
- CI validation now runs on Node 18 and 22, includes `workflow_dispatch`, uses least-privilege `contents: read`, and logs Node/npm versions.
- README and adoption docs now surface the canonical skill source mapping.
- Specification and review templates now avoid duplicated fields.

### Fixed
- Corrected malformed `plugin_agentframe-architect` skill references.
- Removed false `agentframe-architecture` skill-name references from prose.
- Reworded non-responsibility bullets that began with adverbs instead of action verbs.

### Validation
- `npm run validate`
- Codex `quick_validate.py` for all 24 installable skills
- `python3 -m py_compile scripts/update-agentframe-skills.py`
- `git diff --check`

### Migration Notes
- Existing users can update local AgentFrame skills with `python3 scripts/update-agentframe-skills.py --ref v0.5.2`.
- Projects with customized CI workflows should merge the Node matrix and explicit permissions manually if they adopted AgentFrame workflow files.

## 0.5.1 - 2026-06-27
### Added
- `scripts/update-agentframe-skills.py` for safe full-suite updates of locally installed `agentframe-*` Codex skills.
- `npm run update-skills` wrapper for the AgentFrame skill update script.

### Changed
- README and adoption docs now distinguish first-time install from existing-skill updates.

### Fixed
- Existing AgentFrame skill installations no longer require manual deletion before refreshing the full suite.

### Validation
- `npm run validate` now checks that the update script and documentation are present.
- Verified the update script with `--dry-run` against `v0.5.0`.
- Verified install and replacement update flows against a temporary skills directory.

### Migration Notes
- Existing users can update local AgentFrame skills with `python3 scripts/update-agentframe-skills.py --ref <tag-or-branch>` instead of manually deleting installed skill directories.

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
