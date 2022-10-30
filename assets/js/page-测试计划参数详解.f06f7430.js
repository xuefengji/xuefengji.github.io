(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{1349:function(A,t,a){"use strict";a.r(t);var r=a(1),v=Object(r.a)({},(function(){var A=this,t=A.$createElement,r=A._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[r("h1",{attrs:{id:"测试计划参数详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试计划参数详解"}},[A._v("#")]),A._v(" 测试计划参数详解")]),A._v(" "),r("h2",{attrs:{id:"测试计划参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试计划参数"}},[A._v("#")]),A._v(" 测试计划参数")]),A._v(" "),r("p",[r("img",{attrs:{src:a(930),alt:"img"}})]),A._v(" "),r("h3",{attrs:{id:"名称和注释"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#名称和注释"}},[A._v("#")]),A._v(" 名称和注释")]),A._v(" "),r("p",[A._v("整个测试脚本保存的名称，和对该测试计划的注释")]),A._v(" "),r("h3",{attrs:{id:"用户定义的变量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用户定义的变量"}},[A._v("#")]),A._v(" 用户定义的变量")]),A._v(" "),r("ul",[r("li",[A._v("用户添加的变量，相当于全局变量，"),r("strong",[A._v("所有线程组都共用")])]),A._v(" "),r("li",[A._v("一般添加一些系统常用的配置")]),A._v(" "),r("li",[A._v("一般不建议在测试计划上添加变量，因为不方便启用（disable）和禁用（enable）")]),A._v(" "),r("li",[A._v("可以添加用户自定义变量组件来代替，如下图")])]),A._v(" "),r("p",[r("img",{attrs:{src:a(931),alt:"img"}})]),A._v(" "),r("h3",{attrs:{id:"独立运行每个线程组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#独立运行每个线程组"}},[A._v("#")]),A._v(" 独立运行每个线程组")]),A._v(" "),r("ul",[r("li",[r("p",[A._v("用于控制测试计划中的多个线程组的执行顺序")])]),A._v(" "),r("li",[r("p",[A._v("不勾选，默认"),r("strong",[A._v("各线程组并行、随机执行")])])])]),A._v(" "),r("p",[r("strong",[A._v("作用："),r("strong",[A._v("勾选后，用于控制测试计划中的多个线程组的执行顺序，保证")]),A._v("顺序执行")]),A._v("各线程组")]),A._v(" "),r("p",[r("strong",[A._v("下图是没有勾选时")]),A._v("，多个线程组执行的顺序，可以看到并不完全是顺序执行的")]),A._v(" "),r("p",[r("img",{attrs:{src:a(932),alt:"img"}})]),A._v(" "),r("p",[r("strong",[A._v("下图是勾选后")]),A._v("，多个线程组的执行顺序，可以看到当执行完第一个线程组所有取样器才会执行第二个线程组的，按顺序执行")]),A._v(" "),r("p",[r("img",{attrs:{src:a(933),alt:"img"}})]),A._v(" "),r("h4",{attrs:{id:"特别注意"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特别注意"}},[A._v("#")]),A._v(" 特别注意")]),A._v(" "),r("ul",[r("li",[A._v("线程组中的"),r("strong",[A._v("取样器执行顺序")]),A._v("：默认是从上到下执行")]),A._v(" "),r("li",[A._v("交替控制器、随机控制器、随机顺序控制器、循环控制器可以改变取样器的执行顺序")])]),A._v(" "),r("h3",{attrs:{id:"主线程结束后运行-teardown-线程组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主线程结束后运行-teardown-线程组"}},[A._v("#")]),A._v(" 主线程结束后运行 tearDown 线程组")]),A._v(" "),r("ul",[r("li",[A._v("当线程组停止运行时仍继续运行 tearDown 线程组")]),A._v(" "),r("li",[A._v("该选项结合线程组的执行配置使用，如图所示，目前已很少使用\n"),r("img",{attrs:{src:a(934),alt:"plan5"}})])]),A._v(" "),r("h3",{attrs:{id:"函数测试模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数测试模式"}},[A._v("#")]),A._v(" 函数测试模式")]),A._v(" "),r("p",[A._v("勾选后，如果监听器（如：查看结果树）配置了保存到一个文件中（如下图），那么 JMeter 会将每次的请求结果保存到文件中")]),A._v(" "),r("p",[A._v("在负载测试中不建议勾选，平时调试脚本情况下可以勾选")]),A._v(" "),r("p",[r("img",{attrs:{src:a(935),alt:"img"}})]),A._v(" "),r("h3",{attrs:{id:"添加目录或-jar-包到-classpath"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#添加目录或-jar-包到-classpath"}},[A._v("#")]),A._v(" 添加目录或 jar 包到 classpath")]),A._v(" "),r("p",[A._v("当脚本需要调用外部的 java 文件或 jar 包时，可以把 jar 包路径添加到这里，然后在 BeanShell 中直接 import 进来，并调用 jar 包中的方法")]),A._v(" "),r("p",[A._v("（完）")])])}),[],!1,null,null,null);t.default=v.exports},930:function(A,t,a){A.exports=a.p+"assets/img/plan1.e2579b74.png"},931:function(A,t,a){A.exports=a.p+"assets/img/plan2.ea6ead36.png"},932:function(A,t,a){A.exports=a.p+"assets/img/plan3.c5c0f54c.png"},933:function(A,t,a){A.exports=a.p+"assets/img/plan4.1e2f88a8.png"},934:function(A,t,a){A.exports=a.p+"assets/img/plan5.2fe8eca6.png"},935:function(A,t){A.exports="data:image/png;base64,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"}}]);