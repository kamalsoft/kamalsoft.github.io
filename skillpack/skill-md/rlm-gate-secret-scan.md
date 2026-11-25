---
name: rlm-gate-secret-scan
description: "Secret scanning gate: keys and tokens caught before they reach the repository. Use when a commit or push may contain credentials."
---

<!-- managed-by: -->

# Secret scanning gate

Secret scanning gate: keys and tokens caught before they reach the repository. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Confirm the scan runs before the push, locally and again in the pipeline.**
2. **Set the rule.** Any detected live secret blocks the merge.
3. **Check history.** Scan the existing history for secrets already committed.
4. **Check the response.** A found secret must be rotated, not only removed.
5. **Report.** The rule, the detections, the rotation status and any gap.

## Post-production

- **Removed but not rotated** secrets are still valid. Rotate every exposed secret.
- **Scans without history** miss old leaks. Scan the full history once.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
