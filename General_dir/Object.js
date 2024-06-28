const myKey = Symbol("mySeceretKey");


const addObj = {
    name: "Roushan Kumar",
    age:25,
    "location":"Gurugram",
    [myKey]:"mySeceretKey",
    email:"roushan@gmail.com",
    isLoggedIn:false,
    lastLogin: ['Monday', 'Tuesday']

}

//internally key of object is treated as string
console.log(addObj.name);    //Roushan Kumar
console.log(addObj['name']); //Roushan Kumar
console.log(addObj[myKey]); //symbol inside object can be only accessible by this way
console.log(addObj.location); //Gurugram
console.log(addObj.myKey)     //undefined

addObj.name="Aman Kumar";  //update name to Aman Kumar
console.log(addObj.name);  //Aman Kumar

//hasOwnProperty() --> this method check a property is present or not inside an object
console.log(addObj.hasOwnProperty("name"));  //true
console.log(addObj.hasOwnProperty("gender")); //false

/*
Object.freeze(addObj);     //freeze() function will freeze the modification of properties of passed object

addObj.name="Mr Roushan";  //it will execute,, but operation is not going to performed
console.log(addObj.name);  //Aman Kumar
*/

addObj.greeting = function () {
    console.log("Hello ji...")
}

addObj.greetingAgain = function (){
    console.log(`Hello Mr ${this.name}.`);
}

addObj.fruit = "apple"; //will add fruit properties to object

console.log(addObj);
console.log(addObj.greeting); //[Function (anonymous)]
console.log(addObj.greeting()); //Hello ji... , alongwith this undefined also comes...ummmmmmmmmmmmm
console.log(addObj.greetingAgain()); //Hello Mr Aman Kumar.  , alongwith this undefined also comes

console.log("============================================");

const user = {};
user.name = "Er Roushan kumar";
user.id = "Roushan@7890";
user.isLoggedIn = false;

console.log(user);  //{ name: 'Er Roushan kumar', id: 'Roushan@7890', isLoggedIn: false }

const regularUser = {
    email: "roushan@google.com",
    fullname: {
        userfullname: {
            firstname: "Abhishek Kumar",
            lastname:"jha"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);  //Abhishek Kumar

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

const obj4 = {obj1, obj2, obj3};
console.log(obj4); //output below
/*
  {
    obj1: { '1': 'a', '2': 'b' },
    obj2: { '3': 'c', '4': 'd' },
    obj3: { '5': 'e', '6': 'f' }
  }

*/

//object.assign(targer, ...sources)
/*
const obj5 = Object.assign(obj1, obj2, obj3); //here target is obj1 --> this inst will modify the obj1 also. (duplicates key will be removed,only sigle will be there)
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }  -->modified
*/


const obj6 = Object.assign({}, obj1, obj2, obj3); //{}--> this will be target (empty obj), obj1, obj2, obj3 will merger in {}
console.log(obj6);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//for merging of array we frequently use spreading method like array

const obj7 = {...obj1, ...obj2, ...obj3};
console.log(obj7);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


//Destructuring of object.
//form database response, we mainly get array of object where destructuring is used

const user2 = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "a@gmail.com"
    },
]

console.log(user2);
console.log(user2[1].email); //h@gmail.com

console.log(Object.keys(user));  //[ 'name', 'id', 'isLoggedIn' ]
console.log(Object.values(user));  //[ 'Er Roushan kumar', 'Roushan@7890', false ]
console.log(Object.entries(user));  //return array of array, inside array, a key-value pair is also returned as array. Below is ouput
/*
[
  [ 'name', 'Er Roushan kumar' ],
  [ 'id', 'Roushan@7890' ],
  [ 'isLoggedIn', false ]
]
*/

const course = {
    coursename: "js in hindi",
    price: "Free",
    courseInstructor: "hitesh chd - chai aur code"
}

// jb v courseInstructor access krna hoga baar baar "course.courseInstructor" likhna hoga, so to short this we perform below ope
const {courseInstructor} = course;
console.log(courseInstructor); //hitesh chd - chai aur code

//if we want to give any other shortname name to property we can also give in this way
const {courseInstructor: instructor} = course
console.log(instructor); //hitesh chd - chai aur code