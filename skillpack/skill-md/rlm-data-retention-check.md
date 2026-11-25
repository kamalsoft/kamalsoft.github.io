---
name: rlm-data-retention-check
description: "Data retention check: each store's keep period, its deletion job and whether backups follow the same rule. Use when a store holds data that has a retention rule."
---

<!-- managed-by: -->

# Data retention check

Data retention check: each store's keep period, its deletion job and whether backups follow the same rule. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the stores and the retention rule for each.**
2. **Check the deletion job.** Confirm it runs, and what it deletes.
3. **Check the backups.** Confirm deleted data is removed from backups on a stated cycle.
4. **Check the evidence.** Each run should leave a record.
5. **Report.** Each store with its rule, the job, the backup position and the gap.

## Post-production

- **Deletion jobs that never run** keep data beyond its rule. Alert when a job fails.
- **Backups that keep deleted data** defeat the rule. Document their cycle.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
