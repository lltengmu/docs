## Fetch API

一个获取资源的接口，请求后端数据（包括跨网络通信）。

请注意，`fetch` 规范与 `jQuery.ajax()` 主要有以下的不同：

- 当接收到一个代表错误的 HTTP 状态码时，从 `fetch()` 返回的 Promise **不会被标记为 reject**，即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve（如果响应的 HTTP 状态码不在 200 - 299 的范围内，则设置 resolve 返回值的 [`ok`] 属性为 `false`，仅当网络故障时或请求被阻止时，才会标记为 reject。
- `fetch` **不会发送跨域 cookie**，除非你使用了 *credentials* 的`初始化选项`。

代码示例：

```javascript
fetch("http://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### 配置选项

```javascript
/**
 * fetch() 完整配置选项说明（RequestInit 接口）
 * 
 * 所有选项均为可选，未设置时使用浏览器默认值。
 */
const fetchOptions = {
  // 请求方法：GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS 等
  // 注意：GET/HEAD 不能包含 body
  method: "POST",

  // 请求头：可为对象、Headers 实例或键值对数组
  // 常见 Content-Type:
  //   - "application/json"
  //   - "application/x-www-form-urlencoded"
  //   - "multipart/form-data"（通常由浏览器自动设置）
  //   - "text/plain"
  headers: {
    "Content-Type": "application/json",
    // "Authorization": "Bearer <token>",
    // "Accept": "application/json"
  },

  // 请求体：支持 Blob、BufferSource、FormData、URLSearchParams、ReadableStream、string
  // 必须与 Content-Type 匹配；GET/HEAD 请求禁止设置 body
  body: JSON.stringify({ key: "value" }),
  // body: new URLSearchParams({ key: "value" }),
  // body: new FormData(formElement),

  // 请求模式：
  //   - "cors"：允许跨域（默认，可读取响应）
  //   - "same-origin"：仅同源
  //   - "no-cors"：仅简单跨域请求（响应不可读，用于 Beacon 等）
  mode: "cors",

  // 凭据策略（Cookie、HTTP 认证等）：
  //   - "include"：始终发送（跨域需后端配合）
  //   - "same-origin"：仅同源发送（默认）
  //   - "omit"：从不发送
  credentials: "same-origin",

  // 缓存策略：
  //   - "default"：遵循 HTTP 缓存头（默认）
  //   - "no-store"：完全绕过缓存
  //   - "reload"：强制从服务器获取
  //   - "no-cache"：验证缓存是否过期
  //   - "force-cache"：优先使用缓存（即使过期）
  //   - "only-if-cached"：仅使用缓存（仅 same-origin 有效）
  cache: "no-cache",

  // 重定向行为：
  //   - "follow"：自动跟随（默认）
  //   - "manual"：不跳转，手动处理
  //   - "error"：遇到重定向抛出错误
  redirect: "follow",

  // Referer 策略（控制 Referer 头）：
  //   - "no-referrer"
  //   - "no-referrer-when-downgrade"（旧默认）
  //   - "origin"
  //   - "origin-when-cross-origin"
  //   - "same-origin"
  //   - "strict-origin"
  //   - "strict-origin-when-cross-origin"（现代浏览器默认）
  //   - "unsafe-url"
  referrerPolicy: "strict-origin-when-cross-origin",

  // 来源 URL（通常由浏览器自动设置，手动设置较少用）
  // referrer: "https://example.com",

  // 内容完整性校验（SRI）：格式 "sha256-<base64>"
  // integrity: "sha256-AbCdEf123...=",

  // 页面卸载后是否保持请求（用于日志上报）
  // 受大小限制（通常 ≤64KB）
  keepalive: false,

  // 用于中止请求（配合 AbortController）
  // signal: controller.signal,

  // 启用流式请求体（当 body 为 ReadableStream 时必须设置）
  // duplex: "half",

  // 【已废弃】必须为 null，不要使用
  // window: null
};
```

### 终止请求

`AbortController`:允许你根据需要中止一个或多个 Web 请求。

```javascript
const btn = document.querySelector("button");
let controller;

function getResource() {
  controller = new AbortController();
  const signal = controller.signal;
  fetch(url, { signal })
    .then((response) => {
      console.log("下载完成", response);
    })
    .catch((err) => {
      console.error(`下载错误：${err.message}`);
    });
}

btn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
  }
});
```

