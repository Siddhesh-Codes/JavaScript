// to iterate over an Objects we uses for-in loop

const obj = {
    js : "Javascript",
    java : "Java",
    cpp : "C++",
    swift : "Swift",
    c : "C"
};


for (const key in obj) {
    // console.log(key); // js java cpp swift c all key values

    // console.log(`${key} extension used to save to the ${obj[key]} files`);

}



const myArr = [1,2,3,4,5,6];

for (const key in myArr) {
    // console.log(myArr[key]);
}


// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United State of America");
// map.set("FR", "France");

// We cannot iterate on maps using for-in loop to interate on map use for-of loop

for (const key in map) {
    // console.log(map[key]);
    
}