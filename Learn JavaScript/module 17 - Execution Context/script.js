// 1. what is exection context 
// exection context woh environment hai jaha par js code ko prepared hotai and executed hotai


// why exection context exist
// exection context basically code ko run karne ka tiem par pura mange karne mai help kartai,  eg -- konsa code run karrai, kaunsa varible available hai, kaunsa function avialable hai etc.


// Types of execution context 
// 1. global exection context (GEC)
// 2. function execution context (FEC)
// 3. eval exection context 



// 1. global exection context 
// jab js code ko run kartai then sabse phele ek GEC create hotai

let name = "Munin"
function greet(){
    console.log("Hello");
    
}
greet();

// in GEC top lvel code execute hota hai




// 2. function exection context 
// jab ek function ko call keya jatai then js uss function ke lye ek FEC create kartai

function hi(){
    let message = "Hi everyone"
    console.log(message);
    
}
hi();

// step 1 -- program start hua --- global exectuion context create hua
// step 2 -- js function ko encounter kartai, avi exectue nai horai, just function declration ko prepare/allocate kyau jatai, fnc body tab run hotai jab call hotai
// step 3 -- hi() call hua then js hi function ke lye ek new function exection context create kartai



// 3. eval exectuion context
// js mai historicaly ek eval() naam ka feature hai jo string ka andar lika js code ko execute kartai

console.log(eval("let x = 10"));



// GLOBAL EXECTION CONTEXT (GEC)
// jab js code ko run kartai/script start then uss code ko run karne ke lye ek GEC create hotai, yaha mai ham luk ka top level js code run hotai

let name1 = "Munin";
console.log(name1);

// yeh do line of code koi function ka andar nai hai so, yeh GEC/top level code hai, and GEC ka andar run hoga



// FUNCTION EXECUTION CONTEXT
// jab v js koi func ko run karne ke lye call kartai woh fnc ko then woh fnc ko exectue karne ke lye ek function execution context create hotai 

function greeting(){
    let message = "Munin"
    console.log(message);
    
}
greeting();  // jab yeh call keyai then ek FEC create huai

// FEC create hotai taki fnc  ka andar ka varible, values ko manage kar sakne ke lye

// jitna bar call hotai watna bar FEC create hotai 



// EVAL EXECUTION context
// ek fnc hai jo string ka andar ka js code ko actual js code ki tarah exectue kartai

eval("console.log('Hello')");  // eval exection context create hotai




// EXECTUON PHASE - 1 MEMORY CREATION PHASE
// jab js koi exection context ko process kartai then waha mai mainly 2 parts hotai
// 1. memory creation phase
// 2. execution phase


// Memory creation phase -- exection se phele variable and function ke lye environment prepare karne wala phase

let myName = "Munin"
function yourName(){
    console.log("HEllo")
}
yourName();

// step 1 -- js first dhektai ki code mai kya kya declare hai
// let myName,  function yourName(){}

// so ab js phele name aur yourName ke lye setup prepare kartai

// step 2 -- ab js code ko uper sai neehce run execute kartai
// let myNmae =  "Munin", myNmae ko value meltai
// yourNmae() ab function call hua so FEC create hua



// EXECUTION PHASE
// memory creation pahse mai basically sab vaarible ke lye prepartion hua, name-- prepared aisa kuch

// now in Exection phase js code ko uper sai neche run kartai

// step 1 -- let myNmae = "Munin"  // name ko vlaue melai
// step 2 -- function declration par  atai but avi execute nai htoai
// step 3 -- yourNmae() call hua so avi FEC create hoga and uska andar function code run hoga




// --------------------------------------------

// Variable Allocation
// js variable ka naam first setup kartai and acutal value normal exection ke time assing hotai, basically first ek memory varible ko allocate kardetai but koi vlaue nai hotai undefined, and jab exection pahse hotai then value meltai

let score = 20;
// memory creaton phase
// score -- > prepare,  score - undefined
// execution phase 
// score -- 20



// --------------------

// function Allocation 
good();
function good(){
    console.log("Good MORNIGN");
    
}
// step 1 -- memory creatoin phase
// js dhektai ki ek good naam ka function hai so, js phele hi func ko aviable/ready kar detai, esilya ham luk fnc ko declaration sai v phele call karskatai

// step 2 -- execution phase
// now js acutal code ko uper sai neche run kartai

// good()  -- now execute / and ek function exetion context create hotai


// ------------

// call stack kya hai 
// call stack is basically js ka woh mechanisim hia jo yeh track krtai ki avi konsa execction context active hai

function first(){
    console.log("first")
}
first();
console.log("Done");

// step 1 ---- progrma start 
// GEC active hua


// step 2 --- First() call hua
// first() ke lye ek FEC create keyai, adn call stack par rakhdya

// step 3 -- function runs 
// first print

// step 4 -- 
// first()  finish, so call stack sai remove FEC

// step 5 --GEC ka remainign code run hua so "Done" print hua


// call stack follow : LIFO
// last in, first out


// ----------------

// stack frames 
// call stck -- active exection context ko track karne ki stack

// call stack ka adnar har active function call ka ek entry/frame hota hai, jisko stack frame boltai

// call stack is plates ka pura stack
// stack frame -- stack ka ek individal plate

function first(){
    second();
}

function second(){
    console.log("Hello")
}

first();

// call stack 
//  stack frame : second()  -- last aya tha first execute hoga
// stack frame : first()
// stack frame : global  -- first mai aya tha last mai execute hoga




// ---------

// stack overflow
// jab call stack ki ek limit hit hotai then js error throw kartia , stack overflow
// often show as maximum call stack size excceded

// function callKhudKo(){
//     console.log("stack overflowing khud ko calling");
// callKhudKo();    
// }

// callKhudKo();



// ----------------

// exection order 
// js synchornous code ko generally top to botton exetue kartai, leken jab function call kartai then temporaily uss functon ko execute kartai

console.log("1")

function order(){
    console.log("2");
}
console.log("3")

order();

console.log("4")

// first 1 print hua -- > fir 3 --> fir function call then 2 --- > last mai 4



// --------------

// function nesting
// ek function ka adnar dosra function define karna

function outer (){
    function inner(){
        console.log("Hello")
    }
    inner();
    console.log("after outer")
}

outer();


// step 1 
// outer() call hua
// stack mai  outer() -- first,  global -- last

// step 2 outer ka adnar js funciton ko meltai, inner fnc define horaha hai

// step 3 inner() call hua
// call stack mai -  inner()  first, outer() -- sec,  global -- last
// inner execute, then outer then global


// ---------------
// Recursive call stack

// recursione -- basically ek function khudko call kartai usko recursion boltai

function countDown(number){
    console.log(number)

    if(number > 1){
        countDown(number - 1)
    }
}
countDown(5)

// recursion mai har ek Recursive call ek naya FEC and stack frame create kartai
// coutDOwn(5)
// coutDOwn(4)
// coutDOwn(3)
// coutDOwn(2)
// coutDOwn(1)
// sb ke lye ek naya FEC create hoga