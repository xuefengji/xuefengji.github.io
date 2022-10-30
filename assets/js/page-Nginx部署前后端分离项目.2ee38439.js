(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1097:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-部署前后端分离项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-部署前后端分离项目"}},[s._v("#")]),s._v(" Nginx 部署前后端分离项目")]),s._v(" "),a("h2",{attrs:{id:"部署目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署目标"}},[s._v("#")]),s._v(" 部署目标")]),s._v(" "),a("ul",[a("li",[s._v("解决前后端分离项目的跨域问题")]),s._v(" "),a("li",[s._v("前端路由采用 HTML5 History 模式")]),s._v(" "),a("li",[s._v("配置反向代理 Websocket")])]),s._v(" "),a("h2",{attrs:{id:"部署前准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署前准备"}},[s._v("#")]),s._v(" 部署前准备")]),s._v(" "),a("ul",[a("li",[s._v("将前端代码打包成为纯静态文件，上传至服务器")]),s._v(" "),a("li",[s._v("后端代码启动在服务器，监听 "),a("code",[s._v("30000")]),s._v(" 端口")])]),s._v(" "),a("h2",{attrs:{id:"nginx-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[s._v("#")]),s._v(" Nginx 配置")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("location")]),s._v(" 为代理接口，可以转发代理后端的请求接口域名或者 ip，即可解决接口跨域问题")]),s._v(" "),a("li",[s._v("升级 Http1.1 到 Websocket 协议")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("upstream http_proxy "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:30000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nupstream ws_proxy "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:30000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  www.wenyuanblog.com wenyuanblog.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    root /home/spa-project/wenyuanblog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    index index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 404 错误页面重定向到 index.html 可以解决 history 模式访问不到页面问题")]),s._v("\n    error_page    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v("         /index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        try_files "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    location ^~ /api/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_pass http://http_proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# timeout")]),s._v("\n        proxy_connect_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_read_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_send_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        client_max_body_size 50m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redefine request header to backend")]),s._v("\n        proxy_set_header  Host              "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header  X-Real-IP         "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header  X-Forwarded-For   "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header  X-Forwarded-Proto "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    location ^~ /ws/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_pass http://ws_proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# timeout")]),s._v("\n        proxy_connect_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_read_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Websocket 保持长连接")]),s._v("\n        proxy_send_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        client_max_body_size 50m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http => websocket")]),s._v("\n        proxy_http_version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header Upgrade "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_upgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header Connection "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Upgrade"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redefine request header to backend")]),s._v("\n        proxy_set_header  Host              "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header  X-Real-IP         "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header  X-Forwarded-For   "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header  X-Forwarded-Proto "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    location ~* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n        expires 1h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        add_header Cache-Control "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    location ~* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpeg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ico"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("cur"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("svg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("svgz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("map"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("mp4"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ogg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ogv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("webm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("htc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n        expires 24h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        access_log off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        add_header Cache-Control "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    \n    access_log  /var/log/nginx/access/wenyuanblog.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br")])]),a("p",[s._v("部分配置项解析：")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("proxy_connect_timeout")]),s._v("：后端服务器连接的超时时间，发起握手等候响应超时时间（默认为 60 秒，官方推荐最长不要超过 75 秒）")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("proxy_read_timeout")]),s._v("：连接成功后，Nginx 能够等待后端服务器响应的时间（默认 60 秒）")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("proxy_send_timeout")]),s._v("：后端服务器数据回传时间，就是在规定时间之内后端服务器必须传完所有的数据（默认 60 秒）")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("client_max_body_size")]),s._v("：Nginx 对上传文件大小的限制（默认是 1M）")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("proxy_set_header")]),s._v("：用来重定义发往后端服务器的请求头")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Host $http_host;")]),s._v("：将原 http 请求 Header 中的 Host 字段也放到转发的请求")]),s._v(" "),a("li",[a("code",[s._v("X-Real-IP $remote_addr;")]),s._v("：前一节点的 IP（并不一定是用户的真实 IP）")]),s._v(" "),a("li",[a("code",[s._v("X-Forwarded-For $proxy_add_x_forwarded_for;")]),s._v("：前一节点的 X-Forwarded-For 的值")])]),s._v(" "),a("blockquote",[a("p",[s._v("X-Real-IP 一般是最后一级代理将上游 IP 地址添加到该头中，X-Forwarded-For 是多个 IP 地址，而 X-Real-IP 是一个")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("X-Forwarded-Proto $scheme;")]),s._v("：拿到来源的传输协议（HTTP 或 HTTPS）")])])])]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_header",title:"Module ngx_http_proxy_module：proxy_set_header",target:"_blank",rel:"noopener noreferrer"}},[s._v("Module ngx_http_proxy_module：proxy_set_header"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("（完）")])])}),[],!1,null,null,null);t.default=e.exports}}]);