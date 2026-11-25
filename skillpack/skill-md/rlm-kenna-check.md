---
name: rlm-kenna-check
description: "Prioritise vulnerabilities by risk using Kenna Security exports: threat intelligence, exposure and asset value. Use when a Kenna export needs risk-based priorities."
---

<!-- managed-by: -->

# Kenna Security check

Prioritise vulnerabilities by risk using Kenna Security exports: threat intelligence, exposure and asset value. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the export.** Use the vulnerability export the user provides from Kenna Security. Do not connect to the platform without the user's own access.
2. **Check the risk inputs.** Note which inputs are present: threat intelligence, exploit availability, asset criticality and exposure. Flag missing inputs, because they weaken the ranking.
3. **Rank by risk.** Put first the findings with known exploits on exposed, critical assets. Keep severity as one input, not the only one.
4. **Check the scope.** Confirm the assets and scans in the export are the ones the team owns. Flag stale scans.
5. **Compare with the code.** Where a finding points at code, check the code path before advising a fix.
6. **Report.** A ranked list: risk, finding, asset, exploit status, exposure, and the recommended action. State which inputs were missing, and that the ranking is advice to a person to confirm. Mark what you could not verify.

## Post-production

- **Exploited flaws on exposed assets** are the post-production incidents to prevent. Rank them first each cycle.
- **Stale scans** hide fixed or new problems. Check scan dates before trusting the ranking.
- **Coding-time prevention:** fix the category of flaw, not only the single finding, so the same class is not reintroduced.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
