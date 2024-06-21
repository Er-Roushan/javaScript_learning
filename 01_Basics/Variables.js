// About different types of variables let, const, var

const num = 34;
let let_var= "Roushan Kumar";
var var_variable = "Aman Kumar";

let num1; //by default "undefined"

// var var_variable; -->Ok, can be redeclared var variable
// let let_var  --> we can't redeclare a let variable

num2 = 5; //possible to declare variable like this, but this is not a good practice

/* prefer not to use "var" because of issue in block scope and functional scope  */

console.log(num);
console.log(num1);
console.log(num2);
console.log(let_var);
console.log(var_variable);

console.table([num, num1, num2, let_var, var_variable]);