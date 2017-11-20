//Ex1 Write a program that checks and logs whether two numbers are equal or not.
var num1 = 3
var num2 = 2

if(num1 === num2) {
console.log('The numbers are equal')
} else {
console.log('The numbers are not equal') 
}


//Ex2 Write a program that logs which of two number variables is larger.
// Your output should look like this (in this example for the numbers 5 and 10): 'The greater number of 5 and 10 is 10'
// If the two numbers are equal, log: 'The numbers are equal.'
var num1 = 0
var num2 = 10
if (num1 > num2){
    console.log('The greater number of ' + num1 + ' and ' + num2 + ' is ' + num1);
}else if (num2 > num1){
    console.log('The greater number of ' + num1 + ' and ' + num2 + ' is ' + num2);
}else{
    console.log('The numbers are equal')
}

//Ex3 Create a string variable with a language code (e.g. "es", "de", "en"). 
//Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. 
//It should default to logging English.
var lang = 'jp'

if ( lang === 'es' ) {
console.log('Hola Mundo')
} else if ( lang === 'jp' ) {
console.log('こんにちは世界')
} else if ( lang === 'de' ) {
console.log('Hallo Welt')
} else {
console.log('Hello, World')
}


//Ex4 Create a variable numGrade that will contain a numeric grade (out of 100). 
// Use a if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
var numGrade = 99;
console.assert(typeof(numGrade) === 'number', 'Grade has to be a number');

if  (numGrade >= 90){
    console.log("A")
}else if (numGrade >= 80){
    console.log("B")
}else if (numGrade >= 70){
    console.log("C")
}else if (numGrade >= 60){
    console.log("D")
}else{
    console.log("F")
} 

//Ex5 Create two variables: one to hold an animal name ('cat', 'dog', etc.) , and one to hold a number.
//Use a if - else statement to log:
// 1. the number
// 2. either a single or plural form, like "5 cats" or "1 dog".
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
var number = 4
var animal = 'cat'

if (number === 1 || animal === 'sheep') {
console.log(number + ' ' + animal)
} else if (animal === 'goose') {
console.log(number + ' geese')
} else {
console.log(number + ' ' + animal + 's')
}


//Ex6 Write a program that checks and logs whether a given number is even or odd.
var num = 13

if(num % 2 == 0) {
    console.log('The number is even')
}else {
    console.log('The number is odd')   
}

//Ex7 Write a program that checks and logs whether a given number is positive, negative, or equal to 0.
var num = -12

if (num === 0) {
console.log('The number is equal to 0')
} else if (num < 0) {
console.log('The number is negative')
} else {
console.log('The number is positive')
}