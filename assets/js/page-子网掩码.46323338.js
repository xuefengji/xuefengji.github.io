(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{1082:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"子网掩码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子网掩码"}},[s._v("#")]),s._v(" 子网掩码")]),s._v(" "),t("p",[s._v("前情提要：了解 IP 地址的结构，可参考 "),t("RouterLink",{attrs:{to:"/basic-skills/network/IP地址/"}},[s._v("IP地址")])],1),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("目的：")]),s._v(" "),t("ul",[t("li",[s._v("方便管理，不同的子网可以相互隔离")]),s._v(" "),t("li",[s._v("缓解 IP 地址资源紧张")])]),s._v(" "),t("p",[s._v("原理：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("一般 IP 分为 2 个部分：网络号 + 主机号")])]),s._v(" "),t("li",[t("p",[s._v("网络号：一般是将网络部分和子网部分合并")])])]),s._v(" "),t("p",[s._v("表示： 32 位的二进制，1 表示网络号，0 表示主机号")]),s._v(" "),t("h2",{attrs:{id:"网络号和主机号计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络号和主机号计算"}},[s._v("#")]),s._v(" 网络号和主机号计算")]),s._v(" "),t("p",[s._v("规则：将 IP 地址与子网掩码均转换为二进制后，按位进行"),t("strong",[s._v("与运算")])]),s._v(" "),t("p",[t("strong",[s._v("栗子")]),s._v("：")]),s._v(" "),t("p",[s._v("IP : 一个 C 类的地址，192.168.0.3")]),s._v(" "),t("p",[s._v("子网掩码: 255.255.255.0")]),s._v(" "),t("p",[t("strong",[s._v("计算步骤")]),s._v("：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("转成二进制")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ip:   192.168.0.3   >  11000000 10101000 00000000 00000011\n网掩码：255.255.255.0 >  11111111 11111111 11111111 00000000\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("两个二进制按位做与计算")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("11000000 10101000 00000000 00000011\n&\n11111111 11111111 11111111 00000000\n=\n11000000 10101000 00000000 00000000\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("将上面的结果每个 8 位转为十进制为")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("11000000 10101000 00000000 00000000 > 192.168.0.0\n结论：192.168.0.0 为网络号(网络段)\n     3 为主机号(主机在子网中的标识)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"cidr-vlsm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cidr-vlsm"}},[s._v("#")]),s._v(" CIDR/VLSM")]),s._v(" "),t("p",[t("strong",[s._v("CIDR")]),s._v("：无类别域间路由")]),s._v(" "),t("div",{staticClass:"language-\\ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("192.168.0.3/24\n24: 表示 IP 前 24 位是网络号，剩下的 8 位是主机号\n主机号：全 0 表示网络标识，全 1 表示广播地址，其他的是该子网的可用地址\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("栗子：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("192.168.0.3   =>  11000000 10101000 00000000 00000011\n\n网络标识的前缀： 11000000 10101000 00000000 --（前24位）换算位10进制：192.168.0\n网络标识: 11000000 10101000 00000000 00000000 --剩下8位全是0，转10进制是：192.168.0.0\n广播地址  11000000 10101000 00000000 11111111 --剩下8位全是1，转10进制是：192.168.0.255\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("strong",[s._v("VLSM")]),s._v("：可变长子网掩码")]),s._v(" "),t("p",[t("strong",[s._v("栗子")]),s._v("：")]),s._v(" "),t("p",[s._v("IP 地址：192.168.0.3/24")]),s._v(" "),t("ul",[t("li",[s._v("这个地址前 24 位全 1 ，也就是 255.255.255.0 是这个网络的子网掩码")]),s._v(" "),t("li",[s._v("无类别域间路由是基于可变长子网掩码来进行任意长度的前缀分配的，所以 24 可以变成其他数，如 16、20 等")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("192.168.0.3/16\n只有前16位是网络，后面是地址16标识,换算如下：\n192.168.0.0 是网络标识（后16位二进制全位0）\n192.168.255.255这个是域内广播地址（后16位二进制全为1）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"反掩码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反掩码"}},[s._v("#")]),s._v(" 反掩码")]),s._v(" "),t("h3",{attrs:{id:"什么是反掩码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是反掩码"}},[s._v("#")]),s._v(" 什么是反掩码")]),s._v(" "),t("ul",[t("li",[s._v("32 位点分十进制数")]),s._v(" "),t("li",[s._v("反掩码就是通配符掩码")]),s._v(" "),t("li",[s._v("通过标记 0 和 1 告诉设备匹配到哪位")]),s._v(" "),t("li",[s._v("检查相应位为 0 的，忽略相应位为 1 的")])]),s._v(" "),t("p",[s._v("栗子：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("CIDR  子网掩码           反掩码\n/30   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.252   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.3\n/24   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.255\n/16   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".0.0       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".255.255\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"反掩码的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反掩码的使用"}},[s._v("#")]),s._v(" 反掩码的使用")]),s._v(" "),t("p",[s._v("通常在设置路由时，会使用到反掩码与源或目的地址一起匹配 IP 地址所属网络")]),s._v(" "),t("p",[s._v("（完）")])])}),[],!1,null,null,null);a.default=e.exports}}]);