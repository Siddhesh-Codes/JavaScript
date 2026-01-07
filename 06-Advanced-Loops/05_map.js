const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map method is also returns the value automatically like filter.
// but the main difference is we dont have conditional control in map where as we have conditional control in filter so use both wisely.
// const num = myNum.map( (num1) => {return num1 + 20});

// console.log(num);
// [
//   21, 22, 23, 24, 25,
//   26, 27, 28, 29, 30
// ]


// Chaining IMP Concept
const newNums = myNum.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40);

// [
//   41, 51,  61, 71,
//   81, 91, 101
// ]

// console.log(newNums);
