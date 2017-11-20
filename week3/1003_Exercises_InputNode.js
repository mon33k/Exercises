/*Question 1: Write a program that reads the user input one line at a time. Every time the user inputs a new line, the program will show all the lines that have been input before.
Hint: Use a variable to keep track of the input.   */

// var readline = require('readline')          //Accesses the readline js function

// var rl = readline.createInterface({         //don't change this 
//   input: process.stdin,
//   output: process.stdout
// })

// var trackString = function() {              //Function to keep track of the lines you make and won't delete them after you hit enter
        
// }

// rl.on('line', function(input){             //rl takes two arguments 'line' and function. function also takes an input. 
//   trackString()                             //trackString function is used here to hold the string each time 
//   var str = String(input)   //the variable str is assigned to String(input) that creates a String(Anything to be converted to a string)
// })

// console.log('insert a string: ')        //Console logs message for you to enter a string

/*Question 2: Write a program that reads the user input one line at a time. After each input the program will log the sum of all numbers that the user had input. If the input is not a number the program will ignore it.  */

var readline = require('readline')

var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

var trackString = function() {
    
}

var count = 0;
var sum = 0; 



function sumStringArr(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];          //adding up all elements of the array 
    }
    return sum;
}

rl.on('line', function(input){
    trackString()
    //var str = String(input)
    if(!isNan(input)){
        sum += Number(input)
    }
    console.log(sum)
    })
    
    console.log('insert a string: ')

rl.on('line', function(input){
    var inputArr = input.split(' ')
    var sum = sumStringArr(inputArr)
    console.log(sum)

})


/*Question 3: Write a program that the user input one line at a time. It would expect the user input to be a sequence of numbers and space. For example: "3 4 9".  The program will add all the numbers and log the result. The program will ignore any non-numerical input, but would still add up the rest.

For example, if the user enters: "3 a 4" the program should log `7`.    */

