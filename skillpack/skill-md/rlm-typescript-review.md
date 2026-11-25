---
name: rlm-typescript-review
description: "Review TypeScript and JavaScript code for type safety, async errors, input handling and tests. Use when asked to review or harden a TypeScript or Node.js project or module."
---

<!-- managed-by: -->

# TypeScript review

Review TypeScript and JavaScript code for type safety, async errors, input handling and tests. Read the code before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** Open package.json, tsconfig.json, the lint configuration and the lock file. Note the Node.js version and whether strict mode is on.
2. **Check types.** Flag `any` and non-null assertions (`!`) that hide a real case, casts that bypass checks, and union values not narrowed before use.
3. **Check async code.** Look for promises that are not awaited or caught, `async` functions that can throw into an event handler, and sequential awaits in loops that could run together.
4. **Check input and output.** Flag untrusted data used in `eval`, `new Function`, HTML or `innerHTML`, shell commands, file paths and redirects without validation.
5. **Check dependencies and the runtime.** Flag packages with known issues in the lock file, and Node APIs that need a flag or are not available on the targeted runtime.
6. **Check tests.** Find exported functions and branches with no test, and assertions that cannot fail.
7. **Report.** List each finding as `file:line`, with severity (high, medium or low), the problem and the fix. Mark what you did not run.

## Not checked

Runtime behaviour under load, and dependencies outside the lock file.
