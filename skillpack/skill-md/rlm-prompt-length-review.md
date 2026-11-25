---
name: rlm-prompt-length-review
description: "Prompt length review: prompts that repeat rules, examples or boilerplate across calls. Use when a prompt template is written or changed."
---

<!-- managed-by: -->

# Prompt length review

Prompt length review: prompts that repeat rules, examples or boilerplate across calls. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the template.** List each section and what it says.
2. **Find repetition.** Flag rules repeated in several places and examples that teach nothing new.
3. **Check the examples.** Keep the fewest that show the format.
4. **Check the variables.** Flag fields filled with more text than the call needs.
5. **Report.** Each section with its length, the repetition and the shorter wording.

## Post-production

- **Bloated prompts** cost more on every call. Keep one copy of each rule.
- **Too few examples** lead to wrong output format. Keep one example per format.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
