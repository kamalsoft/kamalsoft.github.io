---
name: rlm-service-worker-review
description: "Service worker review: cached responses, update flow and scope. Use when a service worker is added or changed."
---

<!-- managed-by: -->

# Service worker review

Service worker review: cached responses, update flow and scope. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the registration.** Check the scope and the script location.
2. **Check caching.** Flag caching of private or authenticated responses.
3. **Check updates.** Confirm a new version takes over without leaving users on stale code.
4. **Check failure.** The offline fallback must not hide errors.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Cached private data** is shown to the next user of a shared device. Exclude it.
- **Stale versions** keep old bugs alive. Plan the update flow.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
