---
name: rlm-documentation-accuracy-review
description: "Documentation accuracy review: docs that match the code they describe. Use when docs or examples are changed or the code they describe changed."
---

<!-- managed-by: -->

# Documentation accuracy review

Documentation accuracy review: docs that match the code they describe. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the docs.** Find the README, guides and examples that mention the changed code.
2. **Run examples.** Check each example still compiles or runs as written.
3. **Compare.** Flag names, options and steps that no longer match the code.
4. **Check links.** Flag references to moved or deleted files.
5. **Report.** Each mismatch with file and line, and the correction.

## Post-production

- **Wrong examples** get copied and break at once. Run them in the build.
- **Stale setup steps** stop new users. Test them on a clean machine.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
