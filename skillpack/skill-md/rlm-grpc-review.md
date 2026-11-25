---
name: rlm-grpc-review
description: "gRPC review: service authorisation, deadlines, message size limits and error status. Use when a gRPC service or client is added or changed."
---

<!-- managed-by: -->

# gRPC review

gRPC review: service authorisation, deadlines, message size limits and error status. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the services and methods, with their callers.**
2. **Check authorisation.** Each method needs a policy check.
3. **Check deadlines.** Clients must set a deadline on every call.
4. **Check limits.** Flag missing message size limits.
5. **Report.** Each method with file and line, severity and the fix.

## Post-production

- **Calls without deadlines** wait forever during an outage. Set them everywhere.
- **Unlimited messages** exhaust memory. Set the maximum size.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
