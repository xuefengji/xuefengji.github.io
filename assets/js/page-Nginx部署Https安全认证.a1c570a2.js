(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{448:function(s,t,a){s.exports=a.p+"assets/img/web-sites-with-https-enabled.fcaf9ea5.png"},449:function(s,t,a){s.exports=a.p+"assets/img/download-ssl-for-nginx.7aaf305a.png"},693:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"nginx-部署-https-安全认证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-部署-https-安全认证"}},[s._v("#")]),s._v(" Nginx 部署 Https 安全认证")]),s._v(" "),n("blockquote",[n("p",[s._v("本文不介绍 https 相关知识，仅分享 Nginx 配置 https 服务的步骤。并且假设你已经购买了服务器、域名和 SSL 证书。")])]),s._v(" "),n("h2",{attrs:{id:"模块介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块介绍"}},[s._v("#")]),s._v(" 模块介绍")]),s._v(" "),n("p",[s._v("网站启用 https 以后会在 SEO 和安全性方面都有一定的好处，这里不展开讲。已经启用 https 的网站，一个比较直观的变化就是浏览器的域名前面有一把小锁的图标，如下所示：")]),s._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a(448),height:"200",alt:"Web sites with HTTPS enabled"}}),s._v(" "),n("p",{staticStyle:{"text-align":"center",color:"#888"}},[s._v("（启用 https 的网站）")])]),s._v(" "),n("p",[s._v("该功能用到了 "),n("code",[s._v("http_ssl_module")]),s._v(" 这个模块，默认情况下 ssl 模块并未被安装，如果要使用该模块则需要在编译 Nginx 时指定 "),n("code",[s._v("--with-http_ssl_module")]),s._v(" 参数，详见《"),n("RouterLink",{attrs:{to:"/basic-skills/nginx/installation-of-nginx/#编译安装",title:"Nginx 编译安装"}},[s._v("Nginx 编译安装")]),s._v("》。")],1),s._v(" "),n("h2",{attrs:{id:"购买并下载-ca-证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#购买并下载-ca-证书"}},[s._v("#")]),s._v(" 购买并下载 CA 证书")]),s._v(" "),n("p",[s._v("配置 SSL 模块首先需要 CA 证书，CA 证书可以自己手动颁发也可以在阿里云申请（"),n("a",{attrs:{href:"https://help.aliyun.com/document_detail/28542.html",title:"阿里云购买 CA 证书",target:"_blank",rel:"noopener noreferrer"}},[s._v("阿里云购买 CA 证书"),n("OutboundLink")],1),s._v("），普通用户可以在阿里云申请免费的 "),n("code",[s._v("Symantec")]),s._v(" 的 "),n("code",[s._v("DV SSL")]),s._v("。")]),s._v(" "),n("p",[s._v("购买成功后，通过阿里云后台依次进入 控制台 => 产品与服务 => 安全（云盾）=> SSL 证书（应用安全），找到自己将要使用的证书，点击下载，然后选择对应 Nginx 服务器的证书，如下图所示：")]),s._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a(449),height:"350",alt:"下载用于 Nginx 服务器的证书"}}),s._v(" "),n("p",{staticStyle:{"text-align":"center",color:"#888"}},[s._v("（下载用于 Nginx 服务器的证书，未来界面可能会变化）")])]),s._v(" "),n("p",[s._v("证书下载下来后解压，有两份文件：")]),s._v(" "),n("ul",[n("li",[s._v("证书名称.key：存储的是私钥 base64 加密")]),s._v(" "),n("li",[s._v("证书名称.pem：存储的是证书 base64 加密")])]),s._v(" "),n("h2",{attrs:{id:"上传证书到服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#上传证书到服务器"}},[s._v("#")]),s._v(" 上传证书到服务器")]),s._v(" "),n("p",[s._v("在 Nginx 的配置文件所在的目录下创建 cert 文件夹，并且将下载的全部文件拷贝到 cert 目录中：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" cert\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" cert/\nrz -be  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传文件")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("此时的 Nginx 文件目录结构：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("├── nginx\n    │── html\n    │── logs\n    │── sbin\n    │── ...\n    │── cert\n    │   ├── 证书名称.key        # 存储私钥\n    │   └── 证书名称.pem        # 存储证书\n    └── conf\n        ├── ...\n        ├── nginx.conf         # 主配置文件\n        └── vhosts             # 子配置文件的目录\n            ├── web.conf       # 子配置文件 1\n            └── api.conf       # 子配置文件 2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"配置案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置案例"}},[s._v("#")]),s._v(" 配置案例")]),s._v(" "),n("p",[s._v("前端我们已经下载并上传了 SSL 证书，接下来在 Nginx 配置文件中进行配置。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  www.fedbook.cn fedbook.cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    root /sites/fedbook"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    index index.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    ssl_certificate  /usr/local/nginx/cert/证书名称.pem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_certificate_key  /usr/local/nginx/cert/证书名称.key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_session_timeout 5m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("NULL:"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("aNULL:"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MD5:"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("ADH:"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("RC4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_prefer_server_ciphers on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  www.fedbook.cn fedbook.cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" https://"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("（完）")])])}),[],!1,null,null,null);t.default=e.exports}}]);