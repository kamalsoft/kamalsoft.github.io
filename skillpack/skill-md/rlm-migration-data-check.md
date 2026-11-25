---
name: rlm-migration-data-check
description: "Migration data check: row counts, totals and samples compared before and after a data migration. Use when a data migration moves or converts records."
---

<!-- managed-by: -->

# Migration data check

Migration data check: row counts, totals and samples compared before and after a data migration. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Record the baseline.** Row counts, key totals and a sample before the migration.
2. **Compare after.** Check the same counts and totals in the new place.
3. **Check the conversions.** Flag values that change type or meaning, such as dates and codes.
4. **Check the rejects.** Every rejected row needs a recorded reason.
5. **Report.** The comparison, the differences and the decision to proceed or roll back.

## Post-production

- **Matching totals** hide swapped values. Sample rows as well as counting them.
- **Unexplained rejects** are data lost quietly. Keep and review each one.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
