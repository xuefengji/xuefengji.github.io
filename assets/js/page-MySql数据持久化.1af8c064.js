(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1001:function(s,a,t){"use strict";t.r(a);var r=t(1),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-数据持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-数据持久化"}},[s._v("#")]),s._v(" MySql 数据持久化")]),s._v(" "),t("p",[s._v("思考：MySql 的数据持久化的问题")]),s._v(" "),t("h2",{attrs:{id:"安装-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-mysql"}},[s._v("#")]),s._v(" 安装 MySql")]),s._v(" "),t("h3",{attrs:{id:"搜索镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搜索镜像"}},[s._v("#")]),s._v(" 搜索镜像")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"pull-镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-镜像"}},[s._v("#")]),s._v(" pull 镜像")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull mysql "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取最新的镜像")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull mysql:5.7 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取指定版本的镜像")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"运行-mysql-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行-mysql-容器"}},[s._v("#")]),s._v(" 运行 MySql 容器")]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("创建 MySql 时，必须要设置密码")])]),s._v(" "),t("p",[s._v("在 docker hub 上找到 MySql 查看使用方式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("运行容器，并挂载目录")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" --name mysql01 mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("-e：是指定环境变量，所以 MYSQL_ROOT_PASSWORD 是一个环境变量")]),s._v(" "),t("ul",[t("li",[s._v("上面的例子讲了 MYSQL_ROOT_PASSWORD 是环境变量")]),s._v(" "),t("li",[s._v("docker run mysql 时，可以通过在 docker run 命令行中传入一个或多个环境变量来调整 MySQL 实例的配置")])]),s._v(" "),t("h4",{attrs:{id:"更多环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多环境变量"}},[s._v("#")]),s._v(" 更多环境变量")]),s._v(" "),t("h5",{attrs:{id:"mysql-root-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-root-password"}},[s._v("#")]),s._v(" MYSQL_ROOT_PASSWORD")]),s._v(" "),t("p",[s._v("必需的，它指定将为 MySQL root 超级用户帐户设置的密码")]),s._v(" "),t("h5",{attrs:{id:"mysql-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-database"}},[s._v("#")]),s._v(" MYSQL_DATABASE")]),s._v(" "),t("ul",[t("li",[s._v("可选的，允许指定要在 docker run mysql 时创建的数据库的名称")]),s._v(" "),t("li",[s._v("如果提供了用户/密码，则该用户将被授予对该数据库的超级用户访问权限（对应于 GRANT ALL）")])]),s._v(" "),t("h5",{attrs:{id:"mysql-user-mysql-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-user-mysql-password"}},[s._v("#")]),s._v(" MYSQL_USER, MYSQL_PASSWORD")]),s._v(" "),t("ul",[t("li",[s._v("可选的，结合使用来创建新用户和密码")]),s._v(" "),t("li",[s._v("该用户将被授予对 MYSQL_DATABASE 变量指定的数据库的超级用户权限")]),s._v(" "),t("li",[s._v("创建用户需要这两个变量")])]),s._v(" "),t("h5",{attrs:{id:"mysql-allow-empty-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-allow-empty-password"}},[s._v("#")]),s._v(" MYSQL_ALLOW_EMPTY_PASSWORD")]),s._v(" "),t("p",[s._v("这是一个可选变量，设置为非空值，如 yes，允许使用 root 用户的空白密码启动容器")]),s._v(" "),t("h6",{attrs:{id:"mysql-random-root-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-random-root-password"}},[s._v("#")]),s._v(" MYSQL_RANDOM_ROOT_PASSWORD")]),s._v(" "),t("ul",[t("li",[s._v("可选的，设置为非空值，如 yes，为 root 用户生成随机初始密码")]),s._v(" "),t("li",[s._v("生成的 root 密码将打印到 stdout")])]),s._v(" "),t("h6",{attrs:{id:"mysql-onetime-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-onetime-password"}},[s._v("#")]),s._v(" MYSQL_ONETIME_PASSWORD")]),s._v(" "),t("ul",[t("li",[s._v("初始化完成后，将 root（不是 MYSQL_USER 中指定的用户！）用户设置为过期，强制在首次登录时更改密码")]),s._v(" "),t("li",[s._v("任何非空值都将激活此设置")])]),s._v(" "),t("h5",{attrs:{id:"mysql-initdb-skip-tzinfo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-initdb-skip-tzinfo"}},[s._v("#")]),s._v(" MYSQL_INITDB_SKIP_TZINFO")]),s._v(" "),t("ul",[t("li",[s._v("默认情况下，入口点脚本会自动加载 CONVERT_TZ() 函数所需的时区数据")]),s._v(" "),t("li",[s._v("如果不需要，任何非空值都会禁用时区加载")])]),s._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://hub.docker.com/_/mysql?tab=description",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方镜像文档"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://hub.docker.com/_/mysql?tab=tags",target:"_blank",rel:"noopener noreferrer"}},[s._v("镜像版本"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("（完）")])])}),[],!1,null,null,null);a.default=e.exports}}]);