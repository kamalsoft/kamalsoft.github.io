---
name: rlm-analytics-event-review
description: "Analytics event review: which events are tracked, what they carry, and whether they can identify a person. Use when a feature adds or changes analytics events."
---

<!-- managed-by: -->

# Analytics event review

Analytics event review: which events are tracked, what they carry, and whether they can identify a person. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **List the events.** Each name, when it fires and the properties it sends.
2. **Flag identifiers.** User names, emails or open text sent as properties.
3. **Check the purpose.** Each event has a use that someone named.
4. **Check the consent.** Events that need consent are gated by it.
5. **Report.** Each event with its properties, the identifiers found and the change.

## Post-production

- **Open text in events** carries personal data into analytics tools. Send codes, not text.
- **Events with no owner** keep collecting after nobody needs them. Review them each quarter.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
