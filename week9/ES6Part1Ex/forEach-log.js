// Q1. forEach-log

// Write a function that uses the forEach array method to log every member of an array to the console. The function should only take one argument, the array. The function should NOT use a for loop.

let logElem = (arr) => {
    arr.forEach(elem => {
        console.log(elem)
    })
}

logElem([1, 2, 3, 4, 5, 6, 7])