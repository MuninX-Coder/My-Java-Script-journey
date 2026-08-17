let displayResult = document.querySelector("#displayResult");
let coinTossBtn = document.querySelector("#coinTossBtn");
let headDisplay = document.querySelector("#headDisplay");
let tailDisplay = document.querySelector("#tailDisplay");
let totalDisplay = document.querySelector("#totalDisplay");
let headWinPercentage = document.querySelector("#headWinPercentage");
let tailWinPercentage = document.querySelector("#tailWinPercentage");

let headCount = 0;
let tailCount = 0;
let totalCount = 0;

coinTossBtn.addEventListener("click", function () {
  // Add click animation effect
  displayResult.style.transform = "scale(0.8)";
  setTimeout(() => {
    displayResult.style.transform = "scale(1)";
  }, 100);

  totalCount++;

  let randomNum = Math.floor(Math.random() * 2); // 0 - tail, 1 - head

  if (randomNum === 1) {
    headCount++;
    displayResult.textContent = "Head";
    displayResult.style.borderColor = "#38bdf8";
  } else {
    tailCount++;
    displayResult.textContent = "Tail";
    displayResult.style.borderColor = "#f43f5e";
  }

  headDisplay.textContent = headCount;
  tailDisplay.textContent = tailCount;
  totalDisplay.textContent = totalCount;

  headWinPercentage.textContent = Math.round((headCount * 100) / totalCount);
  tailWinPercentage.textContent = Math.round((tailCount * 100) / totalCount);
});
