# Testing

## Detected Test Framework
No external test framework. Structural validation uses a Node.js script with process exit codes.

## Test Commands
- `npm run validate`

## Coverage Expectations
Validation must cover required files, non-empty content, required skill headings, required checklist categories, required framework headings, and template usability headings.

## Test Categories
- Structural documentation validation.
- Empty file detection.
- Placeholder-only content detection.

## Missing Tests
- Semantic quality review still requires human or agent review.

## Testing Risks
- A file can satisfy headings but still be poorly written; review remains required.
