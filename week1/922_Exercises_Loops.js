




// function ascendingEven (number) {
//     for (let i = 0; i <= number; i+=2){
//         console.log(i)
//  }
// }
// ascendingEven(99)

// function ascendingOdd (number) {
//     for (let i = 1; i <= number; i+=2){
//     console.log(i)
//     }
//     }
//     ascendingOdd(99)



// // function multiple (num) {
// //     for(let i = 1; i <= num; i++ ){
// //         console.log(9 * i)                      //*** Use console.log to continue with the loop if you use Return it will give you only one value 
// // }
// // }
// // multiple(5)

// function assignGrade(score) {
//     if (score > 90) {
//         return 'A'
//     } else if (score > 80) {
//         return 'B'
//     } else if (score > 70) {
//         return 'C'
//     } else if (score > 65) {
//         return 'D'
//     } else {
//         return 'F'
//     }
// }

// function LetterNumberGrade (score) {
//     for(let i = 60; i <= 100; i++) {
//         console.log(i + '-' + assignGrade(i)) 
//     }
// }
// LetterNumberGrade()

// Write a function fizzOrBuz that uses log all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

// function fizzOrBuzz (num){
//     for(let i = 1; i <= 100; i++){
//         if (i % 3 === 0){
//             console.log("Fizz")
//         }else if(i % 5 === 0){
//             console.log('Buzz')
//         }else{
//             console.log(i)
//         }
//     }
// }
// fizzOrBuzz()




// function BottlesOfBeer (num){
//     for(let i = 99; i >= 1; i--){
//         if (i === 1){
//             console.log('1 bottle of beer on the wall, 1 bottle of beer. \n Take one down, pass it around, No more bottle of beer on the wall.')
//         }else{
//             console.log(i + " Bottles of beer on the wall " 
//             + i + " bottles of beer." + '\n Take one down, pass it around,' + (i - 1) + " bottles of beer on the wall")
//         }
//     }
// }
// BottlesOfBeer()


// //Free code academy 
// var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// //Ex from exercises loops
// function assignGrade(score) {
//     if (score > 90) {
//         return 'A'
//     } else if (score > 80) {
//         return 'B'
//     } else if (score > 70) {
//         return 'C'
//     } else if (score > 65) {
//         return 'D'
//     } else {
//         return 'F'
//     }
// }
//  function grades(num1 , num2) {
//  for (i = 0 ; i <= num2 - num1 ; i ++){
//     console.log( num1 + i + ' - ' + assignGrade (num1 + i))
//  }
// }
// grades (60 , 100)


// function OneToOnehundred (counter){
//     for (var counter = 1; counter <= 100; counter++){
//     console.log(counter)
// }
// }
// OneToOnehundred()

function makeBoard(num) {
    var board = '';
    for (var row = 0; row < num; row++) {
        for (var column = 0; column < num; column++) {
            if ((column + row) % 2 === 0) {
                board += '#';
            } else {
                board += ' ';
            }
        }
        board += '\n';
    }
    return board;
}

console.log(makeBoard(7));