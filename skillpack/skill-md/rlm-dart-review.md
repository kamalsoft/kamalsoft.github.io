---
name: rlm-dart-review
description: "Dart review: null safety, async errors, platform channels and secure storage. Use when asked to review a Dart or Flutter project or module."
---

<!-- managed-by: -->

# Dart review

Dart review: null safety, async errors, platform channels and secure storage. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the project setup.** Pubspec file, the SDK constraint and the analyser options.
2. **Check null safety.** Flag bang operators on values that can be null.
3. **Check async.** Flag futures that are not awaited or whose errors are dropped.
4. **Check channels.** Flag platform channel data that is not validated.
5. **Report.** Each finding with file and line, severity and the fix.

## Post-production

- **Dropped async errors** fail silently in the app. Await and handle them.
- **Plain storage for secrets** exposes them on a lost device. Use secure storage.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
