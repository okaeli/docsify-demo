// change theme
var skin = document.querySelector('.skin');
skin.onmouseover = function(){
  skin.style.backgroundColor = "rgb(245, 135, 71)";
}
skin.onmouseout = function(){
  skin.style.backgroundColor = "#49b1f5";
}
var skinList = document.querySelector('.skinList');
skin.onclick = function (){
  if (skinList.style.display == "block"){
    skinList.style.display = "none";
  }else{
    skinList.style.display="block";
  }
}
let pBtn = document.querySelector('.ulList');
  // 利用事件代理机制能够提高性能
  pBtn.addEventListener('click', el => {
  // 将theme的值保存到dataset中
    let theme = el.target.dataset.theme;
    var kyudai = el.target.parentNode.children;
    var kyodai = [...kyudai];
    kyodai.forEach(element => {
      element.style.backgroundColor = "#49b1f5"
    });
    el.target.style.backgroundColor = "rgb(245, 135, 71)"
    
    changeStyle(theme);
  });

function changeStyle(t) {
  var styles = document.querySelectorAll("link");
  var styleLink = [...styles]
  styleLink.forEach(function(item,index) {
    item.disabled = true;
    item.disabled = item.title != t;
    if (item.title == "extend1"){
      item.disabled = false;
    }
  });
  return false;
}

// 回到顶部
var toTop = document.querySelector('.top');
var timer = null;
var target = 0; //目标位置
var leader = 0; //显示区域自身的位置
window.onscroll = function moveTop(){
  //被卷去的距离大于200显示小火箭，否则隐藏
  //2.显示隐藏
  if (scroll().top > 200) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
  //每次移动滚动条的时候都给leader赋值，模拟leader获取距离顶部的距离
  leader = scroll().top;
  // 清定时器
  //clearInterval(timer);
}

//缓动跳转到页面最顶端（利用我们的缓动动画）
toTop.onclick = function () {
    //技术点：window.scrollTo(0,0);
    //要用定时器，先清定时器
    clearInterval(timer);
    timer = setInterval(function () {
        //获取步长
        var step = (target - leader) / 3;
        //二次处理步长
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step; //往上移动的过程中，step是负数。当前位置减去步长，就等于下一步的位置。
        //显示区域移动
        window.scrollTo(0, leader);
        //清除定时器
        if (leader === 0) {
            clearInterval(timer);
        }
    }, 25);
}

//函数：获取scrollTop和scrollLeft的值
function scroll() {  // 开始封装自己的scrollTop
    if (window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}