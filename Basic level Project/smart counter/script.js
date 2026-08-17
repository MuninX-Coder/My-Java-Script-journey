const display = document.querySelector("#display");
const steps = document.querySelector("#steps");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");

let counter = 0;

incrementBtn.addEventListener("click", function () {
  let inputValue = steps.value;
  let inputValueNumber = Number(inputValue);

  if (inputValue.trim() === "") {
    counter++;
    display.textContent = counter;
  } else {
    counter += inputValueNumber;
    display.textContent = counter;
  }
});

decrementBtn.addEventListener("click", function () {
  let inputValue = steps.value;
  let inputValueNumber = Number(inputValue);

  if (inputValue.trim() === "") {
    counter--;
    display.textContent = counter;
  } else {
    counter -= inputValueNumber;
    display.textContent = counter;
  }
});
