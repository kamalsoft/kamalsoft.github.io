---
name: rlm-sbom-review
description: "Review a software bill of materials (SBOM): whether it is complete, current and usable for vulnerability and licence checks. Use when an SBOM is produced or asked for by a customer or audit."
---

<!-- managed-by: -->

# SBOM review

Review a software bill of materials (SBOM): whether it is complete, current and usable for vulnerability and licence checks. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the SBOM.** Open the SBOM file, its format (SPDX or CycloneDX) and the tool that made it.
2. **Check completeness.** Compare the SBOM with the lock files. Flag packages missing from it, including transitive ones.
3. **Check the identifiers.** Each component needs a name, version and a package identifier (purl or CPE) so it can be matched to advisories.
4. **Check currency.** An SBOM must be produced for each release. Flag an SBOM older than the code it describes.
5. **Check the licences.** Note components with no licence recorded, for the licence check.
6. **Report.** List the gaps, with the component, the problem and the fix. State whether the SBOM can be used for vulnerability matching.

## Post-production

- **Stale SBOMs** describe code that is no longer shipped. Regenerate it per release.
- **Missing transitive packages** hide the components that carry most advisories. Include them.
- **Coding-time prevention:** generate the SBOM in the build pipeline, not by hand.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
