# AgentFrame Codex Directory

## Purpose
This directory contains reusable AI-assisted engineering governance for AgentFrame plus project-local state for the repository that adopts it.

## Framework vs Project Files
- `.codex/framework/` contains reusable policies, templates, and skills that stay generic across software domains.
- `.codex/project/` contains facts about this repository: current state, decisions, risks, testing, releases, and open questions.
- `starter-kit/.codex/project/` contains neutral project-state templates for adopter repositories.

Do not copy AgentFrame's own `.codex/project/` files as facts for another repository. They describe AgentFrame itself. Adopter repositories should initialize their own `.codex/project/` from `starter-kit/.codex/project/` and replace unknowns with confirmed local facts.

## How Future Agents Should Use These Files
1. Inspect the repository before editing.
2. Read `.codex/AGENTS.md` and relevant framework or project documents.
3. Choose the smallest relevant skill set under `.codex/framework/skills/`.
4. Keep framework guidance generic and project documents factual.
5. Finish with validation and a final report that names changed files.

## Safety Rules
- Do not delete, rename, overwrite, or replace existing useful content without explicit approval.
- If a target file exists, read it first.
- If useful content exists, preserve it and append compatible sections.
- If conflict exists, add `Potential Conflict Requiring Human Review` instead of resolving silently.
- If unsure whether a project fact is true, write `Unknown - requires human input`.

## Update Rules
- Framework changes require version and compatibility review.
- Project-local changes require memory and current-state review.
- Skill changes require checklist validation.
- Documentation changes must not contradict code or existing policy.

## Human Review Requirements
Human review is required for architecture changes, public API changes, compatibility changes, release policy changes, dependency policy changes, unresolved conflicts, and any proposed deletion or replacement of maintained content.
