---
name: rlm-dotnet-testing-review
description: "NET testing review: test isolation, fakes for I/O, coverage of branches and flaky tests. Use when a .NET test project is added or changed."
---

<!-- managed-by: -->

# NET testing review

NET testing review: test isolation, fakes for I/O, coverage of branches and flaky tests. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the test projects and what each one covers.**
2. **Check isolation.** Flag tests that call real databases, networks or the clock.
3. **Check fakes.** Each external dependency should have a fake or stub.
4. **Check flakiness.** Flag tests that depend on timing or order.
5. **Report.** Each finding with file and line, the problem and the fix.

## Post-production

- **Tests that call real services** fail for reasons unrelated to the code. Isolate them.
- **Flaky tests** teach the team to ignore failures. Fix or remove them.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
