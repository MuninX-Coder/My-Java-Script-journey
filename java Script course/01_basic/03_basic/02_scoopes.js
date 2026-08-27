// scope  {}

// var c =300;  // gobal scope
let a = 300;
if (true) {
  let a = 10;  // not defined, if we try to acess outside
//   const b = 20;
  var c = 40;  // this will print 40, as it doesnt respect block scope

  console.log("inner", a);
  
}

// console.log(a);
// console.log(b);
console.log(a);


