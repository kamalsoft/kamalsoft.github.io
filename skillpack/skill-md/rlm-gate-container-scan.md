---
name: rlm-gate-container-scan
description: "Container scan gate: images with exploitable critical findings blocked before deployment. Use when a container image is built for deployment."
---

<!-- managed-by: -->

# Container scan gate

Container scan gate: images with exploitable critical findings blocked before deployment. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Confirm the scan runs on each image build, before it is pushed.**
2. **Set the rule.** An exploitable critical finding blocks the push.
3. **Check the base image.** Flag images built on an unsupported base.
4. **Check exceptions.** Each accepted finding needs an owner and an expiry.
5. **Report.** The image, the findings, the decision and the owner.

## Post-production

- **Critical findings in base images** return on every build. Update the base.
- **Expired exceptions** keep vulnerable images running. Set review dates.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
