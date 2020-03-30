var index = 0;
var img = ["url('img/01.png')", "url('img/02.png')", "url('img/03.png')", "url('img/04.png')"];

var timer = setInterval(function () {
    var bg = document.getElementById("container");
    if (index < 4) {
        bg.style.backgroundImage = img[index];
        index++;
    } else {
        index = 0;
    }
}, 1000);


var img1 = document.getElementById("li1");
var img2 = document.getElementById("li2");
var img3 = document.getElementById("li3");
var img4 = document.getElementById("li4");

img1.onmousemove = function() {
    clearInterval(timer)
    img1.style.borderColor = "orange"
    img1.style.backgroundColor = "orange"
}

img2.onmousemove = function() {
    clearInterval(timer)
    img2.style.borderColor = "orange"
    img2.style.backgroundColor = "orange"
}

img3.onmousemove = function() {
    clearInterval(timer)
    img3.style.borderColor = "orange"
    img3.style.backgroundColor = "orange"
}

img4.onmousemove = function() {
    clearInterval(timer)
    img4.style.borderColor = "orange"
    img4.style.backgroundColor = "orange"
}

