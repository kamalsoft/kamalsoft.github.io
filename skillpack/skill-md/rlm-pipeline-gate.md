---
name: rlm-pipeline-gate
description: "Define and check the pipeline gate: the checks a CI pipeline must pass before a merge, with each rule and its owner written out. Use when a team sets up or changes CI checks."
---

<!-- managed-by: -->

# Pipeline gate

Define and check the pipeline gate: the checks a CI pipeline must pass before a merge, with each rule and its owner written out. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the pipeline.** Open the CI configuration and list every job, its trigger, and which ones block the merge.
2. **List the required checks.** Build, test, lint, static analysis and dependency checks should all be required. Flag any that are optional.
3. **Check the bypasses.** Flag steps marked allowed-to-fail, skipped branches and manual overrides with no recorded owner.
4. **Check the timing.** Slow gates get skipped. Note the run time of each job and the order they run in.
5. **Check the records.** Each run should keep its result, commit and tool version.
6. **Report.** A table of gates: check, blocking or not, owner, and the gap found.

## Post-production

- **Optional checks** are skipped when a deadline is near. Make the important ones blocking.
- **Silent overrides** remove the gate for one merge without anyone noticing. Record every override.
- **Coding-time prevention:** run the same checks locally before the push.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
