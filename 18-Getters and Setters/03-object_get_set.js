const User = {
    _email : "siddhesh@123",
    _password: "abcd",


    get email() {
        return this._email.toUpperCase();
    },
    
    set email(value) {
        this._email = value;
    } 
}

const obj = Object.create(User);
console.log(obj.email);
