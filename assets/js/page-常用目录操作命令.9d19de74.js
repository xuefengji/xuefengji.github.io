(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{1051:function(s,t,n){"use strict";n.r(t);var a=n(1),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"常用目录操作命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用目录操作命令"}},[s._v("#")]),s._v(" 常用目录操作命令")]),s._v(" "),n("h2",{attrs:{id:"目录管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录管理"}},[s._v("#")]),s._v(" 目录管理")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Linux 的目录结构为树状结构，最顶级的目录为根目录 /")])]),s._v(" "),n("li",[n("p",[s._v("其他目录通过挂载可以将它们添加到树中，通过解除挂载可以移除它们")])])]),s._v(" "),n("h3",{attrs:{id:"绝对路径"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绝对路径"}},[s._v("#")]),s._v(" 绝对路径：")]),s._v(" "),n("p",[s._v("路径的写法，由根目录 / 写起，例如："),n("code",[s._v("/usr/share/doc")]),s._v(" 这个目录")]),s._v(" "),n("h3",{attrs:{id:"相对路径"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相对路径"}},[s._v("#")]),s._v(" 相对路径：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("路径的写法，不是由 / 写起")])]),s._v(" "),n("li",[n("p",[s._v("例如由 "),n("code",[s._v("/usr/share/doc")]),s._v(" 要到 "),n("code",[s._v("/usr/share/man")]),s._v(" 底下时，可以写成："),n("code",[s._v("cd ../man")]),s._v(" 这就是相对路径的写法啦")])])]),s._v(" "),n("h2",{attrs:{id:"处理目录的常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#处理目录的常用命令"}},[s._v("#")]),s._v(" 处理目录的常用命令")]),s._v(" "),n("p",[s._v("接下来我们就来看几个常见的处理目录的命令吧：")]),s._v(" "),n("ul",[n("li",[s._v("ls: 列出目录")]),s._v(" "),n("li",[s._v("cd：切换目录")]),s._v(" "),n("li",[s._v("pwd：显示目前的目录")]),s._v(" "),n("li",[s._v("mkdir：创建一个新的目录")]),s._v(" "),n("li",[s._v("rmdir：删除一个空的目录")]),s._v(" "),n("li",[s._v("cp: 复制文件或目录")]),s._v(" "),n("li",[s._v("rm: 移除文件或目录")]),s._v(" "),n("li",[s._v("mv: 移动文件与目录，或修改文件与目录的名称")])]),s._v(" "),n("p",[s._v("你可以使用 "),n("em",[s._v("man [命令]")]),s._v(" 来查看各个命令的使用文档，如 ：man cp")]),s._v(" "),n("h3",{attrs:{id:"ls-列出目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ls-列出目录"}},[s._v("#")]),s._v(" ls （列出目录）")]),s._v(" "),n("p",[s._v("在 Linux 系统当中， "),n("code",[s._v("ls")]),s._v(" 命令可能是最常被运行的")]),s._v(" "),n("p",[n("strong",[s._v("语法")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@www ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls [-aAdfFhilnrRSt] 目录名称")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("选项与参数")]),s._v("：")]),s._v(" "),n("ul",[n("li",[s._v("-a ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)")]),s._v(" "),n("li",[s._v("-l ：长数据串列出，包含文件的属性与权限等等数据(常用)")])]),s._v(" "),n("p",[s._v("将目录下的所有文件列出来(含属性与隐藏档)")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@www ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -al ~")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"cd-切换目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cd-切换目录"}},[s._v("#")]),s._v(" cd （切换目录）")]),s._v(" "),n("p",[s._v("cd 是 Change Directory 的缩写，这是用来变换工作目录的命令")]),s._v(" "),n("p",[n("strong",[s._v("语法")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("相对路径或绝对路径"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("示例")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到用户目录下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd home  ")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 mkdir 命令创建 kuangstudy 目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir kuangstudy")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 kuangstudy 目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd kuangstudy")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回到上一级")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos kuangstudy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd ..")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回到根目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos kuangstudy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示回到自己的家目录，亦即是 /root 这个目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos kuangstudy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd ~")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"pwd-显示目前所在的目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pwd-显示目前所在的目录"}},[s._v("#")]),s._v(" pwd ( 显示目前所在的目录 )")]),s._v(" "),n("p",[n("code",[s._v("pwd")]),s._v(" 是 "),n("strong",[s._v("Print Working Directory")]),s._v(" 的缩写，也就是显示目前所在目录的命令")]),s._v(" "),n("p",[n("strong",[s._v("语法")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos kuangstudy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#pwd [-P]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("选项与参数")]),s._v("：")]),s._v(" "),n("p",[s._v("-P ：显示出确实的路径，而非使用连接(link) 路径")]),s._v(" "),n("p",[n("strong",[s._v("示例")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单纯显示出目前的工作目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pwd")]),s._v("\n/root\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是链接，要显示真实地址，可以使用 -P参数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd bin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pwd -P")]),s._v("\n/usr/bin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"mkdir-创建新目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mkdir-创建新目录"}},[s._v("#")]),s._v(" mkdir （创建新目录）")]),s._v(" "),n("p",[s._v("如果想要创建新的目录的话，可以使用 "),n("code",[s._v("mkdir")]),s._v(" (make directory)")]),s._v(" "),n("p",[n("strong",[s._v("语法")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-mp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 目录名称\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("选项与参数")]),s._v("：")]),s._v(" "),n("ul",[n("li",[s._v("-m ：配置文件的权限，直接配置，不需要看默认权限 (umask)")]),s._v(" "),n("li",[s._v("-p ：可以将所需要的目录(包含上一级目录)递归创建起来")])]),s._v(" "),n("p",[n("strong",[s._v("示例")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入我们用户目录下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /home")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个 test 文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir test")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建多层级目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir test1/test2/test3/test4")]),s._v("\nmkdir: cannot create directory ‘test1/test2/test3/test4’:\nNo such "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <== 没办法直接创建此目录啊！")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加了这个 -p 的选项，可以自行帮你创建多层目录！")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p test1/test2/test3/test4")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建权限为 rwx--x--x 的目录。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -m 711 test2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -l")]),s._v("\ndrwxr-xr-x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Mar "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":55 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\ndrwxr-xr-x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Mar "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":56 test1\ndrwx--x--x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Mar "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":58 test2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h3",{attrs:{id:"rmdir-删除空的目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rmdir-删除空的目录"}},[s._v("#")]),s._v(" rmdir ( 删除空的目录 )")]),s._v(" "),n("p",[n("strong",[s._v("语法")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rmdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 目录名称\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("选项与参数")]),s._v("：")]),s._v(" "),n("p",[s._v("-p ：连同上一级『空的』目录也一起删除")]),s._v(" "),n("p",[n("strong",[s._v("示例")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 看看有多少目录存在")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -l")]),s._v("\ndrwxr-xr-x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Mar "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":55 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\ndrwxr-xr-x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Mar "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":56 test1\ndrwx--x--x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Mar "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":58 test2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可直接删除掉，没问题")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rmdir test")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 因为尚有内容，所以无法删除！")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rmdir test1")]),s._v("\nrmdir: failed to remove ‘test1’: Directory not empty\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 利用 -p 这个选项，立刻就可以将 test1/test2/test3/test4 依次删除。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rmdir -p test1/test2/test3/test4")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("rmdir")]),s._v(" 仅能删除空的目录")])]),s._v(" "),n("li",[n("p",[s._v("非空目录可以使用 "),n("code",[s._v("rm")]),s._v(" 命令来删除")])])])]),s._v(" "),n("h3",{attrs:{id:"cp-复制文件或目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cp-复制文件或目录"}},[s._v("#")]),s._v(" cp ( 复制文件或目录 )")]),s._v(" "),n("p",[n("strong",[s._v("语法")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@www ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp [-adfilprsu] 来源档(source) 目标档(destination)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@www ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp [options] source1 source2 source3 .... directory")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("选项与参数")]),s._v("：")]),s._v(" "),n("ul",[n("li",[s._v("-a：相当於 -pdr 的意思，至於 pdr 请参考下列说明(常用)")]),s._v(" "),n("li",[s._v("-p：连同文件的属性一起复制过去，而非使用默认属性(备份常用)")]),s._v(" "),n("li",[s._v("-d：若来源档为连结档的属性(link file)，则复制连结档属性而非文件本身")]),s._v(" "),n("li",[s._v("-r：递归持续复制，用於目录的复制行为(常用)")]),s._v(" "),n("li",[s._v("-f：为强制(force) 的意思，若目标文件已经存在且无法开启，则移除后再尝试一次")]),s._v(" "),n("li",[s._v("-i：若目标档(destination) 已经存在时，在覆盖时会先询问动作的进行(常用)")]),s._v(" "),n("li",[s._v("-l：进行硬式连结(hard link) 的连结档创建，而非复制文件本身")]),s._v(" "),n("li",[s._v("-s：复制成为符号连结档 (symbolic link)，亦即『捷径』文件")]),s._v(" "),n("li",[s._v("-u：若 destination 比 source 旧才升级 destination")])]),s._v(" "),n("p",[n("strong",[s._v("示例")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找一个有文件的目录，我这里找到 root目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /root")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\ninstall.sh\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /home")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 root目录下的install.sh 到 home目录下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp /root/install.sh /home")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\ninstall.sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再次复制，加上-i参数，增加覆盖询问？")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp -i /root/install.sh /home")]),s._v("\ncp: overwrite ‘/home/install.sh’? y "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# n不覆盖，y为覆盖")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"rm-移除文件或目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rm-移除文件或目录"}},[s._v("#")]),s._v(" rm ( 移除文件或目录 )")]),s._v(" "),n("p",[n("strong",[s._v("语法")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-fir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 文件或目录\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("选项与参数")]),s._v("：")]),s._v(" "),n("ul",[n("li",[s._v("-f ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；")]),s._v(" "),n("li",[s._v("-i ：互动模式，在删除前会询问使用者是否动作")]),s._v(" "),n("li",[s._v("-r ：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！！")])]),s._v(" "),n("p",[n("strong",[s._v("示例")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将刚刚在 cp 的实例中创建的 install.sh删除掉！")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rm -i install.sh")]),s._v("\nrm: remove regular "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" ‘install.sh’? y\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果加上 -i 的选项就会主动询问喔，避免你删除到错误的档名！")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 尽量不要在服务器上使用 rm -rf /")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"mv-移动文件与目录-或修改名称"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mv-移动文件与目录-或修改名称"}},[s._v("#")]),s._v(" mv  ( 移动文件与目录，或修改名称 )")]),s._v(" "),n("p",[n("strong",[s._v("语法")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@www ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv [-fiu] source destination")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@www ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv [options] source1 source2 source3 .... directory")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("选项与参数")]),s._v("：")]),s._v(" "),n("ul",[n("li",[s._v("-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖")]),s._v(" "),n("li",[s._v("-i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖")]),s._v(" "),n("li",[s._v("-u ：若目标文件已经存在，且 source 比较新，才会升级 (update)")])]),s._v(" "),n("p",[n("strong",[s._v("示例")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制一个文件到当前目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp /root/install.sh /home")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个文件夹 test")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir test")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将复制过来的文件移动到我们创建的目录，并查看")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv install.sh test")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd test")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\ninstall.sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件夹重命名，然后再次查看！")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd ..")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv test mvtest")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-7-centos home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nmvtest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);