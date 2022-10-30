(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1341:function(t,a,v){"use strict";v.r(a);var _=v(1),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"json-提取器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#json-提取器"}},[t._v("#")]),t._v(" JSON 提取器")]),t._v(" "),_("p",[t._v("位置：后置处理器中")]),t._v(" "),_("h2",{attrs:{id:"什么是-json-提取器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-json-提取器"}},[t._v("#")]),t._v(" 什么是 JSON 提取器")]),t._v(" "),_("p",[t._v("用来提取 JSON 数据的一种方式")]),t._v(" "),_("h2",{attrs:{id:"为什么要用-json-提取器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用-json-提取器"}},[t._v("#")]),t._v(" 为什么要用 JSON 提取器")]),t._v(" "),_("ul",[_("li",[t._v("JSON 是目前大多数接口响应内容的数据格式")]),t._v(" "),_("li",[t._v("在接口测试中，不同接口之间可能会有"),_("strong",[t._v("数据依赖")]),t._v("，在 Jmeter 中可以通过后置处理器来提取接口的响应内容")]),t._v(" "),_("li",[t._v("JSON 提取器是其中一个可以用来提取响应内容的元件")])]),t._v(" "),_("h3",{attrs:{id:"json-提取器的应用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#json-提取器的应用场景"}},[t._v("#")]),t._v(" JSON 提取器的应用场景")]),t._v(" "),_("ul",[_("li",[t._v("提取某个特定的值")]),t._v(" "),_("li",[t._v("提取多个值")]),t._v(" "),_("li",[t._v("按条件取值")]),t._v(" "),_("li",[t._v("提取值组成的列表")])]),t._v(" "),_("h2",{attrs:{id:"界面介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#界面介绍"}},[t._v("#")]),t._v(" 界面介绍")]),t._v(" "),_("p",[_("img",{attrs:{src:v(878),alt:"json"}})]),t._v(" "),_("p",[t._v("字段介绍：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Apply to")]),t._v(" "),_("td",[t._v("应用范围，默认是 Main sample only")])]),t._v(" "),_("tr",[_("td",[t._v("Names of created variables")]),t._v(" "),_("td",[t._v("提取值的变量名"),_("br"),t._v("多个变量使用 "),_("code",[t._v(";")]),t._v(" 分隔"),_("br"),t._v("必填项")])]),t._v(" "),_("tr",[_("td",[t._v("JSON Path expressions")]),t._v(" "),_("td",[t._v("JSON Path 表达式，提取某个值"),_("br"),t._v("多个表达式用 "),_("code",[t._v(";")]),t._v(" 分隔"),_("br"),t._v("必填项")])]),t._v(" "),_("tr",[_("td",[t._v("Match No.(0 for Random)")]),t._v(" "),_("td",[t._v("获取提取的值："),_("br"),t._v("0：代表随机取"),_("br"),t._v("-1：表示取所有值"),_("br"),t._v("1：取第一个值"),_("br"),_("br"),t._v("若值大于匹配总数，在设置了缺省值的情况下返回缺省值，否则返回空"),_("br"),t._v("非必填项")])]),t._v(" "),_("tr",[_("td",[t._v("Compute concatenation var(suffix_ALL)")]),t._v(" "),_("td",[t._v("如果匹配多个值，将使用 "),_("code",[t._v(",")]),t._v(" 分隔符将他们连接起来并存储"),_("br"),t._v("存储在名为 "),_("code",[t._v("<variable name>_ALL")]),t._v(" 的 var 中")])]),t._v(" "),_("tr",[_("td",[t._v("Defaults Values")]),t._v(" "),_("td",[t._v("缺省值，匹配不到时取改值，可写 error"),_("br"),t._v("非必填项")])])])]),t._v(" "),_("h2",{attrs:{id:"json-提取器实例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#json-提取器实例"}},[t._v("#")]),t._v(" JSON 提取器实例")]),t._v(" "),_("p",[t._v("在介绍例子之前，首先先来学习下 JSON Path 的语法")]),t._v(" "),_("h3",{attrs:{id:"json-path-语法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#json-path-语法"}},[t._v("#")]),t._v(" JSON Path 语法")]),t._v(" "),_("ul",[_("li",[t._v("$: 代表整个 JSON 数据，根节点")]),t._v(" "),_("li",[t._v(". : 代表下个节点")])]),t._v(" "),_("h3",{attrs:{id:"实例应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实例应用"}},[t._v("#")]),t._v(" 实例应用")]),t._v(" "),_("p",[t._v("测试结构树：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(879),alt:"json"}})]),t._v(" "),_("p",[t._v("查看用户接口需要在请求头中添加登录后获取的 token，配置如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(880),alt:"json"}})]),t._v(" "),_("h4",{attrs:{id:"提取单个值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提取单个值"}},[t._v("#")]),t._v(" 提取单个值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("JSON Path")]),t._v(" "),_("th",[t._v("结果")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("$.data.total(绝对路径方式)")]),t._v(" "),_("td",[t._v("3")])]),t._v(" "),_("tr",[_("td",[t._v("$..total(相对路径方式)")]),t._v(" "),_("td",[t._v("3")])]),t._v(" "),_("tr",[_("td",[t._v("$..users[0].role")]),t._v(" "),_("td",[t._v("user")])]),t._v(" "),_("tr",[_("td",[t._v("$.data.users[0].ext_info.yesapi_points")]),t._v(" "),_("td",[t._v("0")])])])]),t._v(" "),_("h5",{attrs:{id:"切片提取单个值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#切片提取单个值"}},[t._v("#")]),t._v(" 切片提取单个值")]),t._v(" "),_("p",[t._v("与 Python 中的切片类似")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("JSON Path")])]),t._v(" "),_("th",[_("strong",[t._v("结果")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("$..name[2]")]),t._v(" "),_("td",[t._v("第三个 name")])]),t._v(" "),_("tr",[_("td",[t._v("$..name[-2]")]),t._v(" "),_("td",[t._v("倒数第二个 name")])]),t._v(" "),_("tr",[_("td",[t._v("$..name[0,1]")]),t._v(" "),_("td",[t._v("前面两个 name")])]),t._v(" "),_("tr",[_("td",[t._v("$..name[:2]")]),t._v(" "),_("td",[t._v("第一、二个 name")])]),t._v(" "),_("tr",[_("td",[t._v("$..name[1:2]")]),t._v(" "),_("td",[t._v("第二个 name")])]),t._v(" "),_("tr",[_("td",[t._v("$..name[-2:]")]),t._v(" "),_("td",[t._v("倒数两个 name")])]),t._v(" "),_("tr",[_("td",[t._v("$..name[1:]")]),t._v(" "),_("td",[t._v("第二个开始的所有 name")])])])]),t._v(" "),_("h4",{attrs:{id:"提取多个值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提取多个值"}},[t._v("#")]),t._v(" 提取多个值")]),t._v(" "),_("p",[_("strong",[t._v("注意")]),t._v(": 提取多个值时 Match No. 必须填 -1")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("以下几种几种方式均可：\n$..name\n$.data[*]..name\n$..[*].name\n$.data..name\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br")])]),_("p",[_("strong",[t._v("重点")]),t._v(":")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("不能")]),t._v("通过取下标的方式（ name[0] ）来获取值，因为默认是获取 "),_("strong",[t._v("ASCII码大")]),t._v("的那个值 ，除非提取器设置了 Match No")]),t._v(" "),_("li",[t._v("调用变量时，不再是 ${name} 而是 ·${name_1} 、 ${name_2}")])]),t._v(" "),_("h4",{attrs:{id:"按条件取值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#按条件取值"}},[t._v("#")]),t._v(" 按条件取值")]),t._v(" "),_("p",[t._v("格式：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("[?(expression)]\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("例子：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("JSON Path")]),t._v(" "),_("th",[t._v("结果")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v('$..data[*].[?(@.name=="xiaoai")]')]),t._v(" "),_("td",[t._v("提取 name 等于 “xiaoai” 的记录")])]),t._v(" "),_("tr",[_("td",[t._v('$..data[*].[?(@.lastLoginTime > "2021-07-20")]')]),t._v(" "),_("td",[t._v("提取 lastLoginTime 字段大于 2021-07-20 的记录")])]),t._v(" "),_("tr",[_("td",[t._v("$.data[?(@.total)]")]),t._v(" "),_("td",[t._v("提取 data 中包含 total 字段的记录")])]),t._v(" "),_("tr",[_("td",[t._v("$..data[*].[?(@.name=~/.*xiaoai.*?/)]")]),t._v(" "),_("td",[t._v("提取 name 中包含 “xiaoai” 的记录")])])])]),t._v(" "),_("p",[_("strong",[t._v("@")]),t._v("： 代表当前节点")]),t._v(" "),_("p",[_("strong",[t._v("=~")])]),t._v(" "),_("ul",[_("li",[t._v("后面跟正则表达式，如果想提取"),_("strong",[t._v("包含指定字符")]),t._v("的值，可以使用此正则： /."),_("em",[t._v("指定字符串.")]),t._v("?/i")]),t._v(" "),_("li",[t._v("i 代表大小写不敏感")])]),t._v(" "),_("h4",{attrs:{id:"勾选-compute-concatenation-var"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#勾选-compute-concatenation-var"}},[t._v("#")]),t._v(" 勾选 Compute concatenation var")]),t._v(" "),_("p",[t._v("JSON 提取器")]),t._v(" "),_("p",[_("img",{attrs:{src:v(881),alt:"json"}})]),t._v(" "),_("p",[t._v("结果：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("name_1=zhangsan\nname_2=lisi\nname_3=wangwu\nname_ALL=zhangsan,lisi,wangwu\nname_matchNr=3\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br")])]),_("h4",{attrs:{id:"提取多个变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提取多个变量"}},[t._v("#")]),t._v(" 提取多个变量")]),t._v(" "),_("p",[_("img",{attrs:{src:v(882),alt:"json"}})]),t._v(" "),_("p",[_("strong",[t._v("注意")]),t._v("：")]),t._v(" "),_("p",[t._v("提取多个变量时，"),_("code",[t._v("Default Values")]),t._v("  必须填写")]),t._v(" "),_("p",[t._v("（完）")])])}),[],!1,null,null,null);a.default=s.exports},878:function(t,a,v){t.exports=v.p+"assets/img/json1.13ff4d19.png"},879:function(t,a,v){t.exports=v.p+"assets/img/json2.ba1d0292.png"},880:function(t,a,v){t.exports=v.p+"assets/img/json3.39fcf277.png"},881:function(t,a,v){t.exports=v.p+"assets/img/json6.56bf2d08.png"},882:function(t,a,v){t.exports=v.p+"assets/img/json7.d2bc66dc.png"}}]);