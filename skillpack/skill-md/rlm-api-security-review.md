---
name: rlm-api-security-review
description: "API security review: authorisation per operation, rate limits, input limits and error exposure. Use when code exposes endpoints to other systems or the public."
---

<!-- managed-by: -->

# API security review

API security review: authorisation per operation, rate limits, input limits and error exposure. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List operations.** Each endpoint, method and who may call it.
2. **Check authorisation.** Flag operations with no check or a weaker check than their peers.
3. **Check rate and size limits.** Flag endpoints with no limit on requests or payloads.
4. **Check errors.** Flag responses that expose stack traces or internal ids.
5. **Report.** Each operation with file and line, severity and the fix.

## Post-production

- **Unprotected operations** are found by scanning, not by reading. Check each one.
- **Missing limits** let one client overload the service. Set them per endpoint.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
