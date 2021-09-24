var options_number = {
    useEasing: true, 
    useGrouping: true, 
    separator: ',', 
    decimal: '.', 
};

// 1. 29-35, 34
var start_1 = 34;
var min1 = 29;
var max1 = 35;
var mean1 = 34;

// 2. 15-22, 21
var start_2 = 21;
var min2 = 15;
var max2 = 22;
var mean2 = 21;

// 3. 1.5-2.5, 1.7 
var start_3 = 1.7;
var min3 = 1.5;
var max3 = 22;
var mean3 = 1.7;

// 4. 4-9, 6
var start_4 = 6;
var min4 = 4;
var max4 = 9;
var mean4 = 6;

var interval_1 = Math.random() * 50;
var interval_2 = Math.random() * 5;
var interval_3 = Math.random() * 4;

function changeAndGet(str, start, max, min, mean, factor, index) {
    var interval_1 = Math.random() * factor;
    if (Math.random() < 0.5) {
        interval_1 = -interval_1;
    }
    var newv = start + interval_1;
    if (newv > max) {
        newv = max;
    }
    if (newv < min) {
        newv = min;
    }
    var demo = new CountUp(str, start, newv, 1, 1.2, options_number);
    if (newv <= mean) {
        $('#'+str).attr("style", "color: green");
        if (index == 2 || index == 3 || index == 4) {
            $('#percent'+index).attr("style", "color: green");
        }
    } else {
        $('#'+str).attr("style", "color: red");
        if (index == 2 || index == 3 || index == 4) {
            $('#percent'+index).attr("style", "color: red");
        }
    }
    demo.start();
    return newv;
}

setInterval(function() {
    start_1 = changeAndGet("number1", start_1, max1, min1, mean1, 3, 1);
    start_2 = changeAndGet("number2", start_2, max2, min2, mean2, 3.5, 2);
    start_3 = changeAndGet("number3", start_3, max3, min3, mean3, 0.7, 3);
    start_4 = changeAndGet("number4", start_4, max4, min4, mean4, 2.5, 4);
}, 3000)