function setUsername(username) {
    this.username = username;
    console.log("Called"); // to check whether the fuction is getting called or not.
}

function createUser(username, email, password) {
    // setUsername(username); // this method will not work because we're not setting the context 
    // setUsername(this, username); // this will also not work because we're passing current context only we arent calling anything

    setUsername.call(this, username);
    // createUser { username: 'Siddhesh', email: 'sid@123', password: 253 }
    
    this.email = email;
    this.password = password;
}

const name = new createUser("Siddhesh", "sid@123", 253);
console.log(name);
