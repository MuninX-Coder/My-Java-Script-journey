// there are only 2 types mainly
// 1. primitives 
// - 7 types: string, Number, Boolean, null, undefined, symbol, BigInt

// js is dynamically types language mtlb type ko define nai karna
const score = 100;
const scoreValue = 34.5;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 2434545635723356724365345362345567n;

// 2. reference / non primitive
// - array, objects, functions

const heros = ["spiderman", "suparman", "sahaktiman"];  // reference type hotai mtlb just address melega if we try to copy

let myObj = {  // object
    name: "Munin",
    age : 18,
}


let myFunction = function(){
console.log("Hello world");

}

console.log(typeof myObj);


// undefined - undefined
// null - object
// boolean - boolean, 
// object - object
// function - 


/* 

### JavaScript `typeof` — Quick Notes

| Data Type / Value        | `typeof` Output   |
| ------------------------ | ----------------- |
| `"Hello"` → String       | `"string"`        |
| `123` → Number           | `"number"`        |
| `123n` → BigInt          | `"bigint"`        |
| `true / false` → Boolean | `"boolean"`       |
| `undefined`              | `"undefined"`     |
| `null`                   | **`"object"` ⚠️** |
| `Symbol()`               | `"symbol"`        |
| `{}` → Object            | `"object"`        |
| `[]` → Array             | `"object"`        |
| `function(){}`           | `"function"`      |

### ⚠️ Important

`typeof null` gives **`"object"`**, even though `null` is considered a **primitive value**. This is a historical JavaScript quirk.

```js
typeof "hello"       // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object" ⚠️
typeof 123n          // "bigint"
typeof Symbol()      // "symbol"
typeof {}            // "object"
typeof []            // "object"
typeof function(){}  // "function"
```

**Easy trick:**
`string → string`
`number → number`
`boolean → boolean`
`undefined → undefined`
`null → object ⚠️`
`object → object`
`array → object`
`function → function`

*/


// --------------------------------------------------------------------


// stack memeory
// heap memeory

// stack - primitive data type use hotai, jo v varaible declare keyai uska copy meltai

// heap - non primitive data type use hotai, jo v variable declrea kartai uska ek referecne meltai original vlaue ka, so kuch v change hoga tho original mai v change hoga


let myYoutubeName = "muninborahdotcom";   // stack memeory mai jaiga
let anotherName = myYoutubeName;
anotherName = "newMuninborahdotcom";
console.log(anotherName);
console.log(myYoutubeName);

// another name ka andar myoutubeName ageya but copy vlaue 


let userOne = {  // heap memoery msai store hoga and just reference melega, we can say originall vlaue ka address
    email: "user@gmail.com",
    upi: "user@pyb",
}

let userTwo = userOne; // usertwo mai change karne sai orginal value change hoga

userTwo.email = "munin@google.com";

console.log(userOne.email);
console.log(userTwo.email);


