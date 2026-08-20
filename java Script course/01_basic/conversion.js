let score = "34abc";



let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  // NaN -- not a number


// "34" --> 33
// "33abc" --> NaN ,  type - number
// true --> 1,   false ---> 0


let isLoddedIn = "munin";

let booleanIsLoggedIn = Boolean(isLoddedIn);

// console.log(booleanIsLoggedIn);


// 1 --> true   , 0 --> false
// "" --> false,  "munin" --> true

let someNumber = 33;

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ------------ operations -------------


let value = 3;
let negValue = -value;
// console.log(negValue);


// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 2);
// console.log(2 % 2);


let str1  = "hello"
let str2 = " munin"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 3);  // concatination, type conversion
// console.log(1 + 2 + "2");  

// console.log(2 + 3 * 3 % 2);

// console.log(+true);
// console.log(+""); 

let num1, num2, num3 
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
// gameCounter++;
++gameCounter;
// console.log(gameCounter);



// comparision 

// console.log(2 > 2);
// console.log(2 < 2);
// console.log(2 >= 2);
// console.log(2 <= 2);
// console.log(2 == 2);
// console.log(2 != 2);

// console.log("2" > 1);


// console.log(null > 0); // not converted
// console.log(null == 0);
// console.log(null >= 0); // null is converted to 0


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);

// we should avoid this type of comparision, always value clean code

// strict check ===      conversion nai hotai

console.log("2" === 2);
