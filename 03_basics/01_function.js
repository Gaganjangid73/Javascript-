function experi(){
    console.log("hello sir, my name is gagan.");
    // we declare function here.
}

//experi() // here we call the function.

function twosum(number1, number2){
    sum= number1+number2;
    return sum;
}
 const result = twosum(5,7);
//  console.log("result is :", result);

function loginusermsg(name = 'someone'){
   if(!name){ // we use if statemnt bcz  first we check the name is string or not after than we perform other code
    console.log("please enter the name:"); 
    return
    }
    return `${name} just loged in`
}

// console.log(loginusermsg());// here i can't pass name to the function so function use default name
//  console.log(loginusermsg("gagan")) // here i give the name so function this name.
 

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) here we pass default object tot the function 
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));   here we pass default array to the function 

console.log(returnSecondValue([200, 400, 500, 1000]));
 
