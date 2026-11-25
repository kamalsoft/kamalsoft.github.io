---
name: rlm-api-design-review
description: "Review an API design for naming, consistency, versioning, error shape and backward compatibility. Use when a new or changed API is being designed or reviewed."
---

<!-- managed-by: -->

# API design review

Review an API design for naming, consistency, versioning, error shape and backward compatibility. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the contract.** Open the OpenAPI or route definitions, and note every public endpoint, its method and its request and response shapes.
2. **Check naming.** Flag inconsistent names, verbs in resource paths, and fields that mean different things in different endpoints.
3. **Check versioning.** Flag breaking changes to existing fields or status codes, and changes with no version or deprecation path.
4. **Check errors.** Errors should share one shape with a stable code and a message that does not leak internals.
5. **Check pagination and limits.** List endpoints need paging and a maximum size. Flag unbounded result sets.
6. **Report.** List each finding as the endpoint and field, with severity, the problem and the fix. Mark what you did not check.

## Post-production

- **Breaking changes** reach clients after release and cost a version bump. Keep the compatibility check on.
- **Inconsistent errors** make client bugs hard to find. Use one error shape everywhere.
- **Coding-time prevention:** define the contract first and review it before the code is written.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
