---
name: rlm-token-cost-review
description: "Token cost review: which calls cost the most, how often they run, and where the budget goes. Use when a feature uses a model in production."
---

<!-- managed-by: -->

# Token cost review

Token cost review: which calls cost the most, how often they run, and where the budget goes. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the calls.** Each feature, model and how often it runs.
2. **Estimate the cost.** Input and output tokens per call, times the frequency.
3. **Find the largest.** Rank calls by total cost.
4. **Check for retries.** Flag loops and retries that multiply the cost.
5. **Report.** A ranked table with cost per call, the causes and the cheapest fix.

## Post-production

- **Retry loops** multiply cost without anyone noticing. Put a cap on retries.
- **Unranked spend** hides the one call that drives the bill. Review the top three each month.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
