// Primitive datatypes

// 7 types: String , Number , Boolearn , null , undefined, Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;//agar equalto de kar undefined likho ya na likho ye aise likhne par undefined hi hota hai

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 3456543576654356754n


//Reference (Non primitive)
// Array , Objects ,Functions

const heros = ["shaktiman","naagraj","doga"];//array declaration
let myObj = { 
    name : "rajgaurav",
    age: 20 ,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);

//https://262.ecma-international.org/5.1/#sec-11.4.3        

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++MEMORY++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)
let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "raj@google.com"
console.log(userOne.email);
console.log(userTwo.email);