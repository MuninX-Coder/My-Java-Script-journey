// string primitve
// js mai string ek primitive data type hai jo text represent kartai 

// "munin"
// 'munin'
// "js"
// "343"
// `asdf`

// this all are stirng, should be written iniside quotes

// if not in quote, tehn js isse text nai, koi variable / identifieers ke naam ka tarah treat karega




// string object 
// string naam ka ek built it constructor bhi hota hai jo string object create karne hai help kartia 

let strObj = new String("Munin");
console.log(typeof strObj)  // this is object not a string

// string primitve hone ka baad v we can use some methods 


// Escape Character 
// kuch special character use karne ke lye hotai, nai tho kya hotai ki stirng jo break hojatai

console.log("He said, \"hello\"") // \"  js ko batata hai ki yeh quote strng ko end nai kar raha 


// new line ke lye  \n
console.log("hello\nworld")

// tab space ke lye  \t
console.log("hello\tMunin")

// backslash acoutal backslash show karne ke lye  \\

console.log("hello\\world");



// Template literals  -- used ``  backtick
// js mai string linkhne ka ek naya modern tarika hai, where we can add dynamic vlaues also

let name= "mUNIN";
let muninAge = 19;

console.log(`Hello ${name} you are ${muninAge} years old`);  // we can add dynamic value, this process is name is string interpolation


// String interpolation
// variabe ya expression ki value ko string ka adnar dynamically insert karna

// ${} -- this is used for that

console.log(`hello, ${name}`)



// Multi line strings
// jab ek string multiple lines mai likha ya display kiya jatai hai usko multi line string boltai
// backtick use karke direclty likhsaktai

console.log(`hello 
    welcome to javascrit
    have a great dat`)

    // in noraml string we had to use \n to make multiple lines




    // string length 
    // string mai kitna character hai usko he string ka length boltai

console.log("hello".length); // to find the string length,  1 sai start hotai, spaces v count hotai

// lenth is a property not method

// a property is a variable that stores data inside an object, while a method is a function that performs an action inside an object.



// character access
// string ka andar kisi specific character ko access karna 

let myStr = "Hello";  // indexing 0 sai start hotai 

// bracket notations
console.log(myStr[0]) // acess the first index 0, which is H



// string immutability 
// immutabke ka mtlb hotai string create hone ka baad uska individual charcter ko dirclty change nai kar saktai 

let myName = "Hello";
// now we cant change the first character of "Hello", becuase in js strings are immutable, but we can assing new value 