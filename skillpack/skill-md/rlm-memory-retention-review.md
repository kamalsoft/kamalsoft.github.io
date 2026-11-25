---
name: rlm-memory-retention-review
description: "Agent memory retention review: how long memory is kept, and how it is deleted on request. Use when memory is kept across sessions or users."
---

<!-- managed-by: -->

# Agent memory retention review

Agent memory retention review: how long memory is kept, and how it is deleted on request. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the retention rules.** Each kind of memory and how long it is kept.
2. **Check the deletion.** Confirm a user's memories can be found and removed.
3. **Check the copies.** Flag memory copied into logs, backups or analytics.
4. **Check the expiry.** Flag memory with no expiry at all.
5. **Report.** Each kind with its retention, the deletion path and the gap.

## Post-production

- **Memory kept forever** holds old personal data. Set an expiry per kind.
- **Copies in logs** outlive the memory itself. Keep memory out of logs.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
