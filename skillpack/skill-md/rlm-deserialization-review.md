---
name: rlm-deserialization-review
description: "Deserialisation review: untrusted data turned into objects, with type control and size limits. Use when code reads serialised data from outside the process."
---

<!-- managed-by: -->

# Deserialisation review

Deserialisation review: untrusted data turned into objects, with type control and size limits. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find the readers.** List each place serialised data is read.
2. **Check the format.** Flag binary or polymorphic formats read from untrusted sources.
3. **Check types.** Flag readers that choose the type from the input.
4. **Check limits.** Flag readers with no size or depth limit.
5. **Report.** Each reader with file and line, severity and the fix.

## Post-production

- **Unsafe object readers** can run code during parsing. Use data-only formats for untrusted input.
- **Unlimited depth or size** exhausts memory. Set limits at the reader.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
