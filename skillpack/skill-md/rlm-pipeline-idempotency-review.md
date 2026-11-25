---
name: rlm-pipeline-idempotency-review
description: "Pipeline idempotency review: a data job that runs twice produces the same result, not duplicates. Use when a job is retried, re-run or scheduled."
---

<!-- managed-by: -->

# Pipeline idempotency review

Pipeline idempotency review: a data job that runs twice produces the same result, not duplicates. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the jobs.** Each input, output and how it is triggered.
2. **Check the writes.** Flag inserts with no key, appends with no deduplication, and counters that add up twice.
3. **Check the retries.** Confirm a failed run can be repeated safely.
4. **Check the partial runs.** Flag jobs that leave half-written output.
5. **Report.** Each job with its risk of duplicates and the fix.

## Post-production

- **Duplicate rows** double counts in reports. Key each write and upsert.
- **Half-written output** after a crash looks complete. Write to a temporary place and swap in.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
