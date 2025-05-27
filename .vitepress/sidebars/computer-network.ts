import { DefaultTheme } from 'vitepress'

export default {
  '/web-development-basics/computer-network/': [
    {
      text: '计算机网络',
      items: [
        {
          text: '概述',
          items: [
            {
              text: '互联网的概述',
              link: '/web-development-basics/computer-network/概述/01.互联网的概述.md',
            },
            {
              text: '互联网的核心部分',
              link: '/web-development-basics/computer-network/概述/02.互联网的核心部分',
            },
            {
              text: '计算机网络的分类',
              link: '/web-development-basics/computer-network/概述/03.计算机网络的分类',
            },
            {
              text: '网络的性能指标',
              link: '/web-development-basics/computer-network/概述/04.网络的性能指标',
            },
            {
              text: '计算机网络的分层结构',
              link: '/web-development-basics/computer-network/概述/05.计算机网络的分层结构',
            },
          ],
        },
        {
          text: '物理层',
          items: [
            {
              text: '基本概念',
              link: '/web-development-basics/computer-network/物理层/01.基本概念.md',
            },
            {
              text: '数据通信基础知识',
              link: '/web-development-basics/computer-network/物理层/02.数据通信基础知识.md',
            },
            {
              text: '奈氏准则和香农定理',
              link: '/web-development-basics/computer-network/物理层/03.奈氏准则和香农定理.md',
            },
            {
              text: '编码和调制',
              link: '/web-development-basics/computer-network/物理层/04.编码和调制.md',
            },
            {
              text: '传输介质',
              link: '/web-development-basics/computer-network/物理层/05.传输介质.md',
            },
            {
              text: '物理层设备',
              link: '/web-development-basics/computer-network/物理层/06.物理层设备.md',
            },
          ],
        },
        {
          text: '数据链路层',
          items: [
            {
              text: '知识点',
              link: '/web-development-basics/computer-network/数据链路层/index.md',
            },
            {
              text: '题目',
            },
          ],
        },
        {
          text: '网络层',
          items: [
            {
              text: '知识点',
              link: '/web-development-basics/computer-network/网络层/index.md',
            },
            {
              text: '题目',
            },
          ],
        },
      ],
    },
  ],
} as DefaultTheme.Sidebar
