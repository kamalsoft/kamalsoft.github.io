---
name: rlm-output-encoding-review
description: "Output encoding review: data written into HTML, scripts, URLs, headers or logs is encoded for its context. Use when code writes user or stored data into a page, script or header."
---

<!-- managed-by: -->

# Output encoding review

Output encoding review: data written into HTML, scripts, URLs, headers or logs is encoded for its context. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the sinks.** Find each place output is written to HTML, JavaScript, URLs, headers or logs.
2. **Check context.** Each sink needs the encoding for its context.
3. **Flag raw writes.** Flag innerHTML, unencoded templates and string-built headers.
4. **Flag raw HTML from users.** Flag rendering of user content without sanitising.
5. **Report.** Each sink with its context, the gap and the fix.

## Post-production

- **Missing encoding** is the usual cause of cross-site scripting. Encode at the sink.
- **Header injection** lets attackers add headers. Reject line breaks in header values.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
