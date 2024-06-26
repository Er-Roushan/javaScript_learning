const date = new Date();
console.log(date);               //2024-06-26T07:31:28.798Z  //output of below to are same with this
console.log(date.toISOString()); //2024-06-26T08:02:31.865Z
console.log(date.toJSON());      //2024-06-26T08:02:31.865Z

console.log(date.toString());  //Wed Jun 26 2024 13:29:21 GMT+0530 (India Standard Time)
console.log(Date());           //Wed Jun 26 2024 13:01:28 GMT+0530 (India Standard Time)

console.log(date.toUTCString()); //Wed, 26 Jun 2024 08:02:31 GMT

console.log(date.toDateString()); //Wed Jun 26 2024
console.log(date.toLocaleDateString()); //26/6/2024
console.log(date.toLocaleTimeString()); //1:32:31 pm
console.log(date.toLocaleString());    //26/6/2024, 1:32:31 pm

console.log(date.getTime());   //Returns the number of milliseconds since midnight Jan 1 1970, and a specified date

let myDate = new Date(2024, 5, 18, 13, 30,42); //create your own date and time(2024, 5, 18-->date : : 13,30,42,34 --> time(hour, min, sec, ms) )
console.log(myDate.toString());  //Tue Jun 18 2024 13:30:42 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); //18/6/2024, 1:30:42 pm

let myDate1 = new Date("06-18-2024"); //set your own format
console.log(myDate1.toLocaleDateString()); //18/6/2024

let myTimeStamp = Date.now(); 
console.log(myTimeStamp);  //Returns the number of milliseconds since midnight Jan 1 1970, to now

console.log(myDate1.getTime()); //Returns the number of milliseconds since midnight Jan 1 1970, to 18/6/2024

console.log(myDate1.getDay());
console.log(myDate1.getDate());
console.log(myDate1.getMonth()+1);
console.log(myDate1.getFullYear());

console.log(myDate.toLocaleString('default', { day : "2-digit", month:"long", year:"numeric" })) //18 June 2024 (custumization in format)

