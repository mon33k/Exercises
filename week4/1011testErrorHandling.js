// var students = [{ name: 'John' }, { name: 'Kelly'}]
// console.log(students[1].name)
// // => 'Kelly'
// console.log(students[4])
// // => undefined
// console.log(students[4].name)
// // TypeError: Cannot read property 'name' of undefiend


// //////Error message using use strict////////////////
// "use strict";         //Catches the error

// function greet(name) {
//   greeting = "Hello ";
//   // ReferenceError: greeting is not defined
//   console.log(string + name)
// }

// greet('Elon')

// //////Error message with constructor function//////
// function Person(name) {
//     this.name = name;
//      //this is not defined, but this is a global object in js that actually has a value      
// }
// var p = Person("Ferdinand")
// console.log(p)
// // => undefined because we didn't use new when assigning p 

// var Person = {
//     firstName: 'Ferdinand',
//     lastName: 'j',
//     getFullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(person.getFullName())
// //This above one works but the one before this one doesn't 

// ////////////Another example of use strict//////////////
// "use strict";
// function greet(name, name) {
//     console.log(name + name)
// }
// greet("Ferdinand")

// /////Error with vectors///////
// "use strict";
// var assert = require("assert");
// //var util = 

// function Vector (x, y) {
//     this.x = x;
//     this.y = y;
// }

// function test1() {
//     var p1 = new Vector(1, 2);
    
//     assert.strictEqual(p1.x, 1, "p1.x should be 1")
//     assert.strictEqual(p1.x, 2, "p1.x should be 2")
    
// }
// var p1 = new Vector(1, 2);
// console.log(p1)

// function test2() {
//     var p1 = new Vector (1, 2);
//     var p2 = new Vector (2, 4);
//     var p3 = p1.plus(p2);

//     //assert.strictEqual(actual, expected, message)
//     assert.strictEqual(p3, typeof "object", "p3 should be an object");
//     assert.strictEqual(p3.x, 3, "p3.x should be 3")
//     assert.strictEqual(p3.y, 6, "p3.y should be 6")
// }

// try {
//     test1();
// }catch (error) {
//     console.log(error.message)    
// }
///This code finds the error and catches it 

/////////Lev added things to the same one from above but copied again below////////
// "use strict";
// var assert = require("assert");
// var util = require("util");

// function Vector(x, y) {
//     this.x = x;
// }

  
// function test1(){
//     var p1 = new Vector(1, 2);

//     assert.strictEqual(p1.x, 1, "p1.x");
//     assert.strictEqual(p1.y, 2, "p1.y");
// }

// try {
//     test1();
// } catch (error){
//     console.log("--- Test Failed ---")
//     console.log(error.message + " should be " + error.expected + " but is " + error.actual );
//     console.log(error.stack.split("\n")[1]) //this will split the error message at index 1
// }
// /* => returns
//  --- Test Failed ---
// p1.y should be 2 but is undefined //This is coming from line 106
// at test1 (/Users/mmojica/Desktop/Javascript/lessons/testErrorHandling.js:99:12)
// */

// ///////////Automating Tests///////////////////
// function test1(){
//     var p1 = new Vector(1, 2);

//     assert.strictEqual(p1.x, 1, "p1.x");
//     assert.strictEqual(p1.y, 2, "p1.y");
// }

// function test2() {
//   var p1 = new Vector(1, 2);
//   var p2 = new Vector(2, 4);
//   var p3 = p1.plus(p2);

//   assert.strictEqual(p3.x, 3, 'p3.x');
//   assert.strictEqual(p3.y, 6, 'p3.y');
// }

// var tests = [test1, test2];

// tests.forEach(function(test){
//     try {
//         test();
//         passed += 1;
//     } catch (error) {
//         console.log("--- Test Failed ---")
//         console.log(error.message + " should be " + error.expected + " but is " + error.actual );
//     }
// })


////////////////Find the Error////////////////
"use strict";
var assert = require("assert");

function runTests(tests) {
    var passed = 0;
    var failed = 0;

    tests.forEach(function(test){
        try {
            console.log()
            console.log(test)
            test();

            passed += 1;        //if an error is thrown we will not get to any lines if the test results in any error, it won't go past line 157 where test(); is 
        } catch (error) {
  
            console.log("--- Test Failed ---")
            console.log(error.message + " should be " + error.expected + " but is " + error.actual );
            console.log(error.stack.split("\n")[1])

            failed += 1;
        }
    })

    console.log()
    console.log("---Total---")
    console.log(passed + " passed")
    console.log(failed + " failed")
}
//176 - 183
function Vector(x, y) {
    this.x = x;
    this.y = y;     //Added this so that it would pass, otherwise the return would be 2 failed and 0 passed 
}


Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
};

function test1(){
    var p1 = new Vector(1, 2);

    assert.strictEqual(p1.x, 1, "p1.x");
    assert.strictEqual(p1.y, 2, "p1.y");
}

function test2() {
  var p1 = new Vector(1, 2);
  var p2 = new Vector(2, 4);
  var p3 = p1.plus(p2);

  assert.strictEqual(p3.x, 3, 'p3.x');
  assert.strictEqual(p3.y, 6, 'p3.y');
}

var tests = [test1, test2];

runTests(tests)
