let inputText = document.querySelector("#input");
let checkBtn = document.querySelector("#check-btn");
let displayVowel = document.querySelector("#vowel-display");
let dispalyConsonant = document.querySelector("#consonant-display");
let displaySpace = document.querySelector("#space-display");

let vowelCounter = 0;
let consonantCounter = 0;
let spaceCounter = 0;

checkBtn.addEventListener("click", function () {
  let inputValue = inputText.value.toLowerCase();

  vowelCounter = 0;
  consonantCounter = 0;
  spaceCounter = 0;

  if (inputValue.length === 0) {
    alert("Empty");
    return;
  }

  for (let i = 0; i < inputValue.length; i++) {
    let letter = inputValue[i];

    if (letter === " ") {
      spaceCounter++;
    } else if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelCounter++;
    } else {
      consonantCounter++;
    }
  }

  displayVowel.textContent = vowelCounter;
  dispalyConsonant.textContent = consonantCounter;
  displaySpace.textContent = spaceCounter;
});
