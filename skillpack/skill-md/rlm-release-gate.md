---
name: rlm-release-gate
description: "Check the release gate: the sign-off, tests, rollback plan and security checks a release needs before it goes to production. Use when a release is about to be promoted."
---

<!-- managed-by: -->

# Release gate

Check the release gate: the sign-off, tests, rollback plan and security checks a release needs before it goes to production. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the release scope.** List the changes in the release, and the services they touch.
2. **Check the tests.** The release needs its test results and a note of any skipped tests.
3. **Check the security checks.** Confirm the security gates passed for this release, and list any open high findings.
4. **Check the rollback.** A tested rollback path must exist, with the steps written down.
5. **Check the sign-off.** A named owner must approve. Flag releases with no approval.
6. **Report.** A pass or fail verdict, with the reasons, and what must be fixed before the release can go.

## Post-production

- **Releases without rollback** turn a bad deploy into an outage. Test the rollback.
- **Open high findings** shipped to production become the next incident. Block on them.
- **Coding-time prevention:** keep each release small enough to roll back in one step.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
