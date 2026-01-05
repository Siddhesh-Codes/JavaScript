// Arrow Function & this keyword
const user =  {
    username: "Siddhesh",
    age: 21,

    // This is how we create functions inside objects
    welcomeUser : function() {
        console.log(`${this.username},  welcome!! your age is ${this.age}`);
        // We have to use this keyword to access the element in this object block

        // console.log(this); // { username: 'Siddhesh', age: 21, welcomeUser: [Function: welcomeUser] }
        
    }
};

// user.welcomeUser(); // Siddhesh,  welcome!! your age is 21
// user.username = "Ram";
// user.welcomeUser(); // Ram,  welcome!! your age is 21

// console.log(this); // {} : rn we dont have any global context so the empty {} will get print  


// V.IMP: in the brower "Window" is the global object 


// // this -> objects
// // this -> functions() X we cant use this keyword there.
// function chai() {
//     const username = "Siddhesh"; 
//     console.log(this.username);  // undefined : because this keyword works with objects only.there are ways to this keyword in functions we will see it later on.
// };

// chai();


// Arrow Function 

const chai = () => {
    let username = "Sid";
    // console.log(this); // {}  

    // console.log(this.username); // undefined
    console.log(username); // Sid   
}
// chai();

// () => {} // Arrow Function Syntax

// Basic Arrow Function
const sum = (num1, num2) => {
    return num1 + num2;
}
// console.log(sum(5,3));


// Implicit Return Type
const sum1 = (num1, num2) => num1 + num2;  
// console.log(sum1(10,25)); // 35

// Implicit Return Type 2 
const sum2 = (num1, num2) => ( num1 + num2 );
// console.log(sum2(10,20)); // 30



// This is incorrect way to declare the object using arrow function.
// const objWithArrow = () => {user:"Siddhesh"};

// console.log(objWithArrow()); // undefined

// To declare the object in arrow function we have to use below syntax:
const objWithArrow = () => ({user:"Siddhesh"}); // Correct syntax.
// console.log(objWithArrow()); // { user: 'Siddhesh' }.

