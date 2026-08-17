// selecting all html elements
const addTask = document.querySelector("#addBtn");
const todoColumn = document.querySelector(".todoColumn");
const doingColumn = document.querySelector(".doingColumn");
const doneColumn = document.querySelector(".doneColumn");
const myForm = document.querySelector("#myForm");
const taskTitle = document.querySelector("#taskTitle");
const taskDescription = document.querySelector("#taskDescription");
const createBtn = document.querySelector("#createBtn");
const cancelBtn = document.querySelector("#CancelBtn");


// storage of task
let storeTask = [];
let taskCounter = 0;

// to make the form visible
addTask.addEventListener("click", function () {
  myForm.hidden = false;
});

// hide the form
cancelBtn.addEventListener("click", function () {
  taskTitle.value = "";
  taskDescription.value = "";
  myForm.hidden = true;
});


createBtn.addEventListener("click", function(){

  // input sai value lena
  let taskTitleVal = taskTitle.value;
  let taskDescriptionVal = taskDescription.value;

  // validation input value
  if(taskTitleVal.trim() === "") {
    alert("Enter Task title");
   return;
  } else if(taskDescriptionVal.trim() === "") {
    alert("Enter task description");
   return;
  }

  taskCounter++;
  // task object 

  let task = {
    title: taskTitleVal,
    description: taskDescriptionVal,
    status: "todo",
    identity : taskCounter,
  };


  // push to array
  storeTask.push(task);



})


function render(){
  todoColumn.textContent = "";
  doingColumn.textContent = "";
  doneColumn.textContent = "";

  
}