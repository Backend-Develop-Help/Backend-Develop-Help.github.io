(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{367:function(a,t,s){"use strict";s.r(t);var e=s(8),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"dockercompose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockercompose"}},[a._v("#")]),a._v(" DockerCompose")]),a._v(" "),t("p",[a._v("实际生产环境下微服务成百上千个我们一个个构建实在太慢了 我们必须有一个集群构建的方式这里就是DockerCompose了")]),a._v(" "),t("h2",{attrs:{id:"什么是dockercompose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是dockercompose"}},[a._v("#")]),a._v(" 什么是DockerCompose")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213145024675.png",alt:"image-20220213145024675"}})]),a._v(" "),t("p",[a._v("实际上就是把docker run里面的参数都转换成compose里面的语法来实现了")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213145201845.png",alt:"image-20220213145201845"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213145327539.png",alt:"image-20220213145327539"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213145346691.png",alt:"image-20220213145346691"}})]),a._v(" "),t("h2",{attrs:{id:"安装dockercompose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装dockercompose"}},[a._v("#")]),a._v(" 安装DockerCompose")]),a._v(" "),t("p",[a._v("将docker-compose文件上传到/usr/local/bin/目录")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213145633892.png",alt:"image-20220213145633892"}})]),a._v(" "),t("h3",{attrs:{id:"修改文件权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改文件权限"}},[a._v("#")]),a._v(" 修改文件权限")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213145714117.png",alt:"image-20220213145714117"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213145830648.png",alt:"image-20220213145830648"}})]),a._v(" "),t("p",[a._v("上面没有x的文件是没有执行权的 现在的docker-compose拥有了执行权")]),a._v(" "),t("p",[a._v("Final Shell里面更加直观直接变绿了")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213145928584.png",alt:"image-20220213145928584"}})]),a._v(" "),t("h3",{attrs:{id:"base自动补全命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base自动补全命令"}},[a._v("#")]),a._v(" Base自动补全命令")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 补全命令")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" https://raw.githubusercontent.com/docker/compose/1.29.1/contrib/completion/bash/docker-compose "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /etc/bash_completion.d/docker-compose\n")])])]),t("p",[a._v("如果这里出现错误，需要修改自己的hosts文件：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"199.232.68.133 raw.githubusercontent.com"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/hosts\n")])])]),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213150145483.png",alt:"image-20220213150145483"}})]),a._v(" "),t("p",[a._v("这里用老师的方案不行 删掉之前在/etc/hosts里面的修改然后使用官网的方法")]),a._v(" "),t("p",[a._v("https://docs.docker.com/compose/completion/")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用官网的命令安装")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" https://raw.githubusercontent.com/docker/compose/1.29.2/contrib/completion/bash/docker-compose "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" /etc/bash_completion.d/docker-compose\n")])])]),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213150850316.png",alt:"image-20220213150850316"}})]),a._v(" "),t("p",[a._v("总结:")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213150437585.png",alt:"image-20220213150437585"}})]),a._v(" "),t("h2",{attrs:{id:"dockercompose-部署微服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockercompose-部署微服务"}},[a._v("#")]),a._v(" DockerCompose-部署微服务")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213151238402.png",alt:"image-20220213151238402"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213151326801.png",alt:"image-20220213151326801"}})]),a._v(" "),t("p",[a._v("但是我们这里的jar包都没有 需要我们把这些jar放到这里的同级目录里面")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213151524992.png",alt:"image-20220213151524992"}})]),a._v(" "),t("p",[a._v("我们希望的是把数据卷给挂载到提前写好的/mysql/data和/mysql/conf下的")]),a._v(" "),t("p",[a._v("$PWD的写法意思是在当前目录下开始找（这样防止切换环境文件就找不到了）")]),a._v(" "),t("p",[a._v("再后面这些由于它们的dockerfile都在对应的目录里面所以build就这样告知就好了")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213152216126.png",alt:"image-20220213152216126"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213220438571.png",alt:"image-20220213220438571"}})]),a._v(" "),t("p",[a._v("使用dockercompose部署时我们直接使用服务名就可以访问了（将localhost之类的服务改名成服务名）")]),a._v(" "),t("p",[a._v("打包最后的项目名称")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213220616174.png",alt:"image-20220213220616174"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213220755630.png",alt:"image-20220213220755630"}})]),a._v(" "),t("p",[a._v("然后将app.jar全部导到对应的子目录中")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213220902489.png",alt:"image-20220213220902489"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213220924449.png",alt:"image-20220213220924449"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213221024290.png",alt:"image-20220213221024290"}})]),a._v(" "),t("h2",{attrs:{id:"docker镜像仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像仓库"}},[a._v("#")]),a._v(" Docker镜像仓库")]),a._v(" "),t("p",[a._v("管理镜像的地方")]),a._v(" "),t("h3",{attrs:{id:"常见镜像仓库服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见镜像仓库服务"}},[a._v("#")]),a._v(" 常见镜像仓库服务")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213221225676.png",alt:"image-20220213221225676"}})]),a._v(" "),t("h3",{attrs:{id:"私有镜像仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#私有镜像仓库"}},[a._v("#")]),a._v(" 私有镜像仓库")]),a._v(" "),t("p",[a._v("搭建镜像仓库可以基于Docker官方提供的DockerRegistry来实现。")]),a._v(" "),t("p",[a._v("官网地址：https://hub.docker.com/_/registry")]),a._v(" "),t("h4",{attrs:{id:"简化版镜像仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简化版镜像仓库"}},[a._v("#")]),a._v(" 简化版镜像仓库")]),a._v(" "),t("p",[a._v("Docker官方的Docker Registry是一个基础版本的Docker镜像仓库，具备仓库管理的完整功能，但是没有图形化界面。")]),a._v(" "),t("p",[a._v("搭建方式比较简单，命令如下：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" registry\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5000")]),a._v(":5000 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" registry-data:/var/lib/registry "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    registry\n")])])]),t("p",[a._v("命令中挂载了一个数据卷registry-data到容器内的/var/lib/registry 目录，这是私有镜像库存放数据的目录。")]),a._v(" "),t("p",[a._v("访问http://YourIp:5000/v2/_catalog 可以查看当前私有镜像服务中包含的镜像")]),a._v(" "),t("h4",{attrs:{id:"带有图形化界面版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#带有图形化界面版本"}},[a._v("#")]),a._v(" 带有图形化界面版本")]),a._v(" "),t("p",[a._v("使用DockerCompose部署带有图象界面的DockerRegistry，命令如下：")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3.0'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("registry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" registry\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ./registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/lib/registry\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ui")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" joxit/docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("ui"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("static\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 8080"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" REGISTRY_TITLE=传智教育私有仓库\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" REGISTRY_URL=http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5000")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("depends_on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" registry\n")])])]),t("h4",{attrs:{id:"配置docker信任地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置docker信任地址"}},[a._v("#")]),a._v(" 配置Docker信任地址")]),a._v(" "),t("p",[a._v("我们的私服采用的是http协议，默认不被Docker信任，所以需要做一个配置：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打开要修改的文件")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/docker/daemon.json\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加内容：")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"insecure-registries"')]),a._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://192.168.150.101:8080"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 改成自己的ip")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重加载")]),a._v("\nsystemctl daemon-reload\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启docker")]),a._v("\nsystemctl restart "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])]),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213223320108.png",alt:"image-20220213223320108"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213223329304.png",alt:"image-20220213223329304"}})]),a._v(" "),t("h4",{attrs:{id:"在私有镜像仓库推送或拉取镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在私有镜像仓库推送或拉取镜像"}},[a._v("#")]),a._v(" 在私有镜像仓库推送或拉取镜像")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213223341639.png",alt:"image-20220213223341639"}})]),a._v(" "),t("p",[a._v("要想推送私有镜像一定要重命名")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213223724975.png",alt:"image-20220213223724975"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213223740942.png",alt:"image-20220213223740942"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213223917570.png",alt:"image-20220213223917570"}})]),a._v(" "),t("p",[a._v("总结：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/ethandu/%E5%BE%AE%E6%9C%8D%E5%8A%A1/SpringCloud+%E5%BE%AE%E6%9C%8D%E5%8A%A1.assets/image-20220213224012237.png",alt:"image-20220213224012237"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);