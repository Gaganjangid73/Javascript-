//const obj = new Object() // this is a singleton object 
 // const obj = {}  this is an non-singleton object 

 const tinder = {
    name: "Gagan Jangid",
    Email: {
        wrokmal:{
            google: "gagan@gamil.com",
            yahoo: "gagan@yahoo.com",
            droom: "gagan@droom.com"  // this is a nested object we create it if we required to do,
        }
    }
 }
//  console.log(tinder.Email.wrokmal.google); from this method we print or access the elements of the object.

// now we merge objects

 const obj1 = { 1:"a", 2:"b", 3:"c", 4:"d"}
 const obj2 = { 5:"g", 6:"h", 7:"f", 8:"k"}

  const obj4 = Object.assign(obj1,obj2); // this we us rarely
// const obj4 = {...obj1,...obj2} this method we use mostly 

//  console.log(obj4);
 
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

 