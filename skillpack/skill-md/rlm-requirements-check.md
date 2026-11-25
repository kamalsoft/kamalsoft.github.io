---
name: rlm-requirements-check
description: "Map each requirement to the code and tests that meet it, and flag the code flaws found on the way. Use when a feature must be checked against its requirements before release."
---

<!-- managed-by: -->

# Requirements and flaws check

Map each requirement to the code and tests that meet it, and flag the code flaws found on the way. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the requirements.** Take the requirements as written, numbered. If a requirement is vague, record it as vague rather than guessing its meaning.
2. **Map to code.** For each requirement, find the code and the tests that meet it. Record `file:line` for each.
3. **Mark each requirement.** Met (code and test), partly met (code but no test, or a gap), or not met (no code).
4. **Find code flaws.** While mapping, note flaws in the code that the requirement depends on: missing validation, unhandled errors, unclear behaviour and missing edge cases.
5. **Check the edge cases.** For each met requirement, list the edge cases it implies (empty input, limits, failure of a dependency) and whether each one is handled.
6. **Report.** A table: requirement, status, code location, test location, flaws found, fix. Mark what you did not check and any requirement you had to read loosely.

## Post-production

- **Requirements met only on the happy path** fail in production on the first unusual input. Keep the edge-case step.
- **Untested requirements** regress silently. Each requirement should name a test.
- **Coding-time prevention:** write the test for each numbered requirement before or with the code.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
