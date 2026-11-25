---
name: rlm-csharp-review
description: "Review C# code for nullability, async and await, disposal, LINQ pitfalls, input handling and tests. Use when asked to review or harden C# code."
---

<!-- managed-by: -->

# C# review

Review C# code for nullability, async and await, disposal, LINQ pitfalls, input handling and tests. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** Open the .csproj or .sln files, Directory.Build.props, the analyzer configuration and the target framework. Note whether nullable reference types are enabled.
2. **Check nullability.** Flag `!` (null-forgiving) used where a real null is possible, and public members without nullable annotations.
3. **Check async code.** Look for `async void` outside event handlers, `.Result` or `.Wait()` that can deadlock, missing `ConfigureAwait` where a library is consumed, and `CancellationToken` not passed through.
4. **Check disposal.** `IDisposable` values, streams, `HttpClient` created per request, and database connections must be disposed, normally with `using`.
5. **Check LINQ and collections.** Flag multiple enumeration of a lazy query, `First()` where `FirstOrDefault()` is needed, and string building in loops.
6. **Check input and output.** Flag untrusted data used in SQL built as strings, in `Process.Start` arguments, in file paths, and in deserialisation with `BinaryFormatter` or unsafe type handling.
7. **Check tests.** Find public methods and branches with no test, and assertions that cannot fail.
8. **Report.** List each finding as `file:line`, with severity (high, medium or low), the problem and the fix. Mark what you did not run.

## Post-production

- **Exceptions in production:** `NullReferenceException` and deadlocks from `.Result` show up as hangs and error spikes. Keep the nullable and async checks on.
- **Resource leaks:** a missing dispose appears as rising memory or exhausted connections under load. Keep the disposal checks on.
- **Coding-time prevention:** enable nullable reference types and the analyzers in the project, so the compiler reports these before review.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
