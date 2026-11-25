---
name: rlm-scala-review
description: "Scala review: implicit scope, blocking in futures, pattern match gaps and serialisation. Use when asked to review a Scala project or module."
---

<!-- managed-by: -->

# Scala review

Scala review: implicit scope, blocking in futures, pattern match gaps and serialisation. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** The build tool, Scala version and compiler flags.
2. **Check implicits.** Flag implicits that change behaviour silently.
3. **Check futures.** Flag blocking calls inside futures.
4. **Check matches.** Flag non-exhaustive pattern matches on sealed types.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Blocking in futures** starves the thread pool. Keep blocking work separate.
- **Missing match cases** fail at runtime. Enable exhaustiveness warnings as errors.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
