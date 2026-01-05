// If-else and nested If-else basics 
// const num = 101;

// if (num > 100) {
//     console.log("Num is greater than 100!");
// } else if (num == 100) {
//     console.log("Num is equal to 100!");   
// } else {
//     console.log("Num is Smaller than 100!");
// }


// const num = 200;
// if (num > 100) console.log("Num is greater than 100!!!"); // we can use this method as well 


const userLoggedIn = true;
const debitCard = true;
const isLoggedInFromGoogle = false;
const isLoggedInFromEmail = true;

// if (userLoggedIn && debitCard || 2 == 3) { // still it will execute
//     console.log("Allow to do shopping!!"); 
// }

if (isLoggedInFromEmail || isLoggedInFromGoogle) {
    console.log("Welcome!!");
    
}