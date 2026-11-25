---
name: rlm-input-validation-review
description: "Input validation review: untrusted input checked for type, length, range and format at the boundary. Use when code reads request, file, queue or user input."
---

<!-- managed-by: -->

# Input validation review

Input validation review: untrusted input checked for type, length, range and format at the boundary. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the entry points.** Routes, handlers, queue consumers and file readers.
2. **Check each input.** Flag inputs used without a type, length or range check.
3. **Check placement.** Validation should sit at the boundary, not deep in the code.
4. **Check allow-lists.** Flag deny-lists used where allow-lists are possible.
5. **Report.** Each entry point with its gap, file and line, and the fix.

## Post-production

- **Unvalidated input** is the root of most injection bugs. Validate at the boundary.
- **Deny-lists** miss new attack forms. Prefer allow-lists.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
