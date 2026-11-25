---
name: rlm-pull-request-review
description: "Review a pull request for scope, tests, risk, and whether a reviewer can understand and check it. Use when a pull request is ready for review."
---

<!-- managed-by: -->

# Pull request review

Review a pull request for scope, tests, risk, and whether a reviewer can understand and check it. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the description.** Check that the description says what changed, why, and how it was tested.
2. **Check scope.** Flag unrelated edits, and a change that mixes a refactor with a behaviour change.
3. **Check tests.** Each behaviour change needs a test. Flag changes that only touch tests, or tests that were deleted.
4. **Check risk.** Note what could break: data, public interfaces, configuration and deployment order.
5. **Check the size.** Flag changes too large to review in one sitting, and say how they could be split.
6. **Report.** List the findings in order of risk, each with file and line. End with a verdict: ready, needs changes, or split first.

## Post-production

- **Unrelated changes** hide bugs from reviewers. Split the change.
- **Missing tests** let regressions reach production. Require a test per behaviour change.
- **Coding-time prevention:** write the description before the review starts, and check your own diff first.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
