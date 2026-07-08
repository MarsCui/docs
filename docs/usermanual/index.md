# User Manual

:::: info Document Information
Version: v1.0
Updated: 2026-07-08
::::

## Subsystem Overview

The three subsystems work like a model service delivery pipeline: AI Infra On-Prem manages local compute and resource pools, AI Infra On-Cloud manages cloud accounts, authorization, and deployment resources, and Model Services manages model publishing, experimentation, calling, and revenue analysis.

| Subsystem | Applicable Scenario | Main Objects |
| --- | --- | --- |
| AI Infra On-Prem | Manage private or local cluster resources | Regions, availability zones, clusters, nodes, storage, templates, quotas, monitoring |
| AI Infra On-Cloud | Manage cloud account access and cloud model service deployment | Cloud platforms, cloud accounts, resource pools, authorization, deployment assets, scheduling policies |
| Model Services | Manage model publishing, experimentation, calling, and revenue | Model Marketplace, My Models, Playground, call logs, usage and revenue |

## Read by Role

| Role | Recommended Entry | Key Tasks |
| --- | --- | --- |
| Operator | On-Prem Operator, On-Cloud Operator, Model Services Operator | Prepare resources, configure templates, review models, maintain quotas and monitoring |
| General User | On-Prem User, On-Cloud User, Model Services User | Create instances or jobs, deploy model services, view credits and usage, and check call results |
| Model Provider | Studio and revenue-related pages in Model Services | Publish models, maintain versions, verify experimentation results, and view calls and revenue |

## Where Should I Start

| Your Goal | Start Here | Next Step |
| --- | --- | --- |
| Manage local clusters and resource pools | AI Infra On-Prem | Regions / clusters / specifications / templates |
| Manage cloud accounts and cloud deployments | AI Infra On-Cloud | Cloud accounts / resource pools / authorization / quick deployment |
| Publish or call models | Model Services | Model Marketplace / My Models / Playground |

## Recommended Reading Path

1. Beginners should first read the getting-started page for the relevant subsystem to understand role boundaries, core terms, and resource hierarchy: [AI Infra On-Prem Getting Started](./ai-infra-on-prem/getting-started/), [AI Infra On-Cloud Getting Started](./ai-infra-on-cloud/getting-started/), [Model Services Getting Started](./model-services/getting-started/).
2. When you need a complete delivery workflow, read the end-to-end workflow page to connect operator-side preparation with user-side usage: [Deploy a Model Service from Scratch on On-Prem](./ai-infra-on-prem/end-to-end/deploy-model-service/), [Deploy a Cloud Model Service from Scratch on On-Cloud](./ai-infra-on-cloud/end-to-end/deploy-cloud-model-service/), [Publish and Call a Model in Model Services](./model-services/end-to-end/publish-and-call-model/).
3. If you already know the target feature, go directly to the feature page and check prerequisites, parameter descriptions, result validation, and FAQ.
4. If creation, calling, or usage is abnormal, first check quotas, monitoring, call logs, and metering details.

## Prerequisites

1. Confirm the current account role and tenant.
2. Confirm that the target subsystem, region, resource pool, model, or cloud account is visible to the current account.
3. Before deployment, calling, top-up, or authorization operations, confirm costs, credits, permissions, and security boundaries.
4. When communicating issues externally, prepare desensitized page paths, time ranges, resource IDs, error messages, and operation steps.

## FAQ

### Not sure which subsystem to read

**Symptom:**

You want to deploy or call a model, but you are not sure whether to start from On-Prem, On-Cloud, or Model Services.

**Possible Causes:**

- You are not sure whether the target resources are in local clusters or cloud resource pools.
- You are not sure whether you are an operator, general user, or model provider.
- The task involves resource preparation, model publishing, and call validation at the same time.

**How to Handle:**

1. For local cluster resource management, start with AI Infra On-Prem.
2. For cloud accounts and cloud deployment, start with AI Infra On-Cloud.
3. For Model Marketplace, model publishing, Playground, calls, and revenue, start with Model Services.

### Page entry is not visible

**Symptom:**

The menu, button, or page mentioned in the documentation is not visible under the current account.

**Possible Causes:**

- The current account role or tenant permissions do not include the feature.
- The selected region, resource pool, cloud account, or model is not open to the current account.
- The prerequisite resources required by the feature have not been configured by the operator.

**How to Handle:**

1. Confirm the account role, tenant, and current subsystem.
2. Check resources, authorization, and visibility against the prerequisites on the feature page.
3. When contacting the operator, provide the desensitized account, page path, time range, and missing entry description.

### Operation fails after following the documented steps

**Symptom:**

After you complete the documented steps, the instance, deployment, job, or call still fails.

**Possible Causes:**

- Quota, capacity, specification, image, storage, or model source does not meet runtime requirements.
- Endpoint, API Key, request header, or cloud account authorization has expired.
- Monitoring, metering, or status synchronization is delayed.

**How to Handle:**

1. Check result validation and troubleshooting tips on the current feature page.
2. Cross-check monitoring, events, logs, call records, and usage details.
3. When submitting a ticket, only provide desensitized information. Do not attach real secrets, tokens, or internal endpoints.

## Usage Suggestions

- Confirm the role first, then the subsystem, and finally enter the specific feature page.
- For operations involving costs, credentials, deployment, and production resources, validate them in a controlled scope first.
- The example names, paths, and addresses in the documentation are for explanation only. Use the resources visible in the current environment during actual operations.
