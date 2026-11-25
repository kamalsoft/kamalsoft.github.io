---
name: rlm-edge-case-review
description: "Edge case review: empty, maximum, duplicate, invalid and concurrent inputs. Use when a function or endpoint handles input from outside."
---

<!-- managed-by: -->

# Edge case review

Edge case review: empty, maximum, duplicate, invalid and concurrent inputs. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List inputs.** Name each parameter and where it comes from.
2. **Check empty and null.** Note how each handles nothing.
3. **Check limits.** Note behaviour at zero, one and the maximum.
4. **Check invalid and duplicate.** Note behaviour for bad or repeated input.
5. **Report.** Each input with the unhandled case, file and line, and the fix.

## Post-production

- **Unhandled empty input** causes the first production crash for a new customer. Test it.
- **Duplicate requests** repeat side effects. Check idempotency for each write.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
