//Github: https://github.com/C4Q/AC_4.1/blob/master/units/fundamentals/lessons/callbacks/callbacks.md

//Callback functions 
// var add = function(num1, num2){
//     return num1 + num2; 
// }

// var multiply = function(num1, num2){
//     return num1 + num2;
// }

// function callIt (arg1, arg2, callback){
//     return callback(arg1, arg2)
// }
// console.log(callIt(2, 4, add))
// console.log(add(2, 5))


//Another Example
// var forEachElement = function(arr, callback){       //function takes two arguments an array and a callback 
//     for(var i = 0; i <arr.length; i++){
//         callback(arr[i])                            //does a callback for each element
//     }
// }

// var logIt = function(v) {
//     console.log(v);
// }

// forEachElement([1, 'this', 'that'], console.log)      //all the built in functions are also functions, so you can use console.log as the callback argument

//Synchronous Programming Example
// var forEachElement = function(arr, initialValue, callback){  
//     var t = initialValue;                       // 0
//     for(var i = 0; i <arr.length; i++){
//         t = callback(arr[i], t);                   //calls t and goes back into t          
//     }
//     return t;
// }

// var add = function(a, b){             //clarifies the function by giving it a variable label assignment in a value, values are functions
//     return a + b;                     //adds everything together
// }

// var mul = function(a, b){
//     return a * b;                    
// }

// console.log(forEachElement ([5, 3, 5], 1, mul))


//Interval Example
// setInterval(function(){
//     console.log('hello#1')
// }, 1000)                            //by seconds

// setInterval(console.log, 500) //console.log logs a new line every 500 miliseconds

// // setInterval(function(){
// //     console.log('hello kitty')
// // }, 13)


//Example of spinner with intervals 
// var spinner = '/-\\|'
// var i = 0;

// setInterval(function(){
//     console.log('\033[H' + spinner[i])        //[H'] means hide from the user on the screen, \033 \0 octal number which is the 
//     //character code, 3 * 8 = 27 and causes the terminal to go to the home position 


//Another way to callback arrays 
/**
 * @function map
 * @param {Array[]} arr {an array}
 * @param {function} func
 * @return {Any[]} {a new array, made by taking every element of arr and passing it as an arguments to func}
 * 
 */

 function map(arr, func){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(func(arr[i]))
    }
    return newArr;
 }


 function add4(num){
     return num + 4;
 }

 console.log(map([1, 2, 3], add4))

////////The way Lev solved it////////
function map(arr, func) {
    var newArr = [];
    for()
    
}