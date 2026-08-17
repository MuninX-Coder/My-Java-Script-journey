let displayScreen = document.querySelector("#display")
let rollBtn = document.querySelector("#rollBtn")
let displayHistory = document.querySelector("#displayHistory")
let totalScore = document.querySelector("#totalScore")
let resetBtn = document.querySelector("#resetBtn")

let history = [];
let total = 0;


rollBtn.addEventListener("click", function(){

    let randomNum = Math.floor(Math.random() * 6) + 1;

    displayScreen.textContent = randomNum;
    
    history.push(randomNum);
    total += randomNum;

    displayHistory.textContent = history;
    totalScore.textContent = total;
})

resetBtn.addEventListener("click", function(){
    history = [];
    total = 0;
    displayScreen.textContent = "";
    totalScore.textContent = total;
    displayHistory.textContent = history;
})