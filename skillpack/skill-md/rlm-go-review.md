---
name: rlm-go-review
description: "Review Go code for error handling, concurrency, resource cleanup, input handling and tests. Use when asked to review or harden a Go module or service."
---

<!-- managed-by: -->

# Go review

Review Go code for error handling, concurrency, resource cleanup, input handling and tests. Read the code before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the module setup.** Open go.mod, go.sum, any Makefile or CI configuration, and the lint configuration. Note the Go version.
2. **Check errors.** Flag ignored errors (`_ =` on a call that can fail), errors compared as strings, and errors wrapped without `%w` when callers need to test them.
3. **Check concurrency.** Look for goroutines with no way to stop, shared maps or slices written without a lock, channels that can block forever, and `context` not passed through.
4. **Check resources.** `Close` on files, response bodies and rows must run on every path, normally through `defer` after the error check.
5. **Check security.** Flag SQL built with `fmt.Sprintf`, `os/exec` with a shell and built strings, paths joined from user input, and TLS settings that skip verification.
6. **Check tests.** Find exported functions and branches with no test, and table tests that never assert the result.
7. **Report.** List each finding as `file:line`, with severity (high, medium or low), the problem and the fix. Mark what you did not run.

## Not checked

Runtime behaviour under load, and dependencies outside the lock file.
