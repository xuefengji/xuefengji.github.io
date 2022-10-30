(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1120:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"es-中的概念与名词"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es-中的概念与名词"}},[s._v("#")]),s._v(" ES 中的概念与名词")]),s._v(" "),n("p",[s._v("下面将自上而下介绍几个 ES 中常用的概念与名词")]),s._v(" "),n("h2",{attrs:{id:"集群层面的基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群层面的基本概念"}},[s._v("#")]),s._v(" 集群层面的基本概念")]),s._v(" "),n("h3",{attrs:{id:"集群-cluster"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群-cluster"}},[s._v("#")]),s._v(" 集群（Cluster）")]),s._v(" "),n("p",[s._v("一台服务器安装一个 ES 称为单机 ES，因为它是支持分布式的，多个协同工作的 ES 实例就组合成了集群分布式的 ES 集群可以存储海量的数据，也可以从容地面对更高的并发量")]),s._v(" "),n("p",[s._v("得益于分布式系统的架构设计，使得 ES 集群拥有高可用性和可扩展性")]),s._v(" "),n("ul",[n("li",[s._v("高可用性，分为服务可用性、数据可用性\n"),n("ul",[n("li",[s._v("服务可用性，在有部分节点挂掉的情况下系统还可以对外提供服务")]),s._v(" "),n("li",[s._v("数据可用性，部分节点挂掉，并且这些节点的数据无法恢复的情况下，也能保证数据不丢失")])])]),s._v(" "),n("li",[s._v("可扩展性，当并发量提升，或者数据量增多的情况下，可以通过增加节点数来解决问题")])]),s._v(" "),n("h3",{attrs:{id:"节点-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#节点-node"}},[s._v("#")]),s._v(" 节点（Node）")]),s._v(" "),n("p",[s._v("在集群中，每一个 ES 服务实例就是一个节点（Node1、Node2、Node3），本质上就是一个 Java 进程每个实例都有自己的名字，就是配置里的 "),n("code",[s._v("'node.name'")]),s._v(" 设置的内容为了标识每个节点，每个节点启动后都会分配一个 UID，存储在 data 目录各个节点受到集群的管理，我们可以通过增加或者减少节点来达到扩容或减容的目的")]),s._v(" "),n("p",[s._v("集群里的节点是有分类的，就好像一家公司的不同部门，负责不同的业务和工作，主要的节点类型如下：")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("主节点（Master）")]),s._v("：主节点在整个集群是唯一的，Master 从有资格进行选举的节点（Master Eligible）中选举出来主节点主要负责管理集群变更、元数据的更改")]),s._v(" "),n("li",[n("strong",[s._v("数据节点（Data Node）")]),s._v("：负责保存数据，要扩充存储时候需要扩展这类节点数据节点还负责执行数据相关的操作，如：搜索、聚合、CURD 等所以对服务器的 CPU、内存、I/O 要求都比较高")]),s._v(" "),n("li",[n("strong",[s._v("协调节点（Coordinating Node）")]),s._v("：负责接受客户端的请求，将请求路由到对应的节点进行处理，并且把最终结果汇总到一起返回给客户端因为需要处理结果集和对其进行排序，需要较高的 CPU 和内存资源")]),s._v(" "),n("li",[n("strong",[s._v("预处理节点（Ingest Node）")]),s._v("：预处理操作允许在写入文档前通过定义好的一些 processors（处理器）和管道对数据进行转换默认情况下节点启动后就是预处理节点")]),s._v(" "),n("li",[n("strong",[s._v("部落节点（Tribe Node）")]),s._v("：部落节点可以连接到不同集群，并且支持将这些集群当成一个单独的集群处理但它在未来的版本中将会被淘汰")]),s._v(" "),n("li",[n("strong",[s._v("Hot & Warm Node")]),s._v("：不同硬件配置的 Data Node，用来实现 Hot & Warm 架构的节点，有利于降低集群部署成本例如，在硬件资源好的机器中部署 Hot 类型的数据节点，而在硬件资源一般的机器上部署 Warm Node 节点")])]),s._v(" "),n("p",[s._v("在生产环境中建议将每个节点设置为单一角色如果业务量或者并发量不大的情况下，为了节省成本可以调整为一个节点多种角色的集群在开发环境中的话，为了节省资源，一个节点可以设置多种角色（伪集群模式）")]),s._v(" "),n("p",[s._v("ES 版本变化比较快，所以各个节点类型的配置方式也会变动，具体的可以参考 "),n("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.13/modules-node.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"分片-shard"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分片-shard"}},[s._v("#")]),s._v(" 分片（Shard）")]),s._v(" "),n("p",[s._v("一般来说，面对海量数据的时候，分布式系统可以通过增加机器数量来进行水平扩展所以，系统需要将数据分成多个小块数据，并且尽量均匀地分配到各个机器上，然后可以通过某种策略找到对应数据块所在的位置")]),s._v(" "),n("p",[s._v("分片（Shard）是 ES 底层基本的读写单元，分片是为了分割巨大的索引数据，让读写可以由多台机器来完成，从而提高系统的吞吐量")]),s._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{height:"240px"},attrs:{src:a(582),alt:"Shard 示例"}})]),s._v(" "),n("p",[s._v("如上图，数据集 Data 按某些规则分为 4 个部分，然后被存储到 4 个节点上面（一个节点一个分片）")]),s._v(" "),n("h3",{attrs:{id:"副本-replica"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#副本-replica"}},[s._v("#")]),s._v(" 副本（Replica）")]),s._v(" "),n("p",[s._v("为了保证数据可靠性，一般分布式系统都会对数据进行冗余备份，这个备份也就是副本了")]),s._v(" "),n("p",[s._v("ES 将数据副本分为主从两类型：主分片（primary shard）和副分片（replica shard）")]),s._v(" "),n("p",[s._v("在写入的过程中，先写主分片，成功后并发写副分片，在数据恢复时以主分片为主多个副本除了可以保证数据可靠性外，还有一个好处是可以承担系统的读负载")]),s._v(" "),n("p",[s._v("可以在 Kibana 中运行下面指令来设置分片数量和副本数量：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 mapping 的时候定义好分片和副本数量")]),s._v("\nPUT books\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mappings"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"book_id"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_shards"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义了 2 个分片")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_replicas"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义了每个分片 2 个副分片")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("用上述指令创建 books 索引后，其在 Cerebro 中显示如下图，在红色箭头处 shards: 2 * 3 的意思是共有 2 个分片，每个分片一个主分片和 2 个副分片，加起来就是 3 个副本了图中黄色箭头处的 0 和 1 代表的是两个分片：分片 0 、分片 1，实线代表主分片，虚线代表分片副本")]),s._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:a(583),alt:"主分片和副分片示例"}})]),s._v(" "),n("h3",{attrs:{id:"集群健康状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群健康状态"}},[s._v("#")]),s._v(" 集群健康状态")]),s._v(" "),n("p",[s._v("通过集群的健康状态，我们可以了解集群是不是出现问题了集群健康状态有以下 3 种")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("Green")]),s._v("，集群处于健康状态，所有的主分片和副本分片都正常运行")]),s._v(" "),n("li",[n("strong",[s._v("Yellow")]),s._v("，所有的主分片都运行正常，但是有部分副本分片不正常，意味着可能存在单点故障的风险（如果部分主分片没有备份了，一旦这个主分片数据丢失，将导致这些数据永久丢失）如果集群只有 3 个数据节点，但是分配了 4 个副本（主分片 + 副本分片的总数），这个时候有一个副本无法分配的，因为相同的两份数据不应该被分配到同一个节点上")]),s._v(" "),n("li",[n("strong",[s._v("Red")]),s._v("，有部分主分片没有正常运行")])]),s._v(" "),n("p",[s._v("需要注意的是，每个索引也有这三种状态，"),n("strong",[s._v("如果索引丢失了一个副本分片，那么这个索引和集群的状态都变为 Yellow 状态，但是其他索引的的状态仍为 Green")])]),s._v(" "),n("h2",{attrs:{id:"集群层面的基本概念-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群层面的基本概念-2"}},[s._v("#")]),s._v(" 集群层面的基本概念")]),s._v(" "),n("h3",{attrs:{id:"索引-index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#索引-index"}},[s._v("#")]),s._v(" 索引（Index）")]),s._v(" "),n("blockquote",[n("p",[s._v("可以简单认为索引是类似于 MySQL 数据库的表")])]),s._v(" "),n("p",[s._v("索引是一类相似文档的集合ES 将数据存储在一个或者多个 Index 中，例如将用户数据存储在 User Index 中，而将订单数据存储在 Order Index 中一个索引有一个或者多个分片，索引的数据会以某种方式分散到各个分片上去存储")]),s._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{height:"240px"},attrs:{src:a(584),alt:"Index 示例"}})]),s._v(" "),n("p",[s._v("如上图，索引有 3 个分片主分片分别是 P1、P2、P3，对应的副本分片为 R1、R2、R3它们分别位于 3 个节点中")]),s._v(" "),n("p",[s._v("可以发现主分片和其副本分片不会同时分配在同一个节点上，这样是为了保证当一个节点上的主分片下线时，其他节点上的从副本可以升级为主分片，保证数据的可靠性")]),s._v(" "),n("h3",{attrs:{id:"mapping"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mapping"}},[s._v("#")]),s._v(" Mapping")]),s._v(" "),n("blockquote",[n("p",[s._v("可以简单认为 Mapping 是类似于 MySQL 数据库表结构的定义")])]),s._v(" "),n("p",[s._v("Mapping 定义了索引里的文档到底有哪些字段及这些字段的类型，类似于数据库中表结构的定义Mapping 有两种作用：")]),s._v(" "),n("ul",[n("li",[s._v("定义了索引中各个字段的名称和对应的类型")]),s._v(" "),n("li",[s._v("定义各个字段、倒排索引的相关设置，如使用什么分词器等")])]),s._v(" "),n("p",[s._v("需要注意的是，Mapping 一旦定义后，已经定义的字段的类型是不能更改的")]),s._v(" "),n("h3",{attrs:{id:"文档-doc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文档-doc"}},[s._v("#")]),s._v(" 文档（Doc）")]),s._v(" "),n("p",[s._v("我们向 ES 中写入的每一条数据都是一个文档（类似数据库中的一条记录），并且我们搜索也是以文档为单位的，所以文档是 ES 中的主要实体")]),s._v(" "),n("p",[s._v("在 Kibana 中运行下面指令来插入一条书本的记录：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我们指定了文档的 id 为1")]),s._v("\nPOST /books/_doc/1\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"book_id"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"linux 从入门到放弃"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("在 Kibana 中运行以下命令来查询指定 key-value 的数据：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索")]),s._v("\nPOST books/_search\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"query"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"match_phrase"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"book_id"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回的结果")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hits"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_score"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2876821")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hits"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"books"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_doc"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_score"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2876821")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_source"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"book_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),s._v(",\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"linux 从入门到放弃"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("从返回结果中可以看到，之前插入的数据包含在 "),n("code",[s._v("_source")]),s._v(" 字段里，结果中还带有其他字段，这些额外的字段都是 ES 为文档加上的元数据，下面是这些字段的解析")]),s._v(" "),n("ul",[n("li",[n("strong",[n("code",[s._v("_index")])]),s._v("：文档所属的索引名字，上述是 books")]),s._v(" "),n("li",[n("strong",[n("code",[s._v("_type")])]),s._v('：文档所属的类型名字，现在 ES 7.x 版本的类型统一为 "'),n("code",[s._v("_doc")]),s._v('"')]),s._v(" "),n("li",[n("strong",[n("code",[s._v("_id")])]),s._v("：文档的唯一 id如果我们插入时不指定文档 id，ES 会随机分配，这样有利于数据均匀分散到各个分片")]),s._v(" "),n("li",[n("strong",[n("code",[s._v("_version")])]),s._v("：文档的版本信息，并发读写时可以解决文档冲突")]),s._v(" "),n("li",[n("strong",[n("code",[s._v("_score")])]),s._v("：相关性算分，代表着查询的匹配性，用来排序")]),s._v(" "),n("li",[n("strong",[n("code",[s._v("_seq_no")])]),s._v(" 和 "),n("strong",[n("code",[s._v("_primary_term")])]),s._v("：是 ES 内部用来保证主分片和副本数据一致性的")])]),s._v(" "),n("p",[s._v("总体来说，文档有以下几个特性")]),s._v(" "),n("ul",[n("li",[s._v("ES 是面向文档的并且以文档为单位进行搜索的，如一条书本记录")]),s._v(" "),n("li",[s._v("文档以 JSON 格式进行序列化存储")]),s._v(" "),n("li",[s._v("每个文档都有唯一的 ID插入数据时不手动指定 ID 的性能会好点，因为系统不需要进一步判断这个 ID 是否已经存在")])]),s._v(" "),n("h3",{attrs:{id:"字段-field"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字段-field"}},[s._v("#")]),s._v(" 字段（Field）")]),s._v(" "),n("p",[s._v("每个文档都有一个或者多个字段，例如 books 索引指定了书本的记录有 "),n("code",[s._v("book_id")]),s._v(" 和 "),n("code",[s._v("name")]),s._v(" 两个字段，这些字段都有指定的类型字段本质上就是 JSON 中的 Key")]),s._v(" "),n("h3",{attrs:{id:"词项-term"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#词项-term"}},[s._v("#")]),s._v(" 词项（Term）")]),s._v(" "),n("p",[s._v('将全文本的内容进行分词后得到的词语就是词项了例如 "'),n("code",[s._v("Programmers Love Cat")]),s._v('" 使用标准分词器分词后得到 '),n("code",[s._v("[programmer, love, cat]")]),s._v(" 这 3 个词项需要注意的是：分词器除了进行分词外还会进行大小写转换等其他操作")]),s._v(" "),n("h3",{attrs:{id:"倒排索引与正排索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引与正排索引"}},[s._v("#")]),s._v(" 倒排索引与正排索引")]),s._v(" "),n("p",[s._v("这是两种数据结构")]),s._v(" "),n("p",[s._v("正排索引保存了实体 ID 到实体数据的关联关系MySQL InnoDB 的索引就是正排索引，使用的是 B+ 树来实现")]),s._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{height:"160px"},attrs:{src:a(585),alt:"正排索引示例"}})]),s._v(" "),n("p",[s._v("正排索引保存了词项到文档实体的关联关系倒排索引的具体实现先不展开，先简单了解一下这个概念就可以了")]),s._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{height:"160px"},attrs:{src:a(586),alt:"倒排索引示例"}})]),s._v(" "),n("h2",{attrs:{id:"系统层面上的基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#系统层面上的基本概念"}},[s._v("#")]),s._v(" 系统层面上的基本概念")]),s._v(" "),n("h3",{attrs:{id:"近实时系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#近实时系统"}},[s._v("#")]),s._v(" 近实时系统")]),s._v(" "),n("p",[s._v("ES 是一个近实时系统，我们写入的数据默认的情况下会在 1 秒后才能被查询到")]),s._v(" "),n("p",[s._v("ES 每秒都会把缓存中的数据写入到 Segment 文件中（写入到 Segment 中才能被检索），然后根据某些规则进行刷盘，并且合并这些 Segment所以需要注意的是，不能在写入数据成功后，立刻进行查询，这个时候可能会出现查询不到数据或者获取到旧数据的情况")]),s._v(" "),n("h3",{attrs:{id:"lucene-与-es-的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lucene-与-es-的关系"}},[s._v("#")]),s._v(" Lucene 与 ES 的关系")]),s._v(" "),n("p",[s._v("Lucene 是一个用于全文检索的开源项目，ES 在搜索的底层实现上用的就是 Lucene可以简单认为，ES 就是在 Lucene 上增加了分布式特性的系统服务")]),s._v(" "),n("p",[s._v("Lucene 也有索引，那 Lucene 的索引和 ES 的索引是个怎么样的关系呢？其实 ES 上的分片（Shard）就是一个完整的 Lucene 索引")]),s._v(" "),n("p",[s._v("（完）")])])}),[],!1,null,null,null);t.default=e.exports},582:function(s,t,a){s.exports=a.p+"assets/img/shard.2ab40ac3.jpg"},583:function(s,t,a){s.exports=a.p+"assets/img/shards-and-replicas.0a42349d.jpg"},584:function(s,t,a){s.exports=a.p+"assets/img/index.e602e7b1.jpg"},585:function(s,t,a){s.exports=a.p+"assets/img/forward-index.faa3b9e5.jpg"},586:function(s,t,a){s.exports=a.p+"assets/img/inverted-index.7f57c19a.jpg"}}]);