---
name: rlm-secrets-review
description: "Review how secrets are stored, rotated, passed to code and kept out of logs and source. Use when keys, tokens or passwords are added or moved."
---

<!-- managed-by: -->

# Secrets handling review

Review how secrets are stored, rotated, passed to code and kept out of logs and source. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find the secrets.** List API keys, tokens, passwords and certificates the code uses, and where each one is read.
2. **Check the source.** Flag secrets in source files, configuration, examples and test fixtures.
3. **Check storage.** Secrets belong in a secret store or the environment, not in files that are committed.
4. **Check logs and errors.** Flag secrets written to logs, error messages, URLs or analytics.
5. **Check rotation.** Each secret needs a way to rotate without a code change. Flag secrets that can never change.
6. **Report.** List each finding with its location, severity and the fix. Treat any secret found in source as exposed, and say so.

## Post-production

- **Committed secrets** stay in git history even after they are removed. Rotate them.
- **Secrets in logs** leak through log tooling. Keep the log check on.
- **Coding-time prevention:** read secrets from the environment or a secret store, and add a pre-commit scan.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
