---
name: rlm-security-gate
description: "Set and apply security gate rules: what must pass before a change can merge or ship, with the pass and fail thresholds written out. Use when a team needs a merge or release gate."
---

<!-- managed-by: -->

# Security gate

Set and apply security gate rules: what must pass before a change can merge or ship, with the pass and fail thresholds written out. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the pipeline.** Open the CI configuration and note which security checks already run: static analysis, dependency checks, secret scanning and tests.
2. **Define the gates.** For each check, write the rule: block on any new high or critical finding, block on a secret, block on a dependency with a known exploit, and warn on medium findings. Record the threshold.
3. **Separate new from old.** A gate should block on findings introduced by the change, not on every old finding. Record the baseline, and how it is updated.
4. **Check the bypass path.** Flag any way to skip a gate: skipped steps, allowed-to-fail flags, or an approval that is not recorded. Each bypass needs a named owner and an expiry.
5. **Check evidence.** Each gate run should leave a result that can be looked up later: the commit, the tool version, the findings and the decision.
6. **Report.** List the gates as a table: check, rule, action (block or warn), owner. Then list the gaps where a gate is missing. Mark what you did not run.

## Post-production

- **Escaped vulnerabilities** are the gates that were warn-only or bypassed. Review the bypass log each release.
- **Slow pipelines** lead teams to skip gates. Measure gate time and keep the fast checks first.
- **Coding-time prevention:** run the same checks locally before a commit, so the gate result is known before review.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
