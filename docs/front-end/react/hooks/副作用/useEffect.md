# useEffect

`useEffect` 是 React 中用于处理`副作用`的钩子。

并且`useEffect` 还在这里让函数式组件充当`class`组件的生命周期函数，在之前你可能会在类组件中使用 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 来处理这些生命周期事件。

在使用服务端渲染的框架时，`Effect` 函数只会在客户端上运行。

## 什么是副作用函数，什么是纯函数？



### 纯函数

1. 输入决定输出：相同的输入永远会得到相同的输出。这意味着函数的行为是可预测的。
2. 无副作用：纯函数`不会修改外部状态`，也不会依赖外部可变状态。因此，纯函数内部的操作不会影响外部的变量、文件、数据库等。

```typescript
const sum = (x: number, y: number) => x + y
sum(5,2) //7
```



### 副作用函数

副作用函数 指的是那些在执行时会改变外部状态或依赖外部可变状态的函数。

- 操作引用类型
- 操作本地存储例如`localStorage`
- 调用外部API，例如`fetch` `ajax`
- 操作`DOM`
- 计时器



## 语法

```typescript
useEffect(setup, dependencies?)
```

1. `setup`：处理`Effect`(副作用)的函数，该函数可以选择性的返回一个**清理函数**(clean up)。当组件被添加到DOM的时候，React会运行 该函数。组件从DOM移除后，React 会最后一次运行 **clean up**函数。

2. 依赖项数组：可选参数，当依赖发生变化的时候重新执行`Effect`函数。

   + 没有提供该参数时会在每次组件渲染的时候执行 `Effect`函数。
   + 提供了空数组时，只会在组件**初始渲染**时候执行一次`Effect`函数。

   + 提供了依赖项时，当依赖数据发生变化的时候，React会使用`Object.is`对数组的每个元素与它先前的值进行比较，来决定是不是需要重新运行`Effect` 函数。