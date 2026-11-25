---
name: rlm-token-context-review
description: "Context size review: what is sent to the model on each call, and what could be left out. Use when an agent or model call builds its own context."
---

<!-- managed-by: -->

# Context size review

Context size review: what is sent to the model on each call, and what could be left out. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the inputs.** Each part of the prompt, its source and its typical size.
2. **Find the waste.** Flag repeated text, full files where a section is enough, and logs pasted whole.
3. **Check the order.** Keep stable content first so it can be cached.
4. **Check the limit.** Note what happens when the input is over the model's limit.
5. **Report.** Each input with its size, the waste found and the change that saves most.

## Post-production

- **Oversized context** raises cost and slows every call. Measure it per call type.
- **Truncation by accident** drops the instructions that mattered. Keep them first and check the limit.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
