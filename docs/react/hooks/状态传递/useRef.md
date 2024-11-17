# useRef

`useRef` hook ，可以帮助应用一个不需要渲染的值，或者操作DOM节点。

## 语法：

```typescript
const ref = useRef(initalValue)
```



## 使用ref 引用一个值

在组件顶层调用`useRef`声明一个或者多个`ref`

```typescript
const intervalRef = useRef(0);
...
```

`useRef` 返回一个具有`current`属性的`ref`对象，`current`属性的值是你提供的初始值。

当需要使用一个不需要渲染的页面的状态时，使用`useRef`来存储值比较合适。

可以提供修改`ref`的`current`属性来更新值，且`ref`发生变化时组件不会触发重新渲染。

使用`ref`引用一个值可以确保：

+ 可以在重新渲染之间存储信息
+ 改变它不会触发组件的重新渲染，所以`ref`  不适合存储显示在屏幕上的信息

```typescript
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      点击！
    </button>
  );
}
```

在这个例子中，`ref` 存储了一个不需要渲染在页面的值，而且这个值是可变的，通过修改`ref`的`current`属性更新它，然后可以通过这个`ref` 获取点击次数



## 使用ref 操作DOM

使用`ref`操作DOM 是常见的操作。

1. 调用useRef hook并传递null 或者不传递参数

   ```typescript
   import { useRef } from 'react';
   
   function MyComponent() {
     const inputRef = useRef(null);
     // ...
   ```

2. 然后将 ref 对象作为 `ref` 属性传递给想要操作的 DOM 节点的 JSX：

   ```typescript
    return <input ref={inputRef} />;
   ```

3. 当 React 创建 DOM 节点并将其渲染到屏幕时，React 将会把 DOM 节点设置为 ref 对象的 `current` 属性。

   ```typescript
   //通过访问ref 对象下的current 属性访问 存储在ref中的DOM  
   function handleClick() {
     inputRef.current.focus();
   }
   ```

   



