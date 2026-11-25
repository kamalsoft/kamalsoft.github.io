---
name: rlm-dotnet-dependency-injection-review
description: "NET dependency injection review: lifetimes, captive dependencies and service locator use. Use when services are registered with the built-in container."
---

<!-- managed-by: -->

# NET dependency injection review

NET dependency injection review: lifetimes, captive dependencies and service locator use. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the registrations and their lifetimes.**
2. **Check captive dependencies.** A singleton must not hold a scoped or transient service.
3. **Check the locator.** Flag services resolved from the provider inside business code.
4. **Check disposal.** Flag transient disposables registered as singletons.
5. **Report.** Each registration with file and line, the problem and the fix.

## Post-production

- **Captive dependencies** keep a request's data alive for the whole process. Check lifetimes.
- **Service locator calls** hide what a class needs. Inject it instead.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
