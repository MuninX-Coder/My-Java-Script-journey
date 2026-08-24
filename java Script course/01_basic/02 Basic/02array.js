const marvelHeros = ["spiderman", "thor", "ironman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros);  // array ka andar aur ek array ageya

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// let newHeros = marvelHeros.concat(dcHeros);  // return a new array, with all merged

// console.log(newHeros);

// use spread operator

const all = [...marvelHeros, ...dcHeros] // using spread 

// console.log(all);


const anotherArr = [1,2,3,[4,5,6], 7, [6,7, [4,5]]];

const realAnotherArr = anotherArr.flat(Infinity);  // sab array ko ek array banake return kardega

// console.log(realAnotherArr);


console.log(Array.isArray("munin"));  // check array hai kya
console.log(Array.from("munin"));  // array mai convert karedya
console.log(Array.from({name:"munin"}));  // gives an empty array, we have to say keys ka array banau ya values, interesting case


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
