const timeEl = document.getElementById("time");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const statusEl = document.getElementById("status");
const audioE1 = new Audio("https://www.soundjay.com/buttons/sounds/button-2.mp3")

let timeLeft =  25*60;
let countDown;
startEl.addEventListener("click", startTimer);

function startTimer() {
    startEl.disabled = true
  clearInterval(countDown);
  timeLeft =  25*60;
  updateDisplay();
  countDown = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {        
        if(timeEl.textContent === "0:00") {
            statusEl.textContent = 'Time Up';
            audioE1.play().catch(error => console.log(error, "error")); // this for play audio 
        }
      clearInterval(countDown);
    }
  }, 1000);
}


function updateDisplay() {
  const minute = Math.floor(timeLeft / 60);
  const second = timeLeft % 60;
  timeEl.textContent = `${minute}:${second < 10 ? `0${second}` : second}`;
}

resetEl.addEventListener("click", () => {
    startEl.disabled = false
  clearInterval(countDown);
  timeLeft = 25*60;
  updateDisplay();
});

