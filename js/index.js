let now =  new Date().getTime();
const eventDate = new Date("Apr 10, 2021 00:00:00")
let dateElement = document.getElementById('date');

let oneDay = 1000 * 60 * 60 * 24
var timeleft = eventDate - now;

//CountdownTimer
var getTimeInterval = setInterval(function() {

    var now = new Date().getTime();
    
    timeleft = eventDate - now; 
   
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
   
    if (timeleft < 0) {
        clearInterval(getTimeInterval);
    }

    dateElement.innerHTML = days
    
    return days
}, 0);

$(".schedule-btn").click(function(){
    $("body").css({"height":"100vh"})
    $("#schedule").addClass("show-schedule")
})
$(".close-schedule").click(function(){
    $("body").css({"height":"initial"})
    $("#schedule").removeClass("show-schedule")
})
$(".date").click(function(){
    $(this).addClass("date__active").siblings().removeClass("date__active")
    if(this.id === "day-1"){
        $(".schedule__table__wrapper").removeClass("table-move")
    }
    if(this.id === "day-2"){
        $(".schedule__table__wrapper").addClass("table-move")
    }
})