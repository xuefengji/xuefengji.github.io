(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1257:function(a,t,s){"use strict";s.r(t);var e=s(1),i=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"selenium-中-xpath定位方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selenium-中-xpath定位方式"}},[a._v("#")]),a._v(" Selenium 中 xpath定位方式")]),a._v(" "),e("p",[a._v("了解了 xpath 的一些语法后，可以在 Selenium 中使用 xpath 来定位一些元素")]),a._v(" "),e("h2",{attrs:{id:"常用的一些定位方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的一些定位方式"}},[a._v("#")]),a._v(" 常用的一些定位方式：")]),a._v(" "),e("h3",{attrs:{id:"通过元素属性定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过元素属性定位"}},[a._v("#")]),a._v(" 通过元素属性定位")]),a._v(" "),e("p",[e("strong",[a._v("语法")]),a._v("：//tag[@attr=attr]")]),a._v(" "),e("p",[a._v("栗子：以定位百度输入框为例：")]),a._v(" "),e("p",[e("img",{attrs:{src:s(303),alt:"baidu"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("xpath 路径：//input[@id='kw']\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"使用逻辑运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用逻辑运算符"}},[a._v("#")]),a._v(" 使用逻辑运算符")]),a._v(" "),e("p",[e("strong",[a._v("语法")]),a._v("：//tag[@attr1=attr1 and @attr2=attr2]")]),a._v(" "),e("p",[a._v("这个是逻辑与 (and)，逻辑或 (or)s 是也同样的")]),a._v(" "),e("p",[e("img",{attrs:{src:s(303),alt:"baidu"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("xpath 路径：//input[@id='kw' and @class='s_ipt']\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"通过文本定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过文本定位"}},[a._v("#")]),a._v(" 通过文本定位")]),a._v(" "),e("h4",{attrs:{id:"text"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[a._v("#")]),a._v(" text()")]),a._v(" "),e("p",[e("strong",[a._v("语法：")]),a._v("//tag[text()=xx]")]),a._v(" "),e("p",[a._v('这里用百度首页里面的 "hao123" 链接举例子')]),a._v(" "),e("p",[e("img",{attrs:{src:s(182),alt:"baidu1"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" xpath 路径：//a[text()='hao123']\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"contains-包含定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contains-包含定位"}},[a._v("#")]),a._v(" contains() 包含定位")]),a._v(" "),e("p",[e("strong",[a._v("语法")]),a._v("：//tag[contains(text(),xx)] 或者//tag[contains(@attr,xx)]")]),a._v(" "),e("p",[a._v("前面一个是文本，后面一个是包含属性前面都讲了直接 @属性定位")]),a._v(" "),e("p",[e("img",{attrs:{src:s(182),alt:"baidu1"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" xpath 路径：//a[contains(text(),'hao123')]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"position-n-位置定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#position-n-位置定位"}},[a._v("#")]),a._v(" "),e("code",[a._v("position()=n")]),a._v(" 位置定位")]),a._v(" "),e("p",[e("strong",[a._v("语法：")]),a._v("//tag[@attr=attr][position()=2]")]),a._v(" "),e("p",[a._v("n 表示第几个元素，n 从 1 开始")]),a._v(" "),e("p",[e("img",{attrs:{src:s(182),alt:"baidu1"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" xpath 路径：//a[@class='mnav'][position()=2]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"last-n"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-n"}},[a._v("#")]),a._v(" last()-n")]),a._v(" "),e("p",[e("code",[a._v("n=0")]),a._v(" 或者不写 last() 默认倒数第一个，"),e("code",[a._v("n=1")]),a._v(" 倒数第二，以此类推")]),a._v(" "),e("p",[e("img",{attrs:{src:s(182),alt:"baidu1"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("xpath 路径：//div[@id='s-top-left']/a[last()-5]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"following-sibling-选取当前节点之后的所有同级节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#following-sibling-选取当前节点之后的所有同级节点"}},[a._v("#")]),a._v(" following-sibling 选取当前节点之后的所有同级节点")]),a._v(" "),e("p",[a._v('定位 "hao123" 这个 a 标签的父级元素（div）的同级的第一个 div')]),a._v(" "),e("p",[e("img",{attrs:{src:s(182),alt:"baidu1"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("xpath 路径：//div[@id='s-top-left']/following-sibling::div[1]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"preceding-sibling-选取当前节点之前的所有同级节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preceding-sibling-选取当前节点之前的所有同级节点"}},[a._v("#")]),a._v(" preceding-sibling 选取当前节点之前的所有同级节点")]),a._v(" "),e("p",[a._v("7 和 6 相反的，6 是同级往下走，7 是同级往上走的")]),a._v(" "),e("p",[a._v('定位 "hao123" 这个 a 标签的父级元素（div）的同级的第一个 div')]),a._v(" "),e("p",[e("img",{attrs:{src:s(182),alt:"baidu1"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("xpath 路径：//div[@id='s-top-left']/preceding-sibling::div[1]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("（完）")])])}),[],!1,null,null,null);t.default=i.exports},182:function(a,t,s){a.exports=s.p+"assets/img/baidu1.b80a9c3d.jpg"},303:function(a,t,s){a.exports=s.p+"assets/img/baidu.7c60c437.jpg"}}]);