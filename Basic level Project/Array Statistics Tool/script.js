let inputNum = document.querySelector("#inputNum");
let resultBtn = document.querySelector("#resultBtn");
let sumDisplay = document.querySelector("#sumDisplay");
let averageDisplay = document.querySelector("#averageDisplay");
let minDisplay = document.querySelector("#minDisplay");
let maxDisplay = document.querySelector("#maxDisplay");

resultBtn.addEventListener("click", function () {
  let inputNumVal = inputNum.value;

  if (inputNumVal.trim() === "") {
    alert("enter some value");
    return;
  }

  let finalArray = [];

  let stringArray = inputNumVal.split(",");

  for (let i = 0; i < stringArray.length; i++) {
    let currentText = stringArray[i];

    let cleanText = currentText.trim();

    let actualNumber = Number(cleanText);

    if (!isNaN(actualNumber) && cleanText !== "") {
      finalArray.push(actualNumber);
    }
  }

  // sum
  let arraySum = 0;

  for (let i = 0; i < finalArray.length; i++) {
    arraySum += finalArray[i];
  }

  // average
  let arrayAverage = arraySum / finalArray.length;
  let cleanAverage = arrayAverage.toFixed(2);

  // min and max
  let min = finalArray[0];
  let max = finalArray[0];

  for (let i = 0; i < finalArray.length; i++) {
    let arrVal = finalArray[i];

    if (min > arrVal) {
      min = arrVal;
    }

    if (arrVal > max) {
      max = arrVal;
    }
  }

  sumDisplay.textContent = arraySum;
  averageDisplay.textContent = cleanAverage;
  minDisplay.textContent = min;
  maxDisplay.textContent = max;

  inputNum.value = "";
});
