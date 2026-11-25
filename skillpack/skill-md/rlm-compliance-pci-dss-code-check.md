---
name: rlm-compliance-pci-dss-code-check
description: "PCI DSS code check: card data handling, storage and logging rules checked in the code. Use when code handles payment card data or payment flows."
---

<!-- managed-by: -->

# PCI DSS code check

PCI DSS code check: card data handling, storage and logging rules checked in the code. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find the card data.** List where card numbers, CVV or expiry dates appear.
2. **Check storage.** Flag card data stored after authorisation, or in logs.
3. **Check transmission.** Flag card data sent without strong encryption.
4. **Check the payment provider.** Note whether card entry is kept off the team's servers.
5. **Report.** Each finding with file and line, the requirement it breaks and the fix.

## Post-production

- **Card data in logs** is a reportable breach. Mask it at the source.
- **Stored card data** widens the audit scope. Keep it with the provider.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
