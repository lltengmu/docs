# vite

`vite`是一款由`vue.js`作者尤雨溪 开发的的一款基于`ES-module`的`前端构建工具`，



## 创建一个vite项目

1. 需要先安装node环境

2. 然后使用命令创建

   ```typescript
   pmpm create vite
   ```



## `index.html` 与项目根目录

你可能已经注意到，在一个 Vite 项目中，`index.html` 在项目最外层而不是在 `public` 文件夹内。这是有意而为之的：在开发期间 Vite 是一个服务器，而 `index.html` 是该 Vite 项目的入口文件。



## 命令行参数

1. 指定域名

   ```typescript
   "scripts": {
     "dev": "vite --host 0.0.0.0",
     "build": "tsc && vite build",
     "preview": "vite preview"
   },
   ```

   可以通过`npx vite --help`查看参数




## 客户端类型

`Vite`的类型定义是写给它的`Nodejs`API的。要将其补充到一个`vite`应用的客户端代码环境中，请添加一个`d.ts`文件；

```typescript
/// <reference types="vite/client" />
```

或者在`tsconfig.json`文件中，将`vite/client`添加到`compilerOptions.type`选项中。

```ts
{
  "compilerOptions": {
    "types": ["vite/client"]
  }
}
```



## glob 导入

Vite 支持使用特殊的 `import.meta.glob` 函数从文件系统导入多个模块，默认是懒加载导入：

```ts
const modules = import.meta.glob('./dir/*.js')
```

直接导入：

```ts
const modules = import.meta.glob('./dir/*.js', { eager: true })
```

#### 导入多个文件模块

```ts
const modules = import.meta.glob(['./dir/*.js', './another/*.js'])
```

#### 具名导入

```ts
//setup 是具名导出的模块名称
const modules = import.meta.glob('./dir/*.js', { import: 'setup' })
//例如
export const app = () => {}
export const utils = () => {
    console.log("index utils method");
}
```

