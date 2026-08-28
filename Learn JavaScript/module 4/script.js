// data type 
// koi v value ka type , mtlb data ka type
let age = 29;  // numer 
let name = "munin";  // string


// primitive data type 
// js ka kuch basic fundmental data types hotai usko primitive types boltai
// 1. Number
// 2. string
// 3. Boolean
// 4. Undefined
// 5. null
// 6. symbol
// 7. BigInt



// Reference types 
// different type of data types, jiska acutal  vlaue nai meltai un sab ka reference/address he meltai

// object, array, functions

let myobj = {  // object
    name: "Munin",
    age : 19,
}

let myArr = ["munin", 19];  // array
 


// Number 
// number ko represent kartai 

let myNum = 34;  // number data type
let myNum1 = 34.5;  //this is also number
// maths ka operation perform kya ja saktai



// string 
// string ka mtlb hai text data
// "munin",  "shuvam", "20" -- jo v double quote ya single quote mai hoga

let myName = "munin";  // this is a string

// ways to create string

let first = "Munin";   // using double quote
let second = 'munin' // single quote
let third = `munin` // uisng tempelate literatis backticks,  dynamic value ke lye



// Boolean 
// ek data type hai jo bass 2 value detai true ya false, motly condition ka time use hotai

let isLoggedIn = true;
let isStudent = false;



// undefined 
// undefined ka mtlb yeh hotai ki varible ko abi koi meaningful value assin gnai hua hai, mtlb woh value jo js khud provide kartai

 let yourAge;  // varible declare keyai but vlaue nai deyai tho isko js automatically undefined vlaue dega, undefiend is basically not value is provided or given



 // null
 // null ka mtlb hotai intentionally koi v value nai dena empty, basically bole tho empty

 let userName = null; // mtlb avi username emtpy hai kuch v value nai hai bass




 // symbol 
 // symnbol ka purpse hotai unique values/identifiers create karna 

 let firstSym = Symbol("id");
 let secSym = Symbol("id");

 console.log(firstSym === secSym);  // false 
 


 // BigInt
 //  used to represent a very big integers 

 let bigNumber = 3453456243456345654135n; // used n at last taki bigint hojaes woh



 // type of

 // js ka ek operator hai jise ham find out kartai ki is value ka data type kya hai 

console.log(typeof "munin");
console.log(typeof 34);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);  // null ka object hai, yeh bug hai, as null is primitive value



// Dynamic typing 
// js ek dynamically types language hai
// mtlb js ka variable luk ko on going uska type change kar sakna , but aalg programming languae statis hotai mtlb data ka type fixed hotai
// JavaScript variables themselves are not permanently locked to one type; the values have types, and a variable can later be assigned a value of another type.

let frstType = "munin";
frstType = 34;
frstType = false;
frstType = undefined;

// see how ek eh varible ka data type etna bar change hojana