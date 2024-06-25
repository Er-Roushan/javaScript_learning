console.log(Math); //object

console.log(Math.abs(-90)); //90
console.log(Math.round(7.3)); //7
console.log(Math.floor(3.2)); //3
console.log(Math.ceil(5.6)); //6

console.log(Math.min(3, 45, 0, -1, 56)); //-1
console.log(Math.sqrt(64));  //8

console.log(Math.random());  //new values always comes between 0 and 1
console.log(Math.random() * 10);
console.log((Math.random() * 10 )+ 1);

const min = 30;
const max = 200;
console.log(Math.ceil(Math.random() * 10));
console.log(Math.floor(Math.random() * (max - min + 1) ) + min);

console.log(Math.trunc(98.309)); // 98  ( this method return the integer value from a number.)