import { DefaultTheme } from 'vitepress'

export default {
  '/server/linux/': [
    {
      text: 'Linux',
      items: [
        { text: '操作系统', link: '/server/linux/01.Linux操作系统.md' },
        { text: '远程连接', link: '/server/linux/02.远程连接.md' },
        { text: '文件目录', link: '/server/linux/03.文件目录操作.md' },
        { text: '目录结构', link: '/server/linux/04.Linux 目录文件结构.md' },
        { text: '用户(组)管理', link: '/server/linux/05.用户和用户组管理.md' },
        { text: '文件权限', link: '/server/linux/06.文件权限管理.md' },
        { text: 'Shell指令', link: '/server/linux/07.Linux Shell.md' },
        { text: '输入输出', link: '/server/linux/08.Linux 输入输出重定向.md' },
        { text: '文件压缩', link: '/server/linux/09.Linux 文件压缩.md' },
        { text: '文件传输', link: '/server/linux/10.文件传输.md' },
        { text: '软件安装', link: '/server/linux/11.linux 系统软件的安装.md' },
        { text: '文件查找', link: '/server/linux/12.文件查找.md' },
        { text: '进程管理', link: '/server/linux/13.进程管理.md' },
        { text: '定时任务', link: '/server/linux/14.定时任务.md' },
        { text: '系统优化', link: '/server/linux/15.系统优化.md' },
        { text: '服务管理', link: '/server/linux/16.服务管理.md' },
        { text: '特殊符号', link: '/server/linux/17.特殊符号.md' },
        { text: '三剑客', link: '/server/linux/18.三剑客.md' },
        { text: '运行级别', link: '/server/linux/19.运行级别.md' },
        { text: '特殊权限', link: '/server/linux/20.特殊权限.md' },
      ],
    },
  ],
} as DefaultTheme.Sidebar
