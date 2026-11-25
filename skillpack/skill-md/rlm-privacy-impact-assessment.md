---
name: rlm-privacy-impact-assessment
description: "Privacy impact assessment: the risks a new feature creates for personal data, and the mitigations. Use when a feature collects or uses personal data in a new way."
---

<!-- managed-by: -->

# Privacy impact assessment

Privacy impact assessment: the risks a new feature creates for personal data, and the mitigations. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Describe the data.** The fields, the people and the purpose.
2. **Describe the flow.** Where the data is collected, stored, shared and deleted.
3. **Identify the risks.** Unauthorised access, excess collection and secondary use.
4. **List the mitigations.** Each risk with the control that reduces it.
5. **Report.** The assessment, the residual risk and the decision needed.

## Post-production

- **Unassessed features** create surprises for the privacy owner. Assess before build.
- **Residual risk** left unstated is accepted by default. State it.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
