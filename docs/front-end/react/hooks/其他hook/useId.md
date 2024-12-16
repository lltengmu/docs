# useId

`useId`是为无障碍属性生成唯一id 的hook

## 语法

```typescript
const id = useId()
```

## 用法

### 为无障碍属性生成唯一ID

在组件顶层调用`useId` hook

```typescript
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  // ...
```

你可以将 生成的 ID 传递给不同的属性

```typescript
<>
  <input type="password" aria-describedby={passwordHintId} />
  <p id={passwordHintId}>
</>
```

