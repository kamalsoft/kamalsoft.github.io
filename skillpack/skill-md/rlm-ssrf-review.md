---
name: rlm-ssrf-review
description: "SSRF review: server-side requests to URLs that users can influence. Use when code fetches a URL, host or address that comes from a request."
---

<!-- managed-by: -->

# SSRF review

SSRF review: server-side requests to URLs that users can influence. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find the fetches.** List each outbound request whose target can be influenced.
2. **Check the allow-list.** Flag requests to any host the caller names.
3. **Check internal addresses.** Flag requests that can reach private or metadata addresses.
4. **Check redirects.** Flag clients that follow redirects into internal hosts.
5. **Report.** Each request with file and line, severity and the fix.

## Post-production

- **Metadata address access** exposes cloud credentials. Block link-local and private ranges.
- **Redirect following** bypasses host checks. Re-check the target after each redirect.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
