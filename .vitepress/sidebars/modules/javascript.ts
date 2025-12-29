import { DefaultTheme } from 'vitepress'

export default {
  '/javascript/': [
    {
      text: '前言',
      items: [
        { text: '前言', link: '/javascript/preface' },
      ],
    },
    {
      text: '基础知识',
      items: [
        { text: '导论', link: '/javascript/basic/introduction' },
        { text: '基本语法', link: '/javascript/basic/grammar' },
        { text: '发展历史', link: '/javascript/basic/history' },
      ],
    },
    {
      text: '数据类型',
      items: [
        { text: '概述', link: '/javascript/types/general' },
        { text: 'null, undefined 和布尔值', link: '/javascript/types/null-undefined-boolean' },
        { text: '数值', link: '/javascript/types/number' },
        { text: '字符串', link: '/javascript/types/string' },
        { text: '对象', link: '/javascript/types/object' },
        { text: '函数', link: '/javascript/types/function' },
        { text: '数组', link: '/javascript/types/array' },
      ],
    },
    {
      text: '运算符',
      items: [
        { text: '算术运算符', link: '/javascript/operators/arithmetic' },
        { text: '比较运算符', link: '/javascript/operators/comparison' },
        { text: '布尔运算符', link: '/javascript/operators/boolean' },
        { text: '位运算符', link: '/javascript/operators/bit' },
        { text: '运算符优先级', link: '/javascript/operators/priority' },
      ],
    },
    {
      text: '标准库',
      items: [
        { text: 'Object 对象', link: '/javascript/stdlib/object' },
        { text: '属性描述对象', link: '/javascript/stdlib/attributes' },
        { text: 'Array 对象', link: '/javascript/stdlib/array' },
        { text: '包装对象', link: '/javascript/stdlib/wrapper' },
        { text: 'Boolean 对象', link: '/javascript/stdlib/boolean' },
        { text: 'Number 对象', link: '/javascript/stdlib/number' },
        { text: 'String 对象', link: '/javascript/stdlib/string' },
        { text: 'Math 对象', link: '/javascript/stdlib/math' },
        { text: 'Date 对象', link: '/javascript/stdlib/date' },
        { text: 'RegExp 对象', link: '/javascript/stdlib/regexp' },
        { text: 'JSON 对象', link: '/javascript/stdlib/json' },
      ],
    },
    {
      text: '面向对象编程',
      items: [
        { text: '实例对象与 new 命令', link: '/javascript/oop/new' },
        { text: 'this 关键字', link: '/javascript/oop/this' },
        { text: '对象的继承', link: '/javascript/oop/prototype' },
        { text: 'Object 对象的相关方法', link: '/javascript/oop/object' },
        { text: '严格模式', link: '/javascript/oop/strict' },
      ],
    },
    {
      text: '异步操作',
      items: [
        { text: '概述', link: '/javascript/async/general' },
        { text: '定时器', link: '/javascript/async/timer' },
        { text: 'Promise 对象', link: '/javascript/async/promise' },
      ],
    },
    {
      text: 'DOM',
      items: [
        { text: '概述', link: '/javascript/dom/general' },
        { text: 'Node 接口', link: '/javascript/dom/node' },
        { text: 'NodeList 接口', link: '/javascript/dom/nodelist' },
        { text: 'ParentNode 接口', link: '/javascript/dom/parentnode' },
        { text: 'Document 节点', link: '/javascript/dom/document' },
        { text: 'Element 节点', link: '/javascript/dom/element' },
        { text: '属性的操作', link: '/javascript/dom/attributes' },
        { text: 'Text 节点和 DocumentFragment 节点', link: '/javascript/dom/text' },
        { text: 'CSS 操作', link: '/javascript/dom/css' },
        { text: 'Mutation Observer API', link: '/javascript/dom/mutationobserver' },
      ],
    },
    {
      text: 'BOM',
      items: [
        { text: '浏览器环境概述', link: '/javascript/bom/engine' },
        { text: 'window 对象', link: '/javascript/bom/window' },
        { text: 'Navigator 对象', link: '/javascript/bom/navigator' },
        { text: 'Cookie', link: '/javascript/bom/cookie' },
        { text: 'XMLHttpRequest 对象', link: '/javascript/bom/xmlhttprequest' },
        { text: '同源限制', link: '/javascript/bom/same-origin' },
        { text: 'CORS 通信', link: '/javascript/bom/cors' },
        { text: 'Storage 接口', link: '/javascript/bom/storage' },
        { text: 'History 对象', link: '/javascript/bom/history' },
        { text: 'Location 对象', link: '/javascript/bom/location' },
        { text: 'ArrayBuffer 对象', link: '/javascript/bom/arraybuffer' },
        { text: 'File 对象', link: '/javascript/bom/file' },
        { text: 'Form 对象', link: '/javascript/bom/form' },
        { text: 'IndexedDB API', link: '/javascript/bom/indexeddb' },
        { text: 'Web Worker', link: '/javascript/bom/webworker' },
      ],
    },
    {
      text: '事件',
      items: [
        { text: 'EventTarget 接口', link: '/javascript/events/eventtarget' },
        { text: '事件模型', link: '/javascript/events/model' },
        { text: 'Event 对象', link: '/javascript/events/event' },
        { text: '鼠标事件', link: '/javascript/events/mouse' },
        { text: '键盘事件', link: '/javascript/events/keyboard' },
        { text: '进度事件', link: '/javascript/events/progress' },
        { text: '表单事件', link: '/javascript/events/form' },
        { text: '触摸事件', link: '/javascript/events/touch' },
        { text: '拖拉事件', link: '/javascript/events/drag' },
        { text: '其他常见事件', link: '/javascript/events/common' },
        { text: 'GlobalEventHandlers 接口', link: '/javascript/events/globaleventhandlers' },
      ],
    },
    {
      text: 'HTML 元素',
      items: [
        { text: 'a 元素', link: '/javascript/elements/a' },
        { text: 'image 元素', link: '/javascript/elements/image' },
        { text: 'form 元素', link: '/javascript/elements/form' },
        { text: 'input 元素', link: '/javascript/elements/input' },
        { text: 'button 元素', link: '/javascript/elements/button' },
        { text: 'option 元素', link: '/javascript/elements/option' },
        { text: 'video 元素', link: '/javascript/elements/video' },
      ],
    },
    {
      text: '功能特性',
      items: [
        { text: 'Console 对象', link: '/javascript/features/console' },
        { text: '数据类型转换', link: '/javascript/features/conversion' },
        { text: '错误处理机制', link: '/javascript/features/error' },
        { text: '编程风格', link: '/javascript/features/style' },
        { text: '正则表达式', link: '/javascript/features/regexp' },
      ],
    },
    {
      text: '开发技巧',
      items: [
        { text: '防抖节流', link: '/javascript/skills/debounce-throttle' },
      ],
    },
  ],
} as DefaultTheme.Sidebar
