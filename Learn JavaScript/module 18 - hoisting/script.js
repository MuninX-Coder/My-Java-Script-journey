// what is Hoisting
// hoisting is basically accessing the varaible or function before the declaration
// hoistin js ka exection process ka ek behavior hia jaha declration ko exection start hone sai phele hadn kya jata hai

// console.log(name)  // say cannot access before initilization, mtlb ki js ko pata hia ek varible hai name, nam sai but bass woh initlize nai hua, mtlb woh declare hochukai
let name = "Munin";

console.log(age);  // we got undefind

var age = 20 // var age; jo declare hua

// JavaScript code ko execute karne se pehle declarations ko apne execution environment ke rules ke according prepare karti hai.


// -----------

// varible hoisting

// var

console.log(score) // undefined
var score = 10;
// js executoin start hone sai phele,  score --> undefined


// let
// console.log(score1);

// let score1 = 10


// var, let, aur const tino declaration types JavaScript ke execution setup se related hain, but unka initialization aur declaration se pehle access karne ka behavior different hai.

// ----------

// function hoisting

greet();
function greet(){
    console.log("hello");
    
}

// step 1 - GEC create hua
// step 2 - setup / memory creation pahse, js function declration ko prepare karta hia
// step 3 -- exection phase, js first line extute kartia greet(), and FEC create hotai

// class declaration 
// error dega



// hoisting with var


console.log(name1)
var name1 = "Munin"

// step 1 -- programm start -- GEC created
// stpe 2 -- memory creaton / setup phase
// js ko melega var name; -- undefined

// step 3 -- exection phase start
// undefined we got

// step 4 --- next line mai value munin meljtai\

// var ka declaration setup phase mein available hota hai aur initially undefined se initialized hota hai. Isliye declaration line se pehle access karne par error nahi, usually undefined milta hai.



// hoisting with let


console.log(name2)
let name2 = "Munin"

// step 1 -- program start -- GEC created, code top level par hia
// step 2 -- setup / memory craetion
// js ko pata chaltai   let name; , but var ka tarah undefind nai hotai, exist kartai but cannot access TDZ

// step 3 exection phase
// first line mai error meltai, fir next line mai value assing hotai, remove first line 



// Hoisting with Const
// const ka hoisting behavior let ka almost same hahi

console.log(myName)
const myName = "Munin"

// step 1 - GEC created
// Step 2 -- js code ko pata chaltai  const myName;  exits but accont acees that done is also know as TDZ
// step 3 -- exection start and we got a error
// step 4 -- myNmae = "Munin"  vlaue melna myNmae ko


// -----------


// hoisting vs initilization

// hoisting -- ek js ka aisa behaviour hai jaha mai code run nai hone sai phele js ko varible funciton declration ko unka top par move kardetai(conceptualy)

// initilization -- jab variables ko first time value meltai usko initilization boltai