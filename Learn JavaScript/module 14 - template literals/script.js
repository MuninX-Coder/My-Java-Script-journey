// Tagged Template 
//  `hello ${name}`  -- this is template literals


// tagged template 
// in noraml template literals direclty string proudce kartai but tagged template ami ham template literals ko ek special function ke sath process kar skta hai

// tagged template  -- js template ka parts ko ek function ki thorugh process karne deta hai

// Tagged Template = Template Literal ko directly use karne ke instead, uske text aur ${} values ko ek function ke paas bhejna, jahan custom processing ho sakti hai.

// custom process -- js khud final string bana deta hai


// Raw string
// "hello\nworld"  --- noraml string

// but kya hoo ham luk ko \n v use karna ho aas character,  but yaha tho yeh ek special character hai jo new line add karrai right

console.log(String.raw`hello\nworld`);  // now \n v ek character hai


// Expression evaluation 

// expression -- js ka koi aisa part jo ek vlaue produce karta hai
// 10 + 20 -- this is expression, as yeh dono melkar ekvlaue produce karega

// evaluation ka simple meaing hai js expression ko calculate karna hai aaur uska final value nikalta hai

// expression evaluation -- expression ko calcualate karke uski vlaue nekalna

console.log(10 + 20);