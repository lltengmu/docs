# useCallback

`useCallback` 是一个让你在多次渲染过程中缓存函数的hook。

## 语法

```typescript
const cachedFn = useCallback(fn, dependencies)
```

参数：

+ Fn：需要被缓存的函数

+ dependencies：依赖项数组

  

## 与useMemo的比较

`useCallback` 我认为是`useMemo`的进阶版本，回顾一下`useMemo`对函数进行缓存的方式。

```typescript
import { memo, useMemo, useState } from "react";

...

export default () => {
  ...
  //useMemo hook 记忆化函数
  const PasstoSonComp = useMemo(() => {
    //这里需要返回一个函数
    return () => {
      console.log("this is a method pass to son component");
    };
  },[]);
  
  return (
    <div>
      <h1>App component</h1>
      <p>count:{count}</p>
      <Comp handle={PasstoSonComp} />
      <button onClick={addCount}>add cont</button>
    </div>
  );
};
```

`useMemo`的第一个参数是一个函数，这个函数返回值是一个函数，返回的函数将被缓存。接下来使用`useCallback`hook对上例进行修改

```typescript
import { memo, useCallback, useState } from "react";

....

export default () => {
  ...
  
  //useCallback 缓存函数,useCallback将传递的函数参数作为需要被缓存的函数，而不需要返回另一个函数
  const PasstoSonComp = useCallback(() => {
    //do something
    console.log("this is a method pass to son component");
  }, []);
  return (
    <div>
      <h1>App component</h1>
      <p>count:{count}</p>
      <Comp handle={PasstoSonComp} />
      <button onClick={addCount}>add cont</button>
    </div>
  );
};

```

在控制台输出可以看到与使用`useMemo`记忆化函数是一样的效果

![useMemo-example-2](/Users/eddie/Documents/code/docs/docs/react/hooks/images/useMemo-example-2.png)

所以我认为`useCallback` 是`useMemo`的进阶版本。