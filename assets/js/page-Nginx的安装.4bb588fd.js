(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{298:function(s,n,t){s.exports=t.p+"assets/img/welcome-to-nginx.eeceb4d4.png"},410:function(s,n,t){s.exports=t.p+"assets/img/nginx-for-windows.5bb9956f.png"},503:function(s,n,t){"use strict";t.r(n);var a=t(1),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的安装"}},[s._v("#")]),s._v(" Nginx 的安装")]),s._v(" "),a("h2",{attrs:{id:"windows-下安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-下安装"}},[s._v("#")]),s._v(" Windows 下安装")]),s._v(" "),a("blockquote",[a("p",[s._v("Windows 下的 Nginx 不能用于生产，一般用于开发目的或者尝鲜体验。")])]),s._v(" "),a("h3",{attrs:{id:"下载-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-nginx"}},[s._v("#")]),s._v(" 下载 Nginx")]),s._v(" "),a("p",[s._v("从 "),a("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方网站"),a("OutboundLink")],1),s._v(" 下载稳定版本。")]),s._v(" "),a("p",[s._v("以 nginx/Windows-1.18.0 为例，直接下载 nginx-1.18.0.zip。")]),s._v(" "),a("p",[s._v("下载后解压，解压后如下：")]),s._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:t(410),alt:"Nginx for Windows"}}),s._v(" "),a("p",{staticStyle:{"text-align":"center",color:"#888"}},[s._v("（Nginx for Windows）")])]),s._v(" "),a("h3",{attrs:{id:"启动-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-nginx"}},[s._v("#")]),s._v(" 启动 Nginx")]),s._v(" "),a("p",[s._v("有两种方法启动 Nginx：")]),s._v(" "),a("ul",[a("li",[s._v("直接双击 nginx.exe，双击后一个黑色的弹窗一闪而过。（不建议用这种方式）")]),s._v(" "),a("li",[s._v("打开 cmd 命令窗口，切换到 Nginx 解压目录下，输入命令 "),a("code",[s._v("nginx.exe")]),s._v("，回车即可。")])]),s._v(" "),a("h3",{attrs:{id:"检查-nginx-是否启动成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查-nginx-是否启动成功"}},[s._v("#")]),s._v(" 检查 Nginx 是否启动成功")]),s._v(" "),a("p",[s._v("直接在浏览器地址栏输入网址 "),a("code",[s._v("http://localhost:80")]),s._v(" 回车，出现以下页面说明启动成功：")]),s._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:t(298),alt:"Welcome to nginx"}}),s._v(" "),a("p",{staticStyle:{"text-align":"center",color:"#888"}},[s._v("（Welcome to nginx）")])]),s._v(" "),a("h3",{attrs:{id:"配置监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置监听"}},[s._v("#")]),s._v(" 配置监听")]),s._v(" "),a("p",[s._v("Nginx 的配置文件是 "),a("code",[s._v("conf/")]),s._v(" 目录下的 "),a("code",[s._v("nginx.conf")]),s._v("，默认配置的 Nginx 监听的端口为 80，如果 80 端口被占用可以修改为未被占用的端口即可。")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    listen       80;\n    server_name  localhost;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("当我们修改了 Nginx 的配置文件 "),a("code",[s._v("nginx.conf")]),s._v(" 时，不需要关闭 Nginx 后重新启动 Nginx，只需要执行命令 "),a("code",[s._v("nginx -s reload")]),s._v(" 即可让改动生效。")]),s._v(" "),a("h3",{attrs:{id:"关闭-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭-nginx"}},[s._v("#")]),s._v(" 关闭 Nginx")]),s._v(" "),a("p",[s._v("如果使用 cmd 命令窗口启动 Nginx，关闭 cmd 窗口是不能结束 Nginx 进程的，可使用两种方法关闭 Nginx：")]),s._v(" "),a("ul",[a("li",[s._v("输入 Nginx 命令 "),a("code",[s._v("nginx -s stop")]),s._v("（快速停止 Nginx）或 "),a("code",[s._v("nginx -s quit")]),s._v("（完整有序的停止 Nginx）")]),s._v(" "),a("li",[s._v("使用 taskkill："),a("code",[s._v("taskkill /f /t /im nginx.exe")])])]),s._v(" "),a("blockquote",[a("p",[s._v("taskkill 是用来终止进程的"),a("br"),s._v("\n/f 是强制终止"),a("br"),s._v("\n/t 终止指定的进程和任何由此启动的子进程"),a("br"),s._v("\n/im 根据名字指定要终止的进程")])]),s._v(" "),a("h2",{attrs:{id:"linux-下安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-下安装"}},[s._v("#")]),s._v(" Linux 下安装")]),s._v(" "),a("p",[s._v("有三种安装方式：")]),s._v(" "),a("ul",[a("li",[s._v("编译安装：根据源码，根据实际业务需求，需要什么功能，编译时添加相应的模块。这种方式可以让 Nginx 最轻量化安装。")]),s._v(" "),a("li",[s._v("自动化安装：配置好安装源，直接通过自动化安装工具安装。这种方式有可能会因为缺少相关依赖而安装失败。\n"),a("ul",[a("li",[s._v("CentOS："),a("code",[s._v("yum install nginx")])]),s._v(" "),a("li",[s._v("Ubuntu："),a("code",[s._v("apt-get install nginx")])])])]),s._v(" "),a("li",[s._v("二进制安装：类似于绿色免安装版，把编译安装好的程序封装起来的一个包。")])]),s._v(" "),a("p",[s._v("一般采用第一种"),a("strong",[s._v("编译安装")]),s._v("的方式。")]),s._v(" "),a("h3",{attrs:{id:"准备依赖环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备依赖环境"}},[s._v("#")]),s._v(" 准备依赖环境")]),s._v(" "),a("blockquote",[a("p",[s._v("以下命令，如果你是 root 账户，直接执行即可，不是的话前面加 "),a("code",[s._v("sudo")]),s._v(" 获取权限。")])]),s._v(" "),a("p",[s._v("Ubuntu（16.04、18.04、20.04）：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建议先执行下 apt-get 的更新")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 gcc 和 g++ 依赖库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" build-essential\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libtool\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 PCRE pcre-devel 依赖库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libpcre3 libpcre3-dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 zlib 依赖库（注意 lib 后面是阿拉伯数字 1，不是字母 l）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zlib1g-dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 OpenSSL 依赖库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssl\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libssl-dev  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 未安装该库会报 SSL modules require the OpenSSL library.")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("CentOS（7.6）：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 gcc 依赖库")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 PCRE pcre-devel 依赖库")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y pcre pcre-devel\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 zlib 依赖库")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y zlib zlib-devel\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 OpenSSL 依赖库")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y openssl openssl-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("blockquote",[a("p",[a("strong",[s._v("gcc 依赖库")]),s._v("：安装 Nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装。"),a("br"),s._v(" "),a("strong",[s._v("PCRE pcre-devel 依赖库")]),s._v("：PCRE（Perl Compatible Regular Expressions）是一个 Perl 库，包括 perl 兼容的正则表达式库。Nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 Linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库，Nginx 也需要此库。"),a("br"),s._v(" "),a("strong",[s._v("zlib 依赖库")]),s._v("：lib 库提供了很多种压缩和解压缩的方式，Nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要安装 zlib 库。"),a("br"),s._v(" "),a("strong",[s._v("OpenSSL 依赖库")]),s._v("：OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。Nginx 不仅支持 http 协议，还支持 https（即在ssl协议上传输http），所以需要安装 OpenSSL 库。")])]),s._v(" "),a("h3",{attrs:{id:"准备源码包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备源码包"}},[s._v("#")]),s._v(" 准备源码包")]),s._v(" "),a("blockquote",[a("p",[s._v("以下命令，如果你是 root 账户，直接执行即可，不是的话前面加 "),a("code",[s._v("sudo")]),s._v(" 获取权限。")])]),s._v(" "),a("p",[s._v("从 "),a("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方网站"),a("OutboundLink")],1),s._v(" 下载稳定版本到任意目录（自己规划好），并解压。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://nginx.org/download/nginx-1.18.0.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf nginx-1.18.0.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[s._v("#")]),s._v(" 编译安装")]),s._v(" "),a("p",[s._v("以下命令，如果你是 root 账户，直接执行即可，不是的话前面加 "),a("code",[s._v("sudo")]),s._v(" 获取权限。")]),s._v(" "),a("p",[s._v("首先进入 Nginx 安装包的解压目录：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.18.0/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下面开始安装 Nginx：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 预编译")]),s._v("\n./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx --sbin-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/sbin --user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx --group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx --with-http_ssl_module --with-http_stub_status_module --with-http_gzip_static_module\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查是否编译正确")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果返回值是 0，就是执行成功；如果是返回值是 0 以外的值，就是失败。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("blockquote",[a("p",[s._v("在 ./configure 命令后跟了一堆参数，它们分别表示：")]),s._v(" "),a("ul",[a("li",[s._v("--prefix：指定当前要安装的 Nginx 主程序目录")]),s._v(" "),a("li",[s._v("--sbin-path：安装完成后，使用 Nginx 的命令放在该目录下")]),s._v(" "),a("li",[s._v("--user：运行 Nginx 的用户")]),s._v(" "),a("li",[s._v("--group：运行 Nginx 的用户组")]),s._v(" "),a("li",[s._v("--with-(模块名)：为 Nginx 添加的模块")]),s._v(" "),a("li",[s._v("比较完整的配置项的含义请参见"),a("a",{attrs:{href:"http://nginx.org/en/docs/configure.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方网站"),a("OutboundLink")],1)])])]),s._v(" "),a("h3",{attrs:{id:"添加-nginx-用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-nginx-用户"}},[s._v("#")]),s._v(" 添加 Nginx 用户")]),s._v(" "),a("p",[s._v("一般我们会创建一个不能 ssh 登录的帐号，这类账号专门用于启动服务，只是让服务启动起来，但是不能登录系统（提升安全性）。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为 Nginx 创建一个不能 ssh 登陆的用户（预编译命令中指定的用户和用户组）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" nginx -s /sbin/nologin -M\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("在 useradd 命令后跟了两个参数，它们分别表示：")]),s._v(" "),a("ul",[a("li",[s._v("-s：表示指定用户所用的 shell，此处为 "),a("code",[s._v("/sbin/nologin")]),s._v("，表示不登录")]),s._v(" "),a("li",[s._v("-M：表示不创建用户主目录")])])]),s._v(" "),a("h3",{attrs:{id:"验证安装成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证安装成功"}},[s._v("#")]),s._v(" 验证安装成功")]),s._v(" "),a("p",[s._v("主要通过 Nginx 能否启动来验证是否安装成功，一般我会运行以下这些命令来测试。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找安装路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 Nginx 的安装目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 预编译命令中指定的路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 Nginx 程序管理命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/sbin  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 预编译命令中指定的路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 Nginx 版本")]),s._v("\n/usr/local/nginx/sbin/nginx -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 Nginx")]),s._v("\n/usr/local/nginx/sbin/nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 Nginx 进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查 Nginx 启动的端口（默认 0.0.0.0:80）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -lntup "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("接下来通过浏览器访问 Nginx（服务器 IP:80），出现以下页面说明启动成功：")]),s._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:t(298),alt:"Welcome to nginx"}}),s._v(" "),a("p",{staticStyle:{"text-align":"center",color:"#888"}},[s._v("（Welcome to nginx）")])]),s._v(" "),a("p",[s._v("这里就是测一下能不能启停，生产环境要把 Nginx 加到系统自启。现在先关闭 Nginx。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭 Nginx")]),s._v("\n/usr/local/nginx/sbin/nginx -s stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("（完）")])])}),[],!1,null,null,null);n.default=e.exports}}]);