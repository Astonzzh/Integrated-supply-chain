var dom = document.getElementById("u8");
console.log(dom);
var myChart = echarts.init(dom);
var app = {};

var option;


var base = +new Date(2021, 8, 1);
base = new Date(base);
var oneDay = 24 * 3600 * 1000;
var date = [];

var d1 = [4580, 4556, 4582, 4568, 4567, 4590, 4581, 4590, 4620, 4656, 4718, 4680, 4574, 4590, 4621, 4620, 4681, 4590, 4580, 4540, 4510, 4512, 4545, 4567];
var d2 = [58, 56, 82, 68, 67, 40, 51, 70, 120, 156, 118, 250, 274, 310, 321, 220, 281, 290, 280, 140, 76, 56, 45, 67];
var d3 = [51, 56, 72, 78, 57, 50, 61, 70, 110, 126, 158, 242, 254, 301, 312, 213, 124, 210, 231, 132, 56, 45, 32, 46];
var i = 0;
var data = [];
var data2 = [];
var data3 = [];
for (var i = 0; i < 24; i++) {
    data.push(d1[i]);
    data2.push(d2[i]);
    data3.push(d3[i]);
    if (i > 0) {
        date.push(i);
    }
}
// var data = [d1[i]];
// var data2 = [d2[i]];
// var data3 = [d3[i]];
var now = 0;

function getRandom1() {
    return 4000 + Math.random() * 2000;
}

function getRandom2() {
    return 200 + Math.random() * 100;
}

function addData(shift) {
    date.push(now);
    i++;
    if (i >= 24) {
        i = 0;
    } 
    
    if (shift) {
        data.push(d1[i]);
        data2.push(d2[i]);
        data3.push(d3[i]);

        date.shift();
        data.shift();
        data2.shift();
        data3.shift();
    }

    now = now + 1;
    if (now >= 24) {
        now = now - 24;
        base = new Date(+new Date(base) + oneDay);
    }   
}

// for (var i = 1; i < 24; i++) {
//     addData();
// }

option = {
    grid: {
        bottom: 50,
        left: 50,
        right: 100,
    },
    // title: {
    //     text: "库存图"
    // },
    tooltip: {
        trigger: 'axis',
        // formatter: "{a} <br>{b}: {c} ({d}%)"
    },
    legend: {
        data: ['在库件数', '销售出库件数', '采购入库件数']
    },
    xAxis: {
        name: "时间（小时）",
        type: 'category',
        boundaryGap: false,
        data: date,
        nameTextStyle: {
            padding: [0, 0, 0, 10]
        }
    },
    yAxis: [
        {
            name: "件",
            type: "value",
            min: 4000,
            max: 5000
        },
        {
            name: "件",
            type: "value",
            min: 0,
            max: 350
        }
    ],
    // {
    //     boundaryGap: [0, '50%'],
    //     type: 'value'
    // },
    series: [
        {
            name:'在库件数',
            type:'line',
            // smooth:true,
            // symbol: 'none',
            yAxisIndex: 0,
            stack: 'a',
            // areaStyle: {
            //     normal: {}
            // },
            data: data
        },
        {
            name:'销售出库件数',
            type:'line',
            stack: 'a2',
            yAxisIndex: 1,
            data: data2
        },
        {
            name:'采购入库件数',
            type:'line',
            stack: 'a3',
            yAxisIndex: 1,
            data: data3
        }
    ]
};


//----------------------------------------------------------------------



var myChart_ = echarts.init(document.getElementById('u100'));

// var data_ = [];
// for (let i = 0; i < 5; ++i) {
//     data_.push(Math.round(Math.random() * 200));
// }

c1 = ['广东仓', '内蒙古仓', '吉林仓', '甘肃仓', '江苏仓']
c2 = ['南宁代理商', '天津经销商', '湖南大卖场', '深圳商场', '湖南经销商']
c3 = ['纯牛奶', '酸奶', '奶粉', '早餐奶', '发酵乳']
x_axis = 1;

function getxaxis(i) {
    if (i == 1) {
        return c1;
    } else if (i == 2) {
        return c2;
    } else {
        return c3;
    }
}

function getData() {
    data_ = [];
    for (let i = 0; i < 5; ++i) {
        data_.push(Math.round(Math.random() * 200));
    }
    return data_;
}

option_ = {
    grid: {
        left: 70,
        right: 40,
        top: 10,
        bottom: 20
    },
    xAxis: {
        max: 'dataMax',
    },
    yAxis: {
        type: 'category',
        data: c1,
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 4 // only the largest 3 bars will be displayed
    },
    series: [{
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: getData(),
        label: {
            show: true,
            position: 'right',
            valueAnimation: true
        }
    }],
    // legend: {
    //     show: true
    // },
    // animationDuration: 0,
    // animationDurationUpdate: 3000,
    // animationEasing: 'linear',
    // animationEasingUpdate: 'linear'
};

function run () {
    var data2 = option_.series[0].data;
    for (var i = 0; i < data2.length; ++i) {
        if (Math.random() > 0.9) {
            data2[i] += Math.round(Math.random() * 2000);
        }
        else {
            data2[i] += Math.round(Math.random() * 200);
        }
    }
    
}
    


setTimeout(function() {
    $("#b1").attr("class", "btn btn-primary");
    run();
}, 0);
setInterval(function () {
    run();
    myChart_.setOption(option_);
}, 3000);


//---------------------------------------------------------------------
//---------------------------------------------------------------------


setInterval(function () {
    addData(true);
    myChart.setOption({
        xAxis: {
            data: date
        },
        series: [
            {
                type: 'line',
                smooth:true,//平滑曲线
                data:50,
                markLine: {
                    symbol: "none",
                    silent: false,
                    lineStyle: {
                      normal: {
                        color: '#01fef9'                   // 这儿设置安全基线颜色
                      }
                    },
                    data: [{
                        xAxis: 24 - now - 1
                    }],
                    label: {
                      normal: {
                        // formatter: '8月1号分隔线'                 // 这儿设置安全基线
                        formatter: [base.getMonth(), '月', base.getDate(), '号分隔线'].join('')
                      }
                    },
                },
        },{
            name:'在库件数',
            data: data
        },{
            name:'销售出库件数',
            data: data2
        },{
            name:'采购入库件数',
            data: data3
        }
    ]
    });

}, 1000);

if (option && typeof option === 'object') {
    myChart.setOption(option);
    myChart_.setOption(option_);
}