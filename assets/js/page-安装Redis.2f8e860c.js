(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{1168:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安装-redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-redis"}},[s._v("#")]),s._v(" 安装 Redis")]),s._v(" "),t("p",[s._v("官网：https://redis.io/")]),s._v(" "),t("p",[s._v("中文网：http://www.redis.cn/")]),s._v(" "),t("p",[s._v("推荐使用 Linux 服务器学习")]),s._v(" "),t("p",[s._v("Windows 版本的 Redis 已经停更很久了…")]),s._v(" "),t("h2",{attrs:{id:"windows-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-安装"}},[s._v("#")]),s._v(" Windows 安装")]),s._v(" "),t("p",[s._v("下载安装包后解压安装包")]),s._v(" "),t("p",[t("img",{attrs:{src:n(625),alt:"install"}})]),s._v(" "),t("p",[s._v("启动 redis-server.exe")]),s._v(" "),t("p",[s._v("启动 redis-cli.exe 测试")]),s._v(" "),t("p",[t("img",{attrs:{src:n(626),alt:"install"}})]),s._v(" "),t("h2",{attrs:{id:"centos-7-6-下安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-6-下安装"}},[s._v("#")]),s._v(" CentOS 7.6 下安装")]),s._v(" "),t("h3",{attrs:{id:"准备依赖环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备依赖环境"}},[s._v("#")]),s._v(" 准备依赖环境")]),s._v(" "),t("p",[s._v("Redis 是由 C 语言开发，因此安装之前需要确保服务器已经安装了 gcc，可以通过以下命令检查服务器是否安装：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gcc -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果没有安装则通过以下命令安装：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y gcc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"下载、编译、安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载、编译、安装"}},[s._v("#")]),s._v(" 下载、编译、安装")]),s._v(" "),t("p",[s._v("从"),t("a",{attrs:{href:"https://redis.io/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网下载"),t("OutboundLink")],1),s._v(" Redis7.0（截至 2022.5.3 最新版）并解压、编译、安装，设置连接 ip 和访问密码。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我一般喜欢把这些中间件暂时下载到这里")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://download.redis.io/releases/redis-7.0.0.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf redis-7.0.0.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-7.0.0\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装到 /usr/local/redis 目录里")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PREFIX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/redis\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"redis-服务配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-服务配置"}},[s._v("#")]),s._v(" Redis 服务配置")]),s._v(" "),t("p",[s._v("先在 redis 目录下面创建 conf 文件夹和 data 文件夹：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("然后从安装包复制一份 redis.conf 到 conf 文件夹下面：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /opt/redis-7.0.0/redis.conf /usr/local/redis/conf/redis-6379.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("修改配置文件，并设置启动模式为后台模式，绑定 ip 修改为 0.0.0.0（生产环境禁止！！！），支持远程登录：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认绑定")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 -::1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听端口号")]),s._v("\nport "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置密码，去掉 # 注释，并把后面的密码设置成需要的密码")]),s._v("\nrequirepass your_password\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否守护进程，默认是 no，改成 yes 以后会以后台运行模式启动")]),s._v("\ndaemonize "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志文件名称")]),s._v("\nlogfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis-6379.log"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定 data 存放路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /usr/local/redis/data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("配置文件以后查看 Redis 的运行状态，OK，运行成功了。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis\n\nredis-server conf/redis-6379.conf \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("前台启动运行测试一下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef|grep redis")]),s._v("\nroot     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18460")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2522")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":57 pts/1    00:00:00 redis-server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379\nroot     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18480")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17576")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":57 pts/2    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" --color"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto redis\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -p 6379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\nPONG\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("测试结束，停止 Redis 服务：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis\n\nredis-cli "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"设置开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置开机启动"}},[s._v("#")]),s._v(" 设置开机启动")]),s._v(" "),t("p",[s._v("从 redis 解压目录中，拷贝启动脚本到 "),t("code",[s._v("/etc/init.d")]),s._v(" 文件夹：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /opt/redis-7.0.0/utils/redis_init_script /etc/init.d/redis\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("修改 Redis 启动脚本，主要修改 "),t("code",[s._v("EXEC")]),s._v(" 和 "),t("code",[s._v("CLIEXEC")]),s._v(" 执行启动命令的脚本目录和 "),t("code",[s._v("CONF")]),s._v(" 配置文件目录。截取脚本中部分相关的内容，如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定运行的客户端")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EXEC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/redis/bin/redis-server\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 客户端")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLIEXEC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/redis/bin/redis-cli\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 核心配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONF")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/redis/conf/redis-'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${REDISPORT}")]),s._v('.conf"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 脚本里面只有 start 和 stop 脚本，可以增加 status 和 restart 脚本（在"*)"上面写入）')]),s._v("\n    status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PIDPROFILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("  \n            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Redis is running'")]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("  \n            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Redis is not running"')]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n    restart"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(" stop  \n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(" start  \n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果 Redis 设置了访问密码，stop) 脚本需要做以下修改，主要是执行 redis-cli 命令时加上密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLIEXEC")]),s._v(" -a your_password -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REDISPORT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("修改脚本执行权限：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/init.d/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" redis\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("脚本执行检查：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/init.d/redis start")]),s._v("\nStarting Redis server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef|grep redis")]),s._v("\nroot     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29683")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":56 ?        00:00:00 /usr/local/redis/bin/redis-server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379\nroot     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29729")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2522")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":57 pts/1    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" --color"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto redis\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("开机启动管理：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入目录，该目录是 Linux 系统中专门放置系统服务启停脚本的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/init.d/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看目前已经加入开机自启的服务进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" --list nginx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加 Redis 启动脚本为 chkconfig 管理的一个服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" --add redis\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 Redis 加入开机自启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" redis on\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭 Redis 开机启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" redis off\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 chkconfig 管理的 Redis 启动服务（如果确实不需要了）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" --del redis \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("重启 Linux 操作系统并进行测试：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启操作系统")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos init.d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# shutdown -r now")]),s._v("\nConnection closing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".Socket close.\n\nConnection closed by foreign host.\n\nDisconnected from remote host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("学习机"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" at "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":30:09.\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启完成，SSH 重新连接，进行测试")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef|grep redis")]),s._v("\nroot      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1244")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":30 ?        00:00:00 /usr/local/redis/bin/redis-server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379\nroot      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2522")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2422")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":32 pts/0    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" --color"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto redis\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -p 6379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\nPONG\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("可以看到 Redis 服务已经启动成功，大功告成。")]),s._v(" "),t("h3",{attrs:{id:"防火墙相关问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防火墙相关问题"}},[s._v("#")]),s._v(" 防火墙相关问题")]),s._v(" "),t("p",[s._v("如果 Redis 需要开放远程连接（生产环境不推荐），那么可能会遇到防火墙的问题。")]),s._v(" "),t("p",[s._v("首先，如果使用的是阿里云等云厂家的服务器，无法连接的原因可能是需要去云管理平台，在可视化界面操作来开放相应的端口。")]),s._v(" "),t("p",[s._v("其次，如果是自己内部的服务器，那可能是管理员添加了防火墙策略，如下查看并操作即可（非学习环境下，一定要跟运维人员确认，获取操作许可）：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查防火墙状态，看到 active(running) 就意味着防火墙打开了")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status firewalld\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop firewalld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启防火墙")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start firewalld\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上面的命令是临时的，重启后就失效了")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 彻底关闭防火墙")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl disable firewalld\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放 Redis 端口")]),s._v("\nfirewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp --permanent\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用")]),s._v("\nfirewall-cmd --reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"卸载-redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载-redis"}},[s._v("#")]),s._v(" 卸载 Redis")]),s._v(" "),t("ul",[t("li",[s._v("先停止 Redis 服务")]),s._v(" "),t("li",[s._v("关闭 Redis 开机启动，并将其从 chkconfig 托管中删除")]),s._v(" "),t("li",[s._v("删除 Redis 安装目录")]),s._v(" "),t("li",[s._v("如果还想更干净可以通过 "),t("code",[s._v("find / -name redis")]),s._v(" 命令，将查到的文件夹及目录都删除即可")])]),s._v(" "),t("p",[s._v("（完）")])])}),[],!1,null,null,null);a.default=e.exports},625:function(s,a,n){s.exports=n.p+"assets/img/install-1.71f083a6.png"},626:function(s,a){s.exports="data:image/png;base64,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"}}]);