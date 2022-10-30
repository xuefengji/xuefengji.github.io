(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1038:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"clone-速度过慢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-速度过慢"}},[s._v("#")]),s._v(" clone 速度过慢")]),s._v(" "),a("h2",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[s._v("#")]),s._v(" 问题描述")]),s._v(" "),a("p",[s._v("想从 GitHub 上面 clone 项目，很多情况下会慢的离谱，等待好久后报错：")]),s._v(" "),a("div",{staticStyle:{color:"#FF6827"}},[s._v("\nfatal: early EOF  "),a("br"),s._v("\nfatal: the remote end hung up unexpectedly  "),a("br"),s._v("\nfatal: index-pack failed  "),a("br"),s._v("\nerror: RPC failed; curl 18 transfer closed with outstanding read data remaining\n")]),s._v(" "),a("p",[s._v("网上有一些方法：复制项目到码云（比较麻烦），修改 hosts 文件（以前有用），调整 Git 的传输缓存（仅用于解决文件过大导致的下载慢问题，不能解决网络本身带来的问题）")]),s._v(" "),a("p",[s._v("最终方案还得是给 Git 设置代理模式")]),s._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("p",[s._v("需要用到几个命令，注意下面的端口 "),a("code",[s._v("1080")]),s._v(" 和 "),a("code",[s._v("1081")]),s._v(" 都是我自行配置的，每个人情况可能不一样")]),s._v(" "),a("ul",[a("li",[s._v("1080：SOCKS 端口")]),s._v(" "),a("li",[s._v("1081：HTTP 端口（某些软件默认的 SOCKS + 1）")])]),s._v(" "),a("h3",{attrs:{id:"设置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置代理"}},[s._v("#")]),s._v(" 设置代理")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("小贴士")]),s._v(" "),a("p",[s._v("我推荐使用专用代理里中 http 代理，这是不容易有负面影响且切实有效的，因为 GitHub 在某次更新后，socks 代理有时候会被拒绝。"),a("br"),s._v("\n但其它代理模式的命令还是要整理一下的，万一需要用到呢~")])]),s._v(" "),a("p",[s._v("全局代理：使用后作用于全局环境，太极端，一般不推荐")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 http 协议(推荐)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.proxy "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:1081\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或使用 socks 协议(不推荐，忘记会有什么坑了)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.proxy socks5://127.0.0.1:1080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("局部代理：在 github clone 的仓库内执行，不是很方便，一般不推荐")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 http 协议(推荐)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local http.proxy "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:1081\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或使用 socks 协议(不推荐，忘记会有什么坑了)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local http.proxy socks5://127.0.0.1:1080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("专用代理：只对 github 进行代理，对国内的仓库不影响，推荐！")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 http 协议(推荐)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.https://github.com.proxy "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:1081\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或使用 socks 协议(不推荐，忘记会有什么坑了)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.https://github.com.proxy socks5://127.0.0.1:1080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"查询目前是否使用了代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询目前是否使用了代理"}},[s._v("#")]),s._v(" 查询目前是否使用了代理")]),s._v(" "),a("p",[s._v("查询当前的 Git 环境是否使用了代理")]),s._v(" "),a("p",[s._v("查询全局代理：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.proxy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查询局部代理：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local http.proxy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查询专用代理（对 github 进行的代理）：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.https://github.com.proxy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"取消代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消代理"}},[s._v("#")]),s._v(" 取消代理")]),s._v(" "),a("p",[s._v("取消当前 Git 环境使用的代理，恢复直连模式")]),s._v(" "),a("p",[s._v("取消全局代理：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset http.proxy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("取消局部代理：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local --unset http.proxy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("取消专用代理（对 github 进行的代理）：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset http.https://github.com.proxy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"补充-关于调整-git-的传输缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充-关于调整-git-的传输缓存"}},[s._v("#")]),s._v(" 补充：关于调整 Git 的传输缓存")]),s._v(" "),a("p",[s._v("网上很多文章多 clone 过慢或 push 时因为文件过大导致报错时，可以调整 Git 的传输缓存：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Git 默认设置 http post 的缓存为 1M，很多文章建议调大一点，例如 500M。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.postBuffer "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("524288000")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("但我发现这非但解决不了本文提到的问题，而且即使真遇到大文件的情况，官方也并不推荐这么做，详见：")]),s._v(" "),a("p",[s._v("《"),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/devops/repos/git/rpc-failures-http-postbuffer?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git: Stop changing http.postBuffer..."),a("OutboundLink")],1),s._v("》")]),s._v(" "),a("p",[s._v("（完）")])])}),[],!1,null,null,null);t.default=n.exports}}]);