---
name: rlm-logging-in-code-review
description: "Logging in code review: useful log lines, the right level and no personal data. Use when logging statements are added or changed."
---

<!-- managed-by: -->

# Logging in code review

Logging in code review: useful log lines, the right level and no personal data. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List log calls.** Collect each log line in the change.
2. **Check level.** Flag errors logged as info and noise logged as error.
3. **Check content.** Flag personal data, tokens or full request bodies.
4. **Check context.** Each error line needs the identifiers to find the cause.
5. **Report.** Each line with file, the problem and the fix.

## Post-production

- **Logged secrets** end up in log storage that many people can read. Mask them.
- **Missing context** makes incidents take longer. Include the identifiers.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
