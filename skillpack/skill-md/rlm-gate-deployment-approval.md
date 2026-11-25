---
name: rlm-gate-deployment-approval
description: "Deployment approval gate: production deployments need an approval recorded before they run. Use when a deployment to production is requested."
---

<!-- managed-by: -->

# Deployment approval gate

Deployment approval gate: production deployments need an approval recorded before they run. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Confirm production requires an environment approval in the pipeline.**
2. **Set the rule.** The approver must differ from the change author.
3. **Check the window.** Deployments outside the agreed window need a second approval.
4. **Check the record.** Each approval links to the change and the test results.
5. **Report.** Each deployment, its approval status and any gap.

## Post-production

- **Self-approved deployments** defeat the control. Enforce separation of duties.
- **Approvals without records** cannot be shown to an auditor. Link each one.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
