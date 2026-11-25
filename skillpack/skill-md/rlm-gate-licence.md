---
name: rlm-gate-licence
description: "Licence gate: dependency licences checked against policy before a merge. Use when a change adds a dependency or a licence policy changes."
---

<!-- managed-by: -->

# Licence gate

Licence gate: dependency licences checked against policy before a merge. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Confirm the licence scan runs on each dependency change.**
2. **Set the policy.** Permitted, review-required and forbidden licences are listed.
3. **Check unknown licences.** Flag packages with no licence recorded.
4. **Check copyleft.** Flag strong copyleft licences that conflict with distribution.
5. **Report.** Each package with its licence, the policy result and the owner's decision.

## Post-production

- **Forbidden licences** found after release cost a rebuild. Block them at the merge.
- **Unknown licences** are a risk until someone checks. Treat them as review-required.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
