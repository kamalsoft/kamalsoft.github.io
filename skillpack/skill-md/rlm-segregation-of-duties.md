---
name: rlm-segregation-of-duties
description: "Segregation of duties check: the author, reviewer and deployer of a change are different people. Use when a team sets roles for code, review and release."
---

<!-- managed-by: -->

# Segregation of duties check

Segregation of duties check: the author, reviewer and deployer of a change are different people. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the roles.** Author, reviewer, approver and deployer.
2. **Check conflicts.** Flag people who hold conflicting roles on the same change.
3. **Check the pipeline.** Flag accounts that can merge and deploy with no review.
4. **Check exceptions.** Each exception needs an approval and an expiry.
5. **Report.** The conflicts, the affected changes and the fix.

## Post-production

- **One person holding all roles** removes the independent check. Separate them.
- **Emergency access** becomes routine without a limit. Expire it.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
