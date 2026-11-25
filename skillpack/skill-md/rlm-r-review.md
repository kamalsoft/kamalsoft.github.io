---
name: rlm-r-review
description: "R review: data handling, package sources, file paths and reproducibility. Use when asked to review an R project or analysis."
---

<!-- managed-by: -->

# R review

R review: data handling, package sources, file paths and reproducibility. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** The renv or package files and the R version.
2. **Check data handling.** Flag personal data written to shared files.
3. **Check packages.** Flag packages installed from unknown sources.
4. **Check paths.** Flag paths built from input.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Unpinned packages** change results between runs. Lock the versions.
- **Shared data files** spread personal data. Keep them where access is controlled.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
