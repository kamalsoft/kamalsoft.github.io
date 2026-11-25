---
name: rlm-ruby-review
description: "Review Ruby and Rails-style code for injection, mass assignment, dynamic code, callbacks and tests. Use when asked to review or harden a Ruby project or module."
---

<!-- managed-by: -->

# Ruby review

Review Ruby and Rails-style code for injection, mass assignment, dynamic code, callbacks and tests. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** Open the Gemfile, the lock file, the Ruby version and any Rails configuration.
2. **Check injection.** Flag SQL built with string interpolation, and user input passed to system, backticks or eval.
3. **Check mass assignment.** Flag models that accept every parameter. Permitted attributes must be listed.
4. **Check dynamic code.** Flag send, instance_eval and constantize on user input.
5. **Check callbacks.** Flag callbacks that call external services, which make saves slow and hard to test.
6. **Report.** List each finding with its file and line, severity and the fix. Mark what you did not run.

## Post-production

- **Mass assignment** lets users set fields such as admin flags. Permit attributes explicitly.
- **Callbacks** that call services fail on save and are hard to trace. Move them out.
- **Coding-time prevention:** use parameterised queries and a linter that flags dynamic dispatch on input.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
