---
name: rlm-schema-review
description: "Data schema review: column types, nullability, keys and changes that break readers. Use when a table or message schema is created or changed."
---

<!-- managed-by: -->

# Data schema review

Data schema review: column types, nullability, keys and changes that break readers. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the schema.** Each field with its type, nullability and key.
2. **Check the types.** Flag money stored as floating point and dates stored as text.
3. **Check the keys.** Flag tables with no key or a key that is not unique.
4. **Check changes.** Flag renamed, removed or retyped fields that break existing readers.
5. **Report.** Each finding with its field, the problem and the safe change.

## Post-production

- **Renamed fields** break readers that did not change. Add the new field and keep the old one for a while.
- **Float money** rounds wrongly in totals. Store amounts as integers in the smallest unit.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
