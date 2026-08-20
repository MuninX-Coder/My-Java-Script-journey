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