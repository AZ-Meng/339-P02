var a = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
var k = 0;
var time = 3;
var tID;
function nextImg() {
    k++;
    if (k === a.length)
        k = 0;
    document.getElementById("img").src = "images/" + a[k];
}

function setTime() {
    time--;
    if (time <= 0) {
        nextImg();
        time = 3;

    }
}
tID = setInterval("setTime()", 1000);