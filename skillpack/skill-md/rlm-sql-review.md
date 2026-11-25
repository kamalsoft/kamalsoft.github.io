---
name: rlm-sql-review
description: "SQL review: injection in dynamic SQL, missing indexes, locking and destructive statements. Use when asked to review SQL scripts, queries or migrations."
---

<!-- managed-by: -->

# SQL review

SQL review: injection in dynamic SQL, missing indexes, locking and destructive statements. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the statements.** Queries, updates, deletes and migrations.
2. **Check dynamic SQL.** Flag statements built with string concatenation.
3. **Check indexes.** Flag filters and joins on unindexed columns.
4. **Check locks.** Flag long transactions and updates without batching.
5. **Check destructive statements.** Flag deletes or drops with no where clause or backup.

## Post-production

- **Dynamic SQL** is the usual injection route. Use parameters.
- **Unbatched updates** lock tables for minutes. Batch them.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
