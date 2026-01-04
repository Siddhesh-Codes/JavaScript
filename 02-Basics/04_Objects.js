// const myObj = new Object(); // Singleton
// console.log(myObj); // {} 
// const obj = {};
// console.log(obj); // {}

const obj = {
    userName: "Siddhesh",
    isLoggedIn: true,
    age: 21
};

// console.log(obj); // { userName: 'Siddhesh', isLoggedIn: true, age: 21 }

const myObj = {
    fullName:{
        firstName:"Siddhesh",
        lastName: "Shinde",
        age:21
    }
};

// console.log(myObj.fullName.firstName); // Siddhesh
// console.log(myObj.fullName.age); // 21

// console.log(myObj.fullName?.firstName); // here we use "?" to check if fullName is present in the object or not we will use it when we get data with the APIs


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

// const obj3 = {obj1,obj2};
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'a', '4': 'b' } }
// here we again get problem like Array Concatination in the Object as well if we do it using the above method 


// To solve this problem we'll use assign property.
const abc = Object.assign({}, obj1, obj2); // 
// console.log(abc); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// But most of the time in the industy we will use Spread Operator.

const obj4 = {...obj1,...obj2};
// console.log(obj4); // { '1': 'a', '2': 'a', '4': 'b' }

// console.log(obj4.2); // we cant access objects like this it will give error.
// we have to access it using "obj4[2]" 

// console.log(obj4[3]); // c -> correct way to access the objects.

console.log(obj);

// console.log(Object.keys(obj)); // [ 'userName', 'isLoggedIn', 'age' ]
// It will return all the "keys" of the objects in the new Separate "Array".

// console.log(Object.values(obj)); // [ 'Siddhesh', true, 21 ]
// It will return all the "values" of the objects in the new Separate "Array".

// console.log(Object.entries(obj)); 
// [ [ 'userName', 'Siddhesh' ], [ 'isLoggedIn', true ], [ 'age', 21 ] ]
// It will return all the "keys" and "values" of the given Object.

// console.log(obj.hasOwnProperty('userName')); // true
// To check whether the any property is present or not 


// When values comes from the Databases it comes in Array-Object format

const users = [
    {
        id:1,
        email:"siddhesh@google.com"
    },
    {
        id:2,
        email:"siddhesh@google.com"
    },
    {
        id:1,
        email:"siddhesh@google.com"
    }
]

// To access these values we'll use Array based indexing i.e 0,1
// console.log(users[0].email);
// console.log(users[0].id);
// console.log(users[1].email);
// console.log(users[1].id);
