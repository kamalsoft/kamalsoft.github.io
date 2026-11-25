---
name: rlm-form-validation-review
description: "Form validation review: client and server checks, messages and accessibility of errors. Use when a form is added or changed."
---

<!-- managed-by: -->

# Form validation review

Form validation review: client and server checks, messages and accessibility of errors. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the fields.** Each input with its type and rules.
2. **Check the server.** Every rule must also run on the server.
3. **Check the messages.** Errors must say what to fix.
4. **Check accessibility.** Errors must be linked to their fields and announced.
5. **Report.** Each field with its gap and the fix.

## Post-production

- **Client-only checks** are bypassed by any request. Repeat them on the server.
- **Vague errors** lead to abandoned forms. Name the field and the fix.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
