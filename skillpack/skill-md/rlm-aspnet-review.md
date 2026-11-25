---
name: rlm-aspnet-review
description: "Review ASP.NET Core code for authorization, model binding, CSRF, CORS, security headers and error handling. Use when asked to review or harden an ASP.NET Core application or API."
---

<!-- managed-by: -->

# ASP.NET review

Review ASP.NET Core code for authorization, model binding, CSRF, CORS, security headers and error handling. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the app setup.** Open Program.cs or Startup.cs, the middleware order, the controllers or minimal API routes, and appsettings. Note whether the app is an API, MVC or Razor Pages.
2. **Check authorization.** Every endpoint that changes data or returns private data needs `[Authorize]` or an explicit policy. Flag `[AllowAnonymous]` on sensitive endpoints, and missing authorization on minimal API routes.
3. **Check input binding.** Flag models bound directly from the request with no validation, binding of fields the user should not set (such as `IsAdmin`), and missing `[ApiController]` validation.
4. **Check CSRF and CORS.** Cookie-authenticated forms need antiforgery tokens. Flag `AllowAnyOrigin` combined with credentials, and wildcard origins.
5. **Check headers and transport.** Look for HTTPS redirection, HSTS outside development, and missing security headers such as Content-Security-Policy and X-Content-Type-Options.
6. **Check errors.** Flag exception details or stack traces returned to clients, and `UseDeveloperExceptionPage` enabled in production.
7. **Check output.** Razor output that is not encoded, `Html.Raw` on user data, and JSON responses that include internal fields.
8. **Report.** List each finding as `file:line`, with severity (high, medium or low), the problem and the fix. Mark what you did not run.

## Post-production

- **Broken access in production:** a missing authorization attribute is found only by a user who should not see the data. Keep the authorization check on every endpoint.
- **Error leaks:** stack traces in responses reveal internals. Keep the error-handling check on.
- **Coding-time prevention:** add an authorization default policy so each endpoint must opt out, rather than opt in.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
