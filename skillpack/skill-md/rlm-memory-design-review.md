---
name: rlm-memory-design-review
description: "Agent memory design review: what the agent stores, where, and how it is read back. Use when an agent keeps notes or facts between sessions."
---

<!-- managed-by: -->

# Agent memory design review

Agent memory design review: what the agent stores, where, and how it is read back. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the memory.** Each kind of thing stored, its source and its purpose.
2. **Check the store.** Confirm where it lives and what format it uses.
3. **Check the reads.** Note how memory enters a new session and how much of it.
4. **Check the growth.** Flag memory that only grows and never shrinks.
5. **Report.** The memory kinds, their store, the read path and the growth problem.

## Post-production

- **Unbounded memory** slows every session and fills the context. Set a size and a review.
- **Unclear purpose** stores things nobody will use. Keep only what changes later work.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
