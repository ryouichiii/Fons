// 404.html-specific JavaScript Codes

// 404 Timer + Redirect
// Code from: https://stackoverflow.com/questions/62921842/html-javascript-redirect-after-countdown
var timeleft = 10;
var redirectTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(redirectTimer);
    document.getElementById("countdown").innerHTML = "0 seconds.";
    window.location.href = "./index.html";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds.";
  }
  timeleft -= 1;
}, 1000);