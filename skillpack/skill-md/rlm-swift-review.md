---
name: rlm-swift-review
description: "Swift review: optionals, memory cycles, concurrency and secure storage. Use when asked to review a Swift project or module."
---

<!-- managed-by: -->

# Swift review

Swift review: optionals, memory cycles, concurrency and secure storage. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** The package file, the Swift version and the lint configuration.
2. **Check optionals.** Flag force unwraps on external data.
3. **Check memory.** Flag closures that capture self strongly and create cycles.
4. **Check concurrency.** Flag shared state accessed off the main actor without care.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Force unwraps** crash apps on unexpected data. Unwrap safely.
- **Retain cycles** leak memory until the app is restarted. Capture weakly where needed.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
