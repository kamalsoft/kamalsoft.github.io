---
name: rlm-scanner-tuning
description: "Scanner tuning review: rules that are noisy, rules that are missing and exclusions that have expired. Use when a scanner produces too many false positives or misses a known issue."
---

<!-- managed-by: -->

# Scanner tuning review

Scanner tuning review: rules that are noisy, rules that are missing and exclusions that have expired. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the rules enabled and disabled, with the reason for each.**
2. **Check noise.** Rules that flag the same accepted pattern repeatedly.
3. **Check gaps.** Known issues the scanner should have flagged.
4. **Check exclusions.** Each exclusion needs a reason and an expiry.
5. **Report.** The rules to enable, disable or tune, with the reason for each.

## Post-production

- **Noisy scanners** get ignored. Tune them to the team's real risks.
- **Expired exclusions** hide new findings in old paths. Review them on a schedule.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
