/*Question 3: Write a function that takes a decimal number as argument and returns a string with the binary representation of the number. 

decimalToBinary(5) // => "101"
decimalToBinary(8) // => "1000" */

////////////Peter helped me solve this///////////
// function decimalToBinary (num){
//     var placeValue = 1
//     var binary = ''
//     for (var i = 0; placeValue <= num; i++){
//         var digit = Math.floor(num % (2 * placeValue) / placeValue)
//         binary = digit + binary
//         placeValue = placeValue * 2

//     }
//     return binary 
// }
// console.log(decimalToBinary(24))  

/////////////Greg in class came up with a way shorter one////////////
// decToBi = (num) => {
//     return (String((num.toString(2))))
    
//     }
//     console.log(decToBi(8))

////////////Another way to do it//////////////////
// function numToBin(num){
//     var number = num 
//     var result = []
//     while (number >= 1){
//         result.unshift(number % 2) 
//         number = Math.floor(number / 2)
//     }
//     return result.join('')
// }
// console.log(numToBin(13))
    
//Question 5: Write a function that takes as argument a string with the binary representation of a number, 
//and returns the decimal representation of the number (as a number).

// binaryToDecimal("101") // => 5
// binaryToDecimal("1000") // => 8

function binaryToDecimal(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "1") {
            sum += Math.pow(2, str.length - 1 - i)
        }
    }
    return sum;
}
console.log(binaryToDecimal('0101'))











/////////////Example of how to solve for finding the hexidecimal of a number if you give a number and a base////////////////////////////
// var hexDigits = '0123456789ABCDEFGHIJKL'
// function numToBase (num, base){
//     if (num === 0) {
//         return '0';
//     }
//     var number = num 
//     var result = []
//     while (number >= 1){
//         result.unshift(hexDigits[number % base])
//         number = Math.floor(number / base)
//     }
//     return result.join('')
// }
// console.log(numToBase(64, 8))
