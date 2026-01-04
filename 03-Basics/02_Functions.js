
// function calculateCartPrice(num1) {
//     return num1;
// }
// console.log(calculateCartPrice(2)); // 2
// console.log(calculateCartPrice(100,200,300,500)); // 100 ->  here only 100 gets print because we have passed only 1 argument.

// const { use } = require("react");



// To fix this issue we use Rest Operator (Same as Spread but different use case)

function calculateCartPrice(...num1) { // Rest parameter have to be at the last of the parameter sequence 
    return num1;
}

// console.log(calculateCartPrice(100,200,300,2000)); // [ 100, 200, 300, 2000 ]
// it will wrap our values in the array



// function calculateCartPrice(val1,val2,...num1) { // Rest parameter have to be at the last of the parameter sequence 
//     // return val1;
//     // our program will never reach here because of the "return".
//     // return val2;
//     return num1;
// }

// console.log(calculateCartPrice(100,200,300,400)); // [ 300, 400 ] we're printing num1 only  

// console.log(calculateCartPrice(100,200,300,2000)); // [ 100, 200, 300, 2000 ]
// it will wrap our values in the array




// Functions with Objects

const obj = {
    userName: "Siddhesh",
    age:21,
    course:"JS"
};

function handleObjects(anyobj) {
    console.log(`Hello ${anyobj.userName}! your age is ${anyobj.age} and you've bought ${anyobj.course} course.`);
};

// handleObjects(obj); // to access the object we have to pass the obj name as an parameter 

// We can pass objects in following ways as well
// handleObjects({
//     userName: "Ram",
//     age:25,
//     course: "Java"
// });



// Functions with Arrays
const myArr = [100,200,300,400]; 

function handleArrays(arr) {
    // console.log(arr[1]); // 1
    
    return arr[1];
    
}


handleArrays([
    "Siddhesh", 1, 5, true
]);

console.log(handleArrays(myArr)); // 200

