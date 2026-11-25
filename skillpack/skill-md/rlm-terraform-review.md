---
name: rlm-terraform-review
description: "Review Terraform code for state handling, provider versions, secrets, drift and blast radius. Use when infrastructure code is added or changed."
---

<!-- managed-by: -->

# Terraform review

Review Terraform code for state handling, provider versions, secrets, drift and blast radius. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the configuration.** Open the root modules, variables, backend configuration and lock file.
2. **Check state.** State must live in a remote backend with locking and encryption. Flag local state.
3. **Check versions.** Providers and modules should be pinned. Flag unpinned or floating versions.
4. **Check secrets.** Flag secrets in variables with defaults, in outputs, or written to state in plain text without need.
5. **Check the blast radius.** Large single state files affect many resources at once. Note what one plan can change.
6. **Report.** List each finding with file and resource, severity and the fix. Mark what a plan would need to confirm.

## Post-production

- **Drift** between code and cloud resources surprises the next apply. Run plans on a schedule.
- **Large states** make every plan slow and risky. Split by service.
- **Coding-time prevention:** require a plan review on every infrastructure change.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
