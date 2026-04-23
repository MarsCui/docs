# Support Matrix

## Hardware/Software Support Matrix (Example)

This section helps quickly confirm environment compatibility. Use release notes and on-site validation as the final source of truth.

### Operating Systems

| OS | Versions | Support Status |
|------|------|------|
| Ubuntu | 20.04 / 22.04 | Recommended |
| CentOS / Rocky | 7.x / 8.x | Conditionally supported |
| Kylin / UOS | Specific versions | Under evaluation |

### Container and Orchestration

| Component | Recommended Versions | Notes |
|------|------|------|
| Docker | 24.x+ | Consider enabling cgroup v2 compatible configuration |
| Kubernetes | 1.24 - 1.29 | Recommended with GPU Operator |
| Helm | 3.10+ | For standardized install and upgrade |

### Model Support (Example)

| Model Category | Examples | Support Status |
|------|------|------|
| General chat models | Llama / Qwen, etc. | Supported |
| Embedding models | BGE / GTE, etc. | Supported |
| Rerankers | BGE-Reranker, etc. | Conditionally supported |
| Multimodal | Selected vision-language models | Under evaluation |

### Protocols and Interfaces

| Protocol/Interface | Support Status | Notes |
|------|------|------|
| REST API | Supported | Recommended default integration |
| OpenAI Compatible API | Supported | Easier app migration |
| WebSocket (scenario-based) | Conditionally supported | Confirm exact versions and configuration |

## Notes

- The support matrix may change across releases
- For “conditional/under evaluation” items, run targeted validation first