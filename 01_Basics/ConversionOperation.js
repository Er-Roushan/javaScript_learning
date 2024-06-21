let num = 33;
let str = "JavaScript";
let num2 = "45";
let null_var = null;
let score;
let bool = true;

console.log("==============")

console.log(typeof num);
console.log(typeof str);
console.log(typeof num2);
console.log(typeof null_var); //object type
console.log(typeof score);    //undefined type
console.log(typeof bool);   

console.log("==============")
//number conversion
let converted_num = Number(num2);
console.log(converted_num);          //45
console.log(typeof converted_num);  //number

let convt_str_num = Number(str);
console.log(convt_str_num);         //NaN(not a number)
console.log(typeof convt_str_num)    //number

let convt_null_num = Number(null_var);
console.log(convt_null_num);        //0
console.log(typeof convt_null_num)  //number

let convt_bool_num = Number(bool);
console.log(convt_bool_num);        //1 for true, 0 for false
console.log(typeof convt_bool_num)  //number

//boolean conversion
console.log("==============")
let num_to_boolean = Boolean(num);
console.log(num_to_boolean);       //true
console.log(typeof num_to_boolean); //boolean

let str_to_boolean = Boolean(str);
console.log(str_to_boolean);       //true
console.log(typeof str_to_boolean); //boolean

let null_val_to_boolean = Boolean(null_var);
console.log(null_val_to_boolean);           //false
console.log(typeof null_val_to_boolean);    //boolean


//in above similar way we can do more conversion according to use.