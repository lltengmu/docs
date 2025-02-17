# 正则表达式



## 基础知识

正则表达式是用于匹配字符串中字符组合的模式，在 JavaScript 中，正则表达式也是对象。

#### 对比分析

与普通函数操作字符串来比较，正则表达式可以写出更简洁、功能强大的代码。

```typescript
let hd = "EddieIS2200hshaha9988";
let nums = [...hd].filter(a => !Number.isNaN(parseInt(a)));
console.log(nums.join(""));
```

使用正则表达式将简单得多

```typescript
let hd = "EddieIS2200hshaha9988";
console.log(hd.match(/\d/g).join(""));
```



## 创建正则

JS 提供字面量与对象两种方式创建正则表达式

#### 字面量创建

使用 `//` 包裹的字面量创建方式是推荐的作法，但它不能在其中使用变量

```typescript
let title = "This is a word";
console.log(/i/.test(title));//true
```

下面尝试使用 `a` 变量时将不可以查询

```typescript
let title = "This is a word";
let a = "i";
console.log(/a/.test(title)); //false
```

虽然可以使用 `eval` 转换为 js 语法来实现将变量解析到正则中，但是比较麻烦，所以有变量时建议使用下面的对象创建方式。

```typescript
let title = "This is a word";
let a = "i";
console.log(eval(`/${a}/`).test(title)); //true
```

#### 对象创建

当正则需要动态创建时使用对象方式

```typescript
let phone = "19824508320249";
let year = "2024";
let reg = new RegExp(year);
console.log(reg.test(phone)); //true
```

#### 选择符

`|` 这个符号带表选择修释符，也就是 `|` 左右两侧有一个匹配到就可以。

```typescript
let tel = "010-12345678";
//错误结果:只匹配 | 左右两边任一结果
console.log(tel.match(/010|020\-\d{7,8}/));

//正确结果:所以需要放在原子组中使用
console.log(tel.match(/(010|020)\-\d{7,8}/));
```

#### 字符转义

转义用于改变字符的含义，用来对某个字符有多种语义时的处理。

假如有这样的场景，如果我们想通过正则查找`/`符号，但是 `/`在正则中有特殊的意义。如果写成`///`这会造成解析错误，所以要使用转义语法 `/\//`来匹配。

```typescript
const url = "https://www.baidu.com";
console.log(/https:\/\//.test(url)); //true
```

#### 字符边界

使用字符边界符用于控制匹配内容的开始与结束约定。

| 边界符 | 说明                         |
| ------ | ---------------------------- |
| ^      | 匹配字符串的开始             |
| $      | 匹配字符串的结束，忽略换行符 |

检测字符串是不是以`www`开头

```typescript
const url = "www.baidu.com";
console.log(/^www/.test(url)); //true
```

#### 元子字符

元字符是正则表达式中的最小元素，只代表单一（一个）字符

**字符列表**

|        |                                                      |               |
| ------ | ---------------------------------------------------- | ------------- |
| 元字符 | 说明                                                 | 示例          |
| \d     | 匹配任意一个数字                                     | [0-9]         |
| \D     | 与除了数字以外的任何一个字符匹配                     | [^0-9]        |
| \w     | 与任意一个英文字母,数字或下划线匹配                  | [a-zA-Z_]     |
| \W     | 除了字母,数字或下划线外与任何字符匹配                | [^a-za-z_]    |
| \s     | 任意一个空白字符匹配，如空格，制表符`\t`，换行符`\n` | [\n\f\r\t\v]  |
| \S     | 除了空白符外任意一个字符匹配                         | [^\n\f\r\t\v] |
| .      | 匹配除换行符外的任意字符                             |               |



#### 模式修饰

正则表达式在执行时会按他们的默认执行方式进行，但有时候默认的处理方式总不能满足我们的需求，所以可以使用模式修正符更改默认方式。

修饰符说明i不区分大小写字母的匹配g全局搜索所有匹配内容m视为多行s视为单行忽略换行符，使用`.` 可以匹配所有字符y从 `regexp.lastIndex` 开始匹配u正确处理四个字符的 UTF-16 编码。

| 修饰符 | 说明                                         |
| ------ | -------------------------------------------- |
| i      | 不区分大小写字母的匹配                       |
| g      | 全局搜索所有匹配内容                         |
| m      | 视为多行                                     |
| s      | 视为单行忽略换行符，使用`.` 可以匹配所有字符 |
| y      | 从 `regexp.lastIndex` 开始匹配               |
| u      | 正确处理四个字符的 UTF-16 编码               |



**修饰符`i`**

在匹配字符时不区分大小写：

```typescript
const url = "www.BAIDU.com";
const u = url.replace(/baidu/i, "baidu");
console.log(u);
```

**修饰符`g`**

使用 `g` 修饰符可以全局操作内容，就是将在字符串中符合正则的部分全部匹配到。

```typescript
const title = "This is a title";
const ti = title.replace(/i/g,"#")
```

**修饰符`m`**

假设有这样一个字符串，是多行的文本字符串。

```typescript
const text = `Hello
world!
This is a test.`
```

边界符`^`和`$`只能匹配到整个字符串的开头和结尾，我们希望字符串按照指定的正则按行匹配。

使用修饰符`m`开启多行模式，在多行模式下，它们不仅仅匹配文本的开始与结束，还匹配每一行的开始与结束。

```typescript
const text = `Hello
world!
This is a test.`;

const regexWithM = /^world/m;
// true，因为 "world" 是第二行的开始
console.log(regexWithM.test(text));

const regexEndWithM = /test.$/m;
// true，因为 "test." 是倒数第二行的结束（注意：`.` 在正则表达式中默认不匹配换行符，但在这里我们匹配的是行的结束）
console.log(regexEndWithM.test(text)); 
```

**修饰符`u`**

`u` 修饰符使得正则表达式能够处理完整的 Unicode 字符集，包括那些由四个字节（即 32 位）表示的字符。

这对于处理多语言文本或包含特殊字符的文本非常有用。

+ 匹配`Unicode`字符

  ```typescript
  const regex = /\u{61}/u; // \u{61} 表示 Unicode 码点为 61 的字符，即 'a'
  console.log('a'.match(regex)); // 输出 ['a']
  ```

+ 使用 `u` 模式可以正确处理四个字符的 UTF-16 字节编码

  ```typescript
  let str = "𝒳𝒴";
  console.table(str.match(/[𝒳𝒴]/)); //结果为乱字符"�"
  
  console.table(str.match(/[𝒳𝒴]/u)); //结果正确 "𝒳"
  ```

  

**lastIndex**

RegExp 对象`lastIndex` 属性可以返回匹配到的位置或者设置正则表达式开始匹配的位置,但是必须结合修饰符`g`使用。

```typescript
let text = `今天是个好日子啊～～～，today is  a good day`;
let reg = /d(.{2})/g;
//从索引10开始搜索
reg.lastIndex = 10;
console.log(reg.exec(text));
//返回匹配结束的位置
console.log(reg.lastIndex);
```

**修饰符`y`**

`y` 修饰符并不是在所有正则表达式引擎中都支持的，它主要在 JavaScript 的 ECMAScript 2018（ES9）标准中被引入。这个修饰符被称为“粘性（sticky）”模式。

```typescript
const str = "aaa_aaa_aaa";
const regex = /a+/y;

// 设置从索引 4 开始
regex.lastIndex = 4;
const match = regex.exec(str);

if (match) {
  console.log(`Matched: ${match[0]}, at index: ${match.index}`);
} else {
  console.log("No match found");
}

const nextMatch = regex.exec(str);

if (nextMatch) {
  console.log(`Matched: ${nextMatch[0]}, at index: ${nextMatch.index}`);
} else {
  console.log("No match found");
}
```



## 原子表

在一组字符中匹配某个元字符，在正则表达式中通过元字符表来完成，就是放到`[]` (方括号)中。

**语法**

| 原子表 | 说明                               |
| ------ | ---------------------------------- |
| []     | 只匹配其中的一个原子               |
| [^]    | 只匹配"除了"其中字符的任意一个原子 |
| [0-9]  | 匹配 0-9 任何一个数字              |
| [a-z]  | 匹配小写 a-z 任何一个字母          |
| [A-Z]  | 匹配大写 A-Z 任何一个字母          |

使用`[]`匹配其中任意字符即成功，下例中匹配`bd`任何一个字符，而不会当成一个整体来对待。

```typescript
const url = "www.baidu.com";
console.log(/bd/.test(url));//false
console.log(/[bd]/.test(url));//true
```

当使用区间`[a-z]`或者`[0-9]`这种方式匹配字符时，区间的写法一定要按照升序写法。

使用`[^]`排除匹配的字符:

```typescript
let hd = `张三:010-99999999,李四:020-88888888`;
//排除掉: 数字 - ,就只剩中文字符了
let res = hd.match(/[^:\d-,]+/g);
console.log(res);//['张三', '李四']
```



## 原子组

- 如果一次要匹配多个元子，可以通过元子组完成
- 原子组与原子表的差别在于原子组一次匹配多个元子，而原子表则是匹配任意一个字符
- 元字符组用 `()` 包裹

下面使用原子组匹配 `h1` 标签，如果想匹配 `h2` 只需要把前面原子组改为 `h2` 即可。

```typescript
const title = `<h1>www.baidu.com</h1>`;
console.log(/<(h1)>.+<\/\1>/.test(title)); //true
```



#### 基本使用

没有添加 `g` 模式修正符时只匹配到第一个，匹配到的信息包含以下数据

| 变量    | 说明             |
| ------- | ---------------- |
| 0       | 匹配到的完整内容 |
| 1,2.... | 匹配到的原子组   |
| index   | 原字符串中的位置 |
| input   | 原字符串         |
| groups  | 命名分组         |

在`match`中使用原子组匹配，会将每个组数据返回到结果中

- 0 为匹配到的完整内容
- 1/2 等 为原子级内容
- index 匹配的开始位置
- input 原始数据
- groups 组别名



**引用分组**

`\n` 在匹配时引用原子组， `$n` 指在替换时使用匹配的组数据。下面将标签替换为`p`标签

```typescript
const title = `<h1>www.baidu.com</h1>`;
console.log(title.replace(/<(h1)>(w{3}).+<\/\1>/,`<p>$2</p>`));
```

使用函数

```typescript
const title = `<h1>www.baidu.com</h1>`;
console.log(
  title.replace(/<(h1)>(w{3}).+<\/\1>/, function (...args) {
    return `<p>${args[2]}</p>`;
  })
);
```



## 重复匹配

**基本使用**

如果要重复匹配一些内容时我们要使用重复匹配修饰符，包括以下几种。

| 符号      | 说明              |
| --------- | ----------------- |
| *         | 重复零次或更多次  |
| +         | 重复一次或更多次  |
| ?         | 重复零次或一次    |
| **{n}**   | 重复 n 次         |
| **{n,}**  | 重复 n 次或更多次 |
| **{n,m}** | 重复 n 到 m 次    |

```typescript
const title = `<h1>www.baidu.com</h1>`;
console.log(
  //在第二个原子组中,表示对w这个字符重复匹配三次
  title.replace(/<(h1)>(w{3}).+<\/\1>/, function (...args) {
    return `<p>${args[2]}</p>`;
  })
);
```

**禁止贪婪**

正则表达式在进行重复匹配时，默认是贪婪匹配模式，也就是说会尽量匹配更多内容，但是有的时候我们并不希望他匹配更多内容，这时可以通过?进行修饰来禁止重复匹配

| 使用   | 说明                              |
| ------ | --------------------------------- |
| *?     | 重复任意次，但尽可能少重复        |
| +?     | 重复 1 次或更多次，但尽可能少重复 |
| ??     | 重复 0 次或 1 次，但尽可能少重复  |
| {n,m}? | 重复 n 到 m 次，但尽可能少重复    |
| {n,}?  | 重复 n 次以上，但尽可能少重复     |

下面是禁止贪婪的语法例子

```typescript
let str = "aaa";
console.log(str.match(/a+/)); //aaa
console.log(str.match(/a+?/)); //a
console.log(str.match(/a{2,3}?/)); //aa
console.log(str.match(/a{2,}?/)); //aa
```

