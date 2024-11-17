# useInsertionEffect

`useInSertionEffect` 是为 `CSS-in-JS` 库的作者特意打造的，除非你正在使用`CSS-in-JS`库，否则你应该使用`useEffect`或者`useLayoutEffect`。



## 语法

```typescript
useInsertionEffect(setup, dependencies?)
```

参数讲解跟`useEffect`一样，[查看 useEffect](./useEffect)



## 用法

#### 从CSS-in-JS库注入样式

在正常的项目开发中，为html元素设置样式的做法如下：

```js
// 在你的 JS 文件中：
function component() {
  return <button className="success">btn</button>;
}

// 在你的 CSS 文件中：
.success { color: green; }
```

或者使用tailwindcss库

```typescript
// 在你的 JS 文件中：
<button className="text-sm" />
```

不正常的做法：

有些团队更喜欢直接在 JavaScript 代码中编写样式，而不是编写 CSS 文件。这通常需要使用 CSS-in-JS 库或工具。以下是 CSS-in-JS 三种常见的实现方法：

1. 使用编译器静态提取到 CSS 文件

2. 内联样式，例如 

   ```typescript
   <div style={{ opacity: 1 }}></div>
   ```

   

3. 运行时注入 `<style>` 标签

如果你使用 CSS-in-JS，我们建议结合使用前两种方法（静态样式使用 CSS 文件，动态样式使用内联样式）。**我们不建议运行时注入 `<style>` 标签有两个原因**：

1. 运行时注入会使浏览器频繁地重新计算样式。
2. 如果在 React 生命周期中某个错误的时机进行运行时注入，它可能会非常慢。



第一个问题无法解决，但是 `useInsertionEffect` 可以帮助你解决第二个问题。

```typescript
// 在你的 CSS-in-JS 库中
let isInserted = new Set();
function useCSS(rule) {
  useInsertionEffect(() => {
    // 同前所述，我们不建议在运行时注入 <style> 标签。
    // 如果你必须这样做，那么应当在 useInsertionEffect 中进行。
    if (!isInserted.has(rule)) {
      isInserted.add(rule);
      document.head.appendChild(getStyleForRule(rule));
    }
  });
  return rule;
}

function Button() {
  const className = useCSS('...');
  return <div className={className} />;
}
```

总结，如果在项目开发中，如果没有使用到`CSS-in-JS`库的话，应该用不上这个hook。



## 注意

1. 当 `useInsertionEffect` 运行时，`refs` 尚未附加
2. `useInsertionEffect` 可能在 DOM 更新之前或之后运行。
3. 与其他类型的 Effect 不同，数据发生变动时，它们会先为每个 Effect 触发 cleanup 函数，然后再触发 setup 函数。而 `useInsertionEffect` 会同时触发 cleanup 函数和 setup 函数。这会导致 cleanup 函数和 setup 函数的“交错”执行。