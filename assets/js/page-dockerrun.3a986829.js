(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1025:function(t,s,a){"use strict";a.r(s);var r=a(1),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"docker-run"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-run"}},[t._v("#")]),t._v(" docker run")]),t._v(" "),r("p",[t._v("作用：创建并进入容器")]),t._v(" "),r("h2",{attrs:{id:"语法格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法格式"}},[t._v("#")]),t._v(" 语法格式")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v(" docker run [OPTIONS] IMAGE [COMMAND] [ARG...]\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("p",[r("strong",[t._v("COMMAND")]),t._v("：需要在容器内执行的命令")]),t._v(" "),r("p",[r("strong",[t._v("docker run 执行流程")]),t._v("：")]),t._v(" "),r("ul",[r("li",[t._v("首先在指定镜像上创建一个可写的容器层")]),t._v(" "),r("li",[t._v("然后使用指定的命令（COMMAND）启动它")]),t._v(" "),r("li",[t._v("docker run 相当于执行了两个 API：/containers/create、/containers/(id)/start")])]),t._v(" "),r("p",[t._v("常用 options 说明：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("options")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("-i，--interactive")]),t._v(" "),r("td",[t._v("以交互模式运行容器，通常与 -t 同时使用")])]),t._v(" "),r("tr",[r("td",[t._v("-t，--tty")]),t._v(" "),r("td",[t._v("启动容器后，为容器分配一个命令行，通常与 -i 同时使用")])]),t._v(" "),r("tr",[r("td",[t._v("-d, --detach")]),t._v(" "),r("td",[t._v("后台运行容器并打印容器 ID")])]),t._v(" "),r("tr",[r("td",[t._v("--name")]),t._v(" "),r("td",[t._v("给容器添加名字")])]),t._v(" "),r("tr",[r("td",[t._v("-p, --publish")]),t._v(" "),r("td",[t._v("指定端口映射，格式：主机(宿主)端口:容器端口")])]),t._v(" "),r("tr",[r("td",[t._v("-P, --publish-all")]),t._v(" "),r("td",[t._v("随机端口映射，容器内部端口"),r("strong",[t._v("随机")]),t._v("映射到主机的端口")])]),t._v(" "),r("tr",[r("td",[t._v("-u")]),t._v(" "),r("td",[t._v("以什么用户身份创建容器")])]),t._v(" "),r("tr",[r("td",[t._v("-m, --memory")]),t._v(" "),r("td",[t._v("设置容器使用内存最大值")])]),t._v(" "),r("tr",[r("td",[t._v("--privileged")]),t._v(" "),r("td",[t._v("容器内是否使用真正的 root 权限")])]),t._v(" "),r("tr",[r("td",[t._v('-e username="ritchie"')]),t._v(" "),r("td",[t._v("设置环境变量")])]),t._v(" "),r("tr",[r("td",[t._v("--dns")]),t._v(" "),r("td",[t._v("指定容器 dns 服务器")])])])]),t._v(" "),r("h2",{attrs:{id:"docker-run-实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-run-实例"}},[t._v("#")]),t._v(" docker run 实例")]),t._v(" "),r("h3",{attrs:{id:"无-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无-options"}},[t._v("#")]),t._v(" 无 options")]),t._v(" "),r("p",[t._v("使用镜像 nginx")]),t._v(" "),r("p",[r("img",{attrs:{src:a(481),alt:"run1"}})]),t._v(" "),r("p",[t._v("此时会将容器日志打印，无法输入其他命令")]),t._v(" "),r("p",[t._v("重新新开一个终端，使用 "),r("code",[t._v("docker ps")]),t._v(" 查看容器")]),t._v(" "),r("p",[r("img",{attrs:{src:a(482),alt:"run"}})]),t._v(" "),r("h3",{attrs:{id:"带-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#带-options"}},[t._v("#")]),t._v(" 带 options")]),t._v(" "),r("h4",{attrs:{id:"d"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#d"}},[t._v("#")]),t._v(" -d")]),t._v(" "),r("p",[t._v("后台运行容器方式")]),t._v(" "),r("p",[r("img",{attrs:{src:a(483),alt:"run"}})]),t._v(" "),r("p",[r("strong",[t._v("注意")]),t._v("：")]),t._v(" "),r("ul",[r("li",[t._v("容器使用后台运行，就必须要有一个前台进程")]),t._v(" "),r("li",[t._v("docker 发现没有应用，就会停止")])]),t._v(" "),r("h4",{attrs:{id:"name"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" --name")]),t._v(" "),r("p",[t._v("给容器添加名字")]),t._v(" "),r("p",[r("img",{attrs:{src:a(484),alt:"run"}})]),t._v(" "),r("h4",{attrs:{id:"端口映射"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#端口映射"}},[t._v("#")]),t._v(" 端口映射")]),t._v(" "),r("h5",{attrs:{id:"方式一-p"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方式一-p"}},[t._v("#")]),t._v(" 方式一：-p")]),t._v(" "),r("p",[t._v("3 种格式：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("# 指定 ip 和端口\ndocker run -p ip:主机端口:容器端口\n# 指定端口\ndocker run -p 主机端口:容器端口 （常用）\n# 随机端口，与 -P 类似\ndocker run -p 容器端口\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br")])]),r("p",[r("img",{attrs:{src:a(485),alt:"run"}})]),t._v(" "),r("h5",{attrs:{id:"方式二-p"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方式二-p"}},[t._v("#")]),t._v(" 方式二：-P")]),t._v(" "),r("p",[r("img",{attrs:{src:a(486),alt:"run"}})]),t._v(" "),r("p",[t._v("可以看到将容器端口随机映射到主机主机的 49153 端口上了")]),t._v(" "),r("h5",{attrs:{id:"方式三-expose"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方式三-expose"}},[t._v("#")]),t._v(" 方式三：--expose")]),t._v(" "),r("p",[r("img",{attrs:{src:a(487),alt:"run"}})]),t._v(" "),r("p",[t._v("可以看到将容器端口随机映射到主机主机的 80 端口上了")]),t._v(" "),r("h4",{attrs:{id:"it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#it"}},[t._v("#")]),t._v(" -it")]),t._v(" "),r("h5",{attrs:{id:"不带-bash"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不带-bash"}},[t._v("#")]),t._v(" 不带 bash")]),t._v(" "),r("p",[r("img",{attrs:{src:a(488),alt:"run"}})]),t._v(" "),r("p",[t._v("没有进入 CLI 界面")]),t._v(" "),r("h5",{attrs:{id:"带-bash"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#带-bash"}},[t._v("#")]),t._v(" 带 bash")]),t._v(" "),r("p",[r("img",{attrs:{src:a(489),alt:"run"}})]),t._v(" "),r("p",[t._v("进入了 CLI 界面，可以进行命令操作")]),t._v(" "),r("h5",{attrs:{id:"退出当前容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#退出当前容器"}},[t._v("#")]),t._v(" 退出当前容器")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("exit         #退出 CLI 容器直接 stop\nctrl +P +Q   #容器不停止退出     ---注意：这个很有用的操作\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])]),r("p",[t._v("（完）")])])}),[],!1,null,null,null);s.default=e.exports},481:function(t,s,a){t.exports=a.p+"assets/img/run1.844a5242.png"},482:function(t,s,a){t.exports=a.p+"assets/img/run2.18e71c2d.png"},483:function(t,s,a){t.exports=a.p+"assets/img/run3.c25a6b26.png"},484:function(t,s,a){t.exports=a.p+"assets/img/run4.f2cf24fd.png"},485:function(t,s,a){t.exports=a.p+"assets/img/run5.3276c6ac.png"},486:function(t,s,a){t.exports=a.p+"assets/img/run6.034d48b0.png"},487:function(t,s,a){t.exports=a.p+"assets/img/run7.96d79d55.png"},488:function(t,s,a){t.exports=a.p+"assets/img/run8.1648809d.png"},489:function(t,s,a){t.exports=a.p+"assets/img/run9.ee2d1f64.png"}}]);