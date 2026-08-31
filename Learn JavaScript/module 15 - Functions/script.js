// what is functions 
// functioon ek block of code hai jo kooi task ko bar bar karne mai kaam katai, jab v call kartai function ko then woh function woh kaam ko kartai, basicaly repetative kaam ko karne mai help kartai 

// function greet(){
//     console.log("hello world");
// }

// greet();

// funtion -- yeh function ka keyword hai, yeh js ko boltai ki this is a function
// () -- yaha mai parameters and arguments function ko recieve kartai 
// {} -- yeh function ka body hai iska andr ka code bar bar run hoga jitna bar call karega
// greet(); -- yeh function ko call karrai mtlb bolrai function tum run karo




// why function exist
// function exist kartai taki ham luk apna code ko more readable, organised and repetative kaam ko bar bar kar saku, help kartai code ko maintain karne hai.. bar bar same kaam ko karne mai



// function Declaration 
// function create karna ka tarika 

// function myGreet(){      // yeh function declaration hai
//     console.log("hello");
// }

// // function -- ek keyword hia jo js ko boltai ki tum function define karrai
// // myGreet-- fnction ka naam hai
// // () -- parameters ke lye use hotai
// // {} -- function body woh block of code jo run hoga

// myGreet();  // yeh function invocation hai/ call hai bolsaktai




// function expression 
// a different way of creating a function 

// const myName = function(){
//     console.log("Munin");
// };

// // const myName -- ek variable hai myName sai, jisak andar ek function hai
// // = -- myName varible mai kuch value assign karo, in this case a function
// // function -- function create  karo 

// myName();

// function declaration -- function ko directly naam do
// function expression -- function banao aur usko kisi varible mai store karo

// java script mai function ek value ho sakta hai


// 5. Named function expression 

// this is know as named function expression
// const great = function sayHello(){
//     console.log("hello named function");
// }

// // great -- yeh bahar wala varible name hai jo function ko access karta hai
// // sayHello -- yeh function expression ka function name hai

// great();  // to call the function, then why sayHello, sayHello bahar sai access nai hosaktai as woh great variable ka andr hai soo andar he access karsaktai

// sayHello();  -- not defined as yeh great() ka adnar wala function hai




// 6. Anonymous Function 
// ek function jisko kud ka name nai hotai usko anonymous function boltai


// const anonymousFnc = function(){
//     console.log("This is anonyjous function")
// };

// anonymousFnc(); 

// anonymousFnc -- yeh varible ka naam hai jisa andar ek function hai, yeh function ka declared name nai hai

// acutal anonymous function 

// function(){
//     console.log("acutal anonymous");
// }; 

// this is acutal anonymous function but this will give error, as a function need a name so that it can be executed




// 7. arrow functions
// a new way of writting function 

// const myFnc = () =>{
//     console.log("arrow function");
// };

// myFnc();

// => -- arrow boltai

// const myFnc -- ek varible hai jiska naam myFnc hai
// = -- right side ka value ko (function in this case) ko myFnc mai assing karo
// () -- function ka input and parameter aiga in future 
// => -- yeh arrow function syntax hai
// {} -- function body, iska andr ka code / instruction run hoga 


// Arrow function is another kind of function syntax with some behavior differences from regular functions.



// 8. function syntax 
// syntax -- js mai koi sizz ko likhne ka correct structure

// fuction declaraion 

// function functionName(){
//     // function body
// }

// function -- keyword
// functionName -- function ka name
// () -- parameter ka jagah
// {} -- function body


// function expression syntax 

// const functionName = function(){
//     // function body
// }
// functionName();
// const functionName -- variable name
// = - assingment 
// function -- function expression
// () -- parameter ka jagah
// {} -- function body
// ; -- assignment  statement end


// Named function expression syntax 

// const newFnc = function interName(){
//     // function body
// }

// newFnc -- to acess the bahar ka function
// interName -- function expression ka internal name


// arrow function syntax 

// const myArowFnc = () =>{
//     console.log("hello")
// };

// const myArowFnc -- function ko access karne varible name
// =  -- assignment
// () -- parameter ki place
// => -- arrow function syntax
// {} -- function body




// 9. function invocation 
// invocation means function ko exectue/run karna

// function yourAge(){
//     console.log(56);
    
// }

// yourAge();  // function call
// yourAge  // this is function reference 



// 10. function return Value 
// return value is basically woh value jo js ka function bapas sai return kartai right


function add(){
    return 10 + 20;
}

let result = add();
console.log(result);

// ek function hai add naam ka jo return karrai 10 + 20, so avi yeh horai ki, jab add ko call kartai then woh return kartai 30, mtlb avi add() ka pass hia 30, and then usko ek varible ka anr store kartai and we can see the result

// function call itself can produce a value

function getMovieTitle(){
    return "Avengers";
}
const movieTitle = getMovieTitle();
console.log(movieTitle);


// jab return execute hotai, then function exectuion immeditaty end ho jatai, after return, return ka baad wala code run nai hoga

function test(){
    console.log("First");
    return "Done";
    console.log("second")
}
test();  // first print hoga and test() ka andar "Done" save hogeay




// 11. implicit Return 
// arrow function mai ek special shorthand hota hai jisko implicit return boltai

// implicit return -- js autmaticaly function se value return kar deta hai, without you writting the return keywrod explicity 

const sub = () => 10 - 5;  // same 10-5 hua jo value hai woh sub() ka andar save hogeya, jaha sai call hua wahi save hogeya
const rst = sub();
console.log(rst)


// without {} -- implicit return possible hai
const getMessage = () => "Hello";
// yaha hello jo automaticalay return hoga

const getNewMsg = () => {
    return "HEllo";
}
// yaha return keyword use karna hoga, nai karne sai undefind return hgoa




// 12. Explicit Return 
// explicit return mai ham kuch return keyword ka use karke return karenge

function newAdd(){
    return 10 + 20;  // yaha explicit return use horai, return value newAdd() mai chala jaiga 
}



// 13 returning multiple values 
// normally return ek hi value return kartai, but ek returned value ka andar multple values pack karke return kar saktai, array ya object 

function getUserInfo(){
    return ["Munin", 20]
}
// yeh funciton ek array return karrai, and yeh array ka andar multiple values hai
const userInfo = getUserInfo();
console.log(userInfo);


function getUserInfoObj(){
    return {
        name: "Munin",
        age: 19,
    };
}
// ok ek function ek object return karai yaha par, and woh object ka andr multiple vlaues hia
// technically return bass ek he object and array karrai, bass vlaues multiple hai array and object ka andar


// 14. early return pattern

// early reutrn pattern mtlb return execture hote hi function immediatly end hojana

function searchMovie(movieName){
    if(movieName === ""){
        return;  // this is early return function ka starting mai he check karke function ko rok derai, if condition match nai hone sai
    }
    console.log("searching movie...")
}