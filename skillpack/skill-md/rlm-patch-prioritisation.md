---
name: rlm-patch-prioritisation
description: "Patch prioritisation: which patches go first, by exploitability, exposure and business effect. Use when a list of available patches needs an order."
---

<!-- managed-by: -->

# Patch prioritisation

Patch prioritisation: which patches go first, by exploitability, exposure and business effect. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the patches.** Each package or system, its version and fix.
2. **Rank by exploitability.** Put known-exploited issues first.
3. **Rank by exposure.** Internet-facing and privileged systems first.
4. **Estimate effort.** Note the restart or downtime each patch needs.
5. **Report.** The ordered list with the reason for each place.

## Post-production

- **Known-exploited issues** are attacked within days. Patch them first.
- **Patches that need downtime** get delayed. Plan the window in advance.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
