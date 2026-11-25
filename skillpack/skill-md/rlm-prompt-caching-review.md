---
name: rlm-prompt-caching-review
description: "Prompt caching review: whether stable prompt parts are placed and marked so they can be reused. Use when a model provider's caching is used or could be."
---

<!-- managed-by: -->

# Prompt caching review

Prompt caching review: whether stable prompt parts are placed and marked so they can be reused. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the stable parts.** System text, tool definitions and reference material.
2. **Check the order.** Stable parts come before anything that changes per call.
3. **Check the markers.** Confirm the cache breakpoints are where the stable part ends.
4. **Check the cache hit rate.** Note how often a cached prefix is actually reused.
5. **Report.** Each prompt with its stable part, the ordering problem and the fix.

## Post-production

- **Changing text at the start** stops every cache hit. Move it to the end.
- **Unmeasured caching** looks fine and saves nothing. Track the hit rate.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
