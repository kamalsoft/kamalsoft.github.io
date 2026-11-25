---
name: rlm-blazor-review
description: "Review Blazor components for state handling, authorization, JavaScript interop and rendering cost. Use when Blazor pages or components are added or changed."
---

<!-- managed-by: -->

# Blazor review

Review Blazor components for state handling, authorization, JavaScript interop and rendering cost. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the components.** Open the pages, shared components and the interop layer.
2. **Check state.** Flag state shared across users in singleton services, and state that is lost on reconnect without a plan.
3. **Check authorization.** Pages need the authorization attribute, and components must not rely on hidden UI for protection.
4. **Check interop.** Flag JavaScript interop that passes unvalidated data, or calls that are never disposed.
5. **Check rendering.** Flag large lists without virtualisation, and state changes that re-render the whole page.
6. **Report.** List each finding with its file and line, severity and the fix.

## Post-production

- **Shared state across users** shows one person's data to another. Keep per-user state per circuit.
- **Hidden UI as security** fails the moment someone calls the endpoint. Check on the server.
- **Coding-time prevention:** add the authorization attribute by default and review interop as an input boundary.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
