---
name: rlm-asset-exposure-review
description: "Asset exposure review: which systems are reachable from outside and which hold sensitive data. Use when findings need priorities that reflect where systems sit."
---

<!-- managed-by: -->

# Asset exposure review

Asset exposure review: which systems are reachable from outside and which hold sensitive data. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the assets.** Each system, its owner and its data class.
2. **Check reachability.** Note which assets are reachable from the internet.
3. **Check data.** Note which assets hold regulated or sensitive data.
4. **Combine.** Rank exposure by reachability and data class.
5. **Report.** The assets, their exposure and the priority each finding should get.

## Post-production

- **Internet-facing assets** with sensitive data are the highest priority. Rank them first.
- **Unknown owners** leave findings unassigned. Name an owner for each asset.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
