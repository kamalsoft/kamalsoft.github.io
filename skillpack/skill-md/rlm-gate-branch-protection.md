---
name: rlm-gate-branch-protection
description: "Branch protection gate: required reviews, passing checks and no direct pushes to main. Use when a repository's default or release branch is configured."
---

<!-- managed-by: -->

# Branch protection gate

Branch protection gate: required reviews, passing checks and no direct pushes to main. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the protected branches and their settings.**
2. **Set the rule.** At least one independent review and all required checks before merge.
3. **Check direct pushes.** Flag branches that allow force pushes or deletion.
4. **Check administrators.** Flag administrators who can bypass the rules.
5. **Report.** Each branch, its settings, the gaps and the fix.

## Post-production

- **Administrator bypass** removes the control when it matters most. Remove or log it.
- **Force pushes** rewrite the history that audits rely on. Block them.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
