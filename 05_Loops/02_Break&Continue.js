for (let i = 1; i <= 20; i++) {
    // It will break out of the loop when i == 5 
    // answer: 1 2 3 4 
    if (i == 5) {
        console.log("Number 5 Detected!!");
        break;
    }

    // It wont get execute because of break keyword.
    // console.log(`Value of i is: ${i}`);  
    

    // If we have to avoid one number in-between the execution then we use continue.
    if (i == 5 || i == 10 || i == 15 || i == 20) {
        console.log("5 number Detected!!");
        continue;
    } 
    // console.log(`Value of i is: ${i}`);  
}