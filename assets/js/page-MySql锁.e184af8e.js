(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1145:function(s,t,a){"use strict";a.r(t);var r=a(1),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"mysql-锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql-锁"}},[s._v("#")]),s._v(" MySql 锁")]),s._v(" "),r("p",[s._v("作用：为了解决资源(数据库中的数据)竞争的问题")]),s._v(" "),r("p",[s._v("存储引擎支持的锁：")]),s._v(" "),r("ul",[r("li",[s._v("InnoDB 中支持行锁和表锁")]),s._v(" "),r("li",[s._v("MYISAM 中只支持表锁")])]),s._v(" "),r("h2",{attrs:{id:"锁的分类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#锁的分类"}},[s._v("#")]),s._v(" 锁的分类")]),s._v(" "),r("p",[r("img",{attrs:{src:a(605),alt:"transation"}})]),s._v(" "),r("h3",{attrs:{id:"行锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#行锁"}},[s._v("#")]),s._v(" 行锁")]),s._v(" "),r("h4",{attrs:{id:"共享锁-s-锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#共享锁-s-锁"}},[s._v("#")]),s._v(" 共享锁(S 锁)")]),s._v(" "),r("p",[r("strong",[s._v("定义")]),s._v("：")]),s._v(" "),r("ul",[r("li",[s._v("又称为读锁")]),s._v(" "),r("li",[s._v("多个事务对于同一个数据可以共享一把锁，都能访问到数据，但是只能读不能修改")])]),s._v(" "),r("p",[r("strong",[s._v("加锁方式")]),s._v("：")]),s._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from student where "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" LOCK IN SHARE MODE"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[r("strong",[s._v("解锁")]),s._v(":")]),s._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[s._v("commit/rollback"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("h4",{attrs:{id:"排他锁-x-锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#排他锁-x-锁"}},[s._v("#")]),s._v(" 排他锁(X 锁)")]),s._v(" "),r("p",[r("strong",[s._v("定义")]),s._v(":")]),s._v(" "),r("ul",[r("li",[s._v("又称为写锁")]),s._v(" "),r("li",[s._v("不能与其他锁并存")]),s._v(" "),r("li",[s._v("一个事务获取了一个数据行的排它锁，其他事务就不能再获取该行的锁")]),s._v(" "),r("li",[s._v("只有获取了排它锁的事务是可以对数据行进行读取和修改")])]),s._v(" "),r("p",[r("strong",[s._v("加锁方式")]),s._v("：")]),s._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动")]),s._v("\ndelete/update/insert 默认加上 X 锁\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 手动")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from student where "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" FOR UPDATE"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br")])]),r("p",[r("strong",[s._v("解锁")]),s._v(":")]),s._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[s._v("commit/rollback"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("h3",{attrs:{id:"意向锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#意向锁"}},[s._v("#")]),s._v(" 意向锁")]),s._v(" "),r("ul",[r("li",[s._v("是一种表锁")]),s._v(" "),r("li",[s._v("由数据库引擎自己维护")]),s._v(" "),r("li",[s._v("用户无法手动操作意向锁")])]),s._v(" "),r("p",[s._v("使用意向锁的目的： 提高加表锁的效率的一个标志")]),s._v(" "),r("h4",{attrs:{id:"意向共享锁-is-锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#意向共享锁-is-锁"}},[s._v("#")]),s._v(" 意向共享锁(IS 锁)")]),s._v(" "),r("p",[r("strong",[s._v("定义")]),s._v(":")]),s._v(" "),r("ul",[r("li",[s._v("表示事务准备给数据行加入共享锁")]),s._v(" "),r("li",[s._v("一个数据行加共享锁前必须先取得该表的 IS 锁")])]),s._v(" "),r("h4",{attrs:{id:"意向排它锁-ix-锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#意向排它锁-ix-锁"}},[s._v("#")]),s._v(" 意向排它锁(IX 锁)")]),s._v(" "),r("p",[r("strong",[s._v("定义")]),s._v(":")]),s._v(" "),r("ul",[r("li",[s._v("表示事务准备给数据行加入排它锁")]),s._v(" "),r("li",[s._v("一个数据行加排它锁前必须先取得该表的 IX 锁")])]),s._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[s._v("表锁与行锁的区别：")]),s._v(" "),r("ul",[r("li",[s._v("锁定粒度：表锁 > 行锁")]),s._v(" "),r("li",[s._v("加锁效率：表锁 > 行锁")]),s._v(" "),r("li",[s._v("冲突概率：表锁 > 行锁")]),s._v(" "),r("li",[s._v("并发性能：表锁 < 行锁")])])]),s._v(" "),r("h3",{attrs:{id:"锁的算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#锁的算法"}},[s._v("#")]),s._v(" 锁的算法")]),s._v(" "),r("h4",{attrs:{id:"记录锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#记录锁"}},[s._v("#")]),s._v(" 记录锁")]),s._v(" "),r("p",[s._v("作用：锁定记录")]),s._v(" "),r("p",[s._v("使用场景：")]),s._v(" "),r("p",[r("img",{attrs:{src:a(606),alt:"lock"}})]),s._v(" "),r("h4",{attrs:{id:"间隙锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#间隙锁"}},[s._v("#")]),s._v(" 间隙锁")]),s._v(" "),r("p",[s._v("作用：锁定范围")]),s._v(" "),r("p",[s._v("目的：阻塞插入")]),s._v(" "),r("p",[s._v("使用条件：")]),s._v(" "),r("p",[r("img",{attrs:{src:a(607),alt:"lock"}})]),s._v(" "),r("h4",{attrs:{id:"临键锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#临键锁"}},[s._v("#")]),s._v(" 临键锁")]),s._v(" "),r("p",[s._v("作用：锁定范围加记录")]),s._v(" "),r("p",[s._v("使用条件：")]),s._v(" "),r("p",[r("img",{attrs:{src:a(608),alt:"lock"}})]),s._v(" "),r("h2",{attrs:{id:"mysql-锁到底锁住了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql-锁到底锁住了什么"}},[s._v("#")]),s._v(" MySQL 锁到底锁住了什么")]),s._v(" "),r("p",[r("strong",[s._v("锁定了聚簇索引项")])]),s._v(" "),r("h2",{attrs:{id:"参考文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),r("p",[r("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-locking.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("InnoDB 存储引擎"),r("OutboundLink")],1)]),s._v(" "),r("p",[r("a",{attrs:{href:"https://www.bilibili.com/video/BV1x54y1979n?spm_id_from=333.337.search-card.all.click",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySql 锁"),r("OutboundLink")],1)]),s._v(" "),r("p",[s._v("（完）")])])}),[],!1,null,null,null);t.default=e.exports},605:function(s,t,a){s.exports=a.p+"assets/img/transation4.abe34d59.png"},606:function(s,t,a){s.exports=a.p+"assets/img/lock1.c06fecce.png"},607:function(s,t,a){s.exports=a.p+"assets/img/lock2.4012ab37.png"},608:function(s,t,a){s.exports=a.p+"assets/img/lock3.d15fa31c.png"}}]);