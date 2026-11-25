---
name: rlm-data-subject-request-check
description: "Data subject request check: whether the code can find, export, correct and delete one person's data. Use when a request to access, correct or delete personal data arrives."
---

<!-- managed-by: -->

# Data subject request check

Data subject request check: whether the code can find, export, correct and delete one person's data. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the stores that hold personal data.**
2. **Check find.** Each store can be searched by the person's identifier.
3. **Check export.** Each store can produce the person's data in a usable format.
4. **Check delete.** Each store can delete or anonymise the person's data.
5. **Report.** The stores, the gaps and the steps to complete a request.

## Post-production

- **Data in untracked stores** cannot be deleted on request. Keep the list current.
- **Manual steps** miss copies. Automate the search and delete.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
