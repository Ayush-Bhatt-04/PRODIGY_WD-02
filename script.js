let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    startStopBtn.textContent = 'Stop';
    isRunning = true;
    const startTime = Date.now() - elapsedTime;

    timer = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        displayTime(elapsedTime);
    }, 1000);
}

function stopTimer() {
    startStopBtn.textContent = 'Start';
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    displayTime(0);
}

function displayTime(time) {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    const formattedTime = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    display.textContent = formattedTime;
}
