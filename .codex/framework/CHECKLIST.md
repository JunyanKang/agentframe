# Master Checklist

## Before Starting
- Confirm the request is understood and bounded.
- Inspect the repository before editing.
- Read existing instructions that apply to the target files.
- Identify whether the work is framework-level, project-local, or mixed.
- Stop if the request requires deleting, renaming, or overwriting useful content without approval.

## Before Editing
- List files that may be created or changed.
- Read any existing target file first.
- Prefer appending or sibling `.proposed.md` files when useful content exists.
- Confirm unrelated worktree changes will not be touched.
- Define the smallest validation that proves the change.

## Before Implementation
- Confirm a specification exists for code changes.
- Confirm architecture, API, configuration, data, compatibility, testing, and documentation impacts.
- Confirm dependencies are existing or explicitly approved.
- Confirm one task is being implemented at a time.

## Before Review
- Compare the diff against the request.
- Check for scope expansion and unrelated edits.
- Check instruction hierarchy compliance.
- Check public API, configuration, data model, and compatibility impact notes.

## Before Testing
- Select checks that cover the changed behavior or structure.
- Include error-path or invalid-input checks when logic changes.
- Avoid tests that depend on uncontrolled external state.
- Record skipped checks with a concrete reason.

## Before Completion
- Update affected documentation.
- Update project memory after meaningful changes.
- Check for empty files and placeholder-only files.
- Run structural validation for skills, checklists, and templates.
- Run `git status --short --branch`.

## Before Final Response
- Summarize repository inspection.
- List created, modified, skipped, and human-review files.
- List conflicts and unknowns.
- Report validation commands and outcomes.
- Recommend the next step without continuing into unrelated product work.
