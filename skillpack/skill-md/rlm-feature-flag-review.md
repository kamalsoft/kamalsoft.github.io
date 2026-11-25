---
name: rlm-feature-flag-review
description: "Feature flag review: flags with an owner, a default and a removal date. Use when a feature is behind a flag or a flag is added."
---

<!-- managed-by: -->

# Feature flag review

Feature flag review: flags with an owner, a default and a removal date. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the flags.** Find each flag check and its default value.
2. **Check ownership.** Each flag needs a named owner.
3. **Check removal.** Flag flags older than their planned removal date.
4. **Check both paths.** Test the code with the flag on and off.
5. **Report.** Each flag with its owner, default, age and the risk of each path.

## Post-production

- **Old flags** become dead branches nobody tests. Set a removal date.
- **Untested off-paths** fail when the flag is turned off in an incident. Test both.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
