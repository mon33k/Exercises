//Exercises -> Functions & Slope
//https://canvas.instructure.com/courses/1213426/quizzes/2375007

//Ex1 Write a function that returns the largest of two numbers. If they are equal, return the second one.
function largerNum(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

//Ex2 Write a function named getDogAge that takes one argument: a dog's age. The function returns the dog's age in dog years. 
//The conversion rate is 1 human year to 7 dog years. Call the function and log the result.
function getDogAge(num) {
    return num * 7
 }
 
 var dogAge = getDogAge(7)
 console.log('Your dog is ' + dogAge + ' in dog years!')


//Ex3 Create two functions that calculate properties of a circle, using the definitions here (Links to an external site.)Links to an external site..

// Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
// Create a function called calcArea that takes the radius as an argument and returns the area.
// Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. 
//The output should look like this:
// "The circumference is ___".
//  "The area is ___".

function calcCircumference(radius) {
    return Math.PI * 2 * radius
  }
  
  function calcArea(radius) {
    return Math.PI * radius * radius
  }
  
  function circleProps(r){
    var circumference = calcCircumference(r)
    console.log("The circumference is " + circumference);
    var area = calcArea(r);
    console.log("The area is " + area);
  }

// Classmate Carolina variation of Ex3
function calcCircumference(radius) {
    return 2*Math.PI*radius
}
// console.log(calcCircumference(2))

function calcArea(radius) {
    return Math.PI*Math.pow(radius,2)           //She used Math.PI and Math.pow to find the square root of the radius 
} 
// console.log(calcArea(3))

function circleProps(radius) {
    console.log("The circumference is " + calcCircumference(radius) +
    ".")
    console.log("The area is " + calcArea(radius) + ".")
}
(circleProps(1))            //Because there was already a line inside the last function she just has to call that last function to print out that line, 
//vise versa if you wanted to output a line but dont have it in the function you can use console.log(circleProps(1))

//Ex4 Make a temperature converter. Use google to find the conversion formulas.
//  Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
//  Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
//  Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', 
// use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', 
// use celciusToFahrenheit to convert the temperature to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9
  }
  
  function convertTemperature(temp, convertTo) {
    if (convertTo === 'C') {
      return fahrenheitToCelsius(temp)
    } else if (convertTo === 'F') {
      return celsiusToFahrenheit(temp)
    }
  }

//Classmate Greg Variation of Ex4
  var celciusToFahrenheit = function(num) {
    return (num * 1.8) + 32;
}
var fahrenheitToCelcius = function(num) {
    return (num - 32) * .5556;
}
var convertTemperature = function(temp, string) {
    if (string.toUpperCase() == "C") {            //using the method string.toUpperCase changes the call back even if it is lowercase to uppercase
        return fahrenheitToCelcius(temp);

    } else if (string.toUpperCase() == "F") {
        return celciusToFahrenheit(temp);
    }
}
console.log(convertTemperature(86, "c"))


// //Ex5 The Calculator:
// Write a function square that returns the square of a number.
// Write a function half that returns half the value of a number.
// Write a function percentOf that takes two numbers. Calculate what percent the first number is of the second number, 
//and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.
// Write a function called areaOfCircle that takes one argument (the radius), and return the area of a circle with that radius.
// Bonus: Round the result so there are only two digits after the decimal.
// Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
// Calculates and saves the square of the number.
// Calculates and saves half the value of the result of #1.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate and returns the percentage the squared result (#1) is of the area (#3)

function square(num) {
    return num * num;
   }
   
   function half(num) {
    return num / 2
   }
   
   function percentOf(num1, num2) {
    return (num1 / num2) * 100
   }
   
   function areaOfCircle(radius) {
    return Math.PI * square(radius)
   }
   
   function doStuff(num) {
    var halved = half(num)
    var squared = square(halved)
    var area = areaOfCircle(squared)
    return percentOf(squared, area)
   }

//Ex5 classmate Newton's variation 
function square(num) {
    return Math.pow(num, 2)
}
function half(num2) {
return num2 / 2
}
function percentOf(num3, num4) {
    return (num3 / num4) * 100
}
function areaofCircle(r) {
    return (Math.PI * Math.pow(r,2)).toFixed(2)                 //In his he used .toFixed to change the decimal point by two places
}
function doStuff(n) {
    return percentOf(square(n),areaofCircle(half(square(n)))).toFixed(2)
}

//Ex5 classmate Carolina variation 
function square(num) {
    return num * num
}

function half(num) {
    return 0.5 * num
}

function percentOf(num1, num2) {
    return ((num1 / num2) * 100).toPrecision(4) + "%"               //Here she uses .toPrecision result rounded to precision significant digits 
}

var Pi = 3.14
function areaOfCircle(radius){
    return Pi * (radius * radius)
}

function doStuff(num) {
    var square = square(num)                //Here she is redefining the variables in this function 
    var half = half(square)
    var areaOfCircle = areaOfCircle(half)
    return percentOf (square, areaOfCircle)          //This is an expression itself, don't need to use an assignment operator (=) just need to call back the function
}

console.log(doStuff(4))