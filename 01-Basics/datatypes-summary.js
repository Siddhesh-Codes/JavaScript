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



