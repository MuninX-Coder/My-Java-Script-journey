const name = "munin";
const repoCount = 12

console.log(`${name} ${repoCount}`);  // use backticks, template literals, we can used dynamic value


const gameName = new String("Munin-borah");
// console.log(gameName);
// console.log(typeof gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__.length);  // to access all the method 

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("i"));


// let newString = gameName.substring(0, 4);
// console.log(newString);


// const anotherString = gameName.slice(-2, 2)
// console.log(anotherString);


const newStringOne = "        munin   ";
console.log(newStringOne);
console.log(newStringOne.trim())  // remove starting and end space from teh string


const url = "https://google.com";
let newUrl = url.replace("google", "instagram");

console.log(newUrl);


console.log(newUrl.includes("instagram"));

console.log(gameName.split("-"));