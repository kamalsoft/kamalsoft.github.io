---
name: rlm-remediation-plan
description: "Remediation plan: a dated plan for fixing a group of related findings. Use when several related findings need fixing together."
---

<!-- managed-by: -->

# Remediation plan

Remediation plan: a dated plan for fixing a group of related findings. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Group the findings by component or cause.**
2. **Choose the fix.** One upgrade, one configuration or one code change per group.
3. **Set the dates.** Each group gets an owner and a deadline.
4. **Plan the test.** Note how the fix will be verified.
5. **Report.** The groups, the fix, the owner, the date and the verification.

## Post-production

- **Plans without verification** claim fixes that did not land. Verify each group.
- **Unowned groups** are not started. Assign an owner before the plan is accepted.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
