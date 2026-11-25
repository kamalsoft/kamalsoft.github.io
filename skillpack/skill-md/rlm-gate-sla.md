---
name: rlm-gate-sla
description: "Security finding SLA gate: release blocked while findings are past their remediation deadline. Use when a release is planned while findings are open."
---

<!-- managed-by: -->

# Security finding SLA gate

Security finding SLA gate: release blocked while findings are past their remediation deadline. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List open findings with their severity and age.**
2. **Set the deadlines.** Each severity has a remediation time limit.
3. **Set the rule.** A release with findings past deadline does not pass.
4. **Check the exceptions.** Each overdue finding needs an approved extension.
5. **Report.** The overdue findings, the release decision and the owners.

## Post-production

- **Overdue high findings** are the ones auditors ask about. Block the release until fixed or excepted.
- **Unset deadlines** make every finding urgent or none. Set them per severity.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
