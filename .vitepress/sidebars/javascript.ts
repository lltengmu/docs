import { DefaultTheme } from 'vitepress'

export default {
  '/front-end/javascript': [
    {
      text: '知识点',
      items: [
        { text: '正则表达式', link: '/front-end/javascript/01.正则表达式.md' },
        { text: '防抖节流', link: '/front-end/javascript/02.防抖节流.md' },
      ],
    },
  ],
} as DefaultTheme.Sidebar
