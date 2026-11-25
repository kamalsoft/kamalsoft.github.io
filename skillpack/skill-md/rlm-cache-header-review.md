---
name: rlm-cache-header-review
description: "Cache header review: which responses may be stored, for how long, and by whom. Use when responses carry cache headers or static assets are deployed."
---

<!-- managed-by: -->

# Cache header review

Cache header review: which responses may be stored, for how long, and by whom. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the response types.** Public assets, pages and private data.
2. **Check private data.** It must not be cached by shared caches.
3. **Check lifetimes.** Static assets with fingerprints can be cached long; pages need short lifetimes.
4. **Check validation.** Confirm the validator and the vary header are right.
5. **Report.** Each response type with its header, the problem and the fix.

## Post-production

- **Private pages in shared caches** show one user's data to another. Mark them private.
- **Missing fingerprints** stop updates reaching users. Version the file names.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
