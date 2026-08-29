// control flow
// basically programm ko differnt situation ka hisab sai different decision lene dena


// if
// used to add condition in the program

// if(condition - true){
//     // run this code
// } 

let age = 19;
if(age >= 18){
    console.log("matured");
    
} // only run when conditon is true



// else 

// when codition , if become false then else is run

if(age > 34){
    console.log("if block code");
} else {
    console.log("else block code");
    
}  // when if condtion become false then, else block of code is run




// else if
// use else if when we have multiple conditon check karna hotai 

let score = 89;

if(score >= 90){
    console.log("grade A");
    
} else if (score >= 59){  // multiple condition
    console.log("grade B");
    
} else {
    console.log("failed")
}

// top to bottom check hoga first if check hoga and ture hau tho woh run hoga and baki ka code nai chelga, adn then if false hoga then else if mai jaiga and so on.




// Nested Condtiions
// mtlb hotai if/else ka andar aur if/else


    let isLoddegIn = true;
    let isAdmin = true;

    if(isLoddegIn){
        if(isAdmin){
            console.log("show admin dashboard");
            
        }
    }



// switch
// switch tab useful hotai jam ek value ka multiple specificcases ka agint check karna hotai


let day = 2;

switch(day){  // day ka value lerai adn then case day ka vlaue sai compare karrai
    case 1: 
    console.log("monday");
    break;  // must, taki if codition is true then baki ka code na chale, otherwise all block of code will run

    case 2:
        console.log("tuesday");
        break;

    case 3:
        console.log("wednesday");
        break;

    default:
        console.log("invalid day")
}



// conditional operator 
// conditional operator ko hi ternary operator bhi boltai

// condition ? value if true : value if false

let yourAge = 39;

let status = yourAge >= 29 ? "Adult" : "Minor";
console.log(status);
