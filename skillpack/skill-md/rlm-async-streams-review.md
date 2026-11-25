---
name: rlm-async-streams-review
description: "Async streams review: cancellation, disposal and the cost of buffering large results. Use when code uses IAsyncEnumerable or async streams."
---

<!-- managed-by: -->

# Async streams review

Async streams review: cancellation, disposal and the cost of buffering large results. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the streams.** Each producer and consumer.
2. **Check cancellation.** Each stream must honour its cancellation token.
3. **Check disposal.** Flag enumerators that are never disposed.
4. **Check buffering.** Flag streams that collect everything into a list first.
5. **Report.** Each stream with file and line, the problem and the fix.

## Post-production

- **Ignored cancellation** keeps work running after the caller has gone. Pass the token.
- **Buffered large results** exhaust memory. Stream them through.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
