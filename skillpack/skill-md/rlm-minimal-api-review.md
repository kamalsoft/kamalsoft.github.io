---
name: rlm-minimal-api-review
description: "Minimal API review: route authorisation, validation, endpoint filters and error responses. Use when a minimal API endpoint is added or changed."
---

<!-- managed-by: -->

# Minimal API review

Minimal API review: route authorisation, validation, endpoint filters and error responses. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the endpoints.** Each route, method and its authorisation.
2. **Check authorisation.** Flag endpoints with no policy or an allow-anonymous attribute.
3. **Check validation.** Each input should be validated or bound to a type that is.
4. **Check filters and errors.** Flag endpoints that return exception details.
5. **Report.** Each endpoint with file and line, severity and the fix.

## Post-production

- **Endpoints without policies** are found by scanners first. Require one per route.
- **Exception details** reveal the internals to attackers. Return problem details.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
