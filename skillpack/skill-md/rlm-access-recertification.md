---
name: rlm-access-recertification
description: "Access recertification: periodic review that each person still needs each access. Use when an access review cycle is due."
---

<!-- managed-by: -->

# Access recertification

Access recertification: periodic review that each person still needs each access. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the accounts and roles with their owners.**
2. **Check the need.** Each owner confirms the access is still needed.
3. **Remove the stale.** Revoke access that is not confirmed in the period.
4. **Check service accounts.** Each has an owner and a purpose.
5. **Report.** The accesses reviewed, revoked and still open, with the owners.

## Post-production

- **Stale access** is one of the most common audit findings. Review on a fixed cycle.
- **Unowned service accounts** carry access no one watches. Name an owner for each.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
