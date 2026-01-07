// Working with Arrays
// let arr = [1,2,3,45,6];
// for (const i of arr) {
//     console.log(i);
// }   

// Working with Strings

const str = "Siddhesh Shinde.";

// for (const i of str) {
//     console.log(i);

//     // if(i == " "){
//     //     break;
//     // }
// }


// Maps 
const map = new Map();

map.set("IN", "India");
map.set("USA", "United State of America");
map.set("FR", "France");

console.log(map);

for (const [key, value] of map) { // we use [key, value] pairs to iterate over a map.
    // console.log(key+ " :- " +value); 
    // IN :- India
    // USA :- United State of America
    // FR :- France   
}


const myObj = {
    game1: "NFS",
    game2: "BGMI"
};

// myObj is not iterable
// therefore we cant use for-of method on the myObj. 
for (const [key, value] of myObj) {
    // console.log(key+ " :- " +value); 
}