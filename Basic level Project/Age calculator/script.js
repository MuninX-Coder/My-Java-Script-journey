let dobInput = document.querySelector("#dobInput");
let ageBtn = document.querySelector("#ageBtn");
let displayAge = document.querySelector("#displayAge");
let estimateDays = document.querySelector("#estimateDays");
let nextBirthday = document.querySelector("#nextBirthday");

ageBtn.addEventListener("click", function () {
  let dobInputVal = dobInput.value;
  if (dobInputVal === "") {
    displayAge.textContent = "Enter your Dob";
    return;
  }

  let birthYear = new Date(dobInputVal);

  let todayDate = new Date();
  console.log(todayDate);

  let ageInYear = todayDate.getFullYear() - birthYear.getFullYear();
  console.log(ageInYear);

  let ageInMonth = todayDate.getMonth() - birthYear.getMonth();
  console.log(ageInMonth);

  let ageInDays = todayDate.getDate() - birthYear.getDate();
  console.log(ageInDays);

  displayAge.textContent = ` Age : ${ageInYear} years ${ageInMonth} months ${ageInDays} days🌚`


  
});
