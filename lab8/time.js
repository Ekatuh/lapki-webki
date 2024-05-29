
function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
    setInterval(showTime, 1000);

function showSeconds() {
    let today = new Date();
    let seconds = today.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById('seconds').innerHTML = seconds;
}
    setInterval(function() {
        showTime();
        showSeconds();
    }, 1000);