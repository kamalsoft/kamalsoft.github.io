---
name: rlm-web-app-review
description: "Review a web application for routes, sessions, security headers, input and output encoding, and dependencies. Use when asked to review a web app before release."
---

<!-- managed-by: -->

# Web app review

Review a web application for routes, sessions, security headers, input and output encoding, and dependencies. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the app setup.** Open the entry points, the router or route table, the session and cookie configuration, and the build and dependency files.
2. **Check routes.** List every route and its method. Flag routes that change state with GET, and admin routes that are reachable without a check.
3. **Check sessions and cookies.** Cookies need `Secure`, `HttpOnly` and a `SameSite` value. Flag session IDs in URLs, and sessions that never expire.
4. **Check input and output.** Flag untrusted data written into HTML, JavaScript, URLs or SQL without encoding or parameters.
5. **Check headers.** Look for Content-Security-Policy, HSTS, X-Content-Type-Options and a Referrer-Policy. Flag missing headers and `unsafe-inline` scripts.
6. **Check dependencies.** Note packages with known advisories and scripts that run at install time.
7. **Check errors and logs.** Flag stack traces shown to users, and secrets or personal data written to logs.
8. **Report.** List each finding as `file:line`, with severity (high, medium or low), the problem and the fix. Mark what you did not run.

## Post-production

- **Session and cookie problems** show up as account takeover reports. Keep the cookie check on.
- **Header gaps** show up in scanner results after release. Set headers in one shared place.
- **Coding-time prevention:** use the framework's encoding and parameterised queries by default, and reject raw HTML from users.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
