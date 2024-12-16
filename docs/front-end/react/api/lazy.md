# lazy

`lazy`能够让你在组件第一次被渲染之前延迟加载组件的代码

## 语法

```typescript
const SomeComponent = lazy(load)
```

参数：`load`函数

### 示例

在组件外部调用 `lazy`，以声明一个懒加载的 React 组件:

```typescript
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```



## 用法

使用 `Suspense` 实现懒加载组件

通常，你可以使用静态 [`import`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 声明来导入组件：

```typescript
import MarkdownPreview from './MarkdownPreview.js';
```

如果想在组件第一次渲染前延迟加载这个组件的代码，请替换成以下导入方式：

```typescript
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```

现在你的组件代码可以按需加载，同时你需要指定在它正在加载时应该显示什么。你可以通过将懒加载组件或其任何父级包装到 边界中来实现：

```typescript
<Suspense fallback={<Loading />}>
  <h2>Preview</h2>
  <MarkdownPreview />
</Suspense>
```

