let displayArea = document.querySelector("#displayArea");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");

let count = 0;
let timerId = null;

startBtn.addEventListener("click", function () {
  if (timerId !== null) return;

  timerId = setInterval(() => {
    count++;

    displayArea.textContent = count;
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerId);

  count = 0;
  timerId = null;
  displayArea.textContent = 0;
});
