# zustand



Zustand 是一个小巧，快速，可扩展的基础状态管理解决方案。



## 安装

```
npm install zustand
```



## 基本使用

创建一个存储`store`

```typescript
import { create } from "zustand";

type TBearStoreState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useBearStore = create<TBearStoreState>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

```

在组件中使用状态，这里创建了一个BearBox组建：

```typescript
import { useBearStore } from "../store/bearStore";

export default () => {
  const bears = useBearStore(state => state.bears);
  const increasePopulation = useBearStore(state => state.increasePopulation);
  const removeAllBears = useBearStore(state => state.removeAllBears);
  
  return (
    <div className="box">
      <h1>Bear Box</h1>
      <p>bears:{bears}</p>
      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove bear</button>
      </div>
    </div>
  );
};

```



## get, set函数和immer中间件的使用

这里创建一个新的例子，新建catStore，使用imer中间件优化深层嵌套数据的更新：
```typescript
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type TCatStoreState = {
  cat: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => void;
};

export const useCatStore = create<TCatStoreState>()(
  immer((set, get) => ({
    cat: {
      bigCats: 0,
      smallCats: 0,
    },
    increaseBigCats: () => {
      //在没有使用imer中间件时，更新嵌套响应式数据是这样的
      //set((state) => ({
      //  cat: {
      //    ...state.cat,
      //    bigCats: state.cat.bigCats++,
      //  },
      //}));
      //使用imer中间件之后可以优化代码如下
      set((state) => {
        state.cat.bigCats++;
      });
    },
    increaseSmallCats: () => {
      //set 函数用于更新响应式数据
      set((state) => {
        state.cat.smallCats++;
      });
    },
    summary: () => {
      //使用get函数在set函数外部获取到响应式数据
      const total = get().cat.bigCats + get().cat.smallCats;
      return total;
    },
  }))
);

```



## selectors 和自动 selector

Selector 是指从状态库中到处的state或者action。

先理解一个问题，但从存储库中使用state 或者action 时，是这样子的：
```typescript
const bigCats = useCatStore((state) => state.cat.bigCats);
const smallCats = useCatStore((state) => state.cat.smallCats);
const increaseBigCats = useCatStore((state) => state.increaseBigCats);
const increaseSmallCats = useCatStore((state) => state.increaseSmallCats);
```

上面的语法会比较繁琐，zustand 可以实现通过解构从存储库中获取 selector。

```typescript
const { cat:bigCats } = useCatStore()
```

如果只是这样使用的话会出现一个问题，假设在一个CatBox2组建中，只使用到bigCats 一个数据，然后通过解构语法从存储库中获取数据时，如果储存库中的其他state发生变化时，当前组建也会重新渲染，即使组建中没有用到其他state 。

为了解决这个问题，需要用到`自动生成selector`

创建一个createSelector文件：
```typescript
import { StoreApi, UseBoundStore } from "zustand";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

```

然后在存储中将存储库作为参数放到createSelector 函数中进行装饰

```typescript
const useCatStore = createSelectors(catStore)

```

在组件中使用自动生成选择器

```typescript
import { useCatStore } from "../store/catStore";

export const CatController = () => {
  //存储库中的其他state发生变化时当前组建不会发生重新渲染
  const increaseBigCats = useCatStore.use.increaseBigCats()
  const increaseSmallCats = useCatStore.use.increaseSmallCats()

  return (
    <div className="box">
      <h1>Cat Controller</h1>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  );
};


```



## 使用useShallow 从存储库中返回多个 selector

```typescript
import { useShallow } from "zustand/shallow";
import { useCatStore } from "../store/catStore";

export const CatController = () => {
  //从store中结构出多个action
  //使用useShallow来进行浅比较，如果导出的selector相同时跳过组建的重新渲染
  const { increaseBigCats, increaseSmallCats } = useCatStore(
    useShallow((state) => ({
      increaseBigCats: state.increaseBigCats,
      increaseSmallCats: state.increaseSmallCats,
    }))
  );

  return (
    <div className="box">
      <h1>Cat Controller</h1>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  );
};

```

## 将存储库中的数据保存到本地存储中

通过persist 中间件实现

```typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TBearStoreState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useBearStore = create<TBearStoreState>()(
  persist(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: "bear store",
      //partiaze 配置那些状态需要被保存到本地存储中，不设置时默认保存所有数据
      partialize: (state) => ({ bears: state.bears }),
    }
  )
);

```

排除不需要被保存的state
```typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";

...

export const useBearStore = create<TBearStoreState>()(
  persist(
    ...
    {
      name: "bear store",
      //排除不需要被保存的数据
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["bears"].includes(key))
        ),
    }
  )
);

```

## 中间件的使用顺序

```typescript
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../utils/createSelector";
import { devtools, persist } from "zustand/middleware";

...

export const useCatStore = createSelectors(
  create<TCatStoreState>()(
    immer(
      devtools(
        persist(
          ...callback
          {
            name: "cat store",
          }
        )
      )
    )
  )
);

```

