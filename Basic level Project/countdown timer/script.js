let displayTimer = document.querySelector("#displayTimer");
let timerInp = document.querySelector("#timerInp");
let autoStopInp = document.querySelector("#autoStopInp");
let startTimerBtn = document.querySelector("#startTimerBtn");

let timerTime = 0;
let timer;

startTimerBtn.addEventListener("click", function () {
  let timerInpVal = Number(timerInp.value);
  let autoStopInpVal = Number(autoStopInp.value);

  if (autoStopInpVal > timerInpVal) {
    alert("auto stop value is bigger then timer value");
    return;
  }

  clearInterval(timer);
  displayTimer.textContent = timerInpVal;

  timer = setInterval(() => {
    timerInpVal--;

    if (timerInpVal <= 0) {
      clearInterval(timer);
      displayTimer.textContent = "Times up";
       displayTimer.classList.add("status-text");
    } else if (timerInpVal === autoStopInpVal) {
      clearInterval(timer);
      displayTimer.textContent = "Auto stop";
       displayTimer.classList.add("status-text");
    } else {
      displayTimer.textContent = timerInpVal;
    }
  }, 1000);
});
