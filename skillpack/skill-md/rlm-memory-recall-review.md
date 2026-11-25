---
name: rlm-memory-recall-review
description: "Memory recall accuracy review: whether the right memory comes back, and stale facts do not. Use when an agent retrieves stored memory for a new task."
---

<!-- managed-by: -->

# Memory recall accuracy review

Memory recall accuracy review: whether the right memory comes back, and stale facts do not. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Pick test questions.** Write questions whose answers are in memory.
2. **Run recall.** Check whether each answer comes back.
3. **Check stale facts.** Flag memories that were true once and are no longer.
4. **Check conflicts.** Flag two memories that disagree and which one wins.
5. **Report.** Recall rate, the misses, the stale items and the fix.

## Post-production

- **Stale memory** gives confident wrong answers. Date each memory and expire it.
- **Conflicting memories** make behaviour change between sessions. Decide the winner.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
