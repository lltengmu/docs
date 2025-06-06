import { DefaultTheme } from 'vitepress'

export default [
  {
    text: '基础',
    items: [
      {
        text: '计算机基础',
        link: '/web-development-basics/computer-basics/01.前言.md',
      },
      {
        text: '计算机网络',
        link: '/web-development-basics/computer-network/概述/01.互联网的概述.md',
      },
      {
        text: 'HTTP',
        link: '/web-development-basics/http/01.基础知识.md',
      },
    ],
  },
  {
    text: '服务端文档',
    items: [
      {
        text: 'Linux',
        link: '/server/linux/01.Linux操作系统.md',
      },
      {
        text: 'Mysql',
        link: '/server/mysql/index.md',
      },
      {
        text: 'Nginx',
        link: '/server/nginx/index.md',
      },
      {
        text: 'php',
        link: '/server/php/01.jwt.md',
      },
    ],
  },
  {
    text: '前端文档',
    items: [
      {
        text: 'javascript',
        link: '/front-end/javascript/01.正则表达式.md',
      },
      {
        text: 'typescript',
        link: '/front-end/typescript/01.基础类型.md',
      },
      {
        text: 'react',
        link: '/front-end/react/hooks/数据状态/useState',
      },
      {
        text: 'zustand',
        link: '/front-end/zustand/index.md',
      },
      {
        text: 'canvas',
        link: '/front-end/canvas/01.canvas.md',
      },
      {
        text: 'vue',
        link: '/front-end/vue/02.vue响应式变更.md',
      },
    ],
  },
  {
    text: '内功心法',
    items: [
      {
        text: '数据结构与算法',
        link: '/internal-strength/Data-Structures-And-Algorithms/01.数据结构与算法简介.md',
      },
      {
        text: '设计模式',
        link: '/internal-strength/Design-Patterns/01.设计模式简介.md',
      },
    ],
  },
  {
    text: '工具软件',
    items: [
      {
        text: 'treerJs',
        link: '/tools/treer.md',
      },
    ],
  },
  {
    text: '题目',
    items: [
      {
        text: 'VUE',
        link: '/topic/vue.md',
      },
    ],
  },
  {
    text: '其他',
    items: [
      {
        text: 'docker',
        link: '/others/docker/index.md',
      },
      {
        text: 'git',
        link: '/others/git/index.md',
      },
    ],
  },
] as DefaultTheme.NavItem[]
