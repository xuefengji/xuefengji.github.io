(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1088:function(s,t,n){"use strict";n.r(t);var a=n(1),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"ngixn-配置文件详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ngixn-配置文件详解"}},[s._v("#")]),s._v(" Ngixn 配置文件详解")]),s._v(" "),n("p",[s._v("本文基于 Nginx 1.18.0，介绍其配置文件 "),n("code",[s._v("nginx.conf")]),s._v(" 的主要配置参数。")]),s._v(" "),n("h2",{attrs:{id:"核心参数详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心参数详解"}},[s._v("#")]),s._v(" 核心参数详解")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("user  nginx nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定 Nginx 服务运行的用户和用户组")]),s._v("\nworker_processes  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义 Nginx 的 worker 进程数，建议等于 CPU 总核心数")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局指定 Nginx 错误日志，定义类型，[ debug | info | notice | warn | error | crit ]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果要关闭 error log，需要写成 error_log /dev/null;")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 而不是 error_log off; 否则错误日志会写到一个叫做 off 的文件中")]),s._v("\nerror_log  /var/log/nginx/error.log warn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\npid        /var/run/nginx.pid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定 Nginx PID 进程号文件")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一个 Nginx 进程打开的最多文件描述符数目")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 理论值应该是最多打开文件数（系统的值 ulimit -n）与 Nginx 进程数相除")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 但是 Nginx 分配请求并不均匀，所以建议与 ulimit -n 的值保持一致")]),s._v("\nworker_rlimit_nofile "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工作模式与连接数上限")]),s._v("\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考事件模型")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# epoll 模型是 Linux 2.6 以上版本内核中的高性能网络 I/O 模型")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果跑在 FreeBSD 上面，就用 kqueue 模型")]),s._v("\n    use epoll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单个进程最大连接数（最大连接数=连接数*进程数），默认值为 1024")]),s._v("\n    worker_connections  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设定 http 服务器")]),s._v("\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件扩展名与文件类型映射表")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Nginx 会根据 mime.type 定义的对应关系来告诉浏览器如何处理当前返回的文件（打开或下载）")]),s._v("\n    include       mime.types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当 Nginx 无法识别当前访问页面内容时（未定义的扩展名），默认触发下载动作")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 浏览器访问到未定义的扩展名的时候，就默认为下载该文件")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果将这个设置改成 default_type text/html; 即把所有未设置的扩展名当 HTML 文件打开")]),s._v("\n    default_type  application/octet-stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    charset utf-8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认编码")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器名字的 hash 表大小（看不懂的参数默认即可）")]),s._v("\n    server_names_hash_bucket_size "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 客户端请求头部的缓冲区大小")]),s._v("\n    client_header_buffer_size 32k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 客户请求头缓冲大小")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Nginx 默认会用 client_header_buffer_size 这个 buffer 来读取 header 值")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果 header 过大，它会使用 large_client_header_buffers 来读取")]),s._v("\n    large_client_header_buffers "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 64k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设定通过 Nginx 上传文件的大小")]),s._v("\n    client_max_body_size 8m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启高效文件传输模式")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sendfile 指令指定 Nginx 是否调用 sendfile 函数来输出文件")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于普通应用设为 on，如果用来进行下载等应用磁盘 IO 重负载应用，可设置为 off，以平衡磁盘与网络 I/O 处理速度，降低系统的负载")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意：如果图片显示不正常把这个改成 off")]),s._v("\n    sendfile on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启目录列表访问，适合下载服务器，默认关闭")]),s._v("\n    autoindex on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 防止网络阻塞：数据包会先累积到最大后一次性传输，可以最大化利用网络资源，但会有一点点延迟（默认开启）")]),s._v("\n    tcp_nopush on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 防止网络阻塞：小的数据包不等待直接传输（与 tcp_nopush 互斥，但两者可同为 on ，Nginx 会平衡这两个功能，默认开启）")]),s._v("\n    tcp_nodelay on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    keepalive_timeout "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 长连接超时时间，单位是秒")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# FastCGI 相关参数是为了改善网站的性能：减少资源占用，提高访问速度。")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考1：https://blog.csdn.net/luozhonghua2014/article/details/37737823")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考2：https://blog.51cto.com/blief/1739655")]),s._v("\n    fastcgi_connect_timeout "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接到后端 fastcgi 超时时间（秒）")]),s._v("\n    fastcgi_send_timeout "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指 Nginx 进程向 fastcgi 进程发送 request 的整个过程的超时时间（秒）")]),s._v("\n    fastcgi_read_timeout "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指 fastcgi 进程向 Nginx 进程发送 response 的整个过程的超时时间（秒）")]),s._v("\n    fastcgi_buffer_size 64k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取 fastcgi 应答第一部分需要多大缓冲区")]),s._v("\n    fastcgi_buffers "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 64k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定本地需要多少和多大的缓冲区来缓冲 fastcgi 应答请求")]),s._v("\n    fastcgi_busy_buffers_size 128k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认值是 fastcgi_buffer 的 2 倍")]),s._v("\n    fastcgi_temp_file_write_size 128k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写入缓存文件使用多大的数据块，默认值是 fastcgi_buffer 的 2 倍")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gzip 模块设置")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启 gzip 压缩输出")]),s._v("\n    gzip_min_length 1k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最小压缩文件大小")]),s._v("\n    gzip_buffers "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 16k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩缓冲区")]),s._v("\n    gzip_http_version "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩版本（默认 1.1，前端如果是 squid2.5 请使用 1.0）")]),s._v("\n    gzip_comp_level "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩等级")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩类型，默认就已经包含 text/html，所以下面就不用再写了，写上去也不会有问题，但是会有一个 warn")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 图片压缩：建议不对 gif、jpge 等图片进行压缩，因为其压缩比例极低，反而耗费 CPU，但 bmp 可以压缩，因为 bmp 压缩比例较大")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字体压缩：只需要为 ttf、otf 和 svg 字体启用 gzip，对其他字体格式进行 gzip 压缩时效果不明显")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考：https://blog.csdn.net/liupeifeng3514/article/details/79018334")]),s._v("\n    gzip_types text/plain application/x-javascript text/css application/xml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_vary on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否在 http header 中添加 Vary: Accept-Encoding，建议开启")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# limit_zone crawler $binary_remote_addr 10m;    # 开启限制 IP 连接数的时候需要使用")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# upstream 的负载均衡，weight 是权重，可以根据机器配置定义权重")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# weigth 参数表示权值，权值越高被分配到的几率越大")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Nginx 的 upstream 目前支持 4 种方式的分配，这里演示一种，后面章节会分别演示")]),s._v("\n    upstream www.baidu.com "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".80.121:80 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".80.122:80 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".80.123:80 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局指定 Nginx 访问日志的格式")]),s._v("\n    log_format  main  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr - $remote_user [$time_local] \"$request\" '")]),s._v("\n                      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$status $body_bytes_sent \"$http_referer\" '")]),s._v("\n                      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"$http_user_agent" "$http_x_forwarded_for"\'')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局定义 Nginx 访问日志的位置")]),s._v("\n    access_log  logs/access.log  main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一般上面两个不配置，只设置 access_log off; 然后在需要的 server 下配置日志")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这么做可以避免日志产生过大（如果 http 和 server 都不配置，默认会写入 logs/access.log）")]),s._v("\n    access_log  off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 虚拟主机的配置，一个 server 配置段一般对应一个域名")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在实际生产中一般会将这部分拆出来形成子配置文件，后面的章节会讲")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定监听端口")]),s._v("\n        server_name  www.baidu.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定当前网站的访问域名")]),s._v("\n\n        location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定代码位置")]),s._v("\n            index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定首页文件")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  定义 404 错误页面，如果是 404 错误，则把站点根目录下的 404.html 返回给用户 ")]),s._v("\n        error_page  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v("                    /404.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  定义 50x 错误页面，可以配合 location 使用，用 location 调用实际的错误页面")]),s._v("\n        error_page      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("    /50x.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n            root  /usr/share/nginx/html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br")])]),n("h2",{attrs:{id:"全局日志的关闭"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局日志的关闭"}},[s._v("#")]),s._v(" 全局日志的关闭")]),s._v(" "),n("p",[s._v("为了避免日志产生过大，也是处于模块化的思想，我们一般不在全局中（http 中）指定日志格式和输出位置，而是在子配置文件中（每个 server 中）单独配置。")]),s._v(" "),n("p",[s._v("但是如果 http 和 server 都不配置，默认会写入 "),n("code",[s._v("logs/access.log")]),s._v("，即全局的形式。所以需要关闭全局日志。")]),s._v(" "),n("p",[s._v("网上很多博客中展示的都是错误示例，这里演示正确的关闭方式，包括 "),n("code",[s._v("error_log")]),s._v(" 和 "),n("code",[s._v("access_log")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 错误示例，会产生名字为 off/on 的日志文件")]),s._v("\nerror_log off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\naccess_log on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n正确关闭方式\nerror_log /dev/null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\naccess_log off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"日志-log-format-可选项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志-log-format-可选项"}},[s._v("#")]),s._v(" 日志 log_format 可选项")]),s._v(" "),n("p",[s._v("默认格式：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("log_format  main  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr - $remote_user [$time_local] \"$request\" '")]),s._v("\n                  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$status $body_bytes_sent \"$http_referer\" '")]),s._v("\n                  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"$http_user_agent" "$http_x_forwarded_for"\'')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("参数释义表：")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("字段")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("$remote_addr")]),s._v(" "),n("td",[s._v("客户端地址")])]),s._v(" "),n("tr",[n("td",[s._v("$remote_user")]),s._v(" "),n("td",[s._v("客户端用户名称")])]),s._v(" "),n("tr",[n("td",[s._v("$time_local")]),s._v(" "),n("td",[s._v("访问时间和时区")])]),s._v(" "),n("tr",[n("td",[s._v("$request")]),s._v(" "),n("td",[s._v("请求的 URI 和 HTTP 协议")])]),s._v(" "),n("tr",[n("td",[s._v("$http_host")]),s._v(" "),n("td",[s._v("请求地址，即浏览器中你输入的地址（IP 或域名）")])]),s._v(" "),n("tr",[n("td",[s._v("$status")]),s._v(" "),n("td",[s._v("HTTP 请求状态")])]),s._v(" "),n("tr",[n("td",[s._v("$upstream_status")]),s._v(" "),n("td",[s._v("upstream 状态")])]),s._v(" "),n("tr",[n("td",[s._v("$body_bytes_sent")]),s._v(" "),n("td",[s._v("发送给客户端文件内容大小")])]),s._v(" "),n("tr",[n("td",[s._v("$http_referer")]),s._v(" "),n("td",[s._v("url 跳转来源")])]),s._v(" "),n("tr",[n("td",[s._v("$http_user_agent")]),s._v(" "),n("td",[s._v("用户终端浏览器等信息")])]),s._v(" "),n("tr",[n("td",[s._v("$ssl_protocol")]),s._v(" "),n("td",[s._v("SSL协议版本")])]),s._v(" "),n("tr",[n("td",[s._v("$ssl_cipher")]),s._v(" "),n("td",[s._v("交换数据中的算法")])]),s._v(" "),n("tr",[n("td",[s._v("$upstream_addr")]),s._v(" "),n("td",[s._v("后台 upstream 的地址，即真正提供服务的主机地址")])]),s._v(" "),n("tr",[n("td",[s._v("$request_time")]),s._v(" "),n("td",[s._v("整个请求的总时间")])]),s._v(" "),n("tr",[n("td",[s._v("$upstream_response_time")]),s._v(" "),n("td",[s._v("请求过程中，upstream 响应时间")])])])]),s._v(" "),n("h2",{attrs:{id:"http、server、location-之间的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http、server、location-之间的关系"}},[s._v("#")]),s._v(" http、server、location 之间的关系")]),s._v(" "),n("ul",[n("li",[s._v("http：主要用于解决用户请求中的报文信息")]),s._v(" "),n("li",[s._v("server：用于配置一个具体的网站响应操作")]),s._v(" "),n("li",[s._v("location：用于匹配 uri")])]),s._v(" "),n("p",[s._v("由上至下是包含关系。")]),s._v(" "),n("h2",{attrs:{id:"更多其它参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更多其它参数"}},[s._v("#")]),s._v(" 更多其它参数")]),s._v(" "),n("p",[s._v("server 中的参数配置项其实有很多，它们可以实现一些丰富的功能。上面只列举了最基础的几个参数，后面的章节会单独讲解如何配置来实现各种功能。")]),s._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.nginx.com/resources/wiki/start/topics/examples/full/",title:"Full Example Configuration",target:"_blank",rel:"noopener noreferrer"}},[s._v("Full Example Configuration"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("（完）")])])}),[],!1,null,null,null);t.default=e.exports}}]);