// const userEmail = "siddhesh@123"; // true

// const userEmail = ""; // false
const userEmail = []; // true

if (userEmail) {
    console.log("Got the user Email.");
} else {
    console.log("Don't have the user email.");
}


// IMP for Interview.

// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// Truthy Values
// "false", 'fasle', "0", " ", '0', {}, [], function() {}



// to check if an array is empty or not 

if (userEmail.length === 0) {
    console.log("Array is Empty!");
}


// to check if an object is empty or not
// const obj = {};
const obj = {1:"Siddhesh"};

if (Object.keys(obj).length === 0) {
    console.log("Object is Empty!");
} else{
    console.log(obj[1]); // Siddhesh
}

// false == 0 // true
// false == '' // true
// false == "" // true
// false == " " // true
// 0 == "" // true
// 0 == " " // true
// 0 == '' // true



// Remove falsy values from the Array.
const nums = [1,2,"",null,0,undefined]
for (let i = nums.length - 1; i >= 0; i--) {
    if(!nums[i]){
        nums.splice(i,1);
    }
}

// console.log(nums)