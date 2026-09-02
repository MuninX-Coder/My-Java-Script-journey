// console methods
// console -- js ka ek built in object hai jiska use mainly debugging aur infomration dekne ke lye hotai

console.log("HEllo")
// console mai dhektia

// console.error() -- error message dikhanaa
// console.warn() -- warinig dikhana
// console.table() -- data ko table format mai dhekna
// console.dir() -- object ko inspect karna

console.log("App started")
console.warn("something might be wrong")
console.error("something went wrong")



// console .log
// value ko console mai print katia

console.log("hello")

let age = 34;
console.log(age)


// console.table()
// dat ko console mai table ka format mai display karwane ke lye use hotai

const user = {
    name:"Munin",
    age: 19,
    role: "Developer"
}
console.table(user)

const userARR = [
    {
        name: "Munin",
        age : 19,
    },
    {
        name : "Alex",
        age : 22
    }
]
console.table(userARR)



// console.dir()
// mainly koi object ko inspect karne ke lye use hotai

console.dir(user)


// consle.error()
// console mai error message show karne ke lye
console.error("failed to load user data");


// console.warn()
// console mai warning message dikhana ke lye use hotai

console.warn("username is too short")



// Debugger
// debugger ek js ka ek statement hai jo debugging ke time program exection ko pause karne le lye use hotai

function calculateTotal(price, quantity){
    const total = price * quantity;
    
    debugger;  // iska use sai we can debug excatly ho kya rai
    
    return total;
}

calculateTotal(100,3)


// breakpoints 
// breakpoint is a poile/line hai jaha ham debugger ko boltai jab is line par ajae, exection pause kardo




// step into
// step into debugging ka ek option hai jo next exection step par jata hia

// step over 
// step over bhi debugger mai exection ko age badahta hia


// call stack inspection 
// useful to check avi code kis function ka andar run horai, and yaha tak kaise pucha

function first(){
    second();
}

function second(){
    third();
}
function third(){
    debugger;
}

first();