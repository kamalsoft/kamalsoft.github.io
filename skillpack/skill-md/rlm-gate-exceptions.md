---
name: rlm-gate-exceptions
description: "Security exception gate: each accepted risk recorded with an owner, a reason and an expiry. Use when a gate is bypassed or a finding is accepted."
---

<!-- managed-by: -->

# Security exception gate

Security exception gate: each accepted risk recorded with an owner, a reason and an expiry. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the exceptions.** Each accepted finding, gate or rule.
2. **Check the record.** Each needs an owner, a reason and an expiry date.
3. **Check the expiry.** Flag exceptions past their date.
4. **Check the approval.** Each exception needs an approver above the team.
5. **Report.** The exceptions, their status and those that need renewal or closure.

## Post-production

- **Open-ended exceptions** become permanent risks. Require an expiry.
- **Unapproved exceptions** are invisible to the risk owner. Require an approver.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
