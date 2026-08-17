
// ## Practice Set — Module 0 to 4



// 1. Ek simple JavaScript program banao jo console mein tumhara naam, age aur current learning goal print kare. Har value ko alag variable mein store karo. Pehle variables declare karo, phir unhe initialize karo, aur phir output karo.
// console.log("------ solution 1 -------");

// let name;
// var age;
// const currentGoal = "javaScript";
// name = "Munin";
// age = 18.6;
// console.log(name);
// console.log(age);
// console.log(currentGoal);




// 2. Ek variable `score` banao jiska initial value `0` ho. Uske baad uski value ko `10`, phir `25`, aur phir `50` karo. Is process mein observe karo ki variable declaration aur reassignment mein kya difference hai.

// console.log("----- solution 2 -------");
// let score = 0;   // yeh hai variable declaration and initilization, bascially variable ko declare karna and first value dena
// console.log(score);

// score = 10;  // yeh hai reassignment, jo varaible created tha usme ek naya value dena
// score = 25;
// score = 50;
// console.log(score);



// 3. Teen variables banao: ek `const`, ek `let`, aur ek `var`. Teeno mein same starting value rakho. Phir teeno ko reassign karne ki koshish karo. Pehle predict karo kya hoga, phir browser console mein verify karo.
// console.log("------ solution 3 -------");
// const sameValue1 = "Munin";  // reassing mai error detai, as its not allowed (error got assignemt to constant variable)
// let sameValue2 = "Munin";  // allowed didnt give any error while reassing
// var sameValue3 = "Munin";            // var mai redeclaration possible hotai

// // sameValue1 = "shuvam";
// sameValue2 = "shuvam 2";
// sameValue3 = "shuvam 3";

// console.log(sameValue1);
// console.log(sameValue2);
// console.log(sameValue3);



// 4. Ek program mein ek hi naam ka variable `let` ke saath do baar declare karne ki koshish karo. Phir same experiment `var` ke saath karo. Observe karo ki dono cases mein JavaScript ka behavior kya hai.
// console.log("----- solution 4 ------");

// let name1 = "Munin";
// // let name = "Munin";    // we get a error as identified name has already been declare, as in let redeclaration is not allowed
// console.log(name1);

// var name2 = "Munin 1";  // in var we dont get any error as, redeclaration is allowed in var, but not in let and const
// var name2 = "Munin 2";
// console.log(name2);




// 5. Ek `const` variable ko bina value diye declare karne ki koshish karo. Phir ek normal `let` variable ko bina value diye declare karo. Dono ke initial values ko inspect karo aur difference explain karo.
// console.log("----- solution 5 -------");

// const withoutVal;  // we got a error sayign missing initializer in const declaration, mtlb ki jab v const sai koi variable declare kartai then uska value first mai dena jaruri hai, just decelare karke nai chor saktai 
// let withoutVal2;

// console.log(withoutVal);
// console.log(withoutVal2);   // we get undefined, basically, we can say js khud sai kuch value dedeya



// 6. Ek variable ko pehle string value do, phir usi variable ko number value do, aur phir boolean value do. Har step ke baad `typeof` se uska type check karo. Isse JavaScript ki dynamic typing practically observe karo.
// console.log("----- solution 6 ------");

// let val1 = "munin";      // so this is basically dynamic typing, basically data ka type har bar change horai
// console.log(typeof val1);
// val1 = 23;
// console.log(typeof val1);
// val1 = true;
// console.log(typeof val1);





// 7. Tumhare paas ek user's information hai: name, age, account balance, logged-in status aur phone number available hai ya nahi. Har value ke liye appropriate primitive data type choose karo aur variables banao.
// console.log("----- solution 7 ------");
// const name = "Munin";
// let age = 19;
// let accountBalance = 434546345n;
// let loggedIn = true;
// let isNumberAvailable = false;

// 8. Ek variable ko intentionally `undefined` hone do aur doosre variable ko explicitly `null` assign karo. Dono ko console mein print karo aur `typeof` se inspect karo. Phir apne words mein explain karo ki dono values conceptually kyun different hain.
// console.log("----- solution 8 -------");

// let variable1;
// let varaible2 = null;
// console.log(variable1);
// console.log(varaible2);
// console.log(typeof variable1);
// console.log(typeof varaible2);

// undefined ka type v undefined ayai but null ka type jo object aya, i dont know why but i think this is old legacy bug i guess
// undefined ka mtlb hotai koi value nai dena then js khud sai kuch value dega woh undefined hoga,  where as null is basically empty , again 0 is not emtpy as 0 v value hai but null means empty and may be baad mai value agia yeh developer khud sai detai.



// 9. Ek program banao jisme tum `number`, `string`, `boolean`, `undefined`, `null`, `symbol` aur `bigint` ki ek-ek value create karo. Har value ka actual value aur `typeof` result inspect karo.
// let name = "Munin";
// console.log("your name", name);
// console.log("type of  name", typeof name)

// let age = 18.6;
// console.log("your age", age);
// console.log("type of age", typeof age);

// let isStudent = true;
// console.log("is Student", isStudent);
// console.log("type of isStudent", typeof isStudent);

// let undefinedVal = undefined;
// console.log("value of undefined", undefinedVal);
// console.log("type of undefined", typeof undefinedVal);

// let nullVal = null;
// console.log("value of nullVal ", nullVal);
// console.log("type of nullVal", typeof nullVal);

// // i dont about symbol 

// let bigintNum = 34543623452524n;
// console.log("value of bigintNum", bigintNum);
// console.log("type of bigintNum", typeof bigintNum);









// 10. Do alag variables mein same string store karo. Phir unhe compare karo. Uske baad do alag objects banao jinke andar exactly same information ho aur unhe compare karo. Observe karo ki primitive aur reference types ke behavior mein kya difference dikhta hai.

// let val1 = "munin";
// let val2 = "munin";
// console.log(val1 === val2);   // this is true

// let obj1 = {
//     name : "munin",
// };

// let obj2 = {
//     name : "munin",
// }
// console.log(obj1 === obj2);  // this is false, as dono ka address is differnet even the value is same i guess 


// 11. Ek object ko variable `user` mein store karo. Phir doosre variable `anotherUser` mein `user` ko assign karo. Ab `anotherUser` ke through object ki koi property change karo. Check karo ki `user` ke through wahi change visible hai ya nahi.
// let myObj = {
//     name: "munin",
//     age: 18,
// };

// let user = myObj;
// console.log(user);

// let anotherUser = user;

// anotherUser.name = "suvam";   // main object mai change hojaiga as sab ka pass just uss object ka address hai mtlb ki reference hai acutal value nai hai, as like primitive

// console.log(user);

// 12. Ek array ko variable `numbers` mein store karo. Doosre variable ko `numbers` ke equal rakho. Doosre variable ke through array mein ek new value add karo. Phir original variable inspect karo. Result ko explain karo.
// let myArray = [23,45,3,5,4];
// let number = myArray;

// number[0] = 100;  // again this is also same like object, we are not getting the actual value we are just getting the address 

// console.log(myArray);

// 13. Ek primitive string variable aur ek object variable banao. Dono ko doosre variables mein assign karo. Ab dono ke original variables ko inspect karke determine karo ki assignment ke baad values ka behavior same hai ya different.

// let name = "";
// let obj = {};
// console.log(name);
// console.log(obj);


// let another = name;
// let anotherObj = obj;

// console.log(another);
// console.log(anotherObj);      // nai samjai bola kya tha yeh question mai ok




// 14. Ek shopping application ke liye variables create karo: product name, price, quantity, product available hai ya nahi, discount applicable hai ya nahi. Har variable ka suitable data type choose karo aur meaningful variable names use karo.
// let shoppingCart = {
//     productName : "Iphone",   // string
//     price : 150000,  // number
//     quantity: 59,  // number
//     productAvailable: true,  // boolean
//     discountApplicable: false,  // boolean
// };
// console.log(shoppingCart);   // i used object for this purpose 

// 15. Tumhe ek variable ka naam rakhna hai jo user's total monthly expenses represent kare. 5 different possible names socho. Phir unmein se best naming convention wala naam choose karo aur explain karo baaki names kyun weak hain.
// let userMontlyExpense = 235234;   // i think yeh best hai direct samaj atai, and ha yeh thora big lagrai, we can use another name liek userExpense,  montlyExpense,  or what more we can do


// 16. JavaScript ke naming rules test karne ke liye 10 different variable names try karo. Kuch valid rakho aur kuch intentionally invalid rakho. Browser console mein determine karo kaunse names allowed hain aur kaunse nahi.
// boring hai yeh tho quesiotn ham aisa variable create karte karte hojatai


// 17. Ek variable ka naam `userName` rakho aur doosra `username` rakho. Dono ko different values do. Check karo JavaScript unhe same variable maanta hai ya different. Isse case sensitivity practically verify karo.
// let userName = "Munin";
// let username = "shuvam";
// console.log(userName === username);  // different he manegea as js is case sensitive, yeh dono variables different hai

// 18. Kuch JavaScript keywords/reserved words ko variable names ke roop mein use karne ki koshish karo. Observe karo kaunse names JavaScript reject karta hai. Is exercise ka goal keyword aur normal identifier ke difference ko samajhna hai.
// let const = "pinky";   // error detai


// 19. Ek small program likho jisme comments ka use karke explain karo ki program ke teen major sections kya kar rahe hain. Phir comments remove karke verify karo ki program ka actual behavior change hota hai ya nahi.
// boring hai, as jab comment kartai woh line of code exectue nai hotai js usko ignore kartai thats all


// 20. Ek expression aur ek statement ko identify karne ke liye 10 different JavaScript lines likho. Har line ke saamne khud decide karo ki woh expression hai, statement hai, ya context ke according dono concepts involve kar sakti hai.



// 21. Console mein different arithmetic expressions evaluate karo aur dekho ki JavaScript expression ka result directly return karta hai, jabki variable declaration/assignment ka behavior alag kyun hota hai.

// 22. Ek program banao jisme semicolons intentionally use karo. Phir kuch semicolons remove karke dekho ki JavaScript kaha automatically statement boundaries understand kar leta hai aur kaha unexpected behavior/error aa sakta hai.

// 23. Ek HTML page imagine karo jisme JavaScript file `<head>` mein load ho rahi hai aur JavaScript DOM ke ek element ko immediately access karna chahti hai. Socho page loading ke kis stage par problem aa sakti hai aur `defer` ka purpose kya solve karta hai.

// 24. Ek situation imagine karo jahan JavaScript file ko HTML parsing complete hone ke baad execute karna hai. Explain karo ki `defer` is situation ke liye kyun suitable ho sakta hai.

// 25. Ek situation imagine karo jahan external JavaScript file ko download karna hai aur HTML parsing ko unnecessarily block nahi karna. Lekin script ko HTML parsing complete hone ka wait karna zaroori nahi hai. Is case mein `async` ka behavior analyze karo.

// 26. `async` aur `defer` ko ek practical webpage scenario ke through compare karo. Tumhare paas 3 scripts hain: ek DOM par depend karta hai, ek independent analytics-type script hai, aur ek doosre script ke execution order par depend karta hai. Decide karo kis type ke script ke liye kya behavior appropriate hoga aur kyun.

// 27. Ek JavaScript file mein strict mode enable karke kuch intentionally problematic operations try karo, jaise undeclared variable create karna. Phir strict mode remove karke behavior compare karo.

// 28. Ek program banao jisme variable ko declare karne se pehle use karne ki different situations test karo. `var`, `let`, aur `const` ke saath separately experiment karo. Tumhara goal definitions ratna nahi, balki actual behavior observe karna hai.

// 29. Ek `var` variable ko ek block ke andar declare karo aur block ke bahar access karne ki koshish karo. Phir same experiment `let` aur `const` ke saath karo. Observe karo ki behavior mein kya difference hai.

// 30. Ek program mein same variable name ko different blocks mein use karo. `let` aur `const` ke saath experiment karke determine karo ki inner block ka variable outer variable ko affect karta hai ya nahi.

// 31. Ek `const` object banao. Uske andar ki property change karne ki koshish karo. Phir poore object ko kisi naye object se replace karne ki koshish karo. Dono operations ka result compare karo.

// 32. Ek `const` array banao. Array ke andar value modify/add/remove karne ki koshish karo. Phir poore array ko kisi naye array se replace karne ki koshish karo. Dono situations ko carefully observe karo.

// 33. Ek variable mein number `100` store karo. Usko string `"100"` se compare karo aur separately number `100` se compare karo. Abhi comparison operators deeply study nahi kiye hain, so focus sirf itna rakho ki JavaScript values aur types ko kis tarah treat karta hai.

// 34. Ek variable ko number se string mein convert karne ke bajaye directly reassign karke type change karo. Example flow rakho: number → string → boolean → null. Har stage par `typeof` check karo aur result note karo.

// 35. Ek user's `age` variable ko accidentally string value mil gayi instead of number. Program ko inspect karne ke liye tum kaise determine karoge ki actual value ka type kya hai? `typeof` ka use karke different test cases banao.

// 36. Ek program mein 5 variables banao jinke names intentionally confusing hain, jaise singular/plural, abbreviated names aur unclear names. Phir unhe improve karke readable naming convention follow karo. Goal code ko human-readable banana hai.

// 37. Ek small profile system design karo jisme user ka naam, age, email available hai ya nahi, account created hai ya nahi, optional middle name hai ya nahi, aur unique internal identifier ho. Har piece of information ke liye suitable data type choose karo. `Symbol` ko bhi consider karo aur decide karo realistically kaha useful ho sakta hai.

// 38. Ek situation imagine karo jahan tumhe bahut bada integer represent karna hai jo normal JavaScript `Number` ki safe integer range se bahar ho sakta hai. Decide karo `Number` ya `BigInt` mein se kya suitable hoga aur kyun.

// 39. `BigInt` ke saath kuch calculations perform karke dekho aur phir usse normal `Number` ke saath combine karne ki koshish karo. Observe karo JavaScript kya allow karta hai aur kya reject karta hai.

// 40. Ek `Symbol` value create karo aur doosra symbol exactly same description ke saath create karo. Dono ko compare karke determine karo ki kya JavaScript unhe same value maanta hai ya separate values.

// 41. Ek program banao jisme tum intentionally variable names ko case-sensitive differences ke saath use karo: `user`, `User`, `USER`, `userName`, `username`. Predict karo kitne separate identifiers exist karenge, phir verify karo.

// 42. Tum ek small banking system ke variables design kar rahe ho. Requirements: account holder name, account number, balance, account active status, nominee information available hai ya nahi, aur account ka unique internal identifier. Variables aur data types choose karo. Phir check karo kya tumne unnecessarily kisi value ko wrong type diya hai.

// 43. Tumhare program mein ek variable `data` hai. Starting mein usme `null` hai. Later API se actual object aata hai. Tumhe program ke different stages par `typeof data` check karna hai. Har stage ka expected result predict karo.

// 44. Ek object ko ek variable se doosre variable mein assign karo aur ek primitive value ko bhi same tarah assign karo. Dono cases mein original value ko modify karne ka experiment karo. Is exercise ka main goal **assignment ≠ copying in every case** wali idea ko practically understand karna hai.

// 45. Ek mini "student record" design karo: student name, roll number, age, passed status, percentage, optional nickname, aur unique identifier. Har variable ke liye data type aur naming convention justify karo.

// 46. Ek program ko intentionally messy banao: bad variable names, unnecessary redeclarations, inconsistent casing, missing initial values, `var`/`let`/`const` ka random use, aur unclear data types. Phir us program ko clean design mein convert karo. Focus functionality se zyada **code quality + fundamentals** par rakho.

// 47. Ek single program mein `var`, `let`, aur `const` ke declaration, initialization, reassignment, redeclaration aur scope-related behavior ko systematically test karo. Har experiment se pehle predict karo result kya hoga, phir browser console se verify karo.

// 48. Ek JavaScript file banao jo sirf fundamentals ka "type laboratory" ho. Usme different primitive values, objects, arrays, `null`, `undefined`, `Symbol`, aur `BigInt` create karo. Har value ke liye actual value, `typeof` result, aur assignment ke baad behavior observe karo.

// 49. Tumhe ek existing JavaScript program diya gaya hai jisme kuch variables ka type runtime par change ho raha hai. Program ko read karke identify karo: kaunse variables dynamically typed behavior show kar rahe hain, kaunse values primitive hain, aur kaunse references hain.

// 50. **Final challenge:** Ek small "User Account System" ka data model design karo. Isme username, full name, age, account balance, account active/inactive status, email verified status, optional profile information, account creation state, unique identifier aur large numeric identifier jaisi requirements rakho. Tumhe khud decide karna hai ki har value ke liye `let`, `const`, `var`, primitive/reference type, `null` ya `undefined`, `Number`, `BigInt`, `Symbol`, etc. mein kya appropriate hai. Har decision ka reason likho.
