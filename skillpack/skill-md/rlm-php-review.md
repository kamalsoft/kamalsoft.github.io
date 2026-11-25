---
name: rlm-php-review
description: "PHP review: input handling, SQL, file inclusion, session settings and type declarations. Use when asked to review a PHP project or module."
---

<!-- managed-by: -->

# PHP review

PHP review: input handling, SQL, file inclusion, session settings and type declarations. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** Composer file, PHP version and configuration.
2. **Check input.** Flag superglobals used without validation.
3. **Check SQL.** Flag queries built with concatenation or interpolation.
4. **Check file inclusion.** Flag include or require with input-derived paths.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Interpolated SQL** is the most common PHP injection. Use prepared statements.
- **Dynamic includes** run attacker code. Use fixed paths only.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
