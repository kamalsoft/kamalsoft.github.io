---
name: rlm-audit-compliance
description: "Check code and its changes for audit and compliance evidence: logging, change records, access control and retention. Use when preparing for an audit or when a change touches regulated data."
---

<!-- managed-by: -->

# Audit and compliance check

Check code and its changes for audit and compliance evidence: logging, change records, access control and retention. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the scope.** Identify the regulated data or controls this code touches, and the policy it must meet. If no policy is given, ask for it rather than assume one.
2. **Check audit logging.** Security-relevant events (sign-in, permission change, data export, deletion) must be logged with who, what, when and the result. Flag events with no log.
3. **Check log safety.** Flag secrets, passwords, tokens and personal data written to logs.
4. **Check change records.** Each change should have a linked ticket, a reviewer and a passing check. Flag merges with no review.
5. **Check access control.** Flag shared accounts, hard-coded credentials and admin actions without a second check.
6. **Check retention.** Flag data kept with no deletion path, and deletion that does not reach backups or copies where the policy requires it.
7. **Report.** For each control give the status: evidence present, partly present, or missing. Say what must be collected from outside the repository. This is a technical aid, not a certification. Mark what you did not run.

## Post-production

- **Missing audit events** are found during an audit, not before. Review the event list each release.
- **Secrets in logs** are a common post-production leak. Keep the log-safety check on.
- **Coding-time prevention:** add audit logging with the feature, not after it, and use a shared logger that masks known secret fields.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
