
# background 的常见背景属性

**css2.1** 中，常见的背景属性有以下几种：（经常用到，要记住）

- `background-color:#ff99ff;`  设置元素的背景颜色。

- `background-image:url(images/2.gif);` 将图像设置为背景。

- `background-repeat: no-repeat;`  设置背景图片是否重复及如何重复，默认平铺满。（重要）
  - `no-repeat`不要平铺；
  - `repeat-x`横向平铺；
  - `repeat-y`纵向平铺。

- `background-position:center top;` 设置背景图片在当前容器中的位置。

- `background-attachment:scroll;` 设置背景图片是否跟着滚动条一起移动。
属性值可以是：`scroll`（与fixed属性相反，默认属性）、`fixed`（背景就会被固定住，不会被滚动条滚走）。

- 另外还有一个综合属性叫做`background`，它的作用是：将上面的多个属性写在一个声明中。

**CSS3** 中，新增了一些background属性：

- background-origin

- background-clip 背景裁切

- background-size 调整尺寸

- 多重背景

上面这几个属性经常用到，需要记住。现在我们逐个进行讲解。

## background-color：背景颜色的表示方法

css2.1 中，颜色的表示方法有三种：单词、rgb表示法、十六进制表示法。

比如红色可以有下面的三种表示方法：

```css
 background-color: red;
 background-color: rgb(255,0,0);
 background-color: #ff0000;
```

CSS3 中，有一种新的表示颜色的方式：RGBA或者HSLA。

RGBA、HSLA可应用于**所有**使用颜色的地方。

下面分别介绍。

### 用英语单词表示

能够用英语单词来表述的颜色，都是简单颜色，比如red、green、blue、orange、gray等。代码举例：

```css
background-color: red;
```

### RGB 表示法

RGB 表示三原色“红”red、“绿”green、“蓝”blue。

光学显示器中，每个像素都是由三原色的发光原件组成的，靠明亮度不同调成不同的颜色的。r、g、b的值，每个值的取值范围0~255，一共256个值。

比如红色：

```css
background-color: rgb(255,0,0);
```

黑色：

```css
background-color: rgb(0,0,0);
```

颜色可以叠加，比如黄色就是红色和绿色的叠加：

```css
background-color: rgb(255,255,0);
```

### RGBA 表示法

```css
background-color: rgba(0, 0, 255, 0.3);
border: 30px solid rgba(0, 255, 0, 0.3);
```

**代码解释**：

- RGBA 即：Red 红、Green 绿、Blue 蓝、Alpha 透明度。

- R、G、B 的取值范围是：0~255；透明度的取值范围是 0~1。

**RGB色彩模式：**

- 自然界中所有的颜色都可以用红、绿、蓝(RGB)这三种颜色波长的不同强度组合而得，这就是人们常说的三原色原理。
- RGB三原色也叫加色模式，这是因为当我们把不同光的波长加到一起的时候，可以得到不同的混合色。例：红+绿=黄色，红+蓝＝紫色，绿+蓝=青。
- 在数字视频中，对RGB三基色各进行8位编码就构成了大约1678万种颜色，这就是我们常说的真彩色。所有显示设备都采用的是RGB色彩模式。
- RGB各有256级(0-255)亮度，256级的RGB色彩总共能组合出约1678万种色彩，即256×256×256=16777216。

### 十六进制表示法

比如红色：

```css
background-color: #ff0000;
```

PS:所有用`#`开头的值，都是16进制的。

这里，我们就要学会16进制与10进制之间的转换。下面举几个例子。

问：16进制中28等于10进制多少？
答：2*16+8 = 40。

16进制中的af等于10进制多少？
答：10 * 16 + 15 = 175

所以，#ff0000就等于rgb(255,0,0)。

`background-color: #123456;`等价于`background-color: rgb(18,52,86);`

**十六进制可以简化为3位，所有#aabbcc的形式，能够简化为#abc**。举例如下：

比如：

```css
 background-color:#ff0000;
```

等价于：

```css
 background-color:#f00;
```

比如：

```css
 background-color:#112233;
```

等价于：

```css
 background-color:#123;
```

但是，比如下面这个是无法简化的：

```css
 background-color:#222333;
```

再比如，下面这个也是无法简化的：

```css
 background-color:#123123;
```

几种常见的颜色简写可以记住。如下：

```cs
 #000   黑
 #fff   白
 #f00   红
 #222   深灰
 #333   灰
 #ccc   浅灰
```

### HSLA 表示法

举例：

```css
 background-color: hsla(240,50%,50%,0.4);
```

解释：

- `H` 色调，取值范围 0~360。0或360表示红色、120表示绿色、240表示蓝色。

- `S` 饱和度，取值范围 0%~100%。值越大，越鲜艳。

- `L` 亮度，取值范围 0%~100%。亮度最大时为白色，最小时为黑色。

- `A` 透明度，取值范围 0~1。

如果不知道 H 的值该设置多少，我们不妨来看一下**色盘**：

![](https://user-images.githubusercontent.com/30429680/111120869-e2bc7900-85a6-11eb-89d3-aad936fd8ed1.png)

推荐链接：[配色宝典](http://www.uisdc.com/how-to-create-color-palettes)

**关于设置透明度的其他方式：**

（1）`opacity: 0.3;` 会将整个盒子及子盒子设置透明度。也就是说，当盒子设置半透明的时候，会影响里面的子盒子。

（2）`background: transparent;` 可以单独设置透明度，但设置的是完全透明（不可调节透明度）。

## `background-repeat`属性

`background-repeat:no-repeat;`设置背景图片是否重复及如何重复，默认平铺满。属性值可以是：

- `no-repeat`（不要平铺）
- `repeat-x`（横向平铺）
- `repeat-y`（纵向平铺）

不加这个属性时：（即默认时）（背景图片会被平铺满）

PS：padding的区域也是有背景图的。

在搜索引擎上搜“**平铺背景**”，就可以发现，**周期性的图片**可以采用此种方法进行平铺。

## `background-position`属性

`background-position`属性指的是**背景定位**属性。公式如下：

在描述属性值的时候，有两种方式：用像素描述、用单词描述。下面分别介绍。

**1、用像素值描述属性值：**

格式如下：

```css
 background-position:向右偏移量 向下偏移量;
```

属性值可以是正数，也可以是负数。比如：`100px 200px`、`-50px -120px`。

**2、用单词描述属性值：**

格式如下：

```css
 background-position: 描述左右的词 描述上下的词;
```

- 描述左右的词：left、center、right
- 描述上下的词：top 、center、bottom

比如说，`right center`表示将图片放到右边的中间；`center center`表示将图片放到正中间。

比如说，`bottom`表示图片的底边和父亲**底边贴齐**（好好理解）。

## background-attachment 属性

- `background-attachment:scroll;` 设置背景图片是否固定。属性值可以是：
  - `fixed`（背景就会被固定住，不会被滚动条滚走）。
  - `scroll`（与fixed属性相反，默认属性）

### background 综合属性

举例:

```css
 background:red url(1.jpg) no-repeat 100px 100px fixed;
```

等价于：

```css
 background-color:red;
 background-image:url(1.jpg);
 background-repeat:no-repeat;
 background-position:100px 100px;
 background-attachment:fixed;
```

## `background-size`属性：背景尺寸

`background-size`属性：设置背景图片的尺寸。

格式举例：

```css
 /* 宽、高的具体数值 */
 background-size: 500px 500px;

 /* 宽高的百分比（相对于容器的大小） */
 background-size: 50% 50%;   // 如果两个属性值相同，可以简写成：background-size: 50%;

 background-size: 100% auto;  //这个属性可以自己试验一下。

 /* cover：图片始终填充满容器，且保证长宽比不变。图片如果有超出部分，则超出部分会被隐藏。 */
 background-size: cover;

 /* contain：将图片完整地显示在容器中，且保证长宽比不变。可能会导致容器的部分区域为空白。  */
 background-size: contain;
```

这里我们对属性值 `cover` 和 `contain` 进行再次强调：

- `cover`：图片始终**填充满**容器，且保证**长宽比不变**。图片如果有超出部分，则超出部分会被隐藏。

- `contain`：将图片**完整地**显示在容器中，且保证**长宽比不变**。可能会导致容器的部分区域留白。

代码举例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Document</title>
 <style>
  .img_wrap {
   display: flex;
  }

  .img {
   width: 200px;
   height: 200px;
   border:1px solid red;
   background: url(https://user-images.githubusercontent.com/30429680/111120869-e2bc7900-85a6-11eb-89d3-aad936fd8ed1.png) no-repeat;
   margin-right: 20px;
  }

  .div1 {
   background-size: cover;
  }
  .div2{
   background-size: contain;
  }
 </style>
</head>

<body>
 <section class="img_wrap">
  <div class="img div1"></div>
  <div class="img div2"></div>

 </section>
</body>

</html>
```

在上方代码的基础之上，再加一个 `background-position: center`属性之后，图片就会在容器里**居中显示**：

## 背景原点：`background-origin` 属性

`background-origin` 属性：控制背景从什么地方开始显示。

格式举例：

```css

 /* 从 padding-box 内边距开始显示背景图 */
 background-origin: padding-box;           //默认值

 /* 从 border-box 边框开始显示背景图  */
 background-origin: border-box;

 /* 从 content-box 内容区域开始显示背景图  */
 background-origin: content-box;

```

如果属性值设置成了`border-box`，那边框部分也会显示图片哦。

## `background-clip`属性：设置元素的背景（背景图片或颜色）是否延伸到边框下面

格式举例：

`background-clip: content-box;`   超出的部分，将裁剪掉。属性值可以是：

- `border-box` 超出 border-box 的部分，将裁剪掉

- `padding-box` 超出 padding-box 的部分，将裁剪掉

- `content-box` 超出 content-box 的部分，将裁剪掉

假设现在有这样的属性设置：

```css
 background-origin: border-box;

 background-clip: content-box;
```

上方代码的意思是，背景图片从**边框部分**开始加载，但是呢，超出**内容区域**的部分将被裁减掉。

## 同时设置多个背景

我们可以给一个盒子同时设置多个背景，用以逗号隔开即可。可用于自适应局。

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            height: 416px;
            border: 1px solid #000;
            margin: 100px auto;
            /* 给盒子加多个背景，按照背景语法格式书写，多个背景使用逗号隔开 */
            background: url(images/bg1.png) no-repeat left top,
            url(images/bg2.png) no-repeat right top,
            url(images/bg3.png) no-repeat right bottom,
            url(images/bg4.png) no-repeat left bottom,
            url(images/bg5.png) no-repeat center;
        }
    </style>
</head>
<body>
<div class="box"></div>
</body>
</html>
```

## 渐变：background-image

渐变是CSS3当中比较丰富多彩的一个特性，通过渐变我们可以实现许多炫丽的效果，有效的减少图片的使用数量，并且具有很强的适应性和可扩展性。

渐变分为：

- 线性渐变：沿着某条直线朝一个方向产生渐变效果。

- 径向渐变：从一个**中心点**开始沿着**四周**产生渐变效果。

- 重复渐变。

### 线性渐变

格式：

```css

    background-image: linear-gradient(方向, 起始颜色, 终止颜色);

    background-image: linear-gradient(to right, yellow, green);
```

参数解释：

- 方向可以是：`to left`、`to right`、`to top`、`to bottom`、角度`30deg`（指的是顺时针方向30°）。

格式举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 500px;
            height: 100px;
            margin: 10px auto;
            border: 1px solid #000;
        }

        /* 语法：
            linear-gradient(方向，起始颜色，终止颜色);
            方向：to left   to right  to top   to bottom 　角度　30deg
            起始颜色
            终止颜色
        */
        div:nth-child(1) {
            background-image: linear-gradient(to right, yellow, green);
        }

        /* 不写方向，表示默认的方向是：从上往下 */
        div:nth-child(2) {
            background-image: linear-gradient(yellow, green);
        }

        /* 方向可以指定角度 */
        div:nth-child(3) {
            width: 100px;
            height: 100px;
            background-image: linear-gradient(135deg, yellow, green);
        }

        /* 0%的位置开始出现黄色，40%的位置开始出现红色的过度。70%的位置开始出现绿色的过度，100%的位置开始出现蓝色 */
        div:nth-child(4) {
            background-image: linear-gradient(to right,
            yellow 0%,
            red 40%,
            green 70%,
            blue 100%);

        }

        /* 颜色之间，出现突变 */
        div:nth-child(5) {
            background-image: linear-gradient(45deg,
            yellow 0%,
            yellow 25%,
            blue 25%,
            blue 50%,
            red 50%,
            red 75%,
            green 75%,
            green 100%
            );
        }

        div:nth-child(6) {
            background-image: linear-gradient(to right,
            #000 0%,
            #000 25%,
            #fff 25%,
            #fff 50%,
            #000 50%,
            #000 75%,
            #fff 75%,
            #fff 100%
            );

        }

    </style>
</head>
<body>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</body>
</html>
```

**举例**：按钮

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS3 渐变</title>
    <style>
        html, body {
            height: 100%;
        }

        body {
            margin: 0;
            padding: 0;
            background-color: #f8fcd4;
        }

        .nav {
            width: 800px;
            text-align: center;
            padding-top: 50px;
            margin: 0 auto;
        }

        /*设置按钮基本样式*/
        .nav a {
            display: inline-block;
            width: 100px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            color: #fff;
            text-decoration: none;
            border: 1px solid #e59500;
            background-color: #FFB700;
            background-image: linear-gradient(
                    to bottom,
                    #FFB700 0%,
                    #FF8C00 100%
            );
        }

    </style>
</head>
<body>
<div class="nav">
    <a href="javascript:;">导航1</a>
    <a href="javascript:;">导航2</a>
    <a href="javascript:;">导航3</a>
    <a href="javascript:;">导航4</a>
    <a href="javascript:;">导航5</a>
    <a href="javascript:;">导航6</a>
</div>
</body>
</html>
```

### 径向渐变

格式：

```css
 background-image: radial-gradient(辐射的半径大小, 中心的位置, 起始颜色, 终止颜色);

 background-image: radial-gradient(100px at center,yellow ,green);

```

解释：围绕中心点做渐变，半径是150px，从黄色到绿色做渐变。

中心点的位置可以是：at  left  right  center bottom  top。如果以像素为单位，则中心点参照的是盒子的左上角。

当然，还有其他的各种参数。格式举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 250px;
            height: 250px;
            border: 1px solid #000;
            margin: 20px;
            float: left;
        }

        /*
            径向渐变：
            radial-gradient（辐射的半径大小, 中心的位置，起始颜色，终止颜色）;
            中心点位置：at  left  right  center bottom  top
        */

        /*辐射半径为100px，中心点在中间*/
        div:nth-child(1) {
            background-image: radial-gradient(100px at center, yellow, green);
        }

        /*中心点在左上角*/
        div:nth-child(3) {
            background-image: radial-gradient(at left top, yellow, green);
        }

        div:nth-child(2) {
            background-image: radial-gradient(at 50px 50px, yellow, green);
        }

        /*设置不同的颜色渐变*/
        div:nth-child(4) {
            background-image: radial-gradient(100px at center,
            yellow 0%,
            green 30%,
            blue 60%,
            red 100%);
        }

        /*如果辐射半径的宽高不同，那就是椭圆*/
        div:nth-child(5) {
            background-image: radial-gradient(100px 50px at center, yellow, green);
        }

    </style>
</head>
<body>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
</body>
</html>
```

**举例：**利用径向渐变和边框圆角的属性，生成按钮。代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS3 渐变</title>
    <style>

        div:nth-child(1) {
            width: 200px;
            height: 200px;
            margin: 40px auto;
            border-radius: 100px;
            background-color: yellowgreen;
        }

        div:nth-child(2) {
            width: 200px;
            height: 200px;
            margin: 40px auto;
            border-radius: 100px;
            background-color: yellowgreen;
            background-image: radial-gradient(
                    200px at 100px 100px,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0.5)
            );
        }
    </style>
</head>
<body>
<div></div>
<div></div>
</body>
</html>
```

## clip-path：裁剪出元素的部分区域做展示

`clip-path`属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。

虽然`clip-path`不是背景属性，但这个属性非常强大，但往往会结合背景属性一起使用，达到一些效果。

`clip-path`属性的好处是，即使做了任何裁剪，**容器的占位大小是不变的**。

### clip-path: circle

```css
  /*语法*/
  circle( [ <shape-radius> ]? [ at <position> ]? )
  /*说明
  circle()可以传人2个可选参数；
  1. 圆的半径，默认元素宽高中短的那个为直径，支持百分比
  2. 圆心位置，默认为元素中心点*/
  /*半径公式
  如果半径使用百分比：圆的半径 = (sqrt(width^2+height^2)/sqrt(2)) * 百分比*/
  
  /*示例*/
  clip-path: circle(30% at 150px 120px);
```

举例：（鼠标悬停时，放大裁剪的区域）

```css
    .div1 {
        width: 320px;
        height: 320px;
        border: 1px solid red;
        background: url(https://user-images.githubusercontent.com/30429680/111120869-e2bc7900-85a6-11eb-89d3-aad936fd8ed1.png) no-repeat;
        background-size: cover;

        /* 裁剪出圆形区域 */
        clip-path: circle(50px at 100px 100px);
        transition: clip-path .4s;
    }
    .div1:hover{
        /* 鼠标悬停时，裁剪出更大的圆形 */
        clip-path: circle(80px at 100px 100px);
    }
```

### clip-path: polygon()

```css
  /*语法*/
  polygon( <fill-rule>? , [ <length-percentage> <length-percentage> ]# )
  /*说明
  <fill-rule>可选，表示填充规则用来确定该多边形的内部。可能的值有nonzero和evenodd,默认值是nonzero
  后面的每对参数表示多边形的顶点坐标（X,Y），也就是连接点*/
  
  /*示例*/
  clip-path: polygon(50% 0,100% 50%,0 100%);
```

`clip-path: polygon()`举例：

```css
    .div1 {
        width: 320px;
        height: 320px;
        border: 1px solid red;
        background: url(https://user-images.githubusercontent.com/30429680/111120869-e2bc7900-85a6-11eb-89d3-aad936fd8ed1.png) no-repeat;
        background-size: cover;

        /* 裁剪出圆形区域 */
        clip-path: circle(50px at 100px 100px);
        transition: clip-path .4s;
    }
    .div1:hover{
        /* 鼠标悬停时，裁剪出更大的圆形 */
        clip-path: circle(80px at 100px 100px);
    }
```

### clip-path: inset()

```css
  /*语法*/
  inset( <length-percentage>{1,4} [ round <border-radius> ]? )
  /*说明
  inset()可以传入5个参数，分别对应top,right,bottom,left的裁剪位置,round radius（可选，圆角）*/
  
  /*示例*/
  clip-path: inset(2em 3em 2em 1em round 2em);
```

进度条举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  #outer{
    width: 400px;
    height: 40px;
    border: 1px #222222 solid;
  }
  #progressDiv{
    width: 400px;
    height: 40px;
    background-color: coral;
    text-align: center;
    line-height: 50px;
    position:absolute;
    clip-path: inset(0px,0px,0px,0px);
  }
  p{
    display: inline;
    position: absolute;
    left: 200px;
    top: 2px;
    margin-left: 10px;
  }
</style>
<script>
  var start = 0;
  var progressApi = setInterval(() => {
    start = start + 1;
    if (start >= 101){
      clearInterval(progressApi);
    }else{
      var progressDiv = document.getElementById("progressDiv");
      var progressText = document.getElementById("progressText");
      progressText.innerText = start+"%";
      progressText.style.position = "absolute";
      progressText.style.left = start/100*400+"px";
      progressDiv.style.clipPath = "inset(0px,"+start/100*400+'px'+",50px,0px)";
    }
  }, 30);
</script>
<body>
  <div id="outer">
    <div id="progressDiv"></div>
    <p id="progressText">%</p>
  </div>
</body>
</html>
```

### clip-path: ellipse()

```css
  /*语法*/
  ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
  /*说明
  ellipse()可以传人3个可选参数；
  1. 椭圆的X轴半径，默认是宽度的一半，支持百分比
  2. 椭圆的Y轴半径，默认是高度的一半，支持百分比
  3. 椭圆中心位置，默认是元素的中心点*/
  
  /*示例*/
  clip-path: ellipse(45% 30% at 50% 50%);
```
