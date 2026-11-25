---
name: rlm-entity-framework-review
description: "Review Entity Framework Core code for query shape, change tracking, migrations, transactions and raw SQL. Use when data access code or migrations change."
---

<!-- managed-by: -->

# Entity Framework review

Review Entity Framework Core code for query shape, change tracking, migrations, transactions and raw SQL. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the data access.** Open the DbContext, the entity configuration and the migration history.
2. **Check query shape.** Flag queries that load whole tables, lazy loading inside loops, and client-side evaluation that should run in the database.
3. **Check tracking.** Read-only queries should use no-tracking. Flag tracked entities returned to clients.
4. **Check migrations.** Flag migrations that drop columns, change types or lock large tables without a plan.
5. **Check transactions and raw SQL.** Multi-step changes need a transaction. Flag raw SQL built from strings.
6. **Report.** List each finding with its file and line, severity and the fix. Mark which findings need the query plan to confirm.

## Post-production

- **Slow queries** appear under real data volume. Check the query shape before release.
- **Destructive migrations** cause outages on deploy. Plan them in two steps.
- **Coding-time prevention:** use parameters everywhere and review each migration as its own change.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
