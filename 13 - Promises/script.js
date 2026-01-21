const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is Completed!!");
        resolve();
    },2000)
});


promiseOne.then(()=>{
    console.log("Promise Consumed!");
    // Async task is Completed!!
    // Promise Consumed!
})


// 2 Promise 

new Promise((resolve,reject)=> {
    setTimeout(() => {
        console.log("Another Way to Represent the Promise");
        console.log("Async Task 2");
        resolve();     
    }, 2000);
}).then(()=> {
    console.log("Async 2 is Resolved!");
    // Another Way to Represent the Promise
    // Async Task 2
})


// 3rd Promise

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({userName: "Siddhesh", email: "siddheshshinde192@gmail.com"}) // here we can pass any values like objects, arrays etc.
    }, 1000); // this will get print first because its taking 1 sec and others taking 2 secs
}).then((user) => {
    console.log(user);
    // { userName: 'Siddhesh', email: 'siddheshshinde192@gmail.com' }
})


// Promise 4
const promiseFour = new Promise((resolve,reject) => {
    setTimeout(() => {
        // let error = false; // without using catch block 
        let error = false;
        if(!error) {
            resolve({userName:"Siddhesh", password: "123"})
        } else {
            reject("ERROR: Something Went Wrong!!")
        }
    }, 2000);
})
.then((user) => {
    console.log(user); // { userName: 'Siddhesh', password: '123' }
    return user.userName; // Siddhesh
})
.then((username) => {
    console.log(username); })
.catch((error) => {
    console.log(error);
})
.finally(()=> console.log("The Promise is either resolved or Rejected!!"));
// The Promise is either resolved or Rejected!!


// Promise 5:
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({userName:"Siddhesh", password: "123"})
        } else {
            reject("ERROR: Something Went Wrong!!")
        }
    }, 2000);
});

const fun = async (params) => {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
fun();


// async function getAllUsers(params) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();

// Another way to use fetch
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json();
// })
// .then((response) => {
//     console.log(response);
// })
// .catch((error) => console.log(error));



// async function getAllUsers(params) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();



fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then ((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Data Fetched Successfully!");
})


// Async/Await : 
// Imagine you ask your mom for a glass of water. While she goes to get it, you keep playing with your toys—you don’t just stand and wait. When she brings the water, you stop playing and drink it.

// In JavaScript, async and await help your code do the same thing!

// async means, “Hey, this function might take some time, but you can keep doing other things.”
// await means, “Now, let’s pause and wait for the important thing (like the water) to be ready before we continue.”
// So, your code can play and do other stuff, and only stop when it really needs to wait for something special!



// Try-Catch: 
// Imagine you’re building a tower with blocks. Sometimes, the tower might fall down. If it does, you don’t cry—you just pick up the blocks and try again!

// In JavaScript, try is like building your tower. You hope everything works.
// catch is like picking up the blocks if something goes wrong. It helps your code not to crash, but to fix the problem and keep going.

// So, try is for doing something, and catch is for helping if there’s a mistake!



// Real World Applications 

// 1. Fetching data from the internet (API calls):
// When you get weather info, news, or user data from a website, you use async/await to wait for the data, and try/catch to handle errors if the internet is down or the server fails.

// 2. Reading or writing files:
// If your app saves or loads files, async/await lets you wait for the file to finish loading, and try/catch helps if the file is missing or there’s a problem.

// 3. User authentication (login):
// When a user logs in, async/await waits for the server to check the password, and try/catch handles wrong passwords or server errors.

// 4. Database operations:
// Async/await is used to wait for the database to respond, and try/catch catches problems like missing data or connection issues.