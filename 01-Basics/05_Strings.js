const name = "Siddhesh";
// console.log(name + 23 + " Score");
const marks = 85;

const typeOf = name + 23 + " Score";
// console.log(typeof typeOf);

// console.log(`My name is ${name} and I got ${marks} marks`);

const myName = "Siddhesh Shinde";

// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());


// console.log(myName.charAt(5)); // e
// console.log(myName.indexOf('s')); // 6

// console.log(myName.slice(0,8)); // Siddhesh

const url = "https://google.com/siddhesh shinde/"

// console.log(url.replace(" " , '-')); // https://google.com/siddhesh-shinde/

// console.log(url.includes("-")); // false

// const xyz = "    Siddhesh     ";
// console.log(xyz); //    Siddhesh     

// console.log(xyz.trim()); // Siddhesh


// console.log(url.split("/", 3)); //[ 'https:', '', 'google.com' ]


const name1 = "Siddhesh"
// console.log(name1.substring(0,3)); // Sid - here it will not include the last index 

// console.log(name1.lastIndexOf('h')); // 7

// console.log(name1.startsWith('m')); // false

// console.log(name1.padStart(15,"Shinde ")); // Shinde Siddhesh 

// console.log(name1.padEnd(13," Good")); // Siddhesh Good

// console.log(name1.repeat(3)); // SiddheshSiddheshSiddhesh

// console.log(name1.charCodeAt(3)); // d = 100


const text = "The rain in Spain stays mainly in the plain.";
const result = text.match(/in/g); // g = global

// Without g: only the first match is returned.
// With g: all matches are returned in an array.

console.log(result); // Output: [ 'ain', 'ain', 'ain', 'ain' ]





