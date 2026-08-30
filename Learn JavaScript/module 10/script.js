// NUMBER TYPE
// in js Number is a data type that represent numeric values
//10, 34, -34, 3.34, 0, 100

let age = 34;
console.log(typeof age)


// floating point precision 

console.log(0.1 + 0.2);  // expected somethings, got somethings


// NaN
// not a number 
// when in js any operatration the result is not a valid numeric result, then the result may return null

console.log("hello"/2);
console.log(typeof ("hello"/2));  // but type is number, because at the end yeh ek invalid number he hai NaN JO


// Infinity 
// infinity js ka ek special numeric value hai jo normal finite number se beyound value ko represent kartai

console.log(10/0)  // infinity,  beyound normal numbers
console.log(-10/0)  // -infinity 
console.log(typeof(10/0));  // type number, as hai tho number he na infinity v, infinity numbers



// Number Object 

let Myage = 30; // primitive number 

// but in js Number naa ka ek built in constructor/function bhi hai jo number object create kartai

let num = new Number(29);
console.log(num)
console.log(typeof num) // type is object

// generally avoid this 



// Parsing Numbers 
// parsing ka mtlb hotai, kisi value ko read karke usme sai useful number nikalna ya usse number mai convert karna 

let stringNum = "123";  // this is a string

// to convert this we can use parseInt(), parseFloat(), Number()

let convertNum = Number(stringNum);
console.log(typeof convertNum)



// parseInt()
// parseInt ka use kisi value/string se integer(whole number) parse karne ke lye hotai

let valueToParse = "23"

console.log(parseInt(valueToParse))  // convert to whole number

// it just ignore the decial wala part, jo  point ka baad ane wala number hai
// beginning sai parse kartai mtlb "123abc" // return 123 valid number
// but if "abc123" // return NaN




// parseFloat()
// parseFloat() kisi string/value sai decimal number parse/nekalne ke lye use hotai

console.log(parseFloat("23.456"));  // pura decimal ka baad wala number v melega

// value ka start sai parse kartai // "12.4kg"  // we will get 12.4



// Number()
// Number() koi va value ko number type mai convert karne ke lye use hotai

console.log(Number("34"));  // type is number
console.log(Number("abc123"));  // gives NaN



// isNaN()
// check karta hai ki vlaue NaN hai ya number mai convert karne par NaN banega, number mai convert kartai first then check hotai
// NaN - not a number

console.log(isNaN(NaN))

console.log(isNaN("Hello"));   // gives true as, first "Hello" jo number mai convert hone ka try horai and then as cannot be converted to number then return NaN




// Number.isNaN()
// it check ki, value actually NaN hai ki nai
// isNaN() -- ka tarah value ko number mai first convert nai kartai


console.log(Number.isNaN(NaN))

console.log(Number.isNaN("hello")); // false as "hello " is a string




// isFinite()
// check kartai ki koi value finite number hai ya nai

// finite number --> normal number jo infinity ya -infinity na hoo

console.log(isFinite(100));

console.log(isFinite("helo"));  // value ko first number mai convert kartai

console.log(isFinite("343"))



// Numeric Separators (1_000_000)
// in js large number ko easily read kar sakne ke lye hamluk _ udersocre ka use kar saktai

let population = 1_00_00;
console.log(population)

// just easy hotai code ko read karne ke lye thats all