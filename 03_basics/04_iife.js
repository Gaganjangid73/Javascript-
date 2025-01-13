// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`); // this s a noraml function 
})();
// NOTE :-  (;) it is must be used bcz iife does not know where to stop execution. 
( (name) => {
    //unnamed IIFE 
    console.log(`DB CONNECTED TWO ${name}`); // this is used from the arrow fuunction 
} )('hitesh')
