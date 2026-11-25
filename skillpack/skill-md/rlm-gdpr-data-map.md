---
name: rlm-gdpr-data-map
description: "Map where personal data is collected, stored, shared and deleted in the code, with the purpose and retention of each. Use when a feature touches personal data."
---

<!-- managed-by: -->

# GDPR data map

Map where personal data is collected, stored, shared and deleted in the code, with the purpose and retention of each. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find the personal data.** List fields that hold personal data: names, emails, addresses, identifiers and location.
2. **Map the flow.** For each field, follow where it is collected, stored, sent to other services and logged.
3. **Check the purpose.** Each field should have a stated purpose. Flag fields collected with no use.
4. **Check retention.** Each field needs a retention period and a delete path. Flag data kept with no delete.
5. **Check sharing.** Flag personal data sent to third parties, or to a region the policy does not allow.
6. **Report.** A table: field, where collected, stored, shared, purpose, retention, and gaps. This is a map for a person to review, not a legal opinion.

## Post-production

- **Unmapped data flows** appear in data subject requests that cannot be answered. Keep the map current.
- **Data in logs** is personal data kept longer than intended. Mask it.
- **Coding-time prevention:** collect only the fields the feature needs.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
