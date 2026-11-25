---
name: rlm-false-positive-review
description: "False positive review: findings checked and closed with evidence, not with a shrug. Use when a finding is marked as not applicable."
---

<!-- managed-by: -->

# False positive review

False positive review: findings checked and closed with evidence, not with a shrug. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Take each finding marked not applicable.**
2. **Check the evidence.** The code path, configuration or version that makes it inapplicable.
3. **Check the reasoning.** The argument must hold for every path, not only the one tested.
4. **Check the record.** Each closure has an approver and a date.
5. **Report.** The findings closed, their evidence and any that should be reopened.

## Post-production

- **Unevidenced closures** return as real findings. Record the evidence.
- **Closures for one path** miss the others. Check all paths before closing.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
