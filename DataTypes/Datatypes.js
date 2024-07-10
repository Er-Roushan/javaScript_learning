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


//Non primitive type or reference type

//Array
const arr = ["Roushan Kumar", 2072051, "BFCET"];
console.log(arr[0]);
console.log(arr[1]);

console.log(typeof arr); //object type

//Object type
let obj = {
    name: "Roushan Kumar", //key value pair
    uid: 2072051,
    college: "BFCET"
}

console.log(obj.name);
console.log(obj.uid);
console.log(obj.college);

console.log(typeof obj); //object type

//Function Type
let func = function() {
    console.log("Hello World.");
}
func();

console.log(typeof func);  // function   ( function object)

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

/* The JavaScript Symbol is a primitive data type, just like Number, String, Boolean, etc.
   It represents a unique identifier and can be used in various ways.
   Symbols are used to create object properties, for example, when you want to assign a unique identifier to an object.

   Key Points about Symbols:
   Uniqueness: Every symbol you create is unique, even if it has the same description.
   Hidden Properties: Symbols are not included in for...in loops or Object.keys(), making them suitable for creating "hidden" properties.
   Global Symbol Registry: You can create global symbols using Symbol.for("key"). This allows multiple scripts to access the same symbol using a shared key.
*/