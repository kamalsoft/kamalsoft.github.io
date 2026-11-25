---
name: rlm-code-quality-review
description: "Review code while it is being written for simplicity, understandability, readability, reviewability and fixability. Use when a change is being written, or before a review starts."
---

<!-- managed-by: -->

# Code quality review

Review code while it is being written for simplicity, understandability, readability, reviewability and fixability. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the change.** Open the changed files and the tests that cover them. Note the size of the change.
2. **Check simplicity.** Flag functions with many branches, deep nesting, and logic that could be a table or a single expression. Ask whether each abstraction is needed today.
3. **Check understandability.** Names should say what a value or function is for. Flag names such as `data`, `tmp` or `flag`, and comments that repeat the code instead of saying why.
4. **Check readability.** Keep each function to one job. Flag long lines, mixed levels of detail in one function, and magic numbers without a name.
5. **Check reviewability.** A change should do one thing. Flag unrelated edits in the same change, and files that are too large to review in one sitting.
6. **Check fixability.** Flag code without tests, global state that makes a fix risky, and error messages that do not say what failed.
7. **Report.** For each finding give `file:line`, the rule it breaks (simple, understandable, readable, reviewable or fixable), and the smallest change that fixes it. Mark what you did not run.

## Post-production

- **Hard-to-fix code** becomes a production incident when a hotfix is needed under time pressure. Keep the fixability check on.
- **Large changes** are merged with less review, and bugs follow. Split a change when it does more than one thing.
- **Coding-time prevention:** run the check on each change before it is opened for review, and keep functions short enough to read in one screen.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
