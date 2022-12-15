---
layout: Post
title: vue-render
subTitle: vue中的渲染函数
date: 2022-12-13
useHeaderImage: true
headerImage: /img/in-post/2022-12-13/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - render函数
  - vue
---

<!-- #### 1、疑惑 -->

最近在 vue3 项目开发中，发现内置函数式 Loading 组件按说明文档使用，不生效，于是打开源码发现了以下代码：

```js
...
import { h, render, createVNode } from 'vue'
...
```

除了`h`,其他两个都不认识。在 vue2 时代，选项式 Api 中有一个 render 选项，参数为 h,其作用为生成虚拟 dom：

```js
...
render(h){
  return h('h1')
}
...
```

vue3 中的 `h` 与 vue2 中的 `h`是等价的,都是生成虚拟 dom，那么 `createVNode` 是什么呢？按字面意思也是生成虚拟 dom,经过一番百度，有的人说`createVNode`是`h`的升级版，有更多的功能，且性能更好，但是我在官方文档中找到了更权威的回答：
![](/img/in-post/2022-12-13/1.jpg)
也就是说，`h` 是 `createVNode` 的简写。经过验证，我把项目中的`h`都替换为`createVNode`，都能正常运行。

再下来就是`render`,经过一番查阅，得出结论：将虚拟 dom 转换为真实 dom：

```js
// 生产虚拟dom
let vm = h('h1')
// 转换为真实dom,有两个参数
// 1:虚拟dom
// 2:挂载的dom
render(vm, document.createElement('div'))
```

上面的代码执行后，挂载过的 `vnode` 就有 `el` 属性，`vnode` 中的 `el` 属性就是挂载 `vnode` 对应的真实 `dom`，在你想用的时候，只需要把真实 `dom` 挂载到页面即可：

```js
 body.appendChild(vm.el as HTMLElement);
 // 此时body上就会挂载一个h1标签

```
