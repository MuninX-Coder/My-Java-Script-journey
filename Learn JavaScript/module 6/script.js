// Arithmetic operator 
// +, -, *, /, %, **
// % -- remainder 
// this are basic maths ka operations


// assingment operators 
// assingment operator ka kaam hai koi vairable mai vlaue assing karna 

let score = 10  // score ka andar 10 dhal do

// +=
score += 5;  // score = score + 5 in simple 

// -=, *=, /= etc sab same hai as +



// comparison operator 
// two vlaue ko compare kartai thats all, and usually return true and false 

console.log(43 == 43) // equal too (loose eqality), type conversion can be performed
console.log(34 === 34) // strict equal

// != -- not equal 
// !== -- strict not equal
// > -- greater than
// < -- less than 
// >= -- greater than or equl
// <= -- less than or equal



// logical operator 
// used to check multiple condition 

// AND && 
// both condiiton must be true, then only it will run other wise nai chalega

let age = 29;
let hasId = true;
console.log(age >= 20 && hasId);


// OR || 
// one codntion ture hone sai huai

let isAdmin = false;
let isOwner = true;
console.log(isAdmin || isOwner);

// NOT ! 
// reverse true ko false and false ko true

console.log(!false)
console.log(!true)


// )&& -- phele falsy value return kartai, agar sab ture hai then last value return kartai 

//  \\ -- phele truthy value return kartia and agar sab false hai tho last vlaue return kartai 




// unary operator 
// woh operator hai jo bass ek operand/value ka sath kaam kartai 

console.log(+45);
console.log(-45);
console.log(-"hello");


// increment/ decrement 

// ++ -- increment karna 1, 1 sai
// --  --> decrement,  1, 1 sai minus karna

let count = 5;
count++;
console.log(count)


// prefix vs postfix


// postFix x++
let x = 5;
let y = x++; // y ko x ka 5 meltai then x jo ++ hoke 6 hojatai
console.log(x);
console.log(y);


let a = 5;
let b = ++a;  // fist a increase hoke bantai 6 an then b mai assing hotai

console.log(a);
console.log(b);



// operator precedence
// basically decide karna multiple operation hai konsa first karna hia

let opr = 5 + 4 -45 *8 ;  // konsa first hoga fir next woh

// just do this simple

let newOrp =( (4 + 4) * 2) / 4; // simple dont make it complex just bracket ka use karlo



// associativity 
// associativity batatai ki agar same precedence wala operator ek expression mai hai tho konsa direction mai evaluate kiya jaiga

let see = 10 - 5 -2;  // goes left to right , first 10 -5, then 5  - 2 = 3
console.log(see);



// ternay operator 
// short form of if else , baicaly used for giving conditions

// condition ? valueIfTrue : valueIfFale

let myAge = 30;

let message = age >= 19 ? "adult" : "minor";
console.log(message);



// type of
// used to check the type of the data type
console.log(typeof "43");


// delete operator 
// delete operator is mainly used to delete/remove object ka property

let user = {
    name:"Munin", 
    age : 39
}
delete user.age;  // here with the help of delete age jo hat gya object sai, dot notation ka use horai

delete user["name"];  // using bracket notation to delete




// void  operator (introduction)
// this is a unary operator 
// koi expression ko evalute karna but hamesa undefined return karna

console.log(void 10)  // return undefined




// in operator 
// mainly used in object to check koi specific property exist kartai hai kya

let myUser = {
    name:"Munin", 
    age: 20
}

console.log("name" in myUser) // check karrai kya "name" key hai myUser mai, property exist kartai ki nai woh batatai


// instanceof
// instanceof ek operator hia jo check kartai ki kya koi object kisi specific class/constructor se create hua ya nai

let date = new Date();

date instanceof Date;  // true
// kyu ki date objce Date constructor se create hua hai

// let user = {}
user instanceof Object; // true
// as user ek object hai