import type { DefaultTheme } from 'vitepress'

export const zhSidebar: DefaultTheme.Sidebar = {
  '/zh/product/': [
    {
      text: '产品概述',
      collapsed: false,
      items: [
        { text: '概述', link: '/zh/product/technical/overview' },
        { text: '功能与能力', link: '/zh/product/technical/features' },
        { text: '网络规划', link: '/zh/product/technical/network' },
        { text: '技术亮点', link: '/zh/product/technical/tech-highlights' },
      ],
    },
    {
      text: '账号与权限模型',
      collapsed: false,
      items: [
        { text: '用户、租户与角色设计逻辑', link: '/zh/product/identity-access-model' },
        { text: '角色对比总览', link: '/zh/product/role-comparison' },
      ],
    },
    {
      text: '兼容性与限制',
      collapsed: false,
      items: [
        { text: '纳管芯片', link: '/zh/product/limitations/chips' },
        { text: '支持矩阵', link: '/zh/product/limitations/support-matrix' },
        { text: '其他限制', link: '/zh/product/limitations/limitations' },
      ],
    },
    {
      text: '售前调研',
      collapsed: false,
      items: [
        { text: '需求快速调研', link: '/zh/product/investigation/quick-requirement-investigation' },
        { text: '环境快速调研', link: '/zh/product/investigation/quick-env-investigation' },
      ],
    },
  ],
  '/zh/installation/': [
    {
      text: '安装部署',
      collapsed: false,
      items: [
        { text: '部署综述', link: '/zh/installation/agione-deployment-requirements' },
        { text: '安装前环境预检', link: '/zh/installation/agione-precheck-environment-check' },
        { text: '环境安装部署指南', link: '/zh/installation/agione-quick-install' },
        { text: '多节点环境安装部署', link: '/zh/installation/agione-multi-node-install' },
        { text: '安装配置文件字段说明', link: '/zh/installation/agione-install-config-reference' },
        { text: '节点纳管-部署配置要求', link: '/zh/installation/deployment-requirements-for-managing-compute-nodes' },
        { text: '节点纳管-快速安装指南', link: '/zh/installation/quick-install-for-managing-compute-nodes' },
      ],
    },
  ],

  '/zh/license/': [
    {
      text: '购买与激活',
      collapsed: false,
      items: [
        { text: '在线支付与激活', link: '/zh/license/online-payment-activation' },
        { text: '激活码与激活', link: '/zh/license/activation-code-activation' },
      ],
    },
  ],

  '/zh/userguide/': [
    {
      text: '用户指南',
      collapsed: false,
      items: [
        { text: '场景导航', link: '/zh/userguide/scenarios' },
        {
          text: '场景操作指南',
          collapsed: false,
          items: [
            { text: '注册 & 登录', link: '/zh/userguide/scenarios/register-login/' },
            { text: '身份授权', link: '/zh/userguide/scenarios/identity-authorization/' },
            {
              text: '发布模型',
              collapsed: false,
              items: [
                { text: '场景概览', link: '/zh/userguide/scenarios/publish-model/' },
                { text: '发布公有模型', link: '/zh/userguide/scenarios/publish-model/provider-quick-guide' },
                { text: '发布多模态（对话）模型', link: '/zh/userguide/scenarios/publish-model/Multimodal/' },
                { text: '发布嵌入模型', link: '/zh/userguide/scenarios/publish-model/Embedding/' },
                { text: '发布图片模型', link: '/zh/userguide/scenarios/publish-model/Image/' },
                { text: '发布语音模型', link: '/zh/userguide/scenarios/publish-model/Speech/' },
                { text: '发布视频模型', link: '/zh/userguide/scenarios/publish-model/Video/' },
              ],
            },
            {
              text: '发布模型（预设置）',
              collapsed: false,
              items: [
                { text: '场景概览', link: '/zh/userguide/scenarios/publish-model-preconfiguration/' },
                { text: '模型发布：预配置说明', link: '/zh/userguide/scenarios/publish-model-preconfiguration/model-publishing-preconfiguration' },
              ],
            },
            { text: '发布聚合模型', link: '/zh/userguide/scenarios/publish-aggregation-model/' },
            {
              text: '模型的体验与调用',
              collapsed: false,
              items: [
                { text: '场景概览', link: '/zh/userguide/scenarios/model-experience-api-calling/' },
                { text: '用户快速指引', link: '/zh/userguide/scenarios/model-experience-api-calling/user-quick-guide' },
              ],
            },
            { text: '模型的消费与收益', link: '/zh/userguide/scenarios/model-usage-revenue/' },
            { text: '充值 & 计费', link: '/zh/userguide/scenarios/recharge-billing/' },
            { text: 'On-Prem 算力纳管', link: '/zh/userguide/scenarios/on-prem-compute-onboarding/' },
            { text: 'On-Prem 推理模板构建', link: '/zh/userguide/scenarios/on-prem-inference-template/' },
            { text: 'On-Prem 模型部署与状态检查', link: '/zh/userguide/scenarios/on-prem-model-deployment-status/' },
            { text: 'On-Prem 开发训练与资产沉淀', link: '/zh/userguide/scenarios/on-prem-dev-training-assets/' },
            { text: 'On-Prem 资源计量与监控', link: '/zh/userguide/scenarios/on-prem-resource-metering-monitoring/' },
            { text: 'On Cloud 云资源接入', link: '/zh/userguide/scenarios/on-cloud-resource-access/' },
            { text: 'On Cloud 模型资产上架', link: '/zh/userguide/scenarios/on-cloud-model-asset-publishing/' },
            { text: 'On Cloud 模型部署与调用', link: '/zh/userguide/scenarios/on-cloud-model-deployment-calling/' },
            { text: '模型发布审批', link: '/zh/userguide/scenarios/model-publishing-approval/' },
            { text: '可观测与问题排查', link: '/zh/userguide/scenarios/observability-troubleshooting/' },
            { text: '平台治理与访问控制', link: '/zh/userguide/scenarios/platform-governance-access-control/' },
          ],
        },
      ],
    },
  ],

  '/zh/usermanual/': [
    {
      text: '用户手册',
      collapsed: false,
      items: [
        {
          text: '模型及AI服务',
          collapsed: false,
          items: [
            {
              text: '模型提供方&用户',
              collapsed: false,
              items: [
                {
                  text: '发现',
                  collapsed: false,
                  items: [
                    { text: '模型市场', link: '/zh/usermanual/model-services/user/discover/models/' },
                  ]
                },
                {
                  text: '体验中心',
                  collapsed: false,
                  items: [
                    { text: '文本对话', link: '/zh/usermanual/model-services/user/playground/text/' },
                    { text: '图像生成', link: '/zh/usermanual/model-services/user/playground/images/' },
                    { text: '视频', link: '/zh/usermanual/model-services/user/playground/video/' },
                    { text: '语音生成', link: '/zh/usermanual/model-services/user/playground/audio/' },
                  ]
                },
                {
                  text: '创作空间',
                  collapsed: false,
                  items: [
                    { text: '我的模型', link: '/zh/usermanual/model-services/user/studio/my-models/' },
                  ]
                },
                {
                  text: '用量与收益',
                  collapsed: false,
                  items: [
                    { text: '模型收益', link: '/zh/usermanual/model-services/user/usage-revenue/revenue/' },
                    { text: '用量明细', link: '/zh/usermanual/model-services/user/usage-revenue/usage/' },
                  ]
                },
                {
                  text: '我的调用',
                  collapsed: false,
                  items: [
                    { text: '概览', link: '/zh/usermanual/model-services/user/my-calls/overview/' },
                    { text: '调用统计', link: '/zh/usermanual/model-services/user/my-calls/call-analytics/' },
                    { text: '调用日志', link: '/zh/usermanual/model-services/user/my-calls/call-logs/' },
                  ]
                },
                {
                  text: '客户调用',
                  collapsed: false,
                  items: [
                    { text: '概览', link: '/zh/usermanual/model-services/user/customer-calls/overview/' },
                    { text: '调用统计', link: '/zh/usermanual/model-services/user/customer-calls/call-analytics/' },
                    { text: '调用日志', link: '/zh/usermanual/model-services/user/customer-calls/call-logs/' },
                  ]
                },
              ]
            },
            {
              text: '运营管理员',
              collapsed: false,
              items: [
                {
                  text: '设置',
                  collapsed: false,
                  items: [
                    { text: '元模型', link: '/zh/usermanual/model-services/operator/settings/meta-models/' },
                    { text: '模型来源', link: '/zh/usermanual/model-services/operator/settings/model-source/' },
                    { text: '模板', link: '/zh/usermanual/model-services/operator/settings/model-templates/' },
                    { text: '标签', link: '/zh/usermanual/model-services/operator/settings/tags/' },
                    { text: '币种设置', link: '/zh/usermanual/model-services/operator/settings/currency-settings/' },
                  ]
                },
                {
                  text: '发布',
                  collapsed: false,
                  items: [
                    { text: '应用列表', link: '/zh/usermanual/model-services/operator/publishing/apps/' },
                  ]
                },
                {
                  text: '审批',
                  collapsed: false,
                  items: [
                    { text: '模型审核', link: '/zh/usermanual/model-services/operator/approvals/model-reviews/' },
                    { text: '应用审核', link: '/zh/usermanual/model-services/operator/approvals/app-reviews/' },
                  ]
                },
              ]
            },
          ]
        },
        {
          text: '多云调度平台',
          collapsed: false,
          items: [
            {
              text: '用户',
              collapsed: false,
              items: [
                {
                  text: '模型服务',
                  collapsed: false,
                  items: [
                    { text: '快速部署', link: '/zh/usermanual/ai-infra-on-cloud/user/model-services/quick-deployment/' },
                    { text: '我的部署', link: '/zh/usermanual/ai-infra-on-cloud/user/model-services/my-deployments/' },
                  ]
                },
                {
                  text: '访问管理',
                  collapsed: false,
                  items: [
                    { text: '接入管理', link: '/zh/usermanual/ai-infra-on-cloud/user/access-management/access-accounts/' },
                  ]
                },
              ]
            },
            {
              text: '运营管理员',
              collapsed: false,
              items: [
                {
                  text: '接入工作台',
                  collapsed: false,
                  items: [
                    { text: '接入总览', link: '/zh/usermanual/ai-infra-on-cloud/operator/access-workbench/access-overview/' },
                    { text: '快速接入', link: '/zh/usermanual/ai-infra-on-cloud/operator/access-workbench/quick-start/' },
                  ]
                },
                {
                  text: '接入管理',
                  collapsed: false,
                  items: [
                    { text: '接入云平台', link: '/zh/usermanual/ai-infra-on-cloud/operator/access-management/access-cloudtype/' },
                    { text: '接入资源池', link: '/zh/usermanual/ai-infra-on-cloud/operator/access-management/resource-pools/' },
                    { text: '接入账号', link: '/zh/usermanual/ai-infra-on-cloud/operator/access-management/cloud-accounts/' },
                  ]
                },
                {
                  text: '授权管理',
                  collapsed: false,
                  items: [
                    { text: '租户-云平台授权', link: '/zh/usermanual/ai-infra-on-cloud/operator/auth-management/tenant-cloud-auth/' },
                    { text: '业务-资源池授权', link: '/zh/usermanual/ai-infra-on-cloud/operator/auth-management/business-region-auth/' },
                  ]
                },
                {
                  text: '部署资产',
                  collapsed: false,
                  items: [
                    { text: '模型库', link: '/zh/usermanual/ai-infra-on-cloud/operator/deploy-assets/models/' },
                    { text: '推理框架', link: '/zh/usermanual/ai-infra-on-cloud/operator/deploy-assets/frameworks/' },
                    { text: '推理镜像', link: '/zh/usermanual/ai-infra-on-cloud/operator/deploy-assets/runtime-images/' },
                  ]
                },
                {
                  text: '调度治理',
                  collapsed: false,
                  items: [
                    { text: '策略管理', link: '/zh/usermanual/ai-infra-on-cloud/operator/scheduling-governance/policies/' },
                  ]
                },
              ]
            },
          ]
        },
        {
          text: '异构卡纳管',
          collapsed: false,
          items: [
            { text: '概览', link: '/zh/usermanual/ai-infra-on-prem/' },
            {
              text: '运营管理员',
              collapsed: false,
              items: [
                {
                  text: '资源池',
                  collapsed: false,
                  items: [
                    { text: '地域/可用区', link: '/zh/usermanual/ai-infra-on-prem/operator/resource-pools/regions-zones/' },
                    { text: '集群管理', link: '/zh/usermanual/ai-infra-on-prem/operator/resource-pools/clusters/' },
                    { text: '加速卡管理', link: '/zh/usermanual/ai-infra-on-prem/operator/resource-pools/accelerators/' },
                    { text: '规格指标', link: '/zh/usermanual/ai-infra-on-prem/operator/resource-pools/spec-metrics/' },
                    { text: '资源规格', link: '/zh/usermanual/ai-infra-on-prem/operator/resource-pools/resource-specs/' },
                  ],
                },
                {
                  text: '镜像与存储组件',
                  collapsed: false,
                  items: [
                    { text: '镜像组件', link: '/zh/usermanual/ai-infra-on-prem/operator/images/image-services/' },
                    { text: '对象存储组件', link: '/zh/usermanual/ai-infra-on-prem/operator/storage/object-storage/' },
                    { text: '块存储组件', link: '/zh/usermanual/ai-infra-on-prem/operator/storage/block-storage/' },
                    { text: '文件存储组件', link: '/zh/usermanual/ai-infra-on-prem/operator/storage/file-storage/' },
                  ],
                },
                {
                  text: '模板',
                  collapsed: false,
                  items: [
                    { text: '框架配置', link: '/zh/usermanual/ai-infra-on-prem/operator/templates/frames/' },
                    { text: '模型配置', link: '/zh/usermanual/ai-infra-on-prem/operator/templates/models/' },
                    { text: '推理模板', link: '/zh/usermanual/ai-infra-on-prem/operator/templates/inference-templates/' },
                    { text: '显存计算', link: '/zh/usermanual/ai-infra-on-prem/operator/templates/vram-config/' },
                  ],
                },
                {
                  text: '配额&计量',
                  collapsed: false,
                  items: [
                    { text: '租户配额', link: '/zh/usermanual/ai-infra-on-prem/operator/quotas-metering/tenant-quotas/' },
                    { text: '租户额度', link: '/zh/usermanual/ai-infra-on-prem/operator/quotas-metering/tenant-credits/' },
                    { text: '月度计量', link: '/zh/usermanual/ai-infra-on-prem/operator/quotas-metering/monthly-usage/' },
                    { text: '计量明细', link: '/zh/usermanual/ai-infra-on-prem/operator/quotas-metering/metering-details/' },
                  ],
                },
                {
                  text: '监控',
                  collapsed: false,
                  items: [
                    { text: '统计概览', link: '/zh/usermanual/ai-infra-on-prem/operator/monitoring/overview/' },
                    { text: '集群统计', link: '/zh/usermanual/ai-infra-on-prem/operator/monitoring/clusters/' },
                    { text: '节点统计', link: '/zh/usermanual/ai-infra-on-prem/operator/monitoring/nodes/' },
                    { text: '设备监控', link: '/zh/usermanual/ai-infra-on-prem/operator/monitoring/devices/' },
                    { text: '作业监控', link: '/zh/usermanual/ai-infra-on-prem/operator/monitoring/jobs/' },
                  ],
                },
              ],
            },
            {
              text: '用户',
              collapsed: false,
              items: [
                {
                  text: '快速开始',
                  collapsed: false,
                  items: [
                    { text: '概览', link: '/zh/usermanual/ai-infra-on-prem/user/quick-start/overview/' },
                    { text: '部署模板', link: '/zh/usermanual/ai-infra-on-prem/user/quick-start/inference-templates/' },
                  ],
                },
                {
                  text: '在线推理',
                  collapsed: false,
                  items: [
                    { text: '在线推理', link: '/zh/usermanual/ai-infra-on-prem/user/online-inference/online-inference/' },
                  ],
                },
                {
                  text: '开发训练',
                  collapsed: false,
                  items: [
                    { text: '开发 IDE', link: '/zh/usermanual/ai-infra-on-prem/user/dev-environments/dev-environments/' },
                    { text: '模型训练', link: '/zh/usermanual/ai-infra-on-prem/user/model-training/model-training/' },
                  ],
                },
                {
                  text: '存储服务',
                  collapsed: false,
                  items: [
                    { text: '对象存储', link: '/zh/usermanual/ai-infra-on-prem/user/storage/object-storage/' },
                    { text: '块存储', link: '/zh/usermanual/ai-infra-on-prem/user/storage/block-storage/' },
                    { text: '文件存储', link: '/zh/usermanual/ai-infra-on-prem/user/storage/file-storage/' },
                  ],
                },
                {
                  text: '配额&用量',
                  collapsed: false,
                  items: [
                    { text: '资源用量', link: '/zh/usermanual/ai-infra-on-prem/user/quotas-usage/usage/' },
                    { text: '资源配额', link: '/zh/usermanual/ai-infra-on-prem/user/quotas-usage/quotas/' },
                    { text: '充值记录', link: '/zh/usermanual/ai-infra-on-prem/user/quotas-usage/top-up-records/' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  '/zh/practices/': [
    {
      text: '最佳实践',
      items: [
        {
          text: '技术实践',
          collapsed: false,
          items: [
            {
              text: 'AI 编码集成',
              collapsed: false,
              items: [
                { text: 'CherryStudio', link: '/zh/practices/technical/cherry-studio/' },
                { text: 'claudeCode', link: '/zh/practices/technical/claude-code/' },
                { text: 'ClaudeCode-plugin', link: '/zh/practices/technical/claude-code-plugin/' },
                { text: 'Cline', link: '/zh/practices/technical/cline/' },
                { text: 'Codex', link: '/zh/practices/technical/codex/' },
                { text: 'Crush', link: '/zh/practices/technical/crush/' },
                { text: 'Cursor', link: '/zh/practices/technical/cursor/' },
                { text: 'dify', link: '/zh/practices/technical/dify/' },
                { text: 'KiloCode', link: '/zh/practices/technical/kilo-code/' },
                { text: 'n8n', link: '/zh/practices/technical/n8n/' },
                { text: 'open-webui', link: '/zh/practices/technical/open-webui/' },
                { text: 'openclaw', link: '/zh/practices/technical/openclaw/' },
                { text: 'OpenCode', link: '/zh/practices/technical/open-code/' },
                { text: 'RooCode', link: '/zh/practices/technical/roo-code/' },
              ],
            },
          ],
        },
        {
          text: '项目实践',
          collapsed: false,
          items: [
            {
              text: '多算力池异构推理调度最佳实践',
              link: '/zh/practices/project/multi-compute-pool-heterogeneous-inference-scheduling',
            },
          ],
        },
      ],
    },
  ],
  '/zh/operations/admin-portal-manual/': [
    {
      text: '管理门户手册',
      collapsed: false,
      items: [
        { text: '用户管理', link: '/zh/operations/admin-portal-manual/user' },
      ],
    },
  ],
  '/zh/operations/om-guide/': [
    {
      text: '运维指南',
      collapsed: false,
      items: [
        { text: '用户管理', link: '/zh/operations/om-guide/user' },
      ],
    },
  ],
  '/zh/others/faq/': [
    {
      text: '常见问题（FAQ）',
      collapsed: false,
      items: [
        { text: '通用问题', link: '/zh/others/faq/general' },
        { text: '平台能力', link: '/zh/others/faq/platform' },
        { text: '算力调度', link: '/zh/others/faq/compute' },
        { text: '模型管理', link: '/zh/others/faq/model' },
        { text: '推理集成', link: '/zh/others/faq/inference' },
        { text: '运维安全', link: '/zh/others/faq/ops' },
      ],
    },
  ],
  '/zh/others/release-notes/': [
    {
      text: '更新说明',
      link: '/zh/others/release-notes/',
      collapsed: false,
    },
  ],
}
