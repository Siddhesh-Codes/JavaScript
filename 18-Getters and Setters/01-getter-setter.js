class User {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }

    // we have to use getter and setter together in any case. 
    // Email
    // normal call e.g: this.email, this.password; will cause Race condition and will give error.
    // therefore, we will use this._email, this._passowrd;
    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value
    }
    // Password
    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password =  value;
    }
}

const siddhesh = new User("siddhesh@abc.com", "siddhesh@234");
console.log(siddhesh.password); //SIDDHESH@234
console.log(siddhesh.email); // SIDDHESH@ABC.COM

