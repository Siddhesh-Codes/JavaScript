function multiplyBy5(num) {
    return num * 5;
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}

function createUser(username, score) {
    // this keyword used to tell our current body about the context of the current variable and the Global variable

    this.username = username;
    this.score = score;
}

createUser.prototype.increment = () => {
    // score++; // this wont work and give error because it doesnt know the context. like who is asking to increment the value?? if 2 or more function calling incrememnt the it doesnt know which one is actually calling the increment
    // That's why we use this keyword to give the context of each and everyone separately.
    this.score++;
}
createUser.prototype.printMe = function ()  {
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("Char", 25);

// This wont work because we arent creating a new object for the tea. to do so we have to use "new" keyword.
const tea = createUser("Tea", 250); 
chai.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/