# Contributing

## Scope
Contributions should improve AgentFrame as a reusable AI-assisted engineering framework. Do not add domain-specific examples unless they are clearly neutral and broadly applicable.

## Workflow
1. Inspect existing files before editing.
2. Keep framework changes under `.codex/framework/` and project facts under `.codex/project/`.
3. Preserve existing content; append compatible sections or propose sibling files when unsure.
4. Run `npm run validate`.
5. Explain why the change is needed and what compatibility surface it touches.

## Pull Request Requirements
- One logical change per pull request.
- No placeholder-only documents.
- Required headings must stay intact.
- Compatibility impact must be described for skill, template, and policy changes.
- Human-review items must be explicit.
