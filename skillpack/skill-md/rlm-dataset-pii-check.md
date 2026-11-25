---
name: rlm-dataset-pii-check
description: "Dataset personal data check: personal data found in datasets, samples and exports, and where it is kept. Use when a dataset, sample or export is shared or kept."
---

<!-- managed-by: -->

# Dataset personal data check

Dataset personal data check: personal data found in datasets, samples and exports, and where it is kept. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the datasets, samples and exports in scope.**
2. **Find personal data.** Names, contact details, identifiers and location in each field.
3. **Check the copies.** Flag personal data in test data, samples and exports shared outside the team.
4. **Check the controls.** Each copy needs a purpose, a restriction and a deletion path.
5. **Report.** Each dataset with its personal data, the copies and the gaps. This is a map for review, not a legal opinion.

## Post-production

- **Personal data in test sets** is a common leak. Use masked or synthetic data.
- **Exports with no deletion path** cannot honour a deletion request. Record where each copy is.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
