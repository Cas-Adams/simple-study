const countDownDisplay = document.getElementById("countdown");
const startBtn = document.getElementById("timeStart");

let countdownInterval;
let timeLeft = 0;

startBtn.addEventListener("click", () => {
    startCountdown();
})

function startCountdown() {
    clearInterval(countdownInterval);

    const hours = parseInt(document.getElementById("hrInput").value);
    const minutes = parseInt(document.getElementById("minInput").value);

    timeLeft = (hours * 60 * 60) + (minutes * 60);

    if (timeLeft <= 0) {
        window.alert("Enter a time greater than 0")
        return;
    };

    updateDisplay();

    countdownInterval = setInterval(() => {
        if (timeLeft <=0) {
            clearInterval(countdownInterval);
            countDownDisplay.textContent = "00:00:00";
        } else {
            updateDisplay();
            timeLeft--;
        }
    }, 1000);

};

function updateDisplay() {
    const hrs = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
    const mins = String(Math.floor((timeLeft %3600)/60)).padStart(2,'0');
    const secs = String(timeLeft % 60).padStart(2, '0');
    countDownDisplay.textContent = `${hrs}:${mins}:${secs}`;
};



updateDisplay();