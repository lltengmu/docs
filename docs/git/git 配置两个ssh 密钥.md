# git 配置两个ssh 密钥



我自己有一个`github`账号，在进入公司之后，公司的代码也是存储在`github`上面。因为我是用自己电脑开发，所以我需要向两个代码仓库中拉取和提交代码。

这就导致如果你拿你原来的公钥给公司添加仓库访问权限的时候是拉取不到代码的，因为一个`ssh` 公钥只能用于一个账户。

这就需要配置两个 `ssh` 密钥



## 具体步骤

1. 在~/.ssh 目录下新建一个github 目录

2. 执行以下命令

   生成个人`ssh` 密钥

   ```
   ssh-keygen -t rsa -C "personal@github.com" -f ~/.ssh/github/personal.github
   ```

   生成公司`ssh` 密钥

   ```
   ssh-keygen -t rsa -C "work@github.com" -f ~/.ssh/github/work.github
   ```

   添加配置文件，在.ssh目录下新增`config`文件，内容如下:

   ```
   # 个人
   Host personal.github.com
       Hostname ssh.github.com
       port 22
       User git
       IdentityFile ~/.ssh/github/personal.github
   
   # 公司
   Host work.github.com
       Hostname ssh.github.com
       port 22
       User git
       IdentityFile ~/.ssh/github/work.github
   ```

   

3. 将生成的公钥文件添加到个人github账户或者公司的github账户。

   例如：复制`personal.github.pub`文件里面的内容，

   登陆自己的github账户->setting->SSH and GPG keys->new ssh key。

4. 拉取仓库代码：

   ```
   //拉取自己git仓库代码
   //原来是这样拉取
   git clone git@github.com:lltengmu/docs.git
   //现在是这样拉取
   git clone personal.github.com:lltengmu/docs.git
   ```

   如果是拉取公司项目代码就：

   ```
   git clone work.github.com:xxx/xxx.git
   ```

5. 提交没有变化，正常提交就行