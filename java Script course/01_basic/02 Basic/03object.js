// singleton -- koi v constructor sai banatai then single turn ek object bantai , constructor sai banega tho singleton

// objet literals -- object ko declrea karne ka traike

// Object.create   -- constructor method to create object

// this is a object // keys and value hotai
const mySym = Symbol("key1");

const jsUser = {
  name: "Munin",
  age: 19,
  location: "lakhimpur",
  [mySym]: "mysymbol1",
  email: "munin@gmail.com",
  isLoggdeIn: false,
  lastLoginDays: ["Monday", "saturday"],
};

console.log(jsUser.email); // one way using .

console.log(jsUser["email"]); // one another way

console.log(jsUser[mySym]);  // proper way to use and define symbol in js


Object.freeze(jsUser);  // freeze kar dena
jsUser.email = "muninNew@gamil.com";

console.log(jsUser);
