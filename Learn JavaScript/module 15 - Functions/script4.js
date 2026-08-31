// 1. function object
// in js function are object
// mtlb function ka pass object like proerties v hotai

function greet(){
    console.log("hELLO");;
    
}

// greet.length
// greet.name

// A JavaScript function is a callable object—it can be executed like a function and also has object-like properties.



// function properties
// property mtlb function sai releted koi inforamtion / vlaue jo ham access kar saktai

function great(name){
    console.log("HEllo" + name)
}
great.name;
great.length;
great.language = "English";  // we can add custom properties
console.log(great.language)
great("muni");



// name property
// its just tell the function name, this name property tell the functions name

function greeting(){
    console.log("HEllo");
}
console.log(greeting.name) // prinitn the function ka name
console.log(typeof greeting.name)  // function ka name ko string mai return karrai


// length proeprty
// function ka length property tell basically function kitna paramets expect karta hia


function add(num1, num2, num3){
    return num1 + num2 + num3;
}
console.log(add.length);  // tells that function accepct 3 paramets 

// default paramter hone sai just first sai lekek default parameter tak count kartai

function createUser(name, age = 19, city){

}
console.log(createUser.length)  // bass name ko counte keyia uska baad ka nai keyai





// prototope 
// Normal functions have a prototype property, and that property is an object used primarily with constructor functions for sharing behavior between created objects.