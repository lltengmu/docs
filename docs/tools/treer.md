# treejs

使用`treer`展示目录结构。



## 安装

```typescript
pnpm add -g treer
```

查看版本

```typescript
treer --version
```



## 使用方法

1. 查看目录结构，切换目录到需要生成目录结构的文件夹下。

   ```typescript
   treer
   ```

2. 查看指定路径的目录结构

   ```typescript
   treer -d <_path>
   ```

3. 导出当前目录结构到指定路径下

   ````typescript
   treer -e <_path>
   ````

4. 忽略文件

   ```typescript
   treer -i "/^regex$/"
   
   //例如忽略node_modules文件夹 和.DS_Store文件
   treer -i "/(node_modules)|(.DS_Store)/"
   ```



效果图：

![treerJS-example-1](/Users/eddie/Documents/code/docs/docs/tools/images/treerJS-example-1.png)

然后复制输出的文件结构到`markdwon`文件中粘贴就可以了。