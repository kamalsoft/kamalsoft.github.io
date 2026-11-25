---
name: rlm-authentication-review
description: "Authentication review: sign-in, credential checks, lockout and account recovery. Use when code handles sign-in, credentials or account recovery."
---

<!-- managed-by: -->

# Authentication review

Authentication review: sign-in, credential checks, lockout and account recovery. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the flows.** Sign-in, sign-up, password reset and sign-out.
2. **Check credential checks.** Flag comparisons that are not constant-time or that reveal which field failed.
3. **Check lockout and rate limits.** Flag unlimited attempts.
4. **Check recovery.** Flag reset links that do not expire or are guessable.
5. **Report.** Each flow with file and line, severity and the fix.

## Post-production

- **Account takeover** starts with weak recovery. Expire reset links and rate-limit them.
- **User enumeration** through error messages helps attackers. Return one generic message.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
