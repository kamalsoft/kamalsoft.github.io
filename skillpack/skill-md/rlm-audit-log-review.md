---
name: rlm-audit-log-review
description: "Audit log review: whether security-relevant events are logged completely, protected and kept. Use when code records sign-ins, permission changes, exports or deletions."
---

<!-- managed-by: -->

# Audit log review

Audit log review: whether security-relevant events are logged completely, protected and kept. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the events.** Sign-in, permission change, export, deletion and admin action.
2. **Check completeness.** Flag events that produce no log entry.
3. **Check content.** Each entry needs who, what, when and the result.
4. **Check protection.** Logs must be append-only or separately stored.
5. **Report.** The events, the gaps and the fix.

## Post-production

- **Missing events** cannot be investigated. Log every security-relevant action.
- **Logs that can be edited** are not evidence. Store them separately.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
