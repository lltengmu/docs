# memo

`memo`允许你在组件`props`没有发生改变的时候跳过组件的重新渲染

```typescript
const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
```

参数：

+ SomeComponent:需要进行记忆化的组件
+ **可选参数** `arePropsEqual`：一个函数，接受两个参数：组件的前一个 props 和新的 props。如果旧的和新的 props 相等，即组件使用新的 props 渲染的输出和表现与旧的 props 完全相同，则它应该返回 `true`。否则返回 `false`。通常情况下，你不需要指定此函数。默认情况下，React 将使用 `Object.is` 比较每个 prop。

示例：

```typescript
import { memo } from 'react';

const SomeComponent = memo(function SomeComponent(props) {
  // ...
});
```

使用 `memo` 将组件包装起来，以获得该组件的一个 **记忆化** 版本。通常情况下，只要该组件的 props 没有改变，这个记忆化版本就不会在其父组件重新渲染时重新渲染。

## 用法

当props没有发生改变时跳过重新渲染

React 通常在其父组件重新渲染时重新渲染一个组件。你可以使用 `memo` 创建一个组件，当它的父组件重新渲染时，只要它的新 props 与旧 props 相同时，React 就不会重新渲染它。这样的组件被称为 **记忆化的**（memoized）组件。

要记忆化一个组件，请将它包装在 `memo` 中，使用它返回的值替换原来的组件：

```typescript
const Greeting = memo(function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;
```

