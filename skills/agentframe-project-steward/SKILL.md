---
name: agentframe-project-steward
description: "Use when installing or maintaining AgentFrame project governance in a repository: .codex project files, architecture notes, decisions, roadmap, memory, API/config/data/compatibility records, release policy, risks, testing policy, and documentation inventory."
---

# AgentFrame Project Steward

## Mission
Keep project-local governance accurate enough for future Codex sessions to resume safely.

## Trigger Checks
- A repository adopts AgentFrame.
- Project architecture, decisions, roadmap, APIs, configuration, data model, compatibility, releases, risks, testing, or docs changed.
- Current project memory is stale, missing, or conflicting.

## Do Not Use For
- Do not replace manually maintained content.
- Do not turn speculation into project state.
- Do not deploy the full framework when a single skill is enough.

## Operating Rules
- Inspect the repository before changing files.
- Read existing instructions and project-local governance when present.
- Work on one task at a time.
- Prefer existing patterns, standard library, platform features, and installed dependencies before adding code or dependencies.
- Preserve useful content; do not delete, rename, or overwrite without explicit approval.
- Mark unknowns as `Unknown - requires human input` instead of fabricating facts.
- Stop on unresolved conflicts between instructions, architecture, API, data, configuration, or compatibility policy.

## Workflow
1. Inspect existing instructions, docs, and project files.
2. Classify known facts, unknowns, conflicts, risks, and next actions.
3. Create or update only the project governance files needed.
4. Preserve existing content; append proposed sections when unsure.
5. Keep framework policy separate from project-local facts.
6. Run validation and report files changed, skipped, and requiring human review.

## Required Output
- Updated .codex project state.
- Architecture, decision, risk, testing, release, and memory updates when relevant.
- Unknowns and conflicts requiring human review.
- Validation evidence.

## Completion Gate
Before finishing, report changed files, skipped files, validation performed, known limitations, and any human-review items. If no validation was run, state the concrete reason.
