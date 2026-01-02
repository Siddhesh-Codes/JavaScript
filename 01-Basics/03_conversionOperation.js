// let score = "25abc";
// let score = undefined;


// console.log(typeof score);
// console.log(typeof (score));

// let valInNum = Number(score);

// console.log(valInNum);


// "25" => 25
// "25abc" => NaN   type => number
// "abc" => NaN
// true => 1
// null => 0
// undefined => NaN



// Boolean Conversion
// let isLoggedIn = 1; // Number => true
// let isLoggedIn = ""; // Empty String => false
// let isLoggedIn = "Hello"; // String => true
// let isLoggedIn = null; // null => false
let isLoggedIn = undefined; // undefined => false
let check = Boolean(isLoggedIn);
// console.log(check);

 
// String Conversion
// let num = 25; // 25 => "25" 
// let bool = true; // true => "true"
// let Null = null; // null => "null"
let unDefined = undefined; // undefined => "undefined"

let string = String(unDefined);
// console.log(string);
// console.log(typeof string);



// **************************Operations**************************

let val = 3;
let negValue = -val;

// console.log(negValue); // -3
// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3/3);
// console.log(5%3);
// console.log(2**4);

let str1 = "Hello ";
let str2 = "Siddhesh ";

// console.log(str1 + str2);


// console.log("1" + 3); // String => 13
// console.log(1 + "3"); // String => 13

// console.log(1 + 2 + "3"); 
// console.log(typeof 1 + 2 + "3"); 

// console.log(+true); // output: 1,  avoid writing messy code in the company.
// console.log(+""); // output:0, avoid writing messy code in the company.


let a = 5;
const b = a++; // here first a gets assigned to the value.

console.log(a , b); // 6 5

let x = 5;
const y = ++x; //here first increment will happen then assignment

console.log(x,y); // 6 6

