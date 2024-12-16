# useContext

useContext 用于解决 当组件之间有多层嵌套关系的时候，组件依次传值的问题。类似vue3中的依赖注入的概念。

## 语法

```typescript
const value = useContext(SomeContext)
```

参数：

`SomeContext` 是React `creaetContext` api创建的上下文对象

```typescript
import { createContext } from "react";
...
const SomeContext = createContext<ContextProps>(null);
```



## 用法

在父组件或者高层级组件中注入数据

```typescript
//App.tsx
//通过 createContext api 创建一个 context 对象
const Context = createContext<ContextProps>(null);

//使用Context提供的Provider组件向下注入数据
function App() {
  const [username, setUserName] = useState("hello world");

  const value = { title: username, action: setUserName }

  return (
    <Context.Provider value={value}>
      <div>我是父组件,username:{username}</div>
      <Child />
    </Context.Provider>
  )
}
```

子组件或者深层嵌套组件中获取到注入的数据

```typescript
import { useContext } from "react";
import { Context } from "./App";

export default () => {
  const value = useContext(Context);
  return (
    <>
      <div>我是孙组件-{value?.title}</div>
      <button
        onClick={() => {
          value?.action("nihao");
        }}
      >
        点我修改用户名
      </button>
    </>
  );
};
```

