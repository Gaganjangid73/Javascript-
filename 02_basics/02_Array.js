// array part 2  video number :- 15

const array1 =[ 1,4,3,4,2,5,6 ]
const array2 = [ 7,6,8,4,3,6,5 ]

// const array3 = array1.concat(array2);  this is used for the join 2 array  and make a another array.
// console.log(array3);

const array4 = [...array1 , ...array2]
// console.log(array4); this method is also used for the join of two array with the help of another new array 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);// ye method array ke and bhi koi aray ho toh usko bhi ek single array me convert kar deta hai...



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

