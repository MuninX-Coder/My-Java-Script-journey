// some methods of string

const { subscribe } = require("firebase/data-connect");

// methods are built-in functionality that are provided by js to work with string and this are called as methods


// Property = information/value deti hai
// Method = koi operation/action perform karta hai


// cartAt()
// ek string method hai jo stirng ka koi specific postition ka character return kartai 

let myString = "munin borah";

console.log(myString.charAt(3))  // return karega ki index 3 mai konsa charcter hai , in this case "i"

// if value nai hai then return "" empty string



// at()
// string method jo string ka kisi specific position ka chacter return kartai 

console.log(myString.at(4));  // reutn "n" 

// main difference is it suppost negative index

console.log(myString.at(-3));  // return 3, as utla sai count keyai

console.log(myString.at(-1));  // gets the last character

// postivie index -- start sai access
// negative index -- end sai access



// includes()
// string method jo check kartai ki string ka andar koi specific text ya character preset hai ya nai

// return true and false 

console.log(myString.includes("munin"))  // "munin" exist kartai myString mai

// this is case senitive ok,  "hello" not eaqual to "Hello"



// startsWith()
// check kartai ki kya stirng koi specific text se start hotai
// return true and false

let check = (myString.startsWith("munin"));  // return true
console.log(check)

// this is also case sensitive



// endsWith()
// string method that check kya string kisi specific text sai end hotai hai

console.log(myString.endsWith("borah"));  // return true as, value end with "borah"


// indexOf()
// string method to find out the index position of a character or text

console.log(myString.indexOf("i"))

// if vlaue nai mela then -1, which means, seach hui value string mai nai hai

console.log(myString.indexOf("munin"));  // 0
console.log(myString.indexOf("borah"));  // 6

//  becuase it return only first charcter ko dhektai, and return only jo first mai melai




// lastIndexOf()
// string method jo kisi character ya text ka last occuraence ka index return kartia

console.log(myString.lastIndexOf("b"));

// reutrn jo last mai melai, if two b hota then last wala return karta

console.log(myString.indexOf("n"))  // jo first mai "n" mela woh return hua uska index
console.log(myString.lastIndexOf("n")) // jo last mai "n" mela woh return hau uska index

// vlaue nai melai then -1


// slice()
// string method hai jo original stiring ka ek specific part extract karke ek new string mai return kartai

myString = "munin borah what are you currently learning";


// string.slice(startIndex, endIndex)

let newStr = myString.slice(0,3);
console.log(newStr)  // 0 sai start karke 3 index tak jao, 3 index inclue nai hoga

// support negtive index also



// substrings()
// string method hai jo string ka ek specific part extrack karke new string return kartai 

// string.substring(startIndex, endIndex)

let subStrin = myString.substring(1,4);
console.log(subStrin);


// dono same kaam kartai slice and substring bass, substring -vlaue ko 0 consider kartai

let negStr = myString.substring(-3, 5); 
console.log(negStr)  // -3 is condider as 0, so we get from 0 to index 5

// if start index end index sai bara hoga then swap kardega ulta kardega



// replace ()
// stirng method jo string ka andar ka kisi text ko doosre text sai replace kartai

// string.replace(searchValue, replacementValue)


console.log(myString.replace("learning", "javascript"));  // learning jo replace hogeya javascript sai

// new string return kartai ok, original string change nai hotai as, sting are immutable

// first value ko replace kartai jo meltai , to replace sabko then we use replaceAll()



// replaceAll()
// ek string ka andar ka sare vlaue ko koi alag value sai repalce kardtai

// string.replaceAll(searchValue, replacementValue)

let replaceStr = "cat cat cat"
let newRep = replaceStr.replaceAll("cat", "dog");
console.log(newRep);

// sab cat jo dog sai replace hogeya


// split()
// string method hai jo ek string ko todkar multiiple parts ami divide kardetai, result ek array hotai

// string.split(seperator)
// sperator -- bataai ki string ko kis basis par todna hai

let spit = myString.split(" ") // space ka basis mai tordo
console.log(spit);  // this is a array



// trim()
// ek method hai jo string ka start aur end sai extra whitespace remove kar detai

let trimStr = "  what is your name  ";
console.log(trimStr.trim());  // start aur end ka space hat jaiga, but bich ka nai, return new string


// trimStart()
// ek string method jo sirip beginnign se space remove kartai

let trimStrSTR = "  hello";
console.log(trimStrSTR.trimStart());  // only first sai space remove hua and also, return new str



// trimEnd()
// string method hai jo spaces sirip end sai remove kartai

let trimEndStr = "  hello world   "
console.log(trimEndStr.trimEnd());  // end ka space remove hojaiga, return new string



// toUpperCase()
// string method that convert string letter to uppercase

console.log(myString.toUpperCase())  // return new string, as always stirng are immutable


// toLowerCase()
// string method that convert string letter to lowercase

console.log(myString.toLowerCase());  // return new string, lowercase


// repeat()
// string method jo stirng ko given number of times repeat karke new string return kartai

// string.repeat(count)
// count -- tell string kitna bar repeat karna hai

console.log("hi".repeat(4));  // repeat hi  4 times



// padStart()
// string method hai jo stirng ka start/beginning mai character add kartai, jab tak stirng specified total length tak nai puch jatai

// string.padStart(targetlength, padString)

// targetLenth -- final string ki total lenght kitni hoi chiaye
// padString --- start mai kya add karna hai

console.log("5".padStart(3,"0")) // string "5" ka andar 0 add karo jab tak total lenth 3 na hojaje, 3 is total length 



// padEnd()
// string method hai jo string ka end mai character add kartai, jab tak string specified totla length tak nai puchjatai

// string.padEnd(targetLength, padString)

// targetlength -- final string ka total lenght
// padString - end mai kya add karna hai

console.log("4".padEnd(10, "1"));  // jab tak total length 10 na hojae, add karte raho 1 woh v last sai



// concat()
// string method that add two ya multiple sting and reutrn a new string

// string1.concat(string2)

console.log("hello".concat(" world"))

// return a new string, varible ka andar store karke dhekskattai



// match()
// string method jo string ka andar matching text/pattern dhoone ke lye use hotai

// string.mathc(patter)
// patter - woh sizz hai jisse ham stirng mai search/march karna chatai

console.log("hello world".match("world"));

// if no match then null



// search()
// string method jo stirng ka andar kisi text ya patter ki position find out kartai

// string.search(pattern)

console.log("hello world".search("world"));  // gives index 6, as maths start from index 6, same as indexOf but yeh pattern ka sath v use hotai