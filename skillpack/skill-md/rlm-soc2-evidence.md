---
name: rlm-soc2-evidence
description: "Map the code and pipeline to SOC 2 control areas and list the evidence each control needs, and what is missing. Use when preparing for a SOC 2 review. This is a technical aid, not an attestation."
---

<!-- managed-by: -->

# SOC 2 evidence

Map the code and pipeline to SOC 2 control areas and list the evidence each control needs, and what is missing. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the scope.** Identify the trust services criteria in scope, as the user states them. Do not assume a scope.
2. **Map the controls.** For each control area, list the code, configuration and pipeline evidence that supports it.
3. **Check access evidence.** Logins, role changes and access reviews should leave records.
4. **Check change evidence.** Each change should have a review and a passing check, linked to a ticket.
5. **Check monitoring evidence.** Alerts and incident records should exist for security events.
6. **Report.** For each control: evidence present, partly present, or missing, and what must be collected from outside the repository.

## Post-production

- **Missing change evidence** is the most common audit finding. Link each merge to its review.
- **Unreviewed access** shows up in access reviews. Keep the records.
- **Coding-time prevention:** build the evidence into the pipeline, so it is produced every time.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
