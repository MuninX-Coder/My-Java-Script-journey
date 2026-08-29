// Type conversion
// mtlb ek data ka type ko dusra data type mai badalna
// implicit conversion -- javascript khud conversion kartai 
// explicit conversion -- programmer khud conversion karna 

console.log("5" + 5);  // yaha mai conversion horai, as jo number 5 hai woh string mai convert hogria and we get "55"  as string

// yeh sab mai jo string 5 hai woh number mai convert horai 
console.log("5" - 5);
console.log("5" * 5);
console.log("5" / 5);
console.log("5" % 5);


// string -- > number
// number -- > string
// number -- > boolean 
// string --> boolean


// implicit conversion 
// js automatically convert kare 

console.log("99" + 1);  // we will get 991 as string, as concatination is been performed mtlb jor dena

console.log("10" - 4); // but here - kyea keyai ki 10 ko number mai convert kardya


if("hello") {  // converted to true
    console.log("running");
    
}

// true -- 1
// false -- 0


// explicit conversion 
// when programmer khud sai data ka type ko change kartai 

let age = Number("20");  // value is string but its converted to number
console.log(age);
console.log(typeof age);

// string() -- > convert value to strng
// boolean() -- > convert value to boolean 



// type coercion
// when js operation perform karne ke lye automatically value ko ek type se doosere type mai convert karta hai, basically implicit conversion ka peeche jo automatic conversion process hai usko type coercion

console.log("10" - 5); // js "10" ko number mai coerce karrega

// + ka behavbour alag hai as it peroform concatination

console.log("5" + true) // we get 5true concat hogeya


// truthy values
// true wala vlaues 
// "hello", " ", 1, -10, [], {}  -- truthy values, all vlaue expect jo falsy value hai woh sab truthy value hai



// falsy value
// boolean context mai false treat kartai 
// false , 0, -0, 0n, "", null, undefined, NaN, "false"



// Boolean()
// ek function hai jo kisi value ko explicity boolean mai convert kartai 

console.log(Boolean("hello"));
console.log(Boolean(0));



// false vlaue eg 
Boolean(0)        // false
Boolean("")       // false
Boolean(null)     // false
Boolean(undefined) // false


// true vlaue eg 
Boolean("Hello")  // true
Boolean("0")      // true
Boolean(10)       // true
Boolean([])       // true
Boolean({})       // true


// Number()
// koi value ko number type mai explicity convert kartai 
console.log(Number("34"))  // number mai convert hoga


console.log(Number("hello"))  // NaN- not a number

Number(null)       // 0
Number(undefined)  // NaN


// string()
// koi v value ko string mai explitly convert karna , explicity mtlb khud sai

console.log(String(213))
console.log(String(true))
console.log(String(false))
console.log(String(null))
console.log(String(undefined))


// common conversion pitfalls

console.log("5" + 2) // "52" type conversion, concatination hapens
console.log("5" - 2) // type conversion, "5" converts to number 5

console.log(Boolean("0")) // true , "0" string hai esiliya
console.log(Boolean(0))  // false, 0 is false

console.log(Number("")) // 0
console.log(Boolean("")) // false , as empty string is a falsy value

console.log(Number(null));  // 0
console.log(Number(undefined)) // NaN

