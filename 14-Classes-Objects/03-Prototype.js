let myName = "Siddhesh     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
myName.trueLength();

"ram    ".trueLength();



let myHeros = ["Thor", "Spiderman"];

let heroPower = {
    thor: "Hammer",
    spiderman : "Sling",

    getSpiderPower : () => {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.siddhesh = () => {
    console.log(`Siddhesh is present in all the objects`);
    
};

Array.prototype.heySiddhesh = () => {
    console.log("Hello from Siddhesh");
}

// heroPower.siddhesh(); 
// It will work because we have created the prototype direct to the Object class and all the sub classess passess through Objects only. 

// myHeros.siddhesh();
// It will work because we have created the prototype direct to the Object class and all the sub classess passess through Objects only. 


// myHeros.heySiddhesh(); // Hello from Siddhesh
// heroPower.heySiddhesh(); // will give error because it dont have access to it because we have created it specifically for arrays only.


// Inheritance

// Old Syntax
const user = {
    name: "Chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    isFullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user


// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);