const user = {
    userName : "Siddhesh",
    age: 21,
    isLoggedIn: true,
    loginCount: 8,

    getUserDetails: () => {
        console.log(this);
    }
}

// console.log(user['age']);
// console.log(user['getUserDetails']);


function User(userName, loginCount, isLoggedIn) {
    this.username = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;
    // console.log(userName);
    
}
// console.log(User('Siddhesh', 8,true));

// Constructor 
const userOne = new User('Sidd', 8, true);
const userTwo = new User('Sham', 8, true);
const userThree = new User('Ram', 8, true);
// console.log(userThree);
// console.log(userOne);
// console.log(userTwo);

// User { username: 'Ram', loginCount: 8, isLoggedIn: true }
// User { username: 'Sidd', loginCount: 8, isLoggedIn: true }
// User { username: 'Sham', loginCount: 8, isLoggedIn: true }



