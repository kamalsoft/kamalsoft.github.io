---
name: rlm-internationalisation-review
description: "Internationalisation review: text in code, plural rules, dates, numbers and right-to-left layout. Use when a product is translated or entered in a new locale."
---

<!-- managed-by: -->

# Internationalisation review

Internationalisation review: text in code, plural rules, dates, numbers and right-to-left layout. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the strings.** Find text written directly in code.
2. **Check plurals.** Flag sentences built by joining words.
3. **Check dates and numbers.** Flag formats that are hard-coded.
4. **Check layout.** Flag fixed widths that break in longer languages or right-to-left.
5. **Report.** Each string or format with its location and the fix.

## Post-production

- **Hard-coded text** cannot be translated. Move it to resource files.
- **Joined sentences** break in other languages. Use the plural and format APIs.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
