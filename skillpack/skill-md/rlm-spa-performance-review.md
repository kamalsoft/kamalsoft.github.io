---
name: rlm-spa-performance-review
description: "Review a single page application for bundle size, render cost, data fetching and caching. Use when a front end feels slow or a release grows the bundle."
---

<!-- managed-by: -->

# Single page app performance review

Review a single page application for bundle size, render cost, data fetching and caching. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the build output.** Open the bundle report, the entry points and the largest chunks.
2. **Check bundle size.** Flag large dependencies imported for one helper, and code not split by route.
3. **Check render cost.** Flag components that re-render the whole tree on each change, and heavy work done during render.
4. **Check data fetching.** Flag requests made in sequence that could run together, and data fetched again with no cache.
5. **Check images and fonts.** Flag unoptimised images and fonts loaded before they are needed.
6. **Report.** List each finding with its file, the cost and the fix. Mark what needs a profile to confirm.

## Post-production

- **Bundle growth** slows every release a little more. Set a budget and fail the build over it.
- **Repeated fetches** load the server and the user's battery. Cache the data.
- **Coding-time prevention:** lazy load routes and measure the bundle in each pull request.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
