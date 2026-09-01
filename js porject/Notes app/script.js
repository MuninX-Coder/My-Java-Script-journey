const searchNotesInp = document.querySelector("#searchNotesInp");
const addBtn =  document.querySelector("#addBtn");
const containerNotes = document.querySelector("#containerNotes");
const myForm = document.querySelector("#myForm");
const notesHeadingInp = document.querySelector("#notesHeadingInp");
const notesDetailesInp = document.querySelector("#notesDetailesInp")
const cancelBtn = document.querySelector("#cancelBtn");
const createBtn = document.querySelector("#createBtn");


// storage 
let myNotesStorage = [];

// addbtn logic to unhide the form
addBtn.addEventListener("click", function(){
    myForm.hidden = false;
})


cancelBtn.addEventListener("click", function(e){
 notesHeadingInp.value = "";
 notesDetailesInp.value = "";
myForm.hidden = true;
})


createBtn.addEventListener("click", function(){
    let headingValue = notesHeadingInp.value;
    let notesDetailedValue = notesDetailesInp.value;

    if(headingValue.trim() === "" && notesDetailedValue.trim() === "") return;

    let notes = {
        heading: headingValue,
        detailes: notesDetailedValue,
    }

    myNotesStorage.push(notes)
    
    displayNotesUi();
})



function displayNotesUi(){
    myNotesStorage.forEach((notes,i)=>{
        console.log(notes,i);
        
    })
}