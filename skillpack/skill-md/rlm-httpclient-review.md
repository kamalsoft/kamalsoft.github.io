---
name: rlm-httpclient-review
description: "HttpClient review: client lifetime, timeouts, retry policy and handling of responses. Use when code calls external services with HttpClient."
---

<!-- managed-by: -->

# HttpClient review

HttpClient review: client lifetime, timeouts, retry policy and handling of responses. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the clients and how each is created.**
2. **Check lifetime.** Flag a new client per request, which exhausts sockets.
3. **Check timeouts.** Every client needs a timeout.
4. **Check retries.** Retries need a limit and back-off, and only for safe calls.
5. **Report.** Each client with file and line, the problem and the fix.

## Post-production

- **A new client per request** exhausts sockets under load. Use the factory.
- **Retrying unsafe calls** repeats side effects. Retry only idempotent requests.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
