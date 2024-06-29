const user = {
    username: "Aman",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage();
/* 
{
 username: 'Aman',
 price: 999,
 welcomeMessage: [Function: welcomeMessage]
}

 */
user.username = "Roushan";
user.welcomeMessage();

console.log(this);  //{}

/*
 function func(){
     let username = "Aman";
     console.log(this);
 }
func();

const func1 = function () {
     let username = "nikita"
     console.log(this);
 }
func1();

*/

const func2 = () => {
    let username = "sonu";
    console.log(this);
}

func2();  //{}

/*
const func3 = function () {

    let username = "abhi";
    let arrFunc = () => {
        console.log(this); //here the context of func3() will be printed
    }
    arrFunc();    
}
func3();
*/

//if we use curly braces then we have to write return stmt explicitly
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4)); //7

//in below way we need not to write return stmt explicitly, complier will add implicitly
const addTwo1 = (num1, num2) => num1 + num2;
console.log(addTwo1(4, 4));  //8

//if we use parenthesis, then we need not to write return stmt explicitly, complier will add implicitly
const addTwo2 = (num1, num2) => (num1 + num2)
console.log(addTwo2(5, 4)); //9

//if we have to return object, then we have to write in following way
const addTwo3 = (num1, num2) => ({ username: "Roushan kumar" })
console.log(addTwo3(6, 4));  //{ username: 'Roushan Kumar' }




//The forEach() method calls a function for each element in an array
//array.forEach(function(currentValue, index, arr), thisValue) -->syntax --for more visit w3School
const myArray = ['Apple', "Banana", "Guava", "Orange", "Mango"];
function myFunction(item, index) {
    console.log("index: "+ index + " item: " + item);
  }
myArray.forEach(myFunction);



const obj1 = {
    value: 42,
    arrowFunction: function () {

        let func = () => {
            console.log(this);
            console.log(this.value);
        }
        func();
    }
};

obj1.arrowFunction(); //here arrow function 'this'  context of obj1 


const obj = {
    value: 42,
    arrowFunction: () => {
        console.log(this.value);
    }
};

obj.arrowFunction(); // Outputs: undefined (or the value of `this.value` in the enclosing context)
// this context will be above parent(global here)(remember one step up)

