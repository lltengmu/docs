import { DefaultTheme } from "vitepress";

export default [
  {
    text: "基础",
    items: [
      {
        text: "计算机基础",
        link: "",
      },
      {
        text: "Http 协议",
        link: "",
      },
      {
        text: "Html 基础",
        link: "",
      },
    ],
  },
  {
    text: "服务端文档",
    items: [
      {
        text: "Linux",
        link: "/linux/index.md",
      },
      {
        text: "Mysql",
        link: "/mysql/index.md",
      },
      {
        text: "Nginx",
        link: "/nginx/index.md",
      },
    ],
  },
  {
    text: "前端文档",
    items: [
      {
        text: "typescript",
        link: "/typescript/01.基础类型.md",
      },
      {
        text: "react",
        link: "/react/hooks/数据状态/useState",
      },
      {
        text: "zustand",
        link: "/zustand/index.md",
      },
      {
        text: "canvas",
        link: "/canvas/01.canvas.md",
      },
    ],
  },
  {
    text: "内功心法",
    items: [
      {
        text: "数据结构与算法",
        link: "/Data-Structures-And-Algorithms/01.数据结构与算法简介.md",
      },
      {
        text: "设计模式",
        link: "/Design-Patterns/01.设计模式简介.md",
      },
    ],
  },
  {
    text: "其他",
    items: [
      {
        text: "docker",
        link: "/docker/index.md",
      },
      {
        text: "git",
        link: "/git/index.md",
      },
    ],
  },
] as DefaultTheme.NavItem[];
