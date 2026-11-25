---
name: rlm-data-contract-review
description: "Data contract review: the shape, meaning and change rules agreed between the producer and its readers. Use when a team publishes data that others read."
---

<!-- managed-by: -->

# Data contract review

Data contract review: the shape, meaning and change rules agreed between the producer and its readers. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the producer and the readers, and the data they share.**
2. **Check the shape.** Confirm each field is written down with its type and meaning.
3. **Check the change rules.** Confirm how and when changes are announced.
4. **Check the guarantees.** Freshness, completeness and what happens on failure.
5. **Report.** Each agreement with its gaps and the missing rule.

## Post-production

- **Undocumented fields** get interpreted differently by each reader. Write the meaning down.
- **Silent changes** break reports without an error. Announce every change in advance.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
