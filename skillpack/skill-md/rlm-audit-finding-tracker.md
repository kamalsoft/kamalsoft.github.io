---
name: rlm-audit-finding-tracker
description: "Audit finding tracker: findings from an audit tracked to closure with owners and evidence. Use when an audit or assessment produced findings."
---

<!-- managed-by: -->

# Audit finding tracker

Audit finding tracker: findings from an audit tracked to closure with owners and evidence. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the findings with their severity and the control they affect.**
2. **Assign each an owner and a due date.**
3. **Track the actions.** Each action has a status and the evidence of completion.
4. **Check the closure.** A finding closes only when its evidence is reviewed.
5. **Report.** The open findings, the overdue ones and the evidence still needed.

## Post-production

- **Findings closed without evidence** come back in the next audit. Require it.
- **Overdue findings** are visible to the auditor. Escalate them.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
