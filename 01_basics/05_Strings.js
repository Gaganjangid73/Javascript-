const name = "Gagan"
const repocount = 7;

// console.log(name + repocount + " value"); not recommend

// console.log(`hello my name is ${name} and my repocount is ${repocount}.`); // this is prefer 

//  how we declare the string 
const GameName = new String('Gagan Jangid')


// console.log(GameName[5]);
// console.log(GameName.length); // used for occur od string length 
// console.log(GameName.toUpperCase()); // used for to convert in upper case 
// console.log(GameName.charAt(2));
// console.log(GameName.indexOf('J'));

const newString = GameName.substring(0,6) // this is used for  to do substring from the main string.
// console.log(newString);

const anotherString = GameName.slice(-5,2); // in slice we take negtive value but in substring function it can't take negative vale for the index.
// console.log(anotherString);

const newStringOne = "   Gagan.   "
// console.log(newStringOne);
// console.log(newStringOne.trim());// trim function is used in for the whitespace and lineterminator  only trim() can consider both and begin but trimbeign are remove from only begin and trimend are remove from from only the end
 const url = "https://gagan.com/gagan%20jangid"
 console.log(url.replace('%20','-')); // inthis replace function we find first then replace it.
 




