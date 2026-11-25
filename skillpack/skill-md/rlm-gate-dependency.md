---
name: rlm-gate-dependency
description: "Dependency gate: known-vulnerable or unmaintained packages blocked from a merge. Use when a change adds or upgrades a dependency."
---

<!-- managed-by: -->

# Dependency gate

Dependency gate: known-vulnerable or unmaintained packages blocked from a merge. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Confirm the check runs on each change that touches a lock file.**
2. **Set the rule.** A new dependency with a known high or critical advisory blocks the merge.
3. **Check unmaintained packages.** Flag packages with no release in a long period.
4. **Check exceptions.** Each allowed exception needs an owner and an expiry.
5. **Report.** Each blocked or flagged package with its advisory and the decision.

## Post-production

- **Advisories on new packages** are cheapest to fix before the merge. Block them then.
- **Expired exceptions** stay forever. Set a review date on each.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
