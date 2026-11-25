---
name: rlm-public-api-review
description: "Public API review: what a library or service exposes, and whether it can change safely. Use when a public type, function or endpoint is added or changed."
---

<!-- managed-by: -->

# Public API review

Public API review: what a library or service exposes, and whether it can change safely. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the public surface.** Exported types, functions and endpoints.
2. **Check minimality.** Flag exposed members that callers do not need.
3. **Check stability.** Flag changes to existing signatures, names or behaviour.
4. **Check documentation.** Each public item needs a stated contract.
5. **Report.** Each item with file and line, the change, and whether it breaks callers.

## Post-production

- **Exposed internals** become a promise you must keep. Expose only what callers need.
- **Silent behaviour changes** break callers without a compile error. Document and version them.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
