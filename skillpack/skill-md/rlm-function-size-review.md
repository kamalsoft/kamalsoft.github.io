---
name: rlm-function-size-review
description: "Function size review: long functions, deep nesting and mixed levels of detail. Use when functions are added or grown in a change."
---

<!-- managed-by: -->

# Function size review

Function size review: long functions, deep nesting and mixed levels of detail. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Measure.** List functions over the team's line limit and their branch count.
2. **Check nesting.** Flag blocks nested more than three levels deep.
3. **Check levels.** Flag a function that mixes high-level steps with low-level detail.
4. **Suggest splits.** Name the smaller functions each long one could become.
5. **Report.** Each function with file and line, the measure, and the split.

## Post-production

- **Long functions** hide bugs in their middle branches. Split them by job.
- **Deep nesting** is where errors go unhandled. Return early.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
