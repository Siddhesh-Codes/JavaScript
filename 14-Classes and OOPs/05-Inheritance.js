class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`UserName is : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("Chai", "chai@teacher", "123");

chai.addCourse();

const masalaChai = new User("masalaChai");

masalaChai.logMe();

console.log(chai == masalaChai); // false
console.log(chai == Teacher); // false
console.log(chai instanceof Teacher); // true
console.log(chai instanceof masalaChai); // true
