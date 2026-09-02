const searchNotesInp = document.querySelector("#searchNotesInp");
const addBtn = document.querySelector("#addBtn");
const containerNotes = document.querySelector("#containerNotes");
const myForm = document.querySelector("#myForm");
const notesHeadingInp = document.querySelector("#notesHeadingInp");
const notesDetailesInp = document.querySelector("#notesDetailesInp");
const cancelBtn = document.querySelector("#cancelBtn");
const createBtn = document.querySelector("#createBtn");

let myNotesStorage = [];
let currentNoteId = null;


// LOCAL STORAGE

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(myNotesStorage));
}

function loadNotes() {
  const savedNotes = localStorage.getItem("notes");

  if (savedNotes) {
    myNotesStorage = JSON.parse(savedNotes);
  }
}


// FORM RESET

function resetForm() {
  notesHeadingInp.value = "";
  notesDetailesInp.value = "";
  currentNoteId = null;
  createBtn.textContent = "create";
  myForm.hidden = true;
}


// ADD BUTTON

addBtn.addEventListener("click", function () {
  resetForm();
  myForm.hidden = false;
});


// CANCEL BUTTON

cancelBtn.addEventListener("click", function () {
  resetForm();
});


// CREATE / UPDATE

createBtn.addEventListener("click", function () {
  const headingValue = notesHeadingInp.value;
  const notesDetailedValue = notesDetailesInp.value;

  if (
    headingValue.trim() === "" &&
    notesDetailedValue.trim() === ""
  ) {
    return;
  }


  // CREATE MODE

  if (currentNoteId === null) {
    const notes = {
      id: Date.now(),
      heading: headingValue,
      detailes: notesDetailedValue
    };

    myNotesStorage.push(notes);
  }


  // UPDATE MODE

  else {
    const noteToUpdate = myNotesStorage.find(function (note) {
      return note.id === currentNoteId;
    });

    noteToUpdate.heading = headingValue;
    noteToUpdate.detailes = notesDetailedValue;
  }


  saveNotes();

  displayNotesUi(myNotesStorage);

  resetForm();
});


// DISPLAY NOTES

function displayNotesUi(notesArray) {
  containerNotes.innerHTML = "";

  notesArray.forEach(function (notes) {
    const div = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = notes.heading;

    const p = document.createElement("p");
    p.textContent = notes.detailes;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";


    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);

    containerNotes.appendChild(div);


    // DELETE

    deleteBtn.addEventListener("click", function () {
      myNotesStorage = myNotesStorage.filter(function (note) {
        return note.id !== notes.id;
      });

      saveNotes();

      displayNotesUi(myNotesStorage);
    });


    // EDIT

    editBtn.addEventListener("click", function () {
      currentNoteId = notes.id;

      myForm.hidden = false;

      notesHeadingInp.value = notes.heading;
      notesDetailesInp.value = notes.detailes;

      createBtn.textContent = "update";
    });
  });
}


// SEARCH

searchNotesInp.addEventListener("input", function (e) {
  const searchText = e.target.value
    .trim()
    .toLowerCase();

  const mySearchedNote = myNotesStorage.filter(function (element) {
    return (
      element.heading.toLowerCase().includes(searchText) ||
      element.detailes.toLowerCase().includes(searchText)
    );
  });

  displayNotesUi(mySearchedNote);
});


// INITIAL LOAD

loadNotes();

displayNotesUi(myNotesStorage);