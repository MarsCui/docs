# Deploy a Cloud Model Service from Scratch

:::: info Document Information
Version: v1.0
Updated: 2026-07-06
::::

## Feature Overview

This document connects operator and user On-Cloud operations into an end-to-end path: the operator first connects the cloud platform, cloud account, resource pool, authorization relationships, model assets, and scheduling policies; then the user selects a cloud account and model, initiates deployment through intelligent recommendation, and views API invocation, monitoring, and event records after deployment.

| Item | Content |
| --- | --- |
| Applicable roles | Operator, User |
| Recommended prerequisites | [Getting Started](../../getting-started/), [Quick Access](../../operator/access-workbench/quick-start/), [Quick Deployment](../../user/model-services/quick-deployment/) |
| Output | A cloud model service deployment task with visible status, API, monitoring, and events |
| Typical use | First integration for a new cloud platform, model asset onboarding validation, deployment workflow demo, pre-launch acceptance, and issue localization |

## Beginner View

Deploying a cloud model service from scratch is like arranging a cloud resource relay: the operator prepares cloud accounts, resource pools, authorization, models, and scheduling policies; the user selects resources and initiates deployment.

## End-to-End Flow

| Stage | Actor | Goal |
| --- | --- | --- |
| Cloud platform access | Operator | Create or enable an accessible cloud platform. |
| Cloud account access | Operator | Add a cloud account and ensure the platform can synchronize cloud resources. |
| Resource pool preparation | Operator | Enable regional resource pools and confirm available scope. |
| Authorization opening | Operator | Configure tenant-cloud platform authorization and business-resource pool authorization. |
| Deployment asset preparation | Operator | Maintain model libraries, inference frameworks, inference images, and deployment configurations. |
| Policy governance | Operator | Configure business policies that affect recommendation ranking. |
| Quick deployment | User | Select a cloud account, region, model, inference engine, and business policy, then initiate deployment. |
| Status validation | User | View deployment status, API invocation, monitoring information, and event records. |
| Troubleshooting closure | Both | Check accounts, authorization, resource pools, model assets, and policies based on the failure path. |

## Terms

| Term | Description |
| --- | --- |
| Cloud account validation | Verifies whether cloud account keys, permissions, and resource synchronization are available. |
| Resource pool enablement | Brings resources in a cloud account into the authorizable and schedulable scope. |
| Business region authorization | Controls which regions a specific business can deploy to. |
| My Deployments | The entry where users view deployment status, Endpoint, events, and monitoring. |

## Prerequisites

1. The operator has permissions for cloud platform access, cloud accounts, resource pools, authorization, deployment assets, and policy management.
2. The user has menu permissions for access accounts, Quick Deployment, and My Deployments.
3. The target cloud platform account has cloud resource permissions required to create or manage deployments.
4. The tenant and business have obtained authorization for the target cloud platform and resource pool.
5. The target model, inference framework, inference image, and deployment configuration are ready.
6. The accounts and credentials used for this validation have been recorded in redacted form, and real AK/SK is not stored in the documentation.

## Step 1: Operator Connects the Cloud Platform

1. Go to `Access Management > Access Cloud Platform`.
2. Click `Add Platform`, and fill in the cloud platform name, platform type, identifier, and description.
3. After submission, confirm that the cloud platform appears in the list and is available.
4. If you need guided operations, open [Quick Access](../../operator/access-workbench/quick-start/) first to view the overall access progress.

Result validation:

1. The target cloud platform is visible in the cloud platform list.
2. The cloud platform status, name, and identifier match expectations.
3. The cloud platform can be selected in subsequent cloud account and resource pool configurations.

## Step 2: Operator Connects the Cloud Account

1. Go to `Access Management > Access Accounts`.
2. Select the target cloud platform and click `Add Cloud Account`.
3. Fill in the account name, account identifier, AK/SK, or authentication information required by the platform.
4. After submission, confirm that the account appears in the list and can be used for resource synchronization or deployment.

Result validation:

1. The target cloud account is visible in the [Access Accounts](../../operator/access-management/cloud-accounts/) list.
2. The account status is normal and the cloud platform ownership is correct.
3. Account credentials are not exposed in documentation, screenshots, or tickets.

## Step 3: Operator Enables Resource Pools

1. Go to `Access Management > Resource Pools`.
2. Select the target cloud platform and view the region card grid.
3. Enable the target regional resource pool and edit the region display name if necessary.
4. Confirm that the target resource pool can be used for subsequent authorization and deployment.

Result validation:

1. The target region is enabled in [Resource Pools](../../operator/access-management/resource-pools/).
2. The region name, cloud platform ownership, and resource pool information are accurate.
3. The target region used during user deployment is consistent with the resource pool configuration.

## Step 4: Operator Configures Authorization

1. Go to `Authorization Management > Tenant-Cloud Platform Authorization` and add cloud platform authorization for the target tenant.
2. Go to `Authorization Management > Business-Resource Pool Authorization` and authorize the target resource pool region for the target business or user scope.
3. Confirm that the authorization scope covers the tenant, business, cloud platform, and resource pool used in this validation.

Result validation:

1. The target authorization record exists in [Tenant-Cloud Platform Authorization](../../operator/auth-management/tenant-cloud-auth/).
2. The target resource pool authorization record exists in [Business-Resource Pool Authorization](../../operator/auth-management/business-region-auth/).
3. After login, the user can see the corresponding cloud platform and region scope.

## Step 5: Operator Prepares Deployment Assets

1. Go to `Deployment Assets > Models` and add or confirm the target model.
2. Configure the meta-model, onboarded version, cloud deployment point, output configuration, and compute plan in the model library.
3. Go to `Deployment Assets > Inference Frameworks` and confirm that the target inference framework is available.
4. Go to `Deployment Assets > Inference Images` and confirm that the target runtime image is available.

Result validation:

1. The target model is visible in [Model Assets](../../operator/deploy-assets/models/).
2. The cloud platform, region, inference framework, image, and compute plan associated with the model are complete.
3. The target model can be filtered on the user's Quick Deployment page.

## Step 6: Operator Configures Scheduling Policies

1. Go to `Scheduling Governance > Policy Management`.
2. Add or confirm the business policy used for deployment recommendation.
3. Check the policy name, applicable scope, sorting logic, and status.

Result validation:

1. The target policy is visible in [Policy Management](../../operator/scheduling-governance/policies/).
2. The business policy options in Quick Deployment match the policy configuration.
3. The policy does not exclude all available resources.

## Step 7: User Adds or Confirms Access Accounts

1. Go to `Access Management > Access Management`.
2. Click `Add Cloud Account` or confirm that an existing cloud account is available.
3. Fill in the account name, cloud platform, authentication information, and required notes.
4. Return to the list and confirm that the account is visible.

Result validation:

1. The target account is visible in [Access Accounts](../../user/access-management/access-accounts/).
2. The account cloud platform is consistent with the cloud platform authorized by the operator.
3. Account credentials are stored in redacted form.

## Step 8: User Initiates Quick Deployment

1. Go to `Model Services > Quick Deployment`.
2. Select the target cloud platform, region, and model on the model library page.
3. Click `Deploy Model` for the target model.
4. On the intelligent recommendation deployment page, select deployment mode, inference engine, and business policy.
5. After confirming the model compute matching plan, click `Confirm Deployment`.
6. In the publish deployment popup, select the cloud account and fill in task name and task description.
7. Click `Start Deployment` to submit the deployment task.

Result validation:

1. [Quick Deployment](../../user/model-services/quick-deployment/) can show the target cloud account, region, and model.
2. The intelligent recommendation page can generate at least one deployable plan.
3. The publish deployment popup can be submitted after required fields are filled.

## Step 9: User Validates Deployment Status

1. Go to `Model Services > My Deployments`.
2. Find the task just submitted in the deployment task list.
3. Open the details page and view basic information, API invocation, monitoring information, and event records.
4. If the task supports publishing deployment, complete subsequent publishing actions through the page button.

Result validation:

1. The target task is visible in [My Deployments](../../user/model-services/my-deployments/).
2. The task status meets expectations. If it fails, event records are visible.
3. API invocation information, monitoring information, and basic information can be viewed.

## Common Failure Paths

### Failure Branch: Cloud Account Validation Fails

Next hop: [Cloud Accounts](../../operator/access-management/cloud-accounts/)

**Issue Symptom:** The operator adds a cloud account, but validation fails or resources cannot be synchronized.

**Troubleshooting Path:**

1. Check AK/SK, authorization policies, account status, and cloud provider API permissions.
2. Confirm that keys have not expired and that least privilege covers resource query and deployment operations.
3. After validation passes, enable resource pools and configure tenant authorization.

### Failure Branch: Resource Pool Unavailable

Next hop: [Resource Pools](../../operator/access-management/resource-pools/)

**Issue Symptom:** The user is authorized, but Quick Deployment has no available regions, specifications, or resource pools.

**Troubleshooting Path:**

1. Check whether the resource pool is enabled, capacity is synchronized, and the region is authorized.
2. Verify that tenant authorization and business region authorization both cover the current user.
3. Confirm that model deployment assets and scheduling policies are not limited to other resource pools.

### Failure Branch: Deployment Creation Fails

Next hop: [My Deployments](../../user/model-services/my-deployments/)

**Issue Symptom:** Quick Deployment fails after submission, or My Deployments stays in creation for a long time.

**Troubleshooting Path:**

1. Check My Deployments events to distinguish insufficient resources, image failure, framework exception, or authentication error.
2. Verify that the model, inference framework, runtime image, specification, and scheduling policy match.
3. Provide the operator with a redacted deployment ID, region, model name, and error summary for review.

## Completion Check

| Check Item | Success Signal | Next Step |
| --- | --- | --- |
| Resources visible | The Quick Deployment page can select the target model, region, account, and specification | Continue submitting the cloud deployment |
| Status normal | My Deployments shows running or available status and generates invocation information | Enter API access or monitoring |
| Troubleshooting entry available | Events, status, and monitoring can locate deployment errors | Continue troubleshooting by failure branch |

## Next Steps

1. Users should enter My Deployments and continuously view service status, Endpoint, events, and monitoring.
2. Use redacted invocation examples to verify model output, latency, and error codes.
3. Operators should regularly review cloud account authorization, resource pool capacity, scheduling policies, and deployment asset versions.
4. If cost or capacity anomalies are found, cross-check On-Cloud usage, Model Services invocation records, and cloud provider bills.
