let inputNumber = document.querySelector("#number-input");
let guessBtn = document.querySelector("#guess-btn");
let msg = document.querySelector("#low-high-msg");
let attemptCount = document.querySelector("#attempt-count");

let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber);

let attemptCounter = 0;

guessBtn.addEventListener("click", function () {
  let inputValue = inputNumber.value;
  let inputValueNum = Number(inputValue);

  if (inputValue.trim() === "") {
    msg.textContent = "Please enter a number";
    return;
  }

  if (inputValueNum > secretNumber) {
    msg.textContent = "Too High";
    attemptCounter++;
  } else if (inputValueNum < secretNumber) {
    msg.textContent = "Too Low";
    attemptCounter++;
  } else {
    attemptCounter++;
    msg.textContent = "Correct!😁";
  }

  attemptCount.textContent = attemptCounter;
});
