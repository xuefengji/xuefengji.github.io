(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1225:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"pytest-mark-parametrize-参数化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pytest-mark-parametrize-参数化"}},[t._v("#")]),t._v(" @pytest.mark.parametrize 参数化")]),t._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("Pytest 可以在以下级别上实现测试参数化：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("pytest.fixture()")]),t._v(" 允许 fixture 有参数化功能（后面讲解）")]),t._v(" "),n("li",[n("code",[t._v("@pytest.mark.parametrize")]),t._v(" 允许在测试函数或类中定义多组参数和 fixtures")]),t._v(" "),n("li",[n("code",[t._v("pytest_generate_tests")]),t._v(" 允许定义自定义参数化方案或扩展（拓展）")])]),t._v(" "),n("h2",{attrs:{id:"为什么要参数化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要参数化"}},[t._v("#")]),t._v(" 为什么要参数化")]),t._v(" "),n("p",[t._v("先来看个例子：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("   def test_1():\n       assert 3 + 5 == 9\n   \n   def test_2():\n       assert 2 + 4 == 6\n   \n   def test_3():\n       assert 6 + 9 == 15\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("三个用例都是断言 2 个数相加的值，重复写了 3 遍，代码是不是有点冗余")]),t._v(" "),n("p",[t._v("如何改善减少代码，又能执行上面 3 个用例涉及的场景？")]),t._v(" "),n("p",[t._v("这就可以使用参数化实现")]),t._v(" "),n("h2",{attrs:{id:"如何进行参数化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何进行参数化"}},[t._v("#")]),t._v(" 如何进行参数化")]),t._v(" "),n("p",[t._v("先来看下 parametrize 的源码：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parametrize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n       self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       argnames"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Union"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tuple"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       argvalues"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Iterable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Union"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ParameterSet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Sequence"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       indirect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Union"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Sequence"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       ids"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Optional"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n           Union"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Iterable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Optional"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Callable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Any"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Optional"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       scope"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Optional[_ScopeName]"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       _param_mark"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Optional"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Mark"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[n("strong",[t._v("argnames")]),t._v(" :")]),t._v(" "),n("ul",[n("li",[t._v("参数的名字")]),t._v(" "),n("li",[t._v('格式："arg1,arg2,arg3" 需要用逗号隔开')])]),t._v(" "),n("p",[n("strong",[t._v("argvalues")]),t._v(" :")]),t._v(" "),n("ul",[n("li",[t._v("参数值列表")]),t._v(" "),n("li",[t._v("单个参数时，值是列表，如：[1,2,3]")]),t._v(" "),n("li",[t._v("多个参数时，需要使用元组存放多个参数值，如：[(1,2),(2,3)]")])]),t._v(" "),n("p",[n("strong",[t._v("indirect")]),t._v(" :")]),t._v(" "),n("ul",[n("li",[t._v("默认 False，如果设置成True，则把传进来的参数当函数执行，而不是一个参数")]),t._v(" "),n("li",[t._v("与 fixture 传参时会用到，后面会讲到")])]),t._v(" "),n("p",[n("strong",[t._v("ids")]),t._v(" :")]),t._v(" "),n("ul",[n("li",[t._v("用例的 id ，表示每一个用例")]),t._v(" "),n("li",[t._v("格式：字符串列表")]),t._v(" "),n("li",[t._v("如果 id 为中文时，输出的可能是 unicode 编码，想要显示中文有 2 种方式：\n"),n("ul",[n("li",[t._v("conftest.py 文件中使用 pytest-collect-modifyitems 钩子函数，对输出的 item.name 和 item.nodeid 重新编码")])]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" pytest"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("collect"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("modifyitems"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unicode_escape"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_nodeid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unicode_escape"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("ul",[n("li",[t._v("pytest.ini 文件中设置")])]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pytest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    disable_test_id_escaping_and_forfeit_all_rights_tocommunity_support "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])])])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("参数化设置")]),t._v(" "),n("p",[t._v("参数名：用来定义参数的名称")]),t._v(" "),n("p",[t._v("参数值：通过数组定义参数值，每个元组都是一条测试用例的测试数据")]),t._v(" "),n("p",[t._v("ids 参数：默认为 None，用来重新定义测试用例名称")])]),t._v(" "),n("p",[t._v("了解了相关参数的作用，现在来改写上面例子中的测试用例：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('   @pytest.mark.parametrize("test_input,expected", [("3+5", 8), ("2+4", 6), ("6+9", 15)])\n   def test_eval(test_input, expected):\n       assert eval(test_input) == expected\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("测试结果：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(665),alt:"pytest"}})]),t._v(" "),n("p",[t._v("可以看到上面结果中执行了 3 次用例")]),t._v(" "),n("p",[t._v("除了上面函数，类和模块也可以使用参数化")]),t._v(" "),n("h3",{attrs:{id:"测试类使用参数化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试类使用参数化"}},[t._v("#")]),t._v(" 测试类使用参数化")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('   @pytest.mark.parametrize("n,expected", [(1, 2), (3, 4)])\n   class TestClass:\n       def test_simple_case(self, n, expected):\n           assert n + 1 == expected\n   \n       def test_weird_simple_case(self, n, expected):\n           assert (n * 1) + 1 == expected\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("测试结果：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(666),alt:"pytest"}})]),t._v(" "),n("p",[t._v("可以看出对类进行参数化后，类下的每个测试方法都执行了 2 遍用例")]),t._v(" "),n("h3",{attrs:{id:"模块使用参数化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块使用参数化"}},[t._v("#")]),t._v(" 模块使用参数化")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("全局参数化设置")]),t._v(" "),n("p",[t._v("如果要参数化模块下的所有用例，需要给全局变量 pytestmark 赋值")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('   # 模块全局参数化\n   pytestmark = pytest.mark.parametrize("n,expected", [(1, 2), (3, 4)])\n   \n   def test_simple_case(n, expected):\n       assert n + 1 == expected\n   \n   def test_weird_simple_case( n, expected):\n       assert (n * 1) + 1 == expected\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("测试结果：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(667),alt:"pytest"}})]),t._v(" "),n("p",[t._v("当前模块下的测试每个用例都执行了 2 遍")]),t._v(" "),n("h3",{attrs:{id:"pytest-mark-parametrize-叠加使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pytest-mark-parametrize-叠加使用"}},[t._v("#")]),t._v(" pytest.mark.parametrize 叠加使用")]),t._v(" "),n("p",[t._v("直接看个例子")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pytest\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mark"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parametrize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a,b,c'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mark"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parametrize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ids"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1叠加'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2叠加'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@pytest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mark"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parametrize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b,c'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ids"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3叠加'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4叠加'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("p",[t._v("执行结果：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("test_paramtrize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("test_1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("叠加"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("叠加"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),t._v("\nPASSED\ntest_paramtrize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("test_1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("叠加"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("叠加"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),t._v("\nPASSED\ntest_paramtrize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("test_1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("叠加"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("叠加"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\nPASSED\ntest_paramtrize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("test_1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("叠加"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("叠加"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\nPASSED\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),n("ul",[n("li",[t._v("叠加使用和不叠加使用同时存在时，优先叠加使用")]),t._v(" "),n("li",[t._v("叠加后，ids 也会叠加，显示的顺序是下面的叠加在上面的前面")]),t._v(" "),n("li",[t._v("参数是组合使用，上面的在前")])])]),t._v(" "),n("h3",{attrs:{id:"参数化实际应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参数化实际应用场景"}},[t._v("#")]),t._v(" 参数化实际应用场景：")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("例如：登录场景")]),t._v(" "),n("ul",[n("li",[t._v("需要测试账户名正确、密码错误等情况")]),t._v(" "),n("li",[t._v("设计的用例主要就是输入的数据和期望的结果不一样")]),t._v(" "),n("li",[t._v("使用参数化可以简化代码编写")])])]),t._v(" "),n("h2",{attrs:{id:"参考文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://docs.pytest.org/en/latest/how-to/parametrize.html?highlight=mark",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("（完）")])])}),[],!1,null,null,null);s.default=e.exports},665:function(t,s,a){t.exports=a.p+"assets/img/10.1bab4a35.png"},666:function(t,s,a){t.exports=a.p+"assets/img/11.a7b72b50.png"},667:function(t,s,a){t.exports=a.p+"assets/img/12.ba83c66d.png"}}]);