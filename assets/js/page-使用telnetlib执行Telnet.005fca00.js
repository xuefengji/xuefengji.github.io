(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{490:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"使用-telnetlib-执行-telnet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-telnetlib-执行-telnet"}},[t._v("#")]),t._v(" 使用 telnetlib 执行 Telnet")]),t._v(" "),n("h2",{attrs:{id:"关于-telnet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于-telnet"}},[t._v("#")]),t._v(" 关于 Telnet")]),t._v(" "),n("p",[t._v("Telnet 是一种允许用户与远程服务器通信的网络协议，它经常被网络管理员用来远程访问和管理设备。在终端中运行 Telnet 命令，并给出远程服务器的 IP 地址或主机名，即可访问远程设备。")]),t._v(" "),n("p",[t._v("Telnet 基于 TCP，默认端口号为 23。首先需要确保它已安装在我们的系统上，如果没有安装，运行以下命令进行安装：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" telnetd\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("要使用简单的终端运行 Telnet，只需要输入以下命令：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("telnet ip_address_your_remote_server\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h2",{attrs:{id:"python-实现-telnet-功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python-实现-telnet-功能"}},[t._v("#")]),t._v(" Python 实现 Telnet 功能")]),t._v(" "),n("p",[t._v("首先需要用到 Python 的 telnetlib 模块，它是一个标准库，无需另外安装。")]),t._v(" "),n("p",[t._v("下面是一个使用 Telnet 连接远程设备的示例程序（"),n("a",{attrs:{href:"https://github.com/wenyuan/practice-in-python/blob/main/devops-case/telnet_example.py",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("telnet_example.py")]),n("OutboundLink")],1),t._v("）：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -*- coding: utf-8 -*-")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" telnetlib\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_telnet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" commands"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        tn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" telnetlib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Telnet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{host} 网络连接失败'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入登录用户名")]),t._v("\n    tn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_until"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Username:'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入登录密码")]),t._v("\n    tn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_until"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Password:'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_very_eager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Local authentication is rejected'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{host} 登录失败，用户名或密码错误'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登录完毕后执行命令")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" command "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" commands"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        tn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_very_eager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行完毕后，终止 Telnet 连接（或输入exit退出）")]),t._v("\n    tn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    host "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'192.168.10.x'")]),t._v("\n    username "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),t._v("\n    password "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'******'")]),t._v("\n    commands "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'display version'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'display interface description Vlanif'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    do_telnet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" commands"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br")])]),n("p",[t._v("telnetlib 模块里上面代码中用到的方法介绍：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("write()")]),t._v("：使用该方法向服务端发送命令，注意每个命令后要跟上换行符（"),n("code",[t._v("\\n")]),t._v("）。")]),t._v(" "),n("li",[n("code",[t._v("read_until()")]),t._v("：当结果中存在想要的信息时返回。")]),t._v(" "),n("li",[n("code",[t._v("read_very_eager()")]),t._v("：返回缓冲区中所有可用的数据（上次获取之后本次获取之前的所有输入输出），这里要设置延时 "),n("code",[t._v("time.sleep(2)")]),t._v("，才能保证数据读取完毕。")])]),t._v(" "),n("p",[t._v("telnetlib 采用缓冲的处理方式，因此数据并不是一下子就返回的，而是先放在了缓冲区中，许多的读取处理都是围绕着这个缓冲区来的。而缓冲区的信息何时到达是不固定的，也许很快，也许很慢，也许分别到达，也许一下子就收到了。因此，对于数据不一定到齐的这种情况，就采用了 "),n("code",[t._v("read_until()")]),t._v(" 来判断缓冲区中的数据是否有想要的内容，如果没有就等待，除非到达了超时时间。")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("上面的示例程序使用 telnetlib 模块访问了 Huawei 交换机。首先从用户那里获取用户名和密码，以初始化与远程设备的 Telnet 连接。建立连接后，在远程设备上进行了进一步配置。远程登陆后，用户将能够访问远程服务器或设备。")]),t._v(" "),n("p",[t._v("如果远程连接其它厂家的设备，在连接时可能会有二次验证，以及连接验证失败时给出的错误提示会不同，需要具体问题具体分析。")]),t._v(" "),n("p",[t._v("但是这个 Telnet 协议有一个非常严重的缺点，即所有数据，包括用户名和密码都是以明文方式通过网络发送的，这会有安全风险。因此，现在我们很少使用 Telnet，并且它被一个非常安全的协议 Secure Shell 所取代，简称 SSH。")]),t._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://docs.python.org/zh-cn/3/library/telnetlib.html",title:"telnetlib -- Telnet 客户端",target:"_blank",rel:"noopener noreferrer"}},[t._v("telnetlib"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("（完）")])])}),[],!1,null,null,null);s.default=e.exports}}]);