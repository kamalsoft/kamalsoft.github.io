---
name: rlm-dotnet-review
description: "Review a .NET project for package versions, configuration, dependency injection, runtime settings and build safety. Use when asked to review or harden a .NET solution."
---

<!-- managed-by: -->

# NET project review

Review a .NET project for package versions, configuration, dependency injection, runtime settings and build safety. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the solution.** Open the .sln, every .csproj, Directory.Packages.props if used, global.json, NuGet.config and any appsettings files. Note the target frameworks and whether a framework is out of support.
2. **Check packages.** List each package and version. Flag versions with known advisories, packages pinned to floating versions (`*`), and duplicate packages with different versions.
3. **Check configuration.** Flag secrets in appsettings, connection strings with embedded passwords, and `Development` settings that would run in production.
4. **Check dependency injection.** Flag services registered with the wrong lifetime (a scoped service held by a singleton), and service locator calls inside business code.
5. **Check runtime settings.** Flag debug builds shipped, detailed errors enabled outside development, and `TreatWarningsAsErrors` turned off with many warnings ignored.
6. **Check build and CI.** Note the build commands, whether restore is locked, and whether tests run in the pipeline.
7. **Report.** List each finding as `file`, with severity (high, medium or low), the problem and the fix. Mark what you did not run.

## Post-production

- **Vulnerable packages in production:** a package with an advisory is a risk until it is upgraded. Dependabot or the dependency check should catch it before release.
- **Lifetime bugs:** wrong lifetimes show up as stale data or intermittent errors. Keep the DI check on.
- **Coding-time prevention:** lock package versions and run the restore and build with warnings as errors.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
