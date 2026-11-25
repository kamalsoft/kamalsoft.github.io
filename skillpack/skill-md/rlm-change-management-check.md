---
name: rlm-change-management-check
description: "Check that each production change has an approval, a test result, a rollback plan and a record. Use when a change process must be shown to follow policy."
---

<!-- managed-by: -->

# Change management check

Check that each production change has an approval, a test result, a rollback plan and a record. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the change record.** Take the change as recorded: its ticket, author, reviewer and date.
2. **Check approval.** The approver must be someone other than the author. Flag self-approved or unapproved changes.
3. **Check testing.** A passing test result must be linked to the change.
4. **Check the rollback.** A rollback plan must be recorded for each production change.
5. **Check the timing.** Emergency changes need a record made afterwards. Flag changes with no record at all.
6. **Report.** A list of changes with the status of each control, and the exceptions to follow up.

## Post-production

- **Self-approved changes** defeat the control. Enforce a second reviewer.
- **Emergency changes without records** are found in audits. Require the record within a set time.
- **Coding-time prevention:** make the pipeline refuse a merge without an approval.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
