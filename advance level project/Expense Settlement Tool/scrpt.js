// selection the all html elements , DOM selection
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
const settlementBtn = document.querySelector("#settlementBtn");

// storage
// main storage to store the people and expesnes
let peopleStorage = [];
let expenseStorage = [];

// state manage for edit feature
// a state that is manage for the edit feature
let currentIndex = null;

// load data from localStorage
// local storage
let savedPeople = localStorage.getItem("peopleStorage");
let savedExpenses = localStorage.getItem("expenseStorage");

if (savedPeople) {
  peopleStorage = JSON.parse(savedPeople);
}

if (savedExpenses) {
  expenseStorage = JSON.parse(savedExpenses);
}

// render saved data when page loads
renderPerson();
addPeopleToSelect();
addPeopleToSharedUsers();
renderMyExpenses();

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

    localStorage.setItem("peopleStorage", JSON.stringify(peopleStorage));

    renderPerson();
    addPeopleToSelect();
    addPeopleToSharedUsers();
  }

  currentIndex = null;

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
  });

  peopleList.appendChild(ul);
}

// expense btn logic to unhide the form

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

  if (purposeInpVal.trim() === "") {
    alert("enter the purpose");
  } else if (Number(amountInpVal) <= 0) {
    alert("enter the amount");
  } else if (paidUserVal === "") {
    alert("select the paid user");
  } else if (sharedByUsers.length === 0) {
    alert("check atlest one user");
  } else {
    let myExpenseObj = {
      purpose: purposeInpVal,
      amount: Number(amountInpVal),
      paidUser: paidUserVal,
      sharedUser: sharedByUsers,
    };

    // add expense

    if (currentIndex === null) {
      expenseStorage.push(myExpenseObj);
    }

    // edit expense
    else {
      expenseStorage[currentIndex] = myExpenseObj;

      currentIndex = null;

      addExpenseForm.hidden = true;
    }

    // save expenses

    localStorage.setItem("expenseStorage", JSON.stringify(expenseStorage));

    renderMyExpenses();

    addExpenseForm.reset();
  }
});

// add people to paid user select

function addPeopleToSelect() {
  paidUser.innerHTML = "";

  peopleStorage.forEach((people) => {
    const option = document.createElement("option");

    option.text = people;
    option.value = people;

    paidUser.appendChild(option);
  });
}

// add people to shared users

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

// render expenses

function renderMyExpenses() {
  expenseList.innerHTML = "";

  expenseStorage.forEach((expense, index) => {
    let mainDiv = document.createElement("div");

    let h2 = document.createElement("h2");

    h2.textContent = expense.purpose;

    let p = document.createElement("p");

    p.textContent = `Amount: ₹${expense.amount}`;

    let p2 = document.createElement("p");

    p2.textContent = `paid by: ${expense.paidUser}`;

    let p3 = document.createElement("p");

    p3.textContent = `shared by: ${expense.sharedUser.join(", ")}`;

    let editBtn = document.createElement("button");

    editBtn.textContent = "edit";

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "delete";

    mainDiv.appendChild(h2);
    mainDiv.appendChild(p);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(p3);
    mainDiv.appendChild(editBtn);
    mainDiv.appendChild(deleteBtn);

    expenseList.appendChild(mainDiv);

    // delete

    deleteBtn.addEventListener("click", function () {
      expenseStorage.splice(index, 1);

      localStorage.setItem("expenseStorage", JSON.stringify(expenseStorage));

      renderMyExpenses();
    });

    // edit

    editBtn.addEventListener("click", function () {
      currentIndex = index;

      let tempStore = expenseStorage[currentIndex];

      purposeInp.value = tempStore.purpose;

      amountInp.value = tempStore.amount;

      paidUser.value = tempStore.paidUser;

      let sharedUsersValue = sharedUsers.querySelectorAll(
        'input[type="checkbox"]',
      );

      sharedUsersValue.forEach((val) => {
        val.checked = tempStore.sharedUser.includes(val.value);
      });

      addExpenseForm.hidden = false;
    });
  });
}

// settlement calculation

settlementBtn.addEventListener("click", function () {
  // total expense

  let totalExpense = 0;

  expenseStorage.forEach((val) => {
    totalExpense += val.amount;
  });

  // don't calculate if there are no people or expenses

  if (peopleStorage.length === 0) {
    alert("Add people first");

    return;
  }

  if (expenseStorage.length === 0) {
    alert("Add at least one expense");

    return;
  }

  // how much each person actually paid

  let paidAmount = {};

  peopleStorage.forEach((person) => {
    paidAmount[person] = 0;
  });

  expenseStorage.forEach((val) => {
    paidAmount[val.paidUser] += val.amount;
  });

  // fair share

  let fairShare = totalExpense / peopleStorage.length;

  // balance

  let balance = {};

  peopleStorage.forEach((people) => {
    balance[people] = paidAmount[people] - fairShare;
  });

  // receivers

  let receivers = [];

  // debtors

  let debtors = [];

  peopleStorage.forEach((people) => {
    if (balance[people] > 0) {
      receivers.push({
        person: people,
        amount: balance[people],
      });
    } else if (balance[people] < 0) {
      debtors.push({
        person: people,
        amount: Math.abs(balance[people]),
      });
    }
  });

  // settlements

  let settlements = [];

  let debtorIndex = 0;

  let receiverIndex = 0;

  while (debtorIndex < debtors.length && receiverIndex < receivers.length) {
    let debtor = debtors[debtorIndex];

    let receiver = receivers[receiverIndex];

    let settlementAmount = Math.min(debtor.amount, receiver.amount);

    settlements.push({
      from: debtor.person,

      to: receiver.person,

      amount: settlementAmount,
    });

    debtor.amount -= settlementAmount;

    receiver.amount -= settlementAmount;

    if (debtor.amount === 0) {
      debtorIndex++;
    }

    if (receiver.amount === 0) {
      receiverIndex++;
    }
  }

  // render settlement

  settlementList.innerHTML = "";

  let totalHeading = document.createElement("h3");

  totalHeading.textContent = `Total Expense: ₹${totalExpense.toFixed(2)}`;

  settlementList.appendChild(totalHeading);

  let fairShareText = document.createElement("p");

  fairShareText.textContent = `Each person's share: ₹${fairShare.toFixed(2)}`;

  settlementList.appendChild(fairShareText);

  settlements.forEach((settlement) => {
    let settlementDiv = document.createElement("div");

    let settlementText = document.createElement("p");

    settlementText.textContent = `${settlement.from} pays ₹${settlement.amount.toFixed(2)} to ${settlement.to}`;

    settlementDiv.appendChild(settlementText);

    settlementList.appendChild(settlementDiv);
  });

  if (settlements.length === 0) {
    let message = document.createElement("p");

    message.textContent = "Everyone is already settled.";

    settlementList.appendChild(message);
  }
});
