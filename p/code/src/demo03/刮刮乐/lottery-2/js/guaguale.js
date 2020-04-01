window.onload=function()
{
	var container = document.getElementById("background");
	if (container == null) alert("HELLO NULL");
	var num=Math.random()*100;//产生0-100的随机数
	if(num<10){
		container.style.background="url(img/one.png)"
	}else if(num>=10&&num<30){
		container.style.background="url(img/two.png)"
	}else if(num>=30&&num<60){
		container.style.background="url(img/three.png)"
	}else{
		container.style.background="url(img/none.png)"
	}
	console.log(container.style.background);
	
	function createCanvas(parent,width,height){
	var canvas={};//创建名为canvas的对象
	canvas.node=document.createElement('canvas');//对象中的node为新canvas		的引用
	canvas.context=canvas.node.getContext('2d');//对象中的context为新			canvas的上下文
	canvas.node.width=width||100;//设置新canvas的宽度
	canvas.node.height=height||100;//设置新canvas的高度
	parent.appendChild(canvas.node);//把新canvas加到parent的末节点上
	return canvas;//返回这个对象
}
	var widthAll=parseInt(getStyle(container,'width'));//获取div宽
var heightAll=parseInt(getStyle(container,'height'));//获取div高
var canvas=createCanvas(container,widthAll,heightAll);//创建canvas
console.log(widthAll);//将div宽打印出来
console.log(heightAll); //将div高打印出来
	function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]; //IE只支持此方法
	}else{
		return getComputedStyle(obj,false)[attr];//IE不支持此方法
	}
}
	var ctx=canvas.context;//获取上下文
ctx.fillStyle="#696968";//设置矩形颜色
ctx.fillRect(0,0,widthAll,heightAll);//绘制矩形

//自定义原有的fillCircle函数
ctx.fillCircle=function(x,y,radius,fillColor){ 
	ctx.globalCompositeOperation='destination-out';//使图形所在地方透明
	ctx.fillStyle=fillColor;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.arc(x,y,radius,0,Math.PI*2,false);
	ctx.fill();
}
//判断平台，判断是否绘画，获取坐标
//获取浏览器HTTP 请求的用户代理头的值并赋值给变量u，让变量type默认值为PC
var u=navigator.userAgent,type='PC'; 
//如果u值中出现了iphone，使type的值为iphone。
if(u.indexOf('iphone')>-1) type='iphone';
//如果u值中出现了Android或Linux，使type的值为Android。
if(u.indexOf('Android')>-1||u.indexOf('Linux')>-1) type='Android';
//给动态创建出来的canvas添加监听事件
//当用户进行鼠标按下或用手指按压时，使canvas.isDrawing=true。
canvas.node.addEventListener(type=='PC'?"mousedown":"touchStart",function(e){canvas.isDrawing=true;},false);
//当用户进行鼠标抬起或用手指抬起时，使canvas.isDrawing=false。
canvas.node.addEventListener(type=='PC'?"mouseup":"touchend",function(e){canvas.isDrawing=false},false);
//当用户进行鼠标移动或用手指移动时，判断canvas.isDrawing的值是否为true，获取鼠标或手指的坐标。
canvas.node.addEventListener(type=='PC'?"mousemove":"touchmove",function(e){
		if(!canvas.isDrawing) return;
		var x,y;
		if(type=='PC'){
			x=e.pageX-this.offsetLeft;
			y=e.pageY-this.offsetTop;
		}else{
			x=e.changeTouches[0].pageX-this.offsetLeft;
			y=e.changeTouches[0].pageX-this.offsetTop;
		}
		ctx.fillCircle(x,y,20,'#ff0000');
	},false);
}//将div奖项图地址打印出来}