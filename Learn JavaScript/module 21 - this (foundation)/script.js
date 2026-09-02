//  what is this 
// this js ka ek special keyword hai
// this  function ka exection ke context sai related hai
// this  ka value fixed nai hotai, js mai this depend kartai , konsa function kaise call horaha hai

function showThis(){
    console.log(this)
}
showThis();

const user = {
    name : "Munin",

    sayHello() {
        console.log(this.name)
    }
}
 user.sayHello(); // this object ka data ko access karne ke kaam ata hai

//  this JavaScript ka special keyword hai.
// this ki value fixed nahi hoti.
// Normal functions mein this mainly function kaise call hua us par depend karta hai.
// this ko function ke parent object ke saath automatically equal mat samjho.
// Arrow functions ka this alag rule follow karta hai.

console.log("----------------------------------------------")

// 2. global this
// global context -- jab js code koi funciton ka andar nai, directy top level par run hotai, usko global context boltai

console.log(this)

// brower mai genrally this window ojbect ko refer krati, brower mai window brower engivronmetn ka global object hia

// global this ka value js envrionemnt and code kis context mai run horai, us par depend kartai




console.log("----------------------------------------------")

// 3. brower vs node this
// js brower and ndoe dono mai run hotai, but this ka behabiour dono mai alag alg hotai

// bowser
console.log(this)
// this -- > window
// console.log(this === window)

// nodejs 
console.log(this)
// top level this ka result context mai depend kartai, kis context mai run hotai


console.log("----------------------------------------------")

// 4. function this
// normal function mai this function call hone ka tarika par depend kartai

function show(){
    console.log(this)
}
show();

// Normal function ka this us function ko kaise call kiya gaya hai aur execution context par depend karta hai.


console.log("----------------------------------------------")

// 5. method this
// method kya hia -- method ek function hotai jo object ka andar hotai and ham woh object ka dura woh function ko call kartai

const user1 = {
    name: "Munin",

    greet(){
        console.log(this.name)  // this  == user1, thats whhy jab this.name keyai tho "Munin" melai
    }
};

// user1 -- object
// name -- object ki proerty
// greet() -- object ka method

user1.greet();  // object.method() ke andar this genrally object hotai, in this case  object is user1, method is gret(),  so this hoga user1, this = user1,  so that why jab boltai  this.name  which mean  user1.name

const player = {
    name: "Alex",
    score: 100,

    showScore(){
        console.log(this.name) // here this = player
        console.log(this.score)
    }
}
player.showScore();


console.log("----------------------------------------------")

// 6. arrow function this

// normal function - this ka vlaue depend kartai function kaise call huai usse determine hotai
// arrow function -- arrow functionka apna this nai hotai, instead arrow function apna surrounding lexical scope se this leta hai

const user2 = {
    name: "Munin Borah",
    greet: () => {
        console.log(this.name)  // surrounding scope ka this use karega 
    }
};

user2.greet();

// Arrow function ka apna this nahi hota.
// Arrow function surrounding lexical scope ka this use karta hai.
// Arrow function object method mein this ke liye generally use nahi karna chahiye.
// Arrow functions nested functions/callbacks mein surrounding this preserve karne ke liye useful hote hain.
// Mental model: Arrow looks outward for this; normal function gets this from how it is called.


console.log("----------------------------------------------")

// 7. nested function and this


const user3 ={
    name: "Munin",

    greet(){
        function inner(){
            console.log(this)
        }
        inner();
    }
};
user3.greet();

// yaha 2 alg function hai 
// 1. greet()
// 2. inner()

// greet() ka call  -- user3.greet(), isilya greet ka andar this ---> user3
// inner() ka call, yeh user3 ka duara call nai huai


const user4 = {
    name: "Munin",

    greet(){
        const inner = () => {
            console.log(this.name)
        }
        inner();
    }
}

user4.greet();

// Normal nested function:

// Apna this call ke according determine karta hai. Outer function ka this automatically nahi milta.

// Arrow nested function:

// Apna this nahi hota, surrounding scope ka this use karta hai.
console.log("----------------------------------------------")

// 8. loosing this
// loosing this ka mtlb hotai function ko aise call karna ki jaha uska expected this context change ho jaye

const user5 = {
    name : "Munin borah",
    greet() {
        console.log(this.name)
    }
}

const sayHello = user5.greet;  // function ko user5 ka thorugh call kya
sayHello();  // now function ko sayHello() sai call keyai, user5 ka thorugh nai , eisliya this change hogeya


console.log("----------------------------------------------")
// commong mistake with this

// this ko functin ka naam samajna
function greet(){
    console.log(this);
    
}

// this ek specail value hai jo context ka according determince hotai

// 