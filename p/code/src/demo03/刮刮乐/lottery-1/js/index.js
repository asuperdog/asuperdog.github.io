/**
 * Created by Ouyang on 2016/3/25.
 * @email 526694043@qq.com
 */

var core ={

    /**��Ʒ����*/
    listGifts: [],
    /**�ι�������*/
    container: null,
    /**����*/
    canvas: null,
    /**����Ƿ��ٴν��йν�*/
    tag: true,
    /**�ܸ���*/
    countProbability: 100,

    /**��ʼ��*/
    init: function(){
        core.container = document.getElementById("background");
        if(core.container == null){
            console.log("program is null")
        }
        console.log(navigator.userAgent);
        core.listGifts.push(new Gift(1, "g1", "1 bonus", 0, 1.0));
        core.listGifts.push(new Gift(2, "g2", "2 bonus", 1.0, 20.0));
        core.listGifts.push(new Gift(3, "g3", "3 bonus", 20.0, 50.0));
        core.listGifts.push(new Gift(4, "g4", "4 bonus", 50.0, 100.0));

        var containerWidth = parseInt(core.getStyle(core.container, 'width'));
        var containerHeight = parseInt(core.getStyle(core.container, 'height'));
        core.canvas = core.createCanvas(core.container, containerWidth, containerHeight);

        console.log("contWidth: " + containerWidth);
        console.log("contHeight: " + containerHeight);

        var size = core.listGifts.length;
        core.countProbability = core.listGifts[size - 1].getEndArea();

        var ctx = core.canvas.context;
        ctx.fillStyle = "#696968";
        ctx.fillRect(0, 0, containerWidth, containerHeight);
        ctx.fillCircle = function (x, y, radius, fillColor) {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = fillColor;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.arc(x, y, radius, 0, Math.PI * 2, false);
            ctx.fill();
        };
        this.initEvent(this.getDeviceType());
        //this.test();
    },
    test: function () {
        var canvas_1 = document.getElementById("myCanvas");
        var ctx = canvas_1.getContext("2d");
        console.log(ctx);
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(100,0);
        ctx.lineTo(0, 200);
        ctx.closePath();
        ctx.fillStyle = "green";
        ctx.fill();
    },
    /**
     * ��ʼ��ע���¼�
     * ��2�������¼�
     * PC/�ƶ���
     * */
    initEvent: function (type) {
        console.log(type);
        core.canvas.node.addEventListener( type == DEVICE_CONFIG.CHROME ? "mousedown" : "touchstart", function (event) {
            core.canvas.isDrawing = true;
        });
      //  core.canvas.node.addEventListener( type == DEVICE_CONFIG.CHROME ? "mouseup" : "touchend", function (event) {
      //      core.canvas.isDrawing = false;
      //  });
        core.canvas.node.addEventListener( type == DEVICE_CONFIG.CHROME ? "mousemove" : "touchmove", function (event) {
            if(!core.canvas.isDrawing){
                return;
            }
            var x, y;
            if(type == DEVICE_CONFIG.CHROME){
                x = event.pageX - this.offsetLeft;
                y = event.pageY - this.offsetTop;
            }else{
                x = event.touches[0].pageX - this.offsetLeft;
                y = event.touches[0].pageY - this.offsetTop;
            }
            core.canvas.context.fillCircle(x, y, 20, "#CCCCFF");
            if(core.tag){
                var random = Math.random() * core.countProbability;
                core.equalRaw(core.iterator(core.listGifts), random);
                core.tag = false;
            }
        });
    },

    /**��������*/
    createCanvas: function (parent, width, height) {
        var canvas = {};
        canvas.node = document.createElement("canvas");
        canvas.context = canvas.node.getContext("2d");
        canvas.node.width = width || 100;
        canvas.node.height = height || 100;
        parent.appendChild(canvas.node);
        return canvas;
    },

    /**
     * ��ö�����ʽ - ���ݷ���
     * */
    getStyle: function (object, attr) {
        if(object.currentStyle){
            return object.currentStyle[attr]; //IE�ſ�����
        }else{
            return getComputedStyle(object, false)[attr];
        }
    },

    /**
     * ���ֵ���Ƚ�����
     * */
    equalRaw: function (giftIterator, raw) {
        if(giftIterator.hasNext()){
            var gift = giftIterator.next();
            if(raw > gift.getStartArea() && raw < gift.getEndArea()){
                switch (gift.getIndex()){
                    case 1:
                        core.container.style.background = "url(img/one.png)";
                        break;
                    case 2:
                        core.container.style.background = "url(img/two.png)";
                        break;
                    case 3:
                        core.container.style.background = "url(img/three.png)";
                        break;
                    case 4:
                        core.container.style.background = "url(img/none.png)";
                        break;
                    default :
                        break;
                }
                console.log("lottery: " + gift.getGiftName());
                return;
            }
            core.equalRaw(giftIterator, raw);
        }
    },

    /**
     * ����������
     * */
    iterator: function (array) {
        var index = 0;

        return {
            hasNext: function(){
                return index < array.length;
            },
            next: function(){
                //console.log("iterator-index: " + index);
                return this.hasNext() ? array[index++] : null;
            },
            current: function(){
                return array[index];
            }
        }
    },

    /**
     * ��õ�ǰ�豸����
     * ʣ��2��android��WindoesPhone�������������
     * */
    getDeviceType: function () {
        var userAgent =  navigator.userAgent.toLocaleLowerCase();
        if(userAgent.match(/MicroMessager/i) == "micrcomeeager"){
            return DEVICE_CONFIG.WEIXING;
        }else if(userAgent.match(/chrome\/([\d.]+)/) != null){
            return DEVICE_CONFIG.CHROME;
        }else if(userAgent.match(/applewebkit\/([\d.]+)/) != null){
            return DEVICE_CONFIG.IOS;
        }else if(false){
            return DEVICE_CONFIG.ANDROID;
        }else if(false){
            return DEVICE_CONFIG.WP;
        }
        return DEVICE_CONFIG.CHROME;
    },

    /**����*/
    tsetProgram: function(){

    }

};

/**
 * ��Ʒ����
 * */
function Gift(index, id, name, startArea, endArea){
    this.index = index;
    this.id = id;
    this.name = name;
    this.startArea = startArea;
    this.endArea = endArea;
}

Gift.prototype.getIndex = function () {
    return this.index;
};

Gift.prototype.getGiftName = function () {
    return this.name;
};

Gift.prototype.getId = function () {
    return this.id;
};

Gift.prototype.getStartArea = function () {
    return this.startArea;
};

Gift.prototype.getEndArea = function () {
    return this.endArea;
};

Gift.prototype.toString = function () {
    return "Gift: " + "index=" + this.index
                + ", id=" + this.id
                + ", name=" + this.name
                + ", startArea=" + this.startArea
                + ", endArea=" + this.endArea;
};

/**
 * �豸�������ñ�
 * */
var DEVICE_CONFIG = {
    WEIXING : "weixing",
    CHROME : "chrome",
    PC: "PC",
    ANDROID: "android",
    IOS: "iphone",
    WP: "",
    MOBILE: ""
};
//core.canvas.node.onmousedown = function (event) {
//    core.canvas.isDrawing = true;
//};
//core.canvas.node.onmouseup = function(event){
//    core.canvas.isDrawing = false;
//};
//core.canvas.node.onmousemove = function (event) {
//    if(!core.canvas.isDrawing){
//        return;
//    }
//    var x, y;
//    x = event.pageX - this.offsetLeft;
//    y = event.pageY - this.offsetTop;
//    ctx.fillCircle(x, y, 20, "#CCCCFF");
//    if(core.tag){
//        var random = Math.random() * core.countProbability;
//        core.equalRaw(core.iterator(core.listGifts), random);
//        core.tag = false;
//    }
//};