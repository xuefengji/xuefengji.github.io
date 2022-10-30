(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1030:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"nginx-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-部署"}},[a._v("#")]),a._v(" Nginx 部署")]),a._v(" "),e("h2",{attrs:{id:"搜索镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搜索镜像"}},[a._v("#")]),a._v(" 搜索镜像")]),a._v(" "),e("p",[a._v("建议可以去 DockerHub 上去搜索")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker search nginx\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"拉取镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[a._v("#")]),a._v(" 拉取镜像")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker pull nginx\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"运行镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行镜像"}},[a._v("#")]),a._v(" 运行镜像")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run -d --name nginx01 -p 3344:80 nginx\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("-d：后台运行")]),a._v(" "),e("li",[a._v("-p：端口映射，将容器内部的 80 端口映射到宿主机的 3344 端口")]),a._v(" "),e("li",[a._v("--name：给容器命名")])]),a._v(" "),e("h2",{attrs:{id:"验证容器运行成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证容器运行成功"}},[a._v("#")]),a._v(" 验证容器运行成功")]),a._v(" "),e("p",[e("img",{attrs:{src:t(506),alt:"nginx"}})]),a._v(" "),e("h2",{attrs:{id:"进入容器内部"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入容器内部"}},[a._v("#")]),a._v(" 进入容器内部")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker exec -it nginx01 bash\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"运行原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行原理"}},[a._v("#")]),a._v(" 运行原理")]),a._v(" "),e("p",[e("img",{attrs:{src:t(507),alt:"nginx"}})]),a._v(" "),e("ul",[e("li",[a._v("外网访问 Linux 的 3344 端口，需要阿里云安全组先开放 3344 端口，才能正常访问")]),a._v(" "),e("li",[a._v("打通宿主机和 Docker 容器，通过宿主机的 3344 端口访问容器内部的 80 端口，就是端口映射")])]),a._v(" "),e("h2",{attrs:{id:"每次改动配置文件-都要-exec-进入容器内部吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每次改动配置文件-都要-exec-进入容器内部吗"}},[a._v("#")]),a._v(" 每次改动配置文件，都要 exec 进入容器内部吗？")]),a._v(" "),e("ul",[e("li",[a._v("不需要")]),a._v(" "),e("li",[a._v("docker run 命令提供了 -v 参数，它可以做到目录映射，即数据卷挂载")])]),a._v(" "),e("p",[a._v("（完）")])])}),[],!1,null,null,null);s.default=r.exports},506:function(a,s,t){a.exports=t.p+"assets/img/nginx2.71d873ae.png"},507:function(a,s,t){a.exports=t.p+"assets/img/nginx1.9719a682.png"}}]);