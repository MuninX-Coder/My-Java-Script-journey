// loose eqality 
// do vlaue ko compare kartai but if type ka difference hotai then type coversion v perform kar saktai

console.log("4" == 4) ;  // true, as "4" is converted to 4
// avoid to use this

// stict equality ===

console.log(5 ===5 ) // strict check, no type conversion
// use this bydefault



// inequality 
// check kartai do vlaue equal hai ki nai

// !=   lose inequalyt (type coersion hotai)
// !==   stict inequality



//  object comparision
// object ko comapre karna 

let user1 = {
    name:"Munin"
}

let user2 = {
    name:"Munin"
}

console.log(user1 === user2)  // false both object are differnt , becuase object are comapre based on the reference, dono alag alag refercne hai

let user3 = user1;

console.log(user3 === user1); // true, as, naya object create nai hua bass user3 ko user1 ka reference mela



// object.is()
// object.is  do values kocompare kartai and true ya false return kartia
// noramlly === jiasa behave kartai

console.log(Object.is (4,4));  // true
console.log(Object.is (4,"4")); // false

console.log(Object.is(NaN, NaN))  // true, as smae value consider kartai

console.log(Object.is(0,-0)); //false as differnent treat karrai 