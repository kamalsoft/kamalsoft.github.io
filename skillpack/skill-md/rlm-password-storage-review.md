---
name: rlm-password-storage-review
description: "Password storage review: slow salted hashes, no reversible storage and no plaintext in logs. Use when code stores, checks or resets passwords."
---

<!-- managed-by: -->

# Password storage review

Password storage review: slow salted hashes, no reversible storage and no plaintext in logs. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find the storage.** List where passwords or verifiers are written.
2. **Check the hash.** Flag fast hashes such as MD5, SHA-1 or plain SHA-256.
3. **Check salts and cost.** Each hash needs a unique salt and a work factor.
4. **Check leaks.** Flag passwords in logs, errors or analytics.
5. **Report.** Each finding with file and line, severity and the migration path.

## Post-production

- **Fast hashes** make a stolen database quick to crack. Move to a slow hash.
- **Plaintext in logs** leaks passwords to log readers. Strip them at the source.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
