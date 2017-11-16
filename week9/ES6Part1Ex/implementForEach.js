// Q5. implement-forEach

// Write a function called forEach that takes in two arguments: an array and a function. forEach should apply the passed in function to every member of the array. It should not return anything.

// Example:

// forEach(arr, log); // logs 1, 2, 3, 4, 5

// var arr = [1,2,3,4,5];

// function log(val) {
//   console.log(val);
// }

const forEach = (arr, callback) => {
    arr.forEach(elem => {
        callback(elem);
    })
}   

const double = (num) => {
    console.log(num + num);
}

const log = val => {
    console.log(val)
}
forEach([1, 2, 3], double)
forEach(['Hello ', 'world ', 'Im ', 'Bob'], log)