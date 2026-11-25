---
name: rlm-dotnet-logging-review
description: "NET logging review: structured messages, levels and sensitive data in log scopes. Use when a .NET service writes logs."
---

<!-- managed-by: -->

# NET logging review

NET logging review: structured messages, levels and sensitive data in log scopes. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the log calls.** Find the logger and each message template.
2. **Check templates.** Flag string interpolation instead of structured placeholders.
3. **Check levels.** Flag errors logged as information and noise logged as errors.
4. **Check sensitive data.** Flag personal data or tokens in messages or scopes.
5. **Report.** Each call with file and line, the problem and the fix.

## Post-production

- **Interpolated messages** cannot be queried by field. Use message templates.
- **Sensitive data in scopes** is copied to every line. Keep it out.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
