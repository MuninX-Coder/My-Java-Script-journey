const addPeopleBtn = document.querySelector("#addPeopleBtn");
const addUserForm = document.querySelector("#addUserForm");
const addUserInp = document.querySelector("#addUserInp");
const addUser = document.querySelector("#addUser");
const peopleList = document.querySelector("#peopleList");

const addExpenseBtn = document.querySelector("#addExpenseBtn");
const addExpenseForm = document.querySelector("#addExpenseForm");
const purposeInp = document.querySelector("#purposeInp");
const amountInp = document.querySelector("#amountInp");
const paidUser = document.querySelector("#paidUser");
const sharedUsers = document.querySelector("#sharedUsers");
const addUserExpenseBtn = document.querySelector("#addUserExpenseBtn");

const expenseList = document.querySelector("#expenseList");
const settlementList = document.querySelector("#settlementList");

// storage
let peopleStorage = [];
let expenseStorage = [];

// add user logic to unhidden the form
addPeopleBtn.addEventListener("click", function () {
  addUserForm.hidden = false;
});

// add the user logic
addUser.addEventListener("click", function (e) {
  e.preventDefault();
  let addUserInpVal = addUserInp.value;

  if(addUserInpVal.trim() === ""){
    alert("add user Name");
} else {
    peopleStorage.push(addUserInpVal);
    renderPerson();
}
addUserForm.reset();
});


// a render function to render the people in UI
function renderPerson(){
    peopleList.innerHTML = "";
    let ul = document.createElement("ul");
    peopleStorage.forEach((people)=>{
       let li = document.createElement("li");
       li.textContent = people;
       ul.appendChild(li);
       peopleList.appendChild(ul);
        
    })
}


// expense btn logic to undhide the form
addExpenseBtn.addEventListener("click", function(){
    addExpenseForm.hidden = false;
})


// expense logic to add the expense 
addUserExpenseBtn.addEventListener("click", function(e){
    e.preventDefault();
    let purposeInpVal = purposeInp.value;
    let amountInpVal = amountInp.value;
    
    console.log(purposeInpVal);
    console.log(amountInpVal);
    
    
})