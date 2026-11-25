---
name: rlm-c-review
description: "C review: buffer sizes, integer overflow, format strings and memory ownership. Use when asked to review a C project or module."
---

<!-- managed-by: -->

# C review

C review: buffer sizes, integer overflow, format strings and memory ownership. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** Build files and compiler warnings enabled.
2. **Check buffers.** Flag copies with no length check.
3. **Check integers.** Flag arithmetic before allocation or indexing that can overflow.
4. **Check format strings.** Flag printf-style calls with input as the format.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Buffer overflows** are a long-standing route to code execution. Check every copy.
- **Format string bugs** let input read or write memory. Use fixed formats.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
