---
name: rlm-path-traversal-review
description: "Path traversal review: file paths built from input and checked after normalisation. Use when code opens, reads, writes or deletes files using a path from outside."
---

<!-- managed-by: -->

# Path traversal review

Path traversal review: file paths built from input and checked after normalisation. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find the paths.** List each file operation and where its path comes from.
2. **Check joins.** Flag paths built by string concatenation with user input.
3. **Check normalisation.** The resolved path must stay inside the allowed folder.
4. **Check symbolic links.** Flag operations that follow links out of the folder.
5. **Report.** Each operation with file and line, severity and the fix.

## Post-production

- **Traversal sequences** read files such as configuration and keys. Resolve and check the path.
- **Link following** escapes the folder after the check. Resolve links before checking.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
