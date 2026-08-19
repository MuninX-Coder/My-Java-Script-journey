// variable - used to store any information data in memory

const accountId = 12323;
let accountEmail = "munin@gmail.com";
var accountPassword = "32454";
accountCity = "Lakhimpur";   // very bad way never use this way
let accountState;  // variable declaration  (undefined)

// const, var, let,  yeh sab already defined hai,   accountId, accountEmail  this are variable name 

// accountId =  3;  // error, assigment to constant varible, as const keyword is used
accountEmail = "borah@gmail.com";  // email will be changed, as let keyword is used
accountPassword = "756345";
accountCity = "Laluk";

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

/* 
don't use var keyword to create variable, use let and const
because of issue in block scope and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
