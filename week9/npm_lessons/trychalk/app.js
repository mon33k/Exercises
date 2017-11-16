// Exercises







//Q8: Write a function called commandLineChalk that takes the arguments entered in the command line. The function should log out whatever was entered into the terminal, in a color of your choice. Try adding more command line argument options so you can specify the color, background color, etc. hint: use process.argv.

const chalk = require('chalk');

//Q1: Write a function called helloBlue that will console.log the string 'Hello world' in blue. 
// let helloBlue = (str) => {
//     console.log(chalk.blue(str))    
// }
// helloBlue("Hello World")

//Q2: Write a function called helloRed that will console.log the string 'Hello world' in red.
// let helloRed = (str) => {
//     console.log(chalk.red(str))    
// }
// helloRed("Hello World")

//Q3: Write a function called stringToColor. It should take two arguments: a string and a color. The function should log the string to the console in the given color. For example, stringToColor('this is a test', 'red') woll log "this is a test in red. //chalk.keyword('orange')('Some orange text')
// let stringToColor = (color, str) => {
//     console.log(chalk.keyword(color)(str))    
//     console.log(chalk[color](str))   //Another way to do it 
// }
// stringToColor("yellow", "Hello World");

//Dot or square braket notation
//chalk.color === chalk["color"]
//chalk.red === chalk[red] 

//Q4: Write a function called evensBlueOddsYellow that takes a string as an argument. It should log all even-indexed words in blue and all odd-indexed words in yellow. For example, evensBlueOddsYellow('this is a test') will log 'this' in yellow, 'is' in blue, 'a' in yellow, and 'test' in blue.
// const evensBlueOddsYellow = (str) => {
//     var str2Arr = str.split(' ');
//     let newArr = [];
//     str2Arr.map((ele, index) => {
//         switch(true) {
//             case index % 2 === 0:
//                 newArr.push(chalk.blue(ele))
//             break;

//             case index % 2 !== 0:
//                  newArr.push(chalk.yellow(ele))
//             break;
//         }
//     })
//     return newArr.join(' ');
// }
// console.log(evensBlueOddsYellow("This is a string"))

//Q5: Write a function called angryText that takes a string as an argument. It should log that string in red, underlined, and bold capital letters.
// const angryText = (str) => {
//      var red = chalk.red.underline.bold(str.toUpperCase())
//      console.log(red)

// }
// angryText("Text")

//Q6: Write a function called backgroundCyan that takes a string as an argument, and logs that string in white font color and cyan background-color (check the chalk documentation to see how to change background colors).
// const backgroundCyan = (str) => {
//     console.log(chalk.white.bgCyan(str))
// }

// backgroundCyan("Text input strings yeah")

//Q7: Write a function called boldFirstUnderlineLast that takes a string as an argument and logs the string, with the first word in bold and the last word underlined.

const boldFirstUnderlineLast = (str) => {
    var str2Arr = str.split(' ');
    let first = str2Arr[0]
    let last = str2Arr.length -1;
        if(str2Arr[0]) {
            return chalk.bold()
        } else if (str2Arr.length -1) {
            return chalk.underline()
        }
    })
    console.log(str2Arr.join(' '));
}

boldFirstUnderlineLast("string input ")

//------LEV EXAMPLE OF SOMETHING USING DOGS AND OBJECTS-----//
// //relevant for str to color
// const dog = {
//     name: "Pluto",
//     bark : function(){
//         console.log('woof')
//     }
// }

// console.log(dog["name"])
// dog.bark()
// dog["bark"]