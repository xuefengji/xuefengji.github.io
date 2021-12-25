(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{626:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"如何修改历史-commits-中的用户名和邮箱"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何修改历史-commits-中的用户名和邮箱"}},[s._v("#")]),s._v(" 如何修改历史 commits 中的用户名和邮箱")]),s._v(" "),n("h2",{attrs:{id:"问题描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[s._v("#")]),s._v(" 问题描述")]),s._v(" "),n("p",[s._v("出于某些需求，想要：")]),s._v(" "),n("ul",[n("li",[s._v("修改某个仓库历史 commit 的用户 name 和 email 信息。")]),s._v(" "),n("li",[s._v("将历史提交记录中的指定 name/email 修改为新的 name/email。")])]),s._v(" "),n("h2",{attrs:{id:"解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),n("p",[s._v("主要分为四个步骤：")]),s._v(" "),n("ul",[n("li",[s._v("确认本地全局邮箱/用户名")]),s._v(" "),n("li",[s._v("查看仓库的历史提交信息")]),s._v(" "),n("li",[s._v("批量修改历史记录中的信息")]),s._v(" "),n("li",[s._v("将修改结果推送到远程")])]),s._v(" "),n("h3",{attrs:{id:"确认本地全局邮箱-用户名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#确认本地全局邮箱-用户名"}},[s._v("#")]),s._v(" 确认本地全局邮箱/用户名")]),s._v(" "),n("p",[s._v("使用下面两个命令查看 Git 在本地的全局邮箱和用户名：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("如果需要修改 Git 在本地的全局邮箱和用户名，执行下面的命令：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"输入你的用户名"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"输入你的邮箱"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("现在我们已经设置好了本地 Git 的 "),n("code",[s._v("user.name")]),s._v(" 和 "),n("code",[s._v("user.email")]),s._v(" 信息。")]),s._v(" "),n("h3",{attrs:{id:"查看仓库的历史提交信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看仓库的历史提交信息"}},[s._v("#")]),s._v(" 查看仓库的历史提交信息")]),s._v(" "),n("p",[s._v("进入目标仓库目录，打开 git bash 界面，执行以下命令查看历史提交信息（重点关注 Author）：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"批量修改历史记录中的信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#批量修改历史记录中的信息"}},[s._v("#")]),s._v(" 批量修改历史记录中的信息")]),s._v(" "),n("p",[s._v("打开一个文本编辑器，粘贴下面代码。")]),s._v(" "),n("p",[s._v("主要需要把 "),n("code",[s._v("OLD_EMAIL")]),s._v("，"),n("code",[s._v("CORRECT_NAME")]),s._v("，"),n("code",[s._v("CORRECT_EMAIL")]),s._v(" 改成自己的新旧邮箱和新用户名。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch -f --env-filter "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'\nOLD_EMAIL="原来的邮箱"\nCORRECT_NAME="现在的名字"\nCORRECT_EMAIL="现在的邮箱"\nif [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]\nthen\n    export GIT_COMMITTER_NAME="$CORRECT_NAME"\n    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"\nfi\nif [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]\nthen\n    export GIT_AUTHOR_NAME="$CORRECT_NAME"\n    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"\nfi\n\'')]),s._v(" --tag-name-filter "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -- --branches --tags\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("回到 git bash 界面，复制粘贴上面的代码并按回车执行。")]),s._v(" "),n("p",[s._v("如果 commit 记录比较多的话执行的时间会比较长。")]),s._v(" "),n("p",[s._v("等待执行完成后，再查看 "),n("code",[s._v("git log")]),s._v(" 可以看到已经修改成功。")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),n("p",[s._v("如果上面的批量修改命令执行失败的话，执行一下这段命令：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch -f --index-filter "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git rm --cached --ignore-unmatch Rakefile'")]),s._v(" HEAD\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("再次复制粘贴批量修改的代码并按回车执行。")])]),s._v(" "),n("h3",{attrs:{id:"将修改结果推送到远程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将修改结果推送到远程"}},[s._v("#")]),s._v(" 将修改结果推送到远程")]),s._v(" "),n("p",[s._v("这时候虽然本地修改成功了，但是你还没有推送到远程。")]),s._v(" "),n("p",[s._v("所以再执行一下命令：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --force --all\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("去看一下 Github 你就会发现之前的提交记录中，name 和 email 信息都更新了。")]),s._v(" "),n("h2",{attrs:{id:"linux-mac下可以写个脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-mac下可以写个脚本"}},[s._v("#")]),s._v(" Linux/Mac下可以写个脚本")]),s._v(" "),n("p",[s._v("在项目根目录下创建 "),n("code",[s._v("git-email.sh")]),s._v("，写入下面这段代码：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch --env-filter "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'\n\nOLD_EMAIL="原来的邮箱"\nCORRECT_NAME="现在的名字"\nCORRECT_EMAIL="现在的邮箱"\n\nif [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]\nthen\n    export GIT_COMMITTER_NAME="$CORRECT_NAME"\n    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"\nfi\nif [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]\nthen\n    export GIT_AUTHOR_NAME="$CORRECT_NAME"\n    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"\nfi\n\'')]),s._v(" --tag-name-filter "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -- --branches --tags\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("然后需要赋予执行权限：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x git-email.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("执行一下这个 "),n("code",[s._v(".sh")]),s._v(" 文件：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("./git-email.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("code",[s._v("git log")]),s._v(" 检查修改成功后，就可以推送到远程仓库了。")]),s._v(" "),n("p",[s._v("（完）")])])}),[],!1,null,null,null);a.default=e.exports}}]);