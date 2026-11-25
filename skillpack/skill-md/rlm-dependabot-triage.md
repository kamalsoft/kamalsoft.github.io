---
name: rlm-dependabot-triage
description: "Triage GitHub Dependabot alerts: exposure, the fixed version, breaking-change risk and the order to fix them. Use when Dependabot alerts or pull requests need a decision."
---

<!-- managed-by: -->

# Dependabot triage

Triage GitHub Dependabot alerts: exposure, the fixed version, breaking-change risk and the order to fix them. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the alerts.** Use the Dependabot alerts the user exports or shows: package, version in use, severity, advisory and the fixed version. Do not invent alerts.
2. **Check exposure.** For each alert, is the package a direct or transitive dependency? Is the code path reachable from outside? Is it only a development dependency?
3. **Check the fix.** Note the first fixed version, whether it is a major, minor or patch change, and whether a lock file or override is needed.
4. **Check breaking-change risk.** Read the release notes for the fixed version, and look for changed APIs the code uses.
5. **Rank and group.** Order by exposure first, then severity. Group alerts that one upgrade fixes together.
6. **Check Dependabot pull requests.** Each automated pull request needs its tests run. Flag auto-merge on major versions.
7. **Report.** A table: alert, package, current version, fixed version, exposure, breaking risk, recommended action. Mark what you could not verify, such as runtime use.

## Post-production

- **New advisories after release** arrive as Dependabot alerts. Triage them on a fixed schedule, not only when they appear.
- **Auto-merged major upgrades** break production. Keep auto-merge for patch versions only.
- **Coding-time prevention:** keep Dependabot version updates on, and pin the lock file so each upgrade is a reviewed change.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
