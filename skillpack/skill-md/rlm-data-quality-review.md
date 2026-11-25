---
name: rlm-data-quality-review
description: "Data quality checks review: completeness, validity, uniqueness and freshness are tested where data is loaded. Use when a pipeline or service loads or transforms data."
---

<!-- managed-by: -->

# Data quality checks review

Data quality checks review: completeness, validity, uniqueness and freshness are tested where data is loaded. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the datasets.** Each table or file, its source and its consumers.
2. **Check the rules.** Confirm checks exist for completeness, validity, uniqueness and freshness.
3. **Check the failure.** Flag loads that pass bad data without a stop or an alert.
4. **Check the thresholds.** Each check needs a stated limit.
5. **Report.** Each dataset with its checks, the gaps and the action when a check fails.

## Post-production

- **Bad data loaded silently** reaches reports and models. Stop the load or alert.
- **Checks without thresholds** never fail. Write the limit next to each check.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
