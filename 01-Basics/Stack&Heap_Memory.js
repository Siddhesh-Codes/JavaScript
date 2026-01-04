// Primitive (Pass-by-Value: allocate copy of the value not actual reference)

// 7 Types: Number, String, Boolean, null, undefined, Symbol, BigInt

// JS is Dynamically Typed Language: const name = "Siddhesh"; / const name = 25;


let num = 10; //number
let num1 = 10.2; //number

let isLoggedIn = false;
// console.log(isLoggedIn = true);

const id = Symbol(123);
const id2 = Symbol(123);

// console.log(id === id2); false

// Non-Primitive (Pass-by-Reference: allocate actual reference)
// Array, Object, Function


const arr = ["Siddhesh", 123, 89];
// console.log(arr);

let myObj = {
    name: "Siddhehs",
    age : 21,
}
// console.log(myObj);

const myFun = function () {
    console.log("Hello World");
    
}
// myFun();

// console.log(typeof myFun); // Object Function
// console.log(typeof arr);
// console.log(typeof myObj);
// console.log(typeof id);


// *******************Sack & Heap Memory*******************

// Stack (Primitive Data Types)  Heap(Non-Primitive)


let numOne = 10;
let numTwo = numOne; // here copy of the reference of the original variable gets assigned 
numTwo = 50; // here because we've assigned the copy of the original reference variable so the original variable value doesnt get affect because of primitive Data Type.
// console.log(numOne); // 10
// console.log(numTwo); // 50


let userOne = {
    email:"user@gmail.com",
    name:"Siddhesh"
};

// console.log(userOne);

let userTwo = userOne; // here the reference of the original variable got assigned so the changes we made by using new variable will affect in the userOne as well because of the Non-Primitive Data Type 

userTwo.email = "siddhesh@labdox.in";
userTwo.name = "siddhesh";

// console.log(userOne);
// console.log(userTwo);