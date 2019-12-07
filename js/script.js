var time = 10;
var timer = document.getElementById('timer');
var progressBar; document.querySelector('.progress');
var progress = 0;
var timerId;
var adding;

timer.innerHTML = time;

var timeValue = function() {
    progress += adding;
    document.querySelector('.progress').style.strokeDashoffset = progress;
    time--;
    timer.innerHTML = time;
    if (time === 0) {
        clearInterval(timerId);
        // alert('Таймер завершён!');
    }
}

var getTimer = function() {
    document.querySelector('.progress').style.transition = "1000ms linear";
    adding = 653.13 / time;
    timeValue();
    timerId = setInterval(timeValue, 1000);
}

var stopTimer = function() {
    document.querySelector('.progress').style.transition = "1000ms linear";
    clearInterval(timerId);
}

var resetTimer = function() {
    document.querySelector('.progress').style.transition = "1000ms ease";
    clearInterval(timerId);
    time = 100;
    adding = 653.13 / time;
    timer.innerHTML = time;
    progress = 0;
    document.querySelector('.progress').style.strokeDashoffset = progress;
}
