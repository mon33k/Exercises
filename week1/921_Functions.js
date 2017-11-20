// Github -> Fundamentals -> Functions
//https://github.com/C4Q/AC_4.1/blob/master/units/fundamentals/lessons/functions/functions.md


//Ex1 This example doubles the num by itself 
var double = function (num) {
    return num + num
}

console.log(double(2))

//Ex2 This example will show output as undefined because there is no return before num * 3
var func = function (num) {
    num * 3
}
console.log(func(10))

//Ex3
var myNumber
function times3 (num){
    myNumber = num * 3
    return 'hello'
}
console.log(times3(10))
console.log(myNumber)

//Ex4 Side effects 
var myNumber = 2
function incGlobalNum() {           //Take whatever incGlobalNum is and
    myNumber += 1                   //increase it by 1 after each line 32 - 35 (This is the Side effect)
}
incGlobalNum()
console.log(myNumber)           //increments it to 3
incGlobalNum()
console.log(myNumber)           //increments it to 4


//Ex5 Scope //variable defined inside the function local scope
function incLocalNum() {
    var localNum = 2
    localNum += 10
    console.log(localNum) 
}
incLocalNum()
incLocalNum()

//Ex5 Scope //variable defined outside of the fuction is global scope
var num = 2
function incNum() {
    num += 10
    return num
}
console.log(incNum()) //12
console.log(incNum()) //22
console.log(num) //22

//Ex6 
function add(num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){      //first side is false other side is true because false || true = false it is false
        console.log('numbers only please')
    }
    return num1 + num2
}

console.log(add(2, 'cat'))

//Ex7. Write a function that takes a number as argument and returns the number to the power of 3
function power (num){
    return Math.pow(num, 3)
}
console.log(num)

//Ex8 Returns the square of a number
function square(num){
    return num * num
  }
  
  // Returns the sum of the squares of two numbers
  function addSquares(num1, num2){
    return square(num1) + square(num2)
  }
  
  // Adding the squares of 2 and 3
  var sum = addSquares(2, 3)
  
  console.log(sum)      //calling the number as squares

//Ex 9 //Output is 6 
function add1 (num) {
    return num + 1
}
function add2 (num) {
    return add1 (num) + 1
}
function add3 (num) {
    return add2 (num) + 1
}
console.log(add3(3))


