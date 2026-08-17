let keyDisplay = document.querySelector("#keyDisplay")
let valueDisplay = document.querySelector("#valueDisplay")
let totalCount = document.querySelector("#totalCount")


let myObj = {
    "name" : "Munin", 
    "age" : 18,
    "state" : "Assam",
}

let mykeys = Object.keys(myObj);
let myValues = Object.values(myObj);
let objLength = mykeys.length;
totalCount.textContent = objLength;

mykeys.forEach(evt => {
    let li = document.createElement("li")
  li.textContent = evt;
  
  keyDisplay.appendChild(li)
    
})

myValues.forEach(evt => {
    let li = document.createElement("li");
    li.textContent = evt;
valueDisplay.appendChild(li)
})