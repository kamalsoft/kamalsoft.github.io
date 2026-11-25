---
name: rlm-data-lineage-review
description: "Data lineage review: where each dataset comes from, what it is derived from, and who uses it. Use when a report, model or dataset is used for a decision."
---

<!-- managed-by: -->

# Data lineage review

Data lineage review: where each dataset comes from, what it is derived from, and who uses it. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the datasets in scope and their sources.**
2. **Trace each one back to its source, step by step.**
3. **Check the owners.** Each dataset and each source has a named owner.
4. **Check the consumers.** Note every report and model that uses it.
5. **Report.** The lineage map, the gaps and the datasets with no owner.

## Post-production

- **Untraceable figures** cannot be defended in an audit. Keep the map current.
- **Unknown consumers** block changes to a dataset. Record who uses it.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
