// Q11. reduce-min

// Write a function called reduceMin that uses the reduce method to return the minimum number in an array of numbers. Do NOT use a loop.

// Examples:

// reduceMin([2, 3, 4, 5, 1]); //returns 1
// reduceMin([6, 7, 7, 4]); //returns 4
// reduceMin([10, 0, 100, 1, -100, 20, 33]); //returns -100



const reduceMin = (arr) => 
arr.reduce((min, num) => {
  if (num < min){
    return num;
  } else {
    return min;
  }
})

const reduceMin = (arr) => 
arr.reduce((min, num) => {
  console.log(`min: ${min}, num: ${num}`)
  return num < min ? num : min
})

console.log(reduceMin([2, 3, 4, 5, 1, 9]));


const max = (num1, num2) => {
if (num1 > num2){
  return num1
} else {
  return num2
}
}

//Another example
const max = (num1, num2) => {
    return num1 > num2 ? num1 : num2 //if num1 is larger then num2 return num1 otherwise return num2
}