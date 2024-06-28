// ... --> rest op or spread op


function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}

//sayMyName() //Print ROUSHAN (Each char in new line.)

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);  // Result: 8


function loginUserMessage(username ){
    if(!username){   
                   
        return "PLease enter a username";
    }
    return `${username} just logged in`;
}
// function loginUserMessage(username = "Roushan" )  //here Roushan is a default value.
 console.log(loginUserMessage()); //PLease enter a username
 console.log(loginUserMessage('Roushan')); //Roushan Just logged in
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
//this type func mainly used  to find cart price  scenario
console.log(calculateCartPrice(200, 400, 500, 2000)); // [ 500, 2000 ] --> only this because 200, 400 get stored in val1 and val2 respectivelly

const user = {
    username: "Roushan",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); //Username is Roushan and price is undefined (undefined because i write price instead of prices)

// can directly pass the object also , below is the example
handleObject({
    username: "Aman",
    price: 399
});   //Username is Aman and price is 399



const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); //400

//below in func call, direct array is passed instead of reference
console.log(returnSecondValue([700, 800, 900, 10000]));//800


function myFunc(){
    console.log("hello form myFunc");
    return;
}

myFunc();


//Immdediatly invoked function expression (IIFE)
//Automatically invoked when execution control comes here. put ; between two IIFE else we get TypeError.
//if no other IIFE is present after one IIFE, then there is no need of ;. 
(function () {
   console.log("first iife");
 })();

 (function (){
    console.log("second iife");
 })();

console.log("After IIFE");

//Arrow IIFE


( (name) => {
 console.log(`My name is ${name}.`);
} )('Roushan');    //My name is Roushan.  (Roushan is actual arg)

 