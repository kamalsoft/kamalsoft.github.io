---
name: rlm-elixir-review
description: "Elixir review: process supervision, unbounded atoms, input handling and timeouts. Use when asked to review an Elixir project or module."
---

<!-- managed-by: -->

# Elixir review

Elixir review: process supervision, unbounded atoms, input handling and timeouts. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** Mix file, the Elixir version and the supervision tree.
2. **Check atoms.** Flag atom creation from user input, which exhausts the atom table.
3. **Check supervision.** Flag processes started outside a supervisor.
4. **Check timeouts.** Flag GenServer calls with no timeout.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Atoms from input** can crash the whole node. Use strings or existing atoms.
- **Unsupervised processes** die silently. Start them under a supervisor.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
