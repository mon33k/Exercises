var outputDiv;

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/'];
var operations = ['add', 'sub', 'mul', 'div']

/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp) {
  try {
    return eval(mathExp)
  } catch (e) {
    return NaN
  }
}

function getSymbol(operations, operators, elementId) {
  for (var i = 0; i < operations.length; i++) {
    if (operations[i] === elementId) {
      return operators[i]
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  outputDiv = document.getElementById('output');

  document.addEventListener('click', function (event) { //This selects anything you click on the screen
    var elementId = event.target.id;
    // logging the element id for debug purposes

    if (numbers.includes(elementId)) {
      // inputString += elementId  //adding the numbers into one string
      outputDiv.innerText += elementId;
    } else if (operations.includes(elementId)) {
      //Once the func getSymbol finds the symbol it adds it to the inputString
      var symbol = getSymbol(operations, operators, elementId);
      // inputString += symbol
      outputDiv.innerText += symbol;
    } else if (elementId === 'eq') {
      outputDiv.innerText = calculate(outputDiv.innerText); //changing the output display by calculating 
      // outputDiv.innerText = '';  //make a clear function to go here after they select equals
    }
  })
})












//////////////////////
// var outputDiv;
// var operators = ['+','-','*','/'];

// /**
//  * @function calculate
//  * @param  {string} mathExp {the expression to calculate}
//  * @return {number} {the result of the calculation or NaN if it couldn't be done}
//  */
// function calculate(mathExp){
//     try {
//        return eval(mathExp)
//     } catch (e) {
//        return NaN
//     }
// }

// let last;
// let elementId;

// document.addEventListener('DOMContentLoaded', function() {
//   outputDiv = document.getElementById('output');

//   document.addEventListener('click', function(event) {

//     switch (event.target.id) {
//       case 'add':
//         elementId = '+';
//         break;
//       case 'sub':
//         elementId = '-';
//         break;
//       case 'mul':
//         elementId = '*';
//         break;
//       case 'div':
//         elementId = '/';
//         break;
//       case 'eq':
//         if (isNaN(last)) {
//           return;
//         }
//         elementId = calculate(outputDiv.innerText);
//         break;
//       case 'clr':
//         elementId = '';
//         break;
//       case !isNaN(event.target.id):
//         elementId = event.target.id;
//     }

//     if (operators.includes(last) && operators.includes(elementId)) {
//       let a = outputDiv.innerText;
//       a = a.slice(0, -1);
//       outputDiv.innerText = a + elementId;
//     } else if (event.target.id === 'eq' || event.target.id === 'clr') {
//       outputDiv.innerText = elementId;
//     } else {
//       outputDiv.innerText += elementId;
//     }

//     last = elementId;
//   })
// })