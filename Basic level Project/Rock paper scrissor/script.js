let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorBtn = document.querySelector("#scissorBtn");
let userPointsDisplay = document.querySelector("#userPointsDisplay");
let userChoiceDisplay = document.querySelector("#userChoiceDisplay");
let computerPointsDisplay = document.querySelector("#computerPointsDisplay");
let computerChoiceDispaly = document.querySelector("#computerChoiceDispaly");
let restartBtn = document.querySelector("#restartBtn");

// user ka code
let userChoice = "";
let userPoints = 0;

// computer ka code
let computerPoints = 0;

rockBtn.addEventListener("click", function () {
  let computerChoice = ["Rock", "Paper", "Scissor"];
  let randomNumber = Math.floor(Math.random() * 3);
  let randomChoiceComputer = computerChoice[randomNumber];

  userChoice = "Rock";
  userChoiceDisplay.textContent = "Rock";
  computerChoiceDispaly.textContent = randomChoiceComputer;

  // 1. Check for a Tie first
  if (userChoice === randomChoiceComputer) {
    userChoiceDisplay.textContent = "Draw 🤝";
    computerChoiceDispaly.textContent = "Draw 🤝";
  } 
  // 2. Check if User wins
  else if (userChoice === "Rock" && randomChoiceComputer === "Scissor") {
    userPoints++;
    userPointsDisplay.textContent = userPoints;
  } 
  // 3. If it's not a tie and user didn't win, Computer wins
  else {
    computerPoints++;
    computerPointsDisplay.textContent = computerPoints;
  }
});

paperBtn.addEventListener("click", function () {
  let computerChoice = ["Rock", "Paper", "Scissor"];
  let randomNumber = Math.floor(Math.random() * 3);
  let randomChoiceComputer = computerChoice[randomNumber];

  userChoice = "Paper";
  userChoiceDisplay.textContent = "Paper";
  computerChoiceDispaly.textContent = randomChoiceComputer;

  if (userChoice === randomChoiceComputer) {
    userChoiceDisplay.textContent = "Draw 🤝";
    computerChoiceDispaly.textContent = "Draw 🤝";
  } 
  else if (userChoice === "Paper" && randomChoiceComputer === "Rock") {
    userPoints++;
    userPointsDisplay.textContent = userPoints;
  } 
  else {
    computerPoints++;
    computerPointsDisplay.textContent = computerPoints;
  }
});

scissorBtn.addEventListener("click", function () {
  let computerChoice = ["Rock", "Paper", "Scissor"];
  let randomNumber = Math.floor(Math.random() * 3);
  let randomChoiceComputer = computerChoice[randomNumber];

  userChoice = "Scissor"; // Fixed case-sensitivity to match array capital 'S'
  userChoiceDisplay.textContent = "Scissor";
  computerChoiceDispaly.textContent = randomChoiceComputer;

  if (userChoice === randomChoiceComputer) {
    userChoiceDisplay.textContent = "Draw 🤝";
    computerChoiceDispaly.textContent = "Draw 🤝";
  } 
  else if (userChoice === "Scissor" && randomChoiceComputer === "Paper") {
    userPoints++;
    userPointsDisplay.textContent = userPoints;
  } 
  else {
    computerPoints++;
    computerPointsDisplay.textContent = computerPoints;
  }
});

restartBtn.addEventListener("click", function () {
  userChoice = "";
  userPoints = 0;
  userPointsDisplay.textContent = userPoints;
  userChoiceDisplay.textContent = "-";

  computerPoints = 0;
  computerPointsDisplay.textContent = 0;
  computerChoiceDispaly.textContent = "-"; // Reset back to a placeholder instead of 0
});
