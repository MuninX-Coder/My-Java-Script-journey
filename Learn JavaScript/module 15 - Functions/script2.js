// 1. parameters vs arguments

function greet(name){
    console.log("hello" + name)
};

greet("Munin");

// paramter kya hai

// function greet(name)
// name -- ek parameter hai
//  parameter is basically woh value hai jo funciton accect karega and fir usko woi naam sai use karega in this case, parameter is name, ok name is a varible ka naam hai, woh varible mai kuch vlaue aiga like "munin, and then usko function jo use karega

// argument kya hai

greet("shuvam");
// "shuvam"  -- yeh arugment hai, woh value ko function call karne ka time par pass keya jatai, and yeh value name naam ka varible mai jake save hoga and then function jo usko name naam sai use karega

// why paramter and argumetn 
// parameter and argumetn nai hoga tho function same kaam he karega but with parameter and argument function jo alag alag data ka sath alag kaam karega

function add(num1, num2){  // num1 & num2 are parameter
    return num1 + num2; 
}

let rst = add(34,66);  // argument 
console.log(rst);




// 2 Default Parameter
// defuault paramter means ek phele sai default vlaue deke rakhna taki undefined na ajae, kavi kavi kya hotai ki user dont pass the argument so that why default parameter is used to prevent that


function def(name = "guest"){  
    console.log("hello" + name); // if name nai dya hoga then "guest" use hojaig, and har bar value nai melne par yeh "guest" use karega wasa nai hai jab parameter jo undefined melega then argument use hoga "guest"
}
def();



// 3. Rest parameters 
// rest parameter is used when we dont know how much argumetn we will get, so we used rest paramter so that we can store everyhthigns, in the form of array

function showNum(...value){  // array ka form mai sab value store hoga
console.log(value)
}
showNum(3,3,45,45,3,65,4,567,45)

//  ...val  yeh hai rest parameter  val kuch v hosaktai that a varible name thats all
// ...number  ko rest syntax boltai jab function paramter mai use hotai, but same ...  syntax  ko js mai doose context mai spread v boltai

// rest paramter last paramter hona chaiye, 


function introduce (name, ...skills){
    console.log(name);
    console.log(skills);
}
introduce("Munin", "html", "css", "js")



// spread in function calls
// spread ek array ke elements ko alag alag vlaue mai spread/expand karta hai

function add(num1, num2, num3){
    return num1 + num2 + num3;
}
const number = [34,46,67];
add(...number) // ek ek karok and ek ek bhego 

// this is simple ek array hai number adn then jab woh number ko add ka andar spread ka use karke bhejtai then woh sab spread hoke ek ek karke add ka parameter mai jatai num1,num2,num3 mai





// argument passing
// argument passing ka mtlb hai value pass karna function ko jab call karne ka time par, and woh vlaue ko reciece hoga by funciton ka parameter according to their position

function names(first,sec){
    console.log(first, sec);
}

names("munin", "borah");




// primitive arguments 
// basically privite value ko arguments ka tarah function mai pass karna
// primitive values are -- string, number, boolean, undefined, null, bigint, symbol


let age = 20;

function changeAge(value){
    value = 30;
};

changeAge(age);
console.log(age)
// js mia arguments pass by vlaue hotai, mtlb function paramter ko privite value ki value meltai but function ka andar paramenter ko reasing karne sai orignal outside value change nai hotai

// basically original value jo change nai hotai bass woi hai



// object arguments

const user = {
    name: "Munin",
    age : 19
};

function changeUser(userData){
    userData.age = 30;
}

changeUser(user);
console.log(user.age)

// but here original value jo change hogeya, why jab ham luk user ko pass keyai then woh jake userData mai save hogeya dono same varible nai hai but dono ka same reference hai mtlb dono smae memory ko point karrai so jab ek mai change huai then original mai v change hogeya


// Object argument pass karne par function parameter original object ko access kar sakta hai, isliye object ki properties change karne par outside object bhi affected hota hai. But parameter ko reassign karne se outside variable change nahi hota.





// pass by value and pass by reference 

// 1. primitive -- pass by value

let myAge = 39;

function changeYourAge(value){
    value = 56;  // original value change nai hoga, as value v ek alag varible hai bolsakatai
}

changeYourAge(age);
console.log(age)

// age = 39; 
// 39 ka value function ko pass hua
// value = 39
// function ka andar vlaue = 56, but original value jo age = 39 hai woh change nai hgoa


// 2. object --- pass by sharing 

const myUser = {
    name : "Munin",
    age : 20
}

function changeYourAge(userData){
    userData.age = 30;
}
changeYourAge(myUser);
console.log(myUser.age)  // original value change hogya, as both myUser an userData are refereing to the same object memory

