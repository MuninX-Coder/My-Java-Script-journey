


function sayMyName(){
console.log("M");
console.log("u");
console.log("n");
console.log("i");
console.log("n");
}

// sayMyName(); // sayMyName -- reference ,  sayMyName() -- exectuion


function addTwoNumbers(num1, num2){     // parameeters -- jo v input letai usko boltai
// let result = num1 + num2;
// return result;  // return ka kaad koi kaam nai kartai

return num1 + num2;

}

const result = addTwoNumbers(4,5);  // arguments - value pass karna
// console.log("result": result);


function loginUserMessage(username = "sam"){  // we can give a default value

    if(username === undefined){
console.log("please enter a username");
return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("munin"));


function caluclateCarPrice(...num1){  // this is rest operator,  and also spread operator basedon the situation
    return num1;  // return array
}
// console.log(calculateCarPrice(299,399));


const user = {
    username: "Munin",
    price: 199
}

function handleObject(anyObj){
    console.log(`user is ${anyObj.username} and price is ${anyObj.price}`)
}

handleObject({
    username:"pinky",
    price:2342
})

 const myNewArray = [200,300,100,400];

 function returnSecondValue(getArr){
    return getArr[1];
 }

 console.log(returnSecondValue(myNewArray));


 // scope -- mera code ka daira 