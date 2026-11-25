---
name: rlm-gate-code-owners
description: "Code owners gate: sensitive paths need review from the team that owns them. Use when a change touches security, infrastructure or data code."
---

<!-- managed-by: -->

# Code owners gate

Code owners gate: sensitive paths need review from the team that owns them. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the sensitive paths.** Authentication, payments, infrastructure and data.
2. **Confirm the owners file names a team or person for each.**
3. **Set the rule.** A change to a sensitive path needs an owner's approval.
4. **Check stale owners.** Flag owners who have left or teams that no longer exist.
5. **Report.** The sensitive paths, the owners and any gap.

## Post-production

- **Unowned sensitive code** gets reviewed by no one with context. Name an owner for each path.
- **Stale owners** approve nothing. Review the owners file each quarter.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
