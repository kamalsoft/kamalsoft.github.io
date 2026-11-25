---
name: rlm-traceability-review
description: "Traceability review: each requirement links to its code, its tests and its approval. Use when requirements must be shown to be built and tested."
---

<!-- managed-by: -->

# Traceability review

Traceability review: each requirement links to its code, its tests and its approval. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List requirements.** Collect the numbered requirements.
2. **Link code.** Find the code that implements each requirement.
3. **Link tests.** Find the test that checks each requirement.
4. **Find orphans.** Flag code or tests that map to no requirement.
5. **Report.** A matrix of requirement, code, test and gaps.

## Post-production

- **Orphan code** is untested scope creep. Link it or remove it.
- **Untested requirements** are the first thing an audit finds. Keep the matrix current.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
