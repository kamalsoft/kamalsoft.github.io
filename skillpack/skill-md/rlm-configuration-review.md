---
name: rlm-configuration-review
description: "Configuration review: settings with safe defaults, validation and no secrets. Use when configuration keys or defaults are added or changed."
---

<!-- managed-by: -->

# Configuration review

Configuration review: settings with safe defaults, validation and no secrets. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the settings.** Find each key, its default and where it is read.
2. **Check defaults.** Flag defaults that are unsafe in production.
3. **Check validation.** Flag settings used without a range or format check.
4. **Check secrets.** Flag keys with values that look like credentials.
5. **Report.** Each setting with file and line, the problem and the fix.

## Post-production

- **Unsafe defaults** run in production when someone forgets to set a value. Default to the safe choice.
- **Unvalidated settings** fail far from their cause. Validate at startup.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
