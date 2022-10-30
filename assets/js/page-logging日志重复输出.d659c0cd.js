(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1222:function(a,t,s){"use strict";s.r(t);var e=s(1),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"logging-日志重复输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logging-日志重复输出"}},[a._v("#")]),a._v(" logging 日志重复输出")]),a._v(" "),e("h2",{attrs:{id:"问题描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[a._v("#")]),a._v(" 问题描述")]),a._v(" "),e("p",[a._v("在接口自动化测试框架中，对测试用例增加日志输出时，会重复输出")]),a._v(" "),e("p",[e("img",{attrs:{src:s(661),alt:"logging"}})]),a._v(" "),e("h2",{attrs:{id:"问题分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),e("p",[e("strong",[a._v("原因")]),a._v("：没有移除 handler")]),a._v(" "),e("p",[e("strong",[a._v("分析")]),a._v("：")]),a._v(" "),e("ul",[e("li",[a._v("在执行 "),e("code",[a._v("logger = logging.getLogger*(__name__)")]),a._v(" 时，会先检查内存中是否存在 "),e("code",[a._v("logger.log")]),a._v(" 的 logger 对象， 存在则取出，不存在则新建")]),a._v(" "),e("li",[a._v("实例化的 logger 对象中有个 handlers 属性来存储 handler\n"),e("ul",[e("li",[e("code",[a._v("logger.handlers")]),a._v(" 起初是个空列表，执行 "),e("code",[a._v("logger.addHandler(console)")]),a._v(" 时，会在 handlers 列表中添加一个 StreamHandler，用于输出一条日志")]),a._v(" "),e("li",[a._v("在第二次被调用时，"),e("code",[a._v("logger.handlers")]),a._v(" 中已经存在一个 StreamHandler 了，再次执行 "),e("code",[a._v("logger.addHandler(console)")]),a._v(" 时，就会在 handlers 中再次添加一个新的 StreamHandler，就会输出两条日志")]),a._v(" "),e("li",[a._v("以此类推，在重复被调用 N 次后，就会不断添加新的 StreamHandler，导致重复输出日志")])])])]),a._v(" "),e("h2",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),e("p",[e("strong",[a._v("在日志记录完之后移除 Handler")])]),a._v(" "),e("h3",{attrs:{id:"方案一-推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案一-推荐"}},[a._v("#")]),a._v(" 方案一（推荐）")]),a._v(" "),e("blockquote",[e("p",[a._v("在 log 方法中做判断，如果已有 handler，则不再添加")]),a._v(" "),e("p",[a._v("这种方式类似于单例模式思想")])]),a._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[a._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("not")]),a._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("logger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("handlers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 把控制台日志对象给logging")]),a._v("\n        self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("logger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("addHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("file_log"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("logger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("addHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"方案二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[a._v("#")]),a._v(" 方案二")]),a._v(" "),e("blockquote",[e("p",[a._v("每次创建不同 name 的 logger，每次都是新 logger，不会有添加多个 handler 的问题")]),a._v(" "),e("p",[a._v("这种方式会导致内存中会存在很多 logger 对象")])]),a._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 每次创建的时候 name 都是不同的")]),a._v("\nself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("logger "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" logging"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("getLogger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("__name__"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"方案三"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案三"}},[a._v("#")]),a._v(" 方案三")]),a._v(" "),e("blockquote",[e("p",[a._v("每次记录完日志之后，调用 removeHandler() 把这个 logger 里的 handler 移除掉")]),a._v(" "),e("p",[a._v("这种方式就会不断的进行添加删除操作")])]),a._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[a._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("logger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("removeHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("（完）")])])}),[],!1,null,null,null);t.default=n.exports},661:function(a,t,s){a.exports=s.p+"assets/img/logging1.ea297fdf.png"}}]);