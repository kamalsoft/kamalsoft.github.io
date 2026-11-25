---
name: rlm-cors-review
description: "CORS review: allowed origins, credentials and wildcard settings. Use when a server sets cross-origin rules."
---

<!-- managed-by: -->

# CORS review

CORS review: allowed origins, credentials and wildcard settings. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the rules.** Find each CORS setting and the origins it allows.
2. **Check wildcards.** Flag any origin set to a wildcard when credentials are allowed.
3. **Check origins.** Each allowed origin must be listed on purpose.
4. **Check methods and headers.** Flag allow-all settings.
5. **Report.** Each rule with file and line, severity and the fix.

## Post-production

- **Wildcard origins with credentials** let other sites use a user's session. Name each origin.
- **Reflected origins** do the same as wildcards. Check the list, do not echo the request.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
