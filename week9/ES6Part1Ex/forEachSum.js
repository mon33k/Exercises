// Q4. forEach-sum

// Write a function called forEachSum that takes in an array of numbers as an argument and returns the sum of the array. The function should use the forEach array method and should NOT use a for loop or while loop.

const forEachSum = (arr) => {
    let sum = 0
    arr.forEach(elem => {

        sum += elem;
    
    })
    return sum;
}

console.log(forEachSum([10, 9, 30, 29, 2, 4, 3]))