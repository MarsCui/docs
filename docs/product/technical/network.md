# Network Planning

## Recommended Network Layout

AGIOne recommends separating traffic into management, service, and data planes to improve isolation and operability.

- Management plane: administration, monitoring, and log collection
- Service plane: API ingress and business-system integrations
- Data plane: model serving, storage access, and inter-node communication

## Port Policy (Example)

| Category | Example Ports | Notes |
|------|------|------|
| Web/API | 80 / 443 / 8080 | External service ingress |
| Cluster communication | 10250 / 6443 | Kubernetes control and node communication |
| Observability | 9090 / 3000 | Metrics and visualization (depends on deployment) |
| Storage access | 9000 / 2049 | Object storage or network storage access |

## Security Recommendations

- Open only required ports and enforce allowlists
- Prefer HTTPS and internal PKI/certificates for production
- For cross-subnet routing, explicitly define routes and firewall rules
- Limit admin/control ports to internal networks whenever possible
