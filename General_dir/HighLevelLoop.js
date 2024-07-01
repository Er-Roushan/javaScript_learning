const arr = [1, 2, 3, 4, 5, 7];

//it will print all the element of array.
for (const num of arr) {
   // console.log(num);
}

const greeting = "Hello Roushan";
for (const val of greeting) {
  //  console.log(val);
}

// const arr2 = Array.from(greeting);
// console.log(arr2);

//Map()

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("UK", "United Kingdom");

//console.log(map);

for (const [key,val] of map) {
   // console.log(key + " :- " + val);
}
// for (const [key,val] of arr) {
//     console.log(key + " :- " + val);
// }

const myObj = {
    channel1:"chai aur code",
    channel2:"code with harry"
}

// for (const [key, val] of myObj) {
//     console.log(key + ":-" + val);
// }   //myObj is not iterable

// for in

for (const key in myObj) {
   console.log(key);
}

for (const key in arr) {
 //  console.log(key);
}

for (const key in arr) {
  //  console.log(arr[key]);
 }

//  for (const key in map) {
    // console.log(key);
//  } //not works

