---
name: rlm-acceptance-criteria-check
description: "Acceptance criteria check: each criterion is testable, specific and met by the change. Use when a user story or ticket is ready for development or review."
---

<!-- managed-by: -->

# Acceptance criteria check

Acceptance criteria check: each criterion is testable, specific and met by the change. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the criteria.** Number each acceptance criterion in the ticket.
2. **Check testability.** Flag criteria that cannot be checked as written.
3. **Check specificity.** Flag words such as fast, easy or secure with no measure.
4. **Map to tests.** Note the test or check that proves each criterion.
5. **Report.** Each criterion with its status, the gap and the rewrite.

## Post-production

- **Vague criteria** let work be accepted without proof. Rewrite each with a measure.
- **Unmapped criteria** are the ones found missing after release. Map each to a test.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
