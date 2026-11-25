---
name: rlm-test-plan-review
description: "Review a test plan or test suite for coverage of requirements, edge cases and failure paths. Use when a feature is about to ship and its tests need checking."
---

<!-- managed-by: -->

# Test plan review

Review a test plan or test suite for coverage of requirements, edge cases and failure paths. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the requirements.** List the requirements the tests should cover, numbered.
2. **Map tests to requirements.** For each requirement, find the test that checks it. Record requirements with no test.
3. **Check edge cases.** Empty input, limits, duplicates and invalid data should each have a test where they apply.
4. **Check failure paths.** Tests should cover a dependency that fails, times out or returns bad data.
5. **Check test quality.** Flag assertions that cannot fail, tests that depend on order or the clock, and tests that only check no exception was thrown.
6. **Report.** A table: requirement, test, gaps found, and the test to add. Mark what you could not check.

## Post-production

- **Untested requirements** regress without anyone noticing. Keep the mapping current.
- **Flaky tests** are ignored, then real failures are missed. Fix or remove them.
- **Coding-time prevention:** write the test next to the requirement it checks.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
