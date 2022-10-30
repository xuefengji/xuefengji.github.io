(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1072:function(v,_,a){"use strict";a.r(_);var r=a(1),t=Object(r.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"arp-协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arp-协议"}},[v._v("#")]),v._v(" ARP 协议")]),v._v(" "),r("p",[v._v("简介：ARP 全称 Address Resolution Protocol，地址解析协议")]),v._v(" "),r("p",[v._v("目的：实现 IP 地址到 MAC 地址的转换")]),v._v(" "),r("p",[r("strong",[v._v("MAC 地址")]),v._v("：")]),v._v(" "),r("ul",[r("li",[v._v("设备的唯一标识，基本在出厂时就已经固定，且不易更改，一般为48 位")]),v._v(" "),r("li",[v._v("是数据链路层能够识别的地址")])]),v._v(" "),r("p",[v._v("Windows 查看 MAC 地址：")]),v._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[v._v("ipconfig /all\n")])]),v._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[v._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:a(546),alt:"mac"}})]),v._v(" "),r("p",[r("strong",[v._v("IP 地址")]),v._v("：")]),v._v(" "),r("ul",[r("li",[v._v("是网络层标识的地址")]),v._v(" "),r("li",[v._v("一般都是人为指定的，32 位，常用点分十进制表示")])]),v._v(" "),r("p",[v._v("在 OSI 模型中，一方发送数据时，需要从上到下对数据进行封装，另一方收到数据时需要对数据从上到下进行解包，但是网络层识别的是 IP 地址，数据链路层识别的是 MAC 地址，因此需要对 IP 和 MAC 进行映射。")]),v._v(" "),r("p",[v._v("具体介绍可以参考"),r("a",{attrs:{href:"/basic-skills/network/IP%E5%9C%B0%E5%9D%80"}},[v._v("IP地址")])]),v._v(" "),r("h2",{attrs:{id:"arp-原理之请求应答"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arp-原理之请求应答"}},[v._v("#")]),v._v(" ARP 原理之请求应答")]),v._v(" "),r("p",[r("strong",[v._v("ping 命令之 ARP 请求应答例子")]),v._v("：")]),v._v(" "),r("p",[v._v("发送方：PC1，IP 地址为 IP1，MAC 地址为 MAC1")]),v._v(" "),r("p",[v._v("接收方：PC2，IP 地址为 IP2，MAC 地址为 MAC2")]),v._v(" "),r("p",[r("img",{attrs:{src:a(547),alt:"arp"}})]),v._v(" "),r("p",[v._v("步骤：")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("PC1 发送 ping IP2，由上到下封装数据")])]),v._v(" "),r("li",[r("p",[v._v("数据链路层封装 PC2 的 MAC")])]),v._v(" "),r("li",[r("p",[v._v("PC1 先在本地的 ARP 缓存表中查找")])]),v._v(" "),r("li",[r("p",[v._v("本地缓存中没有找到，在同一广播域内发送广播消息寻求 PC2 MAC，如果同一广播域内没有回应，则会通过二层交换机进行转发到其他的局域网内")])]),v._v(" "),r("li",[r("p",[v._v("等收到 PC2 的 MAC 地址后，封装到数据中，随后存入本地的缓存表中")])]),v._v(" "),r("li",[r("p",[v._v("数据封装完成后，将数据发送给 PC2")])]),v._v(" "),r("li",[r("p",[v._v("PC2 收到数据后，开始解包，拿到 PC1 的 MAC 后存入自己本地的缓存")])])]),v._v(" "),r("p",[r("strong",[v._v("查看 arp 缓存表")]),v._v("：")]),v._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[v._v("arp -a\n")])]),v._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[v._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:a(548),alt:"arp"}})]),v._v(" "),r("h2",{attrs:{id:"arp-报文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arp-报文"}},[v._v("#")]),v._v(" ARP 报文")]),v._v(" "),r("p",[r("strong",[v._v("报文格式")]),v._v("：")]),v._v(" "),r("p",[r("img",{attrs:{src:a(549),alt:"报文格式"}})]),v._v(" "),r("p",[r("strong",[v._v("硬件类型")]),v._v("：表明 ARP 协议实现在哪种类型的网络上"),r("br"),v._v(" "),r("strong",[v._v("协议类型")]),v._v("：表示解析协议（上层协议）。这里一般是 0800，即 IP"),r("br"),v._v(" "),r("strong",[v._v("硬件地址长度")]),v._v("：MAC 地址长度，此处为 6 个字节"),r("br"),v._v(" "),r("strong",[v._v("协议地址长度")]),v._v("：IP 地址长度，此处为 4 个字节"),r("br"),v._v(" "),r("strong",[v._v("操作类型")]),v._v("：表示 ARP 协议数据类型。1 表示 ARP 协议请求数据报，2 表示 ARP 协议应答数据报"),r("br"),v._v(" "),r("strong",[v._v("源MAC地址")]),v._v("：发送端 MAC 地址"),r("br"),v._v(" "),r("strong",[v._v("源IP地址")]),v._v("：发送端 IP 地址"),r("br"),v._v(" "),r("strong",[v._v("目标MAC地址")]),v._v("：接收端 MAC 地址"),r("br"),v._v(" "),r("strong",[v._v("目标IP地址")]),v._v("：接收端 IP 地址")]),v._v(" "),r("p",[v._v("根据原理描述的过程，在 PC1 ping PC2 时使用 wireshark 抓包如下：")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("ARP请求包")]),v._v(" "),r("p",[v._v("PC1 本地 ARP 缓存表中未有 PC2 MAC 地址时，会进行广播")]),v._v(" "),r("p",[r("img",{attrs:{src:a(550),alt:"请求"}})])]),v._v(" "),r("li",[r("p",[v._v("ARP 响应包")]),v._v(" "),r("p",[v._v("PC2 收到广播消息后，以单播的形式回复给 PC1")]),v._v(" "),r("p",[r("img",{attrs:{src:a(551),alt:"响应"}})])])]),v._v(" "),r("p",[v._v("以上所述均在局域网中，跨局域网的需要 代理 ARP 实现")]),v._v(" "),r("h2",{attrs:{id:"arp-类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arp-类型"}},[v._v("#")]),v._v(" ARP 类型")]),v._v(" "),r("h3",{attrs:{id:"普通-arp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#普通-arp"}},[v._v("#")]),v._v(" 普通 ARP")]),v._v(" "),r("p",[v._v("功能：通过 IP 获得 MAC 地址")]),v._v(" "),r("p",[v._v("工作过程：")]),v._v(" "),r("ul",[r("li",[v._v("A 发数据给 B ，先查 ARP 缓存表")]),v._v(" "),r("li",[v._v("缓存表中没有时，发送广播请求")]),v._v(" "),r("li",[v._v("B 收到广播消息后，将 MAC 以单播的形式发给 A")])]),v._v(" "),r("h3",{attrs:{id:"翻转-arp-rarp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#翻转-arp-rarp"}},[v._v("#")]),v._v(" 翻转 ARP(RARP)")]),v._v(" "),r("p",[v._v("功能：通过 MAC 获取 IP 地址")]),v._v(" "),r("h3",{attrs:{id:"免费-arp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#免费-arp"}},[v._v("#")]),v._v(" 免费 ARP")]),v._v(" "),r("p",[v._v("功能：查询想使用的 IP 地址是否在局域网中已被占用\n报文介绍：源目 IP 都是写本机的 IP，源 MAC 写本机的 MAC，目的 MAC 写广播地址\n用途：")]),v._v(" "),r("ul",[r("li",[v._v("确定设备的 IP 是否与其他设备 IP 冲突，当其他设备接收到免费 ARP 时，就会核对是否与本机 IP冲突，如果冲突了就会返回一个 ARP 应答包告知 IP 地址已被占用")]),v._v(" "),r("li",[v._v("设备改变物理地址时，可以通过免费 ARP 报文通知其他设备更新 ARP 表项")])]),v._v(" "),r("h3",{attrs:{id:"代理-arp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代理-arp"}},[v._v("#")]),v._v(" 代理 ARP")]),v._v(" "),r("p",[v._v("功能：在跨局域网获取 MAC 地址时，由路由器或三层交换机会将自己连接查询者的端口的 MAC 回复给查询者，同时将广播消息发送到其他广播域中")]),v._v(" "),r("p",[v._v("工作过程：")]),v._v(" "),r("ul",[r("li",[v._v("网段 A 的设备广播 ARP request 包，源 MAC 写自己的 MAC 地址，目的 MAC 写 FFFF.FFFF.FFFF,网关收到后返回接口的 MAC 地址")]),v._v(" "),r("li",[v._v("A 收到网关返回的 ARP reply 包后更新自己的 ARP 缓存表")]),v._v(" "),r("li",[v._v("A 发出去的包都要通过网关路由器转发，网关路由器再在从网段 B 中广播得到 B 的 MAC 地址")])]),v._v(" "),r("h3",{attrs:{id:"逆向-arp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#逆向-arp"}},[v._v("#")]),v._v(" 逆向 ARP")]),v._v(" "),r("p",[v._v("功能：通过物理地址获得 IP 地址\n一般存在于帧中继网络中，用于实现 IP 和 DLCI 地址的映射")]),v._v(" "),r("p",[v._v("（完）")])])}),[],!1,null,null,null);_.default=t.exports},546:function(v,_,a){v.exports=a.p+"assets/img/mac.8e6f2cc8.jpg"},547:function(v,_,a){v.exports=a.p+"assets/img/ARP.7480a9ba.png"},548:function(v,_,a){v.exports=a.p+"assets/img/ARP.f868e342.jpg"},549:function(v,_,a){v.exports=a.p+"assets/img/arp报文格式.2b34f9c5.jpg"},550:function(v,_,a){v.exports=a.p+"assets/img/arp请求包.6adbb5c4.jpg"},551:function(v,_,a){v.exports=a.p+"assets/img/arp响应包.43c3461c.jpg"}}]);