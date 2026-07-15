import type { DefaultTheme } from 'vitepress'

export const enSidebar: DefaultTheme.Sidebar = {
  "/product/": [
    {
      text: "Product Overview",
      collapsed: false,
      items: [
        {
          text: "Start Here",
          link: "/product/"
        },
        {
          text: "Technical Overview",
          link: "/product/technical/overview"
        },
        {
          text: "Features & Capabilities",
          link: "/product/technical/features"
        },
        {
          text: "Network Planning",
          link: "/product/technical/network"
        },
        {
          text: "Technical Highlights",
          link: "/product/technical/tech-highlights"
        }
      ]
    },
    {
      text: "Identity and Access Model",
      collapsed: false,
      items: [
        { text: "User, Organization, and Role Design Logic", link: "/product/identity-access-model" },
        { text: "Role Comparison", link: "/product/role-comparison" },
      ],
    },
    {
      text: "Compatibility & Limitations",
      collapsed: false,
      items: [
        {
          text: "Supported Accelerators",
          link: "/product/limitations/chips"
        },
        {
          text: "Support Matrix",
          link: "/product/limitations/support-matrix"
        },
        {
          text: "Other Limitations",
          link: "/product/limitations/limitations"
        },
      ]
    },
    {
      text: "Pre-sales Assessment",
      collapsed: false,
      items: [
        {
          text: "Quick Requirement Survey",
          link: "/product/investigation/quick-requirement-investigation"
        },
        {
          text: "Quick Environment Assessment",
          link: "/product/investigation/quick-env-investigation"
        },
      ]
    },
  ],
  "/installation/": [
    {
      text: "Installation",
      collapsed: false,
      items: [
        {
          text: "Overview",
          link: "/installation/agione-deployment-requirements"
        },
        {
          text: "Pre-install Environment Check",
          link: "/installation/agione-precheck-environment-check"
        },
        {
          text: "Installation & Deployment",
          link: "/installation/agione-quick-install"
        },
        {
          text: "Multi-Node Installation",
          link: "/installation/agione-multi-node-install"
        },
        {
          text: "Installation Configuration Reference",
          link: "/installation/agione-install-config-reference"
        },
        {
          text: "Compute Nodes-Requirements",
          link: "/installation/deployment-requirements-for-managing-compute-nodes"
        },
        {
          text: "Compute Nodes-Installation",
          link: "/installation/quick-install-for-managing-compute-nodes"
        },
      ],
    }
  ],
  "/license/": [
    {
      text: "Purchase & Activation",
      collapsed: false,
      items: [
        { text: "Online Payment & Activation", link: "/license/online-payment-activation" },
        {
          text: "Activation Code & Activation",
          link: "/license/activation-code-activation"
        }
      ]
    }
  ],
  "/userguide/": [
    {
      text: "User Guide",
      collapsed: false,
      items: [
        { text: "Scenario Navigator", link: "/userguide/scenarios" },
        {
          text: "Scenario Playbooks",
          collapsed: false,
          items: [
            {
              text: "Register & Login",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/register-login/" },
                { text: "Register, Login, and Recover Password", link: "/userguide/scenarios/register-login/account-access" },
              ],
            },
            {
              text: "Identity Authorization",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/identity-authorization/" },
                { text: "Identity Authorization Workflow", link: "/userguide/scenarios/identity-authorization/authorization-workflow" },
              ],
            },
            {
              text: "Publish Models",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/publish-model/" },
                { text: "Publish Public Models", link: "/userguide/scenarios/publish-model/provider-quick-guide" },
                { text: "Publish Text Models", link: "/userguide/scenarios/publish-model/Text/" },
                { text: "Publish Multimodal Models", link: "/userguide/scenarios/publish-model/Multimodal/" },
                { text: "Publish Embedding Models", link: "/userguide/scenarios/publish-model/Embedding/" },
                { text: "Publish Image Models", link: "/userguide/scenarios/publish-model/Image/" },
                { text: "Publish Speech Models", link: "/userguide/scenarios/publish-model/Speech/" },
                { text: "Publish Video Models", link: "/userguide/scenarios/publish-model/Video/" },
              ],
            },
            {
              text: "Publish Models Preconfiguration",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/publish-model-preconfiguration/" },
                { text: "Model Publishing Preconfiguration", link: "/userguide/scenarios/publish-model-preconfiguration/model-publishing-preconfiguration" },
                { text: "Meta-Models", link: "/userguide/scenarios/publish-model-preconfiguration/Meta-models/" },
                { text: "Model Sources", link: "/userguide/scenarios/publish-model-preconfiguration/Model-Source/" },
                { text: "Model Templates", link: "/userguide/scenarios/publish-model-preconfiguration/Model-Templates/" },
              ],
            },
            {
              text: "Publish Aggregation Models",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/publish-aggregation-model/" },
                { text: "Create an Aggregation Model", link: "/userguide/scenarios/publish-aggregation-model/create-aggregation-model" },
              ],
            },
            {
              text: "Model Experience & API Calling",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/model-experience-api-calling/" },
                { text: "User Quick Guide", link: "/userguide/scenarios/model-experience-api-calling/user-quick-guide" },
              ],
            },
            {
              text: "Model Usage & Revenue",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/model-usage-revenue/" },
                { text: "Usage and Revenue Workflow", link: "/userguide/scenarios/model-usage-revenue/usage-revenue-workflow" },
              ],
            },
            {
              text: "Recharge & Billing",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/recharge-billing/" },
                { text: "Recharge and Billing Workflow", link: "/userguide/scenarios/recharge-billing/billing-workflow" },
              ],
            },
            {
              text: "On-Prem Compute Onboarding",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/on-prem-compute-onboarding/" },
                { text: "Accelerator Models", link: "/userguide/scenarios/on-prem-compute-onboarding/accelerator-management/" },
                { text: "Cluster Onboarding", link: "/userguide/scenarios/on-prem-compute-onboarding/cluster-onboarding/" },
                { text: "Metrics and Flavors", link: "/userguide/scenarios/on-prem-compute-onboarding/resource-specifications/" },
              ],
            },
            {
              text: "On-Prem Inference Template Building",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/on-prem-inference-template/" },
                { text: "Build an NPU Template", link: "/userguide/scenarios/on-prem-inference-template/build-inference-template/" },
              ],
            },
            {
              text: "On-Prem Model Deployment & Status Check",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/on-prem-model-deployment-status/" },
                { text: "Deploy and Check a Model", link: "/userguide/scenarios/on-prem-model-deployment-status/deploy-and-check/" },
              ],
            },
            {
              text: "On-Prem Development, Training & Assets",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/on-prem-dev-training-assets/" },
                { text: "Development and Training Workflow", link: "/userguide/scenarios/on-prem-dev-training-assets/development-training-workflow" },
              ],
            },
            {
              text: "On-Prem Resource Metering & Monitoring",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/on-prem-resource-metering-monitoring/" },
                { text: "Tenant NPU Quotas", link: "/userguide/scenarios/on-prem-resource-metering-monitoring/tenant-quotas/" },
                { text: "Device, Node, and Workload Monitoring", link: "/userguide/scenarios/on-prem-resource-metering-monitoring/resource-monitoring/" },
              ],
            },
            {
              text: "On Cloud Resource Access",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/on-cloud-resource-access/" },
                { text: "Cloud Platforms", link: "/userguide/scenarios/on-cloud-resource-access/Access-CloudType/" },
                { text: "Cloud Accounts", link: "/userguide/scenarios/on-cloud-resource-access/Cloud-Accounts/" },
                { text: "Resource Pools", link: "/userguide/scenarios/on-cloud-resource-access/Resource-Pools/" },
                { text: "Business-Region Authorization", link: "/userguide/scenarios/on-cloud-resource-access/Business-Region-Auth/" },
                { text: "Tenant-Cloud Authorization", link: "/userguide/scenarios/on-cloud-resource-access/Tenant-Cloud-Auth/" },
              ],
            },
            {
              text: "On Cloud Model Asset Publishing",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/on-cloud-model-asset-publishing/" },
                { text: "Runtime Images", link: "/userguide/scenarios/on-cloud-model-asset-publishing/Runtime-Images/" },
                { text: "Inference Frameworks", link: "/userguide/scenarios/on-cloud-model-asset-publishing/Frameworks/" },
                { text: "Model Assets", link: "/userguide/scenarios/on-cloud-model-asset-publishing/Models/" },
              ],
            },
            {
              text: "On Cloud Model Deployment & Calling",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/on-cloud-model-deployment-calling/" },
                { text: "Access Accounts", link: "/userguide/scenarios/on-cloud-model-deployment-calling/Access-Accounts/" },
                { text: "Quick Deployment", link: "/userguide/scenarios/on-cloud-model-deployment-calling/Quick-Deployment/" },
                { text: "My Deployments", link: "/userguide/scenarios/on-cloud-model-deployment-calling/My-Deployments/" },
              ],
            },
            {
              text: "Model Publishing Approval",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/model-publishing-approval/" },
                { text: "Model Review Workflow", link: "/userguide/scenarios/model-publishing-approval/review-workflow" },
              ],
            },
            {
              text: "Observability & Troubleshooting",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/observability-troubleshooting/" },
                { text: "Troubleshooting Workflow", link: "/userguide/scenarios/observability-troubleshooting/troubleshooting-workflow" },
              ],
            },
            {
              text: "Platform Governance & Access Control",
              collapsed: true,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/platform-governance-access-control/" },
                { text: "Governance Workflow", link: "/userguide/scenarios/platform-governance-access-control/governance-workflow" },
              ],
            },
          ],
        },
      ]
    }
  ],
  "/usermanual/": [
    {
      text: "User Manual",
      collapsed: false,
      items: [
        { text: "Manual Overview", link: "/usermanual/" },
        {
          text: "Model Services",
          collapsed: false,
          items: [
            { text: "Overview", link: "/usermanual/model-services/" },
            { text: "Getting Started", link: "/usermanual/model-services/getting-started/" },
            { text: "Publish and Call a Model", link: "/usermanual/model-services/end-to-end/publish-and-call-model/" },
            {
              text: "Operator",
              collapsed: false,
              items: [
                {
                  text: "Settings",
                  collapsed: false,
                  items: [
                    { text: "Meta-models", link: "/usermanual/model-services/operator/settings/meta-models/" },
                    { text: "Model Sources", link: "/usermanual/model-services/operator/settings/model-source/" },
                    { text: "Templates", link: "/usermanual/model-services/operator/settings/model-templates/" },
                    { text: "Tags", link: "/usermanual/model-services/operator/settings/tags/" },
                  ]
                },
                {
                  text: "Publishing",
                  collapsed: false,
                  items: [
                    { text: "App List", link: "/usermanual/model-services/operator/publishing/apps/" },
                  ]
                },
                {
                  text: "Approvals",
                  collapsed: false,
                  items: [
                    { text: "Model Reviews", link: "/usermanual/model-services/operator/approvals/model-reviews/" },
                    { text: "App Reviews", link: "/usermanual/model-services/operator/approvals/app-reviews/" },
                  ]
                },
              ]
            },
            {
              text: "Provider & User",
              collapsed: false,
              items: [
                {
                  text: "Discover",
                  collapsed: false,
                  items: [
                    { text: "Models", link: "/usermanual/model-services/user/discover/models/" },
                  ]
                },
                {
                  text: "Playground",
                  collapsed: false,
                  items: [
                    { text: "Text", link: "/usermanual/model-services/user/playground/text/" },
                    { text: "Images", link: "/usermanual/model-services/user/playground/images/" },
                    { text: "Video", link: "/usermanual/model-services/user/playground/video/" },
                    { text: "Audio", link: "/usermanual/model-services/user/playground/audio/" },
                  ]
                },
                {
                  text: "Studio",
                  collapsed: false,
                  items: [
                    { text: "My Models", link: "/usermanual/model-services/user/studio/my-models/" },
                  ]
                },
                {
                  text: "Usage & Revenue",
                  collapsed: false,
                  items: [
                    { text: "Model Earnings", link: "/usermanual/model-services/user/usage-revenue/model-revenue/" },
                    { text: "Model Usage", link: "/usermanual/model-services/user/usage-revenue/model-usage/" },
                  ]
                },
                {
                  text: "My Calls",
                  collapsed: false,
                  items: [
                    { text: "Overview", link: "/usermanual/model-services/user/my-calls/overview/" },
                    { text: "Call Analytics", link: "/usermanual/model-services/user/my-calls/call-analytics/" },
                    { text: "Call Logs", link: "/usermanual/model-services/user/my-calls/call-logs/" },
                  ]
                },
                {
                  text: "Customer Calls",
                  collapsed: false,
                  items: [
                    { text: "Overview", link: "/usermanual/model-services/user/customer-calls/overview/" },
                    { text: "Call Analytics", link: "/usermanual/model-services/user/customer-calls/call-analytics/" },
                    { text: "Call Logs", link: "/usermanual/model-services/user/customer-calls/call-logs/" },
                  ]
                },
              ]
            },
          ]
        },
        {
          text: "AI Infra(On-Cloud)",
          collapsed: false,
          items: [
            { text: "Overview", link: "/usermanual/ai-infra-on-cloud/" },
            { text: "Getting Started", link: "/usermanual/ai-infra-on-cloud/getting-started/" },
            { text: "Deploy a Cloud Model Service from Scratch", link: "/usermanual/ai-infra-on-cloud/end-to-end/deploy-cloud-model-service/" },
            {
              text: "Operator",
              collapsed: false,
              items: [
                {
                  text: "Access Workbench",
                  collapsed: false,
                  items: [
                    { text: "Access Overview", link: "/usermanual/ai-infra-on-cloud/operator/access-workbench/access-overview/" },
                    { text: "Quick Access", link: "/usermanual/ai-infra-on-cloud/operator/access-workbench/quick-start/" },
                  ]
                },
                {
                  text: "Access Management",
                  collapsed: false,
                  items: [
                    { text: "Cloud Platforms", link: "/usermanual/ai-infra-on-cloud/operator/access-management/access-cloudtype/" },
                    { text: "Resource Pools", link: "/usermanual/ai-infra-on-cloud/operator/access-management/resource-pools/" },
                    { text: "Cloud Accounts", link: "/usermanual/ai-infra-on-cloud/operator/access-management/cloud-accounts/" },
                  ]
                },
                {
                  text: "Authorization Management",
                  collapsed: false,
                  items: [
                    { text: "Tenant-Cloud Auth", link: "/usermanual/ai-infra-on-cloud/operator/auth-management/tenant-cloud-auth/" },
                    { text: "Business-Region Auth", link: "/usermanual/ai-infra-on-cloud/operator/auth-management/business-region-auth/" },
                  ]
                },
                {
                  text: "Deploy Assets",
                  collapsed: false,
                  items: [
                    { text: "Models", link: "/usermanual/ai-infra-on-cloud/operator/deploy-assets/models/" },
                    { text: "Frameworks", link: "/usermanual/ai-infra-on-cloud/operator/deploy-assets/frameworks/" },
                    { text: "Runtime Images", link: "/usermanual/ai-infra-on-cloud/operator/deploy-assets/runtime-images/" },
                  ]
                },
                {
                  text: "Scheduling Governance",
                  collapsed: false,
                  items: [
                    { text: "Policies", link: "/usermanual/ai-infra-on-cloud/operator/scheduling-governance/policies/" },
                  ]
                },
              ]
            },
            {
              text: "User",
              collapsed: false,
              items: [
                {
                  text: "Model Services",
                  collapsed: false,
                  items: [
                    { text: "Quick Deployment", link: "/usermanual/ai-infra-on-cloud/user/model-services/quick-deployment/" },
                    { text: "My Deployments", link: "/usermanual/ai-infra-on-cloud/user/model-services/my-deployments/" },
                  ]
                },
                {
                  text: "Access Management",
                  collapsed: false,
                  items: [
                    { text: "Access Accounts", link: "/usermanual/ai-infra-on-cloud/user/access-management/access-accounts/" },
                  ]
                },
              ]
            },
          ]
        },
        {
          text: "AI Infra(On-Prem)",
          collapsed: false,
          items: [
            { text: "Overview", link: "/usermanual/ai-infra-on-prem/" },
            { text: "Getting Started", link: "/usermanual/ai-infra-on-prem/getting-started/" },
            { text: "Deploy a Model Service from Scratch", link: "/usermanual/ai-infra-on-prem/end-to-end/deploy-model-service/" },
            {
              text: "Operator",
              collapsed: false,
              items: [
                {
                  text: "Resource Pools",
                  collapsed: false,
                  items: [
                    { text: "Regions & Zones", link: "/usermanual/ai-infra-on-prem/operator/resource-pools/regions-zones/" },
                    { text: "Clusters", link: "/usermanual/ai-infra-on-prem/operator/resource-pools/clusters/" },
                    { text: "Accelerators", link: "/usermanual/ai-infra-on-prem/operator/resource-pools/accelerators/" },
                    { text: "Spec Metrics", link: "/usermanual/ai-infra-on-prem/operator/resource-pools/spec-metrics/" },
                    { text: "Resource Specs", link: "/usermanual/ai-infra-on-prem/operator/resource-pools/resource-specs/" },
                    { text: "Images", link: "/usermanual/ai-infra-on-prem/operator/resource-pools/images/" },
                    { text: "Image Services", link: "/usermanual/ai-infra-on-prem/operator/resource-pools/image-services/" },
                    { text: "Object Storage", link: "/usermanual/ai-infra-on-prem/operator/resource-pools/object-storage/" },
                    { text: "Block Storage", link: "/usermanual/ai-infra-on-prem/operator/resource-pools/block-storage/" },
                    { text: "File Storage", link: "/usermanual/ai-infra-on-prem/operator/resource-pools/file-storage/" },
                  ],
                },
                {
                  text: "Templates",
                  collapsed: false,
                  items: [
                    { text: "Models", link: "/usermanual/ai-infra-on-prem/operator/templates/model-config/" },
                    { text: "Frames", link: "/usermanual/ai-infra-on-prem/operator/templates/frameworks/" },
                    { text: "Inference Templates", link: "/usermanual/ai-infra-on-prem/operator/templates/inference-templates/" },
                    { text: "VRAM Config", link: "/usermanual/ai-infra-on-prem/operator/templates/vram-config/" },
                  ],
                },
                {
                  text: "Quotas & Metering",
                  collapsed: false,
                  items: [
                    { text: "Tenant Quotas", link: "/usermanual/ai-infra-on-prem/operator/quotas-metering/tenant-quotas/" },
                    { text: "Tenant Credits", link: "/usermanual/ai-infra-on-prem/operator/quotas-metering/tenant-credits/" },
                    { text: "Monthly Usage", link: "/usermanual/ai-infra-on-prem/operator/quotas-metering/monthly-usage/" },
                    { text: "Metering Details", link: "/usermanual/ai-infra-on-prem/operator/quotas-metering/metering-details/" },
                  ],
                },
                {
                  text: "Monitoring",
                  collapsed: false,
                  items: [
                    { text: "Overview", link: "/usermanual/ai-infra-on-prem/operator/monitoring/overview/" },
                    { text: "Clusters", link: "/usermanual/ai-infra-on-prem/operator/monitoring/clusters/" },
                    { text: "Nodes", link: "/usermanual/ai-infra-on-prem/operator/monitoring/nodes/" },
                    { text: "Devices", link: "/usermanual/ai-infra-on-prem/operator/monitoring/devices/" },
                    { text: "Jobs", link: "/usermanual/ai-infra-on-prem/operator/monitoring/jobs/" },
                  ],
                },
              ],
            },
            {
              text: "User",
              collapsed: false,
              items: [
                { text: "Overview", link: "/usermanual/ai-infra-on-prem/user/overview/" },
                {
                  text: "Model Deployment",
                  collapsed: false,
                  items: [
                    { text: "Templates", link: "/usermanual/ai-infra-on-prem/user/quick-start/inference-templates/" },
                    { text: "Instances", link: "/usermanual/ai-infra-on-prem/user/model-deployment/online-inference/" },
                  ],
                },
                {
                  text: "Dev Resources",
                  collapsed: false,
                  items: [
                    { text: "Online IDE", link: "/usermanual/ai-infra-on-prem/user/development/dev-environments/" },
                    { text: "Runtime Instances", link: "/usermanual/ai-infra-on-prem/user/development/model-training/" },
                  ],
                },
                {
                  text: "Storage",
                  collapsed: false,
                  items: [
                    { text: "Object Storage", link: "/usermanual/ai-infra-on-prem/user/storage/object-storage/" },
                    { text: "Block Storage", link: "/usermanual/ai-infra-on-prem/user/storage/block-storage/" },
                    { text: "File Storage", link: "/usermanual/ai-infra-on-prem/user/storage/file-storage/" },
                  ],
                },
                {
                  text: "Extensions",
                  collapsed: false,
                  items: [
                    { text: "Images", link: "/usermanual/ai-infra-on-prem/user/extensions/images/" },
                  ],
                },
                {
                  text: "Quotas & Usage",
                  collapsed: false,
                  items: [
                    { text: "Usage", link: "/usermanual/ai-infra-on-prem/user/quotas-usage/usage/" },
                    { text: "Quotas", link: "/usermanual/ai-infra-on-prem/user/quotas-usage/quotas/" },
                    { text: "Top-up Records", link: "/usermanual/ai-infra-on-prem/user/quotas-usage/top-up-records/" },
                  ],
                },
                {
                  text: "Monitoring",
                  collapsed: false,
                  items: [
                    { text: "Overview", link: "/usermanual/ai-infra-on-prem/user/monitoring/overview/" },
                    { text: "Clusters", link: "/usermanual/ai-infra-on-prem/user/monitoring/clusters/" },
                    { text: "Nodes", link: "/usermanual/ai-infra-on-prem/user/monitoring/nodes/" },
                    { text: "Devices", link: "/usermanual/ai-infra-on-prem/user/monitoring/devices/" },
                    { text: "Jobs", link: "/usermanual/ai-infra-on-prem/user/monitoring/jobs/" },
                  ],
                },
              ],
            },
          ],
        },
        {
          text: "Billing",
          collapsed: false,
          items: [
            { text: "Overview", link: "/usermanual/billing/" },
            { text: "Getting Started", link: "/usermanual/billing/getting-started/" },
            { text: "Reconcile and Settle a Billing Cycle", link: "/usermanual/billing/end-to-end/reconcile-billing-cycle/" },
            {
              text: "Operator",
              collapsed: false,
              items: [
                {
                  text: "Finance Operations",
                  collapsed: false,
                  items: [
                    { text: "Today Tasks", link: "/usermanual/billing/operator/finance-operations/today-tasks/" },
                    { text: "Monthly Overview", link: "/usermanual/billing/operator/finance-operations/monthly-overview/" },
                    { text: "Settlement List", link: "/usermanual/billing/operator/finance-operations/settlement-list/" },
                    { text: "Financial Accounts", link: "/usermanual/billing/operator/finance-operations/financial-accounts/" },
                    { text: "Reconciliation Center", link: "/usermanual/billing/operator/finance-operations/reconciliation-center/" },
                    { text: "Account Adjustment", link: "/usermanual/billing/operator/finance-operations/account-adjustment/" },
                  ],
                },
                {
                  text: "Customer Billing",
                  collapsed: false,
                  items: [
                    { text: "Customer Overview", link: "/usermanual/billing/operator/customer-billing/customer-overview/" },
                    { text: "Top-up Orders", link: "/usermanual/billing/operator/customer-billing/top-up-orders/" },
                    { text: "Business Units", link: "/usermanual/billing/operator/customer-billing/business-units/" },
                  ],
                },
                {
                  text: "License",
                  collapsed: false,
                  items: [
                    { text: "License", link: "/usermanual/billing/operator/license/license/" },
                  ],
                },
              ],
            },
            {
              text: "User",
              collapsed: false,
              items: [
                {
                  text: "Earnings",
                  collapsed: false,
                  items: [
                    { text: "Revenue", link: "/usermanual/billing/user/earnings/revenue/" },
                    { text: "Settlements", link: "/usermanual/billing/user/earnings/settlements/" },
                    { text: "Customers", link: "/usermanual/billing/user/earnings/customers/" },
                  ],
                },
                {
                  text: "Billing",
                  collapsed: false,
                  items: [
                    { text: "Overview", link: "/usermanual/billing/user/billing/overview/" },
                    { text: "Quota Governance", link: "/usermanual/billing/user/billing/quota-governance/" },
                    { text: "Transactions", link: "/usermanual/billing/user/billing/transactions/" },
                    { text: "Top-up Orders", link: "/usermanual/billing/user/billing/top-up-orders/" },
                    { text: "Monthly Bill", link: "/usermanual/billing/user/billing/monthly-bill/" },
                  ],
                },
              ],
            },
          ],
        },
        {
          text: "Settings",
          collapsed: false,
          items: [
            { text: "Overview", link: "/usermanual/settings/" },
            { text: "Getting Started", link: "/usermanual/settings/getting-started/" },
            { text: "Configure Accounts and Permissions", link: "/usermanual/settings/end-to-end/configure-account-and-permissions/" },
            {
              text: "Operator",
              collapsed: false,
              items: [
                {
                  text: "Personal",
                  collapsed: false,
                  items: [
                    { text: "My Keys", link: "/usermanual/settings/operator/personal/my-keys/" },
                    { text: "Profile", link: "/usermanual/settings/operator/personal/profile/" },
                  ],
                },
                {
                  text: "Members & Roles",
                  collapsed: false,
                  items: [
                    { text: "Team Members", link: "/usermanual/settings/operator/members-roles/team-members/" },
                    { text: "Roles", link: "/usermanual/settings/operator/members-roles/roles/" },
                  ],
                },
                {
                  text: "Organizations",
                  collapsed: false,
                  items: [
                    { text: "Organizations", link: "/usermanual/settings/operator/organizations/organizations/" },
                  ],
                },
                {
                  text: "Activity & Notifications",
                  collapsed: false,
                  items: [
                    { text: "Operation Logs", link: "/usermanual/settings/operator/activity-notifications/operation-logs/" },
                  ],
                },
                {
                  text: "System Settings",
                  collapsed: false,
                  items: [
                    { text: "Platform Settings", link: "/usermanual/settings/operator/system-settings/platform-settings/" },
                    { text: "Login Properties", link: "/usermanual/settings/operator/system-settings/login-properties/" },
                  ],
                },
                {
                  text: "API Rate Control",
                  collapsed: false,
                  items: [
                    { text: "Overview", link: "/usermanual/settings/operator/api-rate-control/overview/" },
                    { text: "Rule Management", link: "/usermanual/settings/operator/api-rate-control/rule-management/" },
                    { text: "Observability Audit", link: "/usermanual/settings/operator/api-rate-control/observability-audit/" },
                    { text: "Node Cache", link: "/usermanual/settings/operator/api-rate-control/node-cache/" },
                    { text: "Publish Center", link: "/usermanual/settings/operator/api-rate-control/publish-center/" },
                  ],
                },
              ],
            },
            {
              text: "User",
              collapsed: false,
              items: [
                {
                  text: "Personal",
                  collapsed: false,
                  items: [
                    { text: "Dashboard", link: "/usermanual/settings/user/personal/dashboard/" },
                    { text: "Projects", link: "/usermanual/settings/user/personal/projects/" },
                    { text: "My Keys", link: "/usermanual/settings/user/personal/my-keys/" },
                    { text: "Profile", link: "/usermanual/settings/user/personal/profile/" },
                  ],
                },
                {
                  text: "Members & Roles",
                  collapsed: false,
                  items: [
                    { text: "Team Members", link: "/usermanual/settings/user/members-roles/team-members/" },
                    { text: "Roles", link: "/usermanual/settings/user/members-roles/roles/" },
                    { text: "Member Quotas", link: "/usermanual/settings/user/members-roles/member-quotas/" },
                    { text: "Quota Requests", link: "/usermanual/settings/user/members-roles/quota-requests/" },
                  ],
                },
                {
                  text: "Organizations",
                  collapsed: false,
                  items: [
                    { text: "Org Settings", link: "/usermanual/settings/user/organizations/org-settings/" },
                  ],
                },
                {
                  text: "Activity & Notifications",
                  collapsed: false,
                  items: [
                    { text: "Operation Logs", link: "/usermanual/settings/user/activity-notifications/operation-logs/" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  "/practices/": [
    {
      text: "Best Practices",
      items: [
        {
          text: "Technical Practices",
          collapsed: false,
          items: [
            {
              text: "AI Coding Integration",
              collapsed: false,
              items: [
                { text: "CherryStudio", link: "/practices/technical/cherry-studio/" },
                { text: "claudeCode", link: "/practices/technical/claude-code/" },
                { text: "ClaudeCode-plugin", link: "/practices/technical/claude-code-plugin/" },
                { text: "Cline", link: "/practices/technical/cline/" },
                { text: "Codex", link: "/practices/technical/codex/" },
                { text: "Crush", link: "/practices/technical/crush/" },
                { text: "Cursor", link: "/practices/technical/cursor/" },
                { text: "dify", link: "/practices/technical/dify/" },
                { text: "KiloCode", link: "/practices/technical/kilo-code/" },
                { text: "n8n", link: "/practices/technical/n8n/" },
                { text: "open-webui", link: "/practices/technical/open-webui/" },
                { text: "openclaw", link: "/practices/technical/openclaw/" },
                { text: "OpenCode", link: "/practices/technical/open-code/" },
                { text: "RooCode", link: "/practices/technical/roo-code/" },
              ]
            },
          ]
        },
        {
          text: "Project Practices",
          collapsed: false,
          items: [
            { text: "Multi-Compute Pool Heterogeneous Inference Scheduling Best Practice", link: "/practices/project/multi-compute-pool-heterogeneous-inference-scheduling" }
          ]
        }
      ]
    }
  ],
  "/operations/admin-portal-manual/": [
    {
      text: "Admin Portal Manual",
      collapsed: false,
      items: [
        {
          text: "User", link: "/operations/admin-portal-manual/user",
        }
      ]
    }
  ],
  "/operations/om-guide/": [
    {
      text: "O&M Guide",
      collapsed: false,
      items: [
        {
          text: "User", link: "/operations/om-guide/user",
        }
      ]
    }
  ],
  "/others/faq/": [
    {
      text: "FAQ",
      collapsed: false,
      items: [
          { text: "General", link: "/others/faq/general" },
          { text: "Platform", link: "/others/faq/platform" },
          { text: "Compute", link: "/others/faq/compute" },
          { text: "Models", link: "/others/faq/model" },
          { text: "Inference", link: "/others/faq/inference" },
          { text: "Ops & Security", link: "/others/faq/ops" },
      ]
    }
  ],
  "/others/release-notes/": [
    {
      text: "Release Notes",
      link: "/others/release-notes/",
      collapsed: false,
    }
  ],
}
