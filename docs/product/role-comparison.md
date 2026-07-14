# Role Comparison

:::: info Document Information
Version: v1.1
Updated: 2026-07-13
::::

## Role Summary

| Role | Positioning | Responsible For | Not Responsible For |
| --- | --- | --- | --- |
| `admin` | Platform administrator | Tenant, user, role, menu, and platform access foundations | Daily compute operations, model publishing, or model consumption |
| `operator` | Platform operator | Resource preparation, governance configuration, quotas, monitoring, and reviews | Publishing a provider-owned model or consuming models as an end user |
| `provider` | Model provider | Publishing and maintaining models, aggregate models, reviews, customer calls, and revenue | Platform-wide identity governance or reviewing its own publication |
| `enduser` | General user and model consumer | Deploying available services, discovering and experiencing models, API calls, and personal usage | Publishing or reviewing models and managing platform-wide resources |

## Capability Comparison

| Capability | `admin` | `operator` | `provider` | `enduser` |
| --- | --- | --- | --- | --- |
| Manage tenants, users, and role assignments | Primary | No | No | No |
| Prepare On-Prem resource pools and templates | No | Primary | Use authorized resources | Use authorized resources |
| Connect and authorize supported cloud resources | No | Primary | Use assigned access accounts or resources | Use assigned access accounts or resources |
| Maintain Model Services base settings | No | Primary | Use prepared settings | No |
| Publish a single or BYOK model | No | Govern and review | Primary | No |
| Create an aggregate model | No | Govern and review | Primary | No |
| Review models and apps | No | Primary | Submit for review | No |
| Discover models and use Playground | No | Validation when needed | Validation when needed | Primary |
| Call model APIs | No | Validation when needed | Validate owned services | Primary |
| View customer calls and model revenue | No | Platform scope when authorized | Primary for owned models | No |
| View personal calls and usage | No | Operational scope when authorized | Own scope | Own scope |

“Primary” indicates normal task ownership. Actual visibility depends on tenant, role configuration, resource authorization, and the installed version.

## `admin`: Platform Administrator

**Typical users:** deployment owner, platform administrator, or authorized IT administrator.

Main responsibilities:

- Maintain tenants, users, roles, and platform access configuration.
- Assign roles and keep platform-level permissions within the authorized administration team.
- Help diagnose missing menus or permission boundaries after business ownership has been confirmed.

Boundary:

- `admin` is not the default role for resource operations, model publishing, review, or model consumption.
- Do not assign broad administration permissions merely to bypass a missing business permission.

## `operator`: Platform Operator

**Typical users:** platform operations, infrastructure, model governance, or delivery team.

Main responsibilities by subsystem:

| Subsystem | Responsibilities | Manual Entry |
| --- | --- | --- |
| AI Infra On-Prem | Prepare resource topology, specifications, storage, images, templates, quotas, metering, and monitoring | [On-Prem Getting Started](../usermanual/ai-infra-on-prem/getting-started/) |
| AI Infra On-Cloud | Maintain supported cloud access, accounts, resource pools, authorization, deployment assets, and scheduling policies | [On-Cloud Getting Started](../usermanual/ai-infra-on-cloud/getting-started/) |
| Model Services | Maintain meta-models, model sources, templates, tags, and currency settings; process model and app reviews | [Model Services Getting Started](../usermanual/model-services/getting-started/) |

Boundary:

- The operator prepares supply and governance conditions but does not replace the provider that owns a model publication.
- Huawei Cloud access is temporarily unsupported and must not be used as an operator onboarding scenario.

## `provider`: Model Provider

**Typical users:** model team, AI developer, model service provider, or technical team responsible for publishing.

Main responsibilities:

- Publish and maintain single models or BYOK endpoints.
- Create aggregate models from eligible member models and select an available routing strategy.
- Configure provider-owned publication information, submit reviews, and respond to review results.
- View model usage, model revenue, and customer-call data for the permitted scope.
- Use authorized On-Prem or On-Cloud resources when a deployment workflow requires them.

Boundary:

- A provider cannot approve its own model or app publication.
- A provider does not manage platform-wide tenants, menus, resource policies, or another provider's data.

See [Publish and Call a Model](../usermanual/model-services/end-to-end/publish-and-call-model/).

## `enduser`: General User and Model Consumer

**Typical users:** business user, application developer, API consumer, or a user deploying from prepared resources.

Main responsibilities:

- Browse visible models and inspect model details.
- Experience supported model interactions in Playground.
- Obtain required access and call model APIs.
- View personal-call overview, analytics, logs, usage, and deployment status.
- Create On-Prem or On-Cloud workloads from resources and templates already authorized to the account.

Boundary:

- An end user does not publish single or aggregate models. Aggregate-model creation belongs to the model provider.
- An end user does not process reviews or maintain platform-wide resource and identity configuration.

See the [User Manual](../usermanual/) and [Scenario Guide](../userguide/scenarios).

## Which Role Should Perform the Task?

| Task | Recommended Role |
| --- | --- |
| Create a tenant or assign a role | `admin` |
| Onboard a local cluster or configure quotas | `operator` |
| Connect and authorize a supported cloud resource pool | `operator` |
| Maintain meta-models or review a model | `operator` |
| Publish a model or create an aggregate model | `provider` |
| View customer calls and provider revenue | `provider` |
| Try a model or call its API | `enduser` |
| View personal usage or a personal deployment | `enduser` |

If one person performs multiple responsibilities in a small deployment, assign multiple roles only after confirming the required boundary. Keep platform administration and review permissions limited and auditable.

## Related Documentation

- [Identity and Access Model](./identity-access-model)
- [Features and Capabilities](./technical/features)
- [Scenario Guide](../userguide/scenarios)
- [User Manual](../usermanual/)
