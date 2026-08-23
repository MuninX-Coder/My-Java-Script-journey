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

  if (addUserInpVal.trim() === "") {
    alert("add user Name");
  } else {
    peopleStorage.push(addUserInpVal);
    renderPerson();
    addPeopleToSelect();
    addPeopleToSharedUsers();
  }
  addUserForm.reset();
});

// a render function to render the people in UI
function renderPerson() {
  peopleList.innerHTML = "";
  let ul = document.createElement("ul");
  peopleStorage.forEach((people) => {
    let li = document.createElement("li");
    li.textContent = people;
    ul.appendChild(li);
    peopleList.appendChild(ul);
  });
}

// expense btn logic to undhide the form
addExpenseBtn.addEventListener("click", function () {
  addExpenseForm.hidden = false;
});

// expense logic to add the expense
addUserExpenseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let purposeInpVal = purposeInp.value;
  let amountInpVal = amountInp.value;
  let paidUserVal = paidUser.value;
  let sharedByUsers = [];

  let sharedUsersValue = sharedUsers.querySelectorAll('input[type="checkbox"]');

  sharedUsersValue.forEach((val) => {
    if (val.checked) {
      sharedByUsers.push(val.value);
    }
  });


  if(purposeInpVal.trim() === ""){
    alert("enter the purpose");
  } else if(Number(amountInpVal) <= 0){
    alert("enter the amount");
  } else if (paidUserVal === ""){
    alert("select the paid user")
  } else if(sharedByUsers.length === 0){
    alert("check atlest one user");
  } else {
    let myExpenseObj = {
        purpose: purposeInpVal,
        amount: Number(amountInpVal),
        paidUser: paidUserVal,
        sharedUser: sharedByUsers,
    }

    expenseStorage.push(myExpenseObj);
    renderMyExpenses();
    addExpenseForm.reset();
  }

});

function addPeopleToSelect() {
  paidUser.innerHTML = "";
  peopleStorage.forEach((people) => {
    const option = document.createElement("option");
    option.text = people;
    option.value = people.toLowerCase();

    paidUser.appendChild(option);
  });
}

function addPeopleToSharedUsers() {
  sharedUsers.innerHTML = "";

  peopleStorage.forEach((people) => {
    let divWrapper = document.createElement("div");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = people.toLowerCase();
    checkBox.value = people;

    let label = document.createElement("label");
    label.htmlFor = checkBox.id;
    label.textContent = people;

    divWrapper.appendChild(checkBox);
    divWrapper.appendChild(label);

    sharedUsers.appendChild(divWrapper);
  });
}


function renderMyExpenses(){
expenseList.innerHTML = "";

expenseStorage.forEach((expense, index)=>{
    let mainDiv = document.createElement("div");

    let h2 = document.createElement("h2");
    h2.textContent = expense.purpose;

    let p = document.createElement("p");
    p.textContent = `Amount: $${expense.amount}`;

    let p2 = document.createElement("p");
    p2.textContent = `paid by: ${expense.paidUser}`;

    let p3 = document.createElement("p");
    p3.textContent = `shared by: ${expense.sharedUser}`;

    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    mainDiv.appendChild(h2)
    mainDiv.appendChild(p)
    mainDiv.appendChild(p2)
    mainDiv.appendChild(p3)
    mainDiv.appendChild(editBtn)
    mainDiv.appendChild(deleteBtn)
    expenseList.appendChild(mainDiv);


    deleteBtn.addEventListener("click", function(){
        expenseStorage.splice(index,1);
        renderMyExpenses();
    })

    editBtn.addEventListener("click", function(){
        
    })
})

}