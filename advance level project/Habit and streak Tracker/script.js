const addHabitBtn = document.querySelector("#addHabitBtn");
const habitsSection = document.querySelector("#habitsSection");
const myForm = document.querySelector("#myForm");
const habitNameInput = document.querySelector("#habitName");
const createHabitBtn = document.querySelector("#createHabitBtn");
const cancelHabitBtn = document.querySelector("#cancelHabitBtn");

// main storage
const habitStorageArray = [];

// addbtn mai event, when click the form become visible
addHabitBtn.addEventListener("click", () => {
  myForm.hidden = false;
});

// createbtn mai event when click to create a habit
createHabitBtn.addEventListener("click", function () {
  const habitNameInputValue = habitNameInput.value;
  if (habitNameInputValue === "") return;

  let myHabit = {
    habitName: habitNameInputValue,
    isCompleted: false,
  };

  habitStorageArray.push(myHabit);
  renderTask();
  habitNameInput.value = "";
});

// cancel btn logic to clear and hide the from
cancelHabitBtn.addEventListener("click", () => {
  habitNameInput.value = "";
  myForm.hidden = true;
});

function renderTask() {
  habitsSection.innerHTML = "";

  habitStorageArray.forEach((task, index) => {
    let mainDiv = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.textContent = task.habitName;

    let label = document.createElement("label");
    label.textContent = task.habitName;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";


    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    mainDiv.appendChild(h2);

    mainDiv.appendChild(checkbox);
    mainDiv.appendChild(label);
    mainDiv.appendChild(deleteBtn);

    habitsSection.appendChild(mainDiv);

    deleteBtn.addEventListener("click", function () {
      habitStorageArray.splice(index, 1);
      renderTask();
    });
  });
}


