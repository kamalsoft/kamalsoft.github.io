---
name: rlm-duplication-review
description: "Duplication review: copied blocks that should share one implementation. Use when the same logic appears in more than one place."
---

<!-- managed-by: -->

# Duplication review

Duplication review: copied blocks that should share one implementation. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find copies.** Compare the changed blocks with similar code in the repository.
2. **Measure.** Note how many copies and how far they have drifted apart.
3. **Check drift.** Flag copies where a fix was made in one place only.
4. **Suggest a shared function.** Name where the one implementation should live.
5. **Report.** Each group of copies with its locations, the drift and the fix.

## Post-production

- **Drifted copies** keep one copy with the bug. Share one implementation.
- **Fixes in one copy only** are a common regression. Check all copies on each fix.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
