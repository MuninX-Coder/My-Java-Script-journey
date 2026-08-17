let listInp = document.querySelector("#listInp")
let searchInp = document.querySelector("#searchInp")
let searchBtn = document.querySelector("#searchBtn")
let displaySearch = document.querySelector("#displaySearch")



searchBtn.addEventListener("click", function(){
let listInpVal = listInp.value;
let searchInpVal = searchInp.value;
let searchInpValNum = Number(searchInpVal);

let finalArrayList = [];

 if(listInpVal.trim() === ""){
    alert("please enter some numbers");
    return;
 }

 if(searchInpVal.trim() === ""){
    alert("please enter what to searched");
    return;
 }

// split the string from comma, and give a array
 let stringArray = listInpVal.split(",");

 
 for(let i = 0; i<stringArray.length; i++){
    let currentText = stringArray[i];

    let cleanText = currentText.trim();  // trim the array ak each value
    
    let actualNumber = Number(cleanText);  // convert in to number

    if(!isNaN(actualNumber) && cleanText !== ""){  // check weather number is not NaN and also its not blank
        finalArrayList.push(actualNumber);  // push the final value
    }
 }

 let found = false;

   for(let i = 0; i<finalArrayList.length; i++){
    let currentTextVal = finalArrayList[i];

    
  if(currentTextVal === searchInpValNum){
     displaySearch.textContent = i;
     found = true;
     break;
  }
   
   } 
   if(!found){
    displaySearch.textContent = "Not found";
   }
   
})