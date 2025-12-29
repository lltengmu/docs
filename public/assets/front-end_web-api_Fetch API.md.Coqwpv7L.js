import{_ as i,c as a,o as n,ae as l}from"./chunks/framework.Dh1jimFm.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/web-api/Fetch API.md","filePath":"front-end/web-api/Fetch API.md","lastUpdated":1762941658000}'),p={name:"front-end/web-api/Fetch API.md"};function t(h,s,k,e,r,E){return n(),a("div",null,s[0]||(s[0]=[l(`<h2 id="fetch-api" tabindex="-1">Fetch API <a class="header-anchor" href="#fetch-api" aria-label="Permalink to &quot;Fetch API&quot;">​</a></h2><p>一个获取资源的接口，请求后端数据（包括跨网络通信）。</p><p>请注意，<code>fetch</code> 规范与 <code>jQuery.ajax()</code> 主要有以下的不同：</p><ul><li>当接收到一个代表错误的 HTTP 状态码时，从 <code>fetch()</code> 返回的 Promise <strong>不会被标记为 reject</strong>，即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve（如果响应的 HTTP 状态码不在 200 - 299 的范围内，则设置 resolve 返回值的 [<code>ok</code>] 属性为 <code>false</code>，仅当网络故障时或请求被阻止时，才会标记为 reject。</li><li><code>fetch</code> <strong>不会发送跨域 cookie</strong>，除非你使用了 <em>credentials</em> 的<code>初始化选项</code>。</li></ul><p>代码示例：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://example.com/movies.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data));</span></span></code></pre></div><h3 id="配置选项" tabindex="-1">配置选项 <a class="header-anchor" href="#配置选项" aria-label="Permalink to &quot;配置选项&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * fetch() 完整配置选项说明（RequestInit 接口）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 所有选项均为可选，未设置时使用浏览器默认值。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fetchOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 请求方法：GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS 等</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 注意：GET/HEAD 不能包含 body</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 请求头：可为对象、Headers 实例或键值对数组</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 常见 Content-Type:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;application/json&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;application/x-www-form-urlencoded&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;multipart/form-data&quot;（通常由浏览器自动设置）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;text/plain&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;Authorization&quot;: &quot;Bearer &lt;token&gt;&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;Accept&quot;: &quot;application/json&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 请求体：支持 Blob、BufferSource、FormData、URLSearchParams、ReadableStream、string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 必须与 Content-Type 匹配；GET/HEAD 请求禁止设置 body</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ key: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // body: new URLSearchParams({ key: &quot;value&quot; }),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // body: new FormData(formElement),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 请求模式：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;cors&quot;：允许跨域（默认，可读取响应）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;same-origin&quot;：仅同源</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;no-cors&quot;：仅简单跨域请求（响应不可读，用于 Beacon 等）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cors&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 凭据策略（Cookie、HTTP 认证等）：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;include&quot;：始终发送（跨域需后端配合）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;same-origin&quot;：仅同源发送（默认）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;omit&quot;：从不发送</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  credentials: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;same-origin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 缓存策略：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;default&quot;：遵循 HTTP 缓存头（默认）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;no-store&quot;：完全绕过缓存</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;reload&quot;：强制从服务器获取</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;no-cache&quot;：验证缓存是否过期</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;force-cache&quot;：优先使用缓存（即使过期）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;only-if-cached&quot;：仅使用缓存（仅 same-origin 有效）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cache: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;no-cache&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 重定向行为：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;follow&quot;：自动跟随（默认）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;manual&quot;：不跳转，手动处理</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;error&quot;：遇到重定向抛出错误</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  redirect: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;follow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Referer 策略（控制 Referer 头）：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;no-referrer&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;no-referrer-when-downgrade&quot;（旧默认）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;origin&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;origin-when-cross-origin&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;same-origin&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;strict-origin&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;strict-origin-when-cross-origin&quot;（现代浏览器默认）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   - &quot;unsafe-url&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  referrerPolicy: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;strict-origin-when-cross-origin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 来源 URL（通常由浏览器自动设置，手动设置较少用）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // referrer: &quot;https://example.com&quot;,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 内容完整性校验（SRI）：格式 &quot;sha256-&lt;base64&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // integrity: &quot;sha256-AbCdEf123...=&quot;,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 页面卸载后是否保持请求（用于日志上报）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 受大小限制（通常 ≤64KB）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  keepalive: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 用于中止请求（配合 AbortController）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // signal: controller.signal,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 启用流式请求体（当 body 为 ReadableStream 时必须设置）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // duplex: &quot;half&quot;,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 【已废弃】必须为 null，不要使用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // window: null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="终止请求" tabindex="-1">终止请求 <a class="header-anchor" href="#终止请求" aria-label="Permalink to &quot;终止请求&quot;">​</a></h3><p><code>AbortController</code>:允许你根据需要中止一个或多个 Web 请求。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> btn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> controller;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getResource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  controller </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AbortController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> signal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> controller.signal;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url, { signal })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;下载完成&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, response);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`下载错误：\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">err</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">message</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">btn.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;click&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (controller) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    controller.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">abort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,11)]))}const c=i(p,[["render",t]]);export{d as __pageData,c as default};
