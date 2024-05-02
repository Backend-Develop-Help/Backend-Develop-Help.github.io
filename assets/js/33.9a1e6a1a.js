(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{364:function(E,a,i){"use strict";i.r(a);var t=i(8),e=Object(t.a)({},(function(){var E=this,a=E._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":E.$parent.slotKey}},[a("h1",{attrs:{id:"http客户端feigin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http客户端feigin"}},[E._v("#")]),E._v(" http客户端Feigin")]),E._v(" "),a("p",[E._v("RestTemplate方式调用存在的问题")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211211803654.png",alt:"image-20220211211803654"}})]),E._v(" "),a("h2",{attrs:{id:"feign的介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feign的介绍"}},[E._v("#")]),E._v(" Feign的介绍")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211211823097.png",alt:"image-20220211211823097"}})]),E._v(" "),a("p",[E._v("定义和使用Feign客户端")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211211918200.png",alt:"image-20220211211918200"}})]),E._v(" "),a("p",[E._v("这个里面的注解甚至用的是springmvc里面的注解")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211211927764.png",alt:"image-20220211211927764"}})]),E._v(" "),a("p",[E._v("Feign是声明式http客户端 上面这段代码将http请求所需要的所有东西feign通过声明客户端的方式弄好了")]),E._v(" "),a("p",[E._v("Feign非常强大 里面已经包含了负载均衡功能了(核心依赖里面已经集成了Ribbon)")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211212853444.png",alt:"image-20220211212853444"}})]),E._v(" "),a("p",[E._v("总结：")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211212936492.png",alt:"image-20220211212936492"}})]),E._v(" "),a("h2",{attrs:{id:"自定义feign的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义feign的配置"}},[E._v("#")]),E._v(" 自定义Feign的配置")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211213038641.png",alt:"image-20220211213038641"}})]),E._v(" "),a("p",[E._v("失败重试：可能是服务宕机或网络原因 Ribbon就不会等了 它会做重试去试试另一个服务能不能访问")]),E._v(" "),a("p",[E._v("配置Feign日志的两种方式:")]),E._v(" "),a("ul",[a("li",[E._v("方式一：配置文件方式")])]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211213350412.png",alt:"image-20220211213350412"}})]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211213617996.png",alt:"image-20220211213617996"}})]),E._v(" "),a("ul",[a("li",[E._v("配置Feign日志的方式二：java代码方式，需要先声明一个Bean：")])]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211213712935.png",alt:"image-20220211213712935"}})]),E._v(" "),a("p",[E._v("总结：")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211213900199.png",alt:"image-20220211213900199"}})]),E._v(" "),a("h2",{attrs:{id:"feign的性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feign的性能优化"}},[E._v("#")]),E._v(" Feign的性能优化")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211214110235.png",alt:""}})]),E._v(" "),a("h3",{attrs:{id:"连接池配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接池配置"}},[E._v("#")]),E._v(" 连接池配置")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211214940169.png",alt:"image-20220211214940169"}})]),E._v(" "),a("p",[E._v("真实情况需要根据压测结果进行调节")]),E._v(" "),a("p",[E._v("总结：")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211215224024.png",alt:"image-20220211215224024"}})]),E._v(" "),a("h2",{attrs:{id:"feign的最佳实践-踩坑后的比较好的实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feign的最佳实践-踩坑后的比较好的实现方式"}},[E._v("#")]),E._v(" Feign的最佳实践（踩坑后的比较好的实现方式）")]),E._v(" "),a("ul",[a("li",[E._v("方式一（继承）：给消费者的FeignClient和提供者的controller定义统一的父接口作为标准")])]),E._v(" "),a("p",[E._v("原来：")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211215418102.png",alt:"image-20220211215418102"}})]),E._v(" "),a("p",[E._v("这里的userservice的接口和orderservice里面的Feign客户端写的接口实际上是一样的")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211215543869.png",alt:"image-20220211215543869"}})]),E._v(" "),a("p",[E._v("现在：（给两个地方定义统一的标准约束了两边怎么去做）")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211215646406.png",alt:"image-20220211215646406"}})]),E._v(" "),a("p",[E._v("==但是官方并不推荐去共享接口在服务端和客户端之间，因为会造成紧耦合 两个服务在API上都一样了 并且这里在springmvc中是不会生效的 因为方法参数（@PathVarible）是继承不下来的==")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211215843271.png",alt:"image-20220211215843271"}})]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211220015249.png",alt:"image-20220211220015249"}})]),E._v(" "),a("ul",[a("li",[E._v("方式二（抽取）：将FeignClient抽取为独立模块，并且把接口有关的POJO，默认的Feign配置都放到这个模块中，提供给所有消费者使用")])]),E._v(" "),a("p",[E._v("思考一个问题 随着服务的增多我们这个userclient也是（要用的话）每次都写这样也是重复开发了")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211220124587.png",alt:"image-20220211220124587"}})]),E._v(" "),a("p",[E._v("这里我们用一个feign的api 在这个项目中把这个写好 把实体类也写好 配置也写好 ==服务要用直接引依赖就好了依赖有了就直接调就好了== 这个是一个统一的抽取的方式")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211220419702.png",alt:"image-20220211220419702"}})]),E._v(" "),a("p",[E._v("但是它也有一个问题例如orderservice里面我只需要用里面的其中一个方法 但是我们把所有的都引进来了")]),E._v(" "),a("p",[E._v("所以没有完美的解决方案")]),E._v(" "),a("p",[E._v("总结：")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211220709974.png",alt:"image-20220211220709974"}})]),E._v(" "),a("h2",{attrs:{id:"抽取feignclient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽取feignclient"}},[E._v("#")]),E._v(" 抽取FeignClient")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211221041511.png",alt:"image-20220211221041511"}})]),E._v(" "),a("p",[E._v("引入依赖")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211221119530.png",alt:"image-20220211221119530"}})]),E._v(" "),a("p",[E._v("将UserClient\tDefaultFeignConfiguration\tUser实体类都放进去")]),E._v(" "),a("p",[E._v("将OrderService中先前里面有的User\tUserClient\tDefaultFeignConfiguration全部删掉（这里之前的依赖找不到了所以会报错）")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211221237816.png",alt:"image-20220211221237816"}})]),E._v(" "),a("p",[E._v("在orderservice中导入feign-api包将依赖替换成feign-api里面的东西")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211221351873.png",alt:"image-20220211221351873"}})]),E._v(" "),a("p",[E._v("现在除了这个开启客户端已经在OrderService里面没有关于Feign的东西了")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211221449705.png",alt:"image-20220211221449705"}})]),E._v(" "),a("p",[E._v("但是这里启动报错了 说这个UserClient无法被注入")]),E._v(" "),a("p",[E._v("如果熟悉Spring应该知道编译没有报错证明类有 但是无法注入说明没有创建对象 也就是在spring容器中找不到它所以注入失败 UserClient这个接口之所以以前有对象是因为")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211221744004.png",alt:"image-20220211221744004"}})]),E._v(" "),a("p",[E._v("这个接口以前有这个注解 spring扫描到这个注解就会给这个接口创建对象 现在没有扫描到包了 我们的orderservice默认的扫描包是启动类在的包 和feign-api里面的UserClient显然不在一个包 扫不到的 所以spring容器中没有这个bean这就无法注入了 （把orderservice扫描包改掉是显然不合适的）")]),E._v(" "),a("blockquote",[a("p",[E._v("解决方案")])]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211222204827.png",alt:"image-20220211222204827"}})]),E._v(" "),a("p",[E._v("(更推荐第二种方案 只需要扫描需要的client 只加载需要的客户端)")]),E._v(" "),a("p",[E._v("总结：")]),E._v(" "),a("p",[a("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220211222420062.png",alt:"image-20220211222420062"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);