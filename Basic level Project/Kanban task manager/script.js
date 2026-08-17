// html sai pura sab required elements ko select keyai
const addTaskBtn = document.querySelector("#addTaskBtn");
const todoColumn = document.querySelector("#todoColumn");
const doingColumn = document.querySelector("#doingColumn");
const doneColumn = document.querySelector("#doneColumn");
const myForm = document.querySelector("#myForm");
const cancelBtn = document.querySelector("#cancelBtn");
const createBtn = document.querySelector("#createBtn");
const titleTask = document.querySelector("#title");
const descriptionTask = document.querySelector("#description");
const themeBtn = document.querySelector("#themeBtn");

// storage - ek storage array jaha par pura task luk store hoga
let myTaskStore = [];

let editingIndex = null;
let draggedIndex = null;

// save function
function saveTask() {
  // yeh function save kartai sab vlaues ko stirng ka format mia local storeage par task nam sai
  localStorage.setItem("task", JSON.stringify(myTaskStore));
}

// load function
function loadTask() {
  // jo v local storage mai save tha task naam sai usko ek storeTask naam ka variable mai nekalna
  let storedTask = localStorage.getItem("task");

  // ek condition first check kartai kya woh staored task null tho nai hai mtlb kali tho nai hai and agar nai hia then mytaskstore ka andar storedtask ko dhaldo woh v josn.parse karke mtlb bapas same format mai jaise woh phele tha array
  if (storedTask !== null) {
    myTaskStore = JSON.parse(storedTask);
    render();  // fir render function call karo
  }
}

// addbtn   when click form visible hojae, initially form hidden hoga but jab addbtn par click hoga then woh hidden false hojaiga and form visible hojaiga web apge mai 
addTaskBtn.addEventListener("click", function () {
  myForm.hidden = false;
});

// when click  form dubara hat jaee, cancel button click hone par form ka hidden dubara true hojaiga and form firse gayab hojaiga
cancelBtn.addEventListener("click", function () {
  myForm.hidden = true;
});

// createbtn par click hone sai task create hoga
createBtn.addEventListener("click", function () {
  // first  jo v input ka vlaue hia usko lega titletaskval and descriptiontaskval mai, iska andar jo user input deyai woh store hai
  let titleTaskVal = titleTask.value;
  let descriptionTaskVal = descriptionTask.value;

  // ek object sab task ko ke lye alag alag sai, task jo object ka form mai store hoga array mai, so yaha mai ek object create horai task naam sai and uska andar kuch keys hoga like task ka title, task ka description and status jo baad mai kaam aiga, and yeh sab keys ka vlaue ko woh sab joo user enter keyai and input
  let task = {
    TaskTitle: titleTaskVal,
    TaskDescription: descriptionTaskVal,
    status: editingIndex === null ? "todo" : myTaskStore[editingIndex].status,
  };

  if (editingIndex === null) {
    // yeh object ko array mai push karega woh mytaskstorage naam ka array mai
    myTaskStore.push(task);
  } else {
    // Existing Task Update
    myTaskStore[editingIndex] = task;

    // Edit complete, wapas Create Mode
    editingIndex = null;
  }

  render();
  saveTask();
  // to clen the input fields
  titleTask.value = "";
  descriptionTask.value = "";
  myForm.hidden = true;
});


// jo doing column hai usper ek event listern lagao dragover bolke taki usska uper drag kar skau and fir preventdeafult kardo mtlb js ko refresh hone maat do aisa kuch
doingColumn.addEventListener("dragover", function (event) {
  event.preventDefault();
});

// same doing column par drop wala event lagao taki jo task hai usper drop kar saku and jab drop haoje then mytaskstore ka andar jo draggedindex hai uska status ko doing kar set kardo, basically jo v task jo dragged horai uska ek index value mela tha foreach loop ka time par usko ek variable draggedindex naam ka variable mai save keyia and jab v usko koi alag column mai drag keyai task ko then uska status ko chagne keyai based on woh kaha drop huai, fir render funcion call keyai adn fir savetask function v
doingColumn.addEventListener("drop", function () {
  myTaskStore[draggedIndex].status = "doing";
  render();
  saveTask();
});


// same as doing ka sath jo jo huai
doneColumn.addEventListener("dragover", function (event) {
  event.preventDefault();
});

// same as doing ka sath jo jo hua
doneColumn.addEventListener("drop", function () {
  myTaskStore[draggedIndex].status = "done";
  render();
  saveTask();
});

// same as done and doing ka sath jo jo hua
todoColumn.addEventListener("dragover", function (event) {
  event.preventDefault();
});

// same as dong and done ka sth jo jo huai
todoColumn.addEventListener("drop", function () {
  myTaskStore[draggedIndex].status = "todo";
  render();
  saveTask();
});


// yeh ek function hai jo sasb task ko view karne mai help karwaiga, mtlb render karwanae mai
function render() {

  // sabse first teeno column mai jo v hai usko hata do mltb pura clean karna
  todoColumn.textContent = "";
  doingColumn.textContent = "";
  doneColumn.textContent = "";

  // ek foreach loop, mytaskstore par, mtlb woh array storage mai, and yaha mai we will get each time our one by one task and its index
  myTaskStore.forEach((myTask, index) => {

    // for every task, ek div create hoga and woh draggable hoga that why draggable true hai
    let div = document.createElement("div");
    div.draggable = true;

    // div mai ek eventlistener dragstart naam hai jo yeh karega ki, usko drag karwaiga and jaise hee usko click kareke drag karega then uska index ek draggedindex naam ka varaible mai save hojagia jo hamko luk ko help kawaiga in future
    div.addEventListener("dragstart", function () {
      draggedIndex = index;
    });

    // fir alag elements create hoga like h3 for heading, p for description, and 2 buttons edit btn and delete btn
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";  // edit btn ka andar text dena "edit"
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";  // delete btn ka andar text dena "delete"

    // ho h3 and p create hua uska andar  woh array ka andar ka jo ek ek object hai(task) uska task ka title and task ka description sotre karana text content mai dehekana
    h3.textContent = myTask.TaskTitle;
    p.textContent = myTask.TaskDescription;


    // fir sab sizz ko div mai append kar dena
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);


    // ek condition to check ki jo task ko drag karega uska status kya hai, taki woh task ko woi column ka andar rakhu jo uska status hoga, mtlb ki if task ka status doing hai tho woh doing column mai jaiga same goes for todo and done
    if (myTask.status === "todo") {
      todoColumn.appendChild(div);
    } else if (myTask.status === "doing") {
      doingColumn.appendChild(div);
    } else {
      doneColumn.appendChild(div);
    }

    // deleting the task -- woh delete button jo create keya for each task uss delete btn mai event listener lagana delete karna how basically myTaskStore hai na usko splice karna from index ka num  sai 1,  yeh index ka number woh foreach loop sai ayai basically for each loop har ek object ke lye run horai and sabke ke lye ek index number v derai,  so jab delete btn par click kartai then myTaskstore array mai sai 1 vlaue hata detai, based on woh index ka value
    deleteBtn.addEventListener("click", function () {
      myTaskStore.splice(index, 1);
      render();  // fir render function call hotai
      saveTask(); // fir save hotai
    });

    // editing the task - yeh edit btn par event listener lagana and jab v click hoo then, editingindex = index mtlb iss pata hoga konsa task jo edit horai, agar index 2 hai tho task 2 jo edit horai and woh editingindex mia save v horai for future purpose, fir form jo hidden horai, and tasktitle ka value hai woh mytask.tasktile rakha same goes for descriptin taki woh task ko edit karu joo avi click hua
    editBtn.addEventListener("click", function () {
      editingIndex = index;
      myForm.hidden = false;
      titleTask.value = myTask.TaskTitle;
      descriptionTask.value = myTask.TaskDescription;
    });
  });
}

// Load Theme  -- dark theme ke lye basically local storea mai theme ko save karna theme dark v hosaktai light v
let savedTheme = localStorage.getItem("theme");

// condition lagana and dhekna theme dark hai ya light and dark hai tho dark-mode class ko body mai laga dena, adn themebtn ka textcontent ko v change kardena
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeBtn.textContent = "☀️";
}

// Toggle Theme - ek event listner lagana and and yeh karna jab v click hoo then tootle bare class darkmode mblt lagai tho hata do nai lagai tho laga do
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");


  // fir ek condition check karo and dheko kya body mai class list dark mode hai adn if yes then local storagge mai theme ko dark save kardo and themebtn ka textconnt change kardo, and agar nai hai then local storage mai light theme laga do and theme btn ka textnconetn ko change kardo
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "🌙";
  }
});

// pae ka starting mai v jo v lcoal storage mai save hai usko call kardo taki sab purnana value display hojae
loadTask();
