# Framework Configuration

::: info Document Information
Version: v1.0
Updated: 2026-07-08
:::

## Feature Overview

`Framework Configuration` provides a unified and reusable deployment environment template for fast inference services by presetting core parameters such as container images, startup commands, network policies, and environment variables. It simplifies clustered inference deployment, keeps runtime environments consistent, and supports flexible scheduling across different infrastructure resources.

| Item | Content |
| --- | --- |
| Applicable Role | Operator |
| Navigation Path | Templates > Framework Configuration |
| Page Route | `/powerone/fast-build-v2/frameworks` |
| Managed Objects | Framework name, version name, image, main node startup command, worker node startup command, extra parameters, environment variables, port exposure policy, port tags, and creation success message |
| Typical Use | Provide reusable deployment environment templates for inference templates |

### Beginner View

Framework configuration is like a standard startup manual for model services. It defines which container image to use, which commands the main node and worker nodes run, which ports are exposed, which environment variables are injected, and what message is shown to users after creation succeeds. When users deploy a model through an inference template, the platform assembles the runtime environment from this configuration.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Framework Configuration | A reusable deployment environment template composed of core parameters such as container images, startup commands, network policies, and environment variables. |
| Framework Name | Name of the underlying inference framework or engine. Use the official framework name where possible, such as `VLLM`, `TensorRT`, or `Triton Inference Server`. |
| Version Name | Version identifier of the framework configuration, used for iteration tracking or compatibility management. It can align with the underlying framework version or use an internal scenario name. |
| Image | Container image required to run inference tasks, including the operating system, dependency libraries, and the framework itself. |
| Main Node Startup Command | Startup command for the main node in the task cluster when quickly deploying an inference model. In single-node tasks, this is used directly as the node startup command. |
| Worker Node Startup Command | Startup command for Worker nodes in an inference task cluster, used in distributed inference scenarios. |
| Extra Parameters | Key-value parameters used to dynamically supplement or adjust startup commands. They can be used as individual placeholders or injected into commands through `${extraParamString}` or `${prefixExtraParamString}`. |
| Environment Variables | Preset key-value configurations injected when the container starts, such as `LOG_LEVEL=DEBUG` or `CUDA_VISIBLE_DEVICES=0`. |
| Port Exposure Policy | The default exposure method and access authentication mechanism for network ports after an inference service is deployed. |
| Port Tag | A semantic tag attached to an exposed port to identify the protocol type or purpose. |
| Creation Success Message | Message shown to users after the task cluster is created. Markdown and placeholders are supported. |
| Parameter Placeholder | Variable used in startup commands or creation success messages. The platform replaces it with the actual parameter when the job is created. |

### Region Availability

Images used by framework configurations are usually hosted in region-specific image repositories, so configuration availability is affected by region. When a framework is selected for fast deployment, the platform filters available framework configurations by the selected region. Before maintaining a framework, confirm that the target region has an available image repository and that the cluster can pull the corresponding image.

## Prerequisites

1. The framework image has been prepared and can be pulled by the target region and target cluster.
2. The supported model types, quantization methods, ports, main node startup command, and worker node startup command have been clarified.
3. Extra parameters, environment variables, port exposure policy, port tags, and creation success message have been planned.
4. Startup commands, environment variables, extra parameters, and message text have been confirmed not to expose real keys, tokens, AK/SK, private keys, or internal download addresses.
5. The current account has template management permissions.

## Page Description

The page displays the framework configuration list and supports maintaining framework basic information, image versions, startup commands, and configuration parameters.

The following figure shows the framework configuration page.

![Framework Configuration](./images/frameworks-list.png)

## Main Operations

### Add or Maintain a Framework

#### Pre-Operation Check

1. The container image, base dependencies, and image region required by the framework have been confirmed.
2. The main node startup command, worker node startup command, and single-node startup method have been confirmed.
3. The service port, port exposure policy, port tags, and access authentication method have been confirmed.
4. Extra parameters, environment variables, and placeholders have been sanitized.
5. The model types, inference protocols, and resource specifications supported by the framework have been confirmed.

#### Procedure

1. Go to `Templates > Framework Configuration`.
2. Click the add, edit, or maintenance entrypoint provided by the page.
3. On the Basic Information tab, fill in framework name, version name, description, and supported scenarios.
4. On the Runtime Configuration tab, select the image and configure the main node startup command, worker node startup command, environment variables, and extra parameters.
5. In the port or network configuration area, maintain the service port, port exposure policy, and port tags.
6. In the message area, maintain the creation success message and reference parameter placeholders as needed.
7. Save and reference this framework in inference templates.

#### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Framework Name | Yes | Text | `VLLM` | Name of the underlying inference framework or engine. Use the official framework name where possible for easier identification and technical integration. |
| Version Name | Yes | Text | `v1.3.0` | Version identifier of the framework configuration, used for iteration tracking or compatibility management. |
| Image | Yes | Image address | `registry.example.com/runtime/vllm:1.0` | Container image required to run inference tasks. Images are related to regions, so confirm availability in the target region. |
| Main Node Startup Command | Yes | Command line | `python -m vllm.entrypoints.openai.api_server` | Startup command for the main node in the task cluster. In single-node tasks, this is used directly as the node startup command. |
| Worker Node Startup Command | Required for distributed scenarios | Command line | `ray start --address ... --block` | Startup command for Worker nodes, used in distributed inference. |
| Extra Parameters | No | Key-value pairs | `max_model_len=8192` | Parameters used to dynamically supplement or adjust startup commands. They can be injected into commands through placeholders. |
| Environment Variables | No | Key-value pairs | `HF_HOME=/models/cache` | Preset environment variables injected when the container starts. |
| Service Port | Yes | Number | `8000` | Listening port used for platform probing, routing, or service exposure. |
| Port Exposure Policy | Conditionally required | Enum | `API validation access` | Default exposure method and access authentication mechanism for the port. |
| Port Tag | No | Enum / text | `OpenAI API Port` | Used to identify port protocol type or purpose. System predefined tags can generate corresponding access help documents. |
| Health Check | Conditionally required | Path / command | `/health` | Used to determine whether the framework service starts successfully. |
| Creation Success Message | No | Markdown text | `The service has been created. You can access ${modelName}.` | Message shown to users after the task cluster is created. Markdown and placeholders are supported. |

#### Port Exposure Policy and Port Tags

| Configuration | Value | Description |
| --- | --- | --- |
| Port Exposure Policy | `Web access` | Provides a Web-based access entry. Access requests carry a time-limited security token, `wmtoken`. |
| Port Exposure Policy | `API validation access` | Provides a native API endpoint. The `Authorization` request header must carry valid signature information. |
| Port Exposure Policy | `Web/API compatible validation access` | The port does not enable authentication. Use it only in trusted networks or test scenarios. |
| Port Exposure Policy | `Direct port forwarding` | The port does not enable authentication and is accessed through the cluster node IP and mapped port. It is suitable for internal debugging or specific network architectures. |
| Port Tag | `OpenAI API Port` | Identifies an inference service compatible with the OpenAI API format. The system generates corresponding API call help documents. |
| Port Tag | `Ollama API Port` | Identifies an inference service compatible with the Ollama API format. The system generates corresponding Ollama API usage guides. |
| Port Tag | `Custom` | Used for internal notes or special protocol identifiers. It does not trigger automatic document generation. |

#### Parameter Placeholder Description

Startup commands, extra parameters, and creation success messages can use placeholders. When a job is created, the platform replaces placeholders with actual task cluster parameters.

| Placeholder | Description |
| --- | --- |
| `${regionId}` | Region ID assigned to the task cluster. |
| `${zoneId}` | Zone ID assigned to the task cluster. |
| `${name}` | Task cluster name. |
| `${flavorId}` | Specification ID used by the task cluster. |
| `${image}` | Image used by the task cluster. |
| `${envs}` | Environment variables. |
| `${useRdma}` | Whether to use the RDMA network. |
| `${openSsh}` | Whether SSH is enabled. |
| `${startCommand}` | Startup command object, including main node and worker node commands. |
| `${clusterId}` | Cluster ID assigned to the task. |
| `${portOpenPolicy}` | Port exposure policy. |
| `${portTag}` | Port tag of the exposed port. |
| `${jobType}` | Task deployment type. |
| `${modelName}` | Fast deployment model name. |
| `${frame}` | Fast deployment framework name. |
| `${frameVersion}` | Fast deployment framework version. |
| `${extraParamString}` | Extra parameter concatenation string. Parameter names do not include the `--` prefix. |
| `${prefixExtraParamString}` | Extra parameter concatenation string. Parameter names include the `--` prefix. |
| `${vendor}` | Model vendor. |
| `${supportModelClusterIds}` | List of cluster IDs that support the current model. |

#### Pitfalls

- The startup command must run as a foreground process to avoid the container exiting immediately after startup.
- The service port must match the actual framework listening port, otherwise health checks or access entries may fail.
- The image must include framework dependencies, model loading dependencies, and required system libraries.
- The port exposure policy determines the access authentication method. Do not select a non-authenticated policy for external or cross-tenant access.
- The creation success message can include access methods and follow-up operations, but must not include real tokens, passwords, AK/SK, private keys, or internal endpoints.

#### Result Validation

1. The framework appears in the list.
2. Inference templates can select this framework.
3. When a test service is created with this framework, the image can be pulled, the command can execute, and the port is accessible.
4. Placeholders in the creation success message are replaced with actual task parameters.

## FAQ

### Framework Is Not Selectable in Inference Templates

**Symptom:**

When configuring an inference template, the framework drop-down list does not contain the target framework.

**Possible Causes:**

- The framework is not enabled or the version is unavailable.
- The model type supported by the framework does not match the current model.
- The framework image region does not match the current deployment region.
- The framework image or configuration has not passed validation.

**Solution:**

1. Check framework status and version.
2. Confirm the model type, quantization method, and framework support scope.
3. Check whether the target region has an available image repository and corresponding image.
4. Save the framework configuration and re-enter the inference template.

### Port Is Inaccessible After Service Starts

**Symptom:**

The model instance is running, but service port access fails.

**Possible Causes:**

- The framework listening port is inconsistent with the template port.
- The startup command does not bind to `0.0.0.0`.
- The port exposure policy or port tag does not match the access method.
- The container starts successfully, but the service process exits abnormally.

**Solution:**

1. Verify the framework port and inference template port.
2. Check the startup command and logs.
3. Confirm the port exposure policy, port tags, and access authentication method.
4. Confirm the service listening address and health check configuration.

### Placeholders Are Not Replaced Correctly

**Symptom:**

The service fails to start, or the creation success message still shows variables in the `${...}` format.

**Possible Causes:**

- The placeholder name is misspelled.
- The placeholder is used in a position that does not support the variable.
- Extra parameters are not injected into the startup command through `${extraParamString}` or `${prefixExtraParamString}`.

**Solution:**

1. Check variable names against the parameter placeholder description.
2. Check placeholder positions in startup commands, extra parameters, and the creation success message.
3. Create a service with a test model and verify the actual replacement result.

## Follow-Up Operations

1. Reference the framework in [Inference Templates](../inference-templates/).
2. Use a test model to verify image, command, port, extra parameters, and placeholders.
3. Include framework changes in version records to avoid affecting existing templates.

## Notes

- Do not write keys in environment variable examples, extra parameters, creation success messages, or screenshots.
- Before changing framework image, port exposure policy, or startup command, confirm the impact scope of templates and instances that use this framework.
- Images are related to regions. After adding a region or migrating images, revalidate framework availability.
