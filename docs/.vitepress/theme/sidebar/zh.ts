import type { DefaultTheme } from 'vitepress'

export const zhSidebar: DefaultTheme.Sidebar = {
  '/zh/presales/': [
    {
      text: '售前资料',
      collapsed: false,
      items: [
        { text: '概述', link: '/zh/presales/' },
        { text: '功能清单', link: '/zh/presales/feature-list' },
        { text: '兼容性说明', link: '/zh/presales/compatibility' },
        { text: '网络要求', link: '/zh/presales/network' },
        { text: '配置清单', link: '/zh/presales/config-sheet' },
        { text: '白皮书', link: '/zh/presales/whitepaper' },
      ],
    },
    {
      text: '最佳实践',
      collapsed: false,
      items: [
        { text: '概述', link: '/zh/presales/best-practices/' },
        { text: '配置实践', link: '/zh/presales/best-practices/configuration' },
        { text: '部署实践', link: '/zh/presales/best-practices/deployment' },
        { text: '项目实践', link: '/zh/presales/best-practices/project' },
      ],
    },
    {
      text: '调查问卷',
      collapsed: true,
      items: [
        { text: '需求调查', link: '/zh/presales/survey/requirement-survey' },
      ],
    },
  ],

  '/zh/solution/': [
    {
      text: '方案设计',
      collapsed: false,
      items: [
        { text: '概述', link: '/zh/solution/' },
        { text: '高层架构设计', link: '/zh/solution/architecture-hld' },
        { text: '容量规划', link: '/zh/solution/capacity-plan' },
        { text: '安全设计', link: '/zh/solution/security-design' },
      ],
    },
  ],

  '/zh/deployment/': [
    {
      text: '交付部署',
      collapsed: false,
      items: [
        { text: '概述', link: '/zh/deployment/' },
        { text: '部署前检查', link: '/zh/deployment/precheck' },
        { text: '安装指南', link: '/zh/deployment/installation' },
        { text: 'GPU 配置', link: '/zh/deployment/gpu-config' },
        { text: '模型部署', link: '/zh/deployment/model-deploy' },
        { text: '系统配置', link: '/zh/deployment/configuration' },
        { text: '性能调优', link: '/zh/deployment/tuning' },
        { text: '验收测试', link: '/zh/deployment/acceptance' },
      ],
    },
  ],

  '/zh/operations/': [
    {
      text: '运维运营',
      collapsed: false,
      items: [
        { text: '概述', link: '/zh/operations/' },
        { text: '许可证管理', link: '/zh/operations/license' },
        { text: '用户手册', link: '/zh/operations/user-manual' },
        { text: '运维手册', link: '/zh/operations/ops-manual' },
        { text: 'API 指南', link: '/zh/operations/api-guide' },
        { text: 'SDK 示例', link: '/zh/operations/sdk-examples' },
        { text: '监控告警', link: '/zh/operations/monitoring' },
        { text: '备份恢复', link: '/zh/operations/backup-restore' },
        { text: '版本说明', link: '/zh/operations/release-notes' },
      ],
    },
  ],

  '/zh/troubleshooting/': [
    {
      text: '排错支持',
      collapsed: false,
      items: [
        { text: '概述', link: '/zh/troubleshooting/' },
        { text: '常见问题', link: '/zh/troubleshooting/faq' },
        { text: '故障诊断', link: '/zh/troubleshooting/fault-diagnosis' },
        { text: '支持 SOP', link: '/zh/troubleshooting/support-sop' },
      ],
    },
  ],

  '/zh/oem/': [
    {
      text: 'OEM 配置',
      collapsed: false,
      items: [
        { text: '概述', link: '/zh/oem/' },
        { text: 'OEM 配置指南', link: '/zh/oem/oem-config' },
      ],
    },
  ],
}
