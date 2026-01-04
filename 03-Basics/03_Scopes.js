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



// Functions Scope with example

function one() {
    const name = "Siddhesh";
    function two() {
        const age = 21;
        console.log(name);
    };
    // console.log(age); // we will get error here because of the scope of the age is only available inside the two() and our program will start execution here only below two() will never get call
    
    two(); // then this will get called
};
// one(); // first this method will get called first 


// If-else scope

if (true) {
    const username = "Siddhesh";
    if (true) {
        const website = ' youtube';
        console.log(username + website); // Siddhesh youtube
    }
    // console.log(website); // this will give an error because of the scope
}
// console.log(username); // this will also give an error because of the scope 



// ******************************** Mini Hoisting ********************************

// V.IMP Concept

addOne(); // we can call this function here as well becasue we did not assigned it in any variable.  

function addOne(num) {
    return num + 1;
};


// BUT 


// addTwo() // we cannot access this function here because we "initialized" it into the variable, so it will give error.
const addTwo = function(num) {
    return num + 1;
};

addTwo(); // we have to access it after the initialization.