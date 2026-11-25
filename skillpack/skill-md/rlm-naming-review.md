---
name: rlm-naming-review
description: "Naming review: names that say what a value or function does, and match the domain. Use when code names are added or renamed."
---

<!-- managed-by: -->

# Naming review

Naming review: names that say what a value or function does, and match the domain. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List names.** Collect the new variables, functions and types in the change.
2. **Flag vague names.** Data, tmp, info, handler, manager, flag.
3. **Flag misleading names.** A name that says one thing and does another.
4. **Check consistency.** The same concept should keep one name across the change.
5. **Report.** Each name with file and line, the problem and a better name.

## Post-production

- **Vague names** slow every future reader. Name for the purpose.
- **Misleading names** cause wrong fixes. Rename when behaviour changes.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
