# useSyncExternalStore

`useSyncExternalStore` 是react 18引入的hook,让你可以:

1. 订阅外部 `store` (例如状态管理库)
2. 订阅浏览器api
3. 把逻辑抽离到自定义hook



## 语法

```typescript
const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
```



## 使用



### 订阅外部`store`，这里使用zustand（状态管理库展示示例）

`Store` 代码

```typescript
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../utils/createSelector";
import { devtools, persist } from "zustand/middleware";

type TCatStoreState = {
  cat: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => void;
};

export const useCatStore = createSelectors(
  create<TCatStoreState>()(
    immer(
      devtools(
        persist(
          (set, get) => ({
            cat: {
              bigCats: 0,
              smallCats: 0,
            },
            increaseBigCats: () => {
              set((state) => {
                state.cat.bigCats++;
              });
            },
            increaseSmallCats: () => {
              set((state) => {
                state.cat.smallCats++;
              });
            },
            summary: () => {
              //使用get函数在set函数外部获取到响应式数据
              const total = get().cat.bigCats + get().cat.smallCats;
              return total;
            },
          }),
          {
            name: "cat store",
          }
        )
      )
    )
  )
);

//导出一个getSnapshot 函数
export function getSnapshot() {
  return useCatStore.getState();
}
```

组件代码：

```typescript
import { useSyncExternalStore } from "react";
import { useCatStore, getSnapshot } from "../store/catStore";

export const CatBox3 = () => {
  const {
    cat: { bigCats },
  } = useSyncExternalStore(useCatStore.subscribe, getSnapshot);
  return (
    <div className="box">
      <h1>big cats:{bigCats}</h1>
    </div>
  );
};

```

这样就实现了订阅状态库中的数据，`store` 中的状态发生改变时组件会重新渲染，这里有个缺点是在组件中只使用bigCats，如果状态库的其他数据改变但是当前组件又没有使用时，也会触发重新渲染。

### 订阅浏览器api

使用`useSyncExternalStore` 的另一个场景是当想订阅一些由浏览器暴露的并随时间变化的值时。

通过`navigator.onLine` web api 实现一个检测设备是否联网的例子。

```typescript
import { useSyncExternalStore } from "react";

function getSnapshot() {
  return navigator.onLine;
}

function subscribe(callback: (this: Window, ev: Event) => any) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export const CatBox3 = () => {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return (
    <div className="box">
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
    </div>
  );
};
```



