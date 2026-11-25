---
name: rlm-python-review
description: "Review Python code for correctness, typing, resource handling, security pitfalls and tests. Use when asked to review or harden a Python project or module."
---

<!-- managed-by: -->

# Python review

Review Python code for correctness, typing, resource handling, security pitfalls and tests. Read the code before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** Open pyproject.toml, setup.cfg, requirements files and lint configuration. Note the Python version the project targets.
2. **Check correctness.** Look for mutable default arguments, late-binding closures, bare `except:`, swallowed exceptions, `is` comparisons with literals, and integer versus float division.
3. **Check resources.** Files, sockets and database connections must be closed, normally through `with`. Note generators and threads that are never joined.
4. **Check security.** Flag `eval` and `exec` on input, `pickle` on untrusted data, `subprocess` with `shell=True` or built strings, unsafe YAML loading, paths joined from user input, and SQL built with f-strings.
5. **Check typing and the public API.** Public functions need correct annotations. Flag `Any` that leaks out, and `Optional` values used without a None check.
6. **Check tests.** Find branches and public functions with no test, and assertions that cannot fail.
7. **Report.** List each finding as `file:line`, with severity (high, medium or low), the problem and the fix. Mark what you did not run.

## Not checked

Runtime behaviour under load, and dependencies outside the lock file.
