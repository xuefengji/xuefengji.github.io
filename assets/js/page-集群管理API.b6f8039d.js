(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{1115:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"集群管理-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群管理-api"}},[s._v("#")]),s._v(" 集群管理 API")]),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("Cerebro 为我们提供了简单的集群管理功能，这些监控、管理的功能本质上也都是通过 ES 提供的 API 来实现的")]),s._v(" "),t("h2",{attrs:{id:"cat-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cat-apis"}},[s._v("#")]),s._v(" cat APIs")]),s._v(" "),t("p",[t("code",[s._v("_cat")]),s._v(" APIs 提供查看集群相关信息的同时，其特别之处在于它返回的结果不是 JSON，而是非常适合人类阅读的格式")]),s._v(" "),t("p",[s._v("当使用 "),t("code",[s._v("_cat")]),s._v(" 时其后面不跟任何子节点，返回结果是各个 API 的目录（URL），在忘记有啥接口的时候这个功能非常好用：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 _cat API 获取所有可用的目录")]),s._v("\nGET /_cat/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结果")]),s._v("\n/_cat/allocation\n/_cat/shards\n/_cat/shards/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n/_cat/master\n/_cat/nodes\n/_cat/tasks\n/_cat/indices\n/_cat/indices/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n/_cat/segments\n/_cat/segments/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n/_cat/count\n/_cat/count/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("上述这些 API 都可以加入下面几个参数：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("v 参数")]),s._v("：每个命令都可以使用 v 参数来打印详细信息如："),t("code",[s._v("GET /_cat/nodes?v")])]),s._v(" "),t("li",[t("strong",[s._v("h 参数")]),s._v("：使用 h 参数可以强制只显示某些列如："),t("code",[s._v("GET /_cat/nodes?h=node.role,port,name")])]),s._v(" "),t("li",[t("strong",[s._v("help 参数")]),s._v("：使用 help 参数可以输出这个接口可用的列名和其解析如："),t("code",[s._v("GET /_cat/master?help")])])]),s._v(" "),t("h3",{attrs:{id:"查看索引文档总数和整个集群文档总数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看索引文档总数和整个集群文档总数"}},[s._v("#")]),s._v(" 查看索引文档总数和整个集群文档总数")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取索引 books 的文档总数")]),s._v("\nGET /_cat/count/books?v\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取整个集群所有索引的文档总数")]),s._v("\nGET /_cat/count?v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"查看集群健康状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看集群健康状态"}},[s._v("#")]),s._v(" 查看集群健康状态")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看集群健康状态")]),s._v("\nGET /_cat/health?v\nGET /_cat/health?v"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ts")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("code",[s._v("ts=false")]),s._v(" 的参数是返回结果中去除时间戳")]),s._v(" "),t("h3",{attrs:{id:"查看磁盘使用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看磁盘使用情况"}},[s._v("#")]),s._v(" 查看磁盘使用情况")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取各个节点磁盘的使用情况")]),s._v("\nGET /_cat/allocation?v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("更多的关于 "),t("code",[s._v("_cat")]),s._v(" APIs 的使用示例，可以参考"),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.13/cat.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"集群管理-api-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群管理-api-2"}},[s._v("#")]),s._v(" 集群管理 API")]),s._v(" "),t("p",[s._v("集群管理的 API 提供了获取或者更改集群信息的功能，例如集群节点过滤、查看集群信息、查看节点信息、更新集群设置、重置路由等")]),s._v(" "),t("h3",{attrs:{id:"集群节点过滤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群节点过滤"}},[s._v("#")]),s._v(" 集群节点过滤")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取所有节点")]),s._v("\nGET /_nodes/_all\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("除了 "),t("code",[s._v("_all")]),s._v(" 外，ES 支持的节点过滤器有如下几个：")]),s._v(" "),t("ul",[t("li",[t("strong",[t("code",[s._v("_all")])]),s._v("：列出所有节点")]),s._v(" "),t("li",[t("strong",[t("code",[s._v("_local")])]),s._v("：列出本地节点")]),s._v(" "),t("li",[t("strong",[t("code",[s._v("_master")])]),s._v("：列出主节点")]),s._v(" "),t("li",[t("strong",[s._v("IP 或者主机名字")]),s._v("：列出指定 IP 或者主机名字的节点")]),s._v(" "),t("li",[t("strong",[s._v("节点 ID 或者名称")]),s._v("：列出指定 ID 或者名称的节点")]),s._v(" "),t("li",[t("strong",[t("code",[s._v("*")])]),s._v("：IP、主机名字、节点 ID、名称都可以包括通配符")]),s._v(" "),t("li",[t("strong",[t("code",[s._v("master:true/false")])]),s._v("：列出主节点 / 不列出主节点")]),s._v(" "),t("li",[t("strong",[t("code",[s._v("data:true/false")])]),s._v("：列出数据节点 / 不列出数据节点")]),s._v(" "),t("li",[t("strong",[t("code",[s._v("ingest:true/false")])]),s._v("：列出索引预处理节点 / 不列出索引预处理节点")]),s._v(" "),t("li",[t("strong",[t("code",[s._v("coordinating_only:true/false")])]),s._v("：列出协调节点 / 不列出协调节点")])]),s._v(" "),t("p",[s._v("比如：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 节点类型过滤：过滤出 master、data、ingest、coordinating 节点的信息")]),s._v("\nGET /_nodes/master:true,data:true,ingest:true,coordinating:true\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果只想返回某个节选部分的结果，可以使用以下示例：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出 process 节选信息")]),s._v("\nGET /_nodes/master:true,data:true,ingest:true,coordinating:true/process\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("更多的使用示例你可以参考"),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.13/cluster-nodes-info.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"查看集群信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看集群信息"}},[s._v("#")]),s._v(" 查看集群信息")]),s._v(" "),t("p",[s._v("可以使用集群信息查看的接口"),t("strong",[s._v("查看集群健康状态、集群状态、集群统计信息、集群的设置")]),s._v("等，示例如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看集群健康状态")]),s._v("\nGET /_cluster/health\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看集群状态")]),s._v("\nGET /_cluster/state\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看集群统计信息")]),s._v("\nGET /_cluster/stats?human"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("pretty\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看集群的设置")]),s._v("\nGET /_cluster/settings?include_defaults"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"查看节点信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看节点信息"}},[s._v("#")]),s._v(" 查看节点信息")]),s._v(" "),t("p",[s._v("查看节点信息的 API 比较简单，示例如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取节点信息的请求格式")]),s._v("\nGET /_nodes\nGET /_nodes/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("node_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nGET /_nodes/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("metric"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nGET /_nodes/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("node_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("metric"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取节点信息的示例")]),s._v("\nGET /_nodes\nGET /_nodes/node_id1,node_id2       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取 node_id1 和 node_id2 的信息")]),s._v("\nGET /_nodes/stats \nGET /_nodes/node_id1,node_id2/stats "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取 node_id1 和 node_id2 的统计信息")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("其中 metric 可以指定获取结果中的每个部分，其选项比较多，参考"),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.13/cluster-nodes-info.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"更新集群设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新集群设置"}},[s._v("#")]),s._v(" 更新集群设置")]),s._v(" "),t("p",[s._v("更新集群设置的示例如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("PUT /_cluster/settings\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"persistent"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"indices.recovery.max_bytes_per_sec"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100m"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("如上示例，我们设置了集群恢复时的吞吐量，其默认值为 0 的时候为无限制")]),s._v(" "),t("h3",{attrs:{id:"重置路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重置路由"}},[s._v("#")]),s._v(" 重置路由")]),s._v(" "),t("p",[s._v("reroute API 可以允许用户手动修改集群中分片的分配情况使用 reroute API 可以将一个分片从某个节点移到另一个节点，也可以将未分配的分片指定分配到某个节点")]),s._v(" "),t("p",[s._v("官方的示例：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("POST /_cluster/reroute\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commands"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"move"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shard"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"from_node"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node1"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"to_node"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node2"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"allocate_replica"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shard"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node3"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("如上示例，使用 "),t("code",[s._v('"move"')]),s._v(" 指令，将索引 "),t("code",[s._v('"test"')]),s._v(" 的分片 0 从节点 "),t("code",[s._v('"node1"')]),s._v(" 移动到了 "),t("code",[s._v('"node2"')]),s._v("使用 "),t("code",[s._v('"allocate_replica"')]),s._v(" 指令将 "),t("code",[s._v('"test"')]),s._v(" 索引未分配的分片 1 的副本分配到节点 "),t("code",[s._v('"node3"')])]),s._v(" "),t("p",[s._v("需要注意的是，在执行了任何路由重置指令后， ES 将会执行重新平衡数据的操作来保持平衡状态，但是这个操作受 "),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.13/modules-cluster.html#cluster-shard-allocation-settings",target:"_blank",rel:"noopener noreferrer"}},[s._v("cluster.routing.rebalance.enable"),t("OutboundLink")],1),s._v("（是否允许重新平衡）设置值的影响")]),s._v(" "),t("p",[s._v("reroute API 在 ES 集群运维的时候经常用到，更详细的使用示例可以参考"),t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.13/cluster-reroute.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.13/cluster.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Cluster APIs"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("（完）")])])}),[],!1,null,null,null);a.default=e.exports}}]);