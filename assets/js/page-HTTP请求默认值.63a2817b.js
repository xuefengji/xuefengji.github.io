(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1329:function(t,s,v){"use strict";v.r(s);var _=v(1),p=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http-请求默认值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-请求默认值"}},[t._v("#")]),t._v(" HTTP 请求默认值")]),t._v(" "),_("h2",{attrs:{id:"界面介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#界面介绍"}},[t._v("#")]),t._v(" 界面介绍")]),t._v(" "),_("p",[_("img",{attrs:{src:v(822),alt:"http"}})]),t._v(" "),_("p",[t._v("界面与 HTTP Resquest 类似，就不重复介绍字段值意思啦")]),t._v(" "),_("p",[t._v("HTTP 请求默认值，可以添加在测试计划、线程组、HTTP 请求下")]),t._v(" "),_("p",[_("strong",[t._v("思考")]),t._v("：既然测试计划、线程组、HTTP 请求下都可以添加，那优先级顺序是什么样子的呢？")]),t._v(" "),_("h2",{attrs:{id:"请求默认值优先级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求默认值优先级"}},[t._v("#")]),t._v(" 请求默认值优先级")]),t._v(" "),_("p",[t._v("先看个例子：")]),t._v(" "),_("p",[t._v("创建一个测试计划，下面创建 2 个线程组，每个线程组下创建 2 个 HTTP 请求，测试计划、线程组、HTTP 请求下分别创建一个 HTTP 请求默认值，如图：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(823),alt:"test-plan"}})]),t._v(" "),_("p",[t._v("配置如下：")]),t._v(" "),_("p",[_("strong",[t._v("测试计划下的 HTTP 请求默认值配置(后面简称 1)")]),t._v("：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(824),alt:"plan-1"}})]),t._v(" "),_("p",[_("strong",[t._v("线程组1 下的 HTTP 请求默认值配置(后面简称 2)")]),t._v(":")]),t._v(" "),_("p",[_("img",{attrs:{src:v(825),alt:"plan-1"}})]),t._v(" "),_("p",[_("strong",[t._v("HTTP1 下的 HTTP 请求默认值配置(后面简称 3)")]),t._v(":")]),t._v(" "),_("p",[_("img",{attrs:{src:v(826),alt:"plan-1"}})]),t._v(" "),_("p",[_("strong",[t._v("HTTP2 配置了个参数")]),t._v(":")]),t._v(" "),_("p",[_("img",{attrs:{src:v(827),alt:"plan-1"}})]),t._v(" "),_("p",[t._v("其他 HTTP 请求暂无其他配置")]),t._v(" "),_("p",[_("strong",[t._v("运行查看结果")]),t._v("：")]),t._v(" "),_("p",[t._v("HTTP1：")]),t._v(" "),_("ul",[_("li",[t._v("使用了 3 请求默认值中的协议、端口、编码")]),t._v(" "),_("li",[t._v("请求了 3 请求默认值中的 url，覆盖了其他 1 和 2 的请求默认值中的 url")]),t._v(" "),_("li",[t._v("参数拼接了 1 和 2 请求默认值中设置的参数")])]),t._v(" "),_("p",[_("img",{attrs:{src:v(828),alt:"response"}})]),t._v(" "),_("p",[t._v("HTTP2：")]),t._v(" "),_("ul",[_("li",[t._v("使用了 2 请求默认值中的协议、端口和 1 请求默认值中的编码")]),t._v(" "),_("li",[t._v("请求了 1 请求默认值中的 url")]),t._v(" "),_("li",[t._v("参数拼接了 1 和 2 请求默认值中和本身 HTTP 请求中设置的参数")])]),t._v(" "),_("p",[_("img",{attrs:{src:v(829),alt:"response"}})]),t._v(" "),_("p",[t._v("HTTP3、HTTP4：")]),t._v(" "),_("p",[t._v("所在线程组由于没有设置额外的请求默认值，本身请求也没有设置，所以请求的是 1 请求默认值中的 URL，使用的也是 1 中设置的协议、端口和编码、参数")]),t._v(" "),_("p",[_("img",{attrs:{src:v(830),alt:"response"}})]),t._v(" "),_("p",[_("strong",[t._v("总结")]),t._v("：")]),t._v(" "),_("ul",[_("li",[t._v("测试计划、线程组、HTTP 请求均可添加请求默认值")]),t._v(" "),_("li",[t._v("测试计划下请求默认值的作用域是"),_("strong",[t._v("所有线程组中的 HTTP 请求")])]),t._v(" "),_("li",[t._v("线程组下的请求默认值的作用域是"),_("strong",[t._v("该线程组下的所有 HTTP 请求")])]),t._v(" "),_("li",[t._v("HTTP 请求下的请求默认值的作用域是"),_("strong",[t._v("该 HTTP 请求")])]),t._v(" "),_("li",[t._v("优先顺序：HTTP 本身请求 > HTTP 请求下的默认值 > 线程组下的请求默认值 > 测试计划下的请求默认值")]),t._v(" "),_("li",[t._v("参数不会按照上述的优先顺序，所有请求默认值中的参数或请求体会被拼接(Json 格式的请求体不会被合并)")])]),t._v(" "),_("p",[t._v("（完）")])])}),[],!1,null,null,null);s.default=p.exports},822:function(t,s,v){t.exports=v.p+"assets/img/http-default1.7b4e6607.png"},823:function(t,s,v){t.exports=v.p+"assets/img/test-plan.cd8e5fc6.png"},824:function(t,s,v){t.exports=v.p+"assets/img/plan-1.46ef9412.png"},825:function(t,s,v){t.exports=v.p+"assets/img/plan-2.9bdae91a.png"},826:function(t,s,v){t.exports=v.p+"assets/img/plan-3.707b010a.png"},827:function(t,s,v){t.exports=v.p+"assets/img/plan-4.31a1a4e0.png"},828:function(t,s,v){t.exports=v.p+"assets/img/response1.7ee0b459.png"},829:function(t,s,v){t.exports=v.p+"assets/img/response2.7d6b6d33.png"},830:function(t,s,v){t.exports=v.p+"assets/img/response3.c40d213f.png"}}]);