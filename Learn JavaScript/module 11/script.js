// Math object 
// in js Math ek built-in object hai jo mathematical operation ke lye useful tool provide kartai

console.log(Math.random()) // genrate random number 0 to 1 
console.log(Math.round(3.4));  // number ko round karne ke lye

// Math ek object hai jiske andar different mathamatical method aur properties hai

// Random Number
// just random nubmer aur kya pata na hoo next kya aiga 

console.log(Math.random());  // gives a random number from 0 sai chota but  1 tak, but 1 return nai karega, but 0 kar saktai



// Rounding Methods
// method to round off the number

console.log(Math.round(34.34))  // round off the nuber, 5 sai uper then up, 5 sai neche then down

console.log(Math.floor(3.6));  // number ko round off kartai but hamesa neche wala number leke jatai in this case 3,  likha v tho  woi hai floor


console.log(Math.ceil(3.2)); // number ko roudn off kartai but hamesa uper wala number leke jatai, so here we get 4, lika v tho woi hai ceil,  celling bolsaktai





// Mix/Max
// js mai multiples numbers mai se smallest aur larget number find karne ke lye Math.mix() and Math.max() use hotai


console.log(Math.min(34,45,56,2,56,756));  // return the smallest number


console.log(Math.max(445,5,34,56,2345,5,345,657,345,7,345)); // reutrn the largest number



// Absolute Value 
// koi number ka 0 sai distance represent kartai, mtlb kitna distance par hai
// Math.abs()  -- use hotai for this purpse 

console.log(Math.abs(5));  // 0 sai 5 tak ka distance 5 hai.

console.log(Math.abs(-5));  // iska v 5 hai as negative sing hat jaiga 



// Powers 
// powers ka mtlb hotai ek number ko kitna bar khud sai multiply karna hai

// Math.pow(base, exponent)  -- yeh use hotai

// base -- konsa number
// exponent -- kitna times

console.log(Math.pow(2,3)) // 2 ko 3 bar multily karo , 2*2*2



// square root 
// square root ka mtlb kausa number khud sai multiply karne par given number milega 
// basically square root nekalna

// Math.sqrt() -- use hotai 

console.log(Math.sqrt(35))     // basically yeh 35 number kiss number ka square rot numbe hai

// negative number mai NaN return kartai as, number system mai negative number ka square root nai hotai




// Trigonometry -- Basic awarness
// Math object basic trigonometiric method provie kartai

// Math.sin()
// Math.cos()
// Math.tan()

// in js angesl are genrally radians mai pass kya jatai, degree mai directyl nai