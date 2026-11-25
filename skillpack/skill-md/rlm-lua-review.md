---
name: rlm-lua-review
description: "Lua review: sandboxing, global variables, input handling and error propagation. Use when asked to review a Lua script or embedded configuration."
---

<!-- managed-by: -->

# Lua review

Lua review: sandboxing, global variables, input handling and error propagation. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the script and where it runs.** Embedded, game, or server.
2. **Check the sandbox.** Flag scripts with access to the file system or os library.
3. **Check globals.** Flag accidental global variables.
4. **Check input.** Flag input passed to load or loadstring.
5. **Report.** Each finding with line, severity and the fix.

## Post-production

- **Unsandboxed scripts** from users can read the host. Restrict the environment.
- **Accidental globals** collide across modules. Declare locals.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
