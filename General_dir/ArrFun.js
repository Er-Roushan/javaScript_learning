const arr = ["Roushan", "Aman", "sonu", "abhi", "jigmet"];

arr.forEach((item, index, arr) => {
    console.log(index  + " " + item);
    console.log(arr);
});

const objArr = [
    {
        city : "Patna",
        state : "Bihar"
    },
    {
        city:"Gurugram",
        state:"Haryana"
    },
    {
        city:"Bathinda",
        state:"Punjab"
    }
]

objArr.forEach((item, index) => {
    console.log(item.city +", "+item.state);
});

//forEach() return undefined, that's why it is not going to participate in method chaining


//filter()
/*
Returns the elements of an array that meet the condition specified in a callback function.
*/

const numArr = [6,7,8,9,10,12];

const newArr = numArr.filter((num)=> num>6)
console.log(newArr);

const newNum = [];
numArr.filter((num)=>{
    if(num>=6){
        newNum.push(num);
    }
})

console.log(newNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History');

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
  console.log(userBooks);

  const modiNumArr = numArr.map((num)=>{
    return num * 10;
  })
  console.log(modiNumArr);

//   const modiNumArr = numArr.map((num)=>{
//     return num > 10;
//   })   //[ false, false, false, false, false, true ]

const funChaining = numArr
                    .map((num)=> num * 10)  //[ 60, 70, 80, 90, 100, 120 ]
                    .map((num)=> num + 10)  //[ 70, 80, 90, 100, 110, 130 ]
                    .filter((num)=> num>100); //[110, 130]
console.log(funChaining); //[110, 130]

//reduce()

const sumOfEleOfArr = numArr.reduce((acc, item)=> {
    console.log( `accumlator(acc): ${acc} item: ${item}`);
    return acc+item}, 0);
console.log(sumOfEleOfArr); //52

const shopingCart = [
    { 
        itemName: "Mens Casual Black Shirt",
        itemPrice: 400
    },
    {
        itemName: "Mens formal Shirt",
        itemPrice: 800
    },
    {
        itemName: "Mens Perfume",
        itemPrice:1200
    }
];

const totalAmount = shopingCart.reduce((acc, price) => acc + price.itemPrice, 0);
console.log(totalAmount);  //2400