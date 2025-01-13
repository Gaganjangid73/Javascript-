const user = {
     username :" gagan jangid",
     price :"199",

    welcomemsg: function(){
      console.log(`${this.username}, welcome to the website`);
      console.log(this);
        
   }
 }

// user.welcomemsg() 
// user.username="pooja"
// user.welcomemsg()

const gagan = (num1, num2) => (num1+num2 ) // it is a impilicit method for arrow function 
// when we don't use curily brackets{} then also we dont we return type. and follow the above methods 

console.log(gagan(3,5));
