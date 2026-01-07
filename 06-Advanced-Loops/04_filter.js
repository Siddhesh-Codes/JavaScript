// const coding = ["HTML","JS","CSS","Java"];

// // we can store the for-each in the variable as well
// const variable = coding.forEach( (item) => {
//     // For each loop doesnt return any value
//     console.log(item);
//     return item;
// });

// console.log(variable);





// filter : to return the values we uses 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums = myNums.filter( (num) => num > 4); 
// [ 5, 6, 7, 8, 9, 10 ]

// console.log(nums);

// here if you open the scope body then you have to add return keyword and return the values.
// TC: O(n), SC: O(1)
const arr = myNums.filter( (num) => {
    return num > 4;
});

// console.log(arr);
// [ 5, 6, 7, 8, 9, 10 ]


// to iterate using for-each loop 
// not efficient because we're using new array to store the values in it 
// TC: O(n), SC:O(n)
const newArr = [];
myNums.forEach((num) => {
    if (num > 4) {
        newArr.push(num);
    }
});

// console.log(newArr);
// [ 5, 6, 7, 8, 9, 10 ]



const books = [
    { title: 'Book 1', genre: 'History', publish: 2000, edition: 2019},
    { title: 'Book 2', genre: 'Science', publish: 2002, edition: 2017},
    { title: 'Book 3', genre: 'Fiction', publish: 2004, edition: 2016},
    { title: 'Book 4', genre: 'Science', publish: 2003, edition: 2015},
    { title: 'Book 5', genre: 'History', publish: 2006, edition: 2010},
];

let myBooks = books.filter( (bk) => bk.genre === 'History');

// here we opend the block scope so we have to return the values
myBooks = books.filter( (bk) => {return bk.publish >= 2000});

myBooks = books.filter( (bk) => {
    if(bk.genre === "History" && bk.publish > 2000) {
        return myBooks;
    }
});

// console.log(myBooks);
// console.log(myBooks);
 