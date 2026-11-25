---
name: rlm-concurrency-review
description: "Review concurrent code for races, shared state, deadlocks and unbounded parallel work. Use when code uses threads, tasks, goroutines, async work or locks."
---

<!-- managed-by: -->

# Concurrency review

Review concurrent code for races, shared state, deadlocks and unbounded parallel work. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find the concurrency.** List each thread, task, background job or parallel loop, and what each one shares.
2. **Check shared state.** Flag shared mutable data read or written without a lock or a single owner.
3. **Check ordering of locks.** Flag code that takes two locks in different orders, which can deadlock.
4. **Check bounds.** Parallel work needs a limit. Flag loops that start one task per item with no cap.
5. **Check cancellation.** Long-running work must stop when its caller stops. Flag work that ignores cancellation.
6. **Report.** List each finding as file and line, with severity, the problem and the fix. Mark what you could not reproduce.

## Post-production

- **Races** appear as rare, hard-to-repeat errors in production. Keep the shared-state check on.
- **Unbounded parallelism** exhausts memory or connections under load. Cap the work.
- **Coding-time prevention:** give each piece of state one owner, and pass results through channels or queues.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
