---
name: rlm-container-security-review
description: "Review container runtime settings, network policy, image provenance and registry access. Use when containers or their hosts are configured or deployed."
---

<!-- managed-by: -->

# Container security review

Review container runtime settings, network policy, image provenance and registry access. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the runtime settings.** Note how containers are started: privileges, capabilities, read-only filesystems and host namespaces.
2. **Check capabilities.** Flag containers with added capabilities or privileged mode with no reason.
3. **Check network policy.** Flag workloads with no network policy, which can reach every other workload.
4. **Check provenance.** Images should come from a trusted registry, be signed or pinned by digest, and built by the pipeline.
5. **Check registry access.** Flag registry credentials shared across teams or stored in plain files.
6. **Report.** List each finding with its workload, severity and the fix.

## Post-production

- **Privileged containers** give a compromised app the host. Remove the privilege.
- **Unpinned images** change without a review. Pin by digest.
- **Coding-time prevention:** start from a hardened base and the default-deny network policy.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
