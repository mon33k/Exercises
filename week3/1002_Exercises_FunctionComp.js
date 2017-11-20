/*Question 1: 
Create two functions: double and square. double should take a number and return the number times two. 
square should take a number and return the number squared. Create a third function doubleSquare that uses both of the functions 
to return a number that is first doubled and then squared.      */

// function double (num){
//     return num + num;
// }

// function square (num){
//     return num * num;
// }

// function doubleSquare (num){
//     return (square((double(num))))
// }

// console.log(doubleSquare(5))



/*Question 2: 
Create a function classyGreeting that takes as input the strings firstName  and lastName , and returns a 
string with a greeting using the two. Create a second function yell that takes as input a string and returns the string 
in all capitalized letters. Create a third function yellGreeting  that will take the firstName  and lastName  as inputs 
and yell a greeting using the two.      */

function classyGreeting (firstName, lastName){
    return "Hello how are you?" + firstName + lastName;
}

function yell (str){
    return str.toUpperCase();
}

function yellGreeting (firstName, lastName, callback){
    return yell ("how are you?! " + firstName + ' ' + lastName);
}
console.log(yellGreeting('Buzz','Lightyear'));


/*Question 3: 
The concat (Links to an external site.)Links to an external site. array method is used to merge two (or more) arrays. 
1. Write a removeDupes function that takes an array as an argument and returns a copy without any duplicate elements. 
2. Then, write a function concatAndRemoveDupes  that combines two arrays and removes any duplicates.

Hint: Use the array method includes (Links to an external site.)Links to an external site. to check if an element is in an array.

removeDupes([1,1,2,1,2,3,3]) // Should return [1,2,3]

var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];

removeDupes(arr1.concat(arr2))// Should return [1, 2, 3, 4]
concatAndRemoveDupes(arr1,arr2) // Should return [1, 2, 3, 4]        */

function removeDupes = (arr) {
    var arr = [];
    

}


/*Question 4: 
Given a list of grades, we can get the median grade by sorting the list and taking the middle element, 
or the average of the two middle elements. Create the functions sort and middleElement, 
and then use them to create the functions median.

var grades = [91, 85, 100, 92, 88]

console.log(median(grades)) // Should log 91       */