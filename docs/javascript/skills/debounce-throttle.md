# 防抖和节流



## 防抖（Debounce）

防抖的核心思想是：在时间被触发后，等待一段时间再执行函数。如果在这段时间内**再次触发了事件**，则**重新计时**。

代码实现:

```typescript
function debounce(func:() => any, delay:number) {
  let timer = null as any
  return function (...args:any) {
    // 如果计时器存在，清除之前的计时器
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // 延迟执行函数
      func.apply(this, args)
    }, delay)
  }
}
```



## 节流（Throttle）

核心思想：在一定时间间隔内，函数最多执行一次。如果在这段时间内事件被多次触发，只有一次生效。

代码实现：

```typescript
function throttle(func, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    // 如果距离上次执行的时间超过了 delay
    if (now - lastTime >= delay) {
      // 执行函数
      func.apply(this, args);
      // 更新上次执行时间
      lastTime = now;
    }
  };
}
```



## 区别

| 特性     | 防抖（debounce）                                         | 节流（Throttle）                     |
| -------- | -------------------------------------------------------- | ------------------------------------ |
| 核心思想 | 事件触发后等待一段时间执行，如果期间再次触发则重新计时。 | 在一定时间间隔内，函数最多执行一次。 |
| 执行时机 | 事件停止触发后执行                                       | 按照固定时间间隔执行                 |
| 实现方式 | 使用`setTimeout`和`clearTimeout`                         | 使用时间戳或定时器                   |

