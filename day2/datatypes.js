//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3//number
const isLoggedIn = false//boolean
const outsideTemp = null//null
let userEmail;//undefined


const id = Symbol('123')//symbol is a unique identifier and it is not equal to any other symbol even if they have the same description
const anotherId = Symbol('123')

console.log(id === anotherId);//same nhi ata 
const bigNumber = 3456543576654356754n//n mtlb bigInt



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}//{}object 

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

console.log(typeof myFunction);
