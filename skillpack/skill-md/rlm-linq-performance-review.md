---
name: rlm-linq-performance-review
description: "LINQ performance review: queries evaluated in memory, repeated enumeration and avoidable allocations. Use when a LINQ query runs over large or frequent data."
---

<!-- managed-by: -->

# LINQ performance review

LINQ performance review: queries evaluated in memory, repeated enumeration and avoidable allocations. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the queries on hot paths or large data.**
2. **Check where evaluation happens.** Flag work done in memory that the database could do.
3. **Check repeated enumeration.** Flag a query enumerated several times.
4. **Check allocations.** Flag repeated ToList calls on the same data.
5. **Report.** Each query with its cost, file and line, and the fix.

## Post-production

- **In-memory filtering** loads whole tables before filtering. Push the filter to the database.
- **Repeated enumeration** runs the query again each time. Materialise once.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
