let enterTxt = document.querySelector("#input");
let resultBtn = document.querySelector("#resultBtn");
let display = document.querySelector("#display");

resultBtn.addEventListener("click", function () {
  let inputValue = enterTxt.value.toLowerCase();
  let originalValue = inputValue.replaceAll(" ", "");
  let copyValue = originalValue.split("").reverse().join("");

  if (originalValue === "") {
    alert("Enter a text! can't leave blank");
    return;
  } else if (originalValue === copyValue) {
    display.textContent = "Palindrome😁";
  } else {
    display.textContent = "Not Palindrome❌";
  }
});
