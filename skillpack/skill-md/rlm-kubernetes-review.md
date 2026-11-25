---
name: rlm-kubernetes-review
description: "Review Kubernetes manifests and Helm charts for resource limits, security context, probes, rollouts and secrets handling. Use when workloads are added or changed."
---

<!-- managed-by: -->

# Kubernetes review

Review Kubernetes manifests and Helm charts for resource limits, security context, probes, rollouts and secrets handling. Read the code or data before you judge it, and do not change files unless the user asks for a fix.

## Protocol

1. **Read the manifests.** Open the Deployments, Services, Ingress, RBAC and Helm values, and list each workload.
2. **Check resources.** Each container needs CPU and memory requests and limits. Flag containers with none.
3. **Check security context.** Flag containers that run as root, allow privilege escalation, or mount the host filesystem.
4. **Check probes and rollouts.** Each workload needs readiness and liveness probes, and a rollout strategy that does not stop all replicas.
5. **Check secrets and RBAC.** Flag secrets in plain manifests, and roles with wildcard permissions.
6. **Report.** List each finding as file and resource, with severity and the fix.

## Post-production

- **Missing limits** let one workload starve the others. Set requests and limits.
- **Wildcard RBAC** lets one compromised pod reach the cluster. Narrow the roles.
- **Coding-time prevention:** use a policy engine to refuse manifests that break these rules.

## Not checked

Runtime behaviour under load, and anything outside the files, data or export the user gave.
