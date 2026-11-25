---
name: rlm-etl-review
description: "ETL review: extract, transform and load steps checked for ordering, late data, errors and reruns. Use when a data extract, transform and load step is built or changed."
---

<!-- managed-by: -->

# ETL review

ETL review: extract, transform and load steps checked for ordering, late data, errors and reruns. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the steps.** Each extract, transform and load, in order.
2. **Check the errors.** Flag rows that fail silently or are dropped without a record.
3. **Check the late data.** Confirm the job copes with records that arrive after their window.
4. **Check the reruns.** Confirm a rerun for one day does not disturb other days.
5. **Report.** Each step with its risk and the fix.

## Post-production

- **Dropped rows** disappear without a trace. Send them to a reject table with a reason.
- **Late records** change closed periods. Set how late data is handled and say so.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
