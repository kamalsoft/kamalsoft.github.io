---
name: rlm-mfa-review
description: "Multi-factor authentication review: where second factors are required, enrolled and recovered. Use when code enables, enforces or recovers second factors."
---

<!-- managed-by: -->

# Multi-factor authentication review

Multi-factor authentication review: where second factors are required, enrolled and recovered. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the enforcement points.** Find where a second factor is required.
2. **Check bypass.** Flag paths that sign in without the second factor.
3. **Check enrolment.** Flag factors that can be added without re-verification.
4. **Check recovery.** Flag recovery codes that are reusable or stored in plain text.
5. **Report.** Each path with file and line, severity and the fix.

## Post-production

- **Bypass paths** make the second factor decorative. Enforce it on every sign-in path.
- **Weak recovery** undoes the second factor. Make recovery codes single-use and hashed.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
