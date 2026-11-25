---
name: rlm-output-length-review
description: "Output length review: limits on what the model may produce, and what happens when it reaches them. Use when a feature asks a model for open-ended or long output."
---

<!-- managed-by: -->

# Output length review

Output length review: limits on what the model may produce, and what happens when it reaches them. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the outputs.** Each call, its expected length and who reads it.
2. **Check the limit.** Confirm a maximum output size is set.
3. **Check the cut-off.** Flag output that is cut mid-sentence or mid-structure without a sign.
4. **Check the format.** Structured output should be validated after it is produced.
5. **Report.** Each output with its limit, its failure when cut, and the fix.

## Post-production

- **Silent truncation** gives users half an answer. Detect it and say so.
- **Unvalidated structure** breaks the code that reads it. Validate every structured reply.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
