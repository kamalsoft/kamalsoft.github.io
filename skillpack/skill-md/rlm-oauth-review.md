---
name: rlm-oauth-review
description: "OAuth review: redirect URI checks, PKCE, state parameters and token storage. Use when code implements an OAuth or OpenID Connect sign-in."
---

<!-- managed-by: -->

# OAuth review

OAuth review: redirect URI checks, PKCE, state parameters and token storage. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Check the flow.** Use the authorisation code flow with PKCE for public clients.
2. **Check redirects.** Redirect URIs must match exactly, with no open redirects.
3. **Check state.** The state parameter must be random and checked on return.
4. **Check tokens.** Flag tokens stored in local storage or logged.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Open redirects** let attackers steal codes. Match redirect URIs exactly.
- **Missing state checks** allow login CSRF. Verify state every time.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
