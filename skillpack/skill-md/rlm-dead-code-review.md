---
name: rlm-dead-code-review
description: "Dead code review: unused functions, unreachable branches and commented-out blocks. Use when a change removes or leaves behind code."
---

<!-- managed-by: -->

# Dead code review

Dead code review: unused functions, unreachable branches and commented-out blocks. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find unused.** List functions, types and imports with no caller.
2. **Find unreachable.** Flag branches that cannot run given the checks before them.
3. **Find commented-out blocks left in the code.**
4. **Confirm before removal.** Check for reflection, plugins or external callers.
5. **Report.** Each item with file and line, and whether it is safe to remove.

## Post-production

- **Dead code** still gets read, maintained and sometimes run by mistake. Remove it.
- **Unused imports and flags** widen the attack surface and slow builds. Clean them with the change.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
