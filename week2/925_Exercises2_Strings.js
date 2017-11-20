/*Question 1: Write a function `XO` to check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any character.    
XO("ooxx")    // returns true
XO("xooxx")   // returns false
XO("ooxXm")   // returns true
XO("zpzpzpp") // returns true because zero 'x's and 'o's are present
XO("zzoo")    // returns false     */

/*
var runningCountO = 0
var runningCountX = 0

function XO (str){
    for (var i = 0; i < str.length; i++){
        if (str[i] === 'x'){
            runningCountX += 1
        } else if (str[i] === 'o'){
            runningCountO += 1
        }
    }
       if (runningCountO === runningCountX){
           return true;
       }else{
           return false;
       }
}
console.log(XO('xxyrjymytjoo'))

*/


/*Question 2: Write a function `countVowels` that receives a string and returns the number of vowels found in the string. 
countVowels("hello") // returns 2 
countVowels("dog says woof") // returns 4
countVowels("cat says meow") // returns 4    */

// var runningCountA = 0
// var runningCountE = 0
// var runningCountI = 0
// var runningCountO = 0
// var runningCountU = 0 

// function countVowels (str){
//     for(var i = 0; i < str.length; i++){
//         if(str[i] === 'a'){
//             runningCountA += 1
//         }else if(str[i] === 'e'){
//             runningCountE += 1
//         }else if(str[i] === 'i'){
//             runningCountI += 1
//         }else if(str[i] === 'o'){
//             runningCountO += 1
//         }else if(str[i] === 'u'){
//             runningCountU += 1
//         }
//      }
//      var sum = runningCountA + runningCountE + runningCountI + runningCountO + runningCountU 
//      return sum    
// }
// console.log(countVowels('kelvin of eiou'))


/*Question 3: Write a function `isPalindrome` that receives a string and returns true if the string is a palindrome 
and false if it is not a palindrome. 
isPalindrome("racecar") // returns true 
isPalindrome("tattarrattat") // returns true 
isPalindrome("dog") // returns false  */

// function isPalindrome (str){
//     for(var i = 0; i < str.length; i++){      //Starting at index 0 represented by i, i is less than the length of the string, and is incremented once each time
//         forward = (str[i])                   //For loop checks to see if this pattern is happening for each character in the string 
//     }
//     for (var i = str.length -1; i >= 0; i -= 1){         //i >= 0 because it won't print out the M that is at 0 index // i is initialized to str.length - 1 which is the total length of the index minus 1 so if 'Monique' 
//         backwards = (str[i])              //This calls from the index the name characters instead of numbers
//     }
//     if (forward === backwards){        //Starting from the end i < str.length && str.length -1 >= 0 
//         console.log('true')
//     }else{
//         console.log('false')
//     }

// }
// console.log(isPalindrome('racecar'))

// //Another way to do it 
// function isPalindrome(word) {
//     for (var i = 0; i < (word.length - 1) / 2; i++) {
//         if (word[i] !== word[word.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.assert(!isPalindrome("ABCA"), "ABCA is NOT a palindrome");
// console.assert(isPalindrome("ABBA"), "ABBA is a palindrome");
// console.assert(isPalindrome("racecar"), "racecar is a palindrome");
// console.assert(isPalindrome("tattarrattat"), "tattarrattat is a palindrome");


/****Question 4: Write your own mySubString function that takes three arguments, a string and two numbers: a start index and an end index. 
The substring should include all characters from the start index and up to (but no including) the end index. 
If either argument is greater than the string's length, treat it as if it were equal to the string's length. 
if the end index is omitted, also treat it as if it were equal to the string's length.
mySubString("giraffe", 1, 2) // returns "i"
mySubString("giraffe", 2, 8) // returns "raffe"
mySubString("giraffe", 0, 2) // returns "gi"  */

//Where is the start of the index is it at 0 or 1 in this function?

// function mySubString (str,start,end){
//     return str.slice(start, end)            //if you use .slice without and end value it will give you where you wanted to start and the rest of the word
// }

// console.log(mySubString("word", 1))



/*Question 5: Write a function `myIncludes` that receives a string and a letter and returns true if the letter is found in the string and false otherwise. 
myIncludes("hello", "e") // returns true  
myIncludes("buddy", "z") // returns false     */

// function myIncludes (str, letter){
//     for(var i = 0  ; i < str.length; i++){
//         var ch = str.charAt(i);
//         if(ch === letter){                  //if else is inside the loop because it will repeat the task until the condition breaks 
//             return true; 
//         }          
//     }
//     return false;      //this condition is outside of the loop because if it were inside of the loop it would break the condition and always return false
// }
// console.log(myIncludes('hello', 'l'));

/*Question 6: Write a function that takes a number num as an argument and logs a triangle - 
using hashtags, with height and base equal to the value of num. 
For example, if the value of num is 5, the triangle will look like this:

#
##
###
####
#####

*/

// function triangle (num){
//     for (var i = 0; i > )
// }

/*Question 7: Write a function that creates a string that represents a board. 
The function will take a number length as an argument. It will alternate between spaces  - ' ', and  '#' characters 
to represent each position in the board. It will use the newline character - '\n' to separate the lines. For example, 
if the value of length is 8, the string should look like this:

# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
Hint: The modulus operator is your friend. The board consists of two kinds of lines, one that starts with a  '#' character, 
and one that starts with a space character.

Hint 2: One solution to to this question requires two separate loops. The first loop is used to create the two kinds of lines. 
The second is used to create the board.   */

function board (num){
    var str = '';
    for(var i = 0; i < num; i ++){
        if(i % 2 == 0){
            str += '#';
        }else{
            str += ' ';
        }
    }
    return str;
}
function board2 (num, callback){
    var str1 = '';
    var str2 = '';
    for(var i = 0; i < num; i ++){
        if(i % 2 == 0){
            str += str1;
        }else{
            str += str2;
        }
    }
    return str;    
}
console.log(board(100, board));

// function capEveryOther (str){
//     var newStr = '';
//     for(var i = 0; i < str.length; i++){
//         if (i % 2 === 0){        //str[i] checks the value of the element in the index of the string or array. i stands for the index which is a number
//             newStr += str[i];
//         }else {
//             newStr += str[i].toUpperCase();
            
//         }
//     }
//     return newStr;
// }
// console.log(capEveryOther('gabe'))