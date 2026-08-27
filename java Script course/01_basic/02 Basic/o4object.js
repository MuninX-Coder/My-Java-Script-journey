

const tinderUser = new Object();


 tinderUser.id = "123abc"
 tinderUser.name = "sunny"
 tinderUser.isLoggedIn = false;


 const regularUser = {
    emai: "sunny@gamil.com",
    fullname: {
        userFullname: {
            firstname: "munin",
            lastname : "Borah"
        }
    }
 }

 console.log(regularUser.fullname.userFullname.firstname);  // access nesting object

 // optional chaining

 console.log(regularUser.fullname?.userFullname.firstname)
 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:'d'}

const obj3 = {obj1, obj2}
console.log(obj3);


const objMerge = Object.assign({}, obj1, obj2)  // {} -- target,  obj1 adn obj2  are source,   source will go to target

const obj5 = {...obj1, ...obj2}  // using spread operator
console.log(objMerge);


// const users = [
//     {
//         id:1,
//         email:"h@gmailcom"
//     },

//     {
//            id:2,
//         email:"b@gmailcom"
//     }
// ]


// users[1].email;  // a basic syntax

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// object destructring

const course = {
    courseName: "js in hindi",
    price: "999",
    courseTeacher: "Hitesh",
}

// course.courseTeacher 

const {courseTeacher: instructor} = course   // now we have to not write course.courseTeacher,  we can direclty use courseInstructor  or instructor also

console.log(courseTeacher);


const navBar = ({company}) =>{

}

navBar(comapny = "munin")


// {
//     'name': "Munin";
//     'courseName': "js in hindi";
//     'price': "free";
// }

// [
//     {},
//     {},
//     {},
// ]