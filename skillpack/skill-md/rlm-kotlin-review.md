---
name: rlm-kotlin-review
description: "Kotlin review: nullability, coroutines, resource handling and serialisation. Use when asked to review a Kotlin project or module."
---

<!-- managed-by: -->

# Kotlin review

Kotlin review: nullability, coroutines, resource handling and serialisation. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** The build file, the Kotlin version and the lint configuration.
2. **Check nullability.** Flag !! on values that can be null in practice.
3. **Check coroutines.** Flag blocking calls inside coroutines and unscoped launches.
4. **Check resources.** Streams and connections must close.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Force-unwrapped nulls** crash requests. Handle null at the boundary.
- **Unscoped coroutines** outlive their caller. Use structured concurrency.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
