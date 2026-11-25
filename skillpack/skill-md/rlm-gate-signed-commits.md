---
name: rlm-gate-signed-commits
description: "Signed commits gate: commits to protected branches traced to a verified author. Use when a branch is protected or a release is cut."
---

<!-- managed-by: -->

# Signed commits gate

Signed commits gate: commits to protected branches traced to a verified author. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Confirm the protected branches are listed.**
2. **Set the rule.** Unsigned commits cannot be merged into protected branches.
3. **Check key management.** Signing keys are personal and revocable.
4. **Check exceptions.** Service accounts need a documented process.
5. **Report.** The branches, the verification result and any unsigned commits.

## Post-production

- **Unverified commits** make the author of a change unclear. Require signatures on protected branches.
- **Shared signing keys** cannot be traced to one person. Use personal keys.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
