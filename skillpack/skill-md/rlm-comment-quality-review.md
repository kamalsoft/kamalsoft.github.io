---
name: rlm-comment-quality-review
description: "Comment quality review: comments that explain why, and comments that have gone stale. Use when comments are added or code they describe has changed."
---

<!-- managed-by: -->

# Comment quality review

Comment quality review: comments that explain why, and comments that have gone stale. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List comments.** Collect the comments in the changed code.
2. **Flag restating comments that repeat what the code does.**
3. **Flag stale comments that no longer match the code beside them.**
4. **Flag missing why.** A non-obvious choice with no explanation.
5. **Report.** Each comment with file and line, the problem and the fix.

## Post-production

- **Stale comments** mislead the next person who reads the code. Delete or update them with the code.
- **Missing reasons** lead to undoing a deliberate choice. Write the why.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
