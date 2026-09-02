// 1. what is closure ? 
// closure happens jab ek function yaad rakhtai and access kar saktai varible from its outer function even after the outer function has finished executing
// closure is basically jab ek function yaad rakhtai apna bahar wala fcuntion ka vraible and access kar sakti woh varible even jab outer function end hojae


function outer(){
    let name = "Munin";

    function inner(){
        console.log(name)
    }
    return inner;
}

let myFunction = outer();

myFunction();

// 1. outer()  execute huai
// 2. outer ka adnar name varible tha
// 3. outer ne inner function ko return keyai
// 4. outer() exection finish hogya
// 5. phir jab myFunction() call hua, inner ko name access mela, as myFuction() avi inner function hai

// why aceess kar saka, inner function apna jo outer function ka scope ka andr ka varible name tha usko access karna ka abitlity hai and isko he clousre boltai


function createCounter(){
    let count = 0;

    return function (){
        count++;
        console.log(count)
    }
}

let counter = createCounter();

counter();
counter();
counter();
counter();
counter();

// inner function outer function ka varible ko access karsatai even outer function end hojatai fir v isis ko he clousure boltia



// 2. lexical environment
// when js kisi function ko execture kartai, then woh function ke lye ek enviroinment create hotai jaha par uska local varible, paramters, and outer scope ka variable ka acces hotai.

function outer1(){
    let name = "Munin Borah"
    function inner1(){
        console.log(name);
        
    }
}
// outer1 ka apna environmetn hai jaha par uska name hai
// inner1 ka v apna environemtn hai, and inner apna outer1 lexical environment yani outer1 ka name ko acces karsaktai


// Lexical Environment = Function ke around available variables ka environment.

// Closure = Function ka us environment ke variables ko retain/access kar pana.


// 3. inner functions 
// ek aisa function jo kisi dusra function ka andar define keya jatai, ek function ka andar aur ek function

function outer2(){
    function inner2(){
        console.log("This is inner function");
        
    }
    inner2();
}
outer2();

// outer2 -- outer function
// inner2 -- inner function
// inner function apna parents outer function ka variables ko access kar sakta hai

function outer3(){
    let myName = "Munin Borah"

    function inner3(){
        console.log(myName)
    }

    inner3();
}
outer3();

// 1. outer3() exectue huai ok, myName varible create huai
// 2. inner3() function define huai, inner3() call huai
// inner ka andaar js myName dhuntai but nai meltai apna scope mai
// so js avi outer scope mai dhektai, wala myName meljatai






// 4. outer function 
// jo function ka andar koi dusra function hotai, usko outer function boltai

function outer4(){
    let name = "Munin"

    function inner4(){
        console.log(name);
        
    }
}

// outer4 -- outer function,  name outer function ka scope ka hai and inner function usko access kar saktai
// inner4 --  inner function



// 5. acessing parent scope 

// parent scope kya hotai
// ek function ka andar jab dusra function define hotai then woh function ka scope jo outer function hojatai, mtlb outer function ka andar inner function, and avi outer function jo parent outer  scope hai for inner function mtlb inner function jo access karsakti outerfunction ko


function outer5(){
    let message = "Hello"

    function inner5(){
        console.log(message);
        
    }
    inner5();
}

outer5();
// message -- outer5 ka scope mai hai
// inner --- outer ka andar defined hai
// isiliya inner parent/outer scope ka message ko access kar saktai


// Variable chahiye? Pehle apna scope dekho → nahi mila toh parent scope → phir uska parent → aise outer scopes ki chain mein search hota hai.


// 6. closure lifetime
// basically varible ko tab tak yad rakhna jab tak use hoo, outer function ka variable ko tab tak yaaad rakhna jab tak jaruri hoo

function outer6(){
    let name = "Munin"

    function inner6(){
        console.log(name);
        
        
    }
    return inner6;
}

const myFunction1 = outer6();
myFunction1();

// outer6 call hua, name create huai
// inner6 function creat huai
// outer jo inner ko return kar dya
// leken myFunction1 returned innerfunction ko still refernce kar raha hai
// iner ko name access karna ho sakta hai

// jab tak jaruri hai outer function ka varible ko rakho yad rakho taki use kar saku in inner function



// 7. closure memory

// basically kya horai ki, jab inner function ko outer scope ka varible ko access karna hotai, and woh function outer function ka finish hone ka baad bhi reachable hai, tho js woh require data ko retained karke rakhna hotai, taki inner function mai use karsakne ke lye

function createCounter1(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
        
    }


}

const counter1 = createCounter1();
// createCounter1() execture huai and finish hogya ok
// leken returnedfunction jo count use karrai jo, outerfunction createCounter ka hai

// Closure ek function ko state remember karne deta hai. Jab tak relevant closure reachable hai, uski required state bhi retain ho sakti hai.


// practical closure examples 

function createCounter2(){
    let count = 0;

    return function() {
        count++;
        return count;
    }
}
const counter2 = createCounter2();

// createCounter2() chala and end hogya ok, woh return keyai ek function and woh function v return keyai count, so eventaully avi count hai creatCounter2() mai 


// custom greeting

function createGreeting(greeting){
    return function(name){
        return `${greeting}, ${name}`
    }
}
const sayHello = createGreeting("Hello");
sayHello("Munin")


// Data privacy using closures

function creatBankAccount(){
    let balance = 0;

    return {
        deposit(amount) {
            balance = balance + amount;
        },

        getBalance(){
            return balance;
        }
    }
}

const account = creatBankAccount();
account.deposit(500)
account.getBalance();

// this is a exmaple of data privacy uisng clousred


// 10. module pattern using closures 
// module pattern -- reated data and function ko ek private scope ka andar organize karna, and sirip required function ko outside expose karna


function createUserModule(){
    let username = "Munin" // cant access direclty
    let password = "Secret"  // cant acess directly

    function getUsername(){
        return username;
    }

    function changeUsername(newUserName){
        username = newUserName;
    }

    return {
        getUsername, // acess outside
        changeUsername // acess outside
    }
}

const user = createUserModule();
let userName = user.getUsername();
console.log(userName);


// Module Pattern related code ko ek unit mein organize karta hai.
// Closure private data/state maintain kar sakta hai.
// Sirf selected functions outside expose kiye ja sakte hain.
// Yeh controlled public interface create karta hai.
// Modern JavaScript mein modules ke liye ES Modules bhi use hote hain.