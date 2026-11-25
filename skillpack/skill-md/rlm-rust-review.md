---
name: rlm-rust-review
description: "Review Rust code for unsafe blocks, error handling, panics, concurrency and dependency features. Use when asked to review or harden a Rust crate or service."
---

<!-- managed-by: -->

# Rust review

Review Rust code for unsafe blocks, error handling, panics, concurrency and dependency features. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the crate setup.** Open Cargo.toml, the lock file, the edition and any feature flags.
2. **Check unsafe blocks.** Every unsafe block needs a comment that states the invariant it relies on. Flag blocks with no invariant.
3. **Check error handling.** Flag unwrap and expect on values from outside the program, and errors turned into panics.
4. **Check panics.** Panics in library code or request handlers take the service down. Flag them.
5. **Check concurrency.** Flag shared state without the right wrapper, and blocking calls inside async code.
6. **Report.** List each finding with its file and line, severity and the fix. Mark what you did not run.

## Post-production

- **Panics in handlers** stop a service. Return errors instead.
- **Unsafe blocks** without a stated invariant are where memory bugs hide. Require the comment.
- **Coding-time prevention:** run clippy with warnings as errors, and keep unsafe code in small, reviewed modules.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
