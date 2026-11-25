---
name: rlm-gate-sast
description: "Static analysis gate: what the static security scan must find clean before a merge. Use when a pipeline runs static analysis on code."
---

<!-- managed-by: -->

# Static analysis gate

Static analysis gate: what the static security scan must find clean before a merge. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Confirm the scan runs on every pull request, not only nightly.**
2. **Set the blocking rule.** New high and critical findings block the merge.
3. **Set the baseline.** Existing findings are recorded, not hidden.
4. **Check the bypass path.** Flag suppressed findings with no owner or reason.
5. **Report.** The rule, the threshold, the owner and any gap.

## Post-production

- **Nightly-only scans** let issues merge for a day. Run them on each pull request.
- **Silent suppressions** hide real findings. Require a reason and an owner.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
