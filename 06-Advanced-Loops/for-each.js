const coding = ["HTML","JS","CSS","Java"];


// callback function doesnt contains any name of the function
// coding.forEach( function name () {} )

// Iterate using normal Function.
coding.forEach(function (val) {
    // console.log(val);
});


// Iterate using Arrow Function.
coding.forEach( (val) =>  {
    // console.log(val); 
}); 



// Iterate using normal function declaration
function printMe(val) {
    // console.log(val);
}
coding.forEach(printMe);
// HTML
// JS
// CSS
// Java



// for each loop also have the different different parameters e.g items, index, entire arr
coding.forEach( (items, index, arr) => {
    // console.log(items,index,arr);
});

// HTML 0 [ 'HTML', 'JS', 'CSS', 'Java' ]
// JS 1 [ 'HTML', 'JS', 'CSS', 'Java' ]
// CSS 2 [ 'HTML', 'JS', 'CSS', 'Java' ]
// Java 3 [ 'HTML', 'JS', 'CSS', 'Java' ]


const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName: "jS"
    }, 
    {
        languageName : "Java",
        languageFileName: "java"
    }, 
    {
        languageName : "Python",
        languageFileName: "py"
    }
]; 

myCoding.forEach( (items, index) => {
    console.log(items.languageFileName);
});