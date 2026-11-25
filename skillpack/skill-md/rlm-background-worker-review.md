---
name: rlm-background-worker-review
description: "Review background workers and hosted services for retries, idempotency, graceful shutdown and monitoring. Use when a job, queue consumer or scheduled task is added or changed."
---

<!-- managed-by: -->

# Background worker review

Review background workers and hosted services for retries, idempotency, graceful shutdown and monitoring. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the worker.** Open the hosted service or job, its trigger and what it writes.
2. **Check idempotency.** A job that may run twice must produce the same result. Flag jobs that double-charge, double-send or duplicate rows.
3. **Check retries.** Retries need a limit, a back-off and a dead-letter path. Flag infinite retry loops.
4. **Check shutdown.** The worker must stop cleanly, finish or return its work, and honour cancellation.
5. **Check monitoring.** Each worker needs logs for failures and a metric or alert for backlog and errors.
6. **Report.** List each finding with its file and line, severity and the fix.

## Post-production

- **Duplicate side effects** cost money or annoy customers. Make jobs idempotent.
- **Silent backlogs** grow until the queue fails. Alert on queue age.
- **Coding-time prevention:** key each job by a unique ID and check it before acting.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
