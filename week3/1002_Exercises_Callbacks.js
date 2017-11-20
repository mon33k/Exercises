/*Question 1: 
Create a function logEachElem that takes an array as an argument, and uses the forEachElem method below to log each element of the array. 

function forEachElem(arr, callback){
    for (var i = 0; i < arr.length; i++){
        callback(arr[i])
    }
}
*/

function forEachElem(arr, callback){
    for (var i = 0; i < arr.length; i++){
        callback(arr[i])
    }
}

function logEachElem (arr){
    forEachElem (arr, logElement)         //forEachElem makes a loop over the array from each index then it calls the function logElement to print onto the screen, you can also use console.log by itself and it will do the same thing
}

function logElement (v){
    console.log(v); 
}

logEachElem([1, 3, 5, 6])

/*Question 2: 
Create a function logArrTypes that uses the forEachElem method to log each array element follwed by its type. For Ex: 

var mixedArr = [1, 'cat', true]
logArrTypes(mixedArr)


function forEachElem(arr, callback){
    for(var i = 0; i < arr.length; i++){
        callback(arr[i])
    }
}
*/

// function logArrTypes (mixedArr){
//     forEachElem (mixedArr, logElement)
// }

// function forEachElem(arr, callback){
//     for(var i = 0; i < arr.length; i++){
//         callback(arr[i])
//     }
// }

// function logElement (v){
//         console.log(v + ' is a ' + typeof v);   //typeof is an operator 
// }
// logArrTypes([2, 'word', 'wut', 5, {num: 1, num2: 3}])

/*Question 3: 
Use setInterval to display every second the number of seconds that have passed since the program was started. When executed with node, the output of the program should look like this: 
1
2
3
4
5
...

Where a new number appears every second. 
Hint: you may use a global variable to keep track of seconds passed. */

// var start = 0;

// setInterval(count, 1000);

   
// function count (){
//     console.log(start++);
// }

/*Question 4: 
You are given the following functions: 

function conservativeSpender(balance) {
    return balance > 100
}

function liberalSpender(balance) {
    return balance > 10 
}

function horribleSpender (balance) {
    return balance > 0
}

Write a function shouldBuyThis that takes as input a number balance and a callback (one of the above functions) and returns either "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

console.log(shouldBuyThis(20, horribleSaver))
//logs: "Sure! I've got the money!"   */

// function conservativeSpender(balance) {
//     return balance > 100
// }

// function liberalSpender(balance) {
//     return balance > 10 
// }

// function horribleSpender (balance) {
//     return balance > 0
// }

// function shouldBuyThis (balance, callback){
//     var result='';
//     if(callback(balance) === true){
//         result = "Sure! I've got the money!";
//     }else{
//         result = "Nope! Gotta keep my savings up!";
//     }
//     return result;
// }

// console.log(shouldBuyThis(2, liberalSpender))

/*Question Bonus: 
smarterShouldIBuyThis:(balance(number), price(number), callback). Returns either Sure I got the money or no based on the balance left after subtracting the cost from it */

function smarterShouldIBuyThis (balance, price, callback){
    return shouldBuyThis((balance-price), callback);
}
console.log(smarterShouldIBuyThis(20, 5, horribleSpender))

