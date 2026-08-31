// scope
// scope mtlb hotai woh area ya woh daira jaha tak mera varible accessable hgoa
// scope determince where a varible can be access in your js code



// global scope
// jab koi variable top level par create hotai, koi block ya function ka andar nai then woh global scope varible hotai and woh har place mai acessable hotai

// const appName = "Movie search app"

// function showAppName(){
//     console.log(appName)
// }
// showAppName();



// functon scope
// jo varible function ka andar declrae huai , so uska scope v bas woi function tak hotai

function searchMovie(){
    const movieName = "Batman";
    console.log(movieName)
}
searchMovie();
// console.log(movieName);  // movieName is not defined bolega as, woh function ka andar declare hai and uska andar he use hosaktia, untill and unless usko return na kya hooo


// Function scope means variables declared inside a function are accessible inside that function and its nested scopes, but not directly from outside the function.



// Block scope
// koi v variable jo {} cruly braces mai bana hoo isko block scope bola jata hai

if(true){
    const message = "hello";  // block scope hai
}

// let aur const se block ke andar declare kiye gaye variables sirf us block ke andar accessible hote hain.
// var block scope nai hotai


// Module scope 
// in modern js mai ek file ko module ki tarah use kiya ja skata hai
// modules ka andar declared variable normally us module ke scope mai rahtai

// app.js -- > appname
// movie.js --> moviename

// app.js ka aappname autmatically movie.js mai direclty avaiblable nai hotai








// nested scope 
// mtlb hotai ek scope ka andar another scope

const softwareName = "movie app";  // global scope
function yourName() { 
    const moiveName = "Batman";  // function scope

    if(true) {
        const message = "Movie found"  // block scope
        // yar par sab access hoga as inner block apna outer block ko access karsaktai 
    }
}

// inner scope apna outer scope ko access kar sakti
// outer socope inner scope ko direclty access nai karsaktai



// scope chin
// mtlb koi varible ko use karna hooo tho seach karna hotai from andar sai bahar first khud ka scope dhektai fir , apna outer scope fir aur outer socope and fir at last global scope 

const value = "global"

function outer(){
    const value2 = "outer"
    
    function inner(){
        console.log(value2)  // first khud ko dhektai kya mera scope ka andar vlaue 2 hai if nai then outer scope jao and fir waha mai check karo adn fir yaha v nai mela then aur bahar jao
    }
    inner();
}

outer();

// Scope Chain is the path JavaScript follows to find a variable: current scope → outer scope → global scope.




// Lexical enviroment 
// lexical environment ek internal js concept hai jo track kartai hia ki current cod ka scope mai kaunsa varible/function hai adn outer socpe mai kya hai



// Lexical scope 
// function ka scope iss baat sai decide hotai hia ki function code mai kaha likha/created hia

const appName = "Movie App";

function outer() {
  const movieName = "Batman";

  function inner() {  // yeh outer functoin ka andar banai so yeh outer function ka v varaible ko access karsakga, kaha sia call haui farak nai partai
    console.log(movieName);
  }

  inner();
}

outer();

// yaha inner function outer function ka andar likha gya hai, esikliya inner function outer ka scope adn global scope sab acess kar sakti




// Variable Shadowing
// shadowing -- jab inner scope mai same naam ka varible declrea karti jo outer scope mai already exist kartai tho inner varible temporaily outer varible ko hide/shadow kar deta hai


const name = "global";  // global scope mai banai

function greet(){
    const name = "local";  // functional scope mai function ka andar
    console.log(name)  // first khud ka scope mai dhuntai if found woi print kardetai, global name jo avi ke lye hide hogeya as, same name sai created hai bolke
}

greet();
console.log(name)





// illegal shadowing


// function example(){
//     let message = "HELLO";
//     {
//         var message = "Hi";  // var is not a block scoope so, avi aisa horai ki js ko lagrai same funciton scope mai two varible hai with same name , so that why giving error
//     }
// }

function example(){
    var message = "Hello";
    {
        let message = "Hi"  // this will work as let is a block scope so conflict nai horai avi
        console.log(message)
    }
}
