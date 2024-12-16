import { DefaultTheme } from 'vitepress'

export default {
  '/server/linux/': [
    {
      text: 'Linux',
      items: [
        { text: 'linux 操作系统', link: '/server/linux/01.Linux操作系统.md' },
        { text: '远程连接', link: '/server/linux/02.远程连接.md' },
        { text: '文件目录操作', link: '/server/linux/03.文件目录操作.md' },
      ],
    },
  ],
} as DefaultTheme.Sidebar
