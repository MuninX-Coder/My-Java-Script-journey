const imgInp = document.querySelector("#imgInp");
const titleInp = document.querySelector("#titleInp");
const statusInp = document.querySelector("#statusInp");
const addBtn = document.querySelector("#addBtn");
const searchInp = document.querySelector("#searchInp");
const sortBook = document.querySelector("#sortBook");
const bookSection =  document.querySelector(".bookSection");
const bookCounter = document.querySelector("#bookCounter");
const myForm = document.querySelector("#myForm");

let bookStorage = [];
let counter = 0;
let currentIndexCounter = 0;

addBtn.addEventListener("click", function(evt){
evt.preventDefault();

let imgInpVal = imgInp.value;
let titleInpVal = titleInp.value;
let statusInpVal = statusInp.value;

let myBooks = {
    bookImage: imgInpVal,
    bookTitle : titleInpVal,
    bookStatus : statusInpVal,
}

bookStorage.push(myBooks);
counter++;
displayBook();
myForm.reset();
})


function displayBook (){
    bookSection.innerHTML = "";

    bookStorage.forEach((book, index)=>{
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
      div.appendChild(h2)
      div.appendChild(p)
      div.appendChild(editbtn);
      div.appendChild(deletebtn)

      bookSection.appendChild(div);
      div.classList.add("styleDiv")


     deletebtn.addEventListener("click", function(){
        bookStorage.splice(currentIndexCounter, index);
     })
    })
}