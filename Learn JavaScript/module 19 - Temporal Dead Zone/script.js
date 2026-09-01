// Temporal Dead zone (TDZ)
// let ya const varible ke lye declration se phele ak woh time/ ares jaha variable exist kartai , but access nai karksakti

// console.log(name)
// // this area is TDZ

// let name = "Munin"

// Code starts
// │
// │ ← TDZ
// │   name ko access nahi kar sakte
// │
// let name = "Munin";
// │
// │ ← Now usable
// │
// console.log(name);



// why TDZ exist
// TDZ js ko safer and less confusion banane mai use hotai
console.log(score)


let score = 100

// "Variable ko initialize hone se pehle use mat karo."


// TDZ with let

console.log(myName)

let myName = "Munin Borah"

// gives error as varible ko value nai melne sia phele access karne ka try karrai, refernce error melega


// TDZ with const 
// same like let


console.log(pokemon)
const pokemon = "charizard"

// step 1 programm start, js know const pokemon hai bolke
// step 2 first line exectue, so we get error as declartoion avi exection nai hua, so Pokemon avi TDZ mai hai, we cant access
// step 3 declartoin exectie hotai, and pokemon mai value atai



// TDZ vs hoisting

// hoisting -- js exection start hone sai pheledeclration ka setpup process mai handle karna 
// TDZ - let aur const variable ko declaration execute hone se pehle access nahi kar sakte.