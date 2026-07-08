import type { UserConfig } from 'vitepress'

const googleAnalyticsId = 'G-H60V3SBCER'

export const baseConfig: UserConfig = {
  title: 'AGIOne Docs',
  description: 'AI Gateway Platform Documentation',
  base: "/docs",
  head: [
    [
      'script',
      {
        async: '',
        src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
      },
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleAnalyticsId}');
      `,
    ],
  ],
}
