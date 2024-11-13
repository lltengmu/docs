# useState



`useState`是一个react hook，允许你向函数式组件管理状态。

## 语法：

```typescript
const [state, setState] = useState(initialState)
```

`useState`  接受一个参数作为初始值，返回一个数组，数组内有两个元素，第一个是状态变量 `state`，第二个是设置更新状态变量的`set`函数。



## 注意事项

+ `useState` hook 只能在组件顶层或者自定义hook中调用，不能在循环或者条件语句中调用它。
+ 在严格模式下，react将调用初始化函数两次，以帮你找到意外的不纯性（人话就是帮助你暴露出可能发生的bug）



## 用法

1. 为组件添加状态

   ```typescript
   const [name, setName] = useState("Eddie")
   ```

   `name`是一个响应式的变量，要更新`name` 变量需要通过`setName` 函数去更新它

   ```typescript
   function handleClick() {
     setName('Jackt');
   }
   
   ```

   React 会存储新的值并重新渲染组件，更新UI

2. 根据先前的`state` 更新state

   ```typescript
   ...
   //有个存储学生名字的数组
   const [studentName,setStudentName] = useState(["tom","fery","steven"])
   ...
   
   ...
   //有一个函数
   const handle = (newName) => {
     ...
     //将新的名字添加到数组中，并保留原来的数据
     setStudentName(s => [...s,newName])
   }
   ```

   当使用数组作为初始值时，数组在js中虽然是可变的，但是在react中要把它看出是只读的。

   下面是常见数组操作的参考表。当你操作 React state 中的数组时，你需要避免使用左列的方法，而首选右列的方法：

   |          | 避免使用 (会改变原始数组)     | 推荐使用 (会返回一个新数组） |
   | -------- | ----------------------------- | ---------------------------- |
   | 添加元素 | `push`，`unshift`             | `concat`，`[...arr]`         |
   | 删除元素 | `pop`，`shift`，`splice`      | `filter`，`slice`            |
   | 替换元素 | `splice`，`arr[i] = ...` 赋值 | `map`                        |
   | 排序     | `reverse`，`sort`             | 先将数组复制一份             |

3. 避免重复创建初始状态

   当初始值是通过函数调用返回的结果时，如下：
   ```typescript
   const [studentList,setStudentList] = useState(getInitalMethod())
   ```

   组件在每次重新渲染时，都会执行getInitalMethod方法，如果这个方法执行了大量的计算可能会浪费资源。

   应该通过将函数本身传递给`useState`，react仅在初始化期间调用它：
   ```typescript
   const [studentList,setStudentList] = useState(getInitalMethod)
   ```

   