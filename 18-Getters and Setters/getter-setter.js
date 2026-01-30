class User {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }
    // we have to use getter and setter together in any case. 
    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password =  value;
    }
}

const siddhesh = new User("siddhesh@abc.com", "siddhesh@234");
console.log(siddhesh.password); //SIDDHESH@234

