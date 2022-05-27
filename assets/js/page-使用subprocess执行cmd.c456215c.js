(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{645:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用-subprocess-执行-cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-subprocess-执行-cmd"}},[s._v("#")]),s._v(" 使用 subprocess 执行 cmd")]),s._v(" "),a("h2",{attrs:{id:"关于-subprocess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-subprocess"}},[s._v("#")]),s._v(" 关于 subprocess")]),s._v(" "),a("p",[s._v("subprocess 这个模块可以用来产生子进程，并连接到子进程的标准输入/输出/错误中去，还可以得到子进程的返回值。")]),s._v(" "),a("p",[s._v("它是一个标准库，无需另外安装。")]),s._v(" "),a("blockquote",[a("p",[s._v("subprocess 意在替代其他几个老的模块或者函数，将它们的功能集中到一起：")]),s._v(" "),a("ul",[a("li",[s._v("os.system")]),s._v(" "),a("li",[s._v("os.spawn*")]),s._v(" "),a("li",[s._v("os.popen* –废弃")]),s._v(" "),a("li",[s._v("popen2.* –废弃")]),s._v(" "),a("li",[s._v("commands.* –废弃，3.x中被移除")])])]),s._v(" "),a("h2",{attrs:{id:"subprocess-popen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subprocess-popen"}},[s._v("#")]),s._v(" subprocess.Popen()")]),s._v(" "),a("p",[s._v("Popen 类用于创建和管理进程，子程序将在新进程中被执行完成。在 UNIX/Linux 中执行子程序，该类会使用 "),a("code",[s._v("os.execvp()")]),s._v(" 函数。而在 Windows 中执行子程序，该类将使用 "),a("code",[s._v("CreateProcess()")]),s._v(" 函数。")]),s._v(" "),a("p",[s._v("首先看一下 "),a("code",[s._v("subprocess.Popen()")]),s._v(" 的常用参数：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("subprocess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bufsize"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" executable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" stdin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nstdout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" close_fds"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" universal_newlines"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nstderr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" preexec_fn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cwd"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" env"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" startupinfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" creationflags"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("args：它可以是一系列程序参数或单个字符串。如果 args 是一个序列，则 args 中的第一项将作为程序被执行。如果 args 是一个字符串，则会将 args 作为序列传递。")]),s._v(" "),a("li",[s._v("bufsize：如果 bufsize 为 0（默认值是 0），则表示无缓冲。如果 bufsize 为 1，则表示行缓冲。如果 bufsize 是任何其他正值，则使用给定大小的缓冲区。如果 bufsize 是任何其他负值，则表示完全缓冲。")]),s._v(" "),a("li",[s._v("executable：指定替换程序。")]),s._v(" "),a("li",[s._v("stdin、stdout 和 stderr：这些参数分别定义标准输入、标准输出和标准错误。")]),s._v(" "),a("li",[s._v("close_fds：在 Linux 中，如果 close_fds 为 True，则程序在执行子进程之前将关闭除 0、1 和 2 之外的所有文件描述符。在 Windows 中，如果 close_fds 为 True，则子进程将不继承句柄。")]),s._v(" "),a("li",[s._v("shell：它表示是否使用 Shell 执行程序，默认为 False。\n"),a("ul",[a("li",[s._v("如果 shell 为 True，则会将 args 作为字符串传递。在 Linux 中，如果 shell 为 True，则 Shell 程序默认为 "),a("code",[s._v("/bin/sh")]),s._v("。如果 args 是一个字符串，则该字符串指定要通过 Shell 执行的命令。")]),s._v(" "),a("li",[s._v("如果 shell 为 False，则需要将 args 作为数组传递，并将数组的第一个元素作为命令，剩下的全部作为该命令的参数。")])])]),s._v(" "),a("li",[s._v("preexec_fn：设置可调用对象，将在执行子进程之前调用。")]),s._v(" "),a("li",[s._v("env：如果值不是 None，则映射将为新进程定义环境变量。")]),s._v(" "),a("li",[s._v("universal_newlines：如果值为 True，则 stdout 和 stderr 将以自动换行模式打开文本文件。")])]),s._v(" "),a("p",[s._v("下面是几个"),a("a",{attrs:{href:"https://github.com/wenyuan/practice-in-python/blob/main/devops-case/subprocess_example.py",target:"_blank",rel:"noopener noreferrer"}},[s._v("示例程序"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"执行命令-不等待子进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行命令-不等待子进程"}},[s._v("#")]),s._v(" 执行命令，不等待子进程")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" subprocess\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec_without_block")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者：child = subprocess.Popen(['ping', '-c', '4', 'www.baidu.com'])")]),s._v("\n    child "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ping -c 4 www.baidu.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("从执行结果可以看到 Python 并没有等到 child 子进程执行的 Popen 操作完成就执行了 print 操作。")]),s._v(" "),a("h3",{attrs:{id:"执行命令-添加子进程等待"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行命令-添加子进程等待"}},[s._v("#")]),s._v(" 执行命令，添加子进程等待")]),s._v(" "),a("p",[s._v("为了让主程序等待子进程完成后再继续往下执行，我们必须调用 Popen 对象的 "),a("code",[s._v("wait()")]),s._v(" 方法，这样父进程才会等待（也就是阻塞 block）。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" subprocess\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec_with_block")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    child "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ping -c 4 www.baidu.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"执行命令-获取返回结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行命令-获取返回结果"}},[s._v("#")]),s._v(" 执行命令，获取返回结果")]),s._v(" "),a("p",[s._v("我们可以在 Popen() 建立子进程的时候改变标准输入、标准输出和标准错误，从而获取执行结果，如下例子。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" subprocess\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取命令执行结果")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_exec_result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    child "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat /etc/issue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                             shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                             stdout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                             stderr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PIPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        err "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ERROR: %s'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.python.org/zh-cn/3/library/subprocess.html",title:"subprocess -- 子进程管理",target:"_blank",rel:"noopener noreferrer"}},[s._v("subprocess"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("（完）")])])}),[],!1,null,null,null);t.default=e.exports}}]);