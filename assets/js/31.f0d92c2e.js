(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{361:function(a,t,s){"use strict";s.r(t);var e=s(8),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"ribbon负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ribbon负载均衡"}},[a._v("#")]),a._v(" Ribbon负载均衡")]),a._v(" "),t("p",[a._v("负载均衡流程")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220201223158426.png",alt:"image-20220201223158426"}})]),a._v(" "),t("p",[a._v("上面在RestTemplate上面加的@LoadBalanced注解就是标记了之后发起的请求要被Ribbon拦截和处理了。")]),a._v(" "),t("p",[a._v("我们在代码中打断点调试")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220201223647758.png",alt:"image-20220201223647758"}})]),a._v(" "),t("p",[a._v("这个就是整个负载均衡的流程")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220201224058180.png",alt:"image-20220201224058180"}})]),a._v(" "),t("p",[t("strong",[a._v("负载均衡策略")])]),a._v(" "),t("p",[a._v("Ribbon的负载均衡规则是一个叫做IRule的接口来定义的，每一个子接口都是一种规则：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220201224324290.png",alt:"image-20220201224324290"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220201224405457.png",alt:"image-20220201224405457"}})]),a._v(" "),t("p",[a._v("通过定义IRule实现可以修改负载均衡规则，有两种方式：")]),a._v(" "),t("p",[a._v("1、代码方式：在order-service中的OrderApplication类中，定义一个新的IRule")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IRule")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("randomRule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RandomRule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("2、配置文件方式：在order-service的application.yml文件中添加新的配置也可以修改规则：")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("userservice")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ribbon")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("NFLoadBalancerRuleClassName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" com.alibaba.cloud.nacos.ribbon.NacosRule  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 负载均衡规则")]),a._v("\n")])])]),t("h2",{attrs:{id:"饥饿加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#饥饿加载"}},[a._v("#")]),a._v(" 饥饿加载")]),a._v(" "),t("p",[a._v("发起两次请求，第一次时间很长500多ms，而第二次就只需要27ms就完成了")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220201225221729.png",alt:"image-20220201225221729"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220201225229138.png",alt:"image-20220201225229138"}})]),a._v(" "),t("p",[a._v("开启后只需要300多就完成第一次加载了还是可以的")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220201225615598.png",alt:"image-20220201225615598"}})]),a._v(" "),t("p",[a._v("总结：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220201225710017.png",alt:"image-20220201225710017"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);