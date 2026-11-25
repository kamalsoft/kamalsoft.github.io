---
name: rlm-dependency-injection-review
description: "Dependency injection review for hidden dependencies, global state and hard-to-test constructors. Use when code is wired through constructors or a container."
---

<!-- managed-by: -->

# Dependency injection review

Dependency injection review for hidden dependencies, global state and hard-to-test constructors. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Find the wiring.** List the containers, factories and service locators.
2. **Find hidden dependencies.** Flag classes that read globals, static clocks or singletons directly.
3. **Check lifetimes.** Flag long-lived objects that hold short-lived ones.
4. **Check testability.** Flag constructors that do I/O or start threads.
5. **Report.** List each finding with file and line, the problem and the fix.

## Post-production

- **Hidden dependencies** make bugs appear only in one environment. Pass them in explicitly.
- **Wrong lifetimes** cause stale data and leaks. Review lifetimes with each new service.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
