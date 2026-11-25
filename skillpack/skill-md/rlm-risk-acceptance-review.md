---
name: rlm-risk-acceptance-review
description: "Risk acceptance review: formal acceptance of a finding with the reason, the owner and the review date. Use when a finding will not be fixed in the agreed time."
---

<!-- managed-by: -->

# Risk acceptance review

Risk acceptance review: formal acceptance of a finding with the reason, the owner and the review date. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the accepted risks with their findings.**
2. **Check the reason.** Each acceptance states why fixing is not possible now.
3. **Check the approver.** The approver has the authority for the risk level.
4. **Check the review date.** Each acceptance has a date to revisit it.
5. **Report.** The accepted risks, their approvers and those due for review.

## Post-production

- **Acceptances without approvers** are not risk decisions. Require the right approver.
- **Acceptances without review dates** become permanent. Set a date.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
