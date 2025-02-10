import { DefaultTheme } from 'vitepress'

export default {
  '/server/php/': [
    {
      text: 'php',
      items: [
        { text: 'jwt', link: '/server/php/01.jwt.md' },
        { text: 'composer', link: '/server/php/02.composer.md' },
      ],
    },
  ],
} as DefaultTheme.Sidebar
