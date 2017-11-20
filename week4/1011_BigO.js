//Github: https://github.com/C4Q/AC_4.1/blob/master/units/dsa/big_o/big_o.md
//Print out who selected which character.  Two players can select the same character.
// function quadraticTime(characterNames) {
//     for (var i = 0; i < characterNames.length; i++) {
//         for (var j = 0; j < characterNames.length; j++ ) {
//                 console.log("Player One: " + characterNames[i] + " Player Two: " + characterNames[j])
//         }
//     }
// }
// quadraticTime(["Agnes", "Agnes", "Bart", "Carl", "Beth"]);
///How many things are printed in relation to how many things are in the array? - It prints by squaring it'self for how many elements you have in the array 
//if it is 5 elements it will print 25 times 
//if it is 4 elements it will print 16 times
//if it's three elements it will print Player1 and Player2 9 times
//if it is two elements it will print Player1 and Player2 4 times
//if it is 1 element it will print one time. 

////////////Lev Edited the above code shown below///////////////
//Print out who selected which character.  Two players can select the same character.
// function quadraticTime(characterNames) {
//     var arr = []
//     for (var i = 0; i < characterNames.length; i++) {
//         for (var j = 0; j < characterNames.length; j++ ) {

//             console.log("i: " + i +" ; j: " + j)
//             // arr.push(("Player One: " + characterNames[i] + "; Player Two: " + characterNames[j]))
//         }
//     }
//     return arr
// }


// var arr = quadraticTime(["Agnes", "Bart"])
// console.log(arr.length)

/* => returns
i: 0 ; j: 0
i: 0 ; j: 1
i: 1 ; j: 0
*/

/////////////////Another Example////////////
var arr = [["x", "o", "o"],
            ["x", "o", "o"],
            ["o", "x", "x"]]
function logBoard(arr) {
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++)
        console.log (arr[i][j]);
    }

}

console.log(logBoard(arr))

/////////////DERIVING RUNTIME/////////////////////////
function exampleOne(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target){
            return true
        }
    }
    return false
}
//in the best case when would we return? If what we are looking for is at index 0. Worst case is we have to go through each one, when we are talking about the worst case we are talking about the complexity meaning O(n) - depending on length of array 

func exampleTwo(arr) {
    for (var i = 0; i < 1000000; i++) {
        console.log("Many printings!");
    }
}
//Why is it O(1), it will take the same amount of time to run for each time running it. The amount of elements in the array doesn't matter 

function exampleThree(arr) {
    var counter = 0
    arr.forEach(function(num) {
        if (arr.indexOf(elem) !== -1) {
            counter += 1
        }
    })
    return counter
 }
//indexOf looks for something in the array if it doesn't find it it will return 0 if it finds it it will return 1 
//worst case: O(n^2) it goes through each element in the array and goes through the condition to see if an element is equal to 1 

function bestAverageAndWorstFunc(arr: [Int]) {
    if (arr.length < 3 || arr[0] == 8675309) {  //Best case is we have O(1) because we only have to...
        return undefined;
    } else if (arr[0] + arr[1] === 24601) { //This is the worst case because if index 0 and index 1 is that number and if it is it will go through each element twice, for each until it finds the right one. O(n^3)
        arr.forEach(elem) {
            arr.forEach(elem) {
                console.log("Gotcha!")
            }
        }
    } else {    //This is the average case because this else is most likely to happen, we don't really look at average because you can't always tell 
        arr.forEach(elem) {
            console.log(elem)
        }
    }
}

//Link to help explain Example 4 at the bottom of the page
//https://docs.microsoft.com/en-us/scripting/javascript/reference/conditional-ternary-operator-decrement-javascript

//Why is this O(n)
function secondSmallest(myArr) {
    var min = myArr[0];
    var minIndex = 0;
    myArr.forEach(function(num, index) {
        if (num < min) {
            min = num;
            minIndex = index;
        }
    })

    var secondMin = min === myArr[0] ? myArr[1] : myArr[0]  //can be written as an if else statement 
//Link to help explain Example 4 at the bottom of the page
//https://docs.microsoft.com/en-us/scripting/javascript/reference/conditional-ternary-operator-decrement-javascript
//Written in an if statement
    // if(min === myArr[0]) {
    //     secondMin = myArr[1]
    // } else {
    //     secondMin = myArr[0]
    // }

    myArr.forEach(function(num, index) {                //Going through the array twice separately that's why it's O(n) + O(n) 
        if (num < secondMin && index !== minIndex) {
            secondMin = num;
        }
    })

    return secondMin
}
//What does this code do? - 

//Question 1 from bottom of page

var arr = [2, 4, 5, 10, 22, 120, 2480]

for (var i = 0; i <= arr[-1]; i++){
    if (i === )
}