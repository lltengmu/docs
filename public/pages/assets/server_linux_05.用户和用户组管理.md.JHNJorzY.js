import{_ as i,c as a,a0 as e,o as t}from"./chunks/framework.CoVXEd1Z.js";const k=JSON.parse('{"title":"用户和用户组管理","description":"","frontmatter":{},"headers":[],"relativePath":"server/linux/05.用户和用户组管理.md","filePath":"server/linux/05.用户和用户组管理.md","lastUpdated":1734757381000}'),p={name:"server/linux/05.用户和用户组管理.md"};function l(n,s,h,d,c,r){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="用户和用户组管理" tabindex="-1">用户和用户组管理 <a class="header-anchor" href="#用户和用户组管理" aria-label="Permalink to &quot;用户和用户组管理&quot;">​</a></h1><p>用户和用户组关系：</p><ul><li>一对一</li><li>一对多</li><li>多对多</li></ul><h2 id="用户管理" tabindex="-1">用户管理 <a class="header-anchor" href="#用户管理" aria-label="Permalink to &quot;用户管理&quot;">​</a></h2><p>以下操作均在root 用户下操作。</p><ol><li><p>创建用户</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">useradd _userName</span></span></code></pre></div><p>为用户添加密码</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">passwd _userName</span></span></code></pre></div><p>普通用户修改当前用户密码</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">passwd</span></span></code></pre></div></li><li><p>检查用户是否存在</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">id _userName</span></span></code></pre></div></li><li><p>删除用户</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">userdel _userName</span></span></code></pre></div><p>删除用户并同时删除根用户相关的目录</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">userdel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r _userName</span></span></code></pre></div></li><li><p>修改用户属性</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usermod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;参数&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usermod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h 查看哪些有哪些具体的操作</span></span></code></pre></div></li><li><p>查看用户信息</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lchage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l _userName</span></span></code></pre></div></li></ol><p>所有的用户信息都存储在<code>/ext/passwd</code>文件中，每创建一个用户该文件就会多一条记录。</p><p>登陆主机的两种方式:</p><ul><li>本地登陆</li><li>ssh远程登录</li></ul><p>查看当前系统有哪些用户登录：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w</span></span></code></pre></div><h2 id="用户组管理" tabindex="-1">用户组管理 <a class="header-anchor" href="#用户组管理" aria-label="Permalink to &quot;用户组管理&quot;">​</a></h2><p>以下操作均在root 用户下操作。</p><ol><li><p>新建组</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">groupadd _groupName</span></span></code></pre></div></li><li><p>创建用户的时候指定是哪个组，如果没有指定组，linux会以这个用户的名称新增一个组，并将该用户添加到组中。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">useradd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g _groupName _userName</span></span></code></pre></div></li><li><p>查看用户是属于哪个组</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">id _userName</span></span></code></pre></div></li><li><p>删除组</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">groupdel _groupName</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//如果删除的组中有用户，则需先移动用户到其他组</span></span></code></pre></div></li><li><p>修改组名</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">groupmod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n _new_group_name _old_group_name</span></span></code></pre></div></li><li><p>修改用户所属的主组</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usermod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g _new_group _old_group</span></span></code></pre></div></li><li><p>将用户添加到多个用户组中</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usermod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">G</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _group_1 _group_2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _userName</span></span></code></pre></div></li></ol>`,14)]))}const g=i(p,[["render",l]]);export{k as __pageData,g as default};
