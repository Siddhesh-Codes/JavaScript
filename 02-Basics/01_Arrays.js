const arr = [1, 2, 3, 4, 5];
// const arr = [1, 2, 3, 4, 5, true, "Siddhesh"] //Valid
// console.log(arr);


// const myArr = new Array("Siddhesh", 1, 2);
// console.log(myArr);
let myArr = new Array(1, 2, 3, 4, 5);

// console.log(myArr.findIndex(x => x === 4)); // 3 index at 3
// console.log(myArr.indexOf(2)); // 1
// console.log(myArr); // [ 1, 2, 3, 4, 5 ] 
// console.log(myArr.join(",")); // converts all arrays values into the strings => 1,2,3,4,5

// Array Concatination
// console.log(myArr);

// const arr1 = [6,7,8,9,10];
// myArr = myArr.concat(arr1);
// console.log(myArr);
// Output: 
// [ 1, 2, 3, 4, 5 ]
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]

// console.log(typeof arr); // object



// Push - Pop Operation
// arr.push(3);
// arr.push(20);
// console.log(arr);

// arr.pop();
// console.log(arr);

// Output:
// [
//   1, 2,  3, 4,
//   5, 3, 20
// ]
// [ 1, 2, 3, 4, 5, 3 ]


// Slice and Splice // V.IMP 

const arr1 = [1,2,3,4,5,6];
// console.log(arr1.length); // 6
console.log("A ", arr1);

const arr3 = arr1.slice(1,3);
console.log(arr3);

// console.log(arr1.slice(1,3)); // [ 2, 3 ]
console.log("B ",arr1);


const arr4 = arr1.splice(1,3);
console.log("C ",arr1); 
console.log(arr4); // if we use + here then we will get string formated array C 1,2,3 instead of C  [ 1, 2, 3 ]

// console.log(arr1); // here our og array 



// V.IMP
// slice():
// When we use slice then our Original Array didnt get modify 
// const arr3 = arr1.slice(1,3);
// console.log("After Slice ",arr1);  // After Slice  [ 1, 2, 3, 4, 5, 6 ]


// splice(): 
// When we use splice then our Original Array Gets Modify 
// const arr4 = arr1.splice(1,3);
// console.log("After Splice ",arr1); // After Splice  [ 1, 5, 6 ]
