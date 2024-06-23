// String
const name = "Roushan Kumar";

// Number
const age = 30;

// Boolean
const isLoggedIn = true;

// Undefined
let x;

// Null
const y = null;

// BigInt
const bigInt = 12345678901234567890n;

// Symbol
const symbol = Symbol("mySymbol");


//javaScript data types are dynamic

let x1; // Now x1 is undefined
    x1 = "Roushan"; //Now x1 is string
    x1 = 32;     //Now x1 is number;


//infinity is returned if we calculate a number outside the largest possible number and it is "number" type.

let x2 = 2/0; 
let y2 = -2/0; 
console.log(x2);  //infinity
console.log(y2);  //-infinity