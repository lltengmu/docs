import { DefaultTheme } from "vitepress";

export default {
  "/typescript/": [
    {
      text: "typescript",
      items: [
        { text: "基础类型", link: "/typescript/01.基础类型" },
        { text: "类和接口", link: "/typescript/02.类和接口" },
        { text: "泛型", link: "/typescript/03.泛型" },
        { text: "断言", link: "/typescript/04.断言" },
        { text: "装饰器", link: "/typescript/05.装饰器" },
        { text: "类型工具", link: "/typescript/06.类型工具" },
      ],
    },
  ],
  "/react/": [
    {
      text: "Hooks",
      items: [
        {
          text: "数据状态",
          items: [
            { text: "useState", link: "/react/hooks/数据状态/useState" },
            { text: "useReducer", link: "/react/hooks/数据状态/useReducer" },
            {
              text: "useSyncExternalStore",
              link: "/react/hooks/数据状态/useSyncExternalStore",
            },
          ],
        },
      ],
    },
  ],
  "/zustand/": [
    {
      text: "zustand",
      items: [{ text: "快速入门", link: "/zustand/index" }],
    },
  ],
  "/canvas/": [
    {
      text: "canvas",
      items: [
        { text: "canvas 基础", link: "/canvas/01.canvas" },
        { text: "绘制图形", link: "/canvas/02.绘制图形" },
        { text: "图形样式", link: "/canvas/03.图形样式" },
        { text: "绘制文本", link: "/canvas/04.绘制文本" },
        { text: "变形操作", link: "/canvas/05.变形操作" },
        { text: "组合", link: "/canvas/06.组合" },
        { text: "动画", link: "/canvas/07.动画" },
      ],
    },
  ],
  "/Design-Patterns/": [
    {
      text: "设计模式",
      items: [
        { text: "设计模式简介", link: "/Design-Patterns/01.设计模式简介" },
      ],
    },
  ],
  "/Data-Structures-And-Algorithms/": [
    {
      text: "数据结构与算法简介",
      link: "/Data-Structures-And-Algorithms/01.数据结构与算法简介",
      items: [
        {
          text: "数据结构",
          items: [
            {
              text: "栈",
              link: "/Data-Structures-And-Algorithms/数据结构/01.栈",
            },
            {
              text: "链表",
              link: "/Data-Structures-And-Algorithms/数据结构/02.链表",
            },
          ],
        },
        {
          text: "算法",
          items: [
            {
              text: "算法介绍",
              link: "/Data-Structures-And-Algorithms/算法/01.算法介绍",
            },
          ],
        },
      ],
    },
  ],
} as DefaultTheme.Sidebar;
