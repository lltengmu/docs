import{_ as a,c as i,a0 as t,o as n}from"./chunks/framework.CoVXEd1Z.js";const c=JSON.parse('{"title":"基本用法","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/canvas/01.canvas.md","filePath":"front-end/canvas/01.canvas.md","lastUpdated":1734360942000}'),h={name:"front-end/canvas/01.canvas.md"};function e(l,s,p,k,r,d){return n(),i("div",null,s[0]||(s[0]=[t(`<h1 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h1><h2 id="canvas元素" tabindex="-1">canvas元素 <a class="header-anchor" href="#canvas元素" aria-label="Permalink to &quot;canvas元素&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvas id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tutorial&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;150&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;150&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>canvas元素 没有设置宽度和高度的时候，canvas 会初始化宽度为 300 像素和高度为 150 像素</p><h2 id="渲染上下文" tabindex="-1">渲染上下文 <a class="header-anchor" href="#渲染上下文" aria-label="Permalink to &quot;渲染上下文&quot;">​</a></h2><p>canvas 起初是空白的,可以通过 canvasElement.getContext() 获取到渲染上下文。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> el</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HTMLCanvasElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;canvas&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> canvas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> el.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,7)]))}const E=a(h,[["render",e]]);export{c as __pageData,E as default};