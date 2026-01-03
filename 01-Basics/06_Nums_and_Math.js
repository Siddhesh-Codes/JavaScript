const num = 500;
// console.log(num);

const balance = new Number (1000); //[Number: 1000]

// console.log(balance);

const num2 = 123.623;
// console.log(num2.toFixed(2)); // 123.56
// console.log(num2.toPrecision(3)); // 124 (because after .623 is there).

const num3 = 10000000;
// console.log(num3.toLocaleString()); // 1,00,00,000


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
// Formula to calculate a random integer value when min and max are given.
// Math.random() generates a value between 0 (inclusive) and 1 (exclusive).
// Multiplying by (max - min + 1) gives a range from 0 up to (max - min + 1) (exclusive).
// Adding min shifts the range so the minimum possible value is min.
// Math.floor rounds down, so the maximum possible value is max.
// For min = 100 and max = 200, this generates values from 100 to 200, inclusive.


// Program: Keep generating random numbers until 100 appears
// let found = false;
// while (!found) {
// 	const rand = Math.floor(Math.random() * (max - min + 1) + min);
// 	console.log(rand);
// 	if (rand === 200 || rand == 100) {
// 		console.log('Stopping.');
// 		found = true;
// 	}
// }