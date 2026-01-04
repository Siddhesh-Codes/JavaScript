let a = 300; // Global Scope accissible in the entire code 

if(true) {
    let a = 10; // block scope accissible only this block of code. 
    const b = 20; // block scope accissible only this block of code.
    var c = 30; // var doesnt support block scope it will be accessible outside of the if block scope thats why we dont use var keyword to declare the variables 

    // console.log(a); // This will print 10 not 300.
    
}
// console.log(a); // give error which is valid 
// console.log(b); // give error which is valid 
// console.log(c); // 30 

// console.log(a); // this will print 300 not 30 because of the Global scope.

