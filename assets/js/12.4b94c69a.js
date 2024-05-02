(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{343:function(t,e,r){"use strict";r.r(e);var a=r(8),_=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("span",{staticStyle:{color:"purple"}},[t._v(" 工欲善其事，必先利其器。 ")])]),t._v(" "),e("p",[t._v("人和动物最大的区别就是使用工具，磨刀不误砍柴工。")]),t._v(" "),e("p",[t._v("本篇章中我将会介绍一些学习和开发上常用的工具，供大家参考。")]),t._v(" "),e("h2",{attrs:{id:"大语言模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#大语言模型"}},[t._v("#")]),t._v(" 大语言模型")]),t._v(" "),e("p",[t._v("作为新时代的码农，也必须要学会使用新时代的工具—"),e("strong",[t._v("ChatGPT")])]),t._v(" "),e("p",[t._v("从 jyy 2024 年 OS 课程第一节中截取了一段话：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/OzSLbAxPvoRKQwxcrlHclC9jnac.png",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("chatGPT 的出现，大大降低了我们获取 相对“正确” 知识的难度。")])]),t._v(" "),e("p",[t._v("在过去，当你有一个技术上的问题，你需要依靠搜索引擎搜索关键词，需要一个一个点开网页，忍受着各种低质量回答，被各种无关内容打扰，最后在茫茫互联网中找到你想要的，那个也许“正确”的 答案。")]),t._v(" "),e("p",[t._v("在过去，阅读那些经典技术书籍时，你需要忍受极其糟糕的翻译质量，试图理解它晦涩难懂的行文逻辑，有时读了半天不知所云，也找不到人与你交流讨论。")]),t._v(" "),e("p",[t._v("在过去，当你面对超长的编译报错，你只能抓耳挠腮，就算寻求搜索引擎的帮助，往往在短时间内也很难遇到和你完全一致的问题及其解决办法（除非过于简单）。")]),t._v(" "),e("p",[e("strong",[t._v("But Now， 大人， 时代变了！")])]),t._v(" "),e("p",[e("span",{staticStyle:{color:"red"}},[t._v(" 现在，只需要提供一个好的问题，模型就会给你一个相对“正确”的答案。 ")])]),t._v(" "),e("p",[t._v("现在，遇到一个新的技术问题，你可以尝试咨询一下通义：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/IN45bCDSEolZHdxfkcccRNU1nyf.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/YlVOb3S2goXjtPxZ49Oc5AALn5b.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/NaNBb3MnDo6DgaxhtWxcqjM2nub.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/AsCTbyluJoYSaQxdCmnc9q20n3e.png",alt:""}})]),t._v(" "),e("p",[t._v("现在，阅读一本书，可以直接扔给文心，然后向它诉说你心中的任何疑问：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/FX1tb2CNkoMCBCxw6dgcr4uZnhx.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/SlsMbstzWoSn2Fx9LJbcUG3enRb.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/Z2U0bHRdnonUesxEgMfcemCJnSz.png",alt:""}})]),t._v(" "),e("p",[t._v("现在，面对令人烦恼的错误日志，不妨交给 GPT，让它帮你寻找解决方案：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/ONylbrgkUoqetBx6LVKcH4uXnug.png",alt:""}})]),t._v(" "),e("p",[t._v("我特地使用了三种模型来举上面的例子，事实上，它们在处理类似问题时都有着不错的表现，无非是谁做的更好罢了。选择一个你觉得好用的产品使用即可。生成内容的质量，可不仅仅依赖于模型的好坏，有时也需要思考一下，"),e("strong",[t._v("你有没有提出一个好的问题")]),t._v("（"),e("a",{attrs:{href:"https://github.com/dair-ai/Prompt-Engineering-Guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prompt 指南"),e("OutboundLink")],1),t._v("）。")]),t._v(" "),e("p",[t._v("就同 jyy 说的那样，在这个新时代，"),e("strong",[t._v("学习从未如此之高效，因材施教在一定程度上得以实现！")])]),t._v(" "),e("p",[t._v("如果你还没有体验过这类新时代的工具，不妨尝试一下，说不定会给你带来别样的惊喜～")]),t._v(" "),e("h2",{attrs:{id:"编译及编译相关工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译及编译相关工具"}},[t._v("#")]),t._v(" 编译及编译相关工具")]),t._v(" "),e("ol",[e("li",[t._v("gcc/g++ or clang： 编译套件，我只用过 gcc，如果你对另外一个感兴趣，可以自行百度。")]),t._v(" "),e("li",[t._v("Makefile: "),e("a",{attrs:{href:"https://www.bilibili.com/video/BV188411L7d2/?spm_id_from=333.999.0.0&vd_source=af7e0c9e1572f87d3612cbcf3801eda6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Makefile 20 分钟入门，简简单单，展示如何使用 Makefile 管理和编译 C++ 代码_哔哩哔哩_bilibili"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("CMake，用来生成 Makefile："),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1bg411p7oS/?spm_id_from=333.999.0.0&vd_source=af7e0c9e1572f87d3612cbcf3801eda6",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMake 6 分钟入门，不用再写复杂的 Makefile_哔哩哔哩_bilibili"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("好了，编译相关的核心工具都在上面啦，只要掌握 cmake 的使用，市面上 80% 以上的开源项目你都能搞定。")]),t._v(" "),e("p",[t._v("关于 Makefile 和 CMake 的学习路线，我认为在新时代下，能借助"),e("strong",[t._v("新工具")]),t._v("解决的问题，就不要自己从头开始研究。把你的项目结构告诉 chatGPT，或者文心一言，通义千问等国产大模型，让他帮你写。在学习的过程中，久而久之，你也就会了。")]),t._v(" "),e("h3",{attrs:{id:"其他编译工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他编译工具"}},[t._v("#")]),t._v(" 其他编译工具")]),t._v(" "),e("p",[t._v("如果你对上面的编译套件还不太满意，也许可以尝试下面两个：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("xmake: 国产之光，听说支持无缝转换cmake "),e("a",{attrs:{href:"https://xmake.io/#/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("xmake.io"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("Bazel: 谷歌的编译工具,支持多语言 "),e("a",{attrs:{href:"https://bazel.build/?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("bazel.build"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"linux平台搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux平台搭建"}},[t._v("#")]),t._v(" Linux平台搭建")]),t._v(" "),e("p",[t._v("本篇章主要面向 Linux 环境，一些只在Win端开发的特殊岗位（游戏客户端等）直接忽视。")]),t._v(" "),e("p",[t._v("Linux C++通常需要涉及到系统编程，所以搭建一个 Linux 环境是一件很重要的事情。")]),t._v(" "),e("p",[t._v("最常用的两个：Ubuntu 或者 CentOS，任选其一即可，对于新手来说区别不大（不过学生党用 Ubuntu 的貌似多一些）")]),t._v(" "),e("h3",{attrs:{id:"windows-用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-用户"}},[t._v("#")]),t._v(" Windows 用户")]),t._v(" "),e("p",[t._v("对于Windows平台作为主力的萌新来说（大多数人），前期就不要花里胡哨地鼓捣新奇玩意了，虚拟机就是你最好的伙伴。类似的教程，网上一大堆，再不济你还可以问 GPT， 这里给出一个视频，照着学就完了。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV19W4y1w7cM?p=5&vd_source=af7e0c9e1572f87d3612cbcf3801eda6",target:"_blank",rel:"noopener noreferrer"}},[t._v("05_VMware 的功能和作用_哔哩哔哩_bilibili"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("当你 Linux 稍微熟悉以后，也许你会开始对微软的 WSL 开始感兴趣，下面会给出官方链接，如果因为网络问题下载非常慢，那么也许你应该考虑一下更 “科学” 的下载方式。"),e("a",{attrs:{href:"https://learn.microsoft.com/zh-cn/windows/wsl/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装 WSL"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"mac-用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac-用户"}},[t._v("#")]),t._v(" Mac 用户")]),t._v(" "),e("p",[t._v("MacOS 本身就是类 Unix 系统，也就是说 POSIX 兼容， 所以在学习的整个过程当中，如果你愿意的话，都可以直接在本地环境进行开发。 但是，但是，当学到一些 Linux 特殊且重要的系统调用“方言”时（说的就是你 Epoll），你还是不免需要一个 Linux 环境（Mac 有类似方言：kqueue）。 Mac 上也有类似的虚拟机，Appstore 中搜一下，很多。"),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1sW4y1f7YU/?spm_id_id_from=333.337.search-card.all.click&vd_source=af7e0c9e1572f87d3612cbcf3801eda6",target:"_blank",rel:"noopener noreferrer"}},[t._v("macOS 使用 VMware Fusion 安装 Ubuntu 桌面版_哔哩哔哩_bilibili"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"云服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#云服务器"}},[t._v("#")]),t._v(" 云服务器")]),t._v(" "),e("p",[t._v("当然，你还可以选择买一个云主机使劲折腾，各大厂商对学生都会推出非常便宜的年包方案，新用户 100 块一年，四舍五入那就是白嫖啊！")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cloud.tencent.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.tencent.com"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cn.aliyun.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cn.aliyun.com"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"docker-构建开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-构建开发环境"}},[t._v("#")]),t._v(" Docker 构建开发环境")]),t._v(" "),e("p",[t._v("如果上面的所有选项你都不满意，那么不妨尝试一下使用 Docker 来搭建你的 Linux 开发环境吧（这也是我目前的在用的方案）")]),t._v(" "),e("p",[t._v("下面的视频也许会帮到你。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV12e41117vK/?spm_id_from=333.337.search-card.all.click&vd_source=af7e0c9e1572f87d3612cbcf3801eda6",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 Mac 和 Windows 下使用 VSCode+Docker 快速搭建 Linux C++ 开发环境_哔哩哔哩_bilibili"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("搭建环境的同时又能学习到新工具，我们 cpper 真的是太 "),e("s",[t._v("会折腾")]),t._v(" 厉害了呢 ～")]),t._v(" "),e("h2",{attrs:{id:"ide-选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ide-选择"}},[t._v("#")]),t._v(" IDE 选择")]),t._v(" "),e("p",[t._v("摆在 C++ 新人面前最大的难题，可能就是工具的选取问题；cpper 常用的开发环境大致分为 3 类：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("摆烂派：Visual Studio  or  CLion")])])]),t._v(" "),e("p",[t._v("宇宙最强 IDE，不用白不用，好处是减少了新人相当多心智负担，坏处？无法满足 cpper 变态般的定制化需求~")]),t._v(" "),e("p",[t._v("老版本的 Visual Studio 基本绑死了 Windows 平台的开发，但是据说新版对远程开发支持相当友好，感兴趣的可以尝试。CLion 没用过，听说很好用，但是根据我使用 Pycharm 的经验，JB 家的远程开发体验一坨，CLion 估计也好不到哪去。本地开发的话，体验应该还是非常好的。 这俩我就不放链接了，一搜一大堆的安装教程。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[t._v("极端派：vi、vim、neovim、nano、Emacs 等")])])]),t._v(" "),e("p",[t._v("cpper 的最大特点就是喜欢瞎折腾，Visual Studio 和 CLion 自然入不了他们的法眼，上述一众文本编辑器才是他们的最爱，可以极大程度地满足他们对于定制化 IDE 的需求。")]),t._v(" "),e("p",[t._v("如果你实在想体验一下大佬们写代码的方式，可以参考下面视频的方式，自己配置一下。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV1H44y1V7DW/?spm_id_from=333.999.0.0&vd_source=af7e0c9e1572f87d3612cbcf3801eda6",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Vim 插件整合包】C++/Python 自动补全，模糊查找文件，编译 CMake 工程等_哔哩哔哩_bilibili"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("strong",[t._v("中庸派：Visual Studio Code")])])]),t._v(" "),e("p",[t._v("也就是大名鼎鼎的 vscode 啦(也有人简写成 vsc)~")]),t._v(" "),e("p",[t._v("其实 vscode 本身也就是一个文本编辑器啦，但是丰富的插件让其满足成为一个合格 IDE 的一切条件，丝滑的远程开发体验让人欲罢不能。 目前我接触到的年轻 cpper 基本都选择将它当作自己的主力 IDE。 下面章节我将详细介绍我日常使用的插件，基本可以满足我的日常开发需求。")]),t._v(" "),e("h3",{attrs:{id:"visual-studio-code-开发环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code-开发环境搭建"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Visual Studio Code 开发环境搭建")])]),t._v(" "),e("p",[t._v("好啦，终于来到工具篇中最最最重要的环节了，众所周知，每个 cpper 的开发环境，都是摸爬滚打多年沉淀下来的精华。今天在这里给大伙展示一下我沉淀。")]),t._v(" "),e("p",[t._v("首先，你需要搭建好一个 Linux 平台，用虚拟机，用 Docker，用远程服务器都无所谓。假设你有了。")]),t._v(" "),e("p",[t._v("好的，现在打开 vscode，然后在侧边栏找到如下图标（侧边栏如何打开，自行百度，或者问 GPT）：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/KzoIbLYLrotVmDx4z7ncIlkanph.png",alt:""}})]),t._v(" "),e("p",[t._v("好的，现在就可以愉快地安装插件啦。")]),t._v(" "),e("ol",[e("li",[t._v("Remote - SSH")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/J9iVbiR0aoJTE5xmEyLcJHp9n8e.png",alt:""}})]),t._v(" "),e("p",[t._v("vscode 远程开发滴核心出装，有了它你就可以在远端（虚拟机也算远端）进行开发，就如同本地开发一样丝滑 ～ （具体使用步骤请百度或问 GPT，下同）")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Project Manager")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/EZzBb4adgoXU3MxU3ZTcas9inOb.png",alt:""}})]),t._v(" "),e("p",[t._v("无缝跳转你的本地项目和任意远端项目，用过都说好")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Docker")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/C7GVbREEqoxIXbxcdpXcFvHvn2g.png",alt:""}})]),t._v(" "),e("p",[t._v("如果你使用的是 Docker 搭建的环境，这个插件是必不可少的，可以很方便地管理你的容器。")]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Dev Containers")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/YfUnbA0ylofyacx6FqMciqQDn6g.png",alt:""}})]),t._v(" "),e("p",[t._v("让使用 Docker 环境开发变得真正好用的神级插件，让 vscode 拥有可以直接进入容器内的能力，配合 Project Manager，在之后的开发中，你就能无缝切换任意平台的项目了。")]),t._v(" "),e("p",[t._v("好的，上面就是本地环境当中仅需安装的四个插件啦，当你远程进入一个 容器/虚拟机/远程服务器 后，我们来安装远端的插件。")]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("CMake Tools")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/HmIIbEpwdobh1txKdNrcYctknyf.png",alt:""}})]),t._v(" "),e("p",[t._v("用于调试基于 CMake 组织的项目等代码")]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("clangd")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/HTFtbH9AxoM1L1xPIZlcP8STnSe.png",alt:""}})]),t._v(" "),e("p",[t._v("比 vscode 官方 C++ 插件提供更友好的代码跳转和代码补全功能, 如何开启请看链接：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://clangd.llvm.org/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting started"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/zhcpku/p/15859554.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 clangd 取代 cpptools 作为 vscode 的 C/C++ LSP - 与 MPI 做斗争 - 博客园"),e("OutboundLink")],1)]),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[t._v("C/C++")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/EyTsbjzk6oyyo5x2LXDcAEX5nVh.png",alt:""}})]),t._v(" "),e("p",[t._v("本来有了 clangd 应该不用安这个了才是，但使用 CMake Tools Debug 时打断点，必须要使用到它。。。安一下吧。")]),t._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[t._v("Comate & 通义灵码")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/O6bpbbdv8oe39XxIqqAcGLqtn6e.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/VMRMbhpA0o9hDjxbbTrcC4uanWg.png",alt:""}})]),t._v(" "),e("p",[t._v("新时代的新工具，你的随身代码助手，两个当中下一个就好，目前这俩都是限时免费，且用且珍惜。")]),t._v(" "),e("p",[t._v("vscode 拥有非常活跃的插件市场，这里只是列举出我最常用的几个，其中还有更多好用的插件，等待大伙自己发掘。")]),t._v(" "),e("p",[t._v("或许，你还可以参考下面大佬的配置：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV1YG4y1v7uB/?spm_id_from=333.999.0.0&vd_source=af7e0c9e1572f87d3612cbcf3801eda6",target:"_blank",rel:"noopener noreferrer"}},[t._v("【VS Code】四年功力 一刻掌握 速通 C++ 插件/终端美化/工程管理 懒人必备_哔哩哔哩_bilibili"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"脚手架搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚手架搭建"}},[t._v("#")]),t._v(" 脚手架搭建")]),t._v(" "),e("p",[t._v("这一节，我将使用上一节视频中提到的 github 项目，结合之前介绍的插件，跑通一个 C++ 开发脚手架。")]),t._v(" "),e("blockquote",[e("p",[t._v("Tips：如果中途遇到任何我在讲解中没有遇到的问题，导致你流程进行不下去，不妨去问问 GPT 看看它是否能给你解决 ～")])]),t._v(" "),e("p",[t._v("首先，vscode 先进入一个开发环境，然后打开终端 shell，cd 到一个合适的目录，然后")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/Codesire-Deng/TemplateRepoCxx.git\n")])])]),e("p",[e("img",{attrs:{src:"/img/YAFree/HY9KbFvTIoJPJ9xbhhFcIBQgnQd.png",alt:""}})]),t._v(" "),e("p",[t._v("好，然后打开这个文件夹：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/ZyUcbTVuQoIKDMxpvYNc3QJdnlf.png",alt:""}})]),t._v(" "),e("p",[t._v("然后 vscode 就会跳转到刚刚 clone 的项目中（此时你可以使用 Project Manager 保存当前目录，下次打开 vscode 就可以直接跳转到该项目啦），就是下面这个图标。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/F3MRbPUNlopiwcx9iPkcnYeyncd.png",alt:""}})]),t._v(" "),e("p",[t._v("TemplateRepoCxx 包含了一个标准的 C++ 项目结构：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/LtBBbJ7oJoTqFoxTy2lcrHNqnGb.png",alt:""}})]),t._v(" "),e("p",[t._v("通常你的 cpp 文件就放在 src 文件夹中，.h 文件放在 include 下，example 存放一些样例代码，test 存放一些测试代码。")]),t._v(" "),e("h4",{attrs:{id:"开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),e("p",[t._v("好，让我们来实现一个最简单的程序，循环打印 5 次 hello world")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/SwrrboK7PoOTWjx3oBNce3jEn2c.png",alt:""}})]),t._v(" "),e("p",[t._v("下面的灰色部分就是通义灵码通过我写的注释，给我联想的代码，按 Tab 键即可采纳。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/Uq3Sbg1QqoXNzBxmZvncn2UBn1p.png",alt:""}})]),t._v(" "),e("p",[t._v("好，这样就 ok 啦，我们来编译运行一下，打开终端，并 cd 到当前项目。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/MNyfb4x89oYx1BxR5kucaEoznFb.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/TcILbV0sBoVnaUxz2Lsc9hyRnTg.png",alt:""}})]),t._v(" "),e("p",[t._v("然后执行下列命令：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build\ncmake "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:"/img/YAFree/Zm9GbyjgfoOF2nxz94Bcadmpniq.png",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("问：为什么要创建 build 文件夹?")]),t._v(" "),e("p",[t._v("答： cmake 和 make 都会创建大量文件，为了方便管理，通常都会建立一个 build 文件夹，在文件夹内编译，这样所有文件都限制在了 build 文件夹下。 删除也比较好删。")])]),t._v(" "),e("p",[t._v("好了，我们来执行一下吧，在 build 文件夹内，执行（惊！才发现文件名打错了，不重要。。懒得改了）")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("./src/hello\n")])])]),e("p",[e("img",{attrs:{src:"/img/YAFree/VENTbbOD8oo8XtxheEYc2Sr9nzc.png",alt:""}})]),t._v(" "),e("p",[t._v("ok, 就是这么简单。")]),t._v(" "),e("blockquote",[e("p",[t._v("Tips：删除文件可以尝试不直接使用 rm，而是使用工具 trash-cli : "),e("a",{attrs:{href:"https://cyrusyip.org/zh-cn/post/2020/12/12/trash-cli-manual/",target:"_blank",rel:"noopener noreferrer"}},[t._v("trash-cli 中文手册"),e("OutboundLink")],1)])]),t._v(" "),e("h4",{attrs:{id:"debug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[t._v("#")]),t._v(" Debug")]),t._v(" "),e("p",[t._v("现在，让我们来尝试使用 CMake Tool 进行 Debug.")]),t._v(" "),e("p",[t._v("首先，点开 cmake 插件")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/LIuybxHcyoYiisxY93Gck63In4c.png",alt:""}})]),t._v(" "),e("p",[t._v("选择你的编译器，配置所有项目，然后再按一下右边的生成所有项目，结果如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/U9FHb5haSoJWkgxs1i7c0Og4nKd.png",alt:""}})]),t._v(" "),e("p",[t._v("你会发现生成了一个可调试的项目，现在，打上断点，然后再项目上按下右键，调试，开启 Debug 之旅吧。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/LAM7bJ2rxoDXHdxWhVNcunpenob.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/YAFree/C6tAbDcD6oohnJxurTZcOZRWnpf.png",alt:""}})]),t._v(" "),e("p",[t._v("注意，调试时最好需要开启 debug 模式，不然编译器可能会优化你的代码，让你的调试流程看起来非常抽象。。。具体情况等你深入了解后自然就懂，遇到不会的问题或者异常，请咨询 GPT。")])])}),[],!1,null,null,null);e.default=_.exports}}]);