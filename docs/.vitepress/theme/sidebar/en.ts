import type { DefaultTheme } from 'vitepress'

export const enSidebar: DefaultTheme.Sidebar = {
  '/presales/': [
    {
      text: 'Pre-Sales',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/presales/' },
        { text: 'Feature List', link: '/presales/feature-list' },
        { text: 'Compatibility', link: '/presales/compatibility' },
        { text: 'Network Requirements', link: '/presales/network' },
        { text: 'Configuration Sheet', link: '/presales/config-sheet' },
        { text: 'Whitepaper', link: '/presales/whitepaper' },
      ],
    },
    {
      text: 'Best Practices',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/presales/best-practices/' },
        { text: 'Configuration', link: '/presales/best-practices/configuration' },
        { text: 'Deployment', link: '/presales/best-practices/deployment' },
        { text: 'Project', link: '/presales/best-practices/project' },
      ],
    },
    {
      text: 'Survey',
      collapsed: true,
      items: [
        { text: 'Requirement Survey', link: '/presales/survey/requirement-survey' },
      ],
    },
  ],

  '/solution/': [
    {
      text: 'Solution Design',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/solution/' },
        { text: 'High-Level Architecture', link: '/solution/architecture-hld' },
        { text: 'Capacity Planning', link: '/solution/capacity-plan' },
        { text: 'Security Design', link: '/solution/security-design' },
      ],
    },
  ],

  '/deployment/': [
    {
      text: 'Deployment Guide',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/deployment/' },
        { text: 'Pre-Check', link: '/deployment/precheck' },
        { text: 'Installation', link: '/deployment/installation' },
        { text: 'GPU Configuration', link: '/deployment/gpu-config' },
        { text: 'Model Deployment', link: '/deployment/model-deploy' },
        { text: 'System Configuration', link: '/deployment/configuration' },
        { text: 'Performance Tuning', link: '/deployment/tuning' },
        { text: 'Acceptance', link: '/deployment/acceptance' },
      ],
    },
  ],

  '/operations/': [
    {
      text: 'Operations Guide',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/operations/' },
        { text: 'License Management', link: '/operations/license' },
        { text: 'User Manual', link: '/operations/user-manual' },
        { text: 'Operations Manual', link: '/operations/ops-manual' },
        { text: 'API Guide', link: '/operations/api-guide' },
        { text: 'SDK Examples', link: '/operations/sdk-examples' },
        { text: 'Monitoring', link: '/operations/monitoring' },
        { text: 'Backup & Restore', link: '/operations/backup-restore' },
        { text: 'Release Notes', link: '/operations/release-notes' },
      ],
    },
  ],

  '/troubleshooting/': [
    {
      text: 'Troubleshooting',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/troubleshooting/' },
        { text: 'FAQ', link: '/troubleshooting/faq' },
        { text: 'Fault Diagnosis', link: '/troubleshooting/fault-diagnosis' },
        { text: 'Support SOP', link: '/troubleshooting/support-sop' },
      ],
    },
  ],

  '/oem/': [
    {
      text: 'OEM Configuration',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/oem/' },
        { text: 'OEM Config', link: '/oem/oem-config' },
      ],
    },
  ],
}
