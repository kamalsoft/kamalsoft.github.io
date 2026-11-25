---
name: rlm-haskell-review
description: "Haskell review: partial functions, laziness leaks, exceptions in pure code and effect boundaries. Use when asked to review a Haskell project or module."
---

<!-- managed-by: -->

# Haskell review

Haskell review: partial functions, laziness leaks, exceptions in pure code and effect boundaries. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** Cabal or stack files and the compiler flags.
2. **Check partial functions.** Flag head, tail and fromJust on external data.
3. **Check laziness.** Flag space leaks from lazy accumulation.
4. **Check exceptions.** Flag errors thrown from pure code.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Partial functions** crash on unexpected input. Return a result type.
- **Space leaks** grow memory slowly. Use strict accumulation where it matters.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
