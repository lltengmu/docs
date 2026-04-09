import{_ as i,c as a,o as n,ae as l}from"./chunks/framework.Dh1jimFm.js";const g=JSON.parse('{"title":"Nginx 配置","description":"","frontmatter":{},"headers":[],"relativePath":"server/nginx/nginx-configuration.md","filePath":"server/nginx/nginx-configuration.md","lastUpdated":null}'),p={name:"server/nginx/nginx-configuration.md"};function h(e,s,t,k,r,d){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="nginx-配置" tabindex="-1">Nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;Nginx 配置&quot;">​</a></h1><blockquote><p>Nginx 的默认配置文件为 <code>nginx.conf</code>。</p><ul><li><code>nginx -c xxx.conf</code> - 以指定的文件作为配置文件，启动 Nginx。</li></ul></blockquote><h2 id="配置文件实例" tabindex="-1">配置文件实例 <a class="header-anchor" href="#配置文件实例" aria-label="Permalink to &quot;配置文件实例&quot;">​</a></h2><p>以下为一个 <code>nginx.conf</code> 配置文件实例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#定义 nginx 运行的用户和用户组</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">user </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www www;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#nginx 进程数，建议设置为等于 CPU 总核心数。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_processes </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#nginx 默认没有开启利用多核 CPU, 通过增加 worker_cpu_affinity 配置参数来充分利用多核 CPU 以下是 8 核的配置参数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_cpu_affinity </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00000001</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 00000010</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 00000100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 00001000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 00010000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 00100000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 01000000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#全局错误日志定义类型，[ debug | info | notice | warn | error | crit ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/log/nginx/error.log info;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#进程文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pid </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/run/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#一个 nginx 进程打开的最多文件描述符数目，理论值应该是最多打开文件数（系统的值 ulimit -n）与 nginx 进程数相除，但是 nginx 分配请求并不均匀，所以建议与 ulimit -n 的值保持一致。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_rlimit_nofile </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65535</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#工作模式与连接数上限</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">events</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll 模型是 Linux 2.6 以上版本内核中的高性能网络 I/O 模型，如果跑在 FreeBSD 上面，就用 kqueue 模型。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #epoll 是多路复用 IO(I/O Multiplexing) 中的一种方式，但是仅用于 linux2.6 以上内核，可以大大提高 nginx 的性能</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    use </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">epoll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ############################################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #单个后台 worker process 进程的最大并发链接数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #事件模块指令，定义 nginx 每个进程最大连接数，默认 1024。最大客户连接数由 worker_processes 和 worker_connections 决定</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #即 max_client=worker_processes*worker_connections, 在作为反向代理时：max_client=worker_processes*worker_connections / 4</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    worker_connections </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65535</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ############################################################################</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设定 http 服务器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mime.types; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#文件扩展名与文件类型映射表</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    default_type </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">application/octet-stream; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#默认文件类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #charset utf-8; #默认编码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_names_hash_bucket_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#服务器名字的 hash 表大小</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    client_header_buffer_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#上传文件大小限制</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    large_client_header_buffers </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 64k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设定请求缓</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    client_max_body_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#限制客户端请求体最大尺寸（如上传）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    sendfile </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开启高效文件传输模式，sendfile 指令指定 nginx 是否调用 sendfile 函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘 IO 重负载应用，可设置为 off，以平衡磁盘与网络 I/O 处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成 off。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    autoindex </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开启目录列表访问，合适下载服务器，默认关闭。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    tcp_nopush </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#防止网络阻塞</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    tcp_nodelay </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#防止网络阻塞</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ##连接客户端超时时间各种参数设置##</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    keepalive_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 120</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#单位是秒，客户端连接时时间，超时之后服务器端自动关闭该连接 如果 nginx 守护进程在这个等待的时间里，一直没有收到浏览发过来 http 请求，则关闭这个 http 连接</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    client_header_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#客户端请求头的超时时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    client_body_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#客户端请求主体超时时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    reset_timedout_connection </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#告诉 nginx 关闭不响应的客户端连接。这将会释放那个客户端所占有的内存空间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    send_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;                 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#客户端响应超时时间，在两次客户端读取操作之间。如果在这段时间内，客户端没有读取任何数据，nginx 就会关闭连接</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # FastCGI 是一种 Web 服务器和后台程序之间的通信协议，用来把「动态请求」交给应用去执行，再把结果拿回给服务器返回给浏览器。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # FastCGI 相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能理解。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fastcgi_connect_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fastcgi_send_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fastcgi_read_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fastcgi_buffer_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fastcgi_buffers </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 64k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fastcgi_busy_buffers_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">128k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fastcgi_temp_file_write_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">128k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ###作为代理缓存服务器设置#######</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 先写到 temp 再移动到 cache</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #proxy_cache_path /var/tmp/nginx/proxy_cache levels=1:2 keys_zone=cache_one:512m inactive=10m max_size=64m;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 以上 proxy_temp 和 proxy_cache 需要在同一个分区中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # levels=1:2 表示缓存级别，表示缓存目录的第一级目录是 1 个字符，第二级目录是 2 个字符 keys_zone=cache_one:128m 缓存空间起名为 cache_one 大小为 512m</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # max_size=64m 表示单个文件超过 128m 就不缓存了  inactive=10m 表示缓存的数据，10 分钟内没有被访问过就删除</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #########end####################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #####对传输文件压缩###########</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #gzip 模块设置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开启 gzip 压缩输出</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip_min_length </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#最小压缩文件大小</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip_buffers </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#压缩缓冲区</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip_http_version </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#压缩版本（默认 1.1，前端如果是 squid2.5 请使用 1.0）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip_comp_level </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#压缩等级，gzip 压缩比，1 为最小，处理最快；9 为压缩比最大，处理最慢，传输速度最快，也最消耗 CPU；</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip_types </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text/plain application/x-javascript text/css application/xml;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #压缩类型，默认就已经包含 text/html，所以下面就不用再写了，写上去也不会有问题，但是会有一个 warn。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip_vary </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ##############################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #limit_zone crawler $binary_remote_addr 10m; #开启限制 IP 连接数的时候需要使用</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 负载均衡配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> blog.ha97.com </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #upstream 的负载均衡，weight 是权重，可以根据机器配置定义权重。weigth 参数表示权值，权值越高被分配到的几率越大。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 192.168.80.121:80 </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server 192.168.80.122:80 </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server 192.168.80.123:80 </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #虚拟主机的配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    server {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #监听端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #############https##################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #listen 443 ssl; # https 监听的端口号</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # ssl 证书路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #ssl_certificate /opt/https/xxxxxx.crt; </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 私钥文件路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #ssl_certificate_key /opt/https/xxxxxx.key;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 允许使用的 SSL/TLS 协议版本。：二者均已过时且不安全，浏览器和合规要求普遍禁用。现代配置应使用当前 Nginx/OpenSSL 文档推荐的版本</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #ssl_protocols SSLv3 TLSv1; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #协商 HTTPS 时 允许的加密套件（cipher suites） 列表，用的是 OpenSSL cipher 字符串 语法。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #ssl_ciphers HIGH:!ADH:!EXPORT57:RC4+RSA:+MEDIUM;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 在 TLS 1.2 及更早的协商里，是否优先采用服务器配置的 cipher 顺序（on = 服务端列表优先于客户端偏好）。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # TLS 会话缓存，用于 会话复用，减少完整握手次数，降低 CPU 延迟。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #ssl_session_cache shared:SSL:2m;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 客户端在 不重新完整握手 的前提下，会话信息在服务端缓存里保留多久</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #ssl_session_timeout 5m;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        ####################################end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #域名可以有多个，用空格隔开</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 接收到请求时，Nginx 会结合 listen（端口/地址） 和请求头里的 Host，选出 唯一一个 server 块来处理。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www.ha97.com ha97.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 默认文件配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html index.htm index.php;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 网站文件的根目录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/data/www/ha97;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 用正则匹配「像 PHP 脚本」的请求，把请求交给本机 PHP-FPM（FastCGI）处理</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> .*.(php|php5)?$ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            fastcgi_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">127.0.0.1:9000; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 转发到本机 PHP-FPM</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            fastcgi_index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.php; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 目录访问时的默认文件 \`index.php\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fastcgi.conf; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 加载标准 FastCGI 环境变量/参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #设置图片缓存时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> .*.(gif|jpg|jpeg|png|bmp|swf)$ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            expires </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #JS 和 CSS 缓存时间设置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> .*.(js|css)?$ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            expires </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #日志格式设定</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        log_format </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">access </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_addr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> - $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> [$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_local</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">] &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body_bytes_sent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_referer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_user_agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_x_forwarded_for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #定义本虚拟主机的访问日志</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        access_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/log/nginx/ha97access.log access;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 对 URI 前缀 &quot;/&quot; 启用反向代理：所有未由更具体 location 匹配的请求，转发到本机 88 端口的上游服务</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 上游地址；未带 URI 后缀时，会把客户端完整 URI 原样传给后端（与 proxy_pass 带 / 结尾的规则不同，改配置时请对照官方文档自测）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://127.0.0.1:88;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 关闭 nginx 自动改写后端响应头里 Location/Refresh 中的主机与路径；若后端返回绝对 URL 且需改写成对外的域名，可改用 default 或具体规则</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_redirect </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 透传客户端信息给后端（后端日志、限流、业务逻辑若依赖「真实 IP」，应读这些头并注意伪造风险，网关侧可做可信代理配置）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在已有 X-Forwarded-For 上追加，适合多层反向代理链</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 保持原始 Host，避免后端按错误 server_name 路由</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 客户端请求体：上传、POST JSON 等总大小上限；超过常返回 413（与「单文件」无严格一一对应，表单多字段合计也受此限制）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            client_max_body_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 接收请求体时优先使用的内存缓冲大小；超出部分可能写入 client_body_temp_path 临时文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            client_body_buffer_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">128k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            ## Nginx 与后端（upstream）之间的连接、超时与响应缓冲 ##</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 与后端建立连接的最长等待时间（单位：秒，下同）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_connect_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 向后端发送请求（含请求体）时，两次写操作之间的超时；后端读慢时易触发</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_send_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 从后端读响应时，两次读操作之间的超时；后端生成页面慢时需适当加大</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_read_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 是否缓冲后端响应；on 时响应先进入 proxy_buffers，利于慢客户端与后端解耦；流式/SSE 等场景常需 off</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_buffering </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 读取后端响应头使用的缓冲大小（响应头较大时需调大）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_buffer_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 存放后端响应体的缓冲：4 块 × 32k；页面/JSON 很大时需增大块数或单块大小</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_buffers </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 正在发送给客户端的响应可占用的缓冲上限，一般为 proxy_buffers 中单块大小的 1～2 倍量级，需大于单块 buffer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_busy_buffers_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 当响应体超过可缓冲部分时写入磁盘临时文件，此值为该临时文件允许的最大体积；过大响应仍可能受磁盘与同步转发策略影响</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_max_temp_file_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2048m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 每次向后端缓冲临时文件写入的数据块大小，影响磁盘 I/O 粒度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_temp_file_write_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">512k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 代理临时文件目录；需提前创建且 nginx 进程用户有写权限</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_temp_path </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/tmp/nginx/proxy_temp;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 存放 proxy 相关头名（如 hide_proxy_headers 等）的哈希表容量；过大头名列表时需调大，避免启动报错或冲突</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_headers_hash_max_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">51200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 哈希桶大小，与 max_size 配合；异常时可按 error.log 提示调整</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_headers_hash_bucket_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            #######################################################</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #设定查看 nginx 状态的地址</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /nginxStatus </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            stub_status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> on;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            access_log </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            auth_basic </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nginxStatus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            auth_basic_user_file </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">conf/htpasswd;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            #htpasswd 文件的内容可以用 apache 提供的 htpasswd 工具来产生。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #本地动静分离反向代理配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #所有 jsp 的页面均交由 tomcat 或 resin 处理</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> .(jsp|jspx|do)?$ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://127.0.0.1:8080;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #所有静态文件由 nginx 直接读取不经过 tomcat 或 resin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .*.(htm|html|gif|jpg|jpeg|png|bmp|swf|ioc|rar|zip|txt|flv|mid|doc|ppt|pdf|xls|mp3|wma)$</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> expires </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .*.(js|css)?$</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> expires </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # ---------- 伪静态（友好 URL）示例：仅注释说明；与上文已有 location / 二选一，勿重复定义 ----------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 伪静态：URL 看起来像静态路径，实际由动态程序处理；常用 try_files 或 rewrite 落到真实脚本或统一入口（如 index.php）。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 本实例已在「location /」中使用 proxy_pass，伪静态路由一般由 88 端口上的后端完成；若改为本机 PHP 直出，可去掉 proxy 的 location / 并启用下述示例。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #location / {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #    try_files $uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #rewrite ^/article/([0-9]+)$ /article.php?id=$1 last;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # ----------------------------------------------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="什么是-nginx-伪静态配置" tabindex="-1">什么是 Nginx 伪静态配置 <a class="header-anchor" href="#什么是-nginx-伪静态配置" aria-label="Permalink to &quot;什么是 Nginx 伪静态配置&quot;">​</a></h2><p><strong>伪静态</strong>指：对外 URL <strong>像静态资源路径</strong>（简洁、少 <code>?query</code> 或少暴露 <code>.php</code>），实际仍由 <strong>动态程序</strong> 处理。Nginx 侧的伪静态配置，通常指用 <code>try_files</code>、<code>rewrite</code> 等把请求 <strong>转到</strong> 真实脚本、统一入口（如 <code>index.php</code>）或交给上游应用解析。</p><p>常见目的：<strong>可读 URL</strong>、<strong>SEO</strong>、<strong>弱化技术栈外观</strong>。规则必须与 <strong>应用路由</strong> 一致；与「整站 <code>proxy_pass</code>」不要重复写两个 <code>location /</code>，伪静态可在 Nginx 或后端择一或分层处理。</p><h3 id="示例一-try-files-php-统一入口" tabindex="-1">示例一：<code>try_files</code> + PHP 统一入口 <a class="header-anchor" href="#示例一-try-files-php-统一入口" aria-label="Permalink to &quot;示例一：\`try_files\` + PHP 统一入口&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> \\.php$ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fastcgi_params;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fastcgi_param </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fastcgi_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">unix:/run/php/php-fpm.sock;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="示例二-wordpress-常用" tabindex="-1">示例二：WordPress 常用 <a class="header-anchor" href="#示例二-wordpress-常用" aria-label="Permalink to &quot;示例二：WordPress 常用&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$uri $uri/ /index.php?$args;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="示例三-rewrite-映射到真实脚本" tabindex="-1">示例三：<code>rewrite</code> 映射到真实脚本 <a class="header-anchor" href="#示例三-rewrite-映射到真实脚本" aria-label="Permalink to &quot;示例三：\`rewrite\` 映射到真实脚本&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> ^/article/([0-9]+)$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /article.php?id=$1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">last</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p><code>last</code> 表示改写后重新走 location 匹配；具体以程序约定为准。</p><h2 id="基本规则" tabindex="-1">基本规则 <a class="header-anchor" href="#基本规则" aria-label="Permalink to &quot;基本规则&quot;">​</a></h2><h3 id="管理-nginx-配置" tabindex="-1">管理 Nginx 配置 <a class="header-anchor" href="#管理-nginx-配置" aria-label="Permalink to &quot;管理 Nginx 配置&quot;">​</a></h3><blockquote><p>随着 Nginx 配置的增长，您有必要组织、管理配置内容。</p><p>当您的 Nginx 配置增加时，组织配置的需求也会增加。 井井有条的代码是：</p><ul><li>易于理解</li><li>易于维护</li><li>易于使用</li></ul></blockquote><blockquote><p>使用 <code>include</code> 指令可将常用服务器配置移动到单独的文件中，并将特定代码附加到全局配置，上下文等中。</p></blockquote><blockquote><p>我总是尝试在配置树的根目录中保留多个目录。 这些目录存储所有附加到主文件的配置文件。 我更喜欢以下结构：</p><ul><li><code>html</code> - 用于默认静态文件，例如 全局 5xx 错误页面</li><li><code>master</code> - 用于主要配置，例如 ACL，侦听指令和域 <ul><li><code>_acls</code> - 用于访问控制列表，例如 地理或地图模块</li><li><code>_basic</code> - 用于速率限制规则，重定向映射或代理参数</li><li><code>_listen</code> - 用于所有侦听指令； 还存储 SSL 配置</li><li><code>_server</code> - 用于域（localhost）配置； 还存储所有后端定义</li></ul></li><li><code>modules</code> - 用于动态加载到 Nginx 中的模块</li><li><code>snippets</code> - 用于 Nginx 别名，配置模板</li></ul><p>如果有必要，我会将其中一些附加到具有 <code>server</code> 指令的文件中。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Store this configuration in https.conf for example:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10.240.20.2:443 ssl;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_certificate </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/nginx/master/_server/example.com/certs/nginx_example.com_bundle.crt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_certificate_key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/nginx/master/_server/example.com/certs/example.com.key;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Include this file to the server section:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/nginx/master/_listen/10.240.20.2/https.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## And other:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/nginx/master/_static/errors.conf;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/nginx/master/_server/_helpers/global.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain.com www.domain.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span></code></pre></div><h3 id="重加载-nginx-配置" tabindex="-1">重加载 Nginx 配置 <a class="header-anchor" href="#重加载-nginx-配置" aria-label="Permalink to &quot;重加载 Nginx 配置&quot;">​</a></h3><p>示例：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 2)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 3)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/etc/init.d/nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 4)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/usr/sbin/nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 5)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">kill</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -HUP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/run/nginx.pid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## or</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">kill</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -HUP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pgrep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;nginx: master&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 6)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/usr/sbin/nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;daemon on; master_process on;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span></span></code></pre></div><h3 id="监听-80-和-443-端口" tabindex="-1">监听 80 和 443 端口 <a class="header-anchor" href="#监听-80-和-443-端口" aria-label="Permalink to &quot;监听 80 和 443 端口&quot;">​</a></h3><blockquote><p>如果您使用完全相同的配置为 HTTP 和 HTTPS 提供服务（单个服务器同时处理 HTTP 和 HTTPS 请求），Nginx 足够智能，可以忽略通过端口 80 加载的 SSL 指令。</p><p>Nginx 的最佳实践是使用单独的服务器进行这样的重定向（不与您的主要配置的服务器共享），对所有内容进行硬编码，并且完全不使用正则表达式。</p><p>我不喜欢复制规则，但是单独的监听指令无疑可以帮助您维护和修改配置。</p><p>如果将多个域固定到一个 IP 地址，则很有用。 这使您可以将一个侦听指令（例如，如果将其保留在配置文件中）附加到多个域配置。</p><p>如果您使用的是 HTTPS，则可能还需要对域进行硬编码，因为您必须预先知道要提供的证书。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## For HTTP:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10.240.20.2:80;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## For HTTPS:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10.240.20.2:443 ssl;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="显示指定监听的地址和端口" tabindex="-1">显示指定监听的地址和端口 <a class="header-anchor" href="#显示指定监听的地址和端口" aria-label="Permalink to &quot;显示指定监听的地址和端口&quot;">​</a></h3><p>Nginx 的 listen 指令用于监听指定的 IP 地址和端口号，配置形式为：<code>listen &lt;address&gt;:&lt;port&gt;</code>。若 IP 地址或端口缺失，Nginx 会以默认值来替换。</p><p>而且，仅当需要区分与 listen 指令中的同一级别匹配的服务器块时，才会评估 server_name 指令。</p><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## This block will be processed:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168.252.10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## --&gt; 192.168.252.10:80</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## --&gt; *:80 --&gt; 0.0.0.0:80</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">api.random.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="防止使用未定义的服务器名称处理请求" tabindex="-1">防止使用未定义的服务器名称处理请求 <a class="header-anchor" href="#防止使用未定义的服务器名称处理请求" aria-label="Permalink to &quot;防止使用未定义的服务器名称处理请求&quot;">​</a></h3><blockquote><p>Nginx 应该阻止使用未定义的服务器名称（也使用 IP 地址）处理请求。它可以防止配置错误，例如流量转发到不正确的后端。通过创建默认虚拟虚拟主机可以轻松解决该问题，该虚拟虚拟主机可以捕获带有无法识别的主机标头的所有请求。</p><p>如果没有一个 listen 指令具有 default_server 参数，则具有 address：port 对的第一台服务器将是该对的默认服务器（这意味着 Nginx 始终具有默认服务器）。</p><p>如果有人使用 IP 地址而不是服务器名称发出请求，则主机请求标头字段将包含 IP 地址，并且可以使用 IP 地址作为服务器名称来处理请求。</p><p>在现代版本的 Nginx 中，不需要服务器名称_。如果找不到具有匹配的 listen 和 server_name 的服务器，Nginx 将使用默认服务器。如果您的配置分散在多个文件中，则评估顺序将不明确，因此您需要显式标记默认服务器。</p><p>Nginx 使用 Host 标头进行 server_name 匹配。它不使用 TLS SNI。这意味着对于 SSL 服务器，Nginx 必须能够接受 SSL 连接，这归结为具有证书/密钥。证书/密钥可以是任意值，例如自签名。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Place it at the beginning of the configuration file to prevent mistakes:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## For ssl option remember about SSL parameters (private key, certs, cipher suites, etc.);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## add default_server to your listen directive in the server that you want to act as the default:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10.240.20.2:443 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">default_server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ssl;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## We catch:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ##   - invalid domain names</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ##   - requests without the &quot;Host&quot; header</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ##   - and all others (also due to the above setting)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ##   - default_server in server_name directive is not required - I add this for a better understanding and I think it&#39;s an unwritten standard</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## ...but you should know that it&#39;s irrelevant, really, you can put in everything there.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> default_server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 444</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## We can also serve:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## location / {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ## static file (error page):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ##   root /etc/nginx/error-pages/404;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ## or redirect:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ##   return 301 https://badssl.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ## return 444;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10.240.20.2:443 ssl;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10.240.20.2:443 ssl;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain.org;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="不要在-listen-或-upstream-中使用-hostname" tabindex="-1">不要在 listen 或 upstream 中使用 hostname <a class="header-anchor" href="#不要在-listen-或-upstream-中使用-hostname" aria-label="Permalink to &quot;不要在 listen 或 upstream 中使用 hostname&quot;">​</a></h3><blockquote><p>通常，在 listen 或上游指令中使用主机名是一种不好的做法。</p><p>在最坏的情况下，Nginx 将无法绑定到所需的 TCP 套接字，这将完全阻止 Nginx 启动。</p><p>最好和更安全的方法是知道需要绑定的 IP 地址，并使用该地址代替主机名。 这也可以防止 Nginx 查找地址并消除对外部和内部解析器的依赖。</p><p>在 server_name 指令中使用$ hostname（计算机的主机名）变量也是不当行为的示例（类似于使用主机名标签）。</p><p>我认为也有必要设置 IP 地址和端口号对，以防止可能难以调试的软错误。</p></blockquote><p>示例：</p><p>❌ 错误配置</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http://x-9s-web01-prod:8080;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rev-proxy-prod:80;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>⭕ 正确配置</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http://192.168.252.200:8080;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10.10.100.20:80;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="指令中只配置一个-ssl" tabindex="-1">指令中只配置一个 SSL <a class="header-anchor" href="#指令中只配置一个-ssl" aria-label="Permalink to &quot;指令中只配置一个 SSL&quot;">​</a></h3><blockquote><p>此规则使调试和维护更加容易。</p><p>请记住，无论 SSL 参数如何，您都可以在同一监听指令（IP 地址）上使用多个 SSL 证书。</p><p>我认为要在多个 HTTPS 服务器之间共享一个 IP 地址，您应该使用一个 SSL 配置（例如协议，密码，曲线）。这是为了防止错误和配置不匹配。</p><p>还请记住有关默认服务器的配置。这很重要，因为如果所有 listen 指令都没有 default_server 参数，则配置中的第一台服务器将是默认服务器。因此，您应该只使用一个 SSL 设置，并且在同一 IP 地址上使用多个名称。</p><p>从 Nginx 文档中：</p><p>这是由 SSL 协议行为引起的。在浏览器发送 HTTP 请求之前，已建立 SSL 连接，nginx 不知道所请求服务器的名称。因此，它可能仅提供默认服务器的证书。</p><p>还要看看这个：</p><p>TLS 服务器名称指示扩展名（SNI，RFC 6066）是在单个 IP 地址上运行多个 HTTPS 服务器的更通用的解决方案，它允许浏览器在 SSL 握手期间传递请求的服务器名称，因此，服务器将知道哪个用于连接的证书。</p><p>另一个好主意是将常用服务器设置移到单独的文件（即 common / example.com.conf）中，然后将其包含在单独的服务器块中。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Store this configuration in e.g. https.conf:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">192.168.252.10:443 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">default_server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ssl http2;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_protocols </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TLSv1.2;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_ciphers </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_prefer_server_ciphers </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_ecdh_curve </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">secp521r1:secp384r1;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Include this file to the server context (attach domain-a.com for specific listen directive):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            /etc/nginx/https.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        domain-a.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ssl_certificate </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    domain-a.com.crt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ssl_certificate_key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain-a.com.key;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Include this file to the server context (attach domain-b.com for specific listen directive):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            /etc/nginx/https.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        domain-b.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ssl_certificate </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    domain-b.com.crt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ssl_certificate_key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain-b.com.key;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="使用-geo-map-模块替代-allow-deny" tabindex="-1">使用 geo/map 模块替代 allow/deny <a class="header-anchor" href="#使用-geo-map-模块替代-allow-deny" aria-label="Permalink to &quot;使用 geo/map 模块替代 allow/deny&quot;">​</a></h3><blockquote><p>使用地图或地理模块（其中之一）可以防止用户滥用您的服务器。这样就可以创建变量，其值取决于客户端 IP 地址。</p><p>由于仅在使用变量时才对其进行求值，因此甚至仅存在大量已声明的变量。地理位置变量不会为请求处理带来任何额外费用。</p><p>这些指令提供了阻止无效访问者的完美方法，例如使用 ngx_http_geoip_module。例如，geo 模块非常适合有条件地允许或拒绝 IP。</p><p>geo 模块（注意：不要将此模块误认为是 GeoIP）在加载配置时会构建内存基数树。这与路由中使用的数据结构相同，并且查找速度非常快。如果每个网络有许多唯一值，那么较长的加载时间是由在数组中搜索数据重复项引起的。否则，可能是由于插入基数树引起的。</p><p>我将两个模块都用于大型列表。您应该考虑一下，因为此规则要求使用多个 if 条件。我认为，对于简单的列表，毕竟允许/拒绝指令是更好的解决方案。看下面的例子：</p></blockquote><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Allow/deny:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /internal </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">acls/internal.conf;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  allow </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  192.168.240.0/24;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  deny </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## vs geo/map:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /internal </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($globals_internal_map_acl) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$pass </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($pass </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">= </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://localhost:80;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($pass </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!= </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 403</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Map module:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">remote_addr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $globals_internal_map_acl {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## Status code:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ##  - 0 = false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ##  - 1 = true</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  default</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ### INTERNAL ###</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  10.255.10.0/24 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  10.255.20.0/24 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  10.255.30.0/24 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  192.168.0.0/16 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Geo module:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">geo </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$globals_internal_geo_acl {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## Status code:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ##  - 0 = false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ##  - 1 = true</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  default</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ### INTERNAL ###</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  10.255.10.0/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">24</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  10.255.20.0/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">24</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  10.255.30.0/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">24</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  192.168.0.0/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">16</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="map-所有事物" tabindex="-1">Map 所有事物 <a class="header-anchor" href="#map-所有事物" aria-label="Permalink to &quot;Map 所有事物&quot;">​</a></h3><blockquote><p>使用地图管理大量重定向，并使用它们来自定义键/值对。</p><p>map 指令可映射字符串，因此可以表示例如 192.168.144.0/24 作为正则表达式，并继续使用 map 指令。</p><p>Map 模块提供了一种更优雅的解决方案，用于清晰地解析大量正则表达式，例如 用户代理，引荐来源。</p><p>您还可以对地图使用 include 指令，这样配置文件看起来会很漂亮。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">http_user_agent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $device_redirect {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;desktop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(?i)ip(hone|od) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mobile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(?i)android.*(mobile|mini) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mobile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Mobile.+Firefox </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mobile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">^HTC </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mobile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Fennec </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mobile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IEMobile </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mobile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BB10 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mobile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SymbianOS.*AppleWebKit </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mobile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Opera</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\\sMobi </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mobile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Turn on in a specific context (e.g. location):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($device_redirect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">= </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mobile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 301</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https://m.domain.com$request_uri;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="为所有未匹配的路径设置根路径" tabindex="-1">为所有未匹配的路径设置根路径 <a class="header-anchor" href="#为所有未匹配的路径设置根路径" aria-label="Permalink to &quot;为所有未匹配的路径设置根路径&quot;">​</a></h3><blockquote><p>为请求设置服务器指令内部的全局根路径。 它为未定义的位置指定根路径。</p><p>根据官方文档：</p><p>如果您在每个位置块中添加一个根路径，则不匹配的位置块将没有根路径。因此，重要的是，根指令必须在您的位置块之前发生，然后根目录指令可以在需要时覆盖该指令。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/www/domain.com/public;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /api </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /static </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/www/domain.com/static;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="使用-return-指令进行-url-重定向-301、302" tabindex="-1">使用 return 指令进行 URL 重定向（301、302） <a class="header-anchor" href="#使用-return-指令进行-url-重定向-301、302" aria-label="Permalink to &quot;使用 return 指令进行 URL 重定向（301、302）&quot;">​</a></h3><blockquote><p>这是一个简单的规则。 您应该使用服务器块和 return 语句，因为它们比评估 RegEx 更快。</p><p>因为 Nginx 停止处理请求（而不必处理正则表达式），所以它更加简单快捷。</p></blockquote><p>示例</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www.example.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## return    301 https://$host$request_uri;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      301</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $scheme://www.example.com$request_uri;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="配置日志轮换策略" tabindex="-1">配置日志轮换策略 <a class="header-anchor" href="#配置日志轮换策略" aria-label="Permalink to &quot;配置日志轮换策略&quot;">​</a></h3><blockquote><p>日志文件为您提供有关服务器活动和性能以及可能出现的任何问题的反馈。 它们记录了有关请求和 Nginx 内部的详细信息。 不幸的是，日志使用了更多的磁盘空间。</p><p>您应该定义一个过程，该过程将定期存档当前日志文件并启动一个新日志文件，重命名并有选择地压缩当前日志文件，删除旧日志文件，并强制日志记录系统开始使用新日志文件。</p><p>我认为最好的工具是 logrotate。 如果我想自动管理日志，也想睡个好觉，那么我会在任何地方使用它。 这是一个旋转日志的简单程序，使用 crontab 可以工作。 它是计划的工作，而不是守护程序，因此无需重新加载其配置。</p></blockquote><p>示例：</p><ul><li><p>手动旋转</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Check manually (all log files):</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">logrotate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -dv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/logrotate.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Check manually with force rotation (specific log file):</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">logrotate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -dv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/logrotate.d/nginx</span></span></code></pre></div></li><li><p>自动旋转</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/logrotate.d/nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __EOF__</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/log/nginx/*.log {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  daily</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  missingok</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  rotate 14</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  compress</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  delaycompress</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  notifempty</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  create 0640 nginx nginx</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  sharedscripts</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  prerotate</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    if [ -d /etc/logrotate.d/httpd-prerotate ]; then </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      run-parts /etc/logrotate.d/httpd-prerotate; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    fi </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  endscript</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  postrotate</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ## test ! -f /var/run/nginx.pid || kill -USR1 \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/run/nginx.pid\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    invoke-rc.d nginx reload &gt;/dev/null 2&gt;&amp;1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  endscript</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/log/nginx/localhost/*.log {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  daily</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  missingok</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  rotate 14</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  compress</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  delaycompress</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  notifempty</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  create 0640 nginx nginx</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  sharedscripts</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  prerotate</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    if [ -d /etc/logrotate.d/httpd-prerotate ]; then </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      run-parts /etc/logrotate.d/httpd-prerotate; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    fi </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  endscript</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  postrotate</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ## test ! -f /var/run/nginx.pid || kill -USR1 \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/run/nginx.pid\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    invoke-rc.d nginx reload &gt;/dev/null 2&gt;&amp;1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  endscript</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/log/nginx/domains/example.com/*.log {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  daily</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  missingok</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  rotate 14</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  compress</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  delaycompress</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  notifempty</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  create 0640 nginx nginx</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  sharedscripts</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  prerotate</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    if [ -d /etc/logrotate.d/httpd-prerotate ]; then </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      run-parts /etc/logrotate.d/httpd-prerotate; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    fi </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  endscript</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  postrotate</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ## test ! -f /var/run/nginx.pid || kill -USR1 \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/run/nginx.pid\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    invoke-rc.d nginx reload &gt;/dev/null 2&gt;&amp;1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  endscript</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">__EOF__</span></span></code></pre></div></li></ul><h3 id="不要重复索引指令-只能在-http-块中使用" tabindex="-1">不要重复索引指令，只能在 http 块中使用 <a class="header-anchor" href="#不要重复索引指令-只能在-http-块中使用" aria-label="Permalink to &quot;不要重复索引指令，只能在 http 块中使用&quot;">​</a></h3><blockquote><p>一次使用 index 指令。 它只需要在您的 http 上下文中发生，并将在下面继承。</p><p>我认为我们在复制相同规则时应格外小心。 但是，当然，规则的重复有时是可以的，或者不一定是大麻烦。</p></blockquote><p>示例：</p><p>❌ 错误配置</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.php index.htm index.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www.example.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.php index.html index.$geo.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www.example.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.php index.htm index.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /data </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.php;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>⭕ 正确配置</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.php index.htm index.html index.$geo.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www.example.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www.example.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /data </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="debugging" tabindex="-1">Debugging <a class="header-anchor" href="#debugging" aria-label="Permalink to &quot;Debugging&quot;">​</a></h2><h3 id="使用自定义日志格式" tabindex="-1">使用自定义日志格式 <a class="header-anchor" href="#使用自定义日志格式" aria-label="Permalink to &quot;使用自定义日志格式&quot;">​</a></h3><blockquote><p>您可以在 Nginx 配置中作为变量访问的任何内容都可以记录，包括非标准的 HTTP 标头等。因此，这是一种针对特定情况创建自己的日志格式的简单方法。</p><p>这对于调试特定的 <code>location</code> 指令非常有帮助。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Default main log format from the Nginx repository:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">log_format </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">main</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_addr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> - $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> [$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_local</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">] &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body_bytes_sent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_referer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;&quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_user_agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_x_forwarded_for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Extended main log format:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">log_format </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">main-level-0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_addr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> - $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> [$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_local</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">] &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;&quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request_method</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scheme</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">://$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request_uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server_protocol</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body_bytes_sent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;&quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_referer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http_user_agent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request_time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Debug log formats:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">log_format </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">debug-level-0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_addr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> - $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote_user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> [$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_local</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">] &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;&quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request_method</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scheme</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">://$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request_uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server_protocol</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body_bytes_sent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">msec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request_time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upstream_connect_time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upstream_header_time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upstream_response_time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request_filename</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request_completion</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="使用调试模式来跟踪意外行为" tabindex="-1">使用调试模式来跟踪意外行为 <a class="header-anchor" href="#使用调试模式来跟踪意外行为" aria-label="Permalink to &quot;使用调试模式来跟踪意外行为&quot;">​</a></h3><blockquote><p>通常，<code>error_log</code> 指令是在 <code>main</code> 中指定的，但是也可以在 <code>server</code> 或 <code>location</code> 块中指定，全局设置将被覆盖，并且这个 <code>error_log</code> 指令将设置其自己的日志文件路径和日志记录级别。</p><p>如果要记录 <code>ngx_http_rewrite_module</code> (at the notice level) ，应该在 <code>http</code>、<code>server</code> 或 <code>location</code> 块中开启 <code>rewrite_log on;</code>。</p><p>注意：</p><ul><li>永远不要将调试日志记录留在生产环境中的文件上</li><li>不要忘记在流量非常高的站点上恢复 <code>error_log</code> 的调试级别</li><li>必须使用日志回滚政策</li></ul></blockquote><p>示例：</p><ul><li>将 debug 信息写入文件</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Turn on in a specific context, e.g.:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   - global    - for global logging</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   - http      - for http and all locations logging</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   - location  - for specific location</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/log/nginx/error-debug.log </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><ul><li>将 debug 信息写入内存</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">memory:32m </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><ul><li>IP 地址/范围的调试日志：</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">events</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  debug_connection </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   192.168.252.15/32;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  debug_connection </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   10.10.10.0/24;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>为不同服务器设置不同 Debug 配置</li></ul><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/log/nginx/debug.log </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ## To enable debugging:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/log/nginx/domain.com/domain.com-debug.log </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ## To disable debugging:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/log/nginx/domain.com/domain.com-debug.log;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="核心转储" tabindex="-1">核心转储 <a class="header-anchor" href="#核心转储" aria-label="Permalink to &quot;核心转储&quot;">​</a></h3><blockquote><p>核心转储基本上是程序崩溃时内存的快照。</p><p>Nginx 是一个非常稳定的守护程序，但是有时可能会发生正在运行的 Nginx 进程独特终止的情况。</p><p>如果要保存内存转储，它可以确保应启用两个重要的指令，但是，为了正确处理内存转储，需要做一些事情。 有关它的完整信息，请参见转储进程的内存（来自本手册）。</p><p>当您的 Nginx 实例收到意外错误或崩溃时，应始终启用核心转储。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_rlimit_core </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   500m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_rlimit_nofile </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 65535</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">working_directory </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    /var/dump/nginx;</span></span></code></pre></div><h2 id="性能" tabindex="-1">性能 <a class="header-anchor" href="#性能" aria-label="Permalink to &quot;性能&quot;">​</a></h2><h3 id="工作进程数" tabindex="-1">工作进程数 <a class="header-anchor" href="#工作进程数" aria-label="Permalink to &quot;工作进程数&quot;">​</a></h3><blockquote><p><code>worker_processes</code> - 用于设置 Nginx 的工作进程数。</p></blockquote><ul><li>worker_processes 的默认值为 1。</li><li>设置 worker_processes 的安全做法是将其设为 auto，则启动 Nginx 时会自动分配工作进程数。当然，也可以显示的设置一个工作进程数值。</li><li>一般一个进程足够了，你可以把连接数设得很大。（worker_processes: 1，worker_connections: 10,000）如果有 SSL、gzip 这些比较消耗 CPU 的工作，而且是多核 CPU 的话，可以设为和 CPU 的数量一样。或者要处理很多很多的小文件，而且文件总大小比内存大很多的时候，也可以把进程数增加，以充分利用 IO 带宽（主要似乎是 IO 操作有 block）</li></ul><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## The safest way:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_processes </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">auto;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## VCPU = 4 , expr $(nproc --all) - 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_processes </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="最大连接数" tabindex="-1">最大连接数 <a class="header-anchor" href="#最大连接数" aria-label="Permalink to &quot;最大连接数&quot;">​</a></h3><blockquote><p><code>worker_connections</code> - 单个 Nginx 工作进程允许同时建立的外部连接的数量。数字越大，能同时处理的连接越多。</p></blockquote><p><code>worker_connections</code> 不是随便设置的，而是与两个指标有重要关联：</p><ul><li>内存 <ul><li>每个连接数分别对应一个 read_event、一个 write_event 事件，一个连接数大概占用 232 字节，2 个事件总占用 96 字节，那么一个连接总共占用 328 字节，通过数学公式可以算出 100000 个连接数大概会占用 31M = 100000 * 328 / 1024 / 1024，当然这只是 nginx 启动时，worker_connections 连接数所占用的 nginx。</li></ul></li><li>操作系统级别”进程最大可打开文件数“。 <ul><li>进程最大可打开文件数受限于操作系统，可通过 <code>ulimit -n</code> 命令查询，以前是 1024，现在是 65535。</li><li>nginx 提供了 worker_rlimit_nofile 指令，这是除了 ulimit 的一种设置可用的描述符的方式。 该指令与使用 ulimit 对用户的设置是同样的效果。此指令的值将覆盖 ulimit 的值，如：worker_rlimit_nofile 20960; 设置 ulimits：ulimit -SHn 65535</li></ul></li></ul><h3 id="使用-http-2" tabindex="-1">使用 HTTP/2 <a class="header-anchor" href="#使用-http-2" aria-label="Permalink to &quot;使用 HTTP/2&quot;">​</a></h3><blockquote><p>HTTP / 2 将使我们的应用程序更快，更简单且更可靠。 HTTP / 2 的主要目标是通过启用完整的请求和响应多路复用来减少延迟，通过有效压缩 HTTP 标头字段来最小化协议开销，并增加对请求优先级和服务器推送的支持。</p><p>HTTP / 2 与 HTTP / 1.1 向后兼容，因此有可能完全忽略它，并且一切都会像以前一样继续工作，因为如果不支持 HTTP / 2 的客户端永远不会向服务器请求 HTTP / 2 通讯升级：它们之间的通讯将完全是 HTTP1 / 1。</p><p>请注意，HTTP / 2 在单个 TCP 连接中多路复用许多请求。 通常，当使用 HTTP / 2 时，将与服务器建立单个 TCP 连接。</p><p>您还应该包括 ssl 参数，这是必需的，因为浏览器不支持未经加密的 HTTP / 2。</p><p>HTTP / 2 对旧的和不安全的密码有一个非常大的黑名单，因此您应该避免使用它们。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10.240.20.2:443 ssl http2;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span></code></pre></div><h3 id="维护-ssl-会话" tabindex="-1">维护 SSL 会话 <a class="header-anchor" href="#维护-ssl-会话" aria-label="Permalink to &quot;维护 SSL 会话&quot;">​</a></h3><blockquote><p>客户端每次发出请求时都进行新的 SSL 握手的需求。默认情况下，内置会话缓存并不是最佳选择，因为它只能由一个工作进程使用，并且可能导致内存碎片，最好使用共享缓存。</p><p>使用 <code>ssl_session_cache</code> 时，通过 SSL 保持连接的性能可能会大大提高。10M 的值是一个很好的起点（1MB 共享缓存可以容纳大约 4,000 个会话）。通过共享，所有工作进程之间共享一个缓存（可以在多个虚拟服务器中使用相同名称的缓存）。</p><p>但是，大多数服务器不清除会话或票证密钥，因此增加了服务器受到损害将泄漏先前（和将来）连接中的数据的风险。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_session_cache </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  shared:NGX_SSL_CACHE:10m;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_session_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_session_tickets </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">off</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_buffer_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    1400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h4 id="尽可能在-server-name-指令中使用确切名称" tabindex="-1">尽可能在 server_name 指令中使用确切名称 <a class="header-anchor" href="#尽可能在-server-name-指令中使用确切名称" aria-label="Permalink to &quot;尽可能在 server_name 指令中使用确切名称&quot;">​</a></h4><blockquote><p>确切名称，以星号开头的通配符名称和以星号结尾的通配符名称存储在绑定到侦听端口的三个哈希表中。</p><p>首先搜索确切名称哈希表。 如果未找到名称，则搜索具有以星号开头的通配符名称的哈希表。 如果未在此处找到名称，则搜索带有通配符名称以星号结尾的哈希表。 搜索通配符名称哈希表比搜索精确名称哈希表要慢，因为名称是按域部分搜索的。</p><p>正则表达式是按顺序测试的，因此是最慢的方法，并且不可缩放。由于这些原因，最好在可能的地方使用确切的名称。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## It is more efficient to define them explicitly:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      192.168.252.10:80;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> example.org  www.example.org  *.example.org;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Than to use the simplified form:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      192.168.252.10:80;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .example.org;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="避免使用-if-检查-server-name" tabindex="-1">避免使用 <code>if</code> 检查 <code>server_name</code> <a class="header-anchor" href="#避免使用-if-检查-server-name" aria-label="Permalink to &quot;避免使用 \`if\` 检查 \`server_name\`&quot;">​</a></h3><blockquote><p>当 Nginx 收到请求时，无论请求的是哪个子域，无论是 www.example.com 还是普通的 example.com，如果始终对 if 指令进行评估。 由于您是在请求 Nginx 检查每个请求的 Host 标头。 效率极低。</p><p>而是使用两个服务器指令，如下面的示例。 这种方法降低了 Nginx 的处理要求。</p></blockquote><p>示例：</p><p>❌ 错误配置</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                domain.com www.domain.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($host </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">= </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www.domain.com) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    301</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https://domain.com$request_uri;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                domain.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>⭕ 正确配置</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              www.domain.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    301</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $scheme://domain.com$request_uri;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ## If you force your web traffic to use HTTPS:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ##                         301 https://domain.com$request_uri;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                   192.168.252.10:80;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              domain.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="使用-request-uri-来避免使用正则表达式" tabindex="-1">使用 <code>$request_uri</code> 来避免使用正则表达式 <a class="header-anchor" href="#使用-request-uri-来避免使用正则表达式" aria-label="Permalink to &quot;使用 \`$request_uri\` 来避免使用正则表达式&quot;">​</a></h3><blockquote><p>使用内置变量 <code>$request_uri</code>，我们可以完全避免进行任何捕获或匹配。默认情况下，正则表达式的代价较高，并且会降低性能。</p><p>此规则用于解决将 URL 不变地传递到新主机，确保仅通过现有 URI 进行返回的效率更高。</p></blockquote><p>示例：</p><p>❌ 错误配置</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 1)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> ^/(.*)$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https://example.com/$1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">permanent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 2)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> ^ https://example.com$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">request_uri? </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">permanent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>⭕ 正确配置</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 301</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https://example.com$request_uri;</span></span></code></pre></div><h3 id="使用-try-files-指令确认文件是否存在" tabindex="-1">使用 <code>try_files</code> 指令确认文件是否存在 <a class="header-anchor" href="#使用-try-files-指令确认文件是否存在" aria-label="Permalink to &quot;使用 \`try_files\` 指令确认文件是否存在&quot;">​</a></h3><blockquote><p><code>try_files</code> is definitely a very useful thing. You can use <code>try_files</code> directive to check a file exists in a specified order.</p></blockquote><blockquote><p>You should use <code>try_files</code> instead of <code>if</code> directive. It&#39;s definitely better way than using <code>if</code> for this action because <code>if</code> directive is extremely inefficient since it is evaluated every time for every request.</p></blockquote><blockquote><p>The advantage of using <code>try_files</code> is that the behavior switches immediately with one command. I think the code is more readable also.</p></blockquote><blockquote><p><code>try_files</code> allows you:</p><ul><li>to check if the file exists from a predefined list</li><li>to check if the file exists from a specified directory</li><li>to use an internal redirect if none of the files are found</li></ul></blockquote><p>示例：</p><p>❌ 错误配置</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/www/example.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /images </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-f </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request_filename) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      expires </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>⭕ 正确配置</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/www/example.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /images </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$uri </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">=404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="使用-return-代替-rewrite-来做重定向" tabindex="-1">使用 return 代替 rewrite 来做重定向 <a class="header-anchor" href="#使用-return-代替-rewrite-来做重定向" aria-label="Permalink to &quot;使用 return 代替 rewrite 来做重定向&quot;">​</a></h3><blockquote><p>您应该使用服务器块和 return 语句，因为它们比通过位置块评估 RegEx 更简单，更快捷。 该指令停止处理，并将指定的代码返回给客户端。</p></blockquote><p>示例：</p><p>❌ 错误配置</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($host </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">= </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">api.domain.com) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">     ^/(.*)$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http://example.com/$1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">permanent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span></code></pre></div><p>⭕ 正确配置</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($host </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">= </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">api.domain.com) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      403</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ## or other examples:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ##   return    301 https://domain.com$request_uri;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ##   return    301 $scheme://$host$request_uri;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span></code></pre></div><h3 id="开启-pcre-jit-来加速正则表达式处理" tabindex="-1">开启 PCRE JIT 来加速正则表达式处理 <a class="header-anchor" href="#开启-pcre-jit-来加速正则表达式处理" aria-label="Permalink to &quot;开启 PCRE JIT 来加速正则表达式处理&quot;">​</a></h3><blockquote><p>允许使用 JIT 的正则表达式来加速他们的处理。</p><p>通过与 PCRE 库编译 Nginx 的，你可以用你的 location 块进行复杂的操作和使用功能强大的 return 和 rewrite。</p><p>PCRE JIT 可以显著加快正则表达式的处理。 Nginx 的与 pcre_jit 比没有更快的幅度。</p><p>如果你试图在使用 pcre_jit;没有可用的 JIT，或者 Nginx 的与现有 JIT，但当前加载 PCRE 库编译不支持 JIT，将配置解析时发出警告。</p><p>当您编译使用 NGNIX 配置 PCRE 库时，才需要--with-PCRE-JIT 时（./configure --with-PCRE =）。当使用系统 PCRE 库 JIT 是否被支持依赖于库是如何被编译。</p><p>从 Nginx 的文档：</p><p>JIT 正在从与--enable-JIT 配置参数内置 8.20 版本开始 PCRE 库提供。当 PCRE 库与 nginx 的内置（--with-PCRE =）时，JIT 支持经由--with-PCRE-JIT 配置参数使能。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## In global context:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pcre_jit </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h4 id="进行精确的位置匹配以加快选择过程" tabindex="-1">进行精确的位置匹配以加快选择过程 <a class="header-anchor" href="#进行精确的位置匹配以加快选择过程" aria-label="Permalink to &quot;进行精确的位置匹配以加快选择过程&quot;">​</a></h4><blockquote><p>精确的位置匹配通常用于通过立即结束算法的执行来加快选择过程。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Matches the query / only and stops searching:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Matches the query /v9 only and stops searching:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> /v9 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Matches any query due to the fact that all queries begin at /,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## but regular expressions and any longer conventional blocks will be matched at first place:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="使用-limit-conn-改善对下载速度的限制" tabindex="-1">使用 <code>limit_conn</code> 改善对下载速度的限制 <a class="header-anchor" href="#使用-limit-conn-改善对下载速度的限制" aria-label="Permalink to &quot;使用 \`limit_conn\` 改善对下载速度的限制&quot;">​</a></h4><blockquote><p>Nginx provides two directives to limiting download speed:</p><p>Nginx 提供了两个指令来限制下载速度：</p><ul><li><code>limit_rate_after</code> - 设置 limit_rate 指令生效之前传输的数据量</li><li><code>limit_rate</code> - 允许您限制单个客户端连接的传输速率</li></ul></blockquote><blockquote><p>此解决方案限制了每个连接的 Nginx 下载速度，因此，如果一个用户打开多个（例如） 视频文件，则可以下载 <code>X * 连接到视频文件的次数</code> 。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Create limit connection zone:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">limit_conn_zone </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$binary_remote_addr zone=conn_for_remote_addr:1m;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Add rules to limiting the download speed:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">limit_rate_after </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## run at maximum speed for the first 1 megabyte</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">limit_rate </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">250k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## and set rate limit after 1 megabyte</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Enable queue:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /videos </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ## Max amount of data by one client: 10 megabytes (limit_rate_after * 10)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  limit_conn </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">conn_for_remote_addr </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span></code></pre></div><h2 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h2><p>负载平衡是一种有用的机制，可将传入的流量分布在几个有能力的服务器之间。</p><h3 id="健康检查" tabindex="-1">健康检查 <a class="header-anchor" href="#健康检查" aria-label="Permalink to &quot;健康检查&quot;">​</a></h3><blockquote><p>健康监控对于所有类型的负载平衡都非常重要，主要是为了业务连续性。 被动检查会按照客户端的请求监视通过 Nginx 的连接失败或超时。</p><p>默认情况下启用此功能，但是此处提到的参数允许您调整其行为。 默认值为：<code>max_fails = 1</code> 和 <code>fail_timeout = 10s</code>。</p></blockquote><p>示例：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> backend </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bk01_node:80 </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">max_fails</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fail_timeout=5s;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bk02_node:80 </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">max_fails</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fail_timeout=5s;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="down-参数" tabindex="-1">down 参数 <a class="header-anchor" href="#down-参数" aria-label="Permalink to &quot;down 参数&quot;">​</a></h3><blockquote><p>有时我们需要关闭后端，例如 在维护时。 我认为良好的解决方案是使用 down 参数将服务器标记为永久不可用，即使停机时间很短也是如此。</p><p>如果您使用 IP 哈希负载平衡技术，那也很重要。 如果其中一台服务器需要临时删除，则应使用此参数进行标记，以保留客户端 IP 地址的当前哈希值。</p><p>注释对于真正永久禁用服务器或要出于历史目的而保留信息非常有用。</p><p>Nginx 还提供了一个备份参数，将该服务器标记为备份服务器。 当主服务器不可用时，将传递请求。 仅当我确定后端将在维护时正常工作时，我才很少将此选项用于上述目的。</p></blockquote><h4 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> backend </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bk01_node:80 </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">max_fails</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fail_timeout=5s down;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bk02_node:80 </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">max_fails</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fail_timeout=5s;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="安全" tabindex="-1">安全 <a class="header-anchor" href="#安全" aria-label="Permalink to &quot;安全&quot;">​</a></h2><h3 id="防盗链" tabindex="-1">防盗链 <a class="header-anchor" href="#防盗链" aria-label="Permalink to &quot;防盗链&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~*</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> \\.(gif|jpg|png)$ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 只允许 192.168.0.1 请求资源</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    valid_referers </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">none blocked </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168.0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($invalid_referer) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> ^/ http://$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">host/logo.png;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://juejin.im/post/5d81906c518825300a3ec7ca" target="_blank" rel="noreferrer">nginx 这一篇就够了</a></li></ul>`,178)]))}const c=i(p,[["render",h]]);export{g as __pageData,c as default};
