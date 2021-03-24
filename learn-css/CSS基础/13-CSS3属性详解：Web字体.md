
## 字体的常见格式

> 不同浏览器所支持的字体格式是不一样的，我们有必要了解一下字体格式的知识。

### TureTpe格式：(**.ttf**)

.ttf 字体是Windows和Mac的最常见的字体，是一种RAW格式。

支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome4+、Safari3+、Opera10+、iOS Mobile、Safari4.2+。

### OpenType格式：(**.otf**)

.otf 字体被认为是一种原始的字体格式，其内置在TureType的基础上。

支持这种字体的浏览器有Firefox3.5+、Chrome4.0+、Safari3.1+、Opera10.0+、iOS Mobile、Safari4.2+。

### Web Open Font Format格式：(**.woff**)

woff字体是Web字体中最佳格式，他是一个开放的TrueType/OpenType的压缩版本，同时也支持元数据包的分离。

支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome6+、Safari3.6+、Opera11.1+。

### Embedded Open Type格式：(**.eot**)

.eot字体是IE专用字体，可以从TrueType创建此格式字体，支持这种字体的浏览器有IE4+。

### SVG格式：(**.svg**)

.svg字体是基于SVG字体渲染的一种格式。

支持这种字体的浏览器有Chrome4+、Safari3.1+、Opera10.0+、iOS Mobile Safari3.2+。

下载字体的网站推荐：

- <http://www.zhaozi.cn/>

- <http://www.youziku.com/>

## WebFont 的使用步骤

（1）第一步：使用font-face声明字体

```css
@font-face {font-family: 'webfont';
    src: url('webfont.eot'); /* IE9*/
    src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('webfont.woff') format('woff'), /* chrome、firefox */
    url('webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('webfont.svg#webfont') format('svg'); /* iOS 4.1- */
}
```

（2）第二步：定义使用webfont的样式

```css
.web-font{
    font-family:"webfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
```

（3）第三步：为文字加上对应的样式

```html
<i class="web-font">这一分钟，你和我在一起，因为你，我会记得那一分钟。从现在开始，我们就是一分钟的朋友。这是事实，你改变不了，因为已经完成了。</i>
```

**举例：**

我们按照上图中的步骤来，引入这个字体。完整版代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>

        p{
            font-size:30px;
        }

        /*  如果要在网页中使用web字体（用户电脑上没有这种字体）*/
        /* 第一步：声明字体*/
        /* 告诉浏览器 去哪找这个字体*/
        @font-face {font-family: 'my-web-font';
            src: url('font/webfont.eot'); /* IE9*/
            src: url('font/webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('font/webfont.woff') format('woff'), /* chrome、firefox */
            url('font/webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
            url('font/webfont.svg#webfont') format('svg'); /* iOS 4.1- */
        }
        /* 第二步：定义一个类名，谁加这类名，就会使用 webfont 字体*/
        .webfont{
            font-family: 'my-web-font';
        }
    </style>
</head>
<body>
    <!-- 第三步：引用 webfont 字体 -->
    <p class="webfont">demo</p>
</body>
</html>
```