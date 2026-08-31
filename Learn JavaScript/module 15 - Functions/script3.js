// first class function 
// first class function ka mtlb hotai js mia functio ko value ka tarah treat kiya ja saktai, mtlb function ko varible mai store kar saktai, kisi function ko argument mai pass kar sakti, functon ko return kar saktai

// function ko variable mai store karna
const greet = function( ){
    console.log("hello");
}
// yaha function ek value ka tarah greet mai store hogeya
greet();


// function ko argument ke form mai pass karna 

function sayHello(){
    console.log('Hello');
}

function runFunction(fn){
    fn();
}

runFunction(sayHello);

// yeh interestin hai, runFunction call keyai we send a arugment which is another function / just refernce bhejai mtlb function itself usko call nai keyai ok, and woh function jake fn mai keyai and jab fn() call keyai then sayHello() ruk hogeya atlast

// runFunction -- get -- sayHello -- > store in fn -- > fn runs -- > acutal sayHello runs 



// function sai function return karna

 // getFunction ek another function return karrai
function getFunction() {
    return function () {
        console.log("function return another function")
    }
}


// First-class functions mean JavaScript functions can be treated and used as values.



// higher order function
// ek higher order function woh function hai jo either recevies another function as an argument or return another function , only this 2 condtion


// function ko argument mai receeve karna

function great(){ // yeh callback function hai
    console.log("Hello great person");
}
function runGreatFnc(fn){  // runGreatFnc is a higher order functoin as it receive a function in the form of argument
fn();
}
runGreatFnc(great)

// runGreatFunction(great) -- function passed
// runGreatFunction receive keyai great function in fn,  so fn --- great function
// fn(); -- mtlb great function call keyai



// function return karna

function createGreeting() { // this is a higher order function as its returning ek another function
    return function(){
        console.log("returning another function");
    }
}

let jo_melai_another_function = createGreeting();
jo_melai_another_function();


// callback function
// callback ek function hota hai jo koi dusra function ko arugmetn ka form mai pass kya jatai, taki woh function usko badmia use call kar sake

function good(){  // this is callback function as, yeh functoin jo pass horai into another function
    console.log("hello good");
}

function runGoodFnc(callback){
    callback();
}
runGoodFnc(good);

// good functoin bana

// runGoodFnc bana,  callback ek parameter hai

// runGoodFnc(good)  -- function pass kya, good function jake save hua Callback parameter mai

// good -- > callback parameter mai receive hua
// callback = good

// callback() -- exectue hua so, good function exectue hua,  as callback = good



// pure function 
// ek aisa function jo apna bahar ka koi cheez change nai kartai, like variable and all, same input doo tho same ouput milega 

function add(num1, num2){
    return num1 + num2;
}

add(20,30);  // result hamesa simple hoga mtlb har bad add he hoga, thats why pure function, as koi bhar ka vairable ya koi sizz ko change v nai karri


let number = 0;
function increase(){
    number = number + 1;
}

// this is impure as its change outide vlaue




// side effect  / impure v boltai i guess
// ek function ko koi bahar ka sizz ko effect kare

// outside variable change karna 

let score = 0;
function increaseScore(){
    score = score + 10;
}
// here bahar ka score change keyai, yeh side effect hai




// function composition 
// simple mai bolu tho ek function ka output doosre function ka input ban jaye

function addTen(number){  // yeh function ka output alag function ka input bangya
    return number + 10;
}

function multiplyByTwo(number){  // woh alag functionm ka output yeh functon ka input ban gya
    return number * 2;
}

const result1 = addTen(10);  // addTen have 20, as ek ham deyia and ek pheel sai tha
const result2 = multiplyByTwo(result1)  // 20 pas hua and then receive 40
console.log(result1)
console.log(result2)  // 40 melega





// recursive functions
// jab ek function khud ko hee call karta hai usko recursive function boltai 


function countDown(number){
    if(number === 0){
        return;
    }
    console.log(number);
    countDown(number - 1);
}
countDown(3);

// yaha ek function khud ko he call karrai

// countDown(3)
//     ↓
// Print 3
//     ↓
// countDown(2)
//     ↓
// Print 2
//     ↓
// countDown(1)
//     ↓
// Print 1
//     ↓
// countDown(0)
//     ↓
// Base case reached
//     ↓
// return
//     ↓
// Stop

// recursive call -- function khud ko call kare
// countDown(number - 1)

// base case  -- ek point jaha par recursion stop hoo
// number === 0 --> return



// Tail recursion 
// jab recursive function call functon ka adnar last operation ho, usko tail recursive keheta hai



function counting(number){
    if(number === 0){
        return;
    }
    console.log(number);
    return counting(number - 1);
}


// immediately invoked functoin expression (IIFE)
// ek function jo create hote hi immediately execute ho jata hai


(function () {
    console.log("iife running");
})();

// (function () {        function expression create karta hai
//     console.log("iife running");
// });

// () -- immediatley invoke karta hai