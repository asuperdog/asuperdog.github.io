
window.onload = () => {//箭头函数
    let canvas = document.querySelector("#canvas"); //获取画布元素
    let cxt = canvas.getContext('2d'); //获取画布的上下文对象，用于绘制
    let a, b, c, d; //用于记录拐点坐标
    let arr = [];//储存基本元素的数组
    let newarr = [];//储存成对元素的数组
    let rows = 0; //当前颜色块的行数
    let cols = 0; //当前颜色块的列数
    let mx; //储存点击事件的x坐标
    let my;//储存点击事件的y坐标
    let barr = [];//储存那些要用于判断颜色的数组，存最多2个元素
    let bindex = [];//储存barr数组的下标

    //默认执行函数
    initYuansu()

    function initYuansu() {
        //创建基本元素
        setYuansu()

        //创建成对元素
        setDouble()

        //打乱和判断
        reorder()

        //增加包围圈
        addSound()

        //绘制元素
        drawYuansu()
    }

    //触发事件
    canvas.onclick = function (e) {
        mx = e.pageX - this.offsetLeft;
        my = e.pageY - this.offsetTop;
        drawImg();
    }

    function drawImg() {
        if (allwhite()) {
            alert("好吧，你赢了");
        }
        cxt.clearRect(0, 0, 500, 500);
        for (let i = 0; i < newarr.length; i++) {
            cxt.fillStyle = newarr[i].color;
            cxt.beginPath();
            let data = newarr[i].x + "," + newarr[i].y + "," + newarr[i].width + "," + newarr[i].height;
            let event1 = new Event(cxt, "rect", data, () => {//箭头函数
                if (i == bindex[0]) {
                    return;
                }
                barr.push(newarr[i]);
                bindex.push(i);
                console.log("barr的长度：" + barr.length);
                if (barr.length == 2) {
                    if (barr[0].color == barr[1].color && bindex[0] != bindex[1]) {
                        let x = barr[0].x;
                        let y = barr[0].y;
                        let m = barr[1].x;
                        let n = barr[1].y;
                        let index0 = bindex[0];
                        let index1 = bindex[1];
                        if ((x == m) || (y == n)) {//无拐点
                            if (noPoint(x, y, m, n, index0, index1)) {
                                strokeLine0(x, y, m, n);
                                window.setTimeout(() => {//箭头函数
                                    myinit();
                                }, 500);
                            } else if (twoPoint(x, y, m, n, index0, index1)) {//双拐点
                                strokeLine2(m, n, x, y, a, b, c, d);
                                window.setTimeout(() => {//箭头函数
                                    myinit();
                                }, 500);
                            } else {
                                barr = [];
                                bindex = [];
                            }
                        } else {
                            if (onePoint(x, y, m, n, index0, index1)) {//单拐点
                                strokeLine1(x, y, m, n, c, d);
                                window.setTimeout(() => {//箭头函数
                                    myinit();
                                }, 500);
                            } else if (twoPoint(x, y, m, n, index0, index1)) {//双拐点
                                strokeLine2(m, n, x, y, a, b, c, d);
                                window.setTimeout(() => {//箭头函数
                                    myinit();
                                }, 500);
                            } else {
                                barr = [];
                                bindex = [];
                            }
                        }
                    } else {
                        barr = [];
                        bindex = [];
                    }
                }
            });
            event1.add(mx, my);
        }
    }

    function setYuansu() {
        for (let i = 0; i < 8; i++) {
            let obj = {
                width: 50,
                height: 50,
                isBorder: false,
                color: "rgba(" + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + ",1)"
            };
            arr.push(obj);
        }
    }

    function setDouble() {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < arr.length; j++) {
                let obj1 = {};//解决传址问题
                for (let att in arr[j]) {
                    obj1[att] = arr[j][att];
                }
                newarr.push(obj1);
            }
        }
    }

    function reorder() {
        //执行打乱方法，并判断元素是否有至少一对相邻颜色相同的色块
        panduan: while (true) {
            daluan(newarr.length);
            for (let i = 0; i < newarr.length; i++) {
                if ((((i + 1) % 4 != 0) && (newarr[i].color == newarr[i + 1].color)) || ((i < 12) && (newarr[i].color == newarr[i + 4].color)))
                    break panduan;
            }
        }
    }

    function addSound() {
        let obj = { width: 50, height: 50, isBorder: true, x: 0, y: 0, color: "rgba(0,0,0,0)" }
        //增加数组包围圈
        for (i = 0; i < 7; i++) {
            let obj1 = {};//解决传址问题
            for (let att in obj) {
                obj1[att] = obj[att];
            }
            newarr.push(obj1);
        }
        for (i = 0; i < 2; i++) {
            let obj1 = {};//解决传址问题
            for (let att in obj) {
                obj1[att] = obj[att];
            }
            newarr.splice(12, 0, obj1);
        }
        for (i = 0; i < 2; i++) {
            let obj1 = {};//解决传址问题
            for (let att in obj) {
                obj1[att] = obj[att];
            }
            newarr.splice(8, 0, obj1);
        }
        for (i = 0; i < 2; i++) {
            let obj1 = {};//解决传址问题
            for (let att in obj) {
                obj1[att] = obj[att];
            }
            newarr.splice(4, 0, obj1);
        }
        for (i = 0; i < 7; i++) {
            let obj1 = {};//解决传址问题
            for (let att in obj) {
                obj1[att] = obj[att];
            }
            newarr.splice(0, 0, obj1);
        }
    }

    //绘制全部图像
    function drawYuansu() {
        for (let i = 0; i < newarr.length; i++) {
            cxt.fillStyle = newarr[i].color;
            cxt.beginPath();
            cxt.fillRect(
                cols * (newarr[i].width),
                rows * (newarr[i].height),
                newarr[i].width, newarr[i].height
            );
            newarr[i].x = cols * (newarr[i].width);
            newarr[i].y = rows * (newarr[i].height);
            cols++;
            if (cols % 6 == 0) {
                rows++;
                cols = 0;
            }
        }
    }

    //自定义Event事件
    function Event(cxt, type, data, callback) {
        this.cxt = cxt;
        this.type = type;
        this.data = data;
        this.callback = callback;
        this.draw();
    }

    Event.prototype = {
        draw() {
            if (this.type == "rect") {
                let a = this.data.split(",");
                cxt.rect(a[0], a[1], a[2], a[3]);
                cxt.fill();
            }
        },
        add (mx, my) {
            //如果坐标在路径中，则调用回调函数
            if (this.cxt.isPointInPath(mx, my))
                this.callback();
        }
    }

    //打乱newarr中所有元素
    function daluan(length) {
        //每次都在数组中随机找一个元素下标，与当前元素交换位置
        for (let i = 0; i < length; i++) {
            let index = parseInt(Math.random() * 1000) % length;
            let temp = newarr[i];
            newarr[i] = newarr[index];
            newarr[index] = temp;
        }
    }

    //判断胜负
    function allwhite() {
        for (let m = 0; m < newarr.length; m++) {
            if (newarr[m].color != "rgba(0,0,0,0)") {
                return false;
            }
        }
        return true;
    }

    function linePathFinding(x, y, m, n, index0, index1) {//index0是(x,y)的下标,index1是(m,n)的下标
        if (x == m) {
            //如果是同列
            if (n - y > 0) {
                //如果(m,n)在(x,y)下面
                for (let ii = 0; ii < ((n - y) / 50) - 1; ii++) {
                    //判断两色块之间是否通行
                    if (newarr[index1 - (ii + 1) * 6].color != "rgba(0,0,0,0)") {
                        return false;
                    }
                }
                return true;

            } else {
                //如果(m,n)在(x,y)上面
                for (let ii = 0; ii < ((y - n) / 50) - 1; ii++) {
                    //判断两色块之间是否通行
                    if (newarr[index0 - (ii + 1) * 6].color != "rgba(0,0,0,0)") {
                        return false;
                    }
                }
                return true;
            }
        } else if (y == n) {
            //如果是同行
            if (m - x > 0) {
                //如果(m,n)在(x,y)右面
                for (let ii = 0; ii < ((m - x) / 50) - 1; ii++) {
                    //判断两色块之间是否通行
                    if (newarr[index1 - (ii + 1)].color != "rgba(0,0,0,0)") {
                        return false;
                    }
                }
                return true;
            } else {
                //如果(m,n)在(x,y)左面
                for (let ii = 0; ii < ((x - m) / 50) - 1; ii++) {
                    //判断两色块之间是否通行
                    if (newarr[index0 - (ii + 1)].color != "rgba(0,0,0,0)") {
                        return false;
                    }
                }
                return true;
            }
        }
    }

    //获取未知坐标(x,y)的下标（求第一个坐标的下标）
    function getIndex(x, y, m, n, index) {
        //假设xy未知,mn已知,index是mn的下标
        if (x == m) {
            //如果是同列
            if (n - y > 0) {
                //如果(m,n)在(x,y)下面
                return index - (n - y) / 50 * 6;
            } else {
                //如果(m,n)在(x,y)上面
                return index + (y - n) / 50 * 6;
            }
        } else if (y == n) {
            //如果是同行
            if (m - x > 0) {
                //如果(m,n)在(x,y)右面
                return index - (m - x) / 50;
            } else {
                //如果(m,n)在(x,y)左面
                return index + (x - m) / 50;
            }
        }
    }

    //没有拐点
    function noPoint(x, y, m, n, index0, index1) {
        if (linePathFinding(x, y, m, n, index0, index1)) {
            return true;
        } else {
            return false;
        }
    }

    //一个拐点
    function onePoint(x, y, m, n, index0, index1) {
        //c,d为拐点坐标
        if ((x == m) || (y == n)) {
            return false;
        }
        //有两个可走拐点，为(x,n)和(m,y)
        let indextemp = getIndex(m, y, m, n, index1); //寻找(m,y)对应元素的下标
        //如果第三拐点与原先两个色块相通，并且本身透明，记录其坐标，并返回true
        if (linePathFinding(m, y, m, n, indextemp, index1) && linePathFinding(x, y, m, y, index0, indextemp) && (newarr[indextemp].color == "rgba(0,0,0,0)")) {
            c = m;
            d = y;
            return true;
        } else {
            indextemp = getIndex(x, n, m, n, index1);
            if (linePathFinding(x, n, m, n, indextemp, index1) && linePathFinding(x, y, x, n, index0, indextemp) && (newarr[indextemp].color == "rgba(0,0,0,0)")) {
                c = x;
                d = n;
                return true;
            } else {
                return false;
            }
        }
    }

    //两个拐点
    function twoPoint(x, y, m, n, index0, index1) {
        //以(x,y)为终点，以(m,n)为起点，遍历起点四周
        //上
        if (newarr[index1 - 6].color == "rgba(0,0,0,0)") {
            if (canGo(index1 - 6, -6, x, y, index0)) {
                return true;
            }
        }
        //下
        if (newarr[index1 + 6].color == "rgba(0,0,0,0)") {
            if (canGo(index1 + 6, 6, x, y, index0)) {
                return true;
            }
        }
        //左
        if (newarr[index1 - 1].color == "rgba(0,0,0,0)") {
            if (canGo(index1 - 1, -1, x, y, index0)) {
                return true;
            }
        }
        //右
        if (newarr[index1 + 1].color == "rgba(0,0,0,0)") {
            if (canGo(index1 + 1, 1, x, y, index0)) {
                return true;
            }
        }
    }

    function canGo(indexz, temp, x, y, index0) {
        //判断是否通行
        if (onePoint(newarr[indexz].x, newarr[indexz].y, x, y, indexz, index0)) {
            a = newarr[indexz].x;
            b = newarr[indexz].y;
            return true;
        } else {
            //是否是包围圈?
            if (newarr[indexz].isBorder) {
                return false;
            } else {
                indexz = indexz + temp;
                //决断下个点是否透明
                if (newarr[indexz].color == "rgba(0,0,0,0)") {
                    canGo(indexz, temp, x, y, index0);
                } else {
                    return false;
                }
            }
        }
    }



    function myinit() {//清除数组，重绘画布
        barr[0].color = "rgba(0,0,0,0)";
        barr[1].color = "rgba(0,0,0,0)";
        drawImg();
        barr = [];
        bindex = [];
    }
    function strokeLine0(x, y, m, n) {
        cxt.beginPath();
        cxt.strokeStyle = "blue";
        cxt.lineWidth = 5;
        cxt.moveTo(x + 25, y + 25);
        cxt.lineTo(m + 25, n + 25);
        cxt.stroke();
    }
    function strokeLine1(x, y, m, n, a, b) {
        cxt.beginPath();
        cxt.strokeStyle = "blue";
        cxt.lineWidth = 5;
        cxt.moveTo(x + 25, y + 25);
        cxt.lineTo(a + 25, b + 25);
        cxt.lineTo(m + 25, n + 25);
        cxt.stroke();
    }
    function strokeLine2(x, y, m, n, a, b, c, d) {
        cxt.beginPath();
        cxt.strokeStyle = "blue";
        cxt.lineWidth = 5;
        cxt.moveTo(m + 25, n + 25);
        cxt.lineTo(c + 25, d + 25);
        cxt.lineTo(a + 25, b + 25);
        cxt.lineTo(x + 25, y + 25);
        cxt.stroke();
    }
}

