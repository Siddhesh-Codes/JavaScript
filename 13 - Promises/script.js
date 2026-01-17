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
