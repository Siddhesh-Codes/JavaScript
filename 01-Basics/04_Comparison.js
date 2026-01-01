// console.log("1" == 2); // false
// console.log(1 <= "2"); // true  


// let a = 1 <= "0"
// console.log(typeof a); // false  3


// js converts null to 0 and then compares it
// console.log(null < 0); //false, 
// console.log(null >= 0); // true
// console.log(null <= 0); // true


// console.log(null == 0); // false // here js don't convert null to 0 it direct check it as it is 


// console.log(undefined < 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);



// Strict Check (===) : it also checks datatype of the comparison
let st1 = "5"
let st2 = 5;
// console.log(st1 == st2); // true
console.log(st1 === st2); // false 

