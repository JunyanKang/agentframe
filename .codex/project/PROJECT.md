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
Public AgentFrame releases are active. Version 0.6.4 removed hardcoded release refs from user-facing install/update docs. Version 0.6.5 prepares adoption-safe project-state templates so adopters do not copy AgentFrame's own `.codex/project/` facts into target repositories.

## Open Questions
- Long-term package distribution channel: Unknown - requires human input.
- Preferred license beyond MIT: Unknown - requires human input.
