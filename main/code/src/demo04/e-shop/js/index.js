// 下拉菜单(配送地区)
let deliver = document.querySelector('.deliver');
let nav = document.querySelector('.city');
let lis = nav.children;

deliver.onmouseover = function() {
  nav.style.display = 'block';
};

nav.onmouseover = function() {
  nav.style.display = 'block';
};

nav.onmouseout = function() {
  nav.style.display = 'none';
};

// 控制电梯导航的显示和隐藏
let toolTop = $('.dropdown').offset().top;
toggleTool();

function toggleTool() {
  if ($(document).scrollTop() >= toolTop) {
    $('.fixedtool').fadeIn();
  } else {
    $('.fixedtool').fadeOut();
    $('.to-top').fadeOut();
  };
};

// 页面滚动时调用的方法
$(window).scroll(function() {
  toggleTool();

  // 页面滚动时激活对应的导航选项
  if (flag) {
    // 遍历页面中与电梯导航对应的每一块内容区域
    $('.elevator').each(function(i, ele) {
      if ($(document).scrollTop() >= $(ele).offset().top) {
        // 将电梯导航中对应选项设为激活的效果 并取消其他选项的效果
        $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
      }
    })
  }
});

// 开启自动滚动
let flag = true;
// 点击某一项时 页面滚动到相应区域
$('.fixedtool li').click(function() {
  flag = false;
  // 根据索引号 计算页面要去往的位置
  let current = $('.elevator').eq($(this).index()).offset().top;
  // 利用动画效果实现页面滚动
  $('body, html').stop().animate({
    scrollTop: current
  }, function() {
    flag = true;
    // 设为true 表示滚动结束
  });

  // 点击后 为当前li元素添加类 为兄弟元素移除类
  $(this).addClass('current').siblings().removeClass();
});

// 返回顶部
let boxTop = $('.header').offset().top;

$(window).scroll(function() {
  if ($(document).scrollTop() >= toolTop) {
    $('.to-top').fadeIn();
  } else {
    $('.to-top').fadeOut();
  };
});

$('.to-top').click(function() {
  $('body, html').stop().animate({
    scrollTop: 0,
  });
});
