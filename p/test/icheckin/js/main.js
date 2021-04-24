window.onload = function() {
	document.getElementById("stuName").innerText = '梁宇成';
	document.getElementById("stuId").innerText = '1901010221';
	document.getElementById("college").innerText = '软件学院';
	document.getElementById("scanTime").innerText = new Date().format("MM月dd日 hh:mm");
	document.getElementById("randomCode").innerText = new Date().format("hh" + "2995");
};

// 背景图切换
var colorFlag = false;
setInterval(function changeColor() {
	var app = document.querySelector("#app .bg-color");
	if (!colorFlag) {
		app.className = "bg-color s-orange";
	} else {
		app.className = "bg-color s-orange2";
	}
	colorFlag = !colorFlag;
}, 400);

// 日期格式化
Date.prototype.format = function(format) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
	}
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? o[k] : (("00" + o[k]).substr(("" + o[k])
				.length)));
		}
	}
	return format;
};
