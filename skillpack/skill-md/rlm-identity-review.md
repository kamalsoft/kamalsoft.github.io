---
name: rlm-identity-review
description: "ASP.NET Identity review: password policy, lockout, token lifetimes and account recovery. Use when the application uses ASP.NET Identity for sign-in."
---

<!-- managed-by: -->

# ASP.NET Identity review

ASP.NET Identity review: password policy, lockout, token lifetimes and account recovery. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Check the password policy.** Length and checks match current guidance.
2. **Check lockout.** Failed attempts lock the account for a set period.
3. **Check tokens.** Confirmation and reset tokens expire quickly and are single-use.
4. **Check recovery.** The recovery flow does not reveal whether an account exists.
5. **Report.** Each setting with file and line, the problem and the fix.

## Post-production

- **Long-lived reset tokens** let attackers take over accounts later. Shorten them.
- **Account enumeration** through recovery messages helps attackers. Return one message.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
