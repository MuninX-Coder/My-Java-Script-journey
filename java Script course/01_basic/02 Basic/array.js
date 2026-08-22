// arrays 

const myArr = [0,1,2,3,4,5];
// console.log(myArr[4]);  // acess array, used thorugh index

// shallow copy
// copy of an object, same reference point


// deep copy
// dont share the same reference point

const myHeros = ["spiderman", "superman", "captain america", "ironman"];

const myArr2 = new Array(23,34,56,34,56,678);


// ------------ array methods -------------

// myArr.push(39);  // used to value at last
// console.log(myArr);

// myArr.pop();  // last value remove kardo

// myArr.unshift(56)  // used to add value at start

// myArr.shift();  // used to remove first value


// console.log(myArr.includes(6)); // to find kya 6 hai ya nai
// console.log(myArr.indexOf(3)); // to find the index

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// slice, splice 

console.log("A ", myArr);

const myN1 = myArr.slice(1,3); // 1 sai start karo and 3 tak jao but 3 inclue nai hoga 2 tak aiga

console.log(myN1);
console.log("B", myArr)


const myN2 = myArr.splice(1,3);   // original array he manupulate ho jatai
console.log("C", myArr)
console.log(myN2);
