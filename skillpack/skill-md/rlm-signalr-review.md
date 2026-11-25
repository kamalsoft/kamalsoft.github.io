---
name: rlm-signalr-review
description: "SignalR review: hub authorisation, group membership and message validation. Use when a real-time hub is added or changed."
---

<!-- managed-by: -->

# SignalR review

SignalR review: hub authorisation, group membership and message validation. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the hubs and the methods clients can call.**
2. **Check authorisation.** Each hub method checks the caller's rights.
3. **Check groups.** Membership must be checked before a client joins a group.
4. **Check messages.** Incoming data must be validated like any request.
5. **Report.** Each hub method with file and line, severity and the fix.

## Post-production

- **Groups joined without checks** send private messages to the wrong people. Check on join.
- **Hub methods without authorisation** are callable by anyone. Require it.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
