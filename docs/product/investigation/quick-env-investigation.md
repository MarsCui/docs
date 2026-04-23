# Quick Environmental Investigation

This document is used to investigate a customer's on‑prem environment in the early stage. After collecting information, you can evaluate deployment readiness and feasibility for integrating/governing resources via AGIOne.

## Objectives

- Determine whether the infrastructure meets deployment prerequisites
- Identify risks in network, security, and capacity
- Clarify required remediation items and go-live preparations

## Quick Investigation Checklist (Example)

### 1) Infrastructure

- Server sizing (CPU, memory, GPU, disk)
- OS versions and kernel information
- Virtualization/containerization baseline

### 2) Network

- Inter-node connectivity and bandwidth
- Required port opening and firewall policies
- Cross-subnet / cross-region deployment needs

### 3) Platform and Middleware

- Kubernetes / Docker versions
- Storage approach (local disks, NAS, object storage)
- Observability stack status (Prometheus, ELK, etc.)

### 4) Security and Compliance

- Identity provider (LDAP, AD, OIDC)
- Audit and log retention requirements
- Compliance requirements (vulnerability scanning, security baselines, internal controls)

## Outputs (Example)

| Output | Description |
|------|------|
| Feasibility conclusion | Deployable / deployable after remediation / not recommended yet |
| Remediation list | Network, capacity, version, and permission gaps |
| Deployment recommendation | Single-node / multi-node / HA topology suggestion |
| Prerequisites | Accounts, certificates, ports, image registry access, etc. |