// Q7. map-strings-to-nums

// Write a function called stringsToNums that takes an array of strings, converts them to numbers, and returns a new array containing those numbers. Use the map array method, do not use any loops.

// Examples:

// stringToNums(["4", "3", "9"]); //returns [4,3,9]
// stringToNums(["1", "22", "7"]); //returns [1,22,7]

const stringsToNums = (arr) => {
    return arr.map(elem => {
       return Number(elem);
    });
}

console.log(stringsToNums(["1", "2", "three", "four"]));
