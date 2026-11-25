---
name: rlm-csrf-review
description: "CSRF review: state-changing requests protected by tokens, same-site cookies or origin checks. Use when code accepts requests that change data from a browser session."
---

<!-- managed-by: -->

# CSRF review

CSRF review: state-changing requests protected by tokens, same-site cookies or origin checks. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the state changes.** Find every POST, PUT, PATCH and DELETE that uses cookies.
2. **Check tokens.** Each form and API call needs an anti-forgery token or equivalent.
3. **Check cookies.** Session cookies need SameSite and Secure attributes.
4. **Check origin.** Flag endpoints that accept requests from any origin.
5. **Report.** Each endpoint with its protection, the gap and the fix.

## Post-production

- **Missing tokens** let a malicious site act for a signed-in user. Require a token on every write.
- **Lax SameSite** settings expand the attack surface. Use Strict or Lax deliberately.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
