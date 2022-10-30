(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1098:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-的卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的卸载"}},[s._v("#")]),s._v(" Nginx 的卸载")]),s._v(" "),a("p",[s._v("我一般都是通过源码编译安装的方式，所以这里主要介绍如何卸载编译安装的 Nginx")]),s._v(" "),a("p",[s._v("编译安装的 Nginx 卸载非常方便，直接将 Nginx 的安装目录删除即可，同时可以把 Nginx 使用的日志目录和临时目录一并删除")]),s._v(" "),a("h2",{attrs:{id:"停止-nginx-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止-nginx-服务"}},[s._v("#")]),s._v(" 停止 Nginx 服务")]),s._v(" "),a("p",[s._v("首先输入命令 "),a("code",[s._v("ps -ef | grep nginx")]),s._v(" 检查一下 Nginx 服务是否在运行，在卸载之前需要先停止服务")]),s._v(" "),a("h2",{attrs:{id:"删除-nginx-安装目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除-nginx-安装目录"}},[s._v("#")]),s._v(" 删除 Nginx 安装目录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找安装路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是按照我上一篇介绍的步骤安装，删除安装目录的命令如下：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"ubuntu-删除-nginx-自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-删除-nginx-自启动"}},[s._v("#")]),s._v(" Ubuntu 删除 Nginx 自启动")]),s._v(" "),a("p",[s._v("如果安装了 Nginx 自启动（后面章节会讲），按照如下命令将自启动脚本删除")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 /etc/init.d 查看哪些服务进程是开机自启动的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/init.d\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消 Nginx 开机启动")]),s._v("\nupdate-rc.d -f nginx remove\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 Nginx 自启动脚本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" /etc/init.d/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"centos-7-x-删除-nginx-自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-x-删除-nginx-自启动"}},[s._v("#")]),s._v(" CentOS 7.x 删除 Nginx 自启动")]),s._v(" "),a("p",[s._v("在 CentOS 7.x 中，如果你跟我一样是通过 systemd 实现 Nginx 自启动的（后面章节会讲），按照如下命令将自启动脚本删除")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看开机启动项里有没有 nginx.service")]),s._v("\nsystemctl list-unit-files --type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("service "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" enabled\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止 Nginx 服务进程")]),s._v("\nsystemctl stop nginx.service\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使 Nginx 开机不启动")]),s._v("\nsystemctl disable nginx.service\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 Nginx 服务文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" /usr/lib/systemd/system/nginx.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"find-查找相关文件并删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find-查找相关文件并删除"}},[s._v("#")]),s._v(" find 查找相关文件并删除")]),s._v(" "),a("p",[s._v("查找并删除 Nginx 相关文件，如日志目录和临时目录等")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找相关文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -name nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断是否能删除后，执行删除命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("（完）")])])}),[],!1,null,null,null);n.default=e.exports}}]);