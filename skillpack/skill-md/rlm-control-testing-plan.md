---
name: rlm-control-testing-plan
description: "Control testing plan: how each control is tested, how often, and what counts as a pass. Use when a team prepares for an audit or internal assurance."
---

<!-- managed-by: -->

# Control testing plan

Control testing plan: how each control is tested, how often, and what counts as a pass. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the controls in scope.**
2. **For each control, write the test.** What is checked and on which sample.
3. **Set the frequency.** Each control has a testing interval.
4. **Define the pass.** State the result that counts as a pass and a fail.
5. **Report.** The plan with each control, its test, interval and owner.

## Post-production

- **Undefined passes** lead to arguments in audit. Write the criteria first.
- **Untested controls** decay silently. Schedule each test.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
