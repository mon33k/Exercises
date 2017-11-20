/*Question 1: Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', 
except it will add '(pinky)' at the end if the amount is 1 million. For example:

  function DrEvil (amount){
    if (amount >= 1000000){
          return (amount + ' dollars' + ' pinky');
    }else{
        return amount + " " + 'dollars';
  }
}

console.log(DrEvil(5000000))

*/

/*Question 2: Create a function called verbing. It should take a single argument, a string. 
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', 
in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. */

/*
var str= 'Swimming'
function verbing (word){
    
        if(word.length >= 3 && word.substring(word.length - 3) === 'ing') { //Takes the length of the string and looks for 'ing' in the string
            return (word + 'ly');
        }else if(word.length >= 3){
            return (word + 'ing');
        }else {
            return word;
        }
    }
console.log(verbing(str));

//Teacher Peter's answer to this question 3
function verbing(str) {
    var newStr = str
    if (newStr.length >= 3 && newStr.substring(newStr.length - 3) === 'ing') {
        newStr += "ly"
    } else if (newStr.length >= 3) {
        newStr += "ing"
    }
    return newStr
}
    
console.log(verbing('AM'))

//Another way to do it using .slice, .slice is more powerful than .substring
function verbing(word) {
    if (word.length < 3) {
      return word
    } else if (word.slice(-3) === 'ing') {
      return word + 'ly'
    } else {
      return word + 'ing'
    }
  }

  //Example of .indexOf
    
*/

//Question 3: Create a function getInitString that takes a string as input and return a copy of the string without the last letter.
// function getInitString(str){
//     return str.slice(0, str.length - 1)
//  }
// console.log(getInitString('blah')) 

//Question 4: Create a function getLast that takes a string as input, and returns the last letter of that string.
// function getLast (str) {
//     return str.slice(-1)
//     }
//     console.log(getLast("Jimmy"))
          

//Question 5: Create a function capitalLast that takes a string as input, and returns a copy 
//of the string with the last letter capitalized.
// function capitalLast(str){
//     return str.substring(0, str.length -1) + str.slice(-1).toUpperCase()
// }
// console.log(capitalLast('random'))

/*Question 6: Create a function called mixUp. It should take two strings as input, and return the concatenation of the two strings 
//(separated by a space), swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long */

// function mixUp(str1, str2){
//     return str1.slice(0, str1.length - 2) + str2.slice(str2.length -2)
//     + ' ' +
//     str2.slice(0, str2.length - 2) + str1.slice(str1.length -2)
//    }
// console.log(mixUp('dog', 'dinner'))
//^^ This function doesn't work all the time 

//Additional Exercise "Bullet Proof" Name Casing

// function nameCase(name) {
//     var theRest = name.toLowerCase().trim();
//     var space = theRest.indexOf(' ');
//     var result = '';
//     while (space !== -1) {
//         var part1 = theRest.slice(0, space + 1); // "Barack "
//         theRest = theRest.slice(space + 1);
//         result += part1[0].toUpperCase() + part1.slice(1);
//         space = theRest.indexOf(' ');
//     }
//     result += theRest[0].toUpperCase() + theRest.slice(1);
//     return result;
// }

// console.log(nameCase('bobby flay'))

// console.log(nameCase('dre'))

// console.log(nameCase('BARack hussein ObamA'))

//Better version of the "Bullet Proof" Casing
function nameCase(name) {
    var result = name[0].toUpperCase();
    for (var i = 1; i < name.length; i++) {
        if (name[i - 1] === " ") {
            result += name[i].toUpperCase();
        } else {
            result += name[i].toLowerCase();
        }
    }
    return result;
 }




var name = 'Monique'
console.log(name.slice(4, 7))