
# 本文主要内容

- CSS 概述
- CSS 和 HTML 结合的三种方式：`行内样式表`、`内嵌样式表`、`外部样式表`
- CSS 四种基本选择器：`标签选择器`、`类选择器`、`ID选择器`、`通用选择器`
- CSS 几种扩展选择器：`后代选择器`、`交集选择器`、`并集选择器`
- CSS 样式优先级

## 前言

## CSS 概述

CSS：Cascading Style Sheet，层叠样式表。CSS 的作用就是给 HTML 页面标签添加各种样式，**定义网页的显示效果**。简单一句话：CSS 将网页**内容和显示样式进行分离**，提高了显示功能。

css 的最新版本是 css3，**我们目前学习的是 css2.1**。 因为 css3 和 css2.1 不矛盾，必须先学 2.1 然后学 3。

接下来我们要讲一下为什么要使用 CSS。

**HTML 的缺陷：**

1. 不能够适应多种设备
2. 要求浏览器必须智能化足够庞大
3. 数据和显示没有分开
4. 功能不够强大

**CSS 优点：**

1. 使数据和显示分开
2. 降低网络流量
3. 使整个网站视觉效果一致
4. 使开发效率提高了（耦合性降低，一个人负责写 html，一个人负责写 css）

### CSS 的重点知识点

盒子模型、浮动、定位

### css 代码的注释

**格式：**

```html
<style type="text/css">
    /*
    具体的注释
    */
    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>
```

注意：CSS 只有`/* */`这种注释，没有`//`这种注释。而且注释要写在`<style>`标签里面才算生效哦。

## CSS 和 HTML 结合的方式（样式表）

CSS 和 HTML 结合的方式，其实就是问你 css 的代码放在哪里比较合适。CSS 代码理论上的位置是任意的，**但通常写在`<style>`标签里**。只要是`<style>`标签里的代码，那就是 css 代码，浏览器就是这样来进行解析的。

CSS 和 HTML 的结合方式有 3 种：

- **行内样式**：在某个特定的标签里采用 style**属性**。范围只针对此标签。
- **内嵌样式表**：在页面的 head 里采用`<style>`**标签**。范围针对此页面。
- **引入外部样式表 css 文件**的方式。这种引入方式又分为两种： - 1、采用`<link>`标签。例如：`<link rel = "stylesheet" type = "text/css" href = "a.css"></link>` - 2、采用 import，必须写在`<style>`标签中，并且必须是第一句。例如：`@import url(a.css) ;`

> 两种引入样式方式的区别：外部样式表中不能写<link>标签，但是可以写 import 语句。

下面来详细的讲一讲这三种方式。

### 1、CSS 和 HTML 结合方式一：行内样式

采用 style 属性。范围只针对此标签适用。

该方式比较灵活，但是对于多个相同标签的同一样式定义比较麻烦，适合局部修改。

举例：

```html
<p style="color:white;background-color:red">demo</p>
```

### 2、CSS 和 HTML 结合方式二：内嵌样式表

在 head 标签中加入`<style>`标签，对多个标签进行统一修改，范围针对此页面。

该方式可以对单个页面的样式进行统一设置，但对于局部不够灵活。

举例：

```html
<style type="text/css">
    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>

<body>
    <p>c</p>
    <p style="color:blue">y</p>
</body>
```

### 3、CSS 和 HTML 结合方式三：引入外部样式表 css 文件

**引入样式表文件**的方式又分为两种：

- （1）**采用`<link>`标签**。例如：`<link rel = "stylesheet" type = "text/css" href = "a.css"></link>`

- （2）**采用 import**，必须写在`<style>`标签中，并且必须是第一句。例如：`@import url(a.css) ;`

> 两种引入样式方式的区别：外部样式表中不能写<link>标签，但是可以写 import 语句。

**具体操作如下：**

我们先在 html 页面的同级目录下新建一个`a.css`文件，那说明这里面的代码全是 css 代码，此时就没有必要再写`<style>`标签这几个字了。
`a.css`的代码如下：

```css
p {
    border: 1px solid red;
    font-size: 40px;
}
```

上方的 css 代码中，注意像素要带上 px 这个单位，不然不生效。
然后我们在 html 文件中通过`<link>`标签引入这个 css 文件就行了。效果如下：

这里再讲一个补充的知识：**`<link>`标签的 rel 属性：**。其属性值有以下两种：

- `stylesheet`：定义的样式表
   `alternate stylesheet`：候选的样式表

看字面意思可能比较难理解，我们来举个例子，一下子就明白了。
举例：

现在我们来定义 3 个样式表：

a.css：定义一个实线的黑色边框

```css
div {
    width: 200px;
    height: 200px;
    border: 3px solid black;
}
```

ba.css：蓝色的虚线边框

```css
div {
    width: 200px;
    height: 200px;
    border: 3px dotted blue;
}
```

c.css：来个背景图片

```css
div {
    width: 200px;
    height: 200px;
    border: 3px solid red;
    background-image: url('1.jpg');
}
```

然后我们在 html 文件中引用三个样式表：

```html
  <link rel = "stylesheet" type = "text/css" href = "a.css"></link>
  <link rel = "alternate stylesheet" type = "text/css" href = "b.css" title="第二种样式"></link>
  <link rel = "alternate stylesheet" type = "text/css" href = "c.css" title="第三种样式"></link>
```

上面引入的三个样式表中，后面两个样式表作为备选。注意备选的样式表中，title 属性不要忘记写，不然显示不出来效果的。

实现一键换肤功能(changeSkin.html)

## CSS 的四种基本选择器

CSS 选择器：就是指定 CSS 要作用的标签，那个标签的名称就是选择器。意为：选择哪个容器。

CSS 的选择器分为两大类：基本选择题和扩展选择器。

**基本选择器：**

- 标签选择器：针对**一类**标签
- ID 选择器：针对某**一个**特定的标签使用
- 类选择器：针对**你想要的所有**标签使用
- 通用选择器（通配符*）：针对所有的标签都适用（不建议使用）

## CSS 的几种高级选择器

**高级选择器：**

- 后代选择器：用空格隔开
- 交集选择器：选择器之间紧密相连
- 并集选择器（分组选择器）：用逗号隔开
- 伪类选择器

下面详细讲一下这几种高级（扩展）选择器。

### 1、后代选择器: 定义的时候用空格隔开

对于`E F`这种格式，表示**所有属于 E 元素后代的 F 元素**，有这个样式。空格就表示后代。

后代选择器，就是一种平衡：共性、特性的平衡。当要把**某一个部分的所有的什么**，进行样式改变，就要想到后代选择器。

后代选择器，描述的是祖先结构。

看定义可能有点难理解，我们来看例子吧。

举例 1：

```html
<style type="text/css">
    .div1 p {
        color: red;
    }
</style>
```

空格就表示后代。`.div1 p` 表示`.div1`的后代所有的`p`。

这里强调一下：这两个标签不一定是连续紧挨着的，只要保持一个后代的关联即可。也就是说，选择的是后代，不一定是儿子。

举例：

```html
<style type="text/css">
    h3 b i {
        color: red;
    }
</style>
```

上方代码的意思是说：定义了`<h3>`标签中的`<b>`标签中的`<i>`标签的样式。
同理：h3 和 b 和 i 标签不一定是连续紧挨着的，只要保持一个后代的关联即可。

### 2、交集选择器：定义的时候紧密相连

定义交集选择器的时候，两个选择器之间紧密相连。一般是以标签名开头，比如`div.haha`，再比如`p.special`。

如果后一个选择器是类选择器，则写为`div.special`；如果后一个选择器 id 选择器，则写为`div#special`。

来看下面这张图就明白了：

```css
h3.special {
    color: red;
}
```

选择的元素要求同时满足两个条件：必须是 h3 标签，然后必须是 special 标签。

举例：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>交集选择器测试</title>
        <style type="text/css">
            h3.special {
                color: red;
            }
        </style>
    </head>
    <body>
        <h3 class="special zhongyao">标题1</h3>
        <h3 class="special">我也是标题</h3>
        <p>我是段落</p>
    </body>
</html>
```

注意，交集选择器没有空格。所以，没有空格的`div.red`（交集选择器）和有空格的`div .red`（后代选择器）不是一个意思。

交集选择器可以连续交：（一般不要这么写）

```css
h3.special.zhongyao {
    color: red;
}
```

上面这种写法，是 IE7 开始兼容的，IE6 不兼容。

### 3、并集选择器：定义的时候用逗号隔开

三种基本选择器都可以放进来。

举例：

```css
p,
h1,
#mytitle,
.one {
    color: red;
}
```

## 一些 CSS3 选择器

> 所有的 CSS3 选择器，我们放在 CSS3 的内容里介绍。本文暂时先接触一部分。

### 1.子代选择器，用符号`>`表示

> IE7 开始兼容，IE6 不兼容。

```css
div > p {
    color: red;
}
```

div 的儿子 p。和 div 的后代 p 的截然不同。

能够选择：

```html
<div>
    <p>我是div的儿子</p>
</div>
```

不能选择：

```html
<div>
    <ul>
        <li>
            <p>我是div的重孙子</p>
        </li>
    </ul>
</div>
```

### 2.序选择器

> IE8 开始兼容；IE6、7 都不兼容

设置无序列表`<ul>`中的第一个`<li>`为红色：

```html
<style type="text/css">
    ul li:first-child {
        color: red;
    }
</style>
```

设置无序列表`<ul>`中的最后一个`<li>`为红色：

```css
ul li:last-child {
    color: blue;
}
```

序选择器还有更复杂的用法，以后再讲。

由于浏览器的更新需要过程，所以现在如果公司还要求兼容 IE6、7，那么就要自己写类名：

```html
<ul>
    <li class="first">项目</li>
    <li>项目</li>
    <li>项目</li>
    <li>项目</li>
    <li>项目</li>
    <li>项目</li>
    <li>项目</li>
    <li>项目</li>
    <li>项目</li>
    <li class="last">项目</li>
</ul>
```

用类选择器来选择第一个或者最后一个：

```css
ul li.first{ color:red; } ul li.last{ color:blue; }
```

### 3.下一个兄弟选择器

> IE7 开始兼容，IE6 不兼容。

`+`表示选择下一个兄弟

```html
<style type="text/css">
    h3 + p {
        color: red;
    }
</style>
```

上方的选择器意思是：选择的是 h3 元素后面紧挨着的第一个兄弟。

```html
<h3>我是一个标题</h3>
<p>我是一个段落</p>
<p>我是一个段落</p>
<p>我是一个段落</p>
<h3>我是一个标题</h3>
<p>我是一个段落</p>
<p>我是一个段落</p>
<p>我是一个段落</p>
<h3>我是一个标题</h3>
<p>我是一个段落</p>
<p>我是一个段落</p>
<p>我是一个段落</p>
<h3>我是一个标题</h3>
```

这种选择器作用不大。
