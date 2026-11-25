---
name: rlm-file-upload-review
description: "File upload review: type checks, size limits, storage location and execution risk. Use when code accepts files from users."
---

<!-- managed-by: -->

# File upload review

File upload review: type checks, size limits, storage location and execution risk. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Check the type.** Flag checks based only on the file extension or client header.
2. **Check size.** Each upload needs a size limit at the server.
3. **Check storage.** Uploads must not be stored in a web-served or executable folder.
4. **Check names.** Flag user-supplied file names used as paths.
5. **Report.** Each upload path with its gap, file and line, and the fix.

## Post-production

- **Executable uploads** give attackers code execution on the server. Store outside the web root.
- **Trusting the extension** lets disguised files pass. Check the content type.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
