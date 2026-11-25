---
name: rlm-licence-compliance-report
description: "Licence compliance report: dependency licences against policy, with the attribution text the product needs. Use when a product ships and its licence obligations must be shown."
---

<!-- managed-by: -->

# Licence compliance report

Licence compliance report: dependency licences against policy, with the attribution text the product needs. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the components and their licences.**
2. **Check against policy.** Mark permitted, review-required and forbidden licences.
3. **Check attribution.** List the notices the distributed product must include.
4. **Check unknowns.** Flag components with no licence recorded.
5. **Report.** The compliance status, the notices and the decisions needed.

## Post-production

- **Missing notices** breach the licence even when the code is permitted. Generate them.
- **Unknown licences** must be resolved before distribution. Do not assume.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
