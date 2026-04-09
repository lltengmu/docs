import { DefaultTheme } from 'vitepress'

export default {
  '/server/nginx/': [
    {
      text: 'nginx',
      items: [
        { text: '简介', link: '/server/nginx/nginx-introduction.md' },
        { text: '入门', link: '/server/nginx/nginx-quikstart.md' },
        { text: '配置', link: '/server/nginx/nginx-configuration.md' },
        { text: '常见问题', link: '/server/nginx/nginx-faq.md' },
      ],
    },
  ],
} as DefaultTheme.Sidebar
