---
name: rlm-websocket-review
description: "Review WebSocket code for origin checks, authentication, message size limits, reconnection and cleanup. Use when realtime features are added or changed."
---

<!-- managed-by: -->

# WebSocket review

Review WebSocket code for origin checks, authentication, message size limits, reconnection and cleanup. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the connection code.** Open the handshake, the message handler and the close handler.
2. **Check the origin.** The server must check the Origin header. Flag servers that accept any origin.
3. **Check authentication.** Authenticate at the handshake and again for sensitive messages. Flag connections that trust the client's identity claims.
4. **Check limits.** Flag missing limits on message size and message rate.
5. **Check reconnection and cleanup.** Clients should reconnect with a back-off, and the server should release state for closed connections.
6. **Report.** List each finding with its file and line, severity and the fix.

## Post-production

- **Cross-site WebSocket hijacking** comes from a missing origin check. Check the origin on every handshake.
- **Unbounded messages** exhaust memory. Set a size limit.
- **Coding-time prevention:** treat every message as untrusted input, the same as an HTTP request.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
