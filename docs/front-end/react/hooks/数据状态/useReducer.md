# useReducer



## 基本了解

### 什么是reducer

将组件的所有 `状态更新逻辑`整合到一个外部函数中，这个函数就叫 `reducer`



### 使用reducer 整合状态逻辑

假设在一个TaskApp组件中

```typescript
...

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task: TTask) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return 
      ...
  );
}

```

在事件处理程序中通过`set`函数修改数据,实现数据的添加、修改、删除。如果组件不断迭代，需要维护的数据会越来越多。可以将数据的更新逻辑保存到一个 `reducer`函数中。

### 编写一个reducer 函数

`reducer` 函数是集中式的状态更新逻辑。

#### 参数:

`state` 第一个参数是响应式变量,

`action`是描述状态更新逻辑的一个对象，例如：

```typescript
const action = {
  type:"add"|"change"|"delete"//不是固定这些值，而是具有一定的语义
  //其他数据
  ...
}
```



```typescript
/**
 * 一个reducer 示例
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("未知 action: " + action.type);
    }
  }
}

```



## 如何使用reducer函数和useReducer hook

上面已经编写了一个`reducer`。现在看一下`useReducer` hook的基本用法

### 参数

+ reducer：一个 `reducer` 函数
+ initData：初始值，跟`useState`的初始值是一个意思
+ 可选参数，传递一个函数，用于计算初始值。如果传递了该参数则调用该函数并将initData 传递给该函数并将计算结果作为初始值，否则使用initData作为初始值。

### 语法：

```typescript
const [state, dispatch] = useReducer(reducer, initData, initMethod?)
```

`useReducer`的返回值跟`useState`的返回值类似，同样返回一个数组，数组中有两个元素。

+ 第一个是 当前的 state，
+ 第二个是 `dispatch` 函数，允许你执行更新并触发组件的重新渲染，该函数需要传递一个 `action` 对象

结合上面的例子使用`useReducer`

```typescript
const initialTasks: TTask[] = [
  { id: 0, text: "参观卡夫卡博物馆", done: true },
  { id: 1, text: "看木偶戏", done: false },
  { id: 2, text: "打卡列侬墙", done: false },
];

...

//tasksReducer 参考上面的编写一个reducer的示例
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
```

然后在事件处理程序或者需要更新tasks状态的地方通过`dispatch` 更新数据并触发组件的重新渲染，更新UI

```typescript
function handleAddTask(text) {
  dispatch({
    type: 'added',
    id: nextId++,
    text: text,
  });
}

function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task,
  });
}

function handleDeleteTask(taskId) {
  dispatch({
    type: 'deleted',
    id: taskId,
  });
}
```

