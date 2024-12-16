export default {
  '/front-end/react/': [
    {
      text: 'api',
      items: [
        { text: 'forwardRef', link: '/front-end/react/api/forwardRef' },
        { text: 'lazy', link: '/front-end/react/api/lazy' },
        { text: 'memo', link: '/front-end/react/api/memo' },
      ],
    },
    {
      text: 'Hooks',
      items: [
        {
          text: '数据状态',
          items: [
            { text: 'useState', link: '/front-end/react/hooks/数据状态/useState' },
            { text: 'useReducer', link: '/front-end/react/hooks/数据状态/useReducer' },
            {
              text: 'useSyncExternalStore',
              link: '/front-end/react/hooks/数据状态/useSyncExternalStore',
            },
            {
              text: 'useTransition',
              link: '/front-end/react/hooks/数据状态/useTransition',
            },
            {
              text: 'useDeferredValue',
              link: '/front-end/react/hooks/数据状态/useDeferredValue',
            },
          ],
        },
        {
          text: '副作用',
          items: [
            { text: 'useEffect', link: '/front-end/react/hooks/副作用/useEffect' },
            {
              text: 'useLayoutEffect',
              link: '/front-end/react/hooks/副作用/useLayoutEffect',
            },
            {
              text: 'useInsertionEffect',
              link: '/front-end/react/hooks/副作用/useInsertionEffect',
            },
          ],
        },
        {
          text: '状态传递',
          items: [
            { text: 'useRef', link: 'front-end/react/hooks/状态传递/useRef' },
            {
              text: 'useImperativeHandle',
              link: 'front-end/react/hooks/状态传递/useImperativeHandle',
            },
            {
              text: 'useContext',
              link: 'front-end/react/hooks/状态传递/useContext',
            },
          ],
        },
        {
          text: '性能优化',
          items: [
            { text: 'useMemo', link: '/front-end/react/hooks/性能优化/useMemo' },
            { text: 'useCallback', link: '/front-end/react/hooks/性能优化/useCallback' },
          ],
        },
        {
          text: '其他hook',
          items: [
            {
              text: 'useDebugValue',
              link: '/front-end/react/hooks/其他hook/useDebugValue',
            },
            { text: 'useId', link: '/front-end/react/hooks/其他hook/useId' },
          ],
        },
      ],
    },
  ],
}
