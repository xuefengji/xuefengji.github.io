(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{532:function(t,v,e){"use strict";e.r(v);var s=e(1),n=Object(s.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"长度和单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#长度和单位"}},[t._v("#")]),t._v(" 长度和单位")]),t._v(" "),e("blockquote",[e("p",[t._v("CSS 单位 px，em，rem，vw，vh，%，vm 的区别")])]),t._v(" "),e("h2",{attrs:{id:"px"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px"}},[t._v("#")]),t._v(" px")]),t._v(" "),e("p",[t._v("px 就是 pixel 的缩写，意为像素。它是一张图片最小的一个点，一张位图就是千千万万的这样的点构成的，比如常常听到的电脑像素是 1024x768，表示的是水平方向是 1024 个像素点，垂直方向是 768 个像素点。")]),t._v(" "),e("p",[t._v("在网页设计中，px 是最常用的基本单位，它是相对于显示器屏幕分辨率而言的。")]),t._v(" "),e("h2",{attrs:{id:"em"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#em"}},[t._v("#")]),t._v(" em")]),t._v(" "),e("p",[t._v("em 是相对长度单位。参考物是父元素的 font-size，具有继承的特点。如当前父元素的字体尺寸未设置，则相对于浏览器的默认字体尺寸。")]),t._v(" "),e("p",[t._v("如果自身定义了 font-size 按自身来计算（浏览器默认字体是 16px），整个页面内 1em 不是一个固定的值。")]),t._v(" "),e("p",[e("strong",[t._v("特点")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("em 的值并不是固定的。")]),t._v(" "),e("li",[t._v("em 会继承父级元素的字体大小。")])]),t._v(" "),e("h2",{attrs:{id:"rem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rem"}},[t._v("#")]),t._v(" rem")]),t._v(" "),e("h3",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("rem 是 CSS3 新增的一个相对单位，rem 是相对于根元素 html 的字体大小（font-size）来计算的长度单位。")]),t._v(" "),e("p",[t._v("如果你没有设置 html 的字体大小，就会以浏览器默认字体大小（16px）为基准，即 1rem = 16px。但如果此时将 rem 与 px 进行换算很麻烦，比如 0.75rem = 12px。")]),t._v(" "),e("p",[e("strong",[t._v("为了更方便的进行换算")]),t._v("（比如1：10），在做"),e("strong",[t._v("移动端")]),t._v("页面时，业内流行用 62.5% 来初始化（16px * 62.5% = 10px）。这么做的好处是令 1rem = 10px（同理 1.2rem = 12px，1.4rem = 14px），这样响应式的时候就可以直接改变 font-size 而无需计算其他各种样式中出现的尺寸了。")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* rem 的初始赋值：1rem = 10px */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 62.5%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.4rem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 1.4 × 10px = 14px */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[e("strong",[t._v("优点")]),t._v("：只需要设置根目录的大小就可以把整个页面成比例地调好。不会像 em 那样，依赖于父元素的字体大小，而造成混乱。")]),t._v(" "),e("p",[e("strong",[t._v("rem 兼容性")]),t._v("：除了 IE8 及更早版本外，所有浏览器均已支持 rem。")]),t._v(" "),e("p",[e("strong",[t._v("em 与 rem 的区别")]),t._v("：rem 是相对于根元素（html）的字体大小，而 em 是相对于其父元素的字体大小。")]),t._v(" "),e("p",[e("strong",[t._v("两者使用规则")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("如果这个属性根据它的 font-size 进行测量，则使用 em；")]),t._v(" "),e("li",[t._v("其他的一切事物属性均使用 rem。")])]),t._v(" "),e("h3",{attrs:{id:"_62-5-和-10px-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_62-5-和-10px-的区别"}},[t._v("#")]),t._v(" 62.5% 和 10px 的区别")]),t._v(" "),e("p",[t._v("在给 html 设置默认字体大小时（rem 的初始赋值），选择 62.5% 而非 10px 的原因，主要是出于兼容性和未来发展趋势的综合考虑。")]),t._v(" "),e("p",[t._v("桌面浏览器默认页面字体大小是 16px，这种情况下设置成具体像素大小或者对应的百分比，看起来的效果是一样的；")]),t._v(" "),e("p",[t._v("但是其他类型的设备的默认字体大小不一定是 16px，特别是高分辨率的设备，16px 大小的字体在它们上面看起来会非常小，所以不能在 html 上设置具体像素值，设置成百分比，可以按照设备的基准字体大小给编写的网页设置好最适合用户浏览的字体大小。")]),t._v(" "),e("h3",{attrs:{id:"chrome-浏览器-12px-的坑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chrome-浏览器-12px-的坑"}},[t._v("#")]),t._v(" Chrome 浏览器 12px 的坑")]),t._v(" "),e("p",[t._v("我们开发常用的 Chrome 浏览器，支持的最小字体大小是 12px，此时使用 62.5% 会令 Chrome 和其他浏览器的页面效果不一样。这也是为什么上面说，在做"),e("strong",[t._v("移动端")]),t._v("页面时用 62.5% 来初始化。")]),t._v(" "),e("p",[t._v("解决办法：")]),t._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* rem 的初始赋值：1rem = 100px */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 625%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("1rem = 100px，以此为单位进行换算，可以避免以上问题的出现。")]),t._v(" "),e("h2",{attrs:{id:"vw、vh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vw、vh"}},[t._v("#")]),t._v(" vw、vh")]),t._v(" "),e("h3",{attrs:{id:"简介-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介-2"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("vw、vh、vmax、vmin 这四个都是 CSS3 中的新单位，是一种视窗单位，也是相对单位，它们的大小都是由视窗大小来决定的，单位 1，代表类似于 1% 。具体描述如下：")]),t._v(" "),e("ul",[e("li",[t._v("vw：视窗宽度的百分比（1vw 代表视窗宽度的 1%）")]),t._v(" "),e("li",[t._v("vh：视窗高度的百分比（1vh 代表视窗高度的 1%）")]),t._v(" "),e("li",[t._v("vmin/vm：取当前 vw 和 vh 中较小的那一个值")]),t._v(" "),e("li",[t._v("vmax：取当前 vw 和 vh 中较大的那一个值")])]),t._v(" "),e("p",[t._v("视窗，指的是浏览器可视区域的宽高（也就是不包括工具栏和按钮的内容区域），可以通过 window.innerWidth 和 window.innerHeight 获得。1vw 就是 1% 的浏览器的宽度，100vw 就是整个视窗的宽度。")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"350",height:"275",viewBox:"0 0 350 275"}},[e("image",{attrs:{id:"wenyuan_vw-vh","data-name":"wenyuan_vw-vh",width:"350",height:"275","xlink:href":"data:img/png;base64,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"}})]),t._v(" "),e("p",{staticStyle:{"text-align":"center",color:"#888"}},[t._v("（浏览器可视区域的宽高）")])]),t._v(" "),e("h3",{attrs:{id:"vw、vh-与-百分比的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vw、vh-与-百分比的区别"}},[t._v("#")]),t._v(" vw、vh 与 % 百分比的区别")]),t._v(" "),e("ul",[e("li",[t._v("% 是相对于父元素的大小设定的比率，vw、vh 是视窗大小决定的。")]),t._v(" "),e("li",[t._v("vw、vh 优势在于能够直接获取高度，而用 % 在没有设置 body 高度的情况下，是无法正确获得可视区域的高度的，所以这是挺不错的优势。")])]),t._v(" "),e("h3",{attrs:{id:"vmin、vmax-用处"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vmin、vmax-用处"}},[t._v("#")]),t._v(" vmin、vmax 用处")]),t._v(" "),e("p",[t._v("做移动页面开发时，如果使用 vw、wh 设置字体大小（比如 5vw），在竖屏和横屏状态下显示的字体大小是不一样的。\n由于 vmin 和 vmax 是当前较小的 vw 和 vh 和当前较大的 vw 和 vh。这里就可以用到 vmin 和 vmax。使得文字大小在横竖屏下保持一致。")]),t._v(" "),e("h2",{attrs:{id:"百分比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#百分比"}},[t._v("#")]),t._v(" 百分比 %")]),t._v(" "),e("p",[t._v("一般来说就是相对于父元素。")]),t._v(" "),e("ul",[e("li",[t._v("对于普通定位元素就是我们理解的父元素；")]),t._v(" "),e("li",[t._v("对于 "),e("code",[t._v("position: absolute;")]),t._v(" 的元素是相对于已定位的父元素；")]),t._v(" "),e("li",[t._v("对于 "),e("code",[t._v("position: fixed;")]),t._v(" 的元素是相对于 ViewPort（可视窗口）。")])]),t._v(" "),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("假如使用 em 来设置文字大小要注意什么？")]),e("br"),t._v("\n注意父元素的字体大小，因为 em 是根据父元素的大小来设置的。\n比如同样是 1.5em，要是父元素是 20，那 1.5em 就是 30px；要是父元素是 30px，1.5em 就是 45px（特别是在多重 div 嵌套里面更要注意）")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("pt、pc、ch 一般用在什么场景？")]),e("br"),t._v("\n这些我们网页设计基本上用不到，在排版上会有用处。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("如果父元素没有指定高度，那么子元素的百分比的高度是多少？")]),e("br"),t._v("\n会按照子元素的实际高度，设置百分比则没有效果。")])])]),t._v(" "),e("p",[t._v("（完）")])])}),[],!1,null,null,null);v.default=n.exports}}]);