---
name: rlm-cpp-review
description: "C++ review: memory ownership, bounds, undefined behaviour and exception safety. Use when asked to review a C++ project or module."
---

<!-- managed-by: -->

# C++ review

C++ review: memory ownership, bounds, undefined behaviour and exception safety. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** Build files, the standard in use and sanitiser settings.
2. **Check ownership.** Flag raw new and delete without a clear owner.
3. **Check bounds.** Flag indexing and copies with no size check.
4. **Check undefined behaviour.** Flag signed overflow, uninitialised values and dangling references.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Memory errors** are exploitable. Use smart pointers and bounds-checked containers.
- **Undefined behaviour** works until a compiler update. Run the sanitisers in CI.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
