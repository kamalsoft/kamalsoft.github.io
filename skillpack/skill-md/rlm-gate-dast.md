---
name: rlm-gate-dast
description: "Dynamic testing gate: what the running-application scan must pass before a release. Use when a release is deployed to a test environment."
---

<!-- managed-by: -->

# Dynamic testing gate

Dynamic testing gate: what the running-application scan must pass before a release. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Confirm the target.** The scan runs against a test environment that matches production.
2. **Set the rule.** High findings block promotion to production.
3. **Confirm authentication.** The scan is authenticated so it reaches protected pages.
4. **Check the window.** The scan runs after each deployment, not only at release.
5. **Report.** The target, the rule, the result and the owner of each finding.

## Post-production

- **Unauthenticated scans** miss most of the application. Give the scanner a test login.
- **Scanning production** can disrupt users. Scan a production-like environment.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
