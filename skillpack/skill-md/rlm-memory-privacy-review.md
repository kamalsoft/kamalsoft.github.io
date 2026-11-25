---
name: rlm-memory-privacy-review
description: "Agent memory privacy review: personal and secret data kept out of what the agent remembers. Use when an agent stores anything a user or a tool provides."
---

<!-- managed-by: -->

# Agent memory privacy review

Agent memory privacy review: personal and secret data kept out of what the agent remembers. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List what can enter memory.** User messages, tool results and files.
2. **Flag personal data.** Names, contact details, identifiers and health or financial details.
3. **Flag secrets.** Keys, tokens and passwords that a tool may return.
4. **Check the filter.** Confirm something removes these before they are stored.
5. **Report.** Each entry path, what it can store, and the filter that is missing.

## Post-production

- **Secrets in memory** are read back to whoever uses the agent next. Filter them before storage.
- **Personal data in memory** must be deletable on request. Check the deletion path.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
