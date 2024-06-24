let str1 = "Roushan Kumar";
let str2 = 'Aman Kumar';

let str3 = "    Hello World    ";
let str4 = " for triming  ";

console.log(`My Name is ${str1} and my brother name is ${str2}`); //String interpolation

console.log(str1 + " " +str2); //string concatination
console.log(str1.concat(" ", str2, " concat() "));

//Predefinde functions to deal with string

/*
All string methods return a new value.
They do not change the original variable.
*/
console.log("string.length")
console.log(str1.length); //13
console.log(str2.length); //10

//at(index) -->returns the char at the given index, recently introduced in the javaScript, -ve value is allowed
console.log("\n at() method");
console.log(str1.at(10)); //m
console.log(str2.at(8));  //a
console.log(str2.at(-4)); //u

//charAt(index) -->returns the char at the given index, negative value is not allowed
console.log("\n charAt() method");
console.log(str1.charAt(0));  //R
console.log(str2.charAt(1));  //m
// console.log(str2charAt(-4)); //-ve value is not allowed in charAt()

/* difference between at() and charAt()
    in at() negative index is allowed.
    in charAt() negative index value is not allowed.
*/

//The charCodeAt(index) method returns the unicode of the character at a specified index in a string, -ve value is not recommed to use
console.log("\n charCodeAt() method"); 
console.log(str1.charCodeAt(2)); //117
console.log(str2.charCodeAt(4)); //32
console.log(str2.charCodeAt(-2)); //NaN
 
// <> --> means optional
//slice(startIndex, <endIndex>) --> extracts a part of string; end index is not included; -ve index value is allowed
console.log("\n slice() method");
console.log(str1.slice(8,16)); //kumar
console.log(str1.slice(8));   //kumar
console.log(str2.slice(-7,-2));  //n Kum
console.log(str2.slice(-10));    //Aman Kumar

//substring(startIndex, <endIndex>) --> extracts a part of string, end index is not included, -ve value will be replaced by "zero".
console.log("\n substring() method");
console.log(str1.substring(0,8)); //Roushan
console.log(str2.substring(-4));  //Aman Kumar (-4 will be replaced by 0)

//substr(startIndex, <length>)  --> extracts a part of string from the given index, till the passed length, -ve value is allowed
console.log("\n substr() method");
console.log(str1.substr(3,4));   //shan
console.log(str1.substr(9));     //umar
console.log(str1.substr(-7, 6)); //n Kuma

console.log("\n toUpperCase() method");
console.log(str1.toUpperCase());

console.log("\n toLowerCase() method");
console.log(str2.toLowerCase());

//trim() --> remove whitespace from both side
console.log("\n trim() method");
console.log(str3.trim());
console.log(str3.trimStart()); //remove whitespace from start
console.log(str3.trimEnd()); //remove whitespace from end
