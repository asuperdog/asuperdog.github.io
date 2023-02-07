// 标签栏切换
// 获取元素对象
let tab_list = document.querySelector('.detail_tab_list');
let lis = tab_list.querySelectorAll('li');
let items = document.querySelectorAll('.item');

// for循环绑定点击事件
for (let i = 0; i < lis.length; i++) {
  lis[i].setAttribute('index', i);
  // 清除所有li的类 给自己设置类
  lis[i].onclick = function() {
    for (let i = 0; i < lis.length; i++) {
      lis[i].className = '';
    }
    this.className = 'current';
    // 显示对应的内容
    let index = this.getAttribute('index');
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
    }
    items[i].style.display = 'block';
  };
};

// 商品放大镜
// 获取元素对象
let mask = document.querySelector('.mask'); // 遮罩层
let preview = document.querySelector('.preview_img'); // 原图
let bigPicDiv = document.querySelector('.big'); // 大图所在的盒子
let bigPic = document.querySelector('.bigimg'); // 大图

// 鼠标移动时打开遮罩
preview.onmousemove = function(event) {
  mask.style.display = 'block';
  bigPic.style.display = 'block';

  // 获得遮罩层移动距离
  let maskX = event.pageX - preview.offsetLeft - mask.offsetWidth / 2;
  let maskY = event.pageY - preview.offsetTop - mask.offsetHeight / 2;

  // 遮罩层最大移动距离
  let maskMaxX = preview.offsetWidth - mask.offsetWidth;
  let maskMaxY = preview.offsetHeight - mask.offsetHeight;

  // 限制遮罩层移动范围
  if (maskX < 0) {
    maskX = 0;
  } else if (maskX > maskMaxX) {
    maskX = maskMaxX;
  }

  if (maskY < 0) {
    maskY = 0;
  } else if (maskY >= maskMaxY) {
    maskY = maskMaxY;
  }

  // 让放大镜随鼠标移动
  mask.style.left = maskX + 'px';
  mask.style.top = maskY + 'px';
  bigPicDiv.style.display = 'block';

  // 大图的最大移动距离
  let bigPicMax = bigPic.offsetWidth - bigPicDiv.offsetWidth;

  // 大图的移动距离 = 遮罩层移动距离 * 大图的最大移动距离 / 遮罩层最大移动距离
  let bigPicX = maskX * bigPicMax / maskMaxX;
  let bigPicY = maskY * bigPicMax / maskMaxY;
  // 大图的移动距离(反向移动 即放大镜向左 大图向右)
  bigPic.style.left = -bigPicX + 'px';
  bigPic.style.top = -bigPicY + 'px';
}

// 鼠标移出图片关闭遮罩
preview.onmouseleave = function() {
  mask.style.display = 'none';
  bigPicDiv.style.display = 'none';
};
