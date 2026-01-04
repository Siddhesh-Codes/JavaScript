// Functions are used to reduce the redundant work
// console.log("Siddhesh");
// console.log("Siddhesh");
// console.log("Siddhesh");
// console.log("Siddhesh");
// console.log("Siddhesh");


function myName() {
    console.log("Siddhesh");
    console.log("Siddhesh");
    console.log("Siddhesh");
    console.log("Siddhesh");
    console.log("Siddhesh");
}
// myName();


// Function using log

function addTwoNum (num1, num2) {
    let res = num1 + num2;
    // console.log(res);
}

// addTwoNum(); // NaN -> We did'nt pass argument here.
// addTwoNum(5,5); // 10
// console.log(addTwoNum(52,10)); // We will get undefined as well because function is not retunring anything.
// 62
// undefined

// Functions using return 
function addTwoNum (num1, num2) {
    // let res = num1 + num2;
    return num1 + num2;
}

const res = addTwoNum(2,3);
// console.log(res); // 5
// console.log(addTwoNum(2,3));  // 5 -> now we have to log the result because we get returned value here.

function dispName(userName = "John Doe") { // we can add default userName here 
    if(!userName) {
        console.log("Please enter a Username");
        return;
    } 
    return `${userName} just logged in!!`;
}

// dispName("Siddhesh") // nothing will print because we did not log anything
// console.log(dispName("Siddhesh")); // Siddhesh just logged in!!

console.log(dispName()); // John Doe just logged in!!