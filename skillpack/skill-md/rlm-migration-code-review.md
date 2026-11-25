---
name: rlm-migration-code-review
description: "Code migration review: a library or framework move that keeps behaviour and can be rolled back. Use when a dependency, framework or API is being replaced."
---

<!-- managed-by: -->

# Code migration review

Code migration review: a library or framework move that keeps behaviour and can be rolled back. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Map the old to new.** List each old API call and its replacement.
2. **Check behaviour.** Flag calls whose defaults or errors changed.
3. **Check coverage.** Flag migrated code with no test.
4. **Check rollback.** The change must work with the old path still available.
5. **Report.** Each call with its status, the behaviour change and the risk.

## Post-production

- **Silent default changes** alter results without an error. Test the defaults.
- **No rollback path** turns a bad migration into an outage. Keep the old path until it is proven.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
