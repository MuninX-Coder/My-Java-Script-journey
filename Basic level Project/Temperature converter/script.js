let tempInput = document.querySelector("#tempInput");
let temperatureOption = document.querySelector("#temperatureOption");
let temBtn = document.querySelector("#temBtn");
let displayValue = document.querySelector("#displayValue");

temBtn.addEventListener("click", function () {
  let tempInputVal = tempInput.value;
  let selectedOption = temperatureOption.value;

  if (tempInputVal === "") {
    displayValue.textContent = "Enter Temperature☀️";
    return;
  } else if (selectedOption === "") {
    displayValue.textContent = "Select Option🥱";
    return;
  } else if (selectedOption === "Celsius") {
    let fahreinheitVlaue = Math.round((tempInputVal * 9) / 5 + 32);
    displayValue.textContent = `${fahreinheitVlaue}°F😁`;
  } else {
    let CelsiusValue = Math.round(((tempInputVal - 32) * 5) / 9);
    displayValue.textContent = `${CelsiusValue}°C🌚`;
  }
});
