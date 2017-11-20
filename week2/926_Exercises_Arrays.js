//Question 1: Write a function named `arrLength` that takes in an array as an argument. The function should return the length of that array.
// var arr = ([1, 2, 3, 3, 2, 1]); 
// function arrLength(arr){
//     return arr.length;
// }
// console.log(arrLength(arr))

/*Question 2: Write a function named `longestArr` that takes in two arrays as arguments. 
The function should compare the length of the two arrays and return whichever array is longer 
(aka whichever array has more values in it). If the lengths of the two arrays are equal, then return null  */

// function longestArr (arr1, arr2){
//     if (arr1.length > arr2.length){
//         return arr1;
//     }else if (arr2.length > arr1.length){
//         return arr2;
//     }else{
//         return null;
//     }
// }
// console.log(longestArr([1, 2, 3] , [1, 2, 3, 4, 5,]));

/*Question 3: Write a function `middleElement` that takes an array as an argument and returns the middle element of that array.
 If the array has an even number of elements, the function should return "Oops, there's no middle..." */

//  function middleElement (arr){
//      if (arr.length % 2 === 0){
//          return "Oops, there's no middle..."
//      }else {
//          return (Math.floor(arr.length / 2));
//      }
//  }
//  console.log(middleElement([1, 2, 3, 4, 5, 6, 7]))

 /*Question 4: Write a function `sumArray` that takes as argument an array of numbers and returns the sum of all these numbers.*/

//  function sumArray(arr){
//      var sum = 0
//      for(var i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//         return sum;
//  }
//  console.log(sumArray([1, 2, 3]))

/*Question 5: Write a function range that takes two numbers as arguments: min and max. 
The function will return and array with all the numbers, inclusive, between min and max. */

// function range (min, max){
//     var allNumbers = []
//     for(var i = min; i <= max; i++){
//         allNumbers.push(i)
//     }
//     return allNumbers;
// }
// console.log(range(2,6))

/*Question 6: Write a function rangeWithStep that takes three numbers as arguments: min, max and step. 
The function will return an array with all the numbers, inclusive, between min and max, going up in increments equal to step. 
If no step value is provided, the increment will be 1.  */

// function rangeWithStep (min, max, step){
//     var allNumbers = []
//     if (step === undefined){                       //if no step value is provided 
//         step = 1                                   //this will increment by 1
//     }
//         for(var i = min; i <= max; i += step){  //you want the function to increment by step
//             allNumbers.push(i)
//         }
//         return allNumbers;

// }
// console.log(rangeWithStep(2,6))

/*Question 7: Write a function named `doubleTrouble` that takes in an array of numbers as an argument. 
The function should return a new array that doubles every number from the original array. */

// function doubleTrouble(arr){
//     var newarr = []
//     for(var i = 0 ; i < arr.length ; i++){
//     newarr.push(arr[i] * 2)
//     }
//     return newarr
//     }
//     console.log(doubleTrouble([6, 2, 3, 4, 5]))

////////////Gabe's Example of how functions and callbacks work/////////////////////////
// function print(value) {
//   console.log(value)
// }

// function mapAll(array, callback){
//     for(var i = 0; i < array.length. i++){
//         var currentVal = array[i]
//         callback(currentVal)
//         //print("a") 1st loop
//     }
// }


// var test = ["a","b","c"]

// mapAll(test, print)//
///////////////////////////////////////////////////
////////Gabe's Example about how For and While loops work////////////////////////
// for(var i = 0; i < num; i++){

// }

// var i = 0                       //initializing goes here outside of the while loop so that it doesnt go on infitiny
// while(i < num){                     //conditional goes here for while loop 
    


//     i++             //iterator at the end of the while loop as the last thing
// }
//////////////////////////////////////////////////////

//Arrays II Exercises
/*Question 1: Write a function named `addTwoElements` that takes in three arguments: an array, and two values to add to that array.
The function should add those two values to the end of the array.

// var arr = [1, 2, 3] */

// function addTwoElements (arr, val1, val2){
//     arr.push(val1, val2)
//     return arr      //The return should be the last thing in the function  
// }
// console.log(addTwoElements([1, 2, 3], 'cat', 'dog'))

/*Question 2: Write a function `withoutLastTwo` that takes an array as an argument and returns a copy of the array without the last two elements. If the original array is two elements or less, the function should return an empty array.

removeLastTwo(['dog', 'cat', 'bat', 'octopus']); 
returns ['dog', 'cat']    */

// function withoutLastTwo (arr){
    
//     var arrCopy = arr.slice(0, -2)

//     return arrCopy 
// }
// console.log(withoutLastTwo(['baby', 'jam', 'kitty', 'jelly', 'time']))

/*Question 3: Write a function `everyThird` that takes an array as an argument and returns a new array that contains every third element of the original array.


everyThird(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']); 
// returns ['c','f','i']

everyThird([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) 
// returns [ 3, 6, 9, 12 ]  */

// function everyThird (arr){



// }

// function withoutLastTwo (arr){
//     var arrCopy = [];
//     for (var i = 2; i < arr.length; i += 3) {

//         arrCopy.push(arr[i]);
//     }
    
//     return arrCopy
// }
// console.log(withoutLastTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))




/* Question 4: Write a function that takes an array as an argument, and returns a copy of the array with the last element at the front. 


var arr = [1, 2, 3, 4]
lastToFront(arr); 
// returns [4, 1, 2, 3]   */


function lastElement (arr){
    var newArr = [];
    var last = arr.slice(-1);
    for(var i = 0; i < arr.length; i++){

        newArr = last + ', ' + arr;
    }
    return newArr;
}
console.log(lastElement([1, 2, 3, 4, 5]))