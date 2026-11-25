---
name: rlm-dotnet-security-analyser-review
description: "NET security analyser review: analyser rules enabled, suppressed and treated as errors. Use when the project's analysers or warning settings are changed."
---

<!-- managed-by: -->

# NET security analyser review

NET security analyser review: analyser rules enabled, suppressed and treated as errors. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the analysers and the security rule sets enabled.**
2. **Check severity.** Security rules should be errors, not warnings.
3. **Check suppressions.** Each suppression needs a reason.
4. **Check the build.** Analyser errors must fail the build in CI.
5. **Report.** The rules enabled, the suppressions and the gaps.

## Post-production

- **Security warnings ignored** become incidents. Treat them as errors.
- **Silent suppressions** hide new issues. Require a reason on each.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
