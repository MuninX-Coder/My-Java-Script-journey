let inpJosn = document.querySelector("#inpJosn");
let formatBtn = document.querySelector("#formatBtn");
let displayArea = document.querySelector("#displayArea");

formatBtn.addEventListener("click", function () {
 
  try {
     let inpJosnVal = inpJosn.value;
    let jsonVal = JSON.parse(inpJosnVal);
    let finalVal = JSON.stringify(jsonVal, null, 2);
    displayArea.textContent = finalVal;
  } catch (error) {
  displayArea.textContent = "Invalid input";
    inpJosn.value = "";
  }
});


