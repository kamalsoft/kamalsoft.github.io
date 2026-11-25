---
name: rlm-authz-review
description: "Review authorization: who can do what, checked on every route, object and action, including access to other users' data. Use when access control or multi-user data is changed."
---

<!-- managed-by: -->

# Authorization review

Review authorization: who can do what, checked on every route, object and action, including access to other users' data. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the actions.** List each route, command and background job that reads or changes data.
2. **Check each action has a check.** Every action needs an authorization check. Flag actions that have none.
3. **Check object ownership.** Flag lookups by ID that do not confirm the caller owns or may see the object (insecure direct object references).
4. **Check roles and defaults.** Flag default-allow rules, roles that grant more than they should, and admin checks that are bypassed.
5. **Check the checks.** Authorization decided in the client only, or trusted from request fields, is a finding.
6. **Report.** List each finding as route and file, with severity, the missing check and the fix. Mark what you did not test.

## Post-production

- **Broken object-level access** is the most common data leak. Keep the ownership check on every lookup.
- **Default-allow rules** expose new routes without anyone deciding to. Default to deny.
- **Coding-time prevention:** make the authorization check part of the data access layer, not each handler.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
