---
name: rlm-java-review
description: "Review Java code for null handling, resource cleanup, concurrency, serialisation and input handling. Use when asked to review or harden a Java project or module."
---

<!-- managed-by: -->

# Java review

Review Java code for null handling, resource cleanup, concurrency, serialisation and input handling. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** Open the build file, the Java version and the lint and static analysis configuration.
2. **Check null handling.** Flag values from maps, optionals used with get(), and methods that can return null without saying so.
3. **Check resources.** Streams, connections and readers must close, normally through try-with-resources.
4. **Check concurrency.** Flag shared mutable state without synchronisation, and thread pools created per request.
5. **Check input and serialisation.** Flag untrusted data passed to deserialisation, to shell commands, or into SQL built as strings.
6. **Report.** List each finding with its file and line, severity and the fix. Mark what you did not run.

## Post-production

- **Null errors** crash requests in production. Use explicit null handling at the boundary.
- **Unsafe deserialisation** is a known route to remote code execution. Keep the input check on.
- **Coding-time prevention:** turn on static analysis and treat its warnings as errors.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
