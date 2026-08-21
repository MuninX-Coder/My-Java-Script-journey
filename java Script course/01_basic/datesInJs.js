// Dates

let myDate = new Date();  // declare date
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);  // object 

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let newDate = new Date ("01-03-2008");
console.log(newDate.toString());


// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000));


let myNewDate = new Date()
console.log(myNewDate.getDate());
console.log(myNewDate.getMonth());


myNewDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})