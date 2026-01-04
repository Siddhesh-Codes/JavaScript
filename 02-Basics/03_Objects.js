// Syntax : const myObj = {}; 
// const myObj = {
//     name:"Siddhesh",
//     "full name" : "Siddhesh Shinde",
//     email:"siddhesh@google.com",
//     age:21,
//     location: "Mumbai"
// };


// // Below method is Correct but it will brake when try to print get "full name" 
// // It wont work. 
// // console.log(myObj.age);

// // Correct way to call the objects  
// console.log(myObj["email"]);
// console.log(myObj["age"]);
// console.log(myObj["name"]);
// console.log(myObj["full name"]); // Siddhesh Shinde



const abc = Symbol();

const obj = {
    name:"Siddhesh",
    "full name" : "Siddhesh Shinde",
    // abc: "myKey12", // wrong syntax to access Symbol.
    [abc] : "Key123",  // correct way to access the Symbol. 
    email:"siddhesh@google.com",
    age:21,
    location: "Mumbai"
};

// console.log(obj[abc]); // It wont work because we cant acces Symbol like this
// console.log(obj["abc"]); // If we use this syntax still then it will give "undefined" answer.
// console.log(obj[abc]); // correct way to print the Symbol value.


obj.email = "siddhesh@dev.com"; 
// console.log(obj); // email: 'siddhesh@dev.com'

// Object.freeze(obj); // to freeze entire obj of getting change.
// Object.freeze(obj.email); // Still we can modify the email address

// This syntax we have to use to prevent updating the value of email.
// Object.defineProperty(obj, "email", {
//   writable: false,
//   configurable: false
// }); 

// obj.email = "siddhesh@hack.com"; 
// console.log(obj); // it will not make any changes because our Object is freez



obj.greeting = function () {
    console.log("Hello Siddhesh!!!!");    
}

// obj.greeting();
// console.log(obj.greeting());
// if we call above method with console.log() it will give us undefined at the end;
// Hello Siddhesh!!!!
// undefined


obj.greet= function() {
    console.log(`Your user name is: ${this.name}`);   
    console.log(`Your user age is: ${this.age}`);   
}

obj.greet();
// Your user name is: Siddhesh
// Your user age is: 21
