// Concatination of 2 Arrays
const arr1 = ["Iron Man", "Thor", "Spiderman"];
const arr2 = ["Superman", "Flash", "Batman"];

// Brute Force
// const newArr = arr1.push(arr2); // [ 'Iron Man', 'Thor', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(arr1);


// Better Approach 
// Concatination
// const newArr = arr1.concat(arr2); // [ 'Iron Man', 'Thor', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
// console.log(newArr);


// Optimal Approach
// Using Spread operator
const newArr = [...arr1, ...arr2]; // [ 'Iron Man', 'Thor', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
// console.log(newArr);
// if we use spread operator then we can combine multiple arrays together
const newOne = [...arr1, ...arr2, ...newArr];
// console.log(newOne);
// [
//   'Iron Man',  'Thor',
//   'Spiderman', 'Superman',
//   'Flash',     'Batman',
//   'Iron Man',  'Thor',
//   'Spiderman', 'Superman',
//   'Flash',     'Batman'
// ]


// Flat 
const arr = [1, 2, [3,4,5], 6, [7,[8,9,[10,[11,[12]]]]]];
const another_arr = arr.flat(Infinity);
// console.log(another_arr);

// [
//    1,  2, 3, 4,  5,
//    6,  7, 8, 9, 10,
//   11, 12
// ]


// console.log(Array.isArray("Siddhesh"));
// false
// console.log(Array.from("Siddhesh"));
// [
//   'S', 'i', 'd',
//   'd', 'h', 'e',
//   's', 'h'
// ]

// Interview Question
// console.log(Array.from({name:"Siddhesh"})); // [] empty array

// Array.of
const s1 = 100;
const s2 = 200;
const s3 = 300;
const s4 = 400;

// console.log(Array.of(s1,s2,s3,s4));
// [ 100, 200, 300, 400 ]