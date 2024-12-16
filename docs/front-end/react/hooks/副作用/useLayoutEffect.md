# useLayoutEffect



`useLayoutEffect` 是 `useEffect` 的一个版本。在浏览器重新绘制屏幕之前触发。

## 语法

```typescript
useLayoutEffect(setup, dependencies?)
```

参数讲解跟`useEffect`一样，[查看 useEffect](./useEffect)

## 注意

1. `uselayoutEffect`内部的代码会阻塞浏览器重新绘制屏幕，过度使用该 hook会导致app 运行缓慢。
2. 如果你在 `useLayoutEffect` 内部触发状态更新，React 将立即执行所有剩余的 Effects，包括 `useEffect`。

