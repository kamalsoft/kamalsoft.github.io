---
name: rlm-zero-day-response
description: "Zero-day response: a plan for an unpatched vulnerability being actively exploited. Use when a vulnerability is reported with no fix available."
---

<!-- managed-by: -->

# Zero-day response

Zero-day response: a plan for an unpatched vulnerability being actively exploited. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Confirm the exposure.** Which systems run the affected component.
2. **Apply mitigations.** List configuration or network steps that reduce exposure now.
3. **Set the watch.** Alerts for exploitation attempts on affected systems.
4. **Plan the fix.** Note the release that will patch it and the rollback.
5. **Report.** The exposure, the mitigations in place, the watch and the owner.

## Post-production

- **Waiting for a patch** leaves systems open. Mitigate first.
- **No watch on exploitation** means a breach goes unnoticed. Set alerts.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
