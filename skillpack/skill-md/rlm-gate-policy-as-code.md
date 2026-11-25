---
name: rlm-gate-policy-as-code
description: "Policy as code gate: organisational rules written as code and checked on every change. Use when a team writes or changes rules for infrastructure or deployments."
---

<!-- managed-by: -->

# Policy as code gate

Policy as code gate: organisational rules written as code and checked on every change. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the policies.** Each rule with its purpose and owner.
2. **Confirm each policy is code, versioned and tested.**
3. **Set the rule.** A change that breaks a policy is blocked with a clear message.
4. **Check drift.** Flag policies that exist only as documents.
5. **Report.** Each policy, its enforcement point and any gap.

## Post-production

- **Policies in documents only** are not enforced. Write them as code.
- **Unclear block messages** get the rule disabled. Explain each block.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
