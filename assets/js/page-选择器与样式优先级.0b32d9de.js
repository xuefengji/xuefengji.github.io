(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{539:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"选择器与样式优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器与样式优先级"}},[t._v("#")]),t._v(" 选择器与样式优先级")]),t._v(" "),a("h2",{attrs:{id:"选择器写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器写法"}},[t._v("#")]),t._v(" 选择器写法")]),t._v(" "),a("h3",{attrs:{id:"一般选择符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般选择符"}},[t._v("#")]),t._v(" 一般选择符")]),t._v(" "),a("ul",[a("li",[t._v("类型选择符（通过元素名指定）")]),t._v(" "),a("li",[t._v("ID 选择符（由井号 "),a("code",[t._v("#")]),t._v(" 开头）")]),t._v(" "),a("li",[t._v("类选择符（由句点 "),a("code",[t._v(".")]),t._v(" 开头）")])]),t._v(" "),a("p",[t._v("可以将类型选择符和类选择符结合使用，以指定特定的 HTML 元素下特定 class 的样式。")]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p.date-postd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"组合选择符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合选择符"}},[t._v("#")]),t._v(" 组合选择符")]),t._v(" "),a("ul",[a("li",[t._v("后代选择符（以空格分隔）")]),t._v(" "),a("li",[t._v("子选择符（以大于号分隔）")]),t._v(" "),a("li",[t._v("相邻同辈选择符（以加号分隔）")]),t._v(" "),a("li",[t._v("一般同辈选择符（以波浪号分隔）")])]),t._v(" "),a("h4",{attrs:{id:"后代选择符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后代选择符"}},[t._v("#")]),t._v(" 后代选择符")]),t._v(" "),a("p",[t._v("后代选择符的写法是在两个选择符之间添加空格，用于选取某个或某组元素的所有后代元素。")]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 只有作为块引用后代的段落元素会被选中，从而缩进，其他段落都不会缩进 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("blockquote p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h4",{attrs:{id:"子选择符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子选择符"}},[t._v("#")]),t._v(" 子选择符")]),t._v(" "),a("p",[t._v("子选择符的写法是在两个选择符之间添加大于号，与后代选择符不同，它只选择一个元素的直接后代，也就是子元素。")]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 选择了 div 元素中所有直接子元素 p */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div > p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h4",{attrs:{id:"相邻同辈选择符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相邻同辈选择符"}},[t._v("#")]),t._v(" 相邻同辈选择符")]),t._v(" "),a("p",[t._v("相邻同辈选择符的写法是在两个选择符之间使用加号，它可以选择"),a("strong",[t._v("紧接在")]),t._v("某个元素后面，并与该元素拥有共同父元素的元素。")]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 选择了 div 元素后的第一个 p 元素 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div + p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("这样选择 div  元素后的第一个段落是可行的，但更简单、更容易维护的方式，还是为这一段增加一个类名。")]),t._v(" "),a("h4",{attrs:{id:"一般同辈选择符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般同辈选择符"}},[t._v("#")]),t._v(" 一般同辈选择符")]),t._v(" "),a("p",[t._v("一般同辈选择符的写法是在两个选择符之间使用波浪号，它可以选择"),a("strong",[t._v("所有")]),t._v("指定元素之后的相邻兄弟元素。")]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 选择了 div 元素后的所有 p 元素 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div ~ p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("注：相邻同辈选择符和一般同辈选择符都不会选择前面的同辈元素，这是因为浏览器会按照元素在页面中出现的先后次序给它们应用样式。")]),t._v(" "),a("h3",{attrs:{id:"通用选择符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用选择符"}},[t._v("#")]),t._v(" 通用选择符")]),t._v(" "),a("p",[t._v("通用选择符可以匹配任何元素，使用星号表示。")]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("但这样写可能带来很多意想不到的后果，特别是会影响 button、select 等表单元素。如果想重设样式，最好还是像下面这样明确指定元素：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1, h2, h3, h4, h5, h6,\nul, ol, li, dl, p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"属性选择符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性选择符"}},[t._v("#")]),t._v(" 属性选择符")]),t._v(" "),a("p",[t._v("属性选择符基于元素是否有某个属性或者属性是否有某个值来选择元素。")]),t._v(" "),a("h4",{attrs:{id:"根据是否有某个属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据是否有某个属性"}},[t._v("#")]),t._v(" 根据是否有某个属性")]),t._v(" "),a("p",[t._v("实例："),a("br"),t._v("\n当鼠标指针悬停在某个带有 "),a("code",[t._v("title")]),t._v(" 属性的元素上时，多数浏览器都会显示一个提示条。利用这种行为，可以借助 "),a("code",[t._v("<abbr>")]),t._v(" 元素对某些缩写词给出详尽的解释：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I'm reading a book called you don't know "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("abbr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("JavaScript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("js"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("abbr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("可是，如果不把鼠标放在这个元素上，谁也不知道它还会显示缩写词的解释。为此，可以使用属性选择符给带有 "),a("code",[t._v("title")]),t._v(" 属性的 "),a("code",[t._v("abbr")]),t._v(" 元素添加不同的样式，比如在缩写词下面加一条点划线，然后把悬停状态的鼠标指针改成问好。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("abbr[title]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px dotted #999"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("abbr[title]:hover")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("cursor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" help"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h4",{attrs:{id:"根据属性是否有某个值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据属性是否有某个值"}},[t._v("#")]),t._v(" 根据属性是否有某个值")]),t._v(" "),a("p",[t._v("除了可以根据是否存在某个属性来选择元素，还可以根据特定的属性值来应用样式。")]),t._v(" "),a("p",[t._v("实例："),a("br"),t._v("\n下面这个例子可以用来修正一个问题，即鼠标悬停在提交按钮上时，不同浏览器显示的光标不一致。有了这条规则，所有 "),a("code",[t._v("type")]),t._v(" 属性值为 "),a("code",[t._v("submit")]),t._v(" 的 "),a("code",[t._v("input")]),t._v(" 元素在鼠标指针悬停时，都会显示一个手状光标。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v('input[type="submit"]')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("cursor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("有时候我们关心的是属性值是否匹配某个模式，而非某个特定值。这时候，通过给属性选择符中的等号前面加上特殊字符，就可以表达出想要匹配的值的形式了。")]),t._v(" "),a("p",[t._v("在属性选择符中常用的特殊字符如下表所示：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("选择器")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('a[href^="http:"')]),t._v("]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("要匹配以某些字符开头的属性值，在等号前面加上插入符（"),a("code",[t._v("^")]),t._v("）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('img[src$=".jpg"')]),t._v("]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("要匹配以某些字符结尾的属性值，在等号前面加上美元符号（"),a("code",[t._v("$")]),t._v("）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('a[href*="/about/"]')])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("要匹配包含某些字符的属性值，在等号前面加上星号（"),a("code",[t._v("*")]),t._v("）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("a[rel~=next]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("要匹配以空格分隔的字符串中属性值（比如 "),a("code",[t._v("rel")]),t._v(" 属性的值），在等号前面加上波浪号（"),a("code",[t._v("~")]),t._v("）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("a[lang|=en]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("要匹配开头是指定值或者指定值后连着一个短划线的情况，比如 "),a("code",[t._v("en")]),t._v(" 和 "),a("code",[t._v("en-us")]),t._v("，在等号前面加上竖线（"),a("code",[t._v("|")]),t._v("）。这种方式不常用。")])])])]),t._v(" "),a("p",[t._v("更多："),a("a",{attrs:{href:"https://www.w3school.com.cn/cssref/css_selectors.asp",title:"CSS 选择器参考手册",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 选择器参考手册"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"样式优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式优先级"}},[t._v("#")]),t._v(" 样式优先级")]),t._v(" "),a("p",[t._v("当声明冲突时，CSS 会根据三种条件来决定样式优先级：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("样式表的来源")]),t._v("：")]),t._v(" "),a("p",[t._v("行内样式 > 嵌入样式 > 外链样式")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("选择器优先级")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("如果选择器的 ID 数量更多，则它会胜出（即它更明确）。")]),t._v(" "),a("li",[t._v("如果 ID 数量一致，那么拥有最多类的选择器胜出。")]),t._v(" "),a("li",[t._v("如果以上两次比较都一致，那么拥有最多标签名的选择器胜出。")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("源码顺序")]),t._v("：")]),t._v(" "),a("p",[t._v("如果两个声明的来源和优先级相同，那么后出现的样式（在样式表中出现较晚，或者位于页面较晚引入的样式表中）会覆盖先出现的样式。"),a("br"),t._v("\n例如："),a("code",[t._v("link（链接）")]),t._v("、"),a("code",[t._v("visited（访问）")]),t._v("、"),a("code",[t._v("hover（悬停）")]),t._v("、"),a("code",[t._v("active（激活）")]),t._v("，就得严格遵守这个顺序，否则会带来意想不到的结果。")])])]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("svg",{attrs:{id:"SvgjsSvg1006",width:"815.0000305175781",height:"253",xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs"}},[a("defs",{attrs:{id:"SvgjsDefs1007"}},[a("marker",{attrs:{id:"SvgjsMarker1074",markerWidth:"16",markerHeight:"12",refX:"16",refY:"6",viewBox:"0 0 16 12",orient:"auto",markerUnits:"userSpaceOnUse","stroke-dasharray":"0,0"}},[a("path",{attrs:{id:"SvgjsPath1075",d:"M0,2 L14,6 L0,11 L0,2",fill:"#323232",stroke:"#323232","stroke-width":"2"}})]),a("marker",{attrs:{id:"SvgjsMarker1078",markerWidth:"16",markerHeight:"12",refX:"16",refY:"6",viewBox:"0 0 16 12",orient:"auto",markerUnits:"userSpaceOnUse","stroke-dasharray":"0,0"}},[a("path",{attrs:{id:"SvgjsPath1079",d:"M0,2 L14,6 L0,11 L0,2",fill:"#323232",stroke:"#323232","stroke-width":"2"}})]),a("marker",{attrs:{id:"SvgjsMarker1082",markerWidth:"16",markerHeight:"12",refX:"16",refY:"6",viewBox:"0 0 16 12",orient:"auto",markerUnits:"userSpaceOnUse","stroke-dasharray":"0,0"}},[a("path",{attrs:{id:"SvgjsPath1083",d:"M0,2 L14,6 L0,11 L0,2",fill:"#323232",stroke:"#323232","stroke-width":"2"}})]),a("marker",{attrs:{id:"SvgjsMarker1086",markerWidth:"16",markerHeight:"12",refX:"16",refY:"6",viewBox:"0 0 16 12",orient:"auto",markerUnits:"userSpaceOnUse","stroke-dasharray":"0,0"}},[a("path",{attrs:{id:"SvgjsPath1087",d:"M0,2 L14,6 L0,11 L0,2",fill:"#323232",stroke:"#323232","stroke-width":"2"}})]),a("marker",{attrs:{id:"SvgjsMarker1090",markerWidth:"16",markerHeight:"12",refX:"16",refY:"6",viewBox:"0 0 16 12",orient:"auto",markerUnits:"userSpaceOnUse","stroke-dasharray":"0,0"}},[a("path",{attrs:{id:"SvgjsPath1091",d:"M0,2 L14,6 L0,11 L0,2",fill:"#323232",stroke:"#323232","stroke-width":"2"}})]),a("marker",{attrs:{id:"SvgjsMarker1094",markerWidth:"16",markerHeight:"12",refX:"16",refY:"6",viewBox:"0 0 16 12",orient:"auto",markerUnits:"userSpaceOnUse","stroke-dasharray":"0,0"}},[a("path",{attrs:{id:"SvgjsPath1095",d:"M0,2 L14,6 L0,11 L0,2",fill:"#323232",stroke:"#323232","stroke-width":"2"}})]),a("marker",{attrs:{id:"SvgjsMarker1098",markerWidth:"16",markerHeight:"12",refX:"16",refY:"6",viewBox:"0 0 16 12",orient:"auto",markerUnits:"userSpaceOnUse","stroke-dasharray":"0,0"}},[a("path",{attrs:{id:"SvgjsPath1099",d:"M0,2 L14,6 L0,11 L0,2",fill:"#323232",stroke:"#323232","stroke-width":"2"}})])]),a("g",{attrs:{id:"SvgjsG1008",transform:"translate(25.000015258789062,52.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1009",d:"M 16.666666666666668 0L 83.33333333333333 0C 105.55555555555556 0 105.55555555555556 50 83.33333333333333 50L 16.666666666666668 50C -5.555555555555556 50 -5.555555555555556 0 16.666666666666668 0Z",stroke:"rgba(50,50,50,1)","stroke-width":"2","fill-opacity":"1",fill:"#ffffff"}}),a("g",{attrs:{id:"SvgjsG1010"}},[a("text",{attrs:{id:"SvgjsText1011","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"80px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"15.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1012",dy:"16",x:"50"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1013"}},[t._v("冲突的声明")])])])])]),a("g",{attrs:{id:"SvgjsG1014",transform:"translate(168.00001525878906,25.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1015",d:"M 0 52L 61 0L 122 52L 61 104L 0 52Z",stroke:"rgba(50,50,50,1)","stroke-width":"2","fill-opacity":"1",fill:"#ffffff"}}),a("g",{attrs:{id:"SvgjsG1016"}},[a("text",{attrs:{id:"SvgjsText1017","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"102px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"34.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1018",dy:"16",x:"61"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1019"}},[t._v("不同的来源")])]),a("tspan",{attrs:{id:"SvgjsTspan1020",dy:"16",x:"61"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1021"}},[t._v("或者重要性")])])])])]),a("g",{attrs:{id:"SvgjsG1022",transform:"translate(332.00001525878906,25.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1023",d:"M 0 52L 61 0L 122 52L 61 104L 0 52Z",stroke:"rgba(50,50,50,1)","stroke-width":"2","fill-opacity":"1",fill:"#ffffff"}}),a("g",{attrs:{id:"SvgjsG1024"}},[a("text",{attrs:{id:"SvgjsText1025","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"102px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"26.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1026",dy:"16",x:"61"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1027"}},[t._v("是不是")])]),a("tspan",{attrs:{id:"SvgjsTspan1028",dy:"16",x:"61"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1029"}},[t._v("内联")]),a("tspan",{staticStyle:{"font-size":"inherit"},attrs:{id:"SvgjsTspan1030"}},[t._v("样式")])]),a("tspan",{attrs:{id:"SvgjsTspan1031",dy:"16",x:"61"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1032"}},[t._v("（作用域）")])])])])]),a("g",{attrs:{id:"SvgjsG1033",transform:"translate(502.00001525878906,25.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1034",d:"M 0 52L 61 0L 122 52L 61 104L 0 52Z",stroke:"rgba(50,50,50,1)","stroke-width":"2","fill-opacity":"1",fill:"#ffffff"}}),a("g",{attrs:{id:"SvgjsG1035"}},[a("text",{attrs:{id:"SvgjsText1036","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"102px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"34.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1037",dy:"16",x:"61"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1038"}},[t._v("选择器是否有")])]),a("tspan",{attrs:{id:"SvgjsTspan1039",dy:"16",x:"61"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1040"}},[t._v("不同的优先级")])])])])]),a("g",{attrs:{id:"SvgjsG1041",transform:"translate(670.0000152587891,52.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1042",d:"M 16.666666666666668 0L 103.33333333333333 0C 125.55555555555556 0 125.55555555555556 50 103.33333333333333 50L 16.666666666666668 50C -5.555555555555556 50 -5.555555555555556 0 16.666666666666668 0Z",stroke:"rgba(50,50,50,1)","stroke-width":"2","fill-opacity":"1",fill:"#ffffff"}}),a("g",{attrs:{id:"SvgjsG1043"}},[a("text",{attrs:{id:"SvgjsText1044","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"100px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"7.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1045",dy:"16",x:"60"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1046"}},[t._v("使用源码顺序里")])]),a("tspan",{attrs:{id:"SvgjsTspan1047",dy:"16",x:"60"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1048"}},[t._v("较晚出现的声明")])])])])]),a("g",{attrs:{id:"SvgjsG1049",transform:"translate(172.00001525878906,176.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1050",d:"M 17.333333333333332 0L 96.66666666666667 0C 119.77777777777777 0 119.77777777777777 52 96.66666666666667 52L 17.333333333333332 52C -5.777777777777778 52 -5.777777777777778 0 17.333333333333332 0Z",stroke:"rgba(50,50,50,1)","stroke-width":"2","fill-opacity":"1",fill:"#ffffff"}}),a("g",{attrs:{id:"SvgjsG1051"}},[a("text",{attrs:{id:"SvgjsText1052","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"94px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"8.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1053",dy:"16",x:"57"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1054"}},[t._v("使用更高优先级")])]),a("tspan",{attrs:{id:"SvgjsTspan1055",dy:"16",x:"57"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1056"}},[t._v("的来源里的声明")])])])])]),a("g",{attrs:{id:"SvgjsG1057",transform:"translate(336.00001525878906,176.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1058",d:"M 17.333333333333332 0L 96.66666666666667 0C 119.77777777777777 0 119.77777777777777 52 96.66666666666667 52L 17.333333333333332 52C -5.777777777777778 52 -5.777777777777778 0 17.333333333333332 0Z",stroke:"rgba(50,50,50,1)","stroke-width":"2","fill-opacity":"1",fill:"#ffffff"}}),a("g",{attrs:{id:"SvgjsG1059"}},[a("text",{attrs:{id:"SvgjsText1060","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"94px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"16.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1061",dy:"16",x:"57"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1062"}},[t._v("使用内联声明")])])])])]),a("g",{attrs:{id:"SvgjsG1063",transform:"translate(506.00001525878906,176.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1064",d:"M 17.333333333333332 0L 96.66666666666667 0C 119.77777777777777 0 119.77777777777777 52 96.66666666666667 52L 17.333333333333332 52C -5.777777777777778 52 -5.777777777777778 0 17.333333333333332 0Z",stroke:"rgba(50,50,50,1)","stroke-width":"2","fill-opacity":"1",fill:"#ffffff"}}),a("g",{attrs:{id:"SvgjsG1065"}},[a("text",{attrs:{id:"SvgjsText1066","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"94px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"8.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1067",dy:"16",x:"57"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1068"}},[t._v("使用更高")]),a("tspan",{staticStyle:{"font-size":"inherit"},attrs:{id:"SvgjsTspan1069"}},[t._v("优")])]),a("tspan",{attrs:{id:"SvgjsTspan1070",dy:"16",x:"57"}},[a("tspan",{staticStyle:{"font-size":"inherit"},attrs:{id:"SvgjsTspan1071"}},[t._v("先级的声明")])])])])]),a("g",{attrs:{id:"SvgjsG1072"}},[a("path",{attrs:{id:"SvgjsPath1073",d:"M125.00001525878906 77.00000762939453L146.50001525878906 77.00000762939453L146.50001525878906 77.00000762939453L168.00001525878906 77.00000762939453",stroke:"#323232","stroke-width":"2",fill:"none","marker-end":"url(#SvgjsMarker1074)"}})]),a("g",{attrs:{id:"SvgjsG1076"}},[a("path",{attrs:{id:"SvgjsPath1077",d:"M290.00001525878906 77.00000762939453L311.00001525878906 77.00000762939453L311.00001525878906 77.00000762939453L332.00001525878906 77.00000762939453",stroke:"#323232","stroke-width":"2",fill:"none","marker-end":"url(#SvgjsMarker1078)"}})]),a("g",{attrs:{id:"SvgjsG1080"}},[a("path",{attrs:{id:"SvgjsPath1081",d:"M454.00001525878906 77.00000762939453L478.00001525878906 77.00000762939453L478.00001525878906 77.00000762939453L502.00001525878906 77.00000762939453",stroke:"#323232","stroke-width":"2",fill:"none","marker-end":"url(#SvgjsMarker1082)"}})]),a("g",{attrs:{id:"SvgjsG1084"}},[a("path",{attrs:{id:"SvgjsPath1085",d:"M624.0000152587891 77.00000762939453L647.0000152587891 77.00000762939453L647.0000152587891 77.00000762939453L670.0000152587891 77.00000762939453",stroke:"#323232","stroke-width":"2",fill:"none","marker-end":"url(#SvgjsMarker1086)"}})]),a("g",{attrs:{id:"SvgjsG1088"}},[a("path",{attrs:{id:"SvgjsPath1089",d:"M229.00001525878906 129.00000762939453L229.00001525878906 152.50000762939453L229.00001525878906 152.50000762939453L229.00001525878906 176.00000762939453",stroke:"#323232","stroke-width":"2",fill:"none","marker-end":"url(#SvgjsMarker1090)"}})]),a("g",{attrs:{id:"SvgjsG1092"}},[a("path",{attrs:{id:"SvgjsPath1093",d:"M393.00001525878906 129.00000762939453L393.00001525878906 152.50000762939453L393.00001525878906 152.50000762939453L393.00001525878906 176.00000762939453",stroke:"#323232","stroke-width":"2",fill:"none","marker-end":"url(#SvgjsMarker1094)"}})]),a("g",{attrs:{id:"SvgjsG1096"}},[a("path",{attrs:{id:"SvgjsPath1097",d:"M563.0000152587891 129.00000762939453L563.0000152587891 152.50000762939453L563.0000152587891 152.50000762939453L563.0000152587891 176.00000762939453",stroke:"#323232","stroke-width":"2",fill:"none","marker-end":"url(#SvgjsMarker1098)"}})]),a("g",{attrs:{id:"SvgjsG1100",transform:"translate(247.00001525878906,44.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1101",d:"M 0 0L 120 0L 120 40L 0 40Z",stroke:"none",fill:"none"}}),a("g",{attrs:{id:"SvgjsG1102"}},[a("text",{attrs:{id:"SvgjsText1103","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"120px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"10.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1104",dy:"16",x:"60"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1105"}},[t._v("否")])])])])]),a("g",{attrs:{id:"SvgjsG1106",transform:"translate(412.00001525878906,44.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1107",d:"M 0 0L 120 0L 120 40L 0 40Z",stroke:"none",fill:"none"}}),a("g",{attrs:{id:"SvgjsG1108"}},[a("text",{attrs:{id:"SvgjsText1109","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"120px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"10.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1110",dy:"16",x:"60"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1111"}},[t._v("否")])])])])]),a("g",{attrs:{id:"SvgjsG1112",transform:"translate(579.0000152587891,44.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1113",d:"M 0 0L 120 0L 120 40L 0 40Z",stroke:"none",fill:"none"}}),a("g",{attrs:{id:"SvgjsG1114"}},[a("text",{attrs:{id:"SvgjsText1115","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"120px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"10.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1116",dy:"16",x:"60"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1117"}},[t._v("否")])])])])]),a("g",{attrs:{id:"SvgjsG1118",transform:"translate(183.00001525878906,129.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1119",d:"M 0 0L 120 0L 120 40L 0 40Z",stroke:"none",fill:"none"}}),a("g",{attrs:{id:"SvgjsG1120"}},[a("text",{attrs:{id:"SvgjsText1121","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"120px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"10.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1122",dy:"16",x:"60"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1123"}},[t._v("是")])])])])]),a("g",{attrs:{id:"SvgjsG1124",transform:"translate(349.00001525878906,129.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1125",d:"M 0 0L 120 0L 120 40L 0 40Z",stroke:"none",fill:"none"}}),a("g",{attrs:{id:"SvgjsG1126"}},[a("text",{attrs:{id:"SvgjsText1127","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"120px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"10.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1128",dy:"16",x:"60"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1129"}},[t._v("是")])])])])]),a("g",{attrs:{id:"SvgjsG1130",transform:"translate(516.0000152587891,129.00000762939453)"}},[a("path",{attrs:{id:"SvgjsPath1131",d:"M 0 0L 120 0L 120 40L 0 40Z",stroke:"none",fill:"none"}}),a("g",{attrs:{id:"SvgjsG1132"}},[a("text",{attrs:{id:"SvgjsText1133","font-family":"微软雅黑","text-anchor":"middle","font-size":"13px",width:"120px",fill:"#323232","font-weight":"400",align:"middle",anchor:"middle",family:"微软雅黑",size:"13px",weight:"400","font-style":"",opacity:"1",y:"10.05",transform:"rotate(0)"}},[a("tspan",{attrs:{id:"SvgjsTspan1134",dy:"16",x:"60"}},[a("tspan",{staticStyle:{},attrs:{id:"SvgjsTspan1135"}},[t._v("是")])])])])])]),t._v(" "),a("p",{staticStyle:{"text-align":"center",color:"#888"}},[t._v("（层叠的规则流程图，展示了声明的优先顺序）")])]),t._v(" "),a("h2",{attrs:{id:"经验法则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#经验法则"}},[t._v("#")]),t._v(" 经验法则")]),t._v(" "),a("p",[t._v("在使用选择器时有一些通用的经验法则，如果遵守这些法则会很有用（特殊情况除外）。")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("最好让优先级尽可能低")]),a("br"),t._v("\n这样当需要覆盖一些样式时，才能有选择空间。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("在选择器中不要使用 ID")]),a("br"),t._v("\n就算只用一个 ID 时也会大幅提升优先级，当需要覆盖这个选择器时，通常找不到另一个更有意义的 ID，于是就会复制原来的选择器，然后加上另一个类。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("不要使用 !important")]),a("br"),t._v("\n它比 ID 更难覆盖，一旦引入一个 !important，想要覆盖原先的声明，就会带来更多的 !important，最终会让一切回到起点。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("当创建一个用于分发的模块（例如 NPM 包）时，尽量不要使用行内样式")]),a("br"),t._v("\n否则开发人员要么全盘接受包里的样式，要么给每个想修改的属性加上 !important。"),a("br"),t._v("\n正确的做法是在包里包含一个样式表，这样用户就可以在使用这份样式表的同时，在不引入优先级竞赛的前提下，自定义其中的样式。")])])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[t._v("《精通CSS 高级Web标准解决方案（第3版）》")])]),t._v(" "),a("p",[t._v("（完）")])])}),[],!1,null,null,null);s.default=r.exports}}]);