// selecting all the html element
const enterAmount = document.querySelector("#enterAmount");
const transactionType = document.querySelector("#transactionType");
const enterDate = document.querySelector("#enterDate");
const enterCategory = document.querySelector("#enterCategory");
const enterDescription = document.querySelector("#enterDescription");
const addBtn = document.querySelector("#addBtn");
const myForm = document.querySelector("form");
const transactionTableBody = document.querySelector("#transactionTableBody");

let transactionStorage = []; // empty array as a storage to store all the transaction

// add btn par event lagana click, mtlb click hone par kuch kaam hoo, yeh function run hoo
addBtn.addEventListener("click", function (evt) {
  evt.preventDefault(); // form ka jo default behaviour hai usko rokna, reload hone sai rokna

  // sab values user sai lena variable ka andar mai store karna
  let enterAmountVal = Number(enterAmount.value);
  let transactionTypeVal = transactionType.value;
  let enterDateVal = enterDate.value;
  let enterCategoryVal = enterCategory.value;
  let enterDescriptionVal = enterDescription.value;

  // condition to check weather jo v value melai woh valid hai ya nai
  if (enterAmountVal === 0) {
    alert("enter some amount");
    return;
  } else if (transactionTypeVal.trim() === "") {
    alert("enter the transaction type  INCOME/EXPENSE");
    return;
  } else if (enterDateVal.trim() === "") {
    alert("enter the date");
    return;
  } else if (enterCategoryVal.trim() === "") {
    alert("enter category");
    return;
  } else if (enterDescriptionVal.trim() === "") {
    alert("enter description");
    return;
  }

  // if sab value jo validate hai then woh sab ko ek object ka form mai create karna
  let myTransactons = {
    amount: enterAmountVal,
    type: transactionTypeVal,
    date: enterDateVal,
    category: enterCategoryVal,
    description: enterDescriptionVal,
  };

  transactionStorage.push(myTransactons); // woh object ko main storage jo array mai usme push kardena
  saveTask(); // save task call karna to save all the task in local storage
  addTransactionToUi(transactionStorage); // jo render function hai uksa andar apna main storage ko pas karna taki user ui mai dhek sake
  summary(); // summary funciton ko call karna taki sab summary usko mel sake
  myForm.reset(); // form ko reset kardena taki user naya sai new value desake, pura form clean hojaiga
});

// ui mai render ranwane wala function
function addTransactionToUi(myTransaction) {
  // accept kartai ek array
  transactionTableBody.innerHTML = ""; // traansactionbody ka andar kuch v hai tho usko clean kardo

  // jo array yeh function ko melega usper ek foreach loop run karo, each time ek object melegea as transaction and also usko index ko v count karo, konsa index mai hai bolke
  myTransaction.forEach((transaction, index) => {
    let tr = document.createElement("tr"); // tr create karna for each transaction

    let td1 = document.createElement("td"); // td create karna and data dena, data melega woh array sai jo yeh funciton recive keyai, woh array ka andar object hoga as transaciton
    td1.textContent = transaction.date;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = transaction.type;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = transaction.category;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.textContent = transaction.amount;
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.textContent = transaction.description;
    tr.appendChild(td5);

    let deleteBtn = document.createElement("button"); // ek delete btn create karna
    deleteBtn.textContent = "delete"; // usper text context dean
    deleteBtn.classList.add("delete-btn"); // ek class list v add karna for styling
    tr.appendChild(deleteBtn);
    transactionTableBody.appendChild(tr); // last mai sab ko tablebody mai dhal dena taki user dhek sake

    // delete btn par ek event click taki delete kar saku transaction ko
    deleteBtn.addEventListener("click", function () {
      transactionStorage.splice(index, 1); // jo main array mai waha sai splice matltb hata dena ya delete karna  index, jo foreach mai mela usse 1 value

      saveTask(); // run ko taki jo v new sizz hai local storage mai save ho jae
      addTransactionToUi(transactionStorage); // fir render wala funcitn call karo along with giving  transaction storage
      summary(); // summar function call karna
    });
  });
}

// summary function ke lye jo v html siz chaiye tha woh sab ko select karna
let yourIncome = document.querySelector("#yourIncome");
let yourExpense = document.querySelector("#yourExpense");
let yourBalance = document.querySelector("#yourBalance");

// ek summary function jo summary jo display karwaiga
function summary() {
  // two varaible with initial value 0
  let totalIncome = 0;
  let totalExpense = 0;

  // jo main storage mai usper ek foreach loop each time we will one one object
  transactionStorage.forEach((transaction) => {
    // condition to check weather transaction ka type income hai ya nai and if yes then totalincome mai uska amount ko add kardo
    if (transaction.type === "income") {
      totalIncome += transaction.amount;
    } else {
      // nai tho else mai add kardo
      totalExpense += transaction.amount;
    }
  });

  // atlast sab sizz ko display kardo UI mai
  yourIncome.textContent = totalIncome;
  yourExpense.textContent = totalExpense;
  yourBalance.textContent = totalIncome - totalExpense;
}

// html sai filteritem ko select karna
let filterItem = document.querySelector("#filterItem");

// filter par event lagana change
filterItem.addEventListener("change", function (evt) {
  // agar filter mai all transaction select hoga then display mai sabb sizz display karwa do
  if (evt.target.value === "allTransaction") {
    addTransactionToUi(transactionStorage);
  } else if (evt.target.value === "income") {
    // agar filter mai income sleect hai then only income wala transaction ko display karwa do
    displayIncome();
  } else {
    displayExpense(); // nai tho expense ko display karwa do
  }
});

// ek function jo sirip income ko display kar waiga
function displayIncome() {
  // first pura transactionTableBody ko clean kardo taki new value dhal saku
  transactionTableBody.innerHTML = "";

  // jo main array storage hai usper ek foreach loop lagao, everytime ek transaction melegea object, here we name it as income
  transactionStorage.forEach((income) => {
    // condtion to check kya iska type income hai and if yeh then dubara sab tr,td create karo vlaue put karo and body mai add kardo
    if (income.type === "income") {
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      td1.textContent = income.date;
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.textContent = income.type;
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      td3.textContent = income.category;
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.textContent = income.amount;
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      td5.textContent = income.description;
      tr.appendChild(td5);

      transactionTableBody.appendChild(tr);
    }
  });
}

// ek function jo sirip expese ko display karwiaga
function displayExpense() {
  // first again pura tboyd ko clean karod
  transactionTableBody.innerHTML = "";

  // ek foreach loop main aray mai and each time we will get object and then check karega kya iska type expense tho nai hai and if yes then again tr,td sab crate karo value put karo and append kardo
  transactionStorage.forEach((income) => {
    if (income.type === "expense") {
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      td1.textContent = income.date;
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.textContent = income.type;
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      td3.textContent = income.category;
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.textContent = income.amount;
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      td5.textContent = income.description;
      tr.appendChild(td5);

      transactionTableBody.appendChild(tr);
    }
  });
}

// html sai serahitem input ko select karna
let searchItem = document.querySelector("#searchItem");

// seachitme mai event lagana input taki every time kuch type kare tho user ko just woi show hoga
searchItem.addEventListener("input", function (evt) {
  // woh text jo user seach karrai
  let searchText = evt.target.value.toLowerCase().trim();

  // ek conditoin to check kya jo seach kya woi empty tho nai hai and if yes then full ui ko display karwa do
  if (searchText === "") {
    addTransactionToUi(transactionStorage);
  } else {
    // ek filter array nam ka variable creat karo, adn fir uska andar he transaction storage mai filter laga do, jo ek function mangtai and funciton ka andar ek parameter adn fir, first jo v category ka text hai and uska descript ka text hai usko nekal loo and fir check karo kya jo user seach keyai woh category text and descript text ka andar hai adn if yes then usko return kardo , and fir lass mai ui wala function ko cll karo and uska andar pas kardo filter aray as avi uska andar hgoa return hone wala transaction, jo user search keya hgo
    let filteredArray = transactionStorage.filter(function (transaction) {
      let categoryText = transaction.category.toLowerCase();
      let descriptionText = transaction.description.toLowerCase();

      let isInclude =
        categoryText.includes(searchText) ||
        descriptionText.includes(searchText);

      return isInclude;
    });
    addTransactionToUi(filteredArray);
  }
});

// ek function ko user jo v transaciton add keyai usk save karega local storage mai
function saveTask() {
  localStorage.setItem("myTransactions", JSON.stringify(transactionStorage));
}

// ek function jo save task hai woh sab ko load karega
function loadTask() {
  let saveData = localStorage.getItem("myTransactions"); // first value nekalo

  // agar kuch data save hai then usko apna main aray mai dhal do
  if (saveData) {
    transactionStorage = JSON.parse(saveData);
  }
  // fir ui wala fuction ko call karo
  addTransactionToUi(transactionStorage);
  summary(); // summary waal function ko v call karo
}

// load task ko call karna starting mai he taki pata kar sake ke kuch save tho nai hai na
loadTask();

// html sai togglebtn ko select karna taki dark/light theme kar skau
let toggleBtn = document.querySelector("#themeToggle");

// condition to check ki local storage mai kya  save hai and jo save hai ukso he theme clas mai add kardo body mai
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

// toggle btn par click karna sai event
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode"); // agar hai tho hata do, agar nai hai to laga do

  // condition ka hisab sai text content badalna
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

let selectMonth = document.querySelector("#selectMonth");

selectMonth.addEventListener("change", function (evt) {
    let totalIncome = 0;
  let totalExpense = 0;
  let selectMonthVal = evt.target.value;

  let monthlyFilteredTransaction = transactionStorage.filter((transaction) => {
    // Date string se month extract karna (jaise '2026-05-12' ka part index 5-7 hai)
    const txMonth = transaction.date.split("-")[1];
    return txMonth === selectMonthVal;
  });

  monthlyFilteredTransaction.forEach((trans) => {
    if (trans.type === "income") {
      totalIncome += trans.amount;
    } else {
      // nai tho else mai add kardo
      totalExpense += trans.amount;
    }
  });

   yourIncome.textContent = totalIncome;
  yourExpense.textContent = totalExpense;
  yourBalance.textContent = totalIncome - totalExpense;
});
