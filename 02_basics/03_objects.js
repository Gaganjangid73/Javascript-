const mysym = Symbol("key1"); // this is the method for the decleration of symbol datatype.

const JSuser = {
  [mysym]: "key12", // [] brackets me symbole data type ko declare karte hai in the any object.
  name: "gagan jangid",
  age: "19",
  email: "gaganjangid@gmail.com",
  city: "jaipur",
};

// console.log(JSuser);
// console.log(JSuser["city"]);
//  console.log(JSuser[mysym]);

JSuser.greeting = function () {
   console.log("hello Js user");
 };

 console.log(JSuser.greeting());

  JSuser.greeting = function () {
    console.log(`Hello JSuser, ${this.name}`);
  }

console.log(JSuser.greeting()); 

