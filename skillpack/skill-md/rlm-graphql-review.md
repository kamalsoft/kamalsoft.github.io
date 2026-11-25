---
name: rlm-graphql-review
description: "Review a GraphQL schema and resolvers for query depth and cost limits, authorization per field, batching and error exposure. Use when a GraphQL API is added or changed."
---

<!-- managed-by: -->

# GraphQL review

Review a GraphQL schema and resolvers for query depth and cost limits, authorization per field, batching and error exposure. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the schema.** Open the schema, resolvers and any query limits. List the types that expose data.
2. **Check depth and cost.** Flag schemas with no depth or cost limit. A single query can otherwise fetch everything.
3. **Check authorization per field.** Authorization must hold at each field that returns private data, not only at the top query.
4. **Check batching.** Resolvers that call the database once per item cause the N+1 problem. Flag them.
5. **Check errors.** Flag errors that return stack traces or internal fields to clients.
6. **Report.** List each finding with its type and field, severity and the fix.

## Post-production

- **Unbounded queries** let one client slow the whole service. Set depth and cost limits.
- **Field-level leaks** expose data that the top-level check hides. Check each field.
- **Coding-time prevention:** add limits and per-field checks to the schema from the start.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
