// 1. variable shadwoing 
// basically jab inner scope mai ek same naam ka varible declrea hotai same as outer scope then inner scope jo outer scope ka variblo ko hide kar detai temporirly isko varible shoawoing boltai

let name = "outer"  // temporarily hide

function showName(){
    let name = "inner";
    console.log(name)
}
showName();


// hoisting puzzles 

console.log(score)
var score = 39;
// udefined
// var  declartion exection context ke createon pahse mai aviable hojata hai and initliay undefined value hotai

console.log(yourName)
let yourName = "Munin"

// reference error
// let declration v hoisted hotai, but initilization se phele acess nai kar sakta because of TDZ 

sayHello();

function sayHello(){
    console.log("Hello")
}
// exection context ka during avaible hotai, so call sai phele value meltai




// SCOPE PUZZLES


let myName = "Munin"

function greet(){
    console.log(myName)
}
greet(myName)

// Munin,  why geet ka andar myName nai hai so, woh apna outer scope mai dhuntai






// closure question 

function createCounter(){
    let count = 0;

    return function(){
        count++;
        return count;
    }
}
const counter1 = createCounter();
const counter2 = createCounter();