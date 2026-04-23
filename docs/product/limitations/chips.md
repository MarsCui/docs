# Managed Chips

## Supported Chips for Governance (Example)

This page describes AGIOne support for chip platforms under governance/management, to help with early-stage sizing and environment assessment.

| Chip Platform | Support Status | Notes |
|------|------|------|
| NVIDIA A100/H100 | Fully supported | Recommended for production high-concurrency workloads |
| NVIDIA A800 | Fully supported | Common for on‑prem deployments |
| NVIDIA T4/L4 | Conditionally supported | Suitable for light workloads and PoC |
| Domestic AI accelerators (selected models) | Under evaluation | Requires driver/framework version validation |

## Version and Dependency Requirements (Example)

- Use validated driver version combinations
- Container runtime and GPU plugins must match kernel/driver compatibility
- In multi-node clusters, standardize driver versions across nodes

## Known Limitations (Example)

- Some legacy GPUs may be unstable under long-context inference workloads
- Mixed-chip clusters may be constrained by low-level driver compatibility for cross-node scheduling
- Some models may require chip-specific operators or conversion flows

## Evaluation Recommendations

- Run a 24-hour stability stress test before production go-live
- Benchmark key models per chip type as a baseline
- For non-recommended models, run PoC validation before production deployment