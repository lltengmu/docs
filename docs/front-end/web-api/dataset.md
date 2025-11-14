## 数据属性

HTML 在设计时就考虑了可扩展性，用于存储应与特定元素关联但无需具有任何已定义含义的数据。`data-*` 属性允许我们在标准的、语义化的 HTML 元素上存储额外信息，而无需使用其他技巧，例如非标准属性或 DOM 上的额外属性。

`html`语法

```javascript
<button data-id="btn" data-name="hd">按钮</button>
```

获取所有的数据属性:

```javascript
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this.dataset);
});
```

得到的数据是一个`DOMStringMap `对象:

```javascript
{
    "id": "btn",
    "name": "hd"
}
```

