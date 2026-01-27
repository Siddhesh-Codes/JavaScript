class User {
    constructor (username) {
        this.username = username;
    }

    logMe() {
        console.log(`UserName : ${this.username}`);
    }
    // static keyword is used to prevent access from the other methods, objects or child classes to access the particular method.
    static createId() {
        return `123`;
    }
}

const Siddhesh = new User("Siddhesh");
console.log(Siddhesh.createId()); // give error because we're trying to access the static method.