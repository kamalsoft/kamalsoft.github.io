---
name: rlm-perl-review
description: "Perl review: taint checks, regular expressions, command execution and error handling. Use when asked to review a Perl script or module."
---

<!-- managed-by: -->

# Perl review

Perl review: taint checks, regular expressions, command execution and error handling. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the script or module.** The version and the modules used.
2. **Check taint.** Flag input used in system calls without taint checks.
3. **Check commands.** Flag shell execution built from strings.
4. **Check patterns.** Flag regular expressions with catastrophic backtracking on input.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Shell execution from input** is command injection. Use list-form calls.
- **Backtracking regexes** freeze the process on crafted input. Bound them.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
