// Immediately Invoked Function Expression (IIFE)

// Named IIFE
(function chai(name) {
    console.log(`Hello ${name}`);
    
})("Siddhesh"); // here we have to give Semicolon compulsory to stop the execution of the IIFE. 

// Unnamed IIFE
((name) => {
    console.log("DB Connected!!");
    console.log(`Hello ${name}`);
})("Siddhesh"); 
