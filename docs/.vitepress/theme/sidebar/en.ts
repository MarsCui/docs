import type { DefaultTheme } from 'vitepress'

export const enSidebar: DefaultTheme.Sidebar = {
  "/product/": [
    {
      text: "Product Overview",
      collapsed: false,
      items: [
        {
          text: "Overview",
          link: "/product/technical/overview"
        },
        {
          text: "Features & Ability",
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
        { text: "User, Tenant, and Role Design Logic", link: "/product/identity-access-model" },
        { text: "Role Comparison", link: "/product/role-comparison" },
      ],
    },
    {
      text: "Compatibility & Limitations",
      collapsed: false,
      items: [
        {
          text: "Managed Chips",
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
      text: "Investigation",
      link: "/product/investigation/",
      items: [
        {
          text: "Quick Requirements Investigation",
          link: "/product/investigation/quick-requirement-investigation"
        },
        {
          text: "Quick Environmental Investigation",
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
            { text: "Register & Login", link: "/userguide/scenarios/register-login/" },
            { text: "Identity Authorization", link: "/userguide/scenarios/identity-authorization/" },
            {
              text: "Publish Models",
              collapsed: false,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/publish-model/" },
                { text: "Publish Public Models", link: "/userguide/scenarios/publish-model/provider-quick-guide" },
                { text: "Publish Text Models", link: "/userguide/scenarios/publish-model/Text/" },
              ],
            },
            {
              text: "Publish Models Preconfiguration",
              collapsed: false,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/publish-model-preconfiguration/" },
                { text: "Model Publishing Preconfiguration", link: "/userguide/scenarios/publish-model-preconfiguration/model-publishing-preconfiguration" },
              ],
            },
            { text: "Publish Aggregation Models", link: "/userguide/scenarios/publish-aggregation-model/" },
            {
              text: "Model Experience & API Calling",
              collapsed: false,
              items: [
                { text: "Scenario Overview", link: "/userguide/scenarios/model-experience-api-calling/" },
                { text: "User Quick Guide", link: "/userguide/scenarios/model-experience-api-calling/user-quick-guide" },
              ],
            },
            { text: "Model Usage & Revenue", link: "/userguide/scenarios/model-usage-revenue/" },
            { text: "Recharge & Billing", link: "/userguide/scenarios/recharge-billing/" },
            { text: "On-Prem Compute Onboarding", link: "/userguide/scenarios/on-prem-compute-onboarding/" },
            { text: "On-Prem Inference Template Building", link: "/userguide/scenarios/on-prem-inference-template/" },
            { text: "On-Prem Model Deployment & Status Check", link: "/userguide/scenarios/on-prem-model-deployment-status/" },
            { text: "On-Prem Development, Training & Assets", link: "/userguide/scenarios/on-prem-dev-training-assets/" },
            { text: "On-Prem Resource Metering & Monitoring", link: "/userguide/scenarios/on-prem-resource-metering-monitoring/" },
            { text: "On Cloud Resource Access", link: "/userguide/scenarios/on-cloud-resource-access/" },
            { text: "On Cloud Model Asset Publishing", link: "/userguide/scenarios/on-cloud-model-asset-publishing/" },
            { text: "On Cloud Model Deployment & Calling", link: "/userguide/scenarios/on-cloud-model-deployment-calling/" },
            { text: "Model Publishing Approval", link: "/userguide/scenarios/model-publishing-approval/" },
            { text: "Observability & Troubleshooting", link: "/userguide/scenarios/observability-troubleshooting/" },
            { text: "Platform Governance & Access Control", link: "/userguide/scenarios/platform-governance-access-control/" },
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
        {
          text: "Model Services",
          collapsed: false,
          items: [
            {
              text: "Provider & User",
              collapsed: false,
              items: [
                {
                  text: "Discover",
                  collapsed: false,
                  items: [
                    { text: "Model Marketplace", link: "/usermanual/model-services/user/discover/models/" },
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
                    { text: "Model Earnings", link: "/usermanual/model-services/user/usage-revenue/revenue/" },
                    { text: "Model Usage", link: "/usermanual/model-services/user/usage-revenue/usage/" },
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
            {
              text: "Operator",
              collapsed: false,
              items: [
                {
                  text: "Settings",
                  collapsed: false,
                  items: [
                    { text: "Meta-models", link: "/usermanual/model-services/operator/settings/meta-models/" },
                    { text: "Model Source", link: "/usermanual/model-services/operator/settings/model-source/" },
                    { text: "Model Templates", link: "/usermanual/model-services/operator/settings/model-templates/" },
                    { text: "Tags", link: "/usermanual/model-services/operator/settings/tags/" },
                    { text: "Currency Settings", link: "/usermanual/model-services/operator/settings/currency-settings/" },
                  ]
                },
                {
                  text: "Publishing",
                  collapsed: false,
                  items: [
                    { text: "Apps", link: "/usermanual/model-services/operator/publishing/apps/" },
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
          ]
        },
        {
          text: "AI Infra on Cloud",
          collapsed: false,
          items: [
            {
              text: "User",
              collapsed: false,
              items: [
                {
                  text: "Model Services",
                  collapsed: false,
                  items: [
                    { text: "Quick Deploy", link: "/usermanual/ai-infra-on-cloud/user/model-services/quick-deployment/" },
                    { text: "My Deployments", link: "/usermanual/ai-infra-on-cloud/user/model-services/my-deployments/" },
                  ]
                },
                {
                  text: "Access Management",
                  collapsed: false,
                  items: [
                    { text: "Access Management", link: "/usermanual/ai-infra-on-cloud/user/access-management/access-accounts/" },
                  ]
                },
              ]
            },
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
                    { text: "Access CloudType", link: "/usermanual/ai-infra-on-cloud/operator/access-management/access-cloudtype/" },
                    { text: "Resource Pools", link: "/usermanual/ai-infra-on-cloud/operator/access-management/resource-pools/" },
                    { text: "Cloud Accounts", link: "/usermanual/ai-infra-on-cloud/operator/access-management/cloud-accounts/" },
                  ]
                },
                {
                  text: "Auth Management",
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
          ]
        },
        {
          text: "AI Infra on Prem",
          collapsed: false,
          items: [
            { text: "Overview", link: "/usermanual/ai-infra-on-prem/" },
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
                  ],
                },
                {
                  text: "Image & Storage Services",
                  collapsed: false,
                  items: [
                    { text: "Image Services", link: "/usermanual/ai-infra-on-prem/operator/storage/image-services/" },
                    { text: "Object Storage", link: "/usermanual/ai-infra-on-prem/operator/storage/object-storage/" },
                    { text: "Block Storage", link: "/usermanual/ai-infra-on-prem/operator/storage/block-storage/" },
                    { text: "File Storage", link: "/usermanual/ai-infra-on-prem/operator/storage/file-storage/" },
                  ],
                },
                {
                  text: "Templates",
                  collapsed: false,
                  items: [
                    { text: "Frames", link: "/usermanual/ai-infra-on-prem/operator/templates/frames/" },
                    { text: "Models", link: "/usermanual/ai-infra-on-prem/operator/templates/models/" },
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
                {
                  text: "Quick Start",
                  collapsed: false,
                  items: [
                    { text: "Overview", link: "/usermanual/ai-infra-on-prem/user/quick-start/overview/" },
                    { text: "Inference Templates", link: "/usermanual/ai-infra-on-prem/user/quick-start/inference-templates/" },
                  ],
                },
                {
                  text: "Online Inference",
                  collapsed: false,
                  items: [
                    { text: "Online Inference", link: "/usermanual/ai-infra-on-prem/user/online-inference/online-inference/" },
                  ],
                },
                {
                  text: "Development",
                  collapsed: false,
                  items: [
                    { text: "Dev Environments", link: "/usermanual/ai-infra-on-prem/user/dev-environments/dev-environments/" },
                    { text: "Model Training", link: "/usermanual/ai-infra-on-prem/user/model-training/model-training/" },
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
                  text: "Quotas & Usage",
                  collapsed: false,
                  items: [
                    { text: "Usage", link: "/usermanual/ai-infra-on-prem/user/quotas-usage/usage/" },
                    { text: "Quotas", link: "/usermanual/ai-infra-on-prem/user/quotas-usage/quotas/" },
                    { text: "Top-up Records", link: "/usermanual/ai-infra-on-prem/user/quotas-usage/top-up-records/" },
                  ],
                },
              ],
            },
          ],
        }
      ]
    }
  ],
  "/practices/technical/": [
    {
      text: "Technical Practices",
      collapsed: false,
      items: [
        {
          text: "AI Coding Integration",
          collapsed: false,
          items: [
            { text: "CherryStudio", link: "/practices/technical/CherryStudio/" },
            { text: "claudeCode", link: "/practices/technical/claudeCode/" },
            { text: "ClaudeCode-plugin", link: "/practices/technical/ClaudeCode-plugin/" },
            { text: "Cline", link: "/practices/technical/Cline/" },
            { text: "Codex", link: "/practices/technical/Codex/" },
            { text: "Crush", link: "/practices/technical/Crush/" },
            { text: "Cursor", link: "/practices/technical/Cursor/" },
            { text: "dify", link: "/practices/technical/dify/" },
            { text: "KiloCode", link: "/practices/technical/KiloCode/" },
            { text: "n8n", link: "/practices/technical/n8n/" },
            { text: "open-webui", link: "/practices/technical/open-webui/" },
            { text: "openclaw", link: "/practices/technical/openclaw/" },
            { text: "OpenCode", link: "/practices/technical/OpenCode/" },
            { text: "RooCode", link: "/practices/technical/RooCode/" },
          ]
        },
      ]
    }
  ],
  "/practices/project/": [
    {
      text: "Project Practices",
      collapsed: false,
      items: [
        { text: "Multi-Compute Pool Heterogeneous Inference Scheduling Best Practice", link: "/practices/project/multi-compute-pool-heterogeneous-inference-scheduling" }
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
      text: "Update Notes",
      link: "/others/release-notes/",
      collapsed: false,
    }
  ],
}
