# Releases

## Release Policy
Use semantic versioning. Release only after validation passes.

## Versioning Policy
Follow `.codex/framework/VERSIONING_POLICY.md`.

## Changelog Policy
Every release updates `CHANGELOG.md` with added, changed, fixed, and migration sections when relevant.

## Migration Policy
Breaking changes require migration guidance before release.

## Release Checklist
- Run `npm run validate`.
- Confirm `git status --short --branch`.
- Update version references.
- Update changelog.
- Tag release after GitHub publication.
