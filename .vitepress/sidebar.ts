import { DefaultTheme } from "vitepress";

export default {
  "/git/": [
    {
      text: "git",
      items: [
        { text: "git 打标签的一般流程", link: "/git/index" },
        { text: "git 配置两个ssh密钥", link: "/git/git 配置两个ssh 密钥" },
      ],
    },
  ],
  "/mysql/": [
    {
      text: "Mysql",
      items: [
        { text: "认识Mysql", link: "/mysql/index" },
        { text: "基础语句", link: "/mysql/基础语句大全" },
        { text: "多表查询", link: "/mysql/多表查询" },
        { text: "事务处理", link: "/mysql/事务处理" },
        { text: "锁机制", link: "/mysql/锁机制" },
      ],
    },
  ],
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
      text: "api",
      items: [
        { text: "forwardRef", link: "/react/api/forwardRef" },
        { text: "lazy", link: "/react/api/lazy" },
        { text: "memo", link: "/react/api/memo" },
      ],
    },
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
            {
              text: "useTransition",
              link: "/react/hooks/数据状态/useTransition",
            },
            {
              text: "useDeferredValue",
              link: "/react/hooks/数据状态/useDeferredValue",
            },
          ],
        },
        {
          text: "副作用",
          items: [
            { text: "useEffect", link: "/react/hooks/副作用/useEffect" },
            {
              text: "useLayoutEffect",
              link: "/react/hooks/副作用/useLayoutEffect",
            },
            {
              text: "useInsertionEffect",
              link: "/react/hooks/副作用/useInsertionEffect",
            },
          ],
        },
        {
          text: "状态传递",
          items: [
            { text: "useRef", link: "/react/hooks/状态传递/useRef" },
            {
              text: "useImperativeHandle",
              link: "/react/hooks/状态传递/useImperativeHandle",
            },
            {
              text: "useContext",
              link: "/react/hooks/状态传递/useContext",
            },
          ],
        },
        {
          text: "性能优化",
          items: [
            { text: "useMemo", link: "/react/hooks/性能优化/useMemo" },
            { text: "useCallback", link: "/react/hooks/性能优化/useCallback" },
          ],
        },
        {
          text: "其他hook",
          items: [
            {
              text: "useDebugValue",
              link: "/react/hooks/其他hook/useDebugValue",
            },
            { text: "useId", link: "/react/hooks/其他hook/useId" },
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
      text: "设计模式简介",
      link: "/Design-Patterns/01.设计模式简介",
      items: [
        {
          text: "设计模式",
          items: [
            {
              text: "命令模式",
              link: "/Design-Patterns/design-patterns/命令模式",
            },
            {
              text: "工厂模式",
              link: "/Design-Patterns/design-patterns/工厂模式",
            },
            {
              text: "享元模式",
              link: "/Design-Patterns/design-patterns/享元模式",
            },
          ],
        },
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
