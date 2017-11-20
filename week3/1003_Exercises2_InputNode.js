/*Question 1: Write a counter program that reads the user input one line at a time. The count would be initially zero. The app will start by displaying the count and prompting the user for input. valid input strings are: 'inc', 'dec', 'res'. The user input may be in uppercase, lowercase, or any combination of the two. On input of 'inc' and 'dec', the counter will be incremented / decremented by 1. On input of 'res'  the counter will be reset. Following each of these, the new count will be displayed, followed by a relevant message (e.g. 'the counter has been incremented') followed by a prompt to the user for more input. */

////////My Shitty code that doesn't run////////////
// var readline = require('readline');

// var options = {
//     increase: 'inc',
//     decrease: 'dec',
//     reset:  'res'
// };
// var count = 0;
// var str = '';


// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f')
// }

// var increase = function(str){
//     str.increase = 'The counter has been incremented to '+ count++ +' You may enter more input'
//     return str;
// } 
// var decrease = function(str){
//     str.decrease = 'The counter has been decremented to '+ count-- +' You may enter more input'
//     return str;
// }
// var reset = function(str){
//     str.reset = 'The counter has been reset to ' + count + 'You may enter more input'
//     return str;
// }

// rl.on('line', function (input){
// clear();
// str = input
//     console.log("To increment the counter by 1, choose: inc.\n\n" +
//         "To decrement the counter by 1, choose: dec.\n\n" +
//         "To reset the counter to 0, choose: rec\n\n")
//     if (input === 'inc'){
//         increase(input);
//     }else if (input === 'dec'){
//         decrease(input);
//     }else if (input === 'res'){
//         reset(input);
//     }
//     return input;
// });
// console.log("To increment the counter by 1, choose: inc.\n\n" +
// "To decrement the counter by 1, choose: dec.\n\n" +
// "To reset the counter to 0, choose: rec\n\n")


////////////////Greg's Answer//////////////////////////
// var readline = require('readline');

// var options = 'inc, dec, res';
// var count = 0;

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f')
// }

// function increment() {
//     console.log("The counter has been incremented to " + ++count + " Please enter a choice.");
// }

// function decrement() {
//     console.log("The counter has been decremented to " + --count + " Please enter a choice.");
// }

// function reset() {
//     count = 0;
//     console.log("counter has been reset to: " + count + " Please enter a choice.")
// }


// rl.on('line', function(input) {
//     clear();
//     console.log("To increment the counter by 1, choose: inc.\n\n" +
//         "To decrement the counter by 1, choose: dec.\n\n" +
//         "To reset the counter to 0, choose: rec\n\n")
//     if (input === 'dec') {
//         decrement();
//     } else if (input === 'inc') {
//         increment();
//     } else if (input === 'res') {
//         reset()
//     } else {
//         console.log('Unknown command, please enter: inc, dec, or res.')
//     }
// });
// console.log("To increment the counter by 1, choose: inc.\n\n" +
//     "To decrement the counter by 1, choose: dec.\n\n" +
//     "To reset the counter to 0, choose: res\n\n")


/*Question 2: Write a program that reads the user input one line at a time. It would expect the user input to start with one of four mathematical symbols: + - * / followed by two numbers, separated by spaces. For example: + 4 2 . The program will perform the desired mathematical operation (addition, subtraction, multiplication or division) and log the result. The program will display an explanatory message if:

1. the operation is invalid.

2. The operation is not followed by the expected two numbers (with spaces)

For example, if the user enters: * 2 3 the program will log 6. */

/////////////my shitty code///////////////
// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })


// rl.on('line', function(input) {
// var inputArr = input.split(' ')
// var result = '';
//     if(input[0] === '+'){
//         result = Number(inputArr[1] + Number(inputArr[2]))
//     }else if (input[0] === '-'){
//         result = Number(inputArr[1] - Number(input[2]))
//     }else if (input[0] === '*'){
//         result = Number(inputArr[1] * Number(input[2]))
//     }else if (input[0] === '/'){
//         result = Number(inputArr[1] / Number(input[2]))
//     }else{
//         console.log('your input is invalid')
//     }
//     return result;
    
// })
// console.log("please enter + - * / followed by two numbers separated by spaces")




///////////////////Kelvin's answer///////////////////////////////
// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// rl.on('line', function (input) {
// var inputArr = input.split(' ')
//     if (inputArr[0] === '+') {
//         var sum = Number(inputArr[1]) + Number(inputArr[2])
//         console.log(sum)
//     } else if (inputArr[0] === '-') {
//         var dif =  Number(inputArr[1]) - Number(inputArr[2])
//         console.log(dif)
//     } else if(inputArr[0] === '*') {
//        var mul =  Number(inputArr[1]) * Number(inputArr[2])
//        console.log(mul)
//     }else if(inputArr[0] === '/') {
//         var div =  Number(inputArr[1]) / Number(inputArr[2])
//         console.log(div)
//      }else{
//          console.log("The Operation is Invalid")
//      }
// })
// console.log("Add an Operation (+,-,*,/) and two numbers")



/*Question 3: Write a program that reads the user input one line at a time. It would expect the user input to start with one of four mathematical symbols: + - * / followed by numbers, separated by spaces. For example: + 2 4 2 . The program will perform the desired mathematical operation (addition, subtraction, multiplication or division) on all the numbers, from left to right, and log the result . The program will display an explanatory message if:

1. the operation is invalid.

2. The operation is not followed by at least two numbers (with spaces)

For example, if the user enters:- 6 5 1 2 the program will log -2 (= 6 - 5 - 1 - 2). */


// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.on('line', function(input){      //call method on of the readline that receives an event, readline is waiting for something to happen, the 'line' is pressing enter when you execute code 


















///////////////Peter's Answer//////////////////////
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function accum(numbers, callback) {
    var result = numbers[0]
    for (var i = 1; i < numbers.length; i++) {
        result = callback(result, numbers[i])
    }
    return result
}

var operations = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '/': function (a, b) { return a / b },
    '*': function (a, b) { return a * b },
    '**': function (a, b) { return Math.pow(a, b) },
}

rl.on('line', function (input) {
    var inputArr = input.split(' ')
    console.log('Input array is: ' + inputArr)
    var opr = inputArr[0]

    if (!operations[opr]) {
        console.log('Valid expression must be: "operator num1 num2 num3..."' +
            '\nValid operators are "+ - * /"');
    } else {
        for (var i = 1; i < inputArr.length; i++) {
            if (isNaN(inputArr[i])) {
                console.log('Valid expression must be: "operator num1 num2 num3..."' +
                    '\nValid operators are "+ - * /"');
                return;
            } else {
                inputArr[i] = Number(inputArr[i])
            }

        }

        var numbers = inputArr.slice(1)
        console.log(accum(numbers, operations[opr]))
    }
})


