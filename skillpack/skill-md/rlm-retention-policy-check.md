---
name: rlm-retention-policy-check
description: "Retention policy check: data kept for the stated period and deleted when it expires. Use when data is stored, archived or backed up."
---

<!-- managed-by: -->

# Retention policy check

Retention policy check: data kept for the stated period and deleted when it expires. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the data stores and their retention rules.**
2. **Check the periods.** Each store has a stated retention period.
3. **Check deletion.** Flag stores with no delete path.
4. **Check backups.** Note how long backups keep deleted data.
5. **Report.** Each store with its period, its delete path and the gap.

## Post-production

- **Data kept forever** grows the breach impact. Set and enforce periods.
- **Backups that keep deleted data** need a rule too. Document their retention.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
