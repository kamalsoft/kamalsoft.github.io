---
name: rlm-xunit-review
description: "xUnit review: fact and theory use, shared fixtures and assertions that can fail. Use when xUnit tests are added or changed."
---

<!-- managed-by: -->

# xUnit review

xUnit review: fact and theory use, shared fixtures and assertions that can fail. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the test classes and their fixtures.**
2. **Check theories.** Flag theories with one data row or duplicated facts.
3. **Check fixtures.** Flag shared mutable fixtures that couple tests.
4. **Check assertions.** Flag tests that assert nothing or only that no exception occurred.
5. **Report.** Each finding with file and line, the problem and the fix.

## Post-production

- **Shared mutable fixtures** make tests fail in a different order. Create state per test.
- **Assertions that cannot fail** give false confidence. Assert the result.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
