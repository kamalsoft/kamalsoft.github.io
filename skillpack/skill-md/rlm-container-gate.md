---
name: rlm-container-gate
description: "Check a container image before it ships: base image, running user, secrets and scan results. Use when a Dockerfile or image build changes."
---

<!-- managed-by: -->

# Container image gate

Check a container image before it ships: base image, running user, secrets and scan results. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the Dockerfile.** Note the base image, its tag, the build stages and the final command.
2. **Check the base image.** Flag untagged or latest base images, and images no longer supported.
3. **Check the user.** Flag images that run as root with no reason.
4. **Check secrets.** Flag secrets copied into the image or passed as build arguments that stay in the layers.
5. **Check the scan.** Note the image scan result. Block on a known exploitable critical finding.
6. **Report.** A pass or fail verdict, with each finding, its file and line, and the fix.

## Post-production

- **Root containers** widen the damage of a compromise. Run as a non-root user.
- **Secrets in layers** stay in the image forever. Use build secrets.
- **Coding-time prevention:** pin base image versions and keep the image small.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
