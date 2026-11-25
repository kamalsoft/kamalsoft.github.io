---
name: rlm-shell-script-review
description: "Shell script review: quoting, error handling, temporary files and command injection. Use when asked to review a shell script or pipeline step."
---

<!-- managed-by: -->

# Shell script review

Shell script review: quoting, error handling, temporary files and command injection. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the script.** Its shell, its arguments and the commands it calls.
2. **Check quoting.** Flag unquoted variables that can split or expand.
3. **Check errors.** Flag scripts without strict mode or error checks.
4. **Check temporary files.** Flag predictable temporary names.
5. **Report.** Each finding with line, severity and the fix.

## Post-production

- **Unquoted variables** break on spaces and inject commands. Quote them.
- **Predictable temporary files** allow races. Use mktemp.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
