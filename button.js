$(document).ready(function() {
    $("#b1").click(function() {
        $("#b1").attr("class", "btn btn-primary");
        $("#b2").attr("class", "btn");
        $("#b3").attr("class", "btn");
        option_.series[0].data = getData();
        option_.yAxis.data = c1;
        myChart_.setOption(option_);
        $("#number1").attr("value", "123");
    })
    $("#b2").click(function() {
        $("#b1").attr("class", "btn");
        $("#b2").attr("class", "btn btn-primary");
        $("#b3").attr("class", "btn");
        option_.series[0].data = getData();
        option_.yAxis.data = c2;
        myChart_.setOption(option_);
    })
    $("#b3").click(function() {
        $("#b1").attr("class", "btn");
        $("#b2").attr("class", "btn");
        $("#b3").attr("class", "btn btn-primary");
        option_.series[0].data = getData();
        option_.yAxis.data = c3;
        myChart_.setOption(option_);
    })
})