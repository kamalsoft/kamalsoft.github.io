---
name: rlm-csp-review
description: "Content security policy review: script sources, unsafe directives and report-only rollout. Use when a page or header policy is set or changed."
---

<!-- managed-by: -->

# Content security policy review

Content security policy review: script sources, unsafe directives and report-only rollout. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the policy.** List each directive and its sources.
2. **Flag unsafe directives.** 'unsafe-inline' and 'unsafe-eval' weaken the policy.
3. **Check sources.** Flag wildcard and overly broad host sources.
4. **Check rollout.** A new policy should run in report-only mode first.
5. **Report.** Each directive with its gap and the fix.

## Post-production

- **Inline scripts allowed** remove most of the protection. Use nonces or hashes.
- **Policies never enforced** because they are report-only forever. Set a date to enforce.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
