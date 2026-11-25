---
name: rlm-change-risk-review
description: "Assess the risk of a change: what could break, who is affected, and how to roll it back. Use before a change is merged or deployed."
---

<!-- managed-by: -->

# Change risk review

Assess the risk of a change: what could break, who is affected, and how to roll it back. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Describe the change.** List the files, services and data the change touches.
2. **Find who is affected.** Identify the users, services and jobs that depend on each touched part.
3. **Check data.** Flag schema changes, data migrations and anything irreversible.
4. **Check deployment order.** Flag changes that need another service to deploy first.
5. **Check rollback.** Each change needs a rollback that works. Flag rollbacks that lose data or need a manual step.
6. **Report.** A risk rating (low, medium or high) with the reasons, the affected parties, and the rollback plan.

## Post-production

- **Irreversible changes** cannot be rolled back after release. Mark them and require a review.
- **Deploy-order mistakes** break production for a short window. Write the order down.
- **Coding-time prevention:** keep changes small, and make each one reversible.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
