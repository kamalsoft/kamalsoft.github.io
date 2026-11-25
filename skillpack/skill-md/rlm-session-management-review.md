---
name: rlm-session-management-review
description: "Session management review: session IDs, expiry, rotation on sign-in and revocation. Use when code creates, stores or ends sessions."
---

<!-- managed-by: -->

# Session management review

Session management review: session IDs, expiry, rotation on sign-in and revocation. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Check creation.** Sessions need random IDs of enough length.
2. **Check rotation.** The ID must change after sign-in.
3. **Check expiry.** Flag sessions with no idle or absolute timeout.
4. **Check revocation.** Sign-out and password change must end the session.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Fixation** happens when the ID is not rotated at sign-in. Rotate on every privilege change.
- **Sessions that never expire** stay usable on a lost device. Set both timeouts.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
