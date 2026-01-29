// to give our own hardcoded values.

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// console.log(descripter);

// const myNewObj = Object.create(null);

const chai = {
    name: 'Ginger Chai',
    Price: 250,
    isAvailable: true,

    orderChai : function() {
        console.log("Chai nahi bani!!");
        
    }
};


Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: true,
    // false:
    // Price : 250
    // isAvailable : true
    
    // true:
    // name : Ginger Chai
    // Price : 250
    // isAvailable : true
    
    // configurable: true
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));



for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
// TypeError: chai is not iterable if we use chai in place of the object.