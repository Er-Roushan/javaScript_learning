let arr = [1, 2, 3, 4, 5];
let arr1 = new Array(6, 7, 8, 9, 10);

console.log(typeof arr);    //object
console.log(typeof arr1);   //object

arr.push(6);  //add 6 at end
arr.push(7);  //add 7 at end
arr1.pop(); //remove a element from last

arr1.unshift(5); //add 5 to 0th index
arr1.unshift(4);
arr1.unshift(3);

arr.shift(); //remove element from 0th index

console.log(arr);
console.log(arr1)

console.log(arr.includes(6)); //true
console.log(arr1.includes(11)); //false 

console.log(arr.indexOf(5)); //3
console.log(arr1.indexOf(12)); //-1 means element is not present

let arr2 = arr.join(); //join() returns array as string, with element seperated by comma
console.log(typeof arr2); //string
console.log(arr2);  //2,3,4,5,6,7       [] -->removed

//slice() ans splice()

console.log("A", arr);
let slice_arr = arr.slice(1, 3);  //A [ 2, 3, 4, 5, 6, 7 ]
console.log(slice_arr);          //[ 3, 4 ]
console.log(arr);                //[ 2, 3, 4, 5, 6, 7 ]     --> original array is at is

console.log("B", arr1);          //B [ 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr1.splice(1, 4));   //[ 4, 5, 6, 7 ]           --> Range is included here
console.log(arr1);               //[ 3, 8, 9 ]              --> original array is modified



let myArrFam = ["Roushan", "Aman", "Nimmy", "Golu"];
let myArrFri = ["Sonu", "Abhi", "Jigmet", "MC"];

// myArrFam.push(myArrFri);
// console.log(myArrFam);   //["Roushan", "Aman", "Nimmy", "Golu", ["Sonu", "Abhi", "Jigmet", "MC"]]

// console.log(myArrFam.concat(myArrFri)); //["Roushan", "Aman", "Nimmy", "Golu", "Sonu", "Abhi", "Jigmet", "MC"] here we can pass only one array to concat fun
// console.log(myArrFam);     //[ 'Roushan', 'Aman', 'Nimmy', 'Golu' ]


//sepread fn
let newArr = [...myArrFam, ...myArrFri]; //["Roushan", "Aman", "Nimmy", "Golu", "Sonu", "Abhi", "Jigmet", "MC"]  here you can pass as many array you want
console.log(newArr);

//flat()
let flatArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12], 13], 14];  //-->depth = 3 ( array ke ander array useke ander array)
console.log(flatArr);
console.log(flatArr.flat(2)); // depth value dena h....(can use infinity also) //OP: [ 1,  2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13, 14 ]

console.log(flatArr.flat(1));  //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11, 12 ], 13, 14 ]
console.log(flatArr.flat(0));  //[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, 9, [ 10, 11, 12 ], 13 ], 14 ]

console.log(flatArr);        //not modified by flat()



//to check an output is an array or not or to convert a string to array 
//Array.isArray(), Array.from()
console.log(Array.isArray("Roushan Kumar")); //false
console.log(Array.from("Roushan Kumar")); // to convert string into array --> this fun return array  [ 'R', 'o', 'u', 's', 'h', 'a', 'n', ' ', 'K', 'u', 'm', 'a', 'r']

const obj = {
    name: "Roushan Kumar",
    age: 22,
    city: "Gurugram",
};

const keysArray = Array.from(Object.keys(obj));

console.log(keysArray); // ["name", "age", "city"]



//Array.of()
let var1 = 10;
let var2 = 20;
let var3 = 30;
console.log(Array.of(var1, var2, var3)); //[ 10, 20, 30 ]






