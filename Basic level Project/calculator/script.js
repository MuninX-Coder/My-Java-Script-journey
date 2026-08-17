// Elements ko select kiya
let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".btn");

// Sirf in keys ko keyboard se allow karenge
const allowedKeys = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "+", "-", "*", "/", ".", "Enter", "Backspace", "Escape"
];

// --- APPROACH 1: Keyboard Inputs Handle Karna ---
display.addEventListener("keydown", function (event) {
  let enterValue = event.key;

  // 1. Agar alphabet ya koi galat key dabayi, toh wahin rok do
  let isEnterValueValid = allowedKeys.includes(enterValue);
  if (isEnterValueValid === false) {
    event.preventDefault();
  }

  // 2. Agar keyboard par 'Enter' dabaya, toh calculation karo
  if (enterValue === "Enter") {
    event.preventDefault(); // Page refresh hone se roka
    let calculationText = display.value;
    let result = eval(calculationText);
    display.value = result;
  }

  // 3. Agar keyboard par 'Escape' dabaya, toh screen clear karo
  if (enterValue === "Escape") {
    display.value = "";
  }
});


// --- APPROACH 2: Mouse Clicks Handle Karna ---
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let btnText = btn.textContent;

    // 1. Agar screen wale Enter par click hua
    if (btnText === "Enter") {
      let calculationText = display.value;
      let result = eval(calculationText);
      display.value = result;
    } 
    // 2. Agar screen wale Clear (C) button par click hua
    else if (btnText === "C") {
      display.value = "";
    } 
    // 3. Agar koi number ya normal operator (+,-,*,/) click hua, toh display me aage jodo
    else {
      display.value += btnText;
    }
  });
});




