const num = 500;
// console.log(num);

const balance = new Number (1000); //[Number: 1000]

// console.log(balance);

const num2 = 123.5623;
// console.log(num2.toFixed(2)); // 123.56
// console.log(num2.toPrecision(3)); // 124

const num3 = 10000000;
// console.log(num3.toLocaleString());


// ********************* Math ********************* \\
// const math = 300; 
// console.log(Math.max(300,200));
// console.log(Math.min(300,200));

// console.log(Math.abs(-3)); // 3

// console.log(Math.sqrt(64)); // 8


// console.log(Math.floor(Math.random() * 6) + 1); // Number from 1 - 6

const min = 100;
const max = 200;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); 
// formula to calculate random value when min and max is given. 
// Here we use floor to get the base value (e.g 10.2 -> 10)
// then we generate the random values since random function generates values between 0 - 1 
// we have to multiply it with the (max - min + 1) to get the range e.g 200 - 100 + 1 = 101.
// then we add min at then end i.e 99 + 100 = 199 
// so now the random values will get generate between 101 and 199.