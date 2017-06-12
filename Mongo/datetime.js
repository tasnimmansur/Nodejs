var datetime = require('node-datetime');
/*var past = '2017-06-06 00:00:00';
var pastDateTime = datetime.create(past);


setTimeout(function () {
    var pastNow = pastDateTime.now();
    var pastTime = pastDateTime.getTime();
    console.log(pastNow);
    console.log(new Date(1420038010000));
}, 1000);
*/
function addZero(x, n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
}

function myFunction() {
    var d = new Date();
    var x = document.getElementById("demo");
    var h = addZero(d.getHours(), 2);
    var m = addZero(d.getMinutes(), 2);
    var s = addZero(d.getSeconds(), 2);
    var ms = addZero(d.getMilliseconds(), 3);
    x.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

