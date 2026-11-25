---
name: rlm-nucleus-triage
description: "Triage findings exported from NucleusSec (Nucleus Security): prioritise, deduplicate, assign owners and track fixes. Use when a Nucleus export or a set of scanner findings needs a decision."
---

<!-- managed-by: -->

# NucleusSec triage

Triage findings exported from NucleusSec (Nucleus Security): prioritise, deduplicate, assign owners and track fixes. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the export.** Use the findings file the user provides from Nucleus Security, or from the scanners connected to it. Do not connect to the platform without the user's own access.
2. **Deduplicate.** Group findings that describe the same flaw in the same component, even when different scanners report them.
3. **Check exposure and severity.** Use the severity, asset criticality and whether the asset is internet-facing to set priority.
4. **Check ownership.** Each finding needs an owner, normally the team that owns the component. Flag findings with no owner.
5. **Check the fix path.** Note whether a fix, a configuration change or a risk acceptance is the right response, and who must approve an acceptance.
6. **Check ageing.** Flag high-priority findings past their target date.
7. **Report.** A ranked table: priority, finding, asset, owner, fix path, due date. Say that the ranking is advice for the owner to review. Mark what you could not verify.

## Post-production

- **Aged high findings** become the reportable issues in audits. Review the ageing list each week.
- **Duplicates** inflate the backlog and hide the real risk. Deduplicate before reporting.
- **Coding-time prevention:** fix the root cause in the component, so the same flaw is not re-found in the next scan.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
