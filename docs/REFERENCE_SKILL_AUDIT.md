# Reference Skill Audit

## Purpose
Record how AgentFrame was compared against `nexu-io/open-design` and `Owl-Listener/designer-skills`, and which patterns were adopted into AgentFrame.

## Scope
This audit covers reference material read from local clones under `/tmp/agentframe-reference-repos`:

- 598 `SKILL.md` files.
- 30 command workflow files.
- 17 `AGENTS.md` hierarchy files.
- 246 validation, guard, lint, check, verify, smoke, or contract-related files.

## Reference Patterns Adopted
- Source-of-truth layering: root instructions own cross-repository rules; directory instructions own local boundaries.
- Functional skill shape: skills need workflows, output contracts, quality gates, anti-patterns, and handoff rules, not only role descriptions.
- Design-template discipline: resource maps, pre-flight reads, hard rules, self-checks, and output contracts make agent behavior reproducible.
- Validation discipline: validators should fail closed on structural drift, broken relative references, stale metadata, and unsafe workflow contracts.
- CI trust boundaries: untrusted PR execution, business decision workflows, and trusted writer workflows should be separate.
- Release discipline: published artifacts need version alignment, provenance, validation evidence, and rollback or supersession notes.
- User-facing quality: frontend work needs state coverage, accessibility, responsive behavior, error recovery, and rendered evidence.
- Operational evidence: logs, diagnostics, telemetry, and failure reports need schemas, redaction rules, and retrieval paths.

## AgentFrame Changes Derived From The Audit
- Existing skills now include role-specific `Functional Playbook`, `Artifact Schema`, `Quality Gates`, and `Anti-Patterns` sections.
- AgentFrame is no longer fixed to the original 16 skills; 8 additional installable skills and framework-local copies were added:
  - `agentframe-governance-guardian`
  - `agentframe-ci-guardian`
  - `agentframe-release-manager`
  - `agentframe-security-guardian`
  - `agentframe-dependency-guardian`
  - `agentframe-observability-guardian`
  - `agentframe-migration-guardian`
  - `agentframe-frontend-experience-guardian`
- Routing, install documentation, and validation mapping were updated to treat the new skills as first-class surfaces.

## Maintenance Notes
- Re-run the reference audit when upstream reference repositories materially change or when AgentFrame adds another skill class.
- Keep installable skill content and framework-local copies synchronized through `npm run validate`.
- Prefer adding a new skill when a surface needs independent ownership, gates, and handoff rules; do not overload reviewer, tester, or architect with unrelated governance responsibilities.
