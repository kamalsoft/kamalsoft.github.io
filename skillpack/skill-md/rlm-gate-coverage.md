---
name: rlm-gate-coverage
description: "Test coverage gate: changed code must be tested before it merges. Use when a change adds or modifies code."
---

<!-- managed-by: -->

# Test coverage gate

Test coverage gate: changed code must be tested before it merges. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Measure coverage on the changed lines, not only the total.**
2. **Set the rule.** New code below the agreed threshold blocks the merge.
3. **Check meaningful tests.** Flag coverage that comes from tests with no assertions.
4. **Check exclusions.** Each excluded path needs a reason.
5. **Report.** The changed lines, the coverage and any gap.

## Post-production

- **Total coverage** can hide untested new code. Gate on the changed lines.
- **Coverage without assertions** gives false comfort. Check the tests assert something.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
