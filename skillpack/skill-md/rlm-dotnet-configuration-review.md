---
name: rlm-dotnet-configuration-review
description: "NET configuration review: options binding, validation at startup and secrets outside appsettings. Use when a .NET service reads settings."
---

<!-- managed-by: -->

# NET configuration review

NET configuration review: options binding, validation at startup and secrets outside appsettings. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the options classes and where they are bound.**
2. **Check validation.** Each options class should be validated at startup.
3. **Check secrets.** Flag secrets in appsettings or environment files committed to the repository.
4. **Check environments.** Flag development settings reachable in production.
5. **Report.** Each setting with file and line, the problem and the fix.

## Post-production

- **Startup validation** turns a bad setting into an early failure. Add it.
- **Secrets in appsettings** are in the repository history. Move them to a secret store.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
