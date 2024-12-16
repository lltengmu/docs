# useTransition

`useTransiton` 是一个帮助你在不阻塞UI的情况下更新状态的hook



## 语法：

```typescript
const [isPending, startTransition] = useTransition()
```

`useTransition`不需要参数

1. `isPending` 是否存在待处理的 `transiion`
2. `startTransition`函数，使用此函数将状态更新为`transition`



## 用法

### 将状态更新 标记为非阻塞的 transition

```typescript
function TabContainer() {
  const [isPending, startTransition] = useTransition();
  //这里有个tab state 
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    //通过useTransition hook 返回的 setTransition 函数，标记对tab state 的更新是非阻塞的 transition
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ……
}
```

通过`transition` ，UI仍将在重新渲染过程中保持响应性。

在官网的tab选项卡的例子中，又一个`state` tab 管理状态，根据tab 的值确定哪个选项卡被渲染。

在没有使用`useTransition`的情况下，当点击其中某个选项卡的渲染过程比较缓慢的情况下，再去点击其他选项卡时就会卡顿。比如有两个组件，`home` 和`contact`，假设`home`组件渲染需要5秒，`contact`组件正常渲染。我点击`home` tab之后又立即点击了`contact` tab，因为`home`组件渲染需要5秒，所有不会立即渲染`contact` 组件的内容，而是需要等待`home`组件渲染完成，阻塞了UI的渲染。

使用`useTransition` hook可以解决这个问题。在上面的代码中，`setTransition` 函数，标记对`tab` state 的更新是非阻塞的 `transition`，

这时候尝试上面的操作，点击`home` tab 之后立即点击`contact` tab,`contact` 组件会立即响应，而不需要等待`home`组件渲染完成。