(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1039:function(s,t,a){"use strict";a.r(t);var e=a(1),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"修改-commit-信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-commit-信息"}},[s._v("#")]),s._v(" 修改 commit 信息")]),s._v(" "),a("h2",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[s._v("#")]),s._v(" 问题描述")]),s._v(" "),a("p",[s._v("刚刚做了一次提交，发现 "),a("code",[s._v("commit info")]),s._v(" 填写错了，想要修改")]),s._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("p",[s._v("分为两种情况，未推送到远程仓库和已推送到远程仓库")]),s._v(" "),a("h3",{attrs:{id:"情况一-已-commit-未-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#情况一-已-commit-未-push"}},[s._v("#")]),s._v(" 情况一：已 commit 未 push")]),s._v(" "),a("p",[s._v("已经执行 "),a("code",[s._v("commit")]),s._v("，但还没有 "),a("code",[s._v("push")]),s._v("，要想更改 commit 信息（修改最近一次提交）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行上述命令后，进入注释页面进行修改，修改后保存退出")]),s._v(" "),a("p",[s._v("然后使用 "),a("code",[s._v("git log --pretty=oneline")]),s._v(" 查看内容，可以发现已经成功修改了")]),s._v(" "),a("p",[a("strong",[s._v("需要注意的是此项命令会修改提交时的 "),a("code",[s._v("commit-id")]),s._v("，即会覆盖原本的提交，需要谨慎操作")])]),s._v(" "),a("h3",{attrs:{id:"情况二-已-commit-已-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#情况二-已-commit-已-push"}},[s._v("#")]),s._v(" 情况二：已 commit 已 push")]),s._v(" "),a("p",[s._v("已经执行 "),a("code",[s._v("commit")]),s._v("，且已经 "),a("code",[s._v("push")]),s._v(" 的提交（修改最近一次提交）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行上述命令后，进入注释页面进行修改，修改后保存退出")]),s._v(" "),a("p",[s._v("然后执行强制推送命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --force-with-lease origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("（完）")])])}),[],!1,null,null,null);t.default=r.exports}}]);