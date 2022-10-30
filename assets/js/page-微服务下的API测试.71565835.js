(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{1294:function(v,_,e){"use strict";e.r(_);var r=e(1),t=Object(r.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"微服务下的-api-测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务下的-api-测试"}},[v._v("#")]),v._v(" 微服务下的 API 测试")]),v._v(" "),r("h2",{attrs:{id:"微服务架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构"}},[v._v("#")]),v._v(" 微服务架构")]),v._v(" "),r("h3",{attrs:{id:"单体结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单体结构"}},[v._v("#")]),v._v(" 单体结构")]),v._v(" "),r("p",[r("strong",[v._v("概述")]),v._v("： 将所有的业务场景的表示层、业务逻辑层和数据访问层放在同一个工程中，最终经过编译、打包，并部署在服务器上")]),v._v(" "),r("p",[r("strong",[v._v("优点")]),v._v("： 发布简单、方便调试、架构复杂性低等")]),v._v(" "),r("p",[r("strong",[v._v("应用场景")]),v._v("：传统企业级应用软件")]),v._v(" "),r("p",[r("strong",[v._v("单体架构存在的问题")]),v._v(" :")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("灵活性差")])])]),v._v(" "),r("p",[v._v("无论是多小的修改，也要打包发布整个应用，每次编译打包都要花费很长时间")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("可扩展性差")])])]),v._v(" "),r("p",[v._v("高并发场景下，无法以模块为单位灵活扩展容量，不利于应用的横向扩展")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("稳定性差")])])]),v._v(" "),r("p",[v._v("缺乏容错机制， 应用中任何一个模块有问题时，都可能会造成应用整体的不可用")]),v._v(" "),r("ul",[r("li",[r("strong",[v._v("可维护性差")])])]),v._v(" "),r("p",[v._v("随着业务复杂性的提升，代码的复杂性也直线上升，业务规模比较庞大时，整体项目的可维护性会大打折扣")]),v._v(" "),r("h3",{attrs:{id:"微服务架构-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构-2"}},[v._v("#")]),v._v(" 微服务架构")]),v._v(" "),r("p",[r("strong",[v._v("产生原因")]),v._v("：随着互联网产品的普及，应用所承载的流量越来越庞大，单体架构的问题被逐渐暴露并不断放大")]),v._v(" "),r("p",[r("strong",[v._v("概述")]),v._v("：大型复杂软件系统不再由一个单体组成，而是由一系列相互独立的微服务组成 ， 开发和部署都没有依赖")]),v._v(" "),r("p",[r("strong",[v._v("特点")]),v._v("：")]),v._v(" "),r("ul",[r("li",[v._v("每个服务运行在其独立的进程中，开发采用的技术栈也是独立的")]),v._v(" "),r("li",[v._v("服务间采用轻量级通信机制进行沟通，通常是基于 HTTP 协议的 RESTful API")]),v._v(" "),r("li",[v._v("每个服务都围绕着具体的业务进行构建，并且能够被独立开发、独立部署、独立发布")]),v._v(" "),r("li",[v._v("对运维提出了非常高的要求，促进了 CI/CD 的发展与落地")])]),v._v(" "),r("p",[r("strong",[v._v("存在的测试挑战")]),v._v("：")]),v._v(" "),r("p",[v._v("一个应用是由很多相互独立的微服务组成，每个微服务都会对外暴露接口， 一个微服务通常还会去调用其他微服务 ，测试挑战主要来自两方面：")]),v._v(" "),r("ul",[r("li",[v._v("过于庞大的测试用例数量")])]),v._v(" "),r("p",[r("strong",[v._v("传统 API 测试的策略")]),v._v("：")]),v._v(" "),r("ul",[r("li",[v._v("根据被测 API 输入参数的各种组合调用 API，并验证相关结果的正确性；")]),v._v(" "),r("li",[v._v("衡量上述测试过程的代码覆盖率；")]),v._v(" "),r("li",[v._v("根据代码覆盖率进一步找出遗漏的测试用例；")]),v._v(" "),r("li",[v._v("以代码覆盖率达标作为 API 测试成功完成的标志")])]),v._v(" "),r("p",[r("strong",[v._v("举个例子")]),v._v("：")]),v._v(" "),r("p",[v._v("采用单体架构开发了一个系统，这个系统对外提供了 3 个 Restful API 接口")]),v._v(" "),r("p",[v._v("设计测试策略：")]),v._v(" "),r("ul",[r("li",[v._v("针对这 3 个 API 接口，分别基于边界值和等价类方法设计测试用例并执行")]),v._v(" "),r("li",[v._v("在测试执行过程中，启用代码覆盖率统计")]),v._v(" "),r("li",[v._v("假设测试完成后代码行覆盖率是 80%，需要找到那些还没有被执行到的 20% 的代码行")]),v._v(" "),r("li",[v._v("要保证代码覆盖率达到既定的要求，完成 API 测试")])]),v._v(" "),r("p",[r("strong",[v._v("当我们采用微服务架构时，原本的单体应用会被拆分成多个独立模块，也就是很多个独立的service，原本单体应用的全局功能将会由这些拆分得到的API共同协作完成")])]),v._v(" "),r("p",[r("strong",[v._v("改造上面的例子")]),v._v("：")]),v._v(" "),r("p",[v._v("采用微服务架构，该系统被拆分成了 10 个独立的 service，每个 service 平均对外暴露 3 个 API 接口")]),v._v(" "),r("p",[r("strong",[v._v("采用传统 API 测试策略，存在的问题")]),v._v("：")]),v._v(" "),r("ul",[r("li",[v._v("测试用例的数量多达 30 个 ，需要耗费大量的测试执行时间和资源")]),v._v(" "),r("li",[v._v("互联网模式下，由于发布周期的特殊性， 测试的执行时间非常有限")]),v._v(" "),r("li",[v._v("微服务之间的耦合关系")])]),v._v(" "),r("p",[v._v("例：但是 Service T 的内部又调用了 Service X 和 Service Y， 如果 Service X 和 Service Y 由于各种原因处于不可用的状态，此时就无法对 Service T 进行完整的测试")]),v._v(" "),r("p",[r("img",{attrs:{src:e(735),alt:"耦合示例"}})]),v._v(" "),r("p",[r("strong",[v._v("解耦方式")]),v._v("：实现  "),r("strong",[v._v("Mock Service")]),v._v(" 来代替被依赖的真实 Service")]),v._v(" "),r("p",[r("strong",[v._v("关键点")]),v._v("：能够模拟真实 Service 的 Request 和 Response")]),v._v(" "),r("p",[r("strong",[v._v("解决方法")]),v._v("："),r("strong",[v._v("基于消费契约的 API 测试")])]),v._v(" "),r("p",[r("strong",[v._v("基于消费契约的 API 测试")]),v._v("：")]),v._v(" "),r("p",[v._v("举个栗子：")]),v._v(" "),r("p",[v._v("被测对象：Service T")]),v._v(" "),r("p",[v._v("Service T 的使用者：Service A、Service B")]),v._v(" "),r("p",[v._v("三者之间的关系：")]),v._v(" "),r("p",[r("img",{attrs:{src:e(736),alt:"关系"}})]),v._v(" "),r("p",[r("strong",[v._v("思考")]),v._v("：")]),v._v(" "),r("ul",[r("li",[v._v("Service T 的使用者是确定的， 只有 Service A 和 Service B")]),v._v(" "),r("li",[v._v("如果可以把 Service A 和 Service B 对Service T 所有可能的调用方式都测试到，那么就一定可以保证 Service T 的质量")]),v._v(" "),r("li",[v._v("可能存在某些 Service T 的其他调用方式会出错，但系统中并没有其他 Service 会以这种可能出错的方式来调用 Service T，不会影响整个系统的功能")])]),v._v(" "),r("p",[r("strong",[v._v("问题转换")]),v._v("：找到 Service A 和 Service B 对 Service T 所有可能的调用方式组成集合， 作为 Service T 的测试用例")]),v._v(" "),r("p",[r("strong",[v._v("测试用例集合本质")]),v._v("：Service T 可以对外提供的"),r("strong",[v._v("服务的契约")]),v._v("， 称为“基于消费者契约的API测试”")]),v._v(" "),r("p",[r("strong",[v._v("问题解决方案")]),v._v("：在逻辑结构上，在 Service T 前放置一个代理，所有进出 Service T 的 Request 和 Response 都会经过这个代理，并被记录成 JSON 文件，构成了 Service T 的契约")]),v._v(" "),r("p",[v._v("原理过程：")]),v._v(" "),r("p",[r("img",{attrs:{src:e(737),alt:"原理过程"}})]),v._v(" "),r("p",[r("strong",[v._v("实际应用")]),v._v("：不可能在每个Service前去放置这样一个代理， 微服务架构中会存在一个叫作 API Gateway 的组件，用于记录所有 API 之间相互调用关系的日志，可以通过解析 API Gateway 的日志分析得到每个 Service 的契约")]),v._v(" "),r("p",[r("strong",[v._v("微服务测试的依赖解耦和 Mock Service")]),v._v("：")]),v._v(" "),r("p",[r("strong",[v._v("契约的本质")]),v._v("：Request 和 Response 的组合，具体的表现形式往往是 JSON 文件")]),v._v(" "),r("p",[r("strong",[v._v("Mock Service 依据")]),v._v("：契约的 JSON 文件")]),v._v(" "),r("p",[v._v("![API 调用依赖](./images/API 调用依赖.jpg)")]),v._v(" "),r("p",[r("strong",[v._v("解耦服务之间的依赖")]),v._v("：当用 Service X 的契约启动 Mock Service X 后，原本真实的 Service X 将被 Mock Service X 替代")]),v._v(" "),r("p",[v._v("（完）")])])}),[],!1,null,null,null);_.default=t.exports},735:function(v,_,e){v.exports=e.p+"assets/img/耦合示例.4341f21b.jpg"},736:function(v,_,e){v.exports=e.p+"assets/img/关系.347e5d82.jpg"},737:function(v,_,e){v.exports=e.p+"assets/img/原理过程.b912bf6d.jpg"}}]);