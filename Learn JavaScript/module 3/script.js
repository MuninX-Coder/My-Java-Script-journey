// variables 
// variable is a names place/ reference jiska throgh ham data ko store and access kartai 
let age = 19;
// let -- varible define kartai
// age -- variable ka naam
// = vlaue dena assing
// 19 -- acutal value
// varible are used to store data so that we can perform some operation on that data

// Declaration
// declaration ka mtlb hai ek varible ko declare karna, just declare karna 
// we have 3 keywords   ---- var, let, const             --- var is old and had some bug dont use it

let username;  // varible ko declare karna 
var userName // declare karna just
// const userkaNaam // declrae karna but give error as const is for constant and vlaue dena compulsary hai



// initialization 
// initialization mtlb hotai koi variable ko first value dena

let myName = "Munin"; // first value deerai


// assignment 
// varible ko value dean ya uski value set/change karna assignmetn kehelata hai
// assignment ke lye js mai = operator use hotai

let userName1 = "Munin";
userName1 = "suvam";  // reassigment v hai and assingment v hai
// =  -- right side ka value left side ka variable mai jana 



// var 
// var ek keyword hai jisko use karke phele variable declare keya jata tha
var userName = "munin";
// var redeclare hosaktai hai 
var userName = "suvam";  // redeclaretion    -- ek problem hai
// intiliaize hosakta hai an later vlaue reasing ho sakta hia


// let 
// let ek keyword hai jiska use karke varible declare kya jatai (new way and prefered way)

let score = 10; // declaraiton and initlization 
// not allowed redelaration


// const 
// const v ek keyword hia used to declare varible but its a constant mtlb change nai hona

const fist = "munin";
fist = "suvam";  // not possible , reassingment allowed nai hai
console.log(fist);

// const use karo jab tum varible ko reasing nai karna chahate
// const variable ko declare karte waqt intilize karna mandatory hai




// var - let -  const 

// teeno mai varible declare kar saktai 
let age1 = 24;
var age2  = 34;
const age3 = 56;

// reassing kar saktai
age1 = 23; // possible in let
age2 = 46; // possible in var
// const mai possible nai hai

// declare without intilize
// let mai possible , var mia posible but in const we have to do initilizaiton also

// used const by default and let when reassingment is needed

// var is functional scope -- mtlb function ka andar use hosaktai kahi par v
// let and const are blocked scope -- mtlb {} curly brasis ka andar he use hoskatai if uska andar variable crete hua

// var can be redeclare but let and const cant
var age5 = 34;
var age5 = 23;

// teeno mai hoisting ka v different hai later samjega



// variable naming rules 
// used letter, _, $ start karo
// number sai start nai kar saktai
// spaces allowed nai hai
// special character generally allowed nai hai
// kyeword use nai karsaktai
// varible name sould me meaning full

// naming conventions
// valid varible name ko consistenly ek paritcualr sytle mai likhe ka common pracitse
// i am gong ot use camelCase
// let userName ,   let myAge,  const yourAge


// reassignment
// ek variable ko first value melne ke baad firse koi dura varaible later assign karne ko he reassingment boltai  

let yourClg = "lakhipur";
yourClg = "KKSOUS" // reassingment

// var and let can be reassing but not const



// redeclaration 
// same scope mai already existing variable ko dboara declare karn == redeclartion

var newDeclare = "ok";
var newDeclare = "again ok"  

// only var ka sath possible hai, let and const ka sath possible nai hai