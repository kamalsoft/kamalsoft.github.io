---
name: rlm-injection-review
description: "Injection review: SQL, command, template and LDAP inputs kept apart from code. Use when code builds queries, commands or templates from input."
---

<!-- managed-by: -->

# Injection review

Injection review: SQL, command, template and LDAP inputs kept apart from code. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find the sinks.** List each query, command, template and directory query.
2. **Check construction.** Flag any string built with input.
3. **Check parameters.** Each input must reach the sink as a parameter or escaped value.
4. **Check the framework.** Flag raw query helpers used where a safe API exists.
5. **Report.** Each sink with file and line, severity and the fix.

## Post-production

- **String-built queries** are the classic injection. Use parameters everywhere.
- **Raw helpers** bypass the framework's protection. Replace them with the safe API.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
