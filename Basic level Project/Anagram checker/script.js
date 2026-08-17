let word1 = document.querySelector("#input-1");
let word2 = document.querySelector("#input-2");
let resultBtn = document.querySelector("#resultbtn");
let display = document.querySelector("#display");

resultBtn.addEventListener("click", function () {
  let word1Value = word1.value.replaceAll(" ", "");
  let word2Value = word2.value.replaceAll(" ", "");

  if(word1Value === "" || word2Value === ""){
    display.textContent = "Empty✌️";
    return;
  }
  let sortedWord1 = word1Value.toLowerCase().split("").sort().join("");
  console.log(sortedWord1);

  let sortedWord2 = word2Value.toLowerCase().split("").sort().join("");
  console.log(sortedWord2);

 if (sortedWord1 !== sortedWord2) {
    display.textContent = "Not Anagram❌";
    return;
  } else {
    display.textContent = "Yes Anagram😁";
  }
});
