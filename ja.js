let timer;
let startTime;
let lapCount = 1;

function start() {
    if (!timer) {
        startTime = Date.now();
        timer = setInterval(updateTime, 1000);
    }
}

function updateTime() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    document.getElementById("time").textContent = `${hours} : ${minutes} : ${seconds}`;
}

function lap() {
    const lapTime = document.getElementById("time").textContent;
    document.getElementById("lap").innerHTML += `Lap ${lapCount}: ${lapTime}<br>`;
    lapCount++;
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    document.getElementById("time").textContent = "00 : 00 : 00";
    document.getElementById("lap").innerHTML = "";
    lapCount = 1;
}