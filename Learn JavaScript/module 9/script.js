// loops 
// basically koi sizz ko bar bar karna hoo then use hotai, like looping karna 
// 1,1,1,1,1,1,1,1,1 --- looping
// same task ko repeatdely perform karna, jab tak ek condtion satisfy hote rahe


// for(initilization; condition; update){
//     // repeat this code
// }

// initilization -- let i =1;     loops ka starting point
// condition i<=5;   jab tak condtion true hai loop run karte raho
// update  i++   , har iteration ka baad i ko update karo

for(let i = 1; i<=5; i++){
    console.log(i);  
    
}
// first i ko initilze karo 1 sai ok, then ek conditon jab tak i<=5 hote rahega loop run hote rahaga , and after each looping, i ko update karna,  

// first i ka value 1 hai then loop ek bar run hua and i print hua which is 1, then i update hua and then 2 bana, then conditon check fir i dubara print this time 2 print hua then again udpate i and become 3, adn jab condtio false hoga then loop end

// initilizaiotn onlyruns one time


// for loop tab use hotai jab kitna bar repeat karna hai pata hoo, kitna bar loop ko run karna hai
// 1 sai 10 tak iterate karo




// while loop
// same like forloop but strucute is differnt

// while (condtion) {
//     // repeat this code
// }

let i = 1;

while(i<=5){
    console.log(i);
    i++;
    
}

// fist initlize keyai i = 1;  then loop lagayai wiht condiotn jab tak i<=5 tab tak loop run karo and loop ka andar he update v karo, codntion false hoga tho loop stop

// tab while use karo, when you dont know loop kinta bar run hoga, bass conditon ka basis par loop ko run karte raho jab condition false then loop stop




// do while loop
// kam se kam ek bar tho do block execute hoga even the condtion is false


// do {
//     // code
// } while (condtion)


let j = 34; 

do{
    console.log("runs even conditon is false");  // even if the condiotn is false this will run one time
    j++;
} while(j<=20)

    // do while tab use hotai when we had to run atlest one time , then check the conditon




    // nested loop

// ek loop par andar another loop


for(let i= 1; i<=3; i++){  // outer loop
    for(let j = 1; j<=2; j++){
        console.log(i,j);
        
    }
}

// i  = 1
// then --   j = 1,  
//          j = 2

// i = 2 
// j = 1
// j = 2



// infinite loops
// loops jo kavi end na hoga/stop nai hoga


// let a = 1;

// while(a <= 5){
//     console.log(a);
    
// }

// this is infinite loop kavi end nai horai

// golden rule --- har looop ka condition kaise false hoga decide karna



// break
// break ka use hotai loop ko immediately stop karne ke lye

for(let i= 1; i<= 10; i++){
    if(i === 5){  // jaise he i jo 5 hoga loop ko break kardo, yani stop kardo
        break;
    }
    console.log(i)
}


// continue 
// continu ka use current iteration ko skip karne ke lye hotai, koi specific vlaue ko skip kartia

for(let i = 1; i <= 5; i++){
    if(i === 3){  // 3 ate he skip hojia and print nai hoga
        continue;
    }
    console.log(i)
}


// labels 
// label is basically kisi statement ya loop ko naam dena hotai

outerloop: for(let i =  1; i <= 10; i++){
    console.log(i);
    
}
// labes ka main use hotai nested loops mai specific outer loop ko target karna