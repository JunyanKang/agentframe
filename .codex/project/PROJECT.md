# Project

## Project Identity
Name: AgentFrame.
Purpose: installable Codex software engineering skills plus an optional reusable governance framework for repository-level project state.

## Goals
- Provide durable instructions, workflows, templates, and skills for future agents.
- Keep reusable framework policy separate from project-local facts.
- Support public release as a GitHub-installable Codex skills repository.

## Non-Goals
- Implementing product features.
- Generating application code.
- Encoding domain-specific examples.

## Users
- AI coding agents operating in a repository.
- Human maintainers reviewing AI-assisted changes.

## Scope
Framework and project governance files under `.codex/`, public documentation, and validation tooling.
Installable Codex skills under `skills/`.

## Repository Structure
- `.codex/framework/`: reusable framework layer.
- `.codex/project/`: project-local layer.
- `skills/`: Codex skill-installer compatible skill packages.
- `scripts/`: validation tooling.
- `.github/`: public collaboration templates and CI.

## Technology Stack
- Markdown for governance artifacts.
- Node.js for structural validation.

## Current Status
Initial public-release framework generated on 2026-06-26; complete installable Codex skills added in version 0.3.0.

## Open Questions
- Long-term package distribution channel: Unknown - requires human input.
- Preferred license beyond MIT: Unknown - requires human input.
