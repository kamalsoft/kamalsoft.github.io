---
name: rlm-error-handling-review
description: "Review error handling for swallowed errors, retries, timeouts, cleanup and useful messages. Use when code handles failures from I/O, networks or external services."
---

<!-- managed-by: -->

# Error handling review

Review error handling for swallowed errors, retries, timeouts, cleanup and useful messages. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the call paths.** Open the code that calls external services, files, databases and queues, and list each call that can fail.
2. **Check swallowed errors.** Flag empty catch blocks, errors logged and then ignored, and errors that turn into a success result.
3. **Check retries.** Retries need a limit, a backoff and a check that the operation is safe to repeat.
4. **Check timeouts.** Every external call needs a timeout. Flag calls that can wait forever.
5. **Check cleanup.** Resources must be released on every failure path, normally by a language construct that does this.
6. **Report.** List each finding as file and line, with severity, the problem and the fix. Mark what you did not run.

## Post-production

- **Swallowed errors** appear as silent data loss. Keep the swallowed-error check on.
- **Missing timeouts** show up as hangs under load. Set a default timeout on the client.
- **Coding-time prevention:** decide how each call fails when you write it, not after the incident.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
