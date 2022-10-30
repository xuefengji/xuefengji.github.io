(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1044:function(t,s,e){"use strict";e.r(s);var a=e(1),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"如何参与开源项目-提交-pr-与更新-fork-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何参与开源项目-提交-pr-与更新-fork-分支"}},[t._v("#")]),t._v(" 如何参与开源项目 - 提交 PR 与更新 Fork 分支")]),t._v(" "),a("blockquote",[a("p",[t._v("总结一下如何参加一个开源项目，包括 Fork 代码，提出 PR，更新 Fork 分支等主要步骤")])]),t._v(" "),a("h2",{attrs:{id:"fork-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-代码"}},[t._v("#")]),t._v(" Fork 代码")]),t._v(" "),a("p",[t._v("以 vue 代码举例，首先需要将 vue 官方仓库通过 GitHub 的 Fork 功能复制一份到自己的 GitHub")]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:e(528),alt:"Fork vuejs/vue"}})]),t._v(" "),a("p",[t._v("复制后的结果：")]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:e(529),alt:"Forked [your-github-id]/vue"}})]),t._v(" "),a("ul",[a("li",[t._v("原仓库路径："),a("code",[t._v("https://github.com/vuejs/vue")])]),t._v(" "),a("li",[t._v("Fork 后的仓库路径："),a("code",[t._v("https://github.com/[your-github-id]/vue")]),t._v("（注意该代码仓库是挂在自己的用户名下的）")])]),t._v(" "),a("h2",{attrs:{id:"clone-到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-到本地"}},[t._v("#")]),t._v(" Clone 到本地")]),t._v(" "),a("p",[t._v("下载刚才 Fork 的代码（我比较喜欢 SSH 方式，即 Clone with SSH）：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("your-github-id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/vue.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"开发前同步官方最新代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发前同步官方最新代码"}},[t._v("#")]),t._v(" 开发前同步官方最新代码")]),t._v(" "),a("p",[t._v("Fork 的代码需要随时拉取官方最新的代码更新，保持同步")]),t._v(" "),a("h3",{attrs:{id:"添加原作者远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加原作者远程分支"}},[t._v("#")]),t._v(" 添加原作者远程分支")]),t._v(" "),a("p",[t._v("这个操作只需要做一次，目的是添加原作者 remote-repo（远程库）")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://github.com/vuejs/vue\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这个时候输入 "),a("code",[t._v("git remote -v")]),t._v("，会得到结果：")]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:e(530),alt:"Add Remote Repo"}})]),t._v(" "),a("h3",{attrs:{id:"拉取合并远程分支到-master-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取合并远程分支到-master-分支"}},[t._v("#")]),t._v(" 拉取合并远程分支到 master 分支")]),t._v(" "),a("p",[t._v("这个需要随时做，保持你的 master 分支永远跟官方最新代码保持一致")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fetch 源仓库最新的 master 分支到本地的 upstream/master")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch upstream master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到本地的 master 分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将来自 upstream/master 的更改合并到本地 master 分支中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge upstream/master\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"提交-pr-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交-pr-pull-request"}},[t._v("#")]),t._v(" 提交 PR（Pull Request）")]),t._v(" "),a("p",[t._v("在本地修改完代码后，接下来就是最后一步 Pull Request，即 PR")]),t._v(" "),a("h3",{attrs:{id:"推送本地分支到-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送本地分支到-github"}},[t._v("#")]),t._v(" 推送本地分支到 GitHub")]),t._v(" "),a("p",[t._v("先 commit，后 push")]),t._v(" "),a("h3",{attrs:{id:"pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull-request"}},[t._v("#")]),t._v(" Pull Request")]),t._v(" "),a("p",[t._v("当你在上一步 push 代码后，再访问你自己的 GitHub 主页时，会有 pull request 提示：")]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:e(531),alt:"Compare & pull request 提示"}})]),t._v(" "),a("p",[t._v("点击 "),a("strong",[t._v("Compare & pull request")]),t._v(" 后，就会到下面这个页面，文本框中的内容要遵循统一的规定（一般符和该项目作者的规范即可），然后点击 "),a("strong",[t._v("Create pull request")])]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:e(532),alt:"Create pull request"}})]),t._v(" "),a("p",[t._v("最后就可以等待源仓库作者的处理结果了")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.github.com/cn/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/syncing-a-fork",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Docs"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("（完）")])])}),[],!1,null,null,null);s.default=r.exports},528:function(t,s,e){t.exports=e.p+"assets/img/fork-vue.4c51626e.png"},529:function(t,s,e){t.exports=e.p+"assets/img/forked-vue.343d57fc.png"},530:function(t,s,e){t.exports=e.p+"assets/img/add-remote-repo.ceeaa378.png"},531:function(t,s,e){t.exports=e.p+"assets/img/pull-request.dc0558be.png"},532:function(t,s,e){t.exports=e.p+"assets/img/create-pull-request.8f99d88d.png"}}]);