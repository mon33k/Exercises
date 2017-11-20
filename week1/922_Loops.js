//Github -> Fundamentals -> Loops
//https://github.com/C4Q/AC_4.1/blob/master/units/fundamentals/lessons/loops/loops.md

//Ex The While Loop 
var num = 1
while (num <= 10) {
  console.log('the number is: ' + num)
  num += 2                                  //This will show numbers 1 - 10 but only the odd numbers because it is being incremented by 2
}

//Ex of For loop, more suited for a sequence 
for (var num = 1; num <= 10; num += 1) {
        console.log('the number is: ' + num)        
  }
  console.log(num)                  

//Ex We can also use a loop to calculate the sum of all the number between 1 and 10:
var sum = 0
for (var i = 1; i <= 10; i += 1){         //+= 1 increments value by 1 each time 
  sum += i                              //and sum += i adds the current value into sum 
}

//Ex this example prints out ten numbers in a sequence 1, 4, 10, 25 
var sum = 0
for (var i = 1; i <= 10; i += 1){          
  sum += i + (i - 1)          //i * 2 - 1
  console.log(sum)                             
}

//Ex Decending numbers from 10 to 1
for (var i = 10; i > 0; i -= 1){
    console.log(i)
  }
console.log('BLAST OFF')

// //EXAMPLES AT BOTTOM OF PAGE
// Loop exercises:
// Write a function that takes a number as an argument and logs all the numbers, descending, between the number and 1.
// Write a a function that takes a number num as an argument, and iterates over all numbers from 0 to num. For each iteration, 
// it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
// Write a function that takes a number num as an argument and iterates over all numbers from 0 to num. For each iteration of the loop, 
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18")
// USe the assignGrade function from unit 4 (fuctions). Create a loop that will iterate over the numbers from 60 to 100. For each number, 
// it will call assignGrade with that number as an argument.

// Bonus:
// Write a function that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, 
// log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
// When you have that working, modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 
// (and still log "Fizz" or "Buzz" for numbers divisible by only one of those).


