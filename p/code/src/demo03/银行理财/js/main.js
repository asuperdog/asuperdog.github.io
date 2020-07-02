// 初始化数据
var calcProfit = 0.0307 * 90 / 365
var multiple = 1000
var minMoney = 10000
var maxMoney = 300000
var myBalance = 50000

// 绑定事件
var leftMaxMoney = document.getElementById("maxMoney");
var leftBalance = document.getElementById("balance");
var myProfit = document.getElementById("profit");
var percent = parseInt(document.getElementById("percent").innerText);
var progress = parseInt(document.getElementById("progress").style.width);

// 主体功能
function checkAll() {
    // 获取输入金额
    var Amounts = document.getElementById("amount").value;
    console.log('输入的金额为:' + Amounts);
    // 判断输入金额
    if (Amounts === '' || Amounts == null || typeof (Amounts) == 'undefined') {
        alert('购买金额不能为空!');
        return;
    } else {
        var mathReg = /^(\+)?(0|[1-9]\d*)?$/;
        if (!mathReg.test(Amounts)) {
            alert('您输入的金额有误!');
            return;
        } else {
            if (Amounts > myBalance) {
                alert('您的账户余额不足!');
                return;
            } else if (Amounts < minMoney) {
                alert('您输入的起投金额不足!');
                return;
            } else if (Amounts % multiple !== 0) {
                alert('请输入递增金额的整数倍!')
                return;
            }
        }
    }
    alert('已成功购买该产品!')

    // 计算收益
    var sumAmounts = Amounts + Amounts;
    myProfit.innerText = (calcProfit * Amounts).toFixed(2);

    // 更新数据
    leftMaxMoney.innerText = (maxMoney - Amounts).toFixed();
    leftBalance.innerText = (myBalance - Amounts).toFixed();
    maxMoney = maxMoney - Amounts;
    myBalance = myBalance - Amounts;

    // 改变进度
    percent += 3;
    document.getElementById("percent").innerText = percent;

    // 改变进度条
    progress += 3;
    document.getElementById("progress").style.width = progress + "%";
}

// 倒计时功能
window.onload = function () {
    countTime();

    function countTime() {
        var nowTime = new Date();
        var endTime = new Date("2020/08/25,00:00:00");
        var leftTime = Math.floor((endTime.getTime() - nowTime.getTime()) / 1000);
        var dd = Math.floor(leftTime / (24 * 60 * 60));
        var hh = Math.floor(leftTime / (60 * 60) % 24);
        var mm = Math.floor(leftTime / 60 % 60);
        var ss = Math.floor(leftTime % 60);

        document.querySelector("#leftTime").innerHTML = `${dd}天 ${hh} 时 ${mm} 分 ${ss} 秒`;
        if (leftTime <= 0) {
            document.querySelector("#leftTime").innerHTML = "投资已结束!";
            return;
        }
        setTimeout(countTime, 1000);
    }
}
