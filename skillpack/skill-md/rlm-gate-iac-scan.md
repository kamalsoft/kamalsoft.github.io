---
name: rlm-gate-iac-scan
description: "Infrastructure as code scan gate: misconfigured infrastructure blocked before it is applied. Use when a change touches infrastructure code."
---

<!-- managed-by: -->

# Infrastructure as code scan gate

Infrastructure as code scan gate: misconfigured infrastructure blocked before it is applied. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Confirm the scan runs on each infrastructure change, before the plan is applied.**
2. **Set the rule.** High misconfigurations block the apply.
3. **Check exceptions.** Each suppressed rule needs a reason and an owner.
4. **Check drift.** Flag resources changed outside the code.
5. **Report.** Each finding with its resource, severity and the exception status.

## Post-production

- **Public storage and open ports** are common and costly. Block them at plan time.
- **Suppressed rules** accumulate silently. Review the list each quarter.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
