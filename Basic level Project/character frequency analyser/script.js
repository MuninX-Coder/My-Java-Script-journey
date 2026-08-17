let inputTxt = document.querySelector("#inputTxt");
let clickBtn = document.querySelector("#clickBtn");
let characterFrequency = document.querySelector("#characterFrequency");
let frequentCharacter = document.querySelector("#frequentCharacter");
let repeatedCharacter = document.querySelector("#repeatedCharacter");

clickBtn.addEventListener("click", function () {

  let characterObj = {};
  let highestCount = 0;
  let highestRepeated = "";
  let repeatedList = [];

  let inpVal = inputTxt.value.toLowerCase().replaceAll(" ", "");

  for (const letter of inpVal) {
    if (characterObj[letter]) {
      characterObj[letter] += 1;
    } else {
      characterObj[letter] = 1;
    }
  }

  for (const key in characterObj) {
    if (characterObj[key] > highestCount) {
      highestCount = characterObj[key];
      highestRepeated = key;
    }
  }

  for (const key in characterObj) {
   
    if(characterObj[key] > 1) {
        repeatedList.push(key);
    }
    
  }


    
  frequentCharacter.innerText = `Highest Repeated: "${highestRepeated}" (${highestCount} times)`;


  repeatedCharacter.innerText = `All Repeated Letters: ${repeatedList.join(", ")}`;


  characterFrequency.innerText = JSON.stringify(characterObj);
});
