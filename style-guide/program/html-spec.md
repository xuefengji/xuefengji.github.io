# HTML 规范

## 属性顺序

HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。

* `class`
* `id`，`name`
* `data-*`
* `src`，`for`，`type`，`href`，`value`
* `title`，`alt`
* `role`，`aria-*`

class 用于标识高度可复用组件，因此应该排在首位。

id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。

## class 命名

* `class` 必须单词全字母小写，单词间以 `-` 分隔。
* `class` 必须代表相应模块或部件的内容或功能，不得以样式信息进行命名。
* 避免过度任意的简写。`.btn` 代表 `button`，但是 `.s` 不能表达任何意思。
* 基于最近的父 class 或基本（base） class 作为新 class 的前缀。

## id 命名

* 元素 `id` 必须保证页面唯一。
* `id` 建议单词全字母小写，单词间以 `-` 分隔。同项目必须保持风格一致。
*  `id`、`class` 命名，在避免冲突并描述清楚的前提下尽可能短。

## name 命名

* 同一页面，应避免使用相同的 `name` 与 `id`。
* `name` 一般与后端 model 中的字段名命名规则保持一致。
  * 例如 Java 使用小驼峰命名法（camelCase），Python使用下划线 `_` 连接两个小写单词。

解释：

IE 浏览器会混淆元素的 `id` 和 `name` 属性， `document.getElementById` 可能获得不期望的元素。所以在对元素的 `id` 与 `name` 属性的命名需要非常小心。

一个比较好的实践是，为 `id` 和 `name` 使用不同的命名法。

## 标签类型属性

不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含。

推荐：

```html
<link rel="stylesheet" href="" >
<script src=""></script>
```

不推荐：

```html
<link rel="stylesheet" type="text/css" href="" >
<script type="text/javascript" src="" ></script>
```

## 注释规范

#### 单行注释

一般用于简单的描述，如某些状态描述、属性描述等。

注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行。

推荐：

```html
<!-- Comment Text -->
<div>...</div>
```

#### 模块注释

一般用于描述模块的名称以及模块开始与结束的位置。

注释内容前后各一个空格字符，`<!-- S Comment Text -->` 表示模块开始，`<!-- E Comment Text -->` 表示模块结束，模块与模块之间相隔一行。

推荐：

```html
<!-- S Comment Text A -->	
<div class="mod-a">
    ...
</div>
<!-- E Comment Text A -->
	
<!-- S Comment Text B -->	
<div class="mod-b">
    ...
</div>
<!-- E Comment Text B -->
```

#### 嵌套模块注释

当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块改用 `<!-- /Comment Text -->`。

注释写在模块结尾标签底部，单独一行。

```html
<!-- S Comment Text A -->
<div class="mod-a">
		
    <div class="mod-b">
        ...
    </div>
    <!-- /mod-b -->
    	
    <div class="mod-c">
    	...
    </div>
    <!-- /mod-c -->
		
</div>
<!-- E Comment Text A -->
```
