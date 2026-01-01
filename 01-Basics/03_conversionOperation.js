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
console.log(check);

 