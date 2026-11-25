---
name: rlm-technical-seo-review
description: "Technical SEO review: titles, canonical links, structured data, status codes and crawl rules. Use when a public page is added or its routes change."
---

<!-- managed-by: -->

# Technical SEO review

Technical SEO review: titles, canonical links, structured data, status codes and crawl rules. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the public pages and their titles and descriptions.**
2. **Check canonicals.** Each page should name one address.
3. **Check status codes.** Removed pages should return a proper code, not a soft error.
4. **Check crawl rules.** The robots file must not block pages that should be found.
5. **Report.** Each page with its problem and the fix.

## Post-production

- **Duplicate addresses** split ranking between copies. Set canonicals.
- **Soft errors** keep dead pages in the index. Return the correct status code.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
