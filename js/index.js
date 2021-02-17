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

let heroH = document.querySelector('.hero');
console.log(heroH.clientHeight);
console.log(heroH);
const elem = document.querySelector("main");

  const rect = elem.getClientRects();
  console.log(rect);
  console.log(window.innerHeight-heroH.clientHeight);
