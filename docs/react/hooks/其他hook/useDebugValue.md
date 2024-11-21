# useDebugValue

`useDebugValue`可以在 React 开发工具中添加自定义标签。

## 语法

```typescript
useDebugValue(value, format?)
```

参数：

+ value：需要显示在开发工具的值
+ format：可选参数，当组件被检查时，React 开发工具将用 `value` 作为参数来调用格式化函数，然后显示返回的格式化值（可以是任何类型）。如果不指定格式化函数，则会显示 `value`。



## 用法

### 为自定义hook 添加标签

```typescript
const useAppHook = () => {
  const [count, setCount] = useState(0);
  useDebugValue(count);
  const addCount = () => {
    setCount((s) => s + 1);
  };
  return [count, addCount];
};
```

然后在开发工具中看到
![useDebugValue-example](/Users/eddie/Documents/code/docs/docs/react/hooks/images/useDebugValue-example.png)