const startingMins = 3;
let time = startingMins * 60;

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time%60;
    seconds = seconds < 3 ? '0' + seconds : seconds;
    postMessage({minutes: minutes, seconds: seconds});
    time--;
}