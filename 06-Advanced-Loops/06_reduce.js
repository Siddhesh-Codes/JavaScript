const nums = [1,2,3,4,5];

const i = 0;
const myNums = nums.reduce((acc, currVal) => {
    // console.log("Acc Value: " + acc + " Current Value: "+currVal);
    
    return acc + currVal
}, i);
// console.log("Final Value: "+ myNums);


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 999
    },
    {
        itemName: "Java Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
];

// const arr = shoppingCart.map( (num) => num);
// console.log(arr[1]);


// to add the prices we have to use currVal.price 
const total = shoppingCart.reduce( (acc, currVal) => acc + currVal.price , 0);

console.log(total);
