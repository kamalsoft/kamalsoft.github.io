---
name: rlm-container-image-findings
description: "Review container image scanner findings: which are reachable, which have fixes, and which are false positives. Use when an image scan reports findings before a release."
---

<!-- managed-by: -->

# Container image findings

Review container image scanner findings: which are reachable, which have fixes, and which are false positives. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the scan output.** Take the findings the user exports, with package, version and severity. Do not invent findings.
2. **Check the base layer.** Note which findings come from the base image, and whether a newer base image fixes them.
3. **Check reachability.** For each finding, decide whether the code in the image uses the vulnerable component.
4. **Check fixes.** Note the fixed version of each package and whether a rebuild with updated packages is enough.
5. **Check false positives.** Mark findings with no fix and no reachable path as candidates for a documented exception, not as passed.
6. **Report.** A table: finding, layer, reachable, fix, and decision. State the findings that need a person to confirm.

## Post-production

- **Base image findings** return on every build until the base changes. Update the base.
- **Unreviewed exceptions** become permanent. Record an owner and an expiry.
- **Coding-time prevention:** rebuild images on a schedule so fixes arrive without a code change.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
