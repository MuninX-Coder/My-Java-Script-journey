let colorBtn = document.querySelector("#colorBtn");
let colorCode = document.querySelector("#colorCode");
let copyBtn = document.querySelector("#copyBtn");
let colorHistory = document.querySelector("#colorHistory");
  let body = document.querySelector("body");

// let colorHistoryList = [];
let hexString = "0123456789ABCDEF";
// let color = "#";

colorBtn.addEventListener("click", function () {
 let color = "#";
  for (let i = 0; i <6; i++) {
    let randomNum = Math.floor(Math.random() * 16) ;
   color += hexString[randomNum];
  }

   colorCode.textContent = color;
   body.style.backgroundColor = color;
   

// colorHistoryList.push(color);

colorHistory.innerHTML += `<div> ${color} </div>`;
});


copyBtn.addEventListener("click", function(){

    navigator.clipboard.writeText(colorCode.textContent);
    alert("color is copied")
})



// console.log(navigator.getBattery())  - navigator brower ka build in object , jo use hotai ham luk ka system ka information dene ke lye (new thing pata chalia

