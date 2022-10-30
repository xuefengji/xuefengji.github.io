(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{1148:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"条件查询语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件查询语法"}},[t._v("#")]),t._v(" 条件查询语法")]),t._v(" "),s("p",[t._v("主要用到 "),s("code",[t._v("WHERE")]),t._v(" 关键字，后面跟上搜索条件")]),t._v(" "),s("h2",{attrs:{id:"简单搜索条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单搜索条件"}},[t._v("#")]),t._v(" 简单搜索条件")]),t._v(" "),s("p",[t._v("把 "),s("code",[t._v("搜索条件")]),t._v(" 放在 "),s("code",[t._v("WHERE")]),t._v(" 子句中，搜索条件中可以使用如下几种比较操作符：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("操作符")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("=")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a = b")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("a 等于 b")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("<>")]),t._v(" 或者 "),s("code",[t._v("!=")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a <> b")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("a 不等于 b")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("<")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a < b")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("a 小于 b")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("<=")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a <= b")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("a 小于或等于 b")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(">")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a > b")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("a 大于 b")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v(">=")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a >= b")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("a 大于或等于 b")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("BETWEEN")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a BETWEEN b AND c")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("满足 b <= a <= c")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("NOT BETWEEN")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a NOT BETWEEN b AND c")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不满足 b <= a <= c")])])])]),t._v(" "),s("p",[t._v("比如想查询 "),s("code",[t._v("student_info")]),t._v(" 表中名字是 "),s("code",[t._v('"张星星"')]),t._v(" 的学生的一些信息，可以这么写：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id_number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" major "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" student_info "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张星星'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("想查询学号不在 "),s("code",[t._v("20220102")]),t._v(" ~ "),s("code",[t._v("20220104")]),t._v(" 这个区间内的所有学生信息，可以这么写：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id_number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" major "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" student_info "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("BETWEEN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20220102")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20220104")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"匹配列表中的元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配列表中的元素"}},[t._v("#")]),t._v(" 匹配列表中的元素")]),t._v(" "),s("p",[t._v("如果搜索条件中指定的匹配值并不是单个值，而是一个列表，只要匹配到列表中的某一项就算匹配成功，这种情况可以使用 "),s("code",[t._v("IN")]),t._v(" 操作符：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("操作符")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("IN")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a IN (b1, b2, ...)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("a 是 b1, b2, ... 中的某一个")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("NOT IN")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a NOT IN (b1, b2, ...)")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("a 不是 b1, b2, ... 中的任意一个")])])])]),t._v(" "),s("p",[t._v("比如想查询软件工程和飞行器设计专业的学生信息，可以这么写：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id_number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" major "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" student_info "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" major "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'软件工程'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'飞行器设计'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"匹配-null-值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配-null-值"}},[t._v("#")]),t._v(" 匹配 NULL 值")]),t._v(" "),s("p",[s("code",[t._v("NULL")]),t._v(" 代表没有值，在判断某一列是否为 "),s("code",[t._v("NULL")]),t._v(" 的时候不能单纯的使用 "),s("code",[t._v("=")]),t._v(" 操作符，而是需要专门判断值是否是 "),s("code",[t._v("NULL")]),t._v(" 的操作符：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("操作符")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("IS NULL")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a IS NULL")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("a 的值是 "),s("code",[t._v("NULL")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("IS NOT NULL")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a IS NOT NULL")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("a 的值不是 "),s("code",[t._v("NULL")])])])])]),t._v(" "),s("p",[t._v("比如想看一下 "),s("code",[t._v("student_info")]),t._v(" 表的 "),s("code",[t._v("name")]),t._v(" 列是 "),s("code",[t._v("NULL")]),t._v(" 的学生记录有哪些，可以这么写：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id_number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" major "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" student_info "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"多个搜索条件的查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多个搜索条件的查询"}},[t._v("#")]),t._v(" 多个搜索条件的查询")]),t._v(" "),s("p",[t._v("上边都是指定单个搜索条件的查询，也可以在一个查询语句中指定多个搜索条件")]),t._v(" "),s("h3",{attrs:{id:"and-操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#and-操作符"}},[t._v("#")]),t._v(" AND 操作符")]),t._v(" "),s("p",[t._v("用于查询出符合所有搜索条件的结果集，例如：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" student_score "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" subject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'高等数学'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" score "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"or-操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#or-操作符"}},[t._v("#")]),t._v(" OR 操作符")]),t._v(" "),s("p",[t._v("用于查询出只要符合任意给定搜索条件的结果集，例如：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" student_score "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" score "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" score "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"更复杂的搜索条件的组合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更复杂的搜索条件的组合"}},[t._v("#")]),t._v(" 更复杂的搜索条件的组合")]),t._v(" "),s("p",[t._v("当搜索条件中要结合多个 AND 和 OR 操作符时，"),s("strong",[t._v("AND 操作符的优先级高于 OR 操作符")])]),t._v(" "),s("p",[t._v("为了避免错误，此时最好使用小括号 "),s("code",[t._v("()")]),t._v(" 来显式的指定各个搜索条件的检测顺序，比如：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" student_score "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("score "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" score "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" subject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'高等数学'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("上面的语法如果不加小括号，那么查询出来的结果集和期望的（找出课程为 "),s("code",[t._v('"高等数学"')]),t._v("，并且成绩大于 "),s("code",[t._v("95")]),t._v(" 分或者小于 "),s("code",[t._v("55")]),t._v(" 分的记录）是有出入的")]),t._v(" "),s("h2",{attrs:{id:"通配符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通配符"}},[t._v("#")]),t._v(" 通配符")]),t._v(" "),s("p",[t._v("就是模糊查询的场景，使用下面这两个操作符来支持模糊查询：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("操作符")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("LIKE")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a LIKE b")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("a 匹配 b")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("NOT LIKE")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("a NOT LIKE b")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("a 不匹配 b")])])])]),t._v(" "),s("p",[t._v("然后需要用某个符号（称为通配符）来替代这些模糊的信息。MySQL 中支持下边这两个通配符：")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("%")]),t._v("：代表任意一个字符串")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id_number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" major "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" student_info "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("_")]),t._v("：代表任意一个字符（用于精确知道字符串长度的情况）")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id_number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" major "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" student_info "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_星_'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小贴士")]),t._v(" "),s("p",[s("code",[t._v("LIKE")]),t._v(" 或者 "),s("code",[t._v("NOT LIKE")]),t._v(" 操作符只用于"),s("strong",[t._v("字符串")]),t._v("匹配。另外，通配符不能代表 "),s("code",[t._v("NULL")]),t._v("，如果需要匹配 "),s("code",[t._v("NULL")]),t._v(" 的话，需要使用 "),s("code",[t._v("IS NULL")]),t._v(" 或者 "),s("code",[t._v("IS NOT NULL")])])]),t._v(" "),s("h2",{attrs:{id:"转义通配符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转义通配符"}},[t._v("#")]),t._v(" 转义通配符")]),t._v(" "),s("p",[t._v("如果待匹配的字符串中本身就包含普通字符 "),s("code",[t._v("'%'")]),t._v(" 或者 "),s("code",[t._v("'_'")]),t._v("，就需要在它们前边加一个反斜杠 "),s("code",[t._v("\\")]),t._v(" 来和通配符区分开，也就是说：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("'\\%'")]),t._v(" 代表普通字符 "),s("code",[t._v("'%'")])]),t._v(" "),s("li",[s("code",[t._v("'\\_'")]),t._v(" 代表普通字符 "),s("code",[t._v("'_'")])])]),t._v(" "),s("p",[t._v("例如查询名字叫 "),s("code",[t._v("张_")]),t._v(" 的学生：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id_number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" major "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" student_info "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张\\_'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("（完）")])])}),[],!1,null,null,null);a.default=n.exports}}]);