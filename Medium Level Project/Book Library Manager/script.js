const imgInp = document.querySelector("#imgInp");
const titleInp = document.querySelector("#titleInp");
const statusInp = document.querySelector("#statusInp");
const addBtn = document.querySelector("#addBtn");
const searchInp = document.querySelector("#searchInp");
const sortBook = document.querySelector("#sortBook");
const bookSection = document.querySelector(".bookSection");
const bookCounter = document.querySelector("#bookCounter");
const myForm = document.querySelector("#myForm");

let bookStorage = [];
let counter = 0;
let editingIndex = null;

addBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (editingIndex !== null) {
    bookStorage[editingIndex].bookTitle = titleInp.value;
    bookStorage[editingIndex].bookStatus = statusInp.value;

    editingIndex = null;
    addBtn.textContent = "add book";
  } else {
    let titleInpVal = titleInp.value;
    let statusInpVal = statusInp.value;
    let imgFile = imgInp.files[0];
    let imgUrl = URL.createObjectURL(imgFile);
    let myBooks = {
      bookImage: imgUrl,
      bookTitle: titleInpVal,
      bookStatus: statusInpVal,
    };

    bookStorage.push(myBooks);
    counter++;
  }
  displayBook();
  myForm.reset();
});

// 🔥 FIX 1: arr = bookStorage likhne se agar search khali hoga, toh saari books dikhenge
function displayBook(arr = bookStorage) {
  bookSection.innerHTML = "";

  if (arr) {
    arr.forEach((book) => {
      // 🔥 FIX 2: Filtered array mein index badal jata hai,
      // isliye original bookStorage ka sahi index yahan se nikalenge:
      const actualIndex = bookStorage.indexOf(book);

      let image = document.createElement("img");
      image.src = book.bookImage;

      let h2 = document.createElement("h2");
      h2.textContent = book.bookTitle;

      let p = document.createElement("p");
      p.textContent = book.bookStatus;

      let deletebtn = document.createElement("button");
      deletebtn.textContent = "delete";

      let editbtn = document.createElement("button");
      editbtn.textContent = "edit";

      let div = document.createElement("div");

      div.appendChild(image);
      div.appendChild(h2);
      div.appendChild(p);
      div.appendChild(editbtn);
      div.appendChild(deletebtn);

      bookSection.appendChild(div);
      div.classList.add("styleDiv");

      // Delete Event Listener using actualIndex
      deletebtn.addEventListener("click", function () {
        bookStorage.splice(actualIndex, 1); // Sahi book delete hogi

        // Delete hone ke baad check karo search box mein kuch likha hai kya?
        // Agar likha hai toh filtered dikhao, nahi toh saari books dikhao
        if (searchInp.value.trim() !== "") {
          let searchText = searchInp.value.toLowerCase();
          let currentFiltered = bookStorage.filter((b) =>
            b.bookTitle.toLowerCase().includes(searchText),
          );
          displayBook(currentFiltered);
        } else {
          displayBook();
        }
      });

      // Edit Event Listener using actualIndex
      editbtn.addEventListener("click", function () {
        titleInp.value = bookStorage[actualIndex].bookTitle; // Sahi data form mein aayega
        statusInp.value = bookStorage[actualIndex].bookStatus;

        editingIndex = actualIndex; // Sahi index save hoga

        addBtn.textContent = "update book";
      });
    });
  }
}

// Search Input Listener (Isme koi change nahi, bas call badal gaya)
searchInp.addEventListener("input", function (evt) {
  let searchText = evt.target.value.toLowerCase();

  let filteredBook = bookStorage.filter((book) => {
    return book.bookTitle.toLowerCase().includes(searchText);
  });

  // Agar search input khali ho jaye, toh auto-fallback ho jayega original array pe
  displayBook(filteredBook);
});

sortBook.addEventListener("click", function (e) {
  let sorting = e.target.value;
  let copyBook = [...bookStorage];

  if (sorting === "all") {
    displayBook(bookStorage);
  } else if (sorting === "a-to-z") {
    copyBook.sort();
    displayBook(copyBook);
  } else {
    copyBook.sort().reverse();
    displayBook(copyBook);
  }
});
