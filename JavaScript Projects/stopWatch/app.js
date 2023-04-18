let minHeading = document.getElementById('min');
let secHeading = document.getElementById('sec');
let msecHeading = document.getElementById('msec');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let restartBtn = document.getElementById('restart');

let min = 0;
let sec = 0;
let msec = 0;
function timer() {
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}
function start() {
    interver = setInterval(timer, 10);
}
function stop() {
    clearInterval(interver);
}
function restart() {
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
}