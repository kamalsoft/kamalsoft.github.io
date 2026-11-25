---
name: rlm-compliance-hipaa-safeguards
description: "HIPAA safeguards check: access, audit and transmission safeguards for health information in code. Use when code stores or sends health information."
---

<!-- managed-by: -->

# HIPAA safeguards check

HIPAA safeguards check: access, audit and transmission safeguards for health information in code. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find the health information.** List the fields and records that hold it.
2. **Check access.** Each access needs a role check and a record.
3. **Check audit.** Access and changes to health records must be logged.
4. **Check transmission.** Health information must be encrypted in transit and at rest.
5. **Report.** Each finding with file and line, the safeguard it breaks and the fix. This is a technical aid, not a legal opinion.

## Post-production

- **Unlogged access** cannot be investigated after a breach. Log every access.
- **Unencrypted copies** in backups and exports are a common gap. Check them too.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
