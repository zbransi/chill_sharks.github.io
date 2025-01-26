var Alarm= new Audio('AlarmAudio.wav');

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            Alarm.play();
        }
    }, 1000)
}

function begin() {
    var time = document.getElementById("myInput").value;
    time = time * 60;
    display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);

    var button = document.getElementById("button");
    button.onclick = function(){
        replaceTime(time);
}

var pThing = document.getElementById("safeTimerDisplay");
var replaceTime = function(userWord) {
    var p = (userWord)

    return pThing.innerHTML = p;
}
}