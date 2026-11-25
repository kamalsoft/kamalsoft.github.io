---
name: rlm-jwt-review
description: "JWT review: algorithm choice, signature checks, expiry and claims that are trusted too much. Use when code creates or validates JSON web tokens."
---

<!-- managed-by: -->

# JWT review

JWT review: algorithm choice, signature checks, expiry and claims that are trusted too much. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Check the algorithm.** Flag 'none', symmetric keys shared with clients, or an algorithm chosen from the token header.
2. **Check signatures.** Every token must be verified before its claims are used.
3. **Check expiry and audience.** Tokens need short lifetimes and an audience check.
4. **Check claims.** Flag authorisation decided from claims the client can set.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Accepting the 'none' algorithm** lets anyone forge tokens. Fix the algorithm on the server.
- **Long-lived tokens** cannot be revoked quickly. Keep lifetimes short and add refresh.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
