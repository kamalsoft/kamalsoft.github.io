---
name: rlm-middleware-review
description: "ASP.NET middleware review: ordering, short-circuiting, exception handling and headers. Use when the request pipeline is changed."
---

<!-- managed-by: -->

# ASP.NET middleware review

ASP.NET middleware review: ordering, short-circuiting, exception handling and headers. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the middleware in the order it runs.**
2. **Check ordering.** Authentication must run before authorisation, and both before the endpoints.
3. **Check exception handling.** It must run early enough to catch the rest.
4. **Check headers.** Security headers are set for every response.
5. **Report.** The pipeline order, the gap found and the fix.

## Post-production

- **Wrong order** lets requests skip authentication. Check the pipeline on each change.
- **Missing headers** on error responses are common. Set them early.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
